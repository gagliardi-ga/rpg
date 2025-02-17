
const racas = {
    humano: { forca: 6, destreza: 6, inteligencia: 6, vigor: 6, carisma: 6, vitalidade: 10 },
    elfo: { forca: 5, destreza: 8, inteligencia: 8, vigor: 4, carisma: 5, vitalidade: 10 },
    anao: { forca: 8, destreza: 5, inteligencia: 5, vigor: 8, carisma: 4, vitalidade: 12 }
};

const classes = {
    guerreiro: [
        { 
            nome: "Golpe Poderoso", 
            descricao: "Um ataque devastador que causa dano extra.",
            dano: "1d10 /nível",
            bonus: "+ str"
        },
        { 
            nome: "Defesa de Ferro", 
            descricao: "Aumenta a defesa do guerreiro temporariamente.",
            dano: '-',
            bonus: "+ 5 CA /2 turnos"
        },
        { 
            nome: "Grito de Batalha", 
            descricao: "Um grito que inspira aliados, aumentando o ataque deles.",
            dano: '-',
            bonus: "+ 1 Dano /Aliados"
        },
        { 
            nome: "Investida", 
            descricao: "O guerreiro corre em direção ao inimigo, causando dano e empurrando-o em 10ft.",
            dano: "1d8 /nível",
            bonus: "+ str"
        },
        { 
            nome: "Tornado de Lâminas", 
            descricao: "O guerreiro gira com sua arma, atacando todos os inimigos ao redor, com um range de 10ft.",
            dano: "1d4 /nível",
            bonus: "+ str / + dex"
        }
    ],
    mago: [
        { 
            nome: "Bola de Fogo", 
            descricao: "Lança uma bola de fogo que explode ao impactar, causando dano de fogo em uma área. Alcance de 80ft.",
            dano: "1d8 /nível",
            bonus: "+ int"
        },
        { 
            nome: "Raio Arcano", 
            descricao: "Dispara um feixe de energia arcana concentrada. Alcance de 80ft.",
            dano: "1d10 /nível",
            bonus: "+ int"
        },
        { 
            nome: "Escudo Mágico", 
            descricao: "Cria um escudo mágico ao redor do mago, absorvendo danos.",
            dano: '-',
            bonus: "+ 3 CA /2 turnos"
        },
        { 
            nome: "Torção do Vórtice", 
            descricao: "Permite ao mago se deslocar instantaneamente para um local visível, também é possível deslocar objetos ou criaturas médias.",
            dano: '-',
            bonus: "Distância: 80ft."
        },
        { 
            nome: "Invisibilidade", 
            descricao: "Torna o mago invisível por um curto período.",
            dano: '-',
            bonus: '1 turno'
        }
    ],
    druida: [
        { 
            nome: "Transformação Animal", 
            descricao: "Transforma-se em um animal (lobo, urso, águia, etc.).",
            dano: '-',
            bonus: '-'
        },
        { 
            nome: "Cura da Natureza", 
            descricao: "Cura a si mesmo ou um aliado usando o poder da natureza.",
            dano: '-',
            bonus: "+ 5 PS"
        },
        { 
            nome: "Raízes Prendentes", 
            descricao: "Invoca raízes do solo para prender um inimigo por 2 turnos. O alvo deve jogar um teste de salvaguarda superior a 10 para escapar.",
            dano: '-',
            bonus: "Distância: 70ft."
        },
        { 
            nome: "Chuva de Espinhos", 
            descricao: "Lança espinhos de plantas em uma área, causando dano a todos os inimigos nela.",
            dano: "1d8 /nível",
            bonus: '-'
        },
        { 
            nome: "Comunhão com a Natureza", 
            descricao: "Permite ao druida se comunicar e obter informações dos espíritos da natureza sem a necessidade de um teste de habilidade.",
            dano: '-',
            bonus: '+ 1 Dado'
        }
    ],
    cacador: [
        { 
            nome: "Tiro Preciso", 
            descricao: "Um tiro com alta precisão que causa dano crítico.",
            dano: "1d10 /nível",
            bonus: '-'
        },
        { 
            nome: "Armadilha de Urso", 
            descricao: "Coloca uma armadilha que prende e causa dano ao inimigo que a acionar.",
            dano: "1d20",
            bonus: '-'
        },
        { 
            nome: "Companheiro Animal", 
            descricao: "Convoca um animal para lutar ao lado do caçador. O animal consome uma ação bônus do jogador.",
            dano: "1d4 /nível",
            bonus: "+dex"
        },
        { 
            nome: "Camuflagem", 
            descricao: "O caçador se mistura ao ambiente, tornando-se difícil de detectar.",
            dano: '-',
            bonus: "+ 5 CA /2 turnos"
        },
        { 
            nome: "Tiro Explosivo", 
            descricao: "Um tiro que explode ao impactar, causando dano em área de 10ft de raio.",
            dano: "1d4 /nível",
            bonus: "+dex"
        }
    ],
    clerigo: [
        { 
            nome: "Cura Divina", 
            descricao: "Cura um aliado com o poder divino.",
            dano: '-',
            bonus: "+ 3PS"
        },
        { 
            nome: "Escudo de Fé", 
            descricao: "Cria um escudo protetor ao redor de um aliado, aumentando em 6 pontos sua CA por 1 turno.",
            dano: '-',
            bonus: '+ 6 CA /1 turno'
        },
        { 
            nome: "Luz Sagrada", 
            descricao: "Um feixe de luz sagrada que causa dano a inimigos e cura aliados no caminho.",
            dano: "1d12 /nível",
            bonus: '-'
        },
        { 
            nome: "Bênção", 
            descricao: "Abençoa um aliado, adicionando 1d4 no próximo dano do alvo selecionado.",
            dano: '-',
            bonus: '+ 1D4 Dano'
        },
        { 
            nome: "Crux Magnum", 
            descricao: "Centraliza a cruz divina em si, causando um dano em área no formato de uma cruz, 20ft. para cada lado.",
            dano: "1d8 /nível",
            bonus: "+ int"
        }
    ],
    bardo: [
        { 
            nome: "Canção de Inspiração", 
            descricao: "Toca uma melodia que inspira aliados, adicionando 1d4 na rolagem de dano.",
            dano: '-',
            bonus: '+ 1D4 Dano'
        },
        { 
            nome: "Grito Desmoralizante", 
            descricao: "Um grito que desmoraliza os inimigos, reduzindo sua CA em 4 pontos.",
            dano: '-',
            bonus: '- 4 CA /1 turno'
        },
        { 
            nome: "Maçãs do Éden", 
            descricao: "Uma música que cura 4 PS dos aliados à 20ft. de distância.",
            dano: '-',
            bonus: '+ 4PS'
        },
        { 
            nome: "Encantamento", 
            descricao: "Usa uma música mágica para controlar ou influenciar um inimigo por 1 turno. Não funciona em chefes.",
            dano: '-',
            bonus: '-'
        },
        { 
            nome: "Canção Dissonante", 
            descricao: "Uma performance que causa dano na direção de um feixe, atordoando todos que estão nesse caminho, incluindo aliados.",
            dano: "1d12 /nível",
            bonus: "-"
        }
    ]
};



