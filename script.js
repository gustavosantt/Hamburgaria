document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("comprar");

  /*botao.addEventListener("click", function () {
    alert("Produto adicionado ao carrinho!");
    
    
  });*/
});




// Bloco para rolagem suave dos links internos
 document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          smoothScrollTo(targetPosition, 2500); // 1.5 segundos
        }
      });
    });
 
    function smoothScrollTo(targetY, duration) {
      const startY = window.scrollY;
      const distanceY = targetY - startY;
      let startTime = null;
 
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const ease = easeInOutQuad(progress > 1 ? 1 : progress);
        window.scrollTo(0, startY + distanceY * ease);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
 
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
 
      requestAnimationFrame(animation);
    }
  });

  //Ajustar e tela para o botao Hamburger
/*
  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("show");
  
  });*/

//Registro de usuario 
// Registro de usuário
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-registro');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // impede o recarregamento da página

    console.log('Formulário enviado!');

    // Pega os valores dos campos
    const nom_user = document.getElementById('nome').value;
    const tel_user = document.getElementById('telefone').value;
    const senha_user = document.getElementById('senha').value;

    // Envia para o backend
    fetch('/registro', { // use a URL do seu servidor Node
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom_user, tel_user, senha_user })
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('mensagem').textContent = data.message;
        console.log('Resposta do servidor:', data);
      })
      .catch(err => {
        console.error('Erro ao enviar dados:', err);
      });
  });
});