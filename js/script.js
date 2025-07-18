document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const redirectButtons = document.querySelectorAll('.btn[data-tab-redirect]');

    function activateTab(tabId) {
        // Remove a classe 'active' de todos os links de abas
        tabLinks.forEach(link => link.classList.remove('active'));

        // Remove a classe 'active' de todos os conteúdos de abas
        tabContents.forEach(content => content.classList.remove('active'));

        // Adiciona a classe 'active' ao link da aba clicada
        const activeLink = document.querySelector(`.tab-link[data-tab="${tabId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Adiciona a classe 'active' ao conteúdo da aba correspondente
        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    // Adiciona evento de clique para os links de navegação das abas
    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que a página recarregue
            const tabId = this.dataset.tab; // Obtém o ID da aba do atributo data-tab
            activateTab(tabId);
        });
    });

    // Adiciona evento de clique para os botões de redirecionamento dentro dos cards
    redirectButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = this.dataset.tabRedirect; // Obtém o ID da aba do atributo data-tab-redirect
            activateTab(tabId);
        });
    });

    // Ativa a aba inicial (Dashboard) quando a página carrega
    // Verifica se há um hash na URL para ativar uma aba específica
    const initialTab = window.location.hash.substring(1) || 'dashboard';
    activateTab(initialTab);
});