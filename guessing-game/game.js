let numberGenerator = Math.floor(Math.random() * 100) // gerador de números aleatórios 
let kickButton = document.getElementById('kickButton')
let maxTentativas = 10
let palpitesFeitos = []

function adivinhe() {
    /*           captação de campos           */

    let palpite = Number(document.getElementById('palpite').value)
    let dicas = document.getElementById('dicas')
    let resultado = document.getElementById('resultado')
    let tentativas = document.getElementById('tentativas')

    /*                   validações                 */

    /*   valida se o número está entre 1 e 100    */

    if (palpite < 1 || palpite > 100) {
        window.alert('Digite um número entre 1 e 100!')
        return

        /*   Verifica se um valor já foi digitado      */

    } else if (palpitesFeitos.includes(palpite)) {
        window.alert(`O número ${palpite} já foi digitado.`)
        return // para de executar a função a partir daqui se a condição for verdadeira

    } else {
        /*  Se não foi digitado, adiciona no array                 */
        palpitesFeitos.push(palpite)

        /*    Verifica se o número gerado é maior ou menor que o palpite   */
        if (numberGenerator > palpite) {
            dicas.innerHTML = 'O número secreto é maior 👆'

        } else if (numberGenerator < palpite) {
            dicas.innerHTML = 'O número secreto é menor 👇'

        } else {
            resultado.innerHTML = 'Você acertou 🤩'
            tentativas.innerHTML = '' // limpa as tentativas
            dicas.innerHTML = ''  // limpa as dicas 
            kickButton.replaceWith(jogarNovamente) // substitui um botão por outro 
            jogarNovamente.innerHTML = 'Jogar novamente 🕹️'
            return
        }
    }

    atualizarTentativa() // chama função

    /*               Decrementa as tentativas          */

    function atualizarTentativa() {

        if (palpite >= 101 || palpite < 1) {
            maxTentativas = 10

        } else if (palpite < numberGenerator || palpite > numberGenerator) {
            maxTentativas--
            tentativas.innerHTML = `Tentativas restantes: ${maxTentativas}`
        }

        /* reinicia a página    */

        if (maxTentativas === 0) {
            tentativas.innerHTML = `Acabou as tentativas, o número era ${numberGenerator} 🤡`
            dicas.innerHTML = ''
            kickButton.replaceWith(reiniciar)
            reiniciar.innerHTML = 'Tentar novamente 🔁'
            maxTentativas = 10
        }
    }
}

document.getElementById('kickButton').addEventListener('click', adivinhe)




