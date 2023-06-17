// Elementos
const input = document.querySelector('input');
const Lista = document.querySelector('ol');

//Função
function handleKeyUp(e) {
    if (e.key ==='Enter') {
        //Adicionar elemento LI na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        Lista.appendChild(newLi);

        //Limpar o campo de texto
        input.value = '';
    }
}

//Evento
input.addEventListener('keyup', handleKeyUp);