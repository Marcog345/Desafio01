let quantidade = 0;
const limite = 50;

const contador = document.getElementById("contador");
const status = document.getElementById("status");

const btn1 = document.getElementById("btn1");
const btn5 = document.getElementById("btn5");

function adicionarPacotes(valor) {

    if (quantidade + valor <= limite) {
        quantidade += valor;
    }

    atualizarPainel();
}

function atualizarPainel() {

    contador.textContent = quantidade;

    if (quantidade >= limite) {

        status.textContent = "LOTAÇÃO ESGOTADA";

        status.classList.remove("disponivel");
        status.classList.add("lotado");

        btn1.disabled = true;
        btn5.disabled = true;

    } else {

        status.textContent = "BAIA DISPONÍVEL";

        status.classList.remove("lotado");
        status.classList.add("disponivel");

        btn1.disabled = false;
        btn5.disabled = false;
    }
}

function resetar() {

    quantidade = 0;
    atualizarPainel();
}