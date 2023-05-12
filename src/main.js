import 'core-js/stable'
import 'regenerator-runtime/runtime'
// para navegadores mais antigos...

import './assets/css/style.css'

import selecTipoPag from './modules/seletorPix'
import timeStampNow from './modules/timeStamp'
import inputMask from './modules/inputMask'
import autocomplet from './modules/autocomplet'
import trazCond from './modules/trazCond'
import imprimirTela from './modules/imprimiTela'


selecTipoPag()
timeStampNow()
inputMask()
autocomplet()

document.addEventListener('click', e => {
    const el = e.target;
    const nomeClass = el.className.toLowerCase()
    if (nomeClass === 'limpar btn-form') {
        e.preventDefault()
        window.location.reload()
    } if (nomeClass === 'imprimir btn-form') {
        e.preventDefault()
        trazCond()
        imprimirTela()
        //validaCampos()
    }
});

const codCond = document.getElementById('codCond')
document.addEventListener('keyup', function () {
    trazCond()
})