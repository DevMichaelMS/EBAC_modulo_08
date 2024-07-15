const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const nomeA = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMin = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNomeAtividade = document.getElementById('nome-at');
    const inputNotaAtividade = document.getElementById('nota');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`);
    } else {
        nomeA.push(inputNome.value);
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
    
        const nota = parseFloat(inputNotaAtividade.value); 
    
        linha += `<td style="color: ${nota >= notaMin ? 'blue' : 'red'}">${nota}</td>`;
        linha += `<td>${nota >= notaMin ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaMediaFinal() {
    const mediaFinal = calculaMedia();

    document.getElementById('m-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('m-final-resultado').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;
};

function calculaMedia() {
    let somaNotas =0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}