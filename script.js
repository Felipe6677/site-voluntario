const animaisData = [
    {
        id: 1,
        nome: "Max",
        tipo: "cachorro",
        raca: "Golden Retriever",
        idade: "2 anos",
        genero: "Macho",
        descricao: "Max é um cachorro alegre e carinhoso que adora brincar e receber afeto. Ele é ótimo com crianças e outras famílias.",
        icone: "🐕",
        historico: [
            { data: "01/05/2024", evento: "Resgatado de situação de rua" },
            { data: "10/05/2024", evento: "Vacinação e check-up veterinário completo" },
            { data: "20/05/2024", evento: "Treinamento básico concluído" }
        ]
    },
    {
        id: 2,
        nome: "Luna",
        tipo: "gato",
        raca: "Siamês",
        idade: "1 ano",
        genero: "Fêmea",
        descricao: "Luna é uma gata elegante e tranquila, perfeita para viver em apartamento. Gosta de estar perto de pessoas e receber carinho.",
        icone: "🐱",
        historico: [
            { data: "15/04/2024", evento: "Acolhimento na instituição" },
            { data: "20/04/2024", evento: "Esterilização realizada" },
            { data: "01/05/2024", evento: "Pronta para adoção" }
        ]
    },
    {
        id: 3,
        nome: "Rex",
        tipo: "cachorro",
        raca: "Pastor Alemão",
        idade: "3 anos",
        genero: "Macho",
        descricao: "Rex é inteligente, leal e protetor. Precisa de um tutor experiente e com espaço para exercício. Excelente cão de guarda.",
        icone: "🐕",
        historico: [
            { data: "01/03/2024", evento: "Chegada ao abrigo" },
            { data: "15/03/2024", evento: "Avaliação comportamental" },
            { data: "30/03/2024", evento: "Treinamento avançado iniciado" }
        ]
    },
    {
        id: 4,
        nome: "Whiskers",
        tipo: "gato",
        raca: "Gato Persa",
        idade: "2 anos",
        genero: "Macho",
        descricao: "Whiskers é calmo e afetuoso, adorando relaxar no colo. Precisa de escovação regular e ambiente tranquilo.",
        icone: "🐱",
        historico: [
            { data: "10/04/2024", evento: "Resgatado de forma negligenciada" },
            { data: "15/04/2024", evento: "Tratamentos veterinários iniciados" },
            { data: "25/04/2024", evento: "Recuperação completa" }
        ]
    },
    {
        id: 5,
        nome: "Thumper",
        tipo: "coelho",
        raca: "Coelho Holandês",
        idade: "1 ano",
        genero: "Macho",
        descricao: "Thumper é dócil e curioso. Precisa de espaço para pular e explorar. Ideal para famílias que entendem suas necessidades.",
        icone: "🐰",
        historico: [
            { data: "20/04/2024", evento: "Chegada ao centro de resgate" },
            { data: "25/04/2024", evento: "Avaliação de saúde" },
            { data: "05/05/2024", evento: "Pronto para nova família" }
        ]
    },
    {
        id: 6,
        nome: "Bella",
        tipo: "cachorro",
        raca: "Labrador",
        idade: "4 anos",
        genero: "Fêmea",
        descricao: "Bella é uma mãe amorosa e paciente. Adora famílias com crianças e gosta muito de água. Excelente companheira.",
        icone: "🐕",
        historico: [
            { data: "01/02/2024", evento: "Entrega do tutor anterior" },
            { data: "05/02/2024", evento: "Exames completos" },
            { data: "15/02/2024", evento: "Aclimatação e socialização" }
        ]
    },
    {
        id: 7,
        nome: "Pipoca",
        tipo: "hamster",
        raca: "Hamster Sírio",
        idade: "8 meses",
        genero: "Fêmea",
        descricao: "Pipoca é uma hamster curiosa e ativa. Adora brincar em sua roda e explorar túneis. Perfeita para quem gosta de animais pequenos.",
        icone: "🐹",
        historico: [
            { data: "10/03/2024", evento: "Resgatada de abandono" },
            { data: "15/03/2024", evento: "Avaliação veterinária realizada" },
            { data: "01/05/2024", evento: "Pronta para adoção" }
        ]
    },
    {
        id: 8,
        nome: "Spike",
        tipo: "porco-espinho",
        raca: "Porco-Espinho Africano",
        idade: "1 ano",
        genero: "Macho",
        descricao: "Spike é um porco-espinho dócil e fascinante. Requer cuidados especiaizados mas é amigável e curioso. Excelente para famílias pacientes.",
        icone: "🦔",
        historico: [
            { data: "05/02/2024", evento: "Acolhimento na instituição" },
            { data: "10/02/2024", evento: "Terapia e cuidados especializados" },
            { data: "20/04/2024", evento: "Pronto para novo lar" }
        ]
    },
    {
        id: 9,
        nome: "Pixo",
        tipo: "porquinho-da-india",
        raca: "Porquinho da Índia",
        idade: "1 ano",
        genero: "Macho",
        descricao: "Pixo é carinhoso, barulhento e sociável. Adora interagir com pessoas e precisa de espaço para pular. Ideal para famílias com crianças.",
        icone: "🐹",
        historico: [
            { data: "12/02/2024", evento: "Chegada ao abrigo" },
            { data: "18/02/2024", evento: "Vacinação e check-up" },
            { data: "28/04/2024", evento: "Pronto para adoção" }
        ]
    },
    {
        id: 10,
        nome: "Fuso",
        tipo: "furão",
        raca: "Furão Doméstico",
        idade: "2 anos",
        genero: "Macho",
        descricao: "Fuso é um furão brincalhão e inteligente. Adora explorar e brincar. Precisa de tutor experiente que entenda suas necessidades específicas.",
        icone: "🦡",
        historico: [
            { data: "25/01/2024", evento: "Acolhimento após abandono" },
            { data: "02/02/2024", evento: "Tratamentos veterinários concluídos" },
            { data: "10/05/2024", evento: "Pronto para adopção" }
        ]
    },
    {
        id: 11,
        nome: "Mimi",
        tipo: "chinchila",
        raca: "Chinchila",
        idade: "1 ano",
        genero: "Fêmea",
        descricao: "Mimi é uma chinchila ativa e curiosa. Gosta de pular e explorar. Requer banhos de areia regulares e ambiente fresco.",
        icone: "🐭",
        historico: [
            { data: "08/03/2024", evento: "Resgate de situação precária" },
            { data: "15/03/2024", evento: "Recuperação e cuidados" },
            { data: "05/05/2024", evento: "Pronta para novo lar" }
        ]
    },
    {
        id: 12,
        nome: "Oreo",
        tipo: "esquilo",
        raca: "Esquilo Vermelho",
        idade: "2 anos",
        genero: "Macho",
        descricao: "Oreo é um esquilo energético e inteligente. Requer ambiente seguro e espaços para brincar. Ideal para tutores dedicados.",
        icone: "🐿️",
        historico: [
            { data: "20/02/2024", evento: "Resgate de área urbana" },
            { data: "28/02/2024", evento: "Adaptação e cuidados" },
            { data: "12/05/2024", evento: "Pronto para adoção" }
        ]
    }
];

