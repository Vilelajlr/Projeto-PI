document.addEventListener('DOMContentLoaded', () => {
    document.forms.cadastro.onsubmit = verifica;
});

function verifica(e) {


    
   let form = e.target;
   let formValido = true;
   console.log("início da função validaForm!");
   const spanNome = form.nome.nextElementSibling;
   const spanEmail = form.email.nextElementSibling;
   const spanCpf = form.cpf.nextElementSibling;

    spanNome.textContent = "";
    spanEmail.textContent = "";
    spanCpf.textContent = "";

    if(form.nome.value.trim() === "" || !form.nome.value.includes(" ")) {
        spanNome.textContent = "Nome é obrigatório!";
        spanNome.style.color = "#f1f1f1";
        formValido = false;
    } 
    if(form.email.value == "") {
        spanEmail.textContent = "Email é obrigatório!";
        spanEmail.style.color = "#f1f1f1";
        formValido = false;
    }

    if(form.cpf.value == "") {
        spanCpf.textContent = "CPF é obrigatório!";
        spanCpf.style.color = "#f1f1f1";
        formValido = false;
    }

    if(!formValido) {
        e.preventDefault();
    }

   


}
