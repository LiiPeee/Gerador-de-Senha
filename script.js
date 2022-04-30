//Setando os valores com o Query selector nos ids criado no html

let sliderElement = document.querySelector("#slider");

let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*"

let novaSenha = "";

// fazendo o id password receber o valor que for apssado em password
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;

}
// fazendo o loop de geração de senha automaticamente e jogando na variavel pass
function generatePassword(){
    let pass ="";

    for(let i = 0, n = charSet.length; i < sliderElement.value; i++){
        pass += charSet.charAt(Math.floor(Math.random()* n));   
    }


    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
function copyPassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);

}