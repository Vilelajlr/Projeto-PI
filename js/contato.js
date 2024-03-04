document.forms.cadastro.onsubmit = verifica;

function verifica(e) {

    let form = e.target;
    let formValido = true;

    const nome = document.getElementById("nome").value;

    if(nome.length < 3) {
        formValido = false;
        alert("Nome inválido");
    }

    


}
