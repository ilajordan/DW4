const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById ('email');
const password = document.getElementById ('password');
const passwordConfirmation = document.getElementById ('password-confirmation');
const select = document.getElementById ('tipo-pessoa');

form.addEventListener('submit', (e) => {
e.preventDefault();

 checkInputs();
});

select.addEventListener('change', (e) => {
    e.preventDefault();

    checkVisibility();
});

checkVisibility();

function checkVisibility(){
    const tipoPessoa = select.value;
    const divCpf = document.getElementById('div-cpf');
    const divCnpj = document.getElementById('div-cnpj');

    if (tipoPessoa === 'fisica'){
        divCpf.style.display = 'block';
        divCnpj.style.display = 'none';
    }
    else if (tipoPessoa === 'juridica'){
        divCnpj.style.display = 'block';
        divCpf.style.display = 'none';
    }
    else {
        divCpf.style.display = 'none';
        divCnpj.style.display = 'none';
    }
}

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const cpfValue = cpf.value;
    const cnpjValue = cnpj.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === ''){
    setErrorFor(username, 'O nome de usuário é obrigatório');
    }
    else {
    setSuccessFor(username);
        }

        if (emailValue === ''){
            setErrorFor(email, 'O Email é obrigatório');
        }
        else if (!checkEmail(emailValue)) {
            setErrorFor(email, 'Digite um email válido'); //Eu tinha deixado um texto errado aqui antes.
        }
        else {
            setSuccessFor(email);
        }
    
        if (cpfValue === ''){
            setErrorFor(cpf, 'O CPF é obrigatório');
        }
        else if (cpfValue.length != 11) {
            setErrorFor(cpf, 'O CPF precisa ter 11 dígitos');
        }
        else {
            setSuccessFor(cpf);
        }

        if (cnpjValue === ''){
            setErrorFor(cnpj, 'O CNPJ é obrigatório');
        } 
        else if (cnpjValue.length != 14) {
            setErrorFor(cnpj, 'O CNPJ precisa ter 14 dígitos');
        }
        else {
            setSuccessFor(cnpj);
        }

         if (passwordValue === ''){
            setErrorFor(password, 'A senha é obrigatória!');
        }
        else if (passwordValue.length < 8) {
            setErrorFor(password, 'A senha precisa ter no mínimo 8 caracteres');
        }
           else {
            setSuccessFor(password);
        }
    
        if (passwordConfirmationValue === ''){
            setErrorFor(passwordConfirmation, 'A confirmação é obrigatória!');
        }
        else if (passwordConfirmationValue != passwordValue){
            setErrorFor(passwordConfirmation, 'Não esta igual a senha!')
        } 
        else {
            setSuccessFor(passwordConfirmation);
        }

    }

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }