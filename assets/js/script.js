let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let numeros = document.querySelector('.d-1-3')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-direita')

let etapaAtual = 0;
let numero = '';
let votoBranco = false;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    numero = '';
    votoBranco = false;
    numeroHTML = '<span>NUMERO: </span>';

    for (let index = 0; index < etapa.numeros; index++) {
        if (index === 0) {
            numeroHTML += '<div class="numero pisca"></div>'        
        } else{
            numeroHTML += '<div class="numero"></div>'        
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    numeros.innerHTML = numeroHTML;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
}

function atualizaTela(){
    let etapa = etapas[etapaAtual];
    let candidato  = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    
    if (candidato.length > 0 ) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';

        descricao.innerHTML = `
            Nome: ${candidato.nome} <br /> 
            Partido: ${candidato.partido}  <br />        
            Vice: ${candidato.partido}  <br />
        `;

        aviso.style.display = 'block';

        let fotosHTML = '';
        for (const i in candidato.fotos) {
            if (candidato.fotos[i].pequeno) {
                fotosHTML += ` 
                <div class="d-1-imagem pequeno">
                    <img src="/assets/img/${candidato.fotos[i].url}" alt="" />
                    ${candidato.fotos[i].legenda}
                </div>
                `;
            } else{
                fotosHTML += ` 
                <div class="d-1-imagem">
                    <img src="/assets/img/${candidato.fotos[i].url}" alt="" />
                    ${candidato.fotos[i].legenda}
                </div>
                `;
            }
        }
        lateral.innerHTML = fotosHTML;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `
            <div class="aviso--grande pisca">VOTO NULO</div>
        `;
    }
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
    corrige()
    votoBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = `
        <div class="aviso--grande pisca">VOTO EM BRANCO</div>
    `; 
}
function corrige(){
    comecarEtapa();
}
function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;
    if (votoBranco) {
        votoConfirmado = true;
        console.log("Confirmando como BRANCO")
    } else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        console.log("Confirmando como "+ numero)
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        } else {
            console.log("FIM!");
        }
    }
}

comecarEtapa()