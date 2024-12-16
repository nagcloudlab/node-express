const EventEmitter = require("node:events");

// Event Emitter Example
class Door extends EventEmitter {
  open() {
    console.log("Door is opened");
    this.emit("open", { number: 3, floor: 4 });
  }
  close() {
    console.log("Door is closed");
    this.emit("close", { number: 3, floor: 4 });
  }
}

const door = new Door(); // instance of EventEmitter

//----------------------------------------------
// Light
//----------------------------------------------

door.on("open", (data) => {
  console.log("Light is ON", data);
});

door.on("close", (data) => {
  console.log("Light is OFF", data);
});

//----------------------------------------------
// Fan
//----------------------------------------------

door.on("open", (data) => {
  console.log("Fan is ON", data);
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
