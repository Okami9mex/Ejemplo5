const txtOp = document.getElementById("opera1");
const operar = document.getElementById("operador");
const txtOp2 = document.getElementById("opera2");
const butom = document.getElementById("calcular");
const resu = document.getElementById("resultado");

butom.addEventListener('click', calcula);

function calcula() {
    const operando = operar.value;
    let bloc1 = parseFloat(txtOp.value);
    let bloc2 = parseFloat(txtOp2.value);
    
    if(operando == "+" || operando == "-" || operando == "/" || operando == "*" ){
        console.log("si se puede mi rey");
        switch(operando){
            case "+":
                resultado = bloc1 + bloc2;
                break;
            case "-":
                resultado = bloc1 - bloc2;
                break;
            case "/":
                resultado = bloc1 / bloc2;
                break;
            case "*":
                resultado = bloc1 * bloc2;
                break;            
        }
        resu.innerText = "El total es :" + resultado;
    }else{
        console.log("No se puede animal")
    } 
    
}