
let adultos = document.getElementById("dadosAdultos")
let criancas = document.getElementById("dadosCrianças")
let duracao = document.getElementById("dadosHora")



function calculando() {

    let res = document.getElementById("res")

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)


    let qdtTotalCarne = carneTP(duracao01) * adultos01 + (carneTP(duracao01) / 2 * criancas01)
    let qdtTotalCerveja = cervejaTP(duracao01) * adultos01
    let qdtTotalBebidas = bebidaTP(duracao01) * adultos01 + (bebidaTP(duracao01) / 2 * criancas01)



    if (adultos.value.length == 0 && criancas.value.length == 0) {
        alert("[ERRO] Digite um valor nas duas caixas de texto")

    } else {
        res.innerHTML = `<h3>Quantidade</h3> <p>${qdtTotalCarne / 1000} Kg de Carne </p>`
        res.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
        res.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} pet´s 2l de Bebidas</p>`
    }

    function carneTP(duracao01) {
        if (duracao01 >= 6) {
            return 650
        } else {
            return 400
        }
    }

    function cervejaTP(duracao01) {
        if (duracao01 >= 6) {
            return 2000
        } else {
            return 1200
        }
    }

    function bebidaTP(duracao01) {
        if (duracao01 >= 6) {
            return 1500
        } else {
            return 1000
        }
    }
}
//-----------!INICIAR CALCULO DE CUSTO!-----------//
function calculandoCusto() {
    document.getElementById("popUpBackground").removeAttribute("hidden")

}

//-----------!VARIAVEIS GLOBAL PARA CALCULAR MOEDA!-----------//
let valorCarne = document.getElementById("precoCarneKg")
let valorCerveja = document.getElementById("precoCervejaLata")
let valorBebida = document.getElementById("precoBebida2L")
var resCalc = document.getElementById("valorPorUnidade")

//-----------!FUNÇÃO PARA CALCULAR EM REAL!-----------//
function calcReal() {
    let carneReal = Number(valorCarne.value)
    let cervejaReal = Number(valorCerveja.value)
    let bebidaReal = Number(valorBebida.value)

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)

    let qdtTotalCarne = carneTP(duracao01) * adultos01 + (carneTP(duracao01) / 2 * criancas01)
    let qdtTotalCerveja = cervejaTP(duracao01) * adultos01
    let qdtTotalBebidas = bebidaTP(duracao01) * adultos01 + (bebidaTP(duracao01) / 2 * criancas01)

    let totalCarne = (qdtTotalCarne / 1000) * carneReal
    let totalCerveja = (qdtTotalCerveja / 355) * cervejaReal
    let totalBebida = (qdtTotalBebidas / 2000) * bebidaReal

    resCalc.innerHTML = `<h3>Custo</h3> <p>${totalCarne.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} em carne</p>`
    resCalc.innerHTML += `<p>${totalCerveja.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} em cerveja</p>`
    resCalc.innerHTML += `<p>${totalBebida.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} em bebidas</p>`

    document.getElementById("popUpBackground").setAttribute("hidden", "hidden")

    function carneTP(duracao01) {
        if (duracao01 >= 6) {
            return 650
        } else {
            return 400
        }
    }
    function cervejaTP(duracao01) {
        if (duracao01 >= 6) {
            return 2000
        } else {
            return 1200
        }
    }
    function bebidaTP(duracao01) {
        if (duracao01 >= 6) {
            return 1500
        } else {
            return 1000
        }
    }
}

//-----------!FUNÇÃO PARA CALCULAR EM DOLAR!-----------//
function calcDolar() {
    let carneDolar = Number(valorCarne.value)
    let cervejaDolar = Number(valorCerveja.value)
    let bebidaDolar = Number(valorBebida.value)

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)

    let qdtTotalCarne = carneTP(duracao01) * adultos01 + (carneTP(duracao01) / 2 * criancas01)
    let qdtTotalCerveja = cervejaTP(duracao01) * adultos01
    let qdtTotalBebidas = bebidaTP(duracao01) * adultos01 + (bebidaTP(duracao01) / 2 * criancas01)

    let totalCarne = (qdtTotalCarne / 1000) * carneDolar * 4.7
    let totalCerveja = (qdtTotalCerveja / 355) * cervejaDolar * 4.7
    let totalBebida = (qdtTotalBebidas / 2000) * bebidaDolar * 4.7

    resCalc.innerHTML = `<h3>Custo</h3> <p>${totalCarne.toLocaleString("pt-br", { style: "currency", currency: "USD" })} em carne</p>`
    resCalc.innerHTML += `<p>${totalCerveja.toLocaleString("pt-br", { style: "currency", currency: "USD" })} em cerveja</p>`
    resCalc.innerHTML += `<p>${totalBebida.toLocaleString("pt-br", { style: "currency", currency: "USD" })} em bebidas</p>`

    document.getElementById("popUpBackground").setAttribute("hidden", "hidden")

    function carneTP(duracao01) {
        if (duracao01 >= 6) {
            return 650
        } else {
            return 400
        }
    }
    function cervejaTP(duracao01) {
        if (duracao01 >= 6) {
            return 2000
        } else {
            return 1200
        }
    }
    function bebidaTP(duracao01) {
        if (duracao01 >= 6) {
            return 1500
        } else {
            return 1000
        }
    }
}

//-----------!FUNÇÃO PARA CALCULAR EM EURO!-----------//
function calcEuro() {
    let carneEuro = Number(valorCarne.value)
    let cervejaEuro = Number(valorCerveja.value)
    let bebidaEuro = Number(valorBebida.value)

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)

    let qdtTotalCarne = carneTP(duracao01) * adultos01 + (carneTP(duracao01) / 2 * criancas01)
    let qdtTotalCerveja = cervejaTP(duracao01) * adultos01
    let qdtTotalBebidas = bebidaTP(duracao01) * adultos01 + (bebidaTP(duracao01) / 2 * criancas01)

    let totalCarne = (qdtTotalCarne / 1000) * carneEuro * 5.08
    let totalCerveja = (qdtTotalCerveja / 355) * cervejaEuro * 5.08
    let totalBebida = (qdtTotalBebidas / 2000) * bebidaEuro * 5.08

    resCalc.innerHTML = `<h3>Custo</h3> <p>${totalCarne.toLocaleString("pt-br", { style: "currency", currency: "EUR" })} em carne</p>`
    resCalc.innerHTML += `<p>${totalCerveja.toLocaleString("pt-br", { style: "currency", currency: "EUR" })} em cerveja</p>`
    resCalc.innerHTML += `<p>${totalBebida.toLocaleString("pt-br", { style: "currency", currency: "EUR" })} em bebidas</p>`

    document.getElementById("popUpBackground").setAttribute("hidden", "hidden")

    function carneTP(duracao01) {
        if (duracao01 >= 6) {
            return 650
        } else {
            return 400
        }
    }
    function cervejaTP(duracao01) {
        if (duracao01 >= 6) {
            return 2000
        } else {
            return 1200
        }
    }
    function bebidaTP(duracao01) {
        if (duracao01 >= 6) {
            return 1500
        } else {
            return 1000
        }
    }
}

//-----------!FUNÇÃO PARA CALCULAR EM IENE!-----------//
function calcYen() {
    let carneYen = Number(valorCarne.value)
    let cervejaYen = Number(valorCerveja.value)
    let bebidaYen = Number(valorBebida.value)

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)

    let qdtTotalCarne = carneTP(duracao01) * adultos01 + (carneTP(duracao01) / 2 * criancas01)
    let qdtTotalCerveja = cervejaTP(duracao01) * adultos01
    let qdtTotalBebidas = bebidaTP(duracao01) * adultos01 + (bebidaTP(duracao01) / 2 * criancas01)

    let totalCarne = (qdtTotalCarne / 1000) * carneYen * 0.037
    let totalCerveja = (qdtTotalCerveja / 355) * cervejaYen * 0.037
    let totalBebida = (qdtTotalBebidas / 2000) * bebidaYen * 0.037

    resCalc.innerHTML = `<h3>Custo</h3> <p>${Math.ceil(totalCarne).toLocaleString("pt-br", { style: "currency", currency: "JPY" })} em carne</p>`
    resCalc.innerHTML += `<p>${Math.ceil(totalCerveja).toLocaleString("pt-br", { style: "currency", currency: "JPY" })} em cerveja</p>`
    resCalc.innerHTML += `<p>${Math.ceil(totalBebida).toLocaleString("pt-br", { style: "currency", currency: "JPY" })} em bebidas</p>`

    document.getElementById("popUpBackground").setAttribute("hidden", "hidden")

    function carneTP(duracao01) {
        if (duracao01 >= 6) {
            return 650
        } else {
            return 400
        }
    }
    function cervejaTP(duracao01) {
        if (duracao01 >= 6) {
            return 2000
        } else {
            return 1200
        }
    }
    function bebidaTP(duracao01) {
        if (duracao01 >= 6) {
            return 1500
        } else {
            return 1000
        }
    }
}

function activeInfo() {
    let info = document.getElementById("info")

    info.innerHTML = `<p>Carne = 400/200 gr por pessoa, se a duração for maior que 6 horas = 650/325 por pessoa;
    <br>
    Cerveja = 1200 ml por adulto, se a duração for maior que 6 horas = 2000 ml por adulto;
    <br>
    Refrigerante ou Agua = 1000/500 ml por pessoa, se a duração for maior que 6 horas = 1500/750ml por pessoa;
    <br>
    Crianças os parâmetros são metade dos adultos; </p>`
}
// Carne - 400/200 gr por pessoa  + de 6 horas - 650/325
// Cerveja - 1200/600 ml por Pessoa + 6 horas - 2000/1000 ml
// Refrigerante/agua - 1000/500 ml por pessoa + 6 horas 1500/750 ml
// 1 lata de cerveja tem 375 ml

// Crianças valem por 0,5