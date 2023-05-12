const codCond = document.getElementById('codCond')
const cond = document.getElementById('cond')
const condCNPJ = document.getElementById('condCNPJ')
const valorCod = codCond.value.trim()

export default function trazCond() {

    if (codCond.value === '') {
        cond.innerHTML = '-'
        condCNPJ.innerHTML = '-'
        // document.getElementById('msgErro').style.display = 'block'
        // setInterval(() => {
        //     document.getElementById('msgErro').style.display = 'none'
        // }, 7000)
    } else {
        try {
            let idCond = [];
            fetch("../src/database/condominios.json").then((response) => {
                response.json().then((data) => {
                    console.log(codCond.value)
                    data.map((cods) => {
                        if (cods.cod == codCond.value) {
                            cond.innerHTML = ''
                            cond.innerHTML = `
                            <td id="cond">${cods.condominio}</td>
                             `
                            condCNPJ.innerHTML = ''
                            condCNPJ.innerHTML = `
                            <td id="condCNPJ">${cods.cnpj}</td>
                             `
                        } else {
                            cond.innerHTML = ''
                            cond.innerHTML = 'condomínio não encontrado'
                            cond.innerHTML = 'condomínio não encontrado'
                            condCNPJ.innerHTML = 'CNPJ não encontrado'
                        }
                    })

                })
            })
        } catch (e) {
            console.error(e)
        }
    }
}