// Rest Operator
const user = {
    name: 'jaqueline',
    idade: 27,
    address: {
        street: 'Rua Galo Feliz',
        number: 311,
    },
  }; 
  
  //const {name} = user;
  //document.body.innerText = JSON.stringify(user);
  
  // Rest Operator
  const { name, idade, ...rest } = user;
  //document.body.innerText =JSON.stringify(rest);
  
  const numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //old metod traverse Array
  //const first = numeral[0];
  //const second = numeral[1];
  //document.body.innerText = JSON.stringify({first, second})
  
      // Destructuring traverse Array
  //const [first, second] = numeral
  //document.body.innerText =JSON.stringify(first);                 // 1
  //document.body.innerText =JSON.stringify(second);               // 2
  //document.body.innerText =JSON.stringify({first, second});       // {"first":1,"second":2}
  
      // Destructuring Rest Operator
  //const [first, second, ...others] = numeral
  //document.body.innerText =JSON.stringify({first, second, others});
  
      //Jump Index Array indDestructuring Rest oprator 
  const [frist, , third, ...others] = numeral;
  document.body.innerText = JSON.stringify({frist, third, others});
  
  
  
  
  
  
  
  
  