const user = {
    name: 'jaqueline',
    idade: 27,
    address: {
        street: 'Rua Galo Feliz',
        number: 311,
        bloco: {
            code: '98778865',
            index: 'A'
        },
        showFullAddress() {
            return 'Ok'
        }
    },
};

//document.body.innerText = user.address.street // Rua Galo feliz

//document.body.innerText = user.address ? user.address.street : 'Não informado' //Verificar (if)? Se tiver, trás, :(else) 'erro'.

//Old metod 'Que horror' 

//document.body.innerText = user.address
//    ? user.address.bloco
//        ? user.address.bloco.code
//       : 'Não informado'
//    : 'Não Informado' 


//Optional chaining

// document.body.innerText = user.address?.bloco?.code ?? 'Não Informado'; // Verifica e passa adiante ??(ou)

document.body.innerText = user.address?.showFullAddress?.() // ?. Só chama caso exista


// const key = 'street';
// document.body.innerText = user.address[key]
