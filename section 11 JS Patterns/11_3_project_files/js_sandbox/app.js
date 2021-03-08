const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Eric" });
    return object;
  }

  return {
    getInstance: function () {
      //why is this function of getInstance?
      // maybe because to get the instance of an object, the function has to be declared to be "of",
      // therefore getInstance of the Object, the function name translates to "getInstance of function(){ return instance }" because I am returning an instance of the object hence the name being getInstance: function meaning getInstance of object using the function to return the instance variable
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// instantiate object
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);
//
