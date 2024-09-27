let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("Comu");
        habilidades[6].classList.add("trab");
        habilidades[7].classList.add("criati");
        habilidades[8].classList.add("dedi");
        habilidades[9].classList.add("logistica");
    }
}



window.onscroll = function(){
    efectoHabilidades();
} 