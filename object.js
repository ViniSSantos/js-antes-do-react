// Objetos

const user = {
    name: 'jaqueline',
    idade: 27,
    address: {
        street: 'Rua Galo Feliz',
        number: 311,
    },
  };
  
  //document.body.innerText = ('name' in user);                               // = true
  //document.body.innerText = ('nickname' in user);                          // = false
  //document.body.innerText = Object.keys(user);                            // name,idade,address
  //document.body.innerText = JSON.stringify(Object.values(user));         // jaqueline,27,[object Object]
  document.body.innerText = JSON.stringify(Object.entries(user))