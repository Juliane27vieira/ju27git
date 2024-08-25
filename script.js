const titulo=document.getElementById("titulo");
console.log(titulo)
titulo.innerText="NOVO TITULO"
const link=document.querySelector("a");
console.log(link)
link.innerText="CLIQUE PARA IR A PAGINA PROZ"
const lista=document.getElementById("lista-ordenada");

console.log(lista)
const titulo1 = document.querySelector("ul")
console.log(titulo1)
titulo1.innerHTML=`
<p>Lista de opçoes</p>
<ul>
 <ol>Opçao 1
 <a href="www.google.com.br">Clique aqui para o Google</a>
 </ol>
 <ol>Opcao 2
 <a href="www.uol.com.br">Clique aqui para o Uol</a>
 </ol>
 <ol>Opcao 3
 <a href="https://flexboxfroggy.com/">Clique aqui para o Froggy</a>
 </ol>
</ul> 
`
console.log(titulo1)
console.log('ola')
