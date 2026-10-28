// Objeto que contém toda a história e fases da aventura
const historia = {
    0: {
        texto: "Seguindo o rio, você chega a uma ponte de madeira bastante antiga.",
        imagem: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        opcoes: [
            { texto: "Atravessar", proximoNo: 1 },
            { texto: "Voltar", proximoNo: 2 }
        ]
    },
    1: {
        texto: "A ponte aguentou o seu peso! Do outro lado, você descobre uma entrada secreta para uma caverna iluminada por cristais.",
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        opcoes: [
            { texto: "Entrar na caverna", proximoNo: 3 },
            { texto: "Recomeçar", proximoNo: 0 }
        ]
    },
    2: {
        texto: "Você decidiu voltar e acabou por se perder na floresta densa ao cair da noite.",
        imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        opcoes: [
            { texto: "Tentar novamente", proximoNo: 0 }
        ]
    },
    3: {
        texto: "Dentro da caverna, você encontra um baú antigo cheio de tesouros! Parabéns, completou a aventura!",
        imagem: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        opcoes: [
            { texto: "Jogar novamente", proximoNo: 0 }
        ]
    }
};

// Função para atualizar a interface com base no passo atual
function carregarCenario(idNo) {
    const cenarioAtual = historia[idNo];

    // Atualiza imagem e texto
    document.getElementById("imagem").src = cenarioAtual.imagem;
    document.getElementById("texto").innerText = cenarioAtual.texto;

    // Limpa os botões anteriores
    const containerBotoes = document.getElementById("botoes-container");
    containerBotoes.innerHTML = "";

    // Cria os novos botões com as respetivas opções
    cenarioAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opcao.texto;
        botao.onclick = () => carregarCenario(opcao.proximoNo);
        containerBotoes.appendChild(botao);
    });
}

// Inicia o jogo no nó 0 assim que a página carrega
window.onload = () => carregarCenario(0);
