function mensagemNome(nome, segundos) {
    function mensagem1() {
        console.log("Olá, tudo bem, " + nome + "?")
    }

    return setTimeout(mensagem1, segundos)

}

mensagemNome("Koça", 5000)