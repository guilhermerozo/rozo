var teste = 0;
setInterval(piscar, 500); 
function piscar(){
    if (teste<1){
        teste++;
        document.getElementById("eae professor?").style.opacity = '1';
    }else{
        teste = 0;
        document.getElementById("eae professor".style.opacity = "0")
    }
} 
    

