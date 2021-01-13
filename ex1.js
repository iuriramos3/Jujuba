var endereco = {
    rua : "José Xerez de Souza",
    numero : 234,
    bairro : "Centro",
    cidade : "Bela Cruz"
}

function print(){
    return("Jujuba reside em " + endereco.cidade + " no bairro " + endereco.bairro + ", na rua " + endereco.rua + ", número " + endereco.numero)
}

console.log(print())