// Procedural uptempo music + SFX via the Web Audio API — synthesized,
// no audio files, no external APIs. Music plays during Test/Öva/Bygg
// upp rounds; SFX play on every answer regardless of mode.

let soundOn = true;
try {
  const savedSound = localStorage.getItem('tabelltraning_sound');
  if (savedSound === 'off') soundOn = false;
} catch (e) { /* localStorage unavailable — fall back to default */ }

let audioCtx = null;
let masterGain = null;
let musicGain = null;
let sfxGain = null;
let musicTimer = null;
let musicStep = 0;
let nextStepTime = 0;

const BPM = 152;
const STEP_DUR = 60 / BPM / 2; // 8th notes
const ROOT = 60; // C4
const SCALE = [0, 2, 4, 7, 9]; // major pentatonic semitone offsets
const LEAD_PATTERN = [0, 2, 4, 2, 0, 2, 4, 2, 1, 3, 4, 3, 1, 3, 4, 3];
const BASS_PATTERN = [0, -1, -1, -1, 0, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, -1];
const KICK_PATTERN = [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0];
const HAT_PATTERN = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function ensureAudio() {
  if (audioCtx) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  audioCtx = new Ctx();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = soundOn ? 1 : 0;
  masterGain.connect(audioCtx.destination);
  musicGain = audioCtx.createGain();
  musicGain.gain.value = 0.18;
  musicGain.connect(masterGain);
  sfxGain = audioCtx.createGain();
  sfxGain.gain.value = 0.35;
  sfxGain.connect(masterGain);
}

export function isSoundOn() {
  return soundOn;
}

export function setSoundOn(on) {
  ensureAudio();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  soundOn = on;
  try { localStorage.setItem('tabelltraning_sound', on ? 'on' : 'off'); } catch (e) { /* ignore */ }
  if (masterGain) masterGain.gain.value = on ? 1 : 0;
}

function playTone(freq, time, dur, type, peakGain, dest) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(peakGain, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  osc.connect(gain);
  gain.connect(dest);
  osc.start(time);
  osc.stop(time + dur + 0.02);
}

function playKick(time) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(140, time);
  osc.frequency.exponentialRampToValueAtTime(45, time + 0.12);
  gain.gain.setValueAtTime(0.9, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
  osc.connect(gain);
  gain.connect(musicGain);
  osc.start(time);
  osc.stop(time + 0.16);
}

function playHat(time) {
  const bufferSize = Math.floor(audioCtx.sampleRate * 0.03);
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 7000;
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.25, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(musicGain);
  noise.start(time);
  noise.stop(time + 0.03);
}

function scheduleStep(step, time) {
  if (KICK_PATTERN[step]) playKick(time);
  if (HAT_PATTERN[step]) playHat(time);
  const leadIdx = LEAD_PATTERN[step];
  if (leadIdx >= 0) {
    const midi = ROOT + 12 + SCALE[leadIdx];
    playTone(midiToFreq(midi), time, STEP_DUR * 0.9, 'square', 0.05, musicGain);
  }
  const bassIdx = BASS_PATTERN[step];
  if (bassIdx >= 0) {
    const midi = ROOT - 12 + SCALE[bassIdx];
    playTone(midiToFreq(midi), time, STEP_DUR * 0.9, 'triangle', 0.09, musicGain);
  }
}

function schedulerTick() {
  while (nextStepTime < audioCtx.currentTime + 0.1) {
    scheduleStep(musicStep % 16, nextStepTime);
    nextStepTime += STEP_DUR;
    musicStep++;
  }
}

export function startMusic() {
  ensureAudio();
  if (!audioCtx || musicTimer) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  musicGain.gain.value = 0.18;
  musicStep = 0;
  nextStepTime = audioCtx.currentTime + 0.05;
  schedulerTick();
  musicTimer = setInterval(schedulerTick, 25);
}

export function stopMusic() {
  if (!musicTimer) return;
  clearInterval(musicTimer);
  musicTimer = null;
  if (musicGain && audioCtx) {
    const now = audioCtx.currentTime;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(musicGain.gain.value, now);
    musicGain.gain.linearRampToValueAtTime(0.0001, now + 0.15);
  }
}

export function playCorrectSfx() {
  if (!audioCtx) return;
  const time = audioCtx.currentTime;
  playTone(880, time, 0.08, 'triangle', 0.28, sfxGain);
  playTone(1318.5, time + 0.07, 0.12, 'triangle', 0.24, sfxGain);
}

export function playWrongSfx() {
  if (!audioCtx) return;
  playTone(160, audioCtx.currentTime, 0.18, 'sawtooth', 0.18, sfxGain);
}
