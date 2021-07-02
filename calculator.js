function insert(num){
    document.form.textview.value = document.form.textview.value + num
}

function equal(){
    var resultado = document.form.textview.value;
    if(resultado){
        document.form.textview.value = eval(resultado)
    }   
}

function clean(){
    document.form.textview.value = ""
}