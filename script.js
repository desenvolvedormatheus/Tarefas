// Adicionar tarefa
document.querySelector("#btnAdicionar").addEventListener("click", function(){
    let entrada = document.querySelector("#tarefa").value
    if(entrada == ""){
        alert("Tarefa nao pode estar vazia!")
    }else if(entrada[0] == " "){
        alert("Tarefa não pode começar com espaços em branco")
    }else{
        let lista = document.querySelector("#listaTarefas")
        let item = document.createElement("li")
        item.innerText = entrada
        lista.appendChild(item);
        // adiciona o btn X
        let btnExcluir = document.createElement('button')
        btnExcluir.setAttribute("class","btnapagar")
        btnExcluir.innerHTML = "&#10006;"
        item.appendChild(btnExcluir)
        // Apagar item
        btnExcluir.addEventListener('click', function(ev) {
            ev.target.parentNode.style.transform = "rotate3d(1,0,0,90deg)"
            function apagar(){ ev.target.parentNode.remove() }
            setTimeout(apagar, 260);
        })
    }
})

// Animação do input
const section = document.querySelector("section")
const input = document.querySelector("#tarefa")
input.addEventListener("click",function() {
    section.style.transform = "scale(1.3)"
})
input.addEventListener("blur",function() {
    section.style.transform = "scale(1)"
})

// Tarefa concluida
const lista = document.querySelector("ul")
lista.addEventListener("click", function(ev){
    ev.target.classList.toggle("concluida")
})

let itens = document.querySelectorAll('li')
for (let i = 0; i < itens.length; i++) {
    let btnExcluir = document.createElement('button')
    btnExcluir.setAttribute("class","btnapagar")
    btnExcluir.innerHTML = "&#10006;"
    itens[i].appendChild(btnExcluir)
    btnExcluir.addEventListener('click', function(ev) {
        ev.target.parentNode.style.transform = "rotate3d(1, 0, 0, 90deg)"
        function apagar(){ ev.target.parentNode.remove() }
        setTimeout(apagar, 250);
  })
}