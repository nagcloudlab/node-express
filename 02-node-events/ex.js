const EventEmitter = require("node:events");

// Event Emitter Example
class Door extends EventEmitter {
  open() {
    console.log("Door is opened");
    this.emit("open");
  }
  close() {
    console.log("Door is closed");
    this.emit("close");
  }
}

const door = new Door(); // instance of EventEmitter

//----------------------------------------------
// Light
//----------------------------------------------

door.on("open", () => {
  console.log("Light is ON");
});

door.on("close", () => {
  console.log("Light is OFF");
});

//----------------------------------------------
// Fan
//----------------------------------------------

door.on("open", () => {
  console.log("Fan is ON");
});

door.on("close", () => {
  console.log("Fan is OFF");
});

//--------------------------------------------

setTimeout(() => {
  door.open();
  setTimeout(() => {
    door.close();
  }, 2000);
}, 2000);

//--------------------------------------------
