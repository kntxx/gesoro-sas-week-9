export function registerButtonEvent(buttonId, callback) {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', callback);
}
