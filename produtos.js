import http from "http";
import { url } from "inspector";

const servidor = http.createServer((req, res) => {

	let produtos = [
		{	nome: "Placa Mãe", 
			preco: 1969.99, 
			descricao: "Placa-Mãe MSI X870E GAMING PLUS WIFI, AMD, AM5, ATX, DDR5, Wi-Fi",
			image: "https://images.kabum.com.br/produtos/fotos/941248/placa-mae-msi-x870e-gaming-plus-wifi-amd-am5-atx-ddr5-wi-fi-x870egpw_1765807242_gg.jpg"
		},

		{	nome: "Memoria RAM", 
			preco: 1969.99, 
			descricao: "Memória Kingston Fury Beast, 16GB, 5200MHz, DDR5, CL40, Preto",
			image: "https://images.kabum.com.br/produtos/fotos/264718/memoria-kingston-fury-beast-16gb-5200mhz-ddr5-cl40-preto-kf552c40bb-16_1636662575_gg.jpg"
		},

		{	nome: "SSD NVMe", 
			preco: 799.99, 
			descricao: "SSD Kingston 500GB M.2 2280 NV3 PCIe 4.0 NVMe ",
			image: "https://images.kabum.com.br/produtos/fotos/621161/ssd-pcie-kingston-nv3-500gb-m-2-2280-nvme-leitura-5000-mb-s-e-gravacao-3000-mb-s-snv3s-500g_1726080929_gg.jpg"
		},

		{	nome: "SSD SATA", 
			preco: 930, 
			descricao: "SSD Sandisk Sdssda-1t00-g27, Plus, 1TB",
			image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/677925/SSD-Sandisk-Sdssda-1t00-g27-Plus-1TB-Sata-Iii-6gb-s-Leitura-535mb-s-Grava-o-350mb-s_1732574695_gg.jpg"
		},

		{	nome: "Processador",
			preco: 1199,
			descricao: "Processador AMD Ryzen 7 5700X",
			image: "https://images.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_gg.jpg"
		},

		{	nome: "Placa de Video",
			preco: 3099.99,
			descricao: "Placa de Vídeo MSI GeForce RTX 5060 Ti 8G SHADOW ",
			image: "https://images.kabum.com.br/produtos/fotos/893049/placa-de-video-msi-geforce-rtx-5060-ti-8g-shadow-2x-oc-plus-nvidia-geforce-8gb-gddr7-128-bit-g506t-8s2cp_1753900267_gg.jpg"
		},
		
		{	nome: "Fonte",
			preco: 659.99,
			descricao: "Fonte Gigabyte UD850GM PG5 V2, 850W, 80 PLUS Gold, Modular, PFC Ativo",
			image: "https://images.kabum.com.br/produtos/fotos/907602/fonte-gigabyte-ud850gm-pg5-v2-850w-80-plus-gold-modular-pfc-ativo-preto-28200-u85gb-1cbrr_1767367776_gg.jpg"
		},

		{	nome: "Water Cooler",
			preco: 499.99,
			descricao: "Water Cooler MSI MAG Coreliquid A15, ARGB, 240mm",
			image: "https://images.kabum.com.br/produtos/fotos/715999/water-cooler-msi-mag-coreliquid-a15-argb-240mm-intel-e-amd-preto-cla15240_1755281217_gg.jpg"
		},

		{	nome: "Gabinete",
			preco: 249.99,
			descricao: "Gabinete Gamer Kalkan Saga, M-ATX, Mid Tower, Lateral em Vidro Temperado",
			image: "https://images.kabum.com.br/produtos/fotos/989026/gabinete-gamer-kalkan-saga-m-atx-mid-tower-lateral-em-vidro-temperado-sem-fans-preto-klk00043_1775499076_gg.jpg"
		},

		{	nome: "Monitor",
			preco: 900,
			descricao: "Monitor Gamer MSI MAG 276CF E20",
			image: "https://images.kabum.com.br/produtos/fotos/993239/monitor-gamer-curvo-msi-mag-27-full-hd-200hz-0-5ms-rapid-va-freesync-premium-hdr-ready-preto-276cf-e20_1773944595_gg.jpg"
		},

		{	nome: "Mouse",
			preco: 102.90,
			descricao: "Mouse Gamer Sem Fio Redragon Griffin",
			image: "https://images.kabum.com.br/produtos/fotos/590472/mouse-gamer-sem-fio-redragon-griffin-8000-dpi-8-botoes-wireless-preto-m602-ks_1722352637_gg.jpg"
		},

		{	nome: "Teclado",
			preco: 139.99,
			descricao: "Teclado Mecânico Gamer Machenike K500B-B87 RGB, Switch RED",
			image: "https://images.kabum.com.br/produtos/fotos/531157/teclado-mecanico-gamer-machenike-k500b-b87-rgb-switch-red-layout-80-usb-c-abnt2-branco-e-azul-ref-jj02gz009_1784753177_gg.jpg"
		}
	];

	let linhas = produtos.map((produto) => `
	<tr>
		<td>${produto.nome}</td>
		<td>${produto.preco}</td>
		<td>${produto.descricao}</td>
		<td>
			<img width="150" src="${produto.image}"></img>
		</td>
	</tr>`
	).join(" ")
	
	

	let html = `
	<!DOCTYPE html>
	<html lang= "pt-br">
	<head>
		<meta charset= "UTF-8">
		<title>PC</title>
	</head>
	
	<body>
		<h1>Olá, você!</h1>
		<p>Tabela de Produtos</p>
		<table border = "1">
			<tr>
				<th>Produto</th>
				<th>Preço</th>
				<th>Descrição</th>
				<th>Imagem</th>
			</tr>

			${linhas}
		</table>
	</body>
	</html>
	`

	res.writeHead(200, { 'Content-Type': 'text/html' });  
	res.end(html);});
	
servidor.listen(3000, () => {  
console.log("Servidor rodando em http://localhost:3000");
});