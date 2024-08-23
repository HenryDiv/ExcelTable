 function addItem(){
    //obter valor digitado pelo user//
    var nome=document.getElementById("nome").value
    var valor =document.getElementById("valor").value
    var quantidade=document.getElementById("quantidade").value

    if(!nome || !valor || !quantidade){
        alert("Insira todos os valores")
        return
    }
 
//cria uma linha para tabela
 var tabela=document.getElementById("tabela").getElementsByTagName("tbody")[0]
 var novaLinha=tabela.insertRow(tabela.rows.length)
 var celulaNome=novaLinha.insertCell(0)
 var celulaValor=novaLinha.insertCell(1)
 var celulaQuantidade=novaLinha.insertCell(2)

 //prencher  as celulas
 
 celulaNome.innerHTML=nome
celulaValor.innerHTML=valor
celulaQuantidade.innerHTML=quantidade

//limpar campos

document.getElementById("nome").value=""
document.getElementById("valor").value=""
document.getElementById("quantidade").value=""
 }

 function exportarExcel(){
    var tabela=document.getElementById("tabela")
    var nomeArquivo='tabela_produtos.xlsx'
    var wb=XLSX.utils.table_to_book(tabela,{sheet:"tabela de produtos"})
    XLSX.writeFile(wb,nomeArquivo)
 }
