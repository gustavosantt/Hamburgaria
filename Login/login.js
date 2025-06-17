function verificar() {
    console.log("Função verificar foi chamada."); // Depuração

    const login = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const url = 'https://hamburgueriahg.netlify.app/'; // URL de redirecionamento
    console.log("Login:", login, "Senha:", senha); // Depuração

    if (login === "admin" && senha === "123") {
        alert("Login realizado com sucesso!:" + url); // Depuração
        return true; // Permite o envio do formulário
    } else {
        console.log("Tentativa de login falhou."); // Depuração
        alert("Login ou senha incorretos.");
        return false; // Impede o envio do formulário
    }
}
