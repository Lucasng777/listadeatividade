function Exercicio1(){
    let atvi
    while(true){
        atvi = prompt ("digite uma nota de 0 a 10") ;
        atvi = parseInt (atvi);
        if (atvi <0|| atvi>10){
            alert("valor invalido");
        } else {
            break;
        }
    }
}