const locaisRetirada = {
    local1: {
        nome: "Colégio Paulo de Tarso",
        endereco: "Rua Mazzini, 61 - Aclimação, São Paulo - SP, 01528-000",
        completo: "Colégio Paulo de Tarso - Rua Mazzini, 61 - Aclimação, São Paulo - SP, 01528-000"
    },
    local2: {
        nome: "Colégio Paulo de Tarso Baby",
        endereco: "R. Alabastro, 338 - Aclimação, São Paulo - SP, 01531-010",
        completo: "Colégio Paulo de Tarso Baby - R. Alabastro, 338 - Aclimação, São Paulo - SP, 01531-010"
    },
    local3: {
        nome: "Colégio Bilíngue Paulo de Tarso Baby & Kids",
        endereco: "Praça Gen. Polidoro, 31 - Aclimação, São Paulo - SP, 01531-050",
        completo: "Colégio Bilíngue Paulo de Tarso Baby & Kids - Praça Gen. Polidoro, 31 - Aclimação, São Paulo - SP, 01531-050"
    }
};

const horarios = {
    segunda: { dia: "Segunda-Feira", horario: "8:00 às 16:00" },
    terca: { dia: "Terça-Feira", horario: "8:00 às 16:00" },
    quarta: { dia: "Quarta-Feira", horario: "8:00 às 16:00" },
    quinta: { dia: "Quinta-Feira", horario: "8:00 às 16:00" },
    sexta: { dia: "Sexta-Feira", horario: "8:00 às 16:00" },
    sabado: { dia: "Sábado", horario: "8:00 às 14:00" }
};

