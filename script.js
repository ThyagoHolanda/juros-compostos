function calculadora(){
    window.alert("Inicio!!!")

    valorinicial = Number(document.getElementById('valor').value)
    aporte = Number(document.getElementById('aporteM').value)
    juros = Number((document.getElementById('juros').value/12)/100)
    ano = Number(document.getElementById('ano').value)
    montante = 0
    res= document.getElementById('res')
    taxa = []

    alert(`Valor Inicial: ${valorinicial}`)
    alert(`Aporte: ${aporte}`)
    alert(`juros: ${juros}`)
    alert(`Ano: ${ano}`)

    /**
    for (i = 0; i < (ano*12); i++) {
        if(i==0){
            montante = (((valorinicial+aporte)*juros))+(valorinicial+aporte)
        }else{
            montante = (((montante+aporte)*juros))+(montante+aporte)
        }
    }
    */
    
    for (i = 0; i < (ano*12); i++) {
        if(i==0){
            taxa[i] = ((valorinicial+aporte)*(juros+1)).toFixed(2)
        }else{
            taxa[i] = ((taxa[i-1]+aporte)*(juros+1)).toFixed(2)
        }
    }
    soma = 0
    for (i=0; i < taxa.length; i++){
        montante += Number(taxa[i])
    }

    res.innerHTML = montante
    //totalinvestido = valorinicial+(aporte*(ano*12))
    
    
    
    /**
    res.innerHTML = `Total Investido: R$ ${totalinvestido.toFixed(2)}
    <br>Total de Juros: ${(montante-totalinvestido).toFixed(2)}
    <br>Montante: R$ ${montante.toFixed(2)}`
    
    Costumizar numero em Real
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    **/

}