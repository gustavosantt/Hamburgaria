function verificar() {
    console.log("Função verificar foi chamada."); // Depuração

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    console.log("Login:", login, "Senha:", senha); // Depuração

    if (login === "admin" && senha === "1234") {
        alert("Login realizado com sucesso!");
        console.log("Autorizado: Login realizado com sucesso."); // Depuração
        window.location.href = "https://hamburgueriahg.netlify.app/"; 
        return true; // Permite o envio do formulário
        console.log("Não autorizado: Login ou senha incorretos."); 
        alert("Login ou senha incorretos.");
        return false; // Impede o envio do formulário
    }
}