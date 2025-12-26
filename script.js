let allProjects = [];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-container');
    const buttons = document.querySelectorAll('.filter-btn');

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            allProjects = data;
            renderProjects('all');
        })
        .catch(err => console.error(err));

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            renderProjects(category);
        });
    });

    function renderProjects(filter) {
        if (!container) return;
        container.innerHTML = '';
        const filteredList = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
        filteredList.forEach(project => {
            container.innerHTML += `
                <div class="project-item">
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        });
    }
});