function atualizaAtributos() {
    const raca = document.getElementById('raca').value;
    const classe = document.getElementById('classe').value;
    const nivel = parseInt(document.getElementById('nivel').value);
    
    // Atualiza os atributos básicos de acordo com a raça
    if (raca) {
        const atributos = racas[raca];
        document.getElementById('forca').value = atributos.forca + ' +' + Math.floor(atributos.forca/4);
        document.getElementById('destreza').value = atributos.destreza + ' +' + Math.floor(atributos.destreza/4);
        document.getElementById('inteligencia').value = atributos.inteligencia + ' +' + Math.floor(atributos.inteligencia/4);
        document.getElementById('vigor').value = atributos.vigor + ' +' + Math.floor(atributos.vigor/4);
        document.getElementById('carisma').value = atributos.carisma + ' +' + Math.floor(atributos.carisma/4);
        document.getElementById('vidaMaxima').innerHTML = atributos.vitalidade + (atributos.vigor+Math.floor(atributos.vigor/4))*2;
        document.getElementById('vidaAtual').value = atributos.vitalidade + (atributos.vigor+Math.floor(atributos.vigor/4))*2;
        document.getElementById('vidaAtual').max = atributos.vitalidade + (atributos.vigor+Math.floor(atributos.vigor/4))*2;
        document.getElementById('ca').value = 12 + Math.floor((atributos.inteligencia + Math.floor(atributos.inteligencia/4))/4);

        document.getElementById('proForca').innerHTML = '+' + Math.floor((document.getElementById('forca').value.split(' ')[0])/4);
        document.getElementById('proAtletismo').innerHTML = '+' + Math.floor((document.getElementById('destreza').value.split(' ')[0])/4);
        document.getElementById('proHistoria').innerHTML = '+' + Math.floor((document.getElementById('inteligencia').value.split(' ')[0])/4);
        document.getElementById('proIntimidacao').innerHTML = '+' + Math.floor((document.getElementById('carisma').value.split(' ')[0])/4);
        document.getElementById('proDeducao').innerHTML = '+' + Math.floor((document.getElementById('carisma').value.split(' ')[0])/4);
        document.getElementById('proNatureza').innerHTML = '+' + Math.floor((document.getElementById('inteligencia').value.split(' ')[0])/4);
        document.getElementById('proFurtividade').innerHTML = '+' + Math.floor((document.getElementById('destreza').value.split(' ')[0])/4);
        
    }
}


