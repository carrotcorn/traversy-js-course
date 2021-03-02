const user = { email: "jdoe@gmail.com" };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  //LOOKING AT 'HELLO WORLD AS A SYNTAX ERROR BECAUSE SINGLE ' EVALUATED JS AND IT THEN NEEDS TO BE WITHIN "" LIKE '"HELLO WORLD"'
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');
  //
 if(!user.name) {
    // throw 'User has no name';
    // // TO FORMAT AS SyntaxError below
    throw new SyntaxError('User has no name');
  } 
} catch (e) {
  // console.log(`${e.name}: ITS NULL STUPID`);
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  // runs regardless of what the error is
  console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
