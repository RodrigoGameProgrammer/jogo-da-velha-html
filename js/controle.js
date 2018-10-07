
/*variaveis array*/
var jogo=[]; /*posições jogadas e vazias*/
var tabuleiro=[]; /*controle visual, vai atualizar as imagens*/

/*variaveis boolean*/
var jogando=false;
var tabuleiroVisivel=false;

/*variaveis do modo pvp*/
var playTime=false;
var verifica;


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

function update(){
		for(var l=0; l < 3; l++){ //vai percorrer as linhas
			for(var c=0; c < 3; c++){ //vai percorrer as colunas
				if(jogo[l][c]=="x"){
					tabuleiro[l][c].innerHTML="x";
					tabuleiro[l][c].style.cursor="default";
				}else if(jogo[l][c]=="0"){
					tabuleiro[l][c].innerHTML="o";
					tabuleiro[l][c].style.cursor="default";
				}else{
					tabuleiro[l][c].innerHTML="";
					tabuleiro[l][c].style.cursor="pointer";
			}	
		}	
	}
}

function draw(){
	
}

function ocultarObjetos(){
	document.getElementById("tabuleiro").style.display="none";
	tabuleiroVisivel=false;
}

/*jogador VS jogador*/
function pvp(){
	document.getElementById("tabuleiro").style.display="flex";
	tabuleiroVisivel=true;
	jogando=true;
	if(tabuleiroVisivel){
		document.getElementById("menu").style.display="none";
		playTime = true;
		jogarPVP();
	}
}

function jogarPVP(p){
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
			case 9: //case 9
				if(jogo[2][2]==""){
					jogo[2][2]="x";
					playTime=false;
				}
			break;
		}
		update();
	}
}