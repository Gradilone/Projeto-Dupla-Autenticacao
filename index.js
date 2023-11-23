const fname = document.getElementById('email');
const lname = document.getElementById('nome');
const submit = document.getElementById('envia');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;
});