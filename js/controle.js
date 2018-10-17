
//variaveis array
var jogo=[]; //posições jogadas e vazias
var tabuleiro=[]; //controle visual, vai atualizar as imagens

//variaveis boolean
var jogando=false; //verifica se o jogo está rodando
var tabuleiroVisivel=false; //verifica se o tabuleiro vai aparecer ou não
var desenhaPVP=false; //verifica se é para desenhar as jogadas do PVP
var playTime=false; //verifica de quem é a vez

inicializar();

function inicializar(){
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
}

//ATUALIZA TABULEIRO
function update(){
	if(desenhaPVP){
		drawPVP();
	}//colocar um else pro PVE
}

//OCULTA TABULEIRO
function ocultarObjetos(){
	document.getElementById("tabuleiro").style.display="none";
	tabuleiroVisivel=false;
}

//JOGADOR VS JOGADOR MENU
function pvp(){
	document.getElementById("tabuleiro").style.display="flex";
	tabuleiroVisivel=true;
	jogando=true;
	desenhaPVP=true;
	if(tabuleiroVisivel){
		document.getElementById("menu").style.display="none";
		playTime = true;
		jogarPVP();
	}
}

//DESENHA AS JOGADAS DO PVP
function drawPVP(){
	for(var l=0; l < 3; l++){ //vai percorrer as linhas
		for(var c=0; c < 3; c++){ //vai percorrer as colunas
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
	
//JOGADOR VS JOGADOR
function jogarPVP(p){
	if((jogando)&&(playTime)){  //JOGADOR X
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
	}
		else if((jogando)&&(playTime==false)){ //JOGADOR O
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

function verificaVitoria(){
	//linhas verticais (bolinha)
	for (var l=0; l < 3; l++){
		if((playTime)&&(jogo[l][0]=="o")&&(jogo[l][1]=="o")&&(jogo[l][2]=="o")){
			setTimeout(function() { alert("BOLINHA, O XIZINHO ESTÁ COM INVEJA DA SUA VITÓRIA"); }, 50);
			jogando=false;
		}
	}
	
	//linhas honrizontais (bolinha)
	for (var c=0; c < 3; c++){
		if((playTime)&&(jogo[0][c]=="o")&&(jogo[1][c]=="o")&&(jogo[2][c]=="o")){
			setTimeout(function() { alert("BOLINHA, VOCÊ É IMPLACÁVEL!"); }, 50);
			jogando=false;
		}
	}
	
	//linhas diagonais(bolinha)
	if((playTime)&&(jogo[0][0]=="o")&&(jogo[1][1]=="o")&&(jogo[2][2]=="o")){
		setTimeout(function() { alert("BOLINHA, VOCÊ É DE MAIS!"); }, 50);
		jogando=false;
	}else if((playTime)&&(jogo[0][2]=="o")&&(jogo[1][1]=="o")&&(jogo[2][0]=="o")){
		setTimeout(function() { alert("BOLINHA, VOCÊ PISOU NO XIZINHO!"); }, 50);
		jogando=false;
	}
	
	//linhas verticais (xizinho)
	for (var l=0; l < 3; l++){
		if((playTime==false)&&(jogo[l][0]=="x")&&(jogo[l][1]=="x")&&(jogo[l][2]=="x")){
			setTimeout(function() { alert("XIZINHO, A BOLINHA ESTÁ COM INVEJA DA SUA VITÓRIA"); }, 50);
			jogando=false;
		}
	}
	
	//linhas honrizontais (xizinho)
	for (var c=0; c < 3; c++){
		if((playTime==false)&&(jogo[0][c]=="x")&&(jogo[1][c]=="x")&&(jogo[2][c]=="x")){
			setTimeout(function() { alert("XIZINHO, VOCÊ É IMPLACÁVEL!"); }, 50);
			jogando=false;
		}
	}
	
	//linhas diagonais(xizinho)
	if((playTime==false)&&(jogo[0][0]=="x")&&(jogo[1][1]=="x")&&(jogo[2][2]=="x")){
		setTimeout(function() { alert("XIZINHO, VOCÊ É DE MAIS!"); }, 50);
		jogando=false;
	}else if((playTime==false)&&(jogo[0][2]=="x")&&(jogo[1][1]=="x")&&(jogo[2][0]=="x")){
		setTimeout(function() { alert("XIZINHO, VOCÊ PISOU NA BOLINHA!"); }, 50);
		jogando=false;
	}
}