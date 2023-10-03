var salario = document.getElementById("salario")
var res = document.getElementById("res")

function calcular() {
    
    if (salario.value < 1200) {
        var aumento = Number(salario.value) * 0.16
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else if (salario.value <= 2100) {
        var aumento = Number(salario.value) * 0.13
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else if (salario.value <= 3000) {
        var aumento = Number(salario.value) * 0.10
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else {
        var aumento = Number(salario.value) * 0.05
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
}