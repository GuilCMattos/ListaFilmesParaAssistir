// var filmes = ["Yesterday", "A chegada", "Escola de Rock"]

// for(let i = 1; i < 9; i++) { 
//     filmes.push(`Harry Potter ${i}`)
// }

// for(let i = 0; i < filmes.length; i++) { 

//     document.write(`<p> ${filmes[i]} </p>`)

// }

var listaFilmes = []

 

  function Buscar() { 
      let elementoResultado = document.getElementById("resultado")
      let linkImagem = document.getElementById("imagem").value
      
      if (listaFilmes.includes(linkImagem)) { 
          alert("Você já incluiu esse filme!")
      } else { 
          listaFilmes.push(linkImagem)
          let qtdItem = listaFilmes.length;
          elementoResultado.innerHTML = elementoResultado.innerHTML + "<img src=" + listaFilmes[qtdItem -1] + ">"
      }
    
      
  }

//   for(let i = 0; i < listaFilmes.length; i++) { 
//     document.write(`<img src=${listaFilmes[i]}>`)
// }