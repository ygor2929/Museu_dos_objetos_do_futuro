document.addEventListener('DOMContentLoaded', () => {
    // Referências dos elementos DOM
    const body = document.body;
    const toggleBtn = document.getElementById('toggleThemeBtn');
    const timerDisplay = document.getElementById('timer-display');
    
    // --- Funções de Tema ---
    
    /**
     * Alterna entre o tema padrão e o tema neon (futurista).
     */
    function toggleTheme() {
        // Alterna a classe principal no corpo da página
        body.classList.toggle('theme-neon');
        
        // Atualiza as classes e o texto do botão
        if (body.classList.contains('theme-neon')) {
            body.classList.remove('theme-padrao');
            toggleBtn.textContent = 'Desativar Modo Futurista 🪐';
            console.log('Modo Futurista ATIVADO');
        } else {
            body.classList.add('theme-padrao');
            toggleBtn.textContent = 'Ativar Modo Futurista 🚀';
            console.log('Modo Padrão ATIVADO');
        }
    }
    
    // Garante que o tema padrão esteja aplicado na inicialização, se nenhuma classe estiver presente
    if (!body.classList.contains('theme-padrao') && !body.classList.contains('theme-neon')) {
        body.classList.add('theme-padrao');
    }
    
    // Adiciona o event listener ao botão
    toggleBtn.addEventListener('click', toggleTheme);


    // --- 🚀 Lógica do Contador Regressivo para 2050 ---
    
    // Define a data alvo: 1º de Janeiro de 2050
    const targetDate = new Date('January 1, 2050 00:00:00').getTime();

    /**
     * Calcula o tempo restante e atualiza o display do contador.
     */
    function updateCountdown() {
        // Pega a data e hora de agora
        const now = new Date().getTime();

        // Calcula a distância (em milissegundos) entre agora e a data alvo
        const distance = targetDate - now;

        // Se o tempo acabou (chegou a 2050)
        if (distance < 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "2050: O Futuro Chegou!";
            return;
        }

        // Cálculos para converter milissegundos em dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formata a saída no HTML usando tags <small> para as unidades
        timerDisplay.innerHTML = 
            `${days} <small>DIAS</small> : 
            ${hours} <small>HORAS</small> : 
            ${minutes} <small>MIN</small> : 
            ${seconds} <small>SEG</small>`;
    }

    // Chama a função uma vez para carregar o valor inicial
    updateCountdown(); 
    
    // Atualiza o contador a cada 1000 milissegundos (1 segundo)
    const countdownInterval = setInterval(updateCountdown, 1000);

});