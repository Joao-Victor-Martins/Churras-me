var carne
var cerveja
var bebidas



function calculando() {
    let adultos = document.getElementById("dadosAdultos")
    let criancas = document.getElementById("dadosCrianças")
    let duracao = document.getElementById("dadosHora")
    let res = document.getElementById("res")

    let adultos01 = Number(adultos.value)
    let criancas01 = Number(criancas.value)
    let duracao01 = Number(duracao.value)


    //----------!CONDIÇÃO PARA VERIFICAR OS DADOS!----------//

    if (adultos.value.length == 0 && criancas.value.length == 0) {
        alert("[ERRO] Digite um valor nas duas caixas de texto")

        //----------!CONDIÇÕES O TEMPO ACIMA DE 6!----------//

    } else if (adultos01 > 0 && criancas01 > 0 && duracao01 >= 6) {
        (carne = adultos01 * 650 + criancas01 * 325) / 1000
        cerveja = (adultos01 * 2000) / 355
        bebidas = (adultos01 * 1500 + criancas01 * 750) / 2000

        res.innerHTML = `<p>${carne} Kg de Carne</p> <p>${Math.ceil(cerveja)} Latas de Cerveja</p> <p>${Math.ceil(bebidas)} pet´s 2l de Bebidas</p>`

    } else if (adultos01 > 0 && duracao01 >= 6) {
        carne = (adultos01 * 650) / 1000
        cerveja = (adultos01 * 2000) / 355
        bebidas = (adultos01 * 1500) / 2000

        if (bebidas > 0) {
            res.innerHTML = `<p>${carne} Kg de Carne</p> <p>${Math.ceil(cerveja)} Latas de Cerveja</p> <p>${Math.ceil(bebidas)} pet´s 2l de Bebidas</p>`
        }

    } else if (criancas01 > 0 && duracao01 >= 6) {
        carne = (criancas01 * 325) / 1000
        cerveja = 0
        bebidas = (criancas01 * 750) / 2000

        if (bebidas > 0) {
            res.innerHTML = `<p>${carne} Kg de Carne</p> <p>${Math.ceil(cerveja)} Latas de Cerveja</p> <p>${Math.ceil(bebidas)} pet´s 2l de Bebidas</p>`
        }
        //----------!CONDIÇÕES O TEMPO ABAIXO DE 6!----------//

    } else if (adultos01 > 0 && criancas01 > 0) {
        carne = (adultos01 * 400 + criancas01 * 200) / 1000
        cerveja = (adultos01 * 1200) / 355
        bebidas = (adultos01 * 1000 + criancas01 * 500) / 2000

        if (bebidas > 0) {
            res.innerHTML = `<p>${carne} Kg de Carne</p> <p>${Math.ceil(cerveja)} Latas de Cerveja</p> <p>${Math.ceil(bebidas)} pet´s 2l de Bebidas</p>`
        }
    } else if (adultos01 > 0) {
        carne = (adultos01 * 400) / 1000
        cerveja = (adultos01 * 1200) / 355
        bebidas = (adultos01 * 1000) / 2000

        if (bebidas > 0) {
            res.innerHTML = `<p>${carne} Kg de Carne</p> <p>${Math.ceil(cerveja)} Latas de Cerveja</p> <p>${Math.ceil(bebidas)} pet´s 2l de Bebidas</p>`
        }
    } else if (criancas01 > 0) {
        carne = (criancas01 * 200) / 1000
        cerveja = 0
        bebidas = (criancas01 * 500) / 2000

        if (bebidas > 0) {
            res.innerHTML = `<p>${carne} Kg de Carne</p> <p>${Math.ceil(cerveja)} Latas de Cerveja</p> <p>${Math.ceil(bebidas)} pet´s 2l de Bebidas</p>`
        }
    }
}

function activeInfo() {
    let info = document.getElementById("info")

    info.innerHTML =  `<p>Carne = 400/200 gr por pessoa, se a duração for maior que 6 horas = 650/325 por pessoa;
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