let check = 1;
document.addEventListener('DOMContentLoaded', () => {
    const alternatives = document.querySelectorAll('.alternative li');
    alternatives.forEach(item => {
        item.addEventListener('click', event => {
            const radio = item.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });
    
    let selectedItems = {};

    alternatives.forEach(alternative => {
        alternative.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const alternativeId = alternative.id;
                if (selectedItems[alternativeId]) {
                    selectedItems[alternativeId].classList.remove('selected');
                }
                selectedItems[alternativeId] = event.target;
                selectedItems[alternativeId].classList.add('selected');
            }
        });
    });
    
    const draggable = document.getElementById('result');
            if (draggable) {
                draggable.addEventListener('mousedown', (event) => {
                    let shiftX = event.clientX - draggable.getBoundingClientRect().left;
                    let shiftY = event.clientY - draggable.getBoundingClientRect().top;

                    function moveAt(pageX, pageY) {
                        draggable.style.left = pageX - shiftX + 'px';
                        draggable.style.top = pageY  - shiftY + 'px';
                    }

                    function onMouseMove(event) {
                        moveAt(event.pageX, event.pageY);
                    }

                    document.addEventListener('mousemove', onMouseMove);

                    document.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', onMouseMove);
                    }, { once: true });
                });

                draggable.ondragstart = () => {
                    return false;
                };
            }
});

function verifica() {
    var total = 0;
    const size = document.getElementById('result');
    size.style.width = '150px';
    size.style.height = '150px';
    if (document.getElementById("q1b") && document.getElementById("q1b").checked) {
        total += 1;
    }
    if (document.getElementById("q2a") && document.getElementById("q2a").checked) {
        total += 1;
    }
    var r = "Acertos: " + total + " pontos.\n ";
    document.getElementById("resultado").innerHTML = r;
}

function closeresult(){
    const size = document.getElementById('result');
    size.style.width = '0';
    size.style.height = '0';
    size.style.transition = 'width 0.5s' + 'height 0.5s';
}

const draggable = document.getElementById('result');

draggable.addEventListener('mousedown', (event) => {
    let shiftX = event.clientX - draggable.getBoundingClientRect().left;
    let shiftY = event.clientY - draggable.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        draggable.style.left = pageX - shiftX + 'px';
        draggable.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});

draggable.ondragstart = () => {
    return false;
};



function page00(){
    const sizeSon = document.getElementById('main1');
    const sizeMain = document.getElementById('main0');
    sizeSon.style.width = 'auto';
    sizeSon.style.height = 'auto';
    sizeMain.style.height = '0';
    sizeMain.style.width = '0';
    sizeMain.style.paddingBottom = "0px";
    sizeMain.style.paddingTop = "0px";
    sizeMain.style.backgroundColor = "rgba(255, 255, 255, 0)";
    sizeSon.style.backgroundColor = "black";
    sizeSon.style.transition = "height 5s" + "width 5s";
    sizeSon.style.display = "flex";
    sizeSon.style.flexDirection = "column";
    sizeSon.style.transition = "height 5s, width 5s, display 5s, padding-bottom 0.5s, padding-top 1s";
    sizeMain.style.transition = "height 5s, width 5s, display 5s, padding-bottom 0.5s, padding-top 1s";
}

function changeBack(){
    const main = document.getElementById("main0");
    const BImage = document.getElementById("backI");
    const vidContainer = document.querySelector(".vid");
    if (check == 1) {
        // Remove any existing video
        while (vidContainer.firstChild) {
            vidContainer.removeChild(vidContainer.firstChild);
        }

        main.style.background = "none";

        // Cria o elemento de vídeo
        const video = document.createElement('video');
        video.id = 'bg-video';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;

        // Cria o elemento source e define o caminho do vídeo
        const source = document.createElement('source');
        source.src = 'Images/4k.mp4';
        source.type = 'video/mp4';

        // Adiciona o source ao vídeo
        video.appendChild(source);

        // Adiciona o vídeo ao contêiner de vídeo
        vidContainer.appendChild(video);

        // Aplica estilos ao vídeo
        video.style.position = 'absolute';
        video.style.top = '50%';
        video.style.left = '50%';
        video.style.width = '98%';
        video.style.height = '125%';
        video.style.objectFit = 'cover';
        video.style.transform = 'translate(-50%, -50%)';
        video.style.zIndex = '-1'; // Coloca o vídeo atrás do conteúdo

        // Remove a imagem de fundo
        main.style.backgroundImage = "none";
        BImage.style.backgroundImage = "none";
        video.style.borderRadius = "20px"

        check = 0;
    } else {
        // Remove o vídeo
        while (vidContainer.firstChild) {
            vidContainer.removeChild(vidContainer.firstChild);
        }

        // Restaura a imagem de fundo
        main.style.backgroundImage = "none";
        main.style.backgroundColor = "black";
        BImage.style.backgroundImage = "url(Images/gtr_eyes.jpg)";

        check = 1;
    }
    
}

function page01back(){
    const sizeFather = document.getElementById('main0');
    const sizeMain = document.getElementById('main1');
    sizeFather.style.width = 'auto';
    sizeFather.style.height = 'auto';
    sizeMain.style.height = '0';
    sizeMain.style.width = '0';
    sizeFather.style.paddingBottom = '250px'
    sizeFather.style.paddingTop = '250px';
    sizeMain.style.backgroundColor = "rgba(255, 255, 255, 0)";
    sizeFather.style.backgroundColor = "black";
    sizeMain.style.transition = "height 5s" + "width 5s";
    sizeMain.style.display = "none";
    sizeFather.style.transition = "height 5s, width 5s, display 5s, padding-bottom 0.5s, padding-top 1s";
    sizeMain.style.transition = "height 5s, width 5s, display 5s, padding-bottom 0.5s, padding-top 1s";
}

function page01next(){
    const sizeMain = document.getElementById('main1');
    const sizeSon = document.getElementById('main2');
    sizeSon.style.width = 'auto';
    sizeSon.style.height = 'auto';
    sizeMain.style.height = '0';
    sizeMain.style.width = '0';
    sizeMain.style.backgroundColor = "rgba(255, 255, 255, 0)";
    sizeSon.style.backgroundColor = "black";
    sizeSon.style.transition = "height 5s" + "width 5s";
    sizeMain.style.display = "none";
    sizeSon.style.display = "flex";
    sizeSon.style.flexDirection = "column";
    sizeSon.style.transition = "height 5s, width 5s, display 5s";
    sizeMain.style.transition = "height 5s, width 5s, display 5s";
}

function page02back(){
    const sizeFather = document.getElementById('main1');
    const sizeMain = document.getElementById('main2');
    sizeFather.style.width = 'auto';
    sizeFather.style.height = 'auto';
    sizeMain.style.height = '0';
    sizeMain.style.width = '0';
    sizeMain.style.backgroundColor = "rgba(255, 255, 255, 0)";
    sizeFather.style.backgroundColor = "black";
    sizeMain.style.transition = "height 5s" + "width 5s, display 5s";
    sizeMain.style.display = "none";
    sizeFather.style.display = "flex";
    sizeFather.style.flexDirection = "column";
    sizeFather.style.transition = "height 5s, width 5s, display 5s";
    sizeMain.style.transition = "height 5s, width 5s, display 5s";
}

function page02next(){
    const sizeMain = document.getElementById('main1');
    const sizeSon = document.getElementById('main2');
    sizeSon.style.width = 'auto';
    sizeSon.style.height = 'auto';
    sizeMain.style.height = '0';
    sizeMain.style.width = '0';
    sizeMain.style.backgroundColor = "rgba(255, 255, 255, 0)";
    sizeSon.style.backgroundColor = "black";
    sizeSon.style.transition = "height 5s" + "width 5s, display 5s";
    sizeMain.style.display = "none";
    sizeSon.style.display = "flex";
    sizeSon.style.flexDirection = "column";
    sizeSon.style.transition = "height 5s, width 5s, display 5s";
    sizeMain.style.transition = "height 5s, width 5s, display 5s";
}