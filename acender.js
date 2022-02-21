const luz = document.getElementById('lampada');

const botao = document.getElementById('interruptor');

const iluminacao = document.getElementById('box');

let aceso = false

botao.addEventListener('click', () => {

    if(aceso == false) {

        luz.src = "./lampada-acesa.png"
        aceso = true
        iluminacao.style.background = " radial-gradient(yellow, white)";
        botao.style.background = " linear-gradient(to right, gray 50%, white 50%)"
    }

    else{
        luz.src = "./lampada-apagada.png"
        aceso = false
        iluminacao.style.background = 'white';
        botao.style.background = " linear-gradient(to right, white 50%, gray 50%)"
    }

})