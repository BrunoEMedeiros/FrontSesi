document.querySelector("button")
.addEventListener("click",()=>{
    fetch("http://localhost:3000/produtos/novo",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "id" : 5,
            "desc" : "guarana",
            "preco" : 3.50,
            "qtd" : 50
        })
    }).then((resposta)=>{
        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
})