
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

campos[0].addEventListener('input', nameValidate);
campos[1].addEventListener('input', emailValidate);
campos[2].addEventListener('input', cpfValidate);



function setErros(index){
    campos[index].stylr.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function setValidate(index){
    campos[index].style.border = '1px solid #00ff00';
    spans[index].style.display = 'none';
}

function nameValidate(index){
    if(campos[index].value === ' ' && campos[index].value.length < 3){
        setErros(0);
    }else{
        setValidate(0);
    }
}

function emailValidate(index){
    if(emailRegex.test(campos[1].value)){
        setValidate(1);
    }else{
        setErros(1);
    }
}

function cpfValidate(index){
    if(cpfRegex.test(campos[2].value)){
        setValidate(2);
    }else{
        setErros(2);
    }
}