let estadoApp = {
    usuarioLogado: null,
    animalSelecionado: null,
    animaisFiltrados: [...animaisData],
    usuarios: JSON.parse(localStorage.getItem('usuarios')) || [],
    candidaturas: JSON.parse(localStorage.getItem('candidaturas')) || []
};

document.addEventListener('DOMContentLoaded', () => {
    inicializarApp();
    preencherSelectAnimais();
    verificarUsuarioLogado();
});

function inicializarApp() {
    renderizarAnimais();
    configurarEventos();
}

function configurarEventos() {
    const formAdocao = document.getElementById('formAdocao');
    if (formAdocao) {
        formAdocao.addEventListener('submit', (e) => {
            e.preventDefault();
            enviarCandidatura();
        });
    }

    const selectLocal = document.getElementById('adocaoLocal');
    if (selectLocal) {
        selectLocal.addEventListener('change', (e) => {
            mostrarEnderecoSelecionado(e.target.value);
        });
    }

    const selectDia = document.getElementById('adocaoDia');
    if (selectDia) {
        selectDia.addEventListener('change', (e) => {
            preencherHorarios(e.target.value);
        });
    }

    const selectHorario = document.getElementById('adocaoHorario');
    if (selectHorario) {
        selectHorario.addEventListener('change', (e) => {
            mostrarResumoAgendamento();
        });
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('ativo');
    });

    const novaSecao = document.getElementById(sectionId);
    if (novaSecao) {
        novaSecao.classList.add('ativo');
        window.scrollTo(0, 0);
    }
}

function renderizarAnimais() {
    const container = document.getElementById('listaAnimais');
    
    if (estadoApp.animaisFiltrados.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">Nenhum animal encontrado com este filtro.</p>';
        return;
    }

    container.innerHTML = estadoApp.animaisFiltrados.map(animal => `
        <div class="animal-card" onclick="verDetalhesAnimal(${animal.id})">
            <div class="animal-imagem">${animal.icone}</div>
            <div class="animal-info">
                <div class="animal-nome">${animal.nome}</div>
                <div class="animal-raca">${animal.raca}</div>
                <div class="animal-idade">${animal.idade} • ${animal.genero}</div>
                <button class="animal-btn" onclick="event.stopPropagation(); verDetalhesAnimal(${animal.id})">Ver Detalhes</button>
            </div>
        </div>
    `).join('');
}

function filtrarAnimais(tipo) {
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('ativo');
    });
    event.target.classList.add('ativo');

    if (tipo === 'todos') {
        estadoApp.animaisFiltrados = [...animaisData];
    } else {
        estadoApp.animaisFiltrados = animaisData.filter(a => a.tipo === tipo);
    }

    renderizarAnimais();
}

function verDetalhesAnimal(animalId) {
    const animal = animaisData.find(a => a.id === animalId);
    
    if (!animal) return;

    estadoApp.animalSelecionado = animal;

    document.getElementById('detalheNome').textContent = animal.nome;
    document.getElementById('detalhesIcon').textContent = animal.icone;
    document.getElementById('detalhesRaca').textContent = animal.raca;
    document.getElementById('detalhesIdade').textContent = animal.idade;
    document.getElementById('detalhesTipo').textContent = animal.tipo.charAt(0).toUpperCase() + animal.tipo.slice(1);
    document.getElementById('detalhesGenero').textContent = animal.genero;
    document.getElementById('detalhesDescricao').textContent = animal.descricao;

    const historicoHtml = animal.historico.map(h => `
        <div class="historico-item">
            <span class="historico-data">${h.data}</span><br>
            ${h.evento}
        </div>
    `).join('');
    document.getElementById('historicoAnimal').innerHTML = historicoHtml;

    showSection('detalhesAnimal');
}

function iniciarAdocao() {
    if (!estadoApp.usuarioLogado) {
        alert('Por favor, faça login antes de enviar uma candidatura.');
        showSection('login');
        return;
    }

    document.getElementById('adocaoAnimal').value = estadoApp.animalSelecionado.id;

    showSection('formulario');
}

