//coloque seu código aqui
let bairros = {
    se: {
        'dengue': 0,
        'zika': 0,
        'chicho': 0,
        'febre': 0
    },
    liberdade: {
        'dengue': 0,
        'zika': 0,
        'chicho': 0,
        'febre': 0
    },
    itaim: {
        'dengue': 0,
        'zika': 0,
        'chicho': 0,
        'febre': 0
    },
    jabaquara: {
        'dengue': 0,
        'zika': 0,
        'chicho': 0,
        'febre': 0
    }
};



let bairroUsuario = document.querySelector('.bairro');
let botao = document.querySelector('.botao');
let doenca = document.querySelector('.doenca');

let casoDengue = document.querySelector('.dengue');
let casoZika = document.querySelector('.zika');
let casoChico = document.querySelector('.chico');
let casoFebre = document.querySelector('.febre');
let quantidadeCasos = document.querySelector(".numero");

let dadosModal = document.querySelector('#dados');

let seDengue = 0;
let seZika = 0;
let seChico = 0;
let seFebre = 0;
let liberdadeDengue = 0;
let liberdadeZika = 0;
let liberdadeChico = 0;
let liberdadeFebre = 0;

// quantidadeCasos.value += seDengue;

seDengue += quantidadeCasos.value;

let casos = parseInt(quantidadeCasos.value);

botao.onclick = () => {
    bairros = bairroUsuario.value
    doencas = doenca.value
    console.log(doenca.value)
    console.log(bairros);

    switch(bairros){
        case "se": {
            switch(doencas){
                case "dengue": {
                    casos += seDengue
                }

                case "zika": {
                    seZika += casos
                }
            }
        }
    }

    dadosModal.innerHTML = `No bairro ${bairros}, houveram ${seDengue} casos de ${doencas}`

}


const showButton = document.querySelector('.showButton')
const modal = document.querySelector('.modal')

function mostrarModal() {
    modal.classList.toggle('modal_show')
}
showButton.addEventListener('click', mostrarModal);


modal.addEventListener("click",mostrarModal)

//
// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () {
            console.log('Service Worker Registered');
        }, function (error) {
            console.error(error);
        });
}