function atualizaAtributosPontos() {

    const raca = document.getElementById('raca').value;
    const classe = document.getElementById('classe').value;
    const nivel = parseInt(document.getElementById('nivel').value);
    const dexTotal = parseInt(document.getElementById('destreza').value.split(' ')[0]) + parseInt(document.getElementById('destreza').value.split('+')[1]);

    const atributos = racas[raca];
    
    document.getElementById('vidaMaxima').innerHTML = atributos.vitalidade + document.getElementById('vigor').value.split(' ')[0]*2 + parseInt(document.getElementById('vigor').value.split('+')[1])*2;
    document.getElementById('ca').value = 12 + Math.floor(dexTotal/4);

    document.getElementById('vidaAtual').max = atributos.vitalidade + document.getElementById('vigor').value.split(' ')[0]*2 + parseInt(document.getElementById('vigor').value.split('+')[1])*2;

    document.getElementById('proForca').innerHTML = '+' + Math.floor((document.getElementById('forca').value.split(' ')[0])/4);
    document.getElementById('proAtletismo').innerHTML = '+' + Math.floor((document.getElementById('destreza').value.split(' ')[0])/4);
    document.getElementById('proHistoria').innerHTML = '+' + Math.floor((document.getElementById('inteligencia').value.split(' ')[0])/4);
    document.getElementById('proIntimidacao').innerHTML = '+' + Math.floor((document.getElementById('carisma').value.split(' ')[0])/4);
    document.getElementById('proDeducao').innerHTML = '+' + Math.floor((document.getElementById('carisma').value.split(' ')[0])/4);
    document.getElementById('proNatureza').innerHTML = '+' + Math.floor((document.getElementById('inteligencia').value.split(' ')[0])/4);
    document.getElementById('proFurtividade').innerHTML = '+' + Math.floor((document.getElementById('destreza').value.split(' ')[0])/4);
}



document.getElementById('raca').addEventListener('change', atualizaAtributos);


function atualizaHabilidades() {
    // Atualiza as habilidades de acordo com a classe
    if (classe) { 
        const classe = document.getElementById('classe').value;
        const habilidades = classes[classe]; 
        const listaHabilidades = document.getElementById('listaHabilidades'); 
        listaHabilidades.innerHTML = ''; // Limpa a tabela antes de adicionar novos itens 
    
        habilidades.forEach(habilidade => { 
            const div = document.createElement('div'); // ✅ Criando uma linha corretamente 
            div.classList.add("habilidade-card");
    
            div.innerHTML = `
                <text class="habilidade-info-name">${habilidade.nome}</text>
                <text class="habilidade-info-name">${habilidade.dano}</text>
                <text class="habilidade-info-name">${habilidade.bonus}</text>
            `;
    
            listaHabilidades.appendChild(div); // ✅ Adiciona a linha à tabela
        });
    }
}

document.getElementById('classe').addEventListener('change', atualizaHabilidades);


function atualizarPontosDistribuicao() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const pontosDistribuicao = (nivel + 1) * 2 -
    (parseInt(document.getElementById('forca').value) 
                                    + parseInt(document.getElementById('destreza').value)
                                    + parseInt(document.getElementById('inteligencia').value)
                                    + parseInt(document.getElementById('vigor').value)
                                    + parseInt(document.getElementById('carisma').value) - 26);
    document.getElementById('pontosRestantes').innerText = `Pontos restantes para distribuir: ${pontosDistribuicao}`;
}

document.getElementById('nivel').addEventListener('input', atualizarPontosDistribuicao);


function incrementarAtributo(atributo) {
    const atributoInput = document.getElementById(atributo);
    let valorAtual = parseInt(atributoInput.value);
    const mod = Math.floor(parseInt(valorAtual + 1)/4);
    const nivel = parseInt(document.getElementById('nivel').value);
    const pontosDistribuicao = parseInt(document.getElementById('pontosRestantes').innerText.split(': ')[1]);
    if (pontosDistribuicao > 0) {
        atributoInput.value = valorAtual + 1 + ' +' + mod;
        atualizarPontosDistribuicao();
        atualizaAtributosPontos();
    }
}

function decrementarAtributo(atributo) {
    const atributoInput = document.getElementById(atributo);
    let valorAtual = parseInt(atributoInput.value);
    const mod = Math.floor(parseInt(valorAtual - 1)/4);
    const raca = document.getElementById('raca').value;
    const atributosBase = racas[raca];
    const valorBase = atributosBase[atributo];
    
    if (valorAtual > valorBase) {
        atributoInput.value = valorAtual - 1 + ' +' + mod;
        atualizarPontosDistribuicao();
        atualizaAtributosPontos();
    }
    atualizarAtributoMod(atributo);

}
