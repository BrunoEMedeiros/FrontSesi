
fetch("http://localhost:3000/produtos")
.then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{
            // dados é a lista de objetos que vem
            // da API
            const div = document.querySelector("#root");
            dados.map((produto)=>{
                const card = document.createElement("article")
                card.id = produto.id
                const desc = document.createElement("span")
                desc.innerText = produto.desc
                const preco = document.createElement("span")
                preco.innerText = produto.preco
                const qtd = document.createElement("span")
                qtd.innerText = produto.qtd
                const edit = document.createElement("a")
                edit.className = "edit"
                edit.innerText = "editar"
edit.href  = `./formulario.html?id=${produto.id}&desc=${produto.desc}&preco=${produto.preco}&qtd=${produto.qtd}`              
                const del = document.createElement("a")
                del.className = "delete"
                del.innerText = "excluir"
                card.append(desc,preco,qtd,edit,del)
                div.append(card)
            })
        })
    }
})