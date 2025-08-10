document.addEventListener('DOMContentLoaded', function() {
    const links = [
        {
            id: 1,
            title: "Site do Curso",
            description: "Acesso as principais informações do curso",
            url: "https://sites.google.com/setor.uepb.edu.br/computacao-uepb-campusi/p%C3%A1gina-inicial?authuser=0",
            iconColor: "#b70f32",
            iconText: "SC"
        },
        {
            id: 2,
            title: "Calendário Acadêmico",
            description: "Datas importantes do semestre",
            url: "https://uepb.edu.br/prograd/calendario-academico/",
            iconColor: "#f39c12",
            iconText: "CA"
        },
        {
            id: 3,
            title: "Fluxograma do Curso",
            description: "Registro e acompanhamento das matérias do Curso",
            url: "https://sites.google.com/setor.uepb.edu.br/computacao-uepb-campusi/fluxograma-do-curso?authuser=0",
            iconColor: "#FF715B",
            iconText: "FC"
        },
        {
            id: 4,
            title: "Portal do Aluno",
            description: "Histórico, boletins e matrículas",
            url: "https://suap.uepb.edu.br/",
            iconColor: "#9b59b6",
            iconText: "PA"
        },
        {
            id: 5,
            title: "Grupo Feras",
            description: "Grupo dos feras computação 2025.2",
            url: "https://chat.whatsapp.com/BTN2JZqPDZYJ76lsQKozhg",
            iconColor: "#24c464",
            iconText: "WA"
        },
        {
            id: 6,
            title: "Grupo Telegram Computação",
            description: "Grupo do telegram de computação",
            url: "https://t.me/+OmR1fzcJXSoxZDkx",
            iconColor: "#2F52E0",
            iconText: "GT"
        },
        {
            id: 7,
            title: "Regimento Acadêmico",
            description: "Esse é o regimento de graduação da UEPB. Leia-o",
            url: "https://uepb.edu.br/prograd/ensino/regimento-dos-cursos-de-graduacao-da-uepb/",
            iconColor: "#c00404",
            iconText: "RA"
        }
    ];

    const linksContainer = document.getElementById('linksContainer');

    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-card';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        
        linkElement.innerHTML = `
            <div class="link-icon" style="background-color: ${link.iconColor}">${link.iconText}</div>
            <div class="link-content">
                <h3 class="link-title">${link.title}</h3>
                <p class="link-description">${link.description}</p>
            </div>
        `;
        
        linksContainer.appendChild(linkElement);
    });
});
