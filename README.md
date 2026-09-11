Template String

---------------------x---------------------------

import http from "http";

const servidor = http.createServer((req, res) => { 

let nome = "Adrielly";
let horario = new Date().toLocaleTimeString("pt-br");

//template strings
const html = `
	<!DOCTYPE html>
	<html lang= "pt-br">
	<head>
		<meta charset= "UTF-8">
		<title>Minha página</title>
	</head>
	
	<body>
		<h1>Bem-vindo ${nome}</h1>
		<p>Agora são ${horario}</p>
	</body>
	</html>
`

	res.writeHead(200, { "Content-Type": "text/html" });  
	res.end(html);
});
	
servidor.listen(3000, () => {  
console.log("Servidor rodando em http://localhost:3000");
});

---------------------x---------------------------

## map() or .foreach(), it's the question

import http from "http";

const servidor = http.createServer((req, res) => {

	let produtos = ["Teclado", "Mouse", "Monitor"]

	const itens = produtos.map((produto) =>
		`<li>${produto}</li>`
	).join(" ")

	res.writeHead(200, { "Content-Type": "text/html" });  
	res.end(`${itens}`);
});

const html = `
	<!DOCTYPE html>
	<html lang= "pt-br">
	<head>
		<meta charset= "UTF-8">
		<title>Minha página</title>
	</head>
	
	<body>
		<h1>Lista de Produtos</h1>
		<ul>
			<li>Teclado</li>
			<li>Mouse</li>
			<li>Monitor</li>
		</ul>
	</body>
	</html>
`
	
servidor.listen(3000, () => {  
console.log("Servidor rodando em http://localhost:3000");
});


---------------------x---------------------------

MAIN.JS

let numeros = [10, 20, 30, 40]

//<p>{numeros}</p>

console.log(numeros);
console.log(numeros[0]);

numeros.forEach((numero) => console.log(numero * 2));

numeros_dobrados = numeros.map((numero) => (numero * 2));

console.log(numeros_dobrados);