var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
        document.querySelector(".container").classList.toggle("show-menu");
});

function validar(){
        var nome = form_contato.nome.value
        var email = form_contato.email.value
        var mensagem = form_contato.mensagem.value

        if (nome == "") {
                alert("O campo nome é obrigatório")
                form_contato.focus()
                return false
              }
        
              if (email == "") {
                alert("Necessário preencher o campo e-mail para entrarmos em contato")
                form_contato.focus()
                return false
              }
              if(mensagem == ""){
                alert("Digite sua dúvida ou sugestão")
                form_contato.focus()
                return false
              }
        }

        document.querySelector('form input').oninvalid = function() {  
        // remove mensagens de erro padrão
        this.setCustomValidity("");
        // faz a validação novamente
        if (!this.validity.valid) {
            // se estiver inválido, coloca a mensagem
            this.setCustomValidity("Por favor verifique se todos os campos digitados");
         }  
     };

     