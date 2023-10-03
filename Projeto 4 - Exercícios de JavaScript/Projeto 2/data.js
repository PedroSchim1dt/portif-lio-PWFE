function atualizarDataHora() {
    // Cria um objeto de data
    const dataHora = new Date()
    // Obtenha a data e a hora de acordo com as configurações do usuário
    const data = dataHora.toLocaleDateString()
    const hora = dataHora.toLocaleTimeString()
    // Atualize o conteúdo do parágrafo com a data e hora
    document.getElementById('data').innerHTML = `Data: ${data} - Hora: ${hora}`
}
// Chame a função
atualizarDataHora()
// Atualiza a chamada da função a cada 1000 milissegundos, que equivale a 1 segundo
setInterval(atualizarDataHora, 1000)