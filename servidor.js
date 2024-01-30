const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render("index")
})

app.post("/soma", (requisicao, resposta) => {
    let soma = requisicao.body.n1 + requisicao.body.n2
    resposta.render("resultado", {valor: soma})
})

app.listen(8080)
