const randomNumber = Math.floor(Math.random() * 100);

const win = document.querySelector('[data-win]');
const input = document.querySelector('[data-input]');
const btn = document.querySelector('[data-btn]');
const turn = document.querySelector('[data-turn]');

let tentativas = 10;

btn.addEventListener('click', (e) => {
    e.preventDefault;
    const valor = document.createElement('p');
    valor.classList.add('turn');

    if (input.value > randomNumber) {
        tentativas = tentativas - 1;
        valor.innerText = `${input.value} é maior! Você ainda tem ${tentativas} tentativas.`;
        turn.appendChild(valor);
        input.value = '';
    } else if (input.value < randomNumber) {
        tentativas = tentativas - 1;
        valor.innerText = `${input.value} é menor! Você ainda tem ${tentativas} tentativas.`;
        turn.appendChild(valor);
        input.value = '';
    }

    if (input.value == randomNumber) {
        win.innerText = `Parabéns! Você venceu o computador!`
        win.classList.add('win');
        const retry = document.createElement('button');
        retry.innerText = 'Jogar novamente';
        retry.setAttribute('type', 'submit');
        retry.classList.add('retry');
        retry.addEventListener('click', (e) => {
            e.preventDefault;
            window.location.reload();
        })
        win.appendChild(retry);
    }

    if (tentativas === 0) {
        win.innerText = `Você perdeu :(`
        win.classList.add('win');
        const retry = document.createElement('button');
        retry.innerText = 'Tentar novamente';
        retry.setAttribute('type', 'submit');
        retry.classList.add('retry');
        retry.addEventListener('click', (e) => {
            e.preventDefault;
            window.location.reload();
        })
        win.appendChild(retry);
    }
})