
//ARRAY
var jogo=[]; //posições jogadas e vazias
var tabuleiro=[]; //controle visual, vai atualizar as imagens do tabuleiro jogador vs jogador
var tabuleiro2=[]; //controle visual, vai atualizar as imagens do tabuleiro jogador vs cpu

//BOOLEAN

//verifica se o jogo está rodando
var jogando=false;

//verifica se o tabuleiro vai aparecer ou não
var tabuleiroVisivel=false; 

//verifica se é para desenhar as jogadas do PVP
var desenhaPVP=false; 
var desenhaPVE=false;

//verifica de quem é a vez
var playTime=false; 
var bolinhaGanhou=false;
var xizinhoGanhou=false;

//variavel auxiliar para controlar a cpu
var jogada=0; 

//PONTUAÇÃO
var pontosJogador1=0;
var pontosJogador2=0;
var pontosJogador=0;
var pontosCPU=0;

//vai iniciar o jogo
inicializar(); 

function inicializar(){
	//Vai ocultar o tabuleiro
	ocultarObjetos(); 
	jogo=[
		["","",""],
		["","",""],
		["","",""]
	];
	
	tabuleiro=[
		[document.getElementById("a1"),document.getElementById("a2"),document.getElementById("a3")],
		[document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3")],
		[document.getElementById("c1"),document.getElementById("c2"),document.getElementById("c3")]
	];

	tabuleiro2=[
		[document.getElementById("q1"),document.getElementById("q2"),document.getElementById("q3")],
		[document.getElementById("w1"),document.getElementById("w2"),document.getElementById("w3")],
		[document.getElementById("e1"),document.getElementById("e2"),document.getElementById("e3")]
	];
}

//Vai "reiniciar" o jogo a cada termino de partida
function reinicializar(){ 
	inicializar();
	document.getElementById("menu").style.display="flex";
}

//ATUALIZA TABULEIRO
function update(){
	if(desenhaPVP){
		drawPVP();
	}else{
		drawPVE();
	}
}

//OCULTA TABULEIRO
function ocultarObjetos(){
	document.getElementById("tabuleiro").style.display="none";
	document.getElementById("tabuleiro2").style.display="none";
	tabuleiroVisivel=false;
}

//JOGADOR VS JOGADOR MENU
function pvp(){
	document.getElementById("tabuleiro").style.display="flex";	
	tabuleiroVisivel=true;
	jogada=0
	jogando=true;
	desenhaPVP=true;
	desenhaPVE=false;
	if(tabuleiroVisivel && desenhaPVP){
		//vai esconder o menu / mostrar os pontos Jogador vs Jogador / iniciar o jogo na vez do X
		document.getElementById("menu").style.display="none";
		document.getElementById("pontosJogador1").innerHTML="Jogador 1: " + pontosJogador1;
		document.getElementById("pontosJogador2").innerHTML="Jogador 2: " + pontosJogador2;
		playTime = true;
		jogarPVP();
	}else{
		return(pvp());
	}
}

//JOGADOR VS COMPUTADOR MENU
function pve(){
	document.getElementById("tabuleiro2").style.display="flex";
	tabuleiroVisivel=true;
	jogada=0
	jogando=true;
	desenhaPVP=false;
	desenhaPVE=true;
	if(tabuleiroVisivel && (desenhaPVP==false)){
		//vai esconder o menu / mostrar os pontos Jogador vs CPU / iniciar o jogo na vez do X
		document.getElementById("menu").style.display="none";
		document.getElementById("pontosJogador").innerHTML="Jogador: " + pontosJogador;
		document.getElementById("pontosCPU").innerHTML="CPU: " + pontosCPU;
		playTime = true;
		jogarPVE();
	}else{
		return(pve());
	}
}

//DESENHA AS JOGADAS DO PVP
function drawPVP(){
	//vai percorrer as linhas
	for(var l=0; l < 3; l++){ 
		//vai percorrer as colunas
		for(var c=0; c < 3; c++){ 
			if(jogo[l][c]=="x"){
				tabuleiro[l][c].innerHTML="<img src='./img/x.png'>";
				tabuleiro[l][c].style.cursor="default";
			}else if(jogo[l][c]=="o"){
				tabuleiro[l][c].innerHTML="<img src='./img/o.png'>";;
				tabuleiro[l][c].style.cursor="default";
			}else{
				tabuleiro[l][c].innerHTML="";
				tabuleiro[l][c].style.cursor="pointer";
			}	
		}	
	}	
}

function drawPVE(){
	for(var l=0; l < 3; l++){ 
		for(var c=0; c < 3; c++){ 
			if(jogo[l][c]=="x"){
				tabuleiro2[l][c].innerHTML="<img src='./img/x.png'>";
				tabuleiro2[l][c].style.cursor="default";
			}else if(jogo[l][c]=="o"){
				tabuleiro2[l][c].innerHTML="<img src='./img/o.png'>";
				tabuleiro2[l][c].style.cursor="default";
				//CPU pensando(fica com muito delay se o jogador clicar varias vezes)
				//setTimeout("drawCPU()",300); 
			}else{
				tabuleiro2[l][c].innerHTML="";
				tabuleiro2[l][c].style.cursor="pointer";
			}
		}	
	}	
}		

//Se fosse fazer parecer que a CPU está pensando (tem que arrumar o delay)
/*function drawCPU(){
	for(var l=0; l < 3; l++){ //vai percorrer as linhas
		for(var c=0; c < 3; c++){ //vai percorrer as colunas
			if(jogo[l][c]=="o"){
				tabuleiro2[l][c].innerHTML="<img src='./img/o.png'>";
				tabuleiro2[l][c].style.cursor="default";
			}
		}
	}
}*/
	
//JOGADOR VS JOGADOR
function jogarPVP(p){
	//JOGADOR X
	if((jogando)&&(playTime)){ 
		switch(p){
			case 1: 
				if(jogo[0][0]==""){
					jogo[0][0]="x";
					playTime=false;
				}
			break;
			case 2: 
				if(jogo[0][1]==""){
					jogo[0][1]="x";
					playTime=false;
				}
			break;
			case 3: 
				if(jogo[0][2]==""){
					jogo[0][2]="x";
					playTime=false;
				}
			break;
			case 4: 
				if(jogo[1][0]==""){
					jogo[1][0]="x";
					playTime=false;
				}
			break;
			case 5: 
				if(jogo[1][1]==""){
					jogo[1][1]="x";
					playTime=false;
				}
			break;
			case 6: 
				if(jogo[1][2]==""){
					jogo[1][2]="x";
					playTime=false;
				}
			break;
			case 7: 
				if(jogo[2][0]==""){
					jogo[2][0]="x";
					playTime=false;
				}
			break;
			case 8: 
				if(jogo[2][1]==""){
					jogo[2][1]="x";
					playTime=false;
				}
			break;
			case 9: 
				if(jogo[2][2]==""){
					jogo[2][2]="x";
					playTime=false;
				}
			break;
		}
		update();
		verificaVitoria();
	//JOGADOR O
	}else if((jogando)&&(playTime==false)){ 
		switch(p){
			case 1: 
				if(jogo[0][0]==""){
					jogo[0][0]="o";
					playTime=true;
				}
			break;
			case 2: 
				if(jogo[0][1]==""){
					jogo[0][1]="o";
					playTime=true;
				}
			break;
			case 3: 
				if(jogo[0][2]==""){
					jogo[0][2]="o";
					playTime=true;
				}
			break;
			case 4: 
				if(jogo[1][0]==""){
					jogo[1][0]="o";
					playTime=true;
				}
			break;
			case 5: 
				if(jogo[1][1]==""){
					jogo[1][1]="o";
					playTime=true;
				}
			break;
			case 6: 
				if(jogo[1][2]==""){
					jogo[1][2]="o";
					playTime=true;
				}
			break;
			case 7: 
				if(jogo[2][0]==""){
					jogo[2][0]="o";
					playTime=true;
				}
			break;
			case 8: 
				if(jogo[2][1]==""){
					jogo[2][1]="o";
					playTime=true;
				}
			break;
			case 9: 
				if(jogo[2][2]==""){
					jogo[2][2]="o";
					playTime=true;
				}
			break;
		}
		update();
		verificaVitoria();
	}
}

//JOGADOR VS COMPUTADOR
function jogarPVE(p){
	//JOGADOR X
	if((jogando)&&(playTime)){  
		switch(p){
			case 1: 
				if(jogo[0][0]==""){
					jogo[0][0]="x";
					playTime=false;
				}
			break;
			case 2: 
				if(jogo[0][1]==""){
					jogo[0][1]="x";
					playTime=false;
				}
			break;
			case 3: 
				if(jogo[0][2]==""){
					jogo[0][2]="x";
					playTime=false;
				}
			break;
			case 4: 
				if(jogo[1][0]==""){
					jogo[1][0]="x";
					playTime=false;
				}
			break;
			case 5: 
				if(jogo[1][1]==""){
					jogo[1][1]="x";
					playTime=false;
				}
			break;
			case 6: 
				if(jogo[1][2]==""){
					jogo[1][2]="x";
					playTime=false;
				}
			break;
			case 7: 
				if(jogo[2][0]==""){
					jogo[2][0]="x";
					playTime=false;
				}
			break;
			case 8: 
				if(jogo[2][1]==""){
					jogo[2][1]="x";
					playTime=false;
				}
			break;
			case 9: 
				if(jogo[2][2]==""){
					jogo[2][2]="x";
					playTime=false;
				}
			break;
		}
		jogada++;
		update();
		verificaVitoria();
	}	
		//COMPUTADOR
		if((jogando)&&(playTime==false)){ 
		
		//Tentando ganhar
		
		//Linha 1 
		if((jogo[0][0]=="o")&&(jogo[0][1]=="o")&&(jogo[0][2]=="")){
			jogo[0][2]="o";
			playTime=true;
		}else if((jogo[0][0]=="o")&&(jogo[0][2]=="o")&&(jogo[0][1]=="")){
			jogo[0][1]="o";
			playTime=true;
		}else if((jogo[0][1]=="o")&&(jogo[0][2]=="o")&&(jogo[0][0]=="")){
			jogo[0][0]="o";
			playTime=true;
		//Linha 2	
		}else if((jogo[1][0]=="o")&&(jogo[1][1]=="o")&&(jogo[1][2]=="")){
			jogo[1][2]="o";
			playTime=true;
		}else if((jogo[1][0]=="o")&&(jogo[1][2]=="o")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[1][1]=="o")&&(jogo[1][2]=="o")&&(jogo[1][0]=="")){
			jogo[1][0]="o";
			playTime=true;
		//Linha 3	
		}else if((jogo[2][0]=="o")&&(jogo[2][1]=="o")&&(jogo[2][2]=="")){
			jogo[2][2]="o";
			playTime=true;
		}else if((jogo[2][0]=="o")&&(jogo[2][2]=="o")&&(jogo[2][1]=="")){
			jogo[2][1]="o";
			playTime=true;
		}else if((jogo[2][1]=="o")&&(jogo[2][2]=="o")&&(jogo[2][0]=="")){
			jogo[2][0]="o";
			playTime=true;
		//Coluna 1	
		}else if((jogo[0][0]=="o")&&(jogo[1][0]=="o")&&(jogo[2][0]=="")){
			jogo[2][0]="o";
			playTime=true;
		}else if((jogo[0][0]=="o")&&(jogo[2][0]=="o")&&(jogo[1][0]=="")){
			jogo[1][0]="o";
			playTime=true;
		}else if((jogo[1][0]=="o")&&(jogo[2][0]=="o")&&(jogo[0][0]=="")){
			jogo[0][0]="o";
			playTime=true;
		//Coluna 2
		}else if((jogo[0][1]=="o")&&(jogo[1][1]=="o")&&(jogo[2][1]=="")){
			jogo[2][1]="o";
			playTime=true;
		}else if((jogo[0][1]=="o")&&(jogo[2][1]=="o")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[1][1]=="o")&&(jogo[2][1]=="o")&&(jogo[0][1]=="")){
			jogo[0][1]="o";
			playTime=true;
		//Coluna 3	
		}else if((jogo[0][2]=="o")&&(jogo[1][2]=="o")&&(jogo[2][2]=="")){
			jogo[2][2]="o";
			playTime=true;
		}else if((jogo[0][2]=="o")&&(jogo[2][2]=="o")&&(jogo[1][2]=="")){
			jogo[1][2]="o";
			playTime=true;
		}else if((jogo[1][2]=="o")&&(jogo[2][2]=="o")&&(jogo[0][2]=="")){
			jogo[0][2]="o";
			playTime=true;
		//Diagonal 1	
		}else if((jogo[0][0]=="o")&&(jogo[1][1]=="o")&&(jogo[2][2]=="")){
			jogo[2][2]="o";
			playTime=true;
		}else if((jogo[0][0]=="o")&&(jogo[2][2]=="o")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[1][1]=="o")&&(jogo[2][2]=="o")&&(jogo[0][0]=="")){
			jogo[0][0]="o";
			playTime=true;
		//Diagonal 2	
		}else if((jogo[0][2]=="o")&&(jogo[1][1]=="o")&&(jogo[2][0]=="")){
			jogo[2][0]="o";
			playTime=true;
		}else if((jogo[0][2]=="o")&&(jogo[2][0]=="o")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[2][0]=="o")&&(jogo[1][1]=="o")&&(jogo[0][2]=="")){
			jogo[0][2]="o";
			playTime=true;
		
		//Tentando não perder	
		
		//Linha 1	
		}else if((jogo[0][0]=="x")&&(jogo[0][1]=="x")&&(jogo[0][2]=="")){
			jogo[0][2]="o";
			playTime=true;
		}else if((jogo[0][0]=="x")&&(jogo[0][2]=="x")&&(jogo[0][1]=="")){
			jogo[0][1]="o";
			playTime=true;
		}else if((jogo[0][1]=="x")&&(jogo[0][2]=="x")&&(jogo[0][0]=="")){
			jogo[0][0]="o";
			playTime=true;
		//Linha 2	
		}else if((jogo[1][0]=="x")&&(jogo[1][1]=="x")&&(jogo[1][2]=="")){
			jogo[1][2]="o";
			playTime=true;
		}else if((jogo[1][0]=="x")&&(jogo[1][2]=="x")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[1][1]=="x")&&(jogo[1][2]=="x")&&(jogo[1][0]=="")){
			jogo[1][0]="o";
			playTime=true;
		//Linha 3	
		}else if((jogo[2][0]=="x")&&(jogo[2][1]=="x")&&(jogo[2][2]=="")){
			jogo[2][2]="o";
			playTime=true;
		}else if((jogo[2][0]=="x")&&(jogo[2][2]=="x")&&(jogo[2][1]=="")){
			jogo[2][1]="o";
			playTime=true;
		}else if((jogo[2][1]=="x")&&(jogo[2][2]=="x")&&(jogo[2][0]=="")){
			jogo[2][0]="o";
			playTime=true;
		//Coluna 1	
		}else if((jogo[0][0]=="x")&&(jogo[1][0]=="x")&&(jogo[2][0]=="")){
			jogo[2][0]="o";
			playTime=true;
		}else if((jogo[0][0]=="x")&&(jogo[2][0]=="x")&&(jogo[1][0]=="")){
			jogo[1][0]="o";
			playTime=true;
		}else if((jogo[1][0]=="x")&&(jogo[2][0]=="x")&&(jogo[0][0]=="")){
			jogo[0][0]="o";
			playTime=true;
		//Coluna 2
		}else if((jogo[0][1]=="x")&&(jogo[1][1]=="x")&&(jogo[2][1]=="")){
			jogo[2][1]="o";
			playTime=true;
		}else if((jogo[0][1]=="x")&&(jogo[2][1]=="x")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[1][1]=="x")&&(jogo[2][1]=="x")&&(jogo[0][1]=="")){
			jogo[0][1]="o";
			playTime=true;
		//Coluna 3	
		}else if((jogo[0][2]=="x")&&(jogo[1][2]=="x")&&(jogo[2][2]=="")){
			jogo[2][2]="o";
			playTime=true;
		}else if((jogo[0][2]=="x")&&(jogo[2][2]=="x")&&(jogo[1][2]=="")){
			jogo[1][2]="o";
			playTime=true;
		}else if((jogo[1][2]=="x")&&(jogo[2][2]=="x")&&(jogo[0][2]=="")){
			jogo[0][2]="o";
			playTime=true;
		//Diagonal 1	
		}else if((jogo[0][0]=="x")&&(jogo[1][1]=="x")&&(jogo[2][2]=="")){
			jogo[2][2]="o";
			playTime=true;
		}else if((jogo[0][0]=="x")&&(jogo[2][2]=="x")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[1][1]=="x")&&(jogo[2][2]=="x")&&(jogo[0][0]=="")){
			jogo[0][0]="o";
			playTime=true;
		//Diagonal 2	
		}else if((jogo[0][2]=="x")&&(jogo[1][1]=="x")&&(jogo[2][0]=="")){
			jogo[2][0]="o";
			playTime=true;
		}else if((jogo[0][2]=="x")&&(jogo[2][0]=="x")&&(jogo[1][1]=="")){
			jogo[1][1]="o";
			playTime=true;
		}else if((jogo[2][0]=="x")&&(jogo[1][1]=="x")&&(jogo[0][2]=="")){
			jogo[0][2]="o";	
			playTime=true;
		}else{
			//Verifica se o tabuleiro está vazio e faz uma jogada aleatoria
			//jogada passou de 8 ele vai procurar o ultimo espaço livre
			if(jogada<8){
				do{
					l=Math.round(Math.random()*2);
					c=Math.round(Math.random()*2);
				}while(jogo[l][c]!="");
				jogo[l][c]="o";
				playTime=true;
			}else{
				for(var l=0; l<3; l++){
					for(var c=0; c<3; c++){
						if(jogo[l][c]=="" && playTime==false){
							jogo[l][c]="o";
							playTime=true;
						}
					}
				}
			}
		}
		jogada++;
		update();
		verificaVitoria();
	}
}

function verificaVitoria(){
	//linhas verticais (bolinha)
	for (var l=0; l < 3; l++){
		if((playTime)&&(jogo[l][0]=="o")&&(jogo[l][1]=="o")&&(jogo[l][2]=="o")){
			setTimeout(function() { alert("BOLINHA, O XIZINHO ESTÁ COM INVEJA DA SUA VITÓRIA"); }, 50);
			jogando=false;
			bolinhaGanhou=true;
			xizinhoGanhou=false; 
			pontuacao();
			setTimeout(reinicializar,800);
		}
	}
	
	//linhas honrizontais (bolinha)
	for (var c=0; c < 3; c++){
		if((playTime)&&(jogo[0][c]=="o")&&(jogo[1][c]=="o")&&(jogo[2][c]=="o")){
			setTimeout(function() { alert("BOLINHA, VOCÊ É IMPLACÁVEL!"); }, 50);
			jogando=false;
			bolinhaGanhou=true;
			xizinhoGanhou=false; 
			pontuacao();
			setTimeout(reinicializar,800);
		}
	}
	
	//linhas diagonais(bolinha)
	if((playTime)&&(jogo[0][0]=="o")&&(jogo[1][1]=="o")&&(jogo[2][2]=="o")){
		setTimeout(function() { alert("BOLINHA, VOCÊ É DE MAIS!"); }, 50);
		jogando=false;
		bolinhaGanhou=true;
		xizinhoGanhou=false; 
		pontuacao();
		setTimeout(reinicializar,800);
	}else if((playTime)&&(jogo[0][2]=="o")&&(jogo[1][1]=="o")&&(jogo[2][0]=="o")){
		setTimeout(function() { alert("BOLINHA, VOCÊ PISOU NO XIZINHO!"); }, 50);
		jogando=false;
		bolinhaGanhou=true;
		xizinhoGanhou=false; 
		pontuacao();
		setTimeout(reinicializar,800);
	}
	
	//linhas verticais (xizinho)
	for (var l=0; l < 3; l++){
		if((playTime==false)&&(jogo[l][0]=="x")&&(jogo[l][1]=="x")&&(jogo[l][2]=="x")){
			setTimeout(function() { alert("XIZINHO, A BOLINHA ESTÁ COM INVEJA DA SUA VITÓRIA"); }, 50);
			jogando=false;
			bolinhaGanhou=false;
			xizinhoGanhou=true; 
			pontuacao();
			setTimeout(reinicializar,800);
		}
	}
	
	//linhas honrizontais (xizinho)
	for (var c=0; c < 3; c++){
		if((playTime==false)&&(jogo[0][c]=="x")&&(jogo[1][c]=="x")&&(jogo[2][c]=="x")){
			setTimeout(function() { alert("XIZINHO, VOCÊ É IMPLACÁVEL!"); }, 50);
			jogando=false;
			bolinhaGanhou=false;
			xizinhoGanhou=true; 
			pontuacao();
			setTimeout(reinicializar,800);
		}
	}
	
	//linhas diagonais(xizinho)
	if((playTime==false)&&(jogo[0][0]=="x")&&(jogo[1][1]=="x")&&(jogo[2][2]=="x")){
		setTimeout(function() { alert("XIZINHO, VOCÊ É DE MAIS!"); }, 50);
		jogando=false;
		bolinhaGanhou=false;
		xizinhoGanhou=true; 
		pontuacao();
		setTimeout(reinicializar,800);
	}else if((playTime==false)&&(jogo[0][2]=="x")&&(jogo[1][1]=="x")&&(jogo[2][0]=="x")){
		setTimeout(function() { alert("XIZINHO, VOCÊ PISOU NA BOLINHA!"); }, 50);
		jogando=false;
		bolinhaGanhou=false;
		xizinhoGanhou=true; 
		pontuacao();
		setTimeout(reinicializar,800);
	}

	if((jogando) && (jogo[0][0]!="") && (jogo[0][1]!="") && (jogo[0][2]!="") && (jogo[1][0]!="") && (jogo[1][1]!="") && 
		(jogo[1][2]!="") && (jogo[2][0]!="") && (jogo[2][1]!="") &&  (jogo[2][2]!="")){
		setTimeout(function() { alert("DEU VELHA"); }, 50);
		jogando=false;
		bolinhaGanhou=false;
		xizinhoGanhou=true; 
		setTimeout(reinicializar,800);
	}

}

function pontuacao(){
	//CONTRA PVP
	if(desenhaPVP && xizinhoGanhou){
		document.getElementById("pontosJogador1").innerHTML="Jogador 1: " + ++pontosJogador1;
	}else if(desenhaPVP && bolinhaGanhou){
		document.getElementById("pontosJogador2").innerHTML="Jogador 2: " + ++pontosJogador2;
	//CONTRA CPU		
	}else if(desenhaPVP == false && xizinhoGanhou){
				document.getElementById("pontosJogador").innerHTML="Jogador: " + ++pontosJogador;
	}else if(desenhaPVP == false && bolinhaGanhou){
		document.getElementById("pontosCPU").innerHTML="CPU: " + ++pontosCPU;
	}
}

//Reseta TODOS os pontos
function resetaPontuacao(){
	pontosJogador1 = 0;
	pontosJogador2 = 0;
	pontosJogador = 0;
	pontosCPU = 0;

	document.getElementById("pontosJogador1").innerHTML="";
	document.getElementById("pontosJogador2").innerHTML="";
	document.getElementById("pontosJogador").innerHTML="";
	document.getElementById("pontosCPU").innerHTML="";
}