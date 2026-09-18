import http from "http";
import gerarTabelaProdutos from "./produtos.js";

function layout(title, content) {
	return `
	<!DOCTYPE html>
	<html lang= "pt-br">
	<head>
		<meta charset= "UTF-8">
		<title>${title}</title>
	</head>
	
	<body>
		<nav>
			<a href="/">Início</a>
			<a href="/produtos">Produtos</a>
			<a href="/sobre">Sobre</a>
		</nav>
		${content}
	</body>
	</html>
	`
}

function paginaInicial() {
	return layout("Inicio", "<h1>Bem-vindx à Loja</h1>")
}

function paginaProdutos() {
	return layout("Produtos", gerarTabelaProdutos())
}

function paginaSobre() {
	return layout("Sobre Nós", "<h1>Sobre Nós</h1>")
}

function paginaErro() {
	return layout("Inicio", "<h1>Página não encontrada - 404</h1>")
}



const servidor = http.createServer((req, res) => {

	if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end(paginaInicial())
		return
    }

    else if (req.url == "/produtos") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end(paginaProdutos())
		return
    }

	else if (req.url == "/sobre") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end(paginaSobre())
		return
    }
	
	else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end(paginaErro())
		return
    }

})
	
servidor.listen(3000, () => {  
console.log("Servidor rodando em http://localhost:3000");
});