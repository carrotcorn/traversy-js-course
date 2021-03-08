const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Eric'});
    return object;
  }

  return {
    getInstance: function() { //why is this function of getInstance?
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);
//