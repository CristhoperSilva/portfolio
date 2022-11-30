function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    let menuIcone = document.querySelector('.menu-icone');
    if (menuMobile.classList.contains('closed')) {
        menuMobile.classList.remove('closed');
        menuIcone.classList.remove('bi-list');
        menuIcone.classList.add('bi-x');

    } else {
        menuMobile.classList.add('closed');
        menuIcone.classList.remove('bi-x');
        menuIcone.classList.add('bi-list');
    }
}

var i = 0;

function typeWriter() {    
    let txt = 'Desenvolvedor Front-End. '
    let speed = 100;
    document.getElementById("stack-html").classList.add('closed')
    if (i < txt.length) {
        document.getElementById("stack").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    }
}