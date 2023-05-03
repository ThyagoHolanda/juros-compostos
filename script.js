function calculadora(){
    //window.alert("Inicio!!!")

    valorinicial = Number(document.getElementById('valor').value)
    aporte = Number(document.getElementById('aporteM').value)
    juros = Number(((document.getElementById('juros').value/12)/100)+1)
    ano = Number(document.getElementById('ano').value)
    res= document.getElementById('res')
    res.innerHTML = "";
    mes = []

    /*
    alert(`Valor Inicial: ${valorinicial}`)
    alert(`Aporte: ${aporte}`)
    alert(`juros: ${juros}`)
    alert(`Ano: ${ano}`)
    */
    for (i = 0; i < (ano*12); i++) {
        if(i==0){
            mes[i] = (valorinicial+aporte)*juros

            res.innerHTML += `<br>Mês ${i+1} -> ${mes[i].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>`
        }else {
            mes[i] = (mes[i-1]+aporte)*juros

            res.innerHTML += `Mês ${i+1} -> ${mes[i].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>`
        }
    }
    //res.innerHTML += `<br>Total -> ${mes[(ano*12)-1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>`
    
    totalinvestido = valorinicial+(aporte*(ano*12))
    rendimento = mes[mes.length - 1]-totalinvestido
    acumulado = mes[mes.length - 1]
    res.innerHTML += `<br>Total investido = ${totalinvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>`
    res.innerHTML += `Rendimento = ${rendimento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>`
    res.innerHTML += `Acumulado = ${acumulado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`

    /**    
    Costumizar numero em Real
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    **/

}