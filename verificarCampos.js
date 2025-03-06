const emailUser = document.getElementById('email');
const senhaUser = document.getElementById('senha');
const confirmSenhaUser = document.getElementById('confirmSenha');
const spanDeEmail = document.getElementById('emailSpan');
const spanDeSenha = document.getElementById('senhaSpan');
const spanDeConfirmSenha = document.getElementById('confirmSenhaSpan');
const botaoEntrar = document.getElementById('btnEntrar');

function verificarInputs(){
    if (emailUser.value.trim() === "") {
        emailUser.classList.remove("corCampoCheio");
        emailUser.classList.add("corCampoVazio");
        spanDeEmail.style="visibility: visible";
    } else {
        emailUser.classList.add("corCampoCheio");
        emailUser.classList.remove("corCampoVazio");
        spanDeEmail.style="visibility: hidden";
    }

    if (senhaUser.value.trim() === "") {
        senhaUser.classList.remove("corCampoCheio");
        senhaUser.classList.add("corCampoVazio");
        spanDeSenha.style="visibility: visible";
    } else {
        senhaUser.classList.add("corCampoCheio");
        senhaUser.classList.remove("corCampoVazio");
        spanDeSenha.style="visibility: hidden";
    }

    if (confirmSenhaUser.value.trim() === "") {
        confirmSenhaUser.classList.remove("corCampoCheio");
        confirmSenhaUser.classList.add("corCampoVazio");
        spanDeConfirmSenha.style="visibility: visible";
    } else {
        confirmSenhaUser.classList.add("corCampoCheio");
        confirmSenhaUser.classList.remove("corCampoVazio");
        spanDeConfirmSenha.style="visibility: hidden";
    }
}

botaoEntrar.addEventListener('click', verificarInputs);

form.addEventListener('submit', e => {
    e.preventDefault();
});