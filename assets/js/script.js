let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let numeros = document.querySelector('.d-1-3')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-direita')

let etapaAtual = 0;
let numero = '';

(function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    numeroHTML = '<span>NUMERO: </span>';

    for (let index = 0; index < etapa.numeros; index++) {
        if (index === 0) {
            numeroHTML += '<div class="numero pisca"></div>'        
        }
        numeroHTML += '<div class="numero"></div>'        
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    numeros.innerHTML = numeroHTML;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
})()

function atualizaTela(){
    console.log('Finalizou de digitar o voto')
}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');

    if (elNumero !==null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if (elNumero.nextElementSibling !==null) {            
            elNumero.nextElementSibling.classList.add('pisca')
        } else{
            atualizaTela()
        }
    }
}

function branco(){
    alert("branco");
}
function corrige(){
    alert("corrige");
}
function confirma(){
    alert("confirma");
}
