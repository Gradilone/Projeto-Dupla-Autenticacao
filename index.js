const fname = document.getElementById('email');
const lname = document.getElementById('nome');
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicou");

    Email.send({
        SecureToken : "b4ec64d9-7642-42fa-911d-d03a1db57dce",
        To : 'lucas.valias@fatec.sp.gov.br',
        From : "lucas.valias@fatec.sp.gov.br",
        Subject : "Teste",
        Body : "Meu primeiro teste"
    }).then(
      message => alert(message)
    );
});