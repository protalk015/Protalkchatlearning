// Função para abrir o modal de login
function openLogin() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "block";  // Exibe o modal
    document.body.style.overflow = "hidden";  // Desabilita o scroll da página enquanto o modal estiver aberto
}

// Função para fechar o modal de login
function closeLogin() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "none";  // Esconde o modal
    document.body.style.overflow = "auto";  // Restaura o scroll da página
}

// Fechar o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Função para simular validação de login
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();  // Previne o comportamento padrão de enviar o formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação simples de login
    if (username === "aluno" && password === "12345") {
        alert("Login bem-sucedido! Acesse os materiais de apoio.");
        closeLogin();
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
};