function enviarCandidatura() {
    const localSelecionado = document.getElementById('adocaoLocal').value;
    const diaSelecionado = document.getElementById('adocaoDia').value;
    const horarioSelecionado = document.getElementById('adocaoHorario').value;
    
    if (!localSelecionado) {
        alert('Por favor, selecione um local de retirada.');
        return;
    }

    if (!diaSelecionado || !horarioSelecionado) {
        alert('Por favor, selecione um dia e horário para a retirada.');
        return;
    }

    const diaInfo = horarios[diaSelecionado];

    const candidatura = {
        id: Date.now(),
        usuarioId: estadoApp.usuarioLogado.id,
        nomeUsuario: document.getElementById('adocaoNome').value,
        email: document.getElementById('adocaoEmail').value,
        telefone: document.getElementById('adocaoTelefone').value,
        endereco: document.getElementById('adocaoEndereco').value,
        animalId: document.getElementById('adocaoAnimal').value,
        animalNome: animaisData.find(a => a.id == document.getElementById('adocaoAnimal').value)?.nome,
        razao: document.getElementById('adocaoRazao').value,
        motivo: document.getElementById('adocaoMotivo').value,
        experiencia: document.getElementById('adocaoExperiencia').value,
        localRetirada: locaisRetirada[localSelecionado].completo,
        diaRetirada: diaInfo.dia,
        horarioRetirada: horarioSelecionado,
        data: new Date().toLocaleDateString('pt-BR')
    };

    estadoApp.candidaturas.push(candidatura);
    localStorage.setItem('candidaturas', JSON.stringify(estadoApp.candidaturas));

    document.getElementById('formAdocao').reset();
    document.getElementById('infoLocal').classList.add('hidden');
    document.getElementById('infoAgendamento').classList.add('hidden');
    document.getElementById('diasHorarios').classList.add('hidden');

    mostrarReserva(candidatura);
}

function mostrarReserva(candidatura) {
    document.getElementById('reservaAnimal').textContent = candidatura.animalNome;
    document.getElementById('reservaRaca').textContent = animaisData.find(a => a.id == candidatura.animalId)?.raca || '';
    document.getElementById('reservaGenero').textContent = animaisData.find(a => a.id == candidatura.animalId)?.genero || '';
    document.getElementById('reservaLocal').textContent = candidatura.localRetirada;
    document.getElementById('reservaDia').textContent = candidatura.diaRetirada;
    document.getElementById('reservaHorario').textContent = candidatura.horarioRetirada;
    document.getElementById('reservaNome').textContent = candidatura.nomeUsuario;
    document.getElementById('reservaEmail').textContent = candidatura.email;
    document.getElementById('reservaTelefone').textContent = candidatura.telefone;

    const reservaMensagem = document.getElementById('reservaMensagem');
    reservaMensagem.classList.remove('hidden');
    reservaMensagem.textContent = 'Reserva concluída, parabéns!';

    showSection('reservas');

    setTimeout(() => {
        reservaMensagem.classList.add('hidden');
    }, 4000);
}

function preencherSelectAnimais() {
    const select = document.getElementById('adocaoAnimal');
    const opcoes = animaisData.map(a => `<option value="${a.id}">${a.nome} (${a.raca})</option>`).join('');
    select.innerHTML = '<option value="">Selecione um animal</option>' + opcoes;
}

function mostrarEnderecoSelecionado(localId) {
    const infoLocal = document.getElementById('infoLocal');
    const diasHorarios = document.getElementById('diasHorarios');
    const enderecoElement = document.getElementById('enderecoSelecionado');
    const infoHorarioDisponivel = document.getElementById('infoHorarioDisponivel');

    if (localId && locaisRetirada[localId]) {
        const local = locaisRetirada[localId];
        enderecoElement.textContent = local.completo;
        infoLocal.classList.remove('hidden');
        diasHorarios.classList.remove('hidden');
        
        document.getElementById('adocaoDia').value = '';
        document.getElementById('adocaoHorario').value = '';
        document.getElementById('infoAgendamento').classList.add('hidden');
        infoHorarioDisponivel.classList.add('hidden');
    } else {
        infoLocal.classList.add('hidden');
        diasHorarios.classList.add('hidden');
    }
}

function preencherHorarios(dia) {
    const selectHorario = document.getElementById('adocaoHorario');
    const infoAgendamento = document.getElementById('infoAgendamento');
    const infoHorarioDisponivel = document.getElementById('infoHorarioDisponivel');
    
    selectHorario.innerHTML = '<option value="">Selecione um horário</option>';
    infoAgendamento.classList.add('hidden');
    infoHorarioDisponivel.classList.add('hidden');

    if (!dia) return;

    const diaInfo = horarios[dia];
    let horaInicio, horaFim;

    if (dia === 'sabado') {
        horaInicio = 8;
        horaFim = 14;
    } else {
        horaInicio = 8;
        horaFim = 16;
    }

    let opcoes = '';
    
    for (let hora = horaInicio; hora <= horaFim; hora++) {
        for (let minutos of [0, 30]) {
            if (hora === horaFim && minutos === 30) continue;
            const horarioFormatado = `${String(hora).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
            opcoes += `<option value="${horarioFormatado}">${horarioFormatado}</option>`;
        }
    }

    selectHorario.innerHTML += opcoes;
    infoHorarioDisponivel.textContent = `Horário disponível: ${diaInfo.horario}`;
    infoHorarioDisponivel.classList.remove('hidden');
}

function mostrarResumoAgendamento() {
    const dia = document.getElementById('adocaoDia').value;
    const horario = document.getElementById('adocaoHorario').value;
    const infoAgendamento = document.getElementById('infoAgendamento');
    const resumoElement = document.getElementById('resumoAgendamento');

    if (dia && horario) {
        const diaInfo = horarios[dia];
        resumoElement.textContent = `${diaInfo.dia} - ${horario}`;
        infoAgendamento.classList.remove('hidden');
    } else {
        infoAgendamento.classList.add('hidden');
    }
}

function fazerLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const senha = document.getElementById('loginSenha').value;
    const mensagemDiv = document.getElementById('mensagemAuth');

    if (!email || !senha) {
        mostrarMensagem(mensagemDiv, 'Por favor, preencha email e senha.', false);
        return;
    }

    const usuario = estadoApp.usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        estadoApp.usuarioLogado = usuario;
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        mostrarMensagem(mensagemDiv, `✅ Bem-vindo, ${usuario.nome}!`, true);
        atualizarNavegacao();
        setTimeout(() => {
            showSection('home');
            limparFormLogin();
        }, 1500);
    } else {
        mostrarMensagem(mensagemDiv, '❌ Email ou senha incorretos.', false);
    }
}

function fazerCadastro() {
    const nome = document.getElementById('loginNome').value.trim();
    const email = document.getElementById('loginEmail').value.trim();
    const senha = document.getElementById('loginSenha').value;
    const mensagemDiv = document.getElementById('mensagemAuth');

    if (!nome || !email || !senha) {
        mostrarMensagem(mensagemDiv, 'Por favor, preencha todos os campos.', false);
        return;
    }

    if (estadoApp.usuarios.find(u => u.email === email)) {
        mostrarMensagem(mensagemDiv, '❌ Email já cadastrado.', false);
        return;
    }

    const novoUsuario = {
        id: Date.now(),
        nome: nome,
        email: email,
        senha: senha,
        dataCadastro: new Date().toLocaleDateString('pt-BR')
    };

    estadoApp.usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(estadoApp.usuarios));

    estadoApp.usuarioLogado = novoUsuario;
    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));

    mostrarMensagem(mensagemDiv, `✅ Cadastro realizado com sucesso! Bem-vindo, ${nome}!`, true);
    atualizarNavegacao();
    setTimeout(() => {
        showSection('home');
        limparFormLogin();
    }, 1500);
}

function logout() {
    estadoApp.usuarioLogado = null;
    localStorage.removeItem('usuarioLogado');
    atualizarNavegacao();
    showSection('home');
    alert('Você foi desconectado.');
}

function atualizarNavegacao() {
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    const usuarioInfo = document.getElementById('usuarioLogado');

    if (estadoApp.usuarioLogado) {
        btnLogin.classList.add('hidden');
        btnLogout.classList.remove('hidden');
        usuarioInfo.textContent = `👤 ${estadoApp.usuarioLogado.nome}`;
    } else {
        btnLogin.classList.remove('hidden');
        btnLogout.classList.add('hidden');
        usuarioInfo.textContent = '';
    }
}

function verificarUsuarioLogado() {
    const usuarioSalvo = localStorage.getItem('usuarioLogado');
    if (usuarioSalvo) {
        estadoApp.usuarioLogado = JSON.parse(usuarioSalvo);
        atualizarNavegacao();
    }
}

function limparFormLogin() {
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginSenha').value = '';
    document.getElementById('loginNome').value = '';
    document.getElementById('mensagemAuth').innerHTML = '';
}

function mostrarMensagem(elemento, mensagem, sucesso) {
    elemento.textContent = mensagem;
    elemento.className = 'mensagem-auth ' + (sucesso ? 'sucesso' : 'erro');
}

function fecharModal() {
    document.getElementById('modalAnimal').classList.add('hidden');
}
