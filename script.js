function calculadora(){
    //window.alert("Funcionou!!!")
    valorinicial = Number(document.getElementById('valor').value)
    aporte = Number(document.getElementById('aporteM').value)
    juros = Number((document.getElementById('juros').value/12)/100)
    mes = Number(document.getElementById('mes').value)
    montante = 0

    for (i = 0; i < mes; i++) {
        if(i==0){
            montante = (((valorinicial+aporte)*juros))+(valorinicial+aporte)
        }else{
            montante = (((montante+aporte)*juros))+(montante+aporte)
        }
    }


    
    res= document.getElementById('res')
    res.innerHTML = montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}