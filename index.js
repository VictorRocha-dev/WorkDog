var cor = document.getElementById('ativacor')
var ativacor = false;

function macaco(){
    if(window.scrollY >= 60){
        ativacor = true;
        return mudarcor()
    }
    else if(window.scrollY == 0){
        cor.style.removeProperty("background");
    }
    

}
function mudarcor(){
    if (ativacor == true){
        cor.style.backgroundColor = "rgba(0, 0, 0, 0.521)";
        
    }
}

window.addEventListener('scroll' , macaco);