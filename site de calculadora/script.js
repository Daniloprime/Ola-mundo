
function calcular(){
    var n1 = document.querySelector('#txt1') 
    var n2 = document.querySelector('#txt2')

    var somar = Number(n1.value) + Number(n2.value)

    res.innerHTML = `o Resultado é ${somar}`
}

function calcular(){
    var n1 = document.querySelector('#txt1') 
    var n2 = document.querySelector('#txt2')

    var subtrair = Number(n1.value) - Number(n2.value)

    res.innerHTML = `o Resultado é ${subtrair}`
}

function calcular(){
    var n1 = document.querySelector('#txt1') 
    var n2 = document.querySelector('#txt2')

    var dividir = Number(n1.value) / Number(n2.value)

    res.innerHTML = `o Resultado é ${dividir}`
}

function calcular(){
    var n1 = document.querySelector('#txt1') 
    var n2 = document.querySelector('#txt2')

    var multi = Number(n1.value) * Number(n2.value)

    res.innerHTML = `o Resultado é ${multi}`
}

function calcular(){
    var n3 = document.querySelector('#txt3') 
    var n4 = document.querySelector('#txt4')

    var media = (Number(n3.value) + Number(n4.value)) / 2

    res.innerHTML = `o Resultado é ${media}`
}

function entrar(){
    var entra = document.querySelector('botao')

    addEventListener('onmouseenter').color = 'red' 
}
