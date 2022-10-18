// Destructuring {...}[...]
const user = {
    name: 'jaqueline',
    idade: 27,
    address: {
        street: 'Rua Galo Feliz',
        number: 311,
    },
  }; 
  
  //const address = user.address
  
      //Destructuring
  //const {address} = user //{"street":"Rua Galo Feliz","number":311}
  //document.body.innerText = JSON.stringify(address)
  
  //const {address, idade} = user
  //document.body.innerText = JSON.stringify({address, idade})
  function viewAge({idade}){
    return idade;
  }
  
  const {address, idade: age, nickname = 'Praça'} = user
  //document.body.innerText = JSON.stringify({address})
  
  //document.body.innerText = JSON.stringify({address, age})
  //document.body.innerText = JSON.stringify({address, age, nickname})
  document.body.innerText = viewAge(user)
  