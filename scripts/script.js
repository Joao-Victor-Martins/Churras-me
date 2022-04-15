
let adultos = document.getElementById("dadosAdultos")
let criancas = document.getElementById("dadosCrianças")
let duracao = document.getElementById("dadosHora")



function calculando(qdtTotalCarne) {

    let res = document.getElementById("res")

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)


    var qdtTotalCarne = Number(carneTP(duracao01) * adultos01 + (carneTP(duracao01) / 2 * criancas01))
    let qdtTotalCerveja = cervejaTP(duracao01) * adultos01
    let qdtTotalBebidas = bebidaTP(duracao01) * adultos01 + (bebidaTP(duracao01) / 2 * criancas01)



    if (adultos.value.length == 0 && criancas.value.length == 0) {
        alert("[ERRO] Digite um valor nas duas caixas de texto")

    } else {
        res.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne </p>`
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

function calculandoCusto() {
    document.getElementById("formvalor").removeAttribute("hidden")

}

var valorCarne = document.getElementById("precoCarneKg")
let valorCerveja = document.getElementById("precoCervejaLata")
let valorBebida = document.getElementById("precoBebida2L")

var resCalc = document.getElementById("valorPorUnidade")

let varGeral = document.getElementById("valueTotal")
let varInd = document.getElementById("valueInd")

function calcReal(qdtTotalCarne) {
    let carneReal = Number(valorCarne.value)
    let cervejaReal = Number(valorCerveja.value)
    let bebidaReal = Number(valorBebida.value)

    
    let calctotalReal = carneReal * qdtTotalCarne

    resCalc.innerHTML = `${calctotalReal}`

    document.getElementById("formvalor").setAttribute("hidden", "hidden")
}
function calcDolar() {

}
function calcEuro() {

}
function calcYen() {

}

function valorTotal(varGeral, varInd) {
    // if (varGeral == checked && varInd == checked) {

    // }
}
function valorGeral1(varGeral) {

}
function valorInd1(varInd) {

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