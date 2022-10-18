// Short Syntax
const pessoa = 'Vinicius';
const age = 27;

    //Old Metod
//const user = {
//    pessoa: pessoa,
//    age: age
//};

    // Declaration Proty Short Syntax
const user = {
  pessoa,
  age,
};

document.body.innerText = JSON.stringify(user)