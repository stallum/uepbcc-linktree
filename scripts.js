document.addEventListener('DOMContentLoaded', function() {
    const links = [
        {
            id: 1,
            title: "Site do Curso",
            description: "Acesso as principais informações do curso",
            url: "https://sites.google.com/setor.uepb.edu.br/computacao-uepb-campusi/p%C3%A1gina-inicial?authuser=0",
            iconColor: "#3498db",
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
            iconColor: "#27ae60",
            iconText: "FC"
        },
        {
            id: 4,
            title: "Portal do Aluno",
            description: "Histórico, boletins e matrículas",
            url: "https://suap.uepb.edu.br/",
            iconColor: "#9b59b6",
            iconText: "PA"
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
