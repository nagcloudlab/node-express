// Quick Overview on Promises ( ES6 )

// 1. Promises are a way to handle asynchronous operations.
// 2. Promises are a proxy for a value that will eventually become available.

//------------------------------
// Trainer
//------------------------------

const trainer = {
  getTrainingMaterial: function () {
    const executor = function (resolve, reject) {
      console.log("Trainer:: getting training material");
      setTimeout(function () {
        const material = "material-1";
        if (material) {
          console.log("Trainer:: got material");
          resolve(material); // push
        } else {
          console.log("Trainer:: no material found");
          reject(new Error("no material found"));
        }
      }, 3000);
    };
    const promise = new Promise(executor);
    return promise;
  },
};

//------------------------------
// Employee
//------------------------------

const employee = {
  doLearn_v1: function () {
    console.log("Employee:: learning started");
    //trainer.getTrainingMaterial(); // pull // blocking-call // sync
    const promise = trainer.getTrainingMaterial();
    promise
      .then(function (material) {
        console.log("Employee:: learning with material", material);
        // callback-1
        // callback-2
      })
      .catch(function (error) {
        console.error("Employee:: learning failed with error", error);
      });
  },
  doLearn_v2: async function () {
    console.log("Employee:: learning started");
    //trainer.getTrainingMaterial(); // pull // blocking-call // sync
    const promise = trainer.getTrainingMaterial();
    try {
      const material = await promise;
      console.log("Employee:: learning with material", material);
    } catch (error) {
      console.error("Employee:: learning failed with error", error);
    }
  },
  doWork: function () {
    console.log("Employee:: learning work");
    this.doLearn_v2();
    console.log("Employee:: with other work");
    //...
  },
};

employee.doWork();

//------------------------------
