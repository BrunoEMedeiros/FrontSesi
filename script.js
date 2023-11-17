// Fetch serve para requisicoes HTTP

fetch("http://localhost:3000/produtos")
.then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{
            // dados é a lista de objetos que vem
            // da API
            const div = document.querySelector("#root");
            dados.map((produto)=>{
                const card = document.createElement("article")
                const desc = document.createElement("span")
                desc.innerText = produto.desc
                const preco = document.createElement("span")
                preco.innerText = produto.preco
                const qtd = document.createElement("span")
                qtd.innerText = produto.qtd
                card.append(desc,preco,qtd)
                div.append(card)
            })
        })
    }
})