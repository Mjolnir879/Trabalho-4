document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista');
    let selectedItem = null;

    lista.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            if (selectedItem) {
                selectedItem.classList.remove('selected');
            }
            selectedItem = event.target;
            selectedItem.classList.add('selected');
        }
    });

    document.getElementById('enviar').addEventListener('click', verifica);

    function verifica() {
        let total = 0;
        if (selectedItem) {
            total += 1;
            alert(`Você selecionou: ${selectedItem.textContent}. Total: ${total}`);
        } else {
            alert('Nenhum item selecionado');
        }
    }
});
