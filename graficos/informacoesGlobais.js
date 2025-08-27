const url:'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {

    const resposta = await fetch(url)

    const dados = await resposta.json()

    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const trabalhadoresMundo = (dados.total_trabalhadores_mundo/1e9)
    const tempoDeTrabalho = perseInt (dados.tempo_de_deslocamento_para_trabalho)
}