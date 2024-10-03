function animar(){
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativo');
}
function animarMenu(){
    const menu = document.getElementById('menu-materias');
    menu.classList.toggle('abrir');
    menu.addEventListener('click', animarMenu);
}

function animar2(){
    const btn2 = document.getElementById('btn-menu2');
    btn2.classList.toggle('ativado');
}

function animarMenu2(){
    const menu2 = document.getElementById('menu-menu');
    menu2.classList.toggle('aberto');
    menu2.addEventListener('click', animarMenu2);
}