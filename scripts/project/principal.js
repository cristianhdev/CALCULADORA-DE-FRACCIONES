function ValidarEntradaInputs(){
let input1EntradaTexto = runtime.objects.EntradaDeTexto1.getFirstInstance().text
let input2EntradaTexto = runtime.objects.EntradaDeTexto1.getFirstInstance().text

alert(input1EntradaTexto.length)
alert(input2EntradaTexto.length)

if(input1EntradaTexto.length<=2){
alert('1')
return 1
}else{
alert('2')
return 0
}
}
