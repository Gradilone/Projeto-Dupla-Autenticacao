function sendOTP(){
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const otpverify = document.getElementsByClassName('otpverify')[0];
let otp_val = Math.floor(Math.random()*10000);

let emailbody = `
<h1>Senha de verificacao</h1> <br>
<h2>A sua senha de verificacao é </h2>${otp_val}
`;
submit.style.display = "none";

    Email.send({
        SecureToken : "2d27afdc-d513-40bf-881e-5a5f8ee65618",
        To : email.value,
        From : "lucasgradilone@outlook.com",
        Subject : "Autenticaçao",
        Body : emailbody
    }).then(
      message => {
        if(message === "OK"){
            alert("Código enviado para: "+email.value);

            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');
           

            otp_btn.addEventListener('click',()=>{
                
                if(otp_inp.value == otp_val){
                    alert("Código válido!!");

                }
                else{
                    alert("Código invalido, envie novamente");
                    submit.style.display = "block";
                    
                }
            })
        }
      }
    );

}