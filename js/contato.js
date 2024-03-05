document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms.cadastro;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validaFormulario()) {
            abrirModal();
        }
    });

    // Obtenha o elemento de fechamento do modal
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', fecharModal);
});

function validaFormulario() {
    let formValido = true;

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cpfInput = document.getElementById('cpf');
    const tipoContatoSelect = document.getElementById('selec');
    const interesseCheckboxes = document.querySelectorAll('input[name="interesse[]"]:checked');

    const nomeError = document.querySelector('.nome span');
    const emailError = document.querySelector('.email span');
    const cpfError = document.querySelector('.cpf span');
    const tipoContatoError = document.querySelector('.contato span');
    const interesseError = document.querySelector('.check span');

    // Limpa mensagens de erro anteriores
    nomeError.textContent = '';
    emailError.textContent = '';
    cpfError.textContent = '';
    tipoContatoError.textContent = '';
    interesseError.textContent = '';

    // Validação do Nome
    if (nomeInput.value.trim() === '' || nomeInput.value.split(' ').length < 2) {
        nomeError.textContent = 'Nome completo é obrigatório (pelo menos dois termos)!';
        nomeInput.classList.add('error');
        formValido = false;
    } else {
        nomeInput.classList.remove('error');
    }

    // Validação do Email
    if (emailInput.value.trim() === '' || !emailInput.value.includes('@') || !emailInput.value.includes('.') || emailInput.value.lastIndexOf('@') > emailInput.value.lastIndexOf('.')) {
        emailError.textContent = 'Email inválido!';
        emailInput.classList.add('error');
        formValido = false;
    } else {
        emailInput.classList.remove('error');
    }

    // Validação do CPF
    if (cpfInput.value.trim() === '' || cpfInput.value.length !== 14) {
        cpfError.textContent = 'CPF inválido!';
        cpfInput.classList.add('error');
        formValido = false;
    } else {
        cpfInput.classList.remove('error');
    }

    // Validação do Tipo de Contato
    if (tipoContatoSelect.value === '') {
        tipoContatoError.textContent = 'Selecione o tipo de contato!';
        tipoContatoSelect.classList.add('error');
        formValido = false;
    } else {
        tipoContatoSelect.classList.remove('error');
    }

    // Validação dos Interesses
    if (interesseCheckboxes.length === 0) {
        interesseError.textContent = 'Selecione pelo menos um interesse!';
        formValido = false;
    }

    return formValido;
}


function abrirModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Exiba os dados do formulário no modal
    document.getElementById('modal-nome').textContent = document.getElementById('nome').value;
    document.getElementById('modal-email').textContent = document.getElementById('email').value;
    // Adicione outros campos do formulário aqui
}

function fecharModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}