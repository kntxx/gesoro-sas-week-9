export const Vehicle = (() => {
  function createVehicle(type, name) {
    return {
      type,
      name,
      start() {
        console.log(`${this.name} (${this.type}) `);
      }
    };
  }
  return { createVehicle };
})();
