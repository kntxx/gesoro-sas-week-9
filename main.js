import { registerButtonEvent } from './eventModule.js';
import { Vehicle } from './factoryModule.js';
import { EventEmitter } from './observerModule.js';
import { calculateSpeed } from './compositionModule.js';

const dashboardEvent = new EventEmitter();
const car = Vehicle.createVehicle('Car', 'Toyota');

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');

  registerButtonEvent('btnStart', () => {
    dashboardEvent.emit('engineStart');
  });

  registerButtonEvent('btnSpeed', () => {
    const speed = calculateSpeed(170, 2);
    output.textContent = `Current speed: ${speed} km/h`;
  });
});

dashboardEvent.on('engineStart', () => {
  const output = document.getElementById('output');
  output.textContent = 'Toyota engine started!';
});
