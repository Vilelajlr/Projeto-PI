$(document).ready(function(){

    const form = document.getElementById('form');
    const campos = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    campos[0].addEventListener('input', nameValidate);
    campos[1].addEventListener('input', emailValidate);
    campos[2].addEventListener('input', cpfValidate);

    function setValidate(index){
        campos[index].style.border = '1px solid #00f08e';
        spans[index].style.display = 'none';
        
    }

    function setInvalid(index){
        campos[index].style.border = '1px solid #f00';
        spans[index].style.display = 'block';
    }



    function nameValidate(){
        if(campos[0].value.trim() === '' || campos[0].value.split(' ').length < 2){
            setInvalid(0);
            
        }else{
            setValidate(0);
            
        }
    }
    
    function emailValidate(){
        if(emailRegex.test(campos[1].value)){
            setValidate(1);
            
        }else{
            setInvalid(1);
            
        }
    }

    function cpfValidate(){
        if(cpfRegex.test(campos[2].value)){
            setValidate(2);
            
        }else{
            setInvalid(2);    
        }
    }

    

    const openModal = document.querySelector('#open-modal');
    const editarModal = document.querySelector('.editar');
    const closeModal = document.querySelector('.fechar');
    const modal = document.querySelector('#modal');
    const fade = document.querySelector('#fade');


    const toggleModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle('hide'));

        if(!modal.classList.contains('hide')){
            const  nomeModal = campos[0].value;
            const emailModal = campos[1].value;
            const cpfModal = campos[2].value;
            const dataModal = document.getElementsByClassName('data');
            const data = dataModal.value;
    
            document.getElementById('nomeM').textContent = ("Nome:" + nomeModal);
            document.getElementById('emailM').textContent = ("Email: " + emailModal);
            document.getElementById('cpfM').textContent = ("CPF: " + cpfModal);
            document.getElementById('dt-nasciM').textContent = ("Data de Nascimento: " + data);
        }
        
    };
   
    [openModal,editarModal, closeModal, fade].forEach((el) => {
        el.addEventListener('click', () => toggleModal());
    });


    $('#selec').change(function(){
        var opcaoSelecionada = $(this).val();
        var areaTexto = $('.area_texto');

        if(opcaoSelecionada === 'sugestao'){
          areaTexto.css('display', 'block');
           $('#rec').attr('placeholder', 'Digite sua sugestão ...');
        }
        else if(opcaoSelecionada === 'reclamacoes'){
            areaTexto.css('display', 'block');
            $('#rec').attr('placeholder', 'Digite sua reclamação ...');
        }

         else if(opcaoSelecionada === 'duvidas'){
            areaTexto.css('display', 'block');
            $('#rec').attr('placeholder', 'Digite sua dúvida ...');
        }

        else{
            $('.area_texto').css('display', 'none');
        }

    });



});