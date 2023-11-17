
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
                const del = document.createElement("button")
                del.className = "delete"
                del.innerText = "excluir"
                del.addEventListener("click",()=>{
                    fetch(`http://192.168.1.48:3000/produtos/excluir/${produto.id}`,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type' : 'application/json'
                        }
                    }).then((resposta)=>{
                        if(resposta.status != 200){
                            console.log(resposta.json())
                        }
                    })
                })
                card.append(desc,preco,qtd,edit,del)
                div.append(card)
            })
        })
    }
})