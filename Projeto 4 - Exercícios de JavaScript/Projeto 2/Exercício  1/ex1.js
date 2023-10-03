var salario = document.getElementById("salario")
var quant_hr_normais = document.getElementById("quant_hr_normais")
var quant_hr_fds = document.getElementById("quant_hr_fds")
var res = document.getElementById("res")

function calcular() {
    var valorhora = Number(salario.value) / 200
    var horaextra = valorhora * Number(quant_hr_normais.value)
    var horafds = valorhora * 1.5 * Number(quant_hr_fds.value)
    res.innerHTML = 
    `<p>Valor da hora de trabalho: R$  ${valorhora.toFixed(2)}</p>
    <p>Quantidade de horas extras normais: ${quant_hr_normais.value} horas - Valor total: R$ ${horaextra.toFixed(2)}</p>
    <p>Quantidade de horas extras de final de semana: ${quant_hr_fds.value} horas - Valor total: R$ ${horafds.toFixed(2)}</p>
    <p>Valores totais a receber R$: ${(horaextra + horafds).toFixed(2)}`
}
