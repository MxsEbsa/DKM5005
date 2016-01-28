/* Ajustes para o Howler.js*/
/* Trilha sonora */
var audio_trilha_sonora = new Howl({urls: ['media/audio/audio_trilha_sonora.mp3'], volume: 0.1, onend: function() { tocar_audio_trilha_sonora();}});
/* Tutorial */
var audio_tutorial_1 = new Howl({urls: ['media/audio/audio_tutorial_1.mp3'],volume: 1, sprite:{audio_tutorial_1_corte1: [4000, 40000], audio_tutorial_1_corte2: [2000, 40000]}});
var audio_tutorial_2 = new Howl({urls: ['media/audio/audio_tutorial_2.mp3'],volume: 1, sprite:{audio_tutorial_2_corte1: [4000, 40000]}});
var audio_tutorial_3 = new Howl({urls: ['media/audio/audio_tutorial_3.mp3'],volume: 1, sprite:{audio_tutorial_3_corte1: [4000, 40000]}});
/* Inicial */
var audio_inicial_pedro = new Howl({urls: ['media/audio/audio_inicial_pedro.mp3'],volume: 1, sprite:{audio_inicial_pedro_corte1: [5000, 40000]}});
var audio_inicial_adulto = new Howl({urls: ['media/audio/audio_inicial_adulto.mp3'],volume: 1, sprite:{audio_inicial_adulto_corte1: [5000, 40000]}});
/* Desafios */
var audio_desafio_larissa = new Howl({urls: ['media/audio/audio_desafio_larissa.mp3'],volume: 1, sprite:{audio_desafio_larissa_corte1: [5000, 40000]}});
var audio_desafio_pedro = new Howl({urls: ['media/audio/audio_desafio_pedro.mp3'],volume: 1, sprite:{audio_desafio_pedro_corte1: [5000, 40000]}});
var audio_desafio_barbara = new Howl({urls: ['media/audio/audio_desafio_barbara.mp3'],volume: 1, sprite:{audio_desafio_barbara_corte1: [5000, 40000]}});
/* Devolutivas */
var audio_devolutiva_larissa = new Howl({urls: ['media/audio/audio_devolutiva_larissa.mp3'],volume: 1, sprite:{audio_devolutiva_larissa_corte1: [5000, 40000]}});
/* Conclusões */
var audio_conclusao_larissa = new Howl({urls: ['media/audio/audio_conclusao.mp3'],volume: 1, sprite:{audio_conclusao_larissa_corte1: [4000, 8000]}, onend: function() { concluir_fase_larissa();}});

var audio_conclusao_pedro = new Howl({urls: ['media/audio/audio_conclusao.mp3'],volume: 1, sprite:{audio_conclusao_pedro_corte1: [4000, 8000]}, onend: function() { concluir_fase_pedro();}});

var audio_conclusao_barbara = new Howl({urls: ['media/audio/audio_conclusao.mp3'],volume: 1, sprite:{audio_conclusao_barbara_corte1: [4000, 8000]}, onend: function() { concluir_fase_barbara();}});



/* Encerramento */
var audio_encerramento_larissa = new Howl({urls: ['media/audio/audio_encerramento_larissa.mp3'],volume: 1, sprite:{audio_encerramento_larissa_corte1: [5000, 40000]}});
var audio_encerramento_barbara = new Howl({urls: ['media/audio/audio_encerramento_barbara.mp3'],volume: 1, sprite:{audio_encerramento_barbara_corte1: [5000, 40000]}});
var audio_encerramento_adulto = new Howl({urls: ['media/audio/audio_encerramento_adulto.mp3'],volume: 1, sprite:{audio_encerramento_adulto_corte1: [5000, 40000]}});
/* Efeitos */
var audio_efeito_videogame = new Howl({urls: ['media/audio/audio_efeito_videogame.mp3'], volume: 0.5 });
/* Funções para controle de áudio */
var volume_atual;
var diminuir_volume_trilha_cnd;
volume_atual=0.3;
//
var sincronizar_audio_inicial_cnd;
var sincronizar_audio_desafio_larissa_cnd;
var sincronizar_audio_desafio_pedro_cnd;
var sincronizar_audio_desafio_barbara_cnd;
var sincronizar_audio_encerramento_cnd;
var pos_objetos_larissa_cnd;
var pos_objetos_barbara_cnd;
//
function tocar_audio_trilha_sonora(){
	audio_trilha_sonora.stop();
	audio_trilha_sonora.play();
}

function diminuir_volume_trilha(){
	console.log("ON");
	diminuir_volume_trilha_cnd = setInterval(function(){
		volume_atual-=0.1;
		audio_trilha_sonora.volume(volume_atual);
		if(volume_atual==0){
			clearInterval(diminuir_volume_trilha_cnd);
			//audio_trilha_sonora.volume(0);
			console.log("Var limpa")
		}
	}, 5);
}


'use strict';
/*-*/
var item_atual, fracoes_jogo_larissa, respostas_jogo_larissa, fracoes_jogo_pedro, respostas_jogo_pedro, fracoes_jogo_barbara, respostas_jogo_barbara, elementos_cortados, latas_soltas, parte_tutorial, voltas_jogo_larissa, voltas_jogo_pedro, voltas_jogo_barbara;
//
elementos_cortados=["s","s","s","s","s","s"];
latas_soltas=["s","s"];
//
fracoes_jogo_larissa=[0,0];
respostas_jogo_larissa=[0,0];
//
fracoes_jogo_pedro=[0,0,0];
respostas_jogo_pedro=[0,0,0];
//
fracoes_jogo_barbara=[0,0,0,0];
respostas_jogo_barbara=[0,0,0,0];
//
voltas_jogo_larissa=[0,0,0,0,0,0,0,0,0];
voltas_jogo_pedro=[0,0,0,0,0,0,0,0,0,0,0,0];
voltas_jogo_barbara=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


parte_tutorial=1;
/*-*/
var startGame = {

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
		sincronizar_audio_inicial();
		//
		document.querySelector("#inicial_area").style.display="inherit";
		document.querySelector("#inicial_area").className="animacao_entrada_inicial";
		//
		sorteio_fracoes_larissa();
		sorteio_fracoes_barbara();
		sorteio_fracoes_pedro();
	
	}
};

function sincronizar_audio_inicial(){
	//document.querySelector("#audio_inicial_adulto").currentTime="30";
	//
	document.querySelector("#audio_inicial_adulto").play();
	sincronizar_audio_inicial_cnd = setInterval(function(){
		console.log(Math.round(document.querySelector("#audio_inicial_adulto").currentTime));
		/*if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==7){
	
		}*/
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==8){
			document.querySelector("#quadro_fade").style.display="inherit";			
			document.querySelector("#quadro_fade").className="animacao_atraso_0 fadeOut";	
			//
			document.querySelector("#inicial_personagem_adulto").style.display="inherit";
			document.querySelector("#inicial_personagem_adulto").style.left="650px";
			//document.querySelector("#inicial_personagem_adulto").className="animacao_atraso_0t500ms slideInRight";
		}		
		
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==9){
			document.querySelector("#audio_inicial_adulto").currentTime=14;
		}
		
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)>=14){
			//
			document.querySelector("#inicial_balao_fala_adulto").style.display="inherit";
			document.querySelector("#inicial_personagem_adulto_boca").style.display="inherit";
			//document.querySelector("#inicial_personagem_adulto_boca").className="animacao_fala_inicial_adulto";
			//
			document.querySelector("#inicial_balao_fala_adulto").className="animacao_atraso_0t500ms fadeInUp";
			//
		}
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)>=16){
			document.querySelector("#quadro_fade").style.display="none";	
			document.querySelector("#inicial_balao_fala_pedro").style.display="inherit";
			document.querySelector("#img_body").style.backgroundImage= "url('./img/fundo_oed.png')";
			//document.querySelector("#inicial_personagem_adulto_boca").style.display="none";
			//
			document.querySelector("#inicial_balao_fala_adulto").className="animacao_atraso_0t500ms fadeOutUp";
			document.querySelector("#inicial_balao_fala_pedro").className="animacao_atraso_0t500ms fadeInUp";
			//
			$("#inicial_personagem_larissa, #inicial_personagem_pedro, #inicial_personagem_barbara, #inicial_personagem_barbara_dedo_e").css( "display", "none" );
			$("#inicial_personagem_larissa_costas, #inicial_personagem_pedro_costas, #inicial_personagem_barbara_costas").css( "display", "inherit" );
			//
			document.querySelector("#inicial_personagem_larissa_costas").className="animacao_atraso_0 fadeIn";
			document.querySelector("#inicial_personagem_pedro_costas").className="animacao_atraso_0 fadeIn";
			document.querySelector("#inicial_personagem_barbara_costas").className="animacao_atraso_0 fadeIn";
		}
		//
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==17){
			//
			document.querySelector("#explicacao_area").style.display="inherit";
			document.querySelector("#explicacao_area").className="animacao_atraso_0 fadeIn";
			//
			document.querySelector("#explicacao_balao_fala_1").style.display="inherit";
			document.querySelector("#explicacao_balao_fala_1").className="animacao_atraso_0 fadeInUp";
		}
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==18){		
			document.querySelector("#inicial_area").style.display="none";
			document.querySelector("#explicacao_personagem_adulto_boca").style.display="inherit";
			document.querySelector("#explicacao_personagem_adulto_boca").className="explicacao_move_fala_1";
		}
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==22){		
			document.querySelector("#explicacao_balao_fala_2").style.display="inherit";
			document.querySelector("#explicacao_personagem_adulto_boca").className="explicacao_boca_fala_2";
			//
			document.querySelector("#explicacao_balao_fala_1").className="animacao_atraso_0 fadeOutUp";
			document.querySelector("#explicacao_balao_fala_2").className="animacao_atraso_0 fadeInUp";
		}
		if(Math.round(document.querySelector("#audio_inicial_adulto").currentTime)==28){		
			document.querySelector("#explicacao_balao_fala_3").style.display="inherit";
			document.querySelector("#explicacao_personagem_adulto_boca").className="explicacao_boca_fala_3";
			//
			document.querySelector("#explicacao_balao_fala_2").className="animacao_atraso_0 fadeOutUp";
			document.querySelector("#explicacao_balao_fala_3").className="animacao_atraso_0 fadeInUp";
		}			
	}, 1000);
}





/* Funções para passagem de etapa */
function concluir_fase_larissa(){
	document.querySelector("#jogo_larissa_area").style.display="none";
	//
	document.querySelector("#conclusao_larissa_fundo").className="animacao_atraso_0 slideOutRight";
	document.querySelector("#conclusao_larissa_personagens").className="animacao_atraso_0 slideOutLeft";
	document.querySelector("#conclusao_larissa_texto").className="animacao_atraso_0 bounceOutDown";
	//
	ir_etapa_desafio_pedro();
	setTimeout(function(){document.querySelector("#conclusao_larissa_area").style.display="none";}, 1000);
	//setTimeout(function(){ir_etapa_desafio_pedro();}, 1500);
	
	
}
function concluir_fase_pedro(){
	document.querySelector("#jogo_pedro_area").style.display="none";
	//
	document.querySelector("#conclusao_larissa_fundo").className="animacao_atraso_0 fadeOut";
	document.querySelector("#conclusao_larissa_solo").className="animacao_atraso_0 slideOutDown";
	document.querySelector("#conclusao_larissa_personagens").className="animacao_atraso_0 bounceOutDown";
	document.querySelector("#conclusao_larissa_texto").className="animacao_atraso_0 bounceOutDown";
	//
	ir_etapa_desafio_barbara();
	setTimeout(function(){document.querySelector("#conclusao_larissa_area").style.display="none";}, 1000);
	//setTimeout(function(){ir_etapa_desafio_barbara();}, 1500);
}
function concluir_fase_barbara(){
	document.querySelector("#jogo_barbara_area").style.display="none";
	//
	document.querySelector("#conclusao_larissa_fundo").className="animacao_atraso_0 fadeOut";
	document.querySelector("#conclusao_larissa_solo").className="animacao_atraso_0 slideOutDown";
	document.querySelector("#conclusao_larissa_personagens").className="animacao_atraso_0 fadeOut";
	document.querySelector("#conclusao_larissa_texto").className="animacao_atraso_0 bounceOutDown";
	//
	ir_tela_encerramento();
	setTimeout(function(){document.querySelector("#conclusao_larissa_area").style.display="none";}, 1000);
	//setTimeout(function(){ir_tela_encerramento();}, 1500);
	
	
}
function ir_etapa_desafio_larissa(){
	clearInterval(sincronizar_audio_inicial_cnd);
	document.querySelector("#explicacao_personagem_adulto_boca").style.display="none";
	document.querySelector("#desafio_area").style.display="inherit";
	sincronizar_audio_desafio_larissa();
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_nao');
	//
	document.querySelector("#explicacao_area").className="animacao_atraso_0 fadeOut";
	document.querySelector("#desafio_area").className="animacao_atraso_0 fadeIn";
	//
}

function ir_etapa_desafio_pedro(){
	audio_trilha_sonora.stop();
	//
	$("#desafio_personagem_adulto_boca, #desafio_balao_fala_1, #desafio_balao_fala_2, #desafio_balao_fala_3, #desafio_fala_1_texto_larissa, #desafio_fala_2_texto_larissa, #desafio_fala_1_texto_pedro, #desafio_fala_2_texto_pedro, #desafio_fala_1_texto_barbara, #desafio_fala_2_texto_barbara, #desafio_personagem_larissa, #desafio_personagem_pedro, #desafio_personagem_barbara, #desafio_larissa_item_1, #desafio_larissa_item_2, #desafio_pedro_item_1, #desafio_pedro_item_2, #desafio_barbara_item_1, #desafio_barbara_item_2, #desafio_caixa_creche, #desafio_caixa_orfanato, #desafio_caixa_asilo, #desafio_caixa_cidade").css( "display", "none" );
	//
	clearInterval(sincronizar_audio_desafio_larissa_cnd);
	document.querySelector("#desafio_area").style.display="inherit";
	sincronizar_audio_desafio_pedro();
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_nao');
	//
	document.querySelector("#desafio_area").className="animacao_atraso_0 fadeIn";
	//
}

function ir_etapa_desafio_barbara(){
	audio_trilha_sonora.stop();
	//
	$("#desafio_personagem_adulto_boca, #desafio_balao_fala_1, #desafio_balao_fala_2, #desafio_balao_fala_3, #desafio_fala_1_texto_larissa, #desafio_fala_2_texto_larissa, #desafio_fala_1_texto_pedro, #desafio_fala_2_texto_pedro, #desafio_fala_1_texto_barbara, #desafio_fala_2_texto_barbara, #desafio_personagem_larissa, #desafio_personagem_pedro, #desafio_personagem_barbara, #desafio_larissa_item_1, #desafio_larissa_item_2, #desafio_pedro_item_1, #desafio_pedro_item_2, #desafio_barbara_item_1, #desafio_barbara_item_2, #desafio_caixa_creche, #desafio_caixa_orfanato, #desafio_caixa_asilo, #desafio_caixa_cidade").css( "display", "none" );
	//
	clearInterval(sincronizar_audio_desafio_pedro_cnd);
	document.querySelector("#desafio_area").style.display="inherit";
	sincronizar_audio_desafio_barbara();
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_nao');
	//
	document.querySelector("#desafio_area").className="animacao_atraso_0 fadeIn";
	//
}

function ir_etapa_tutorial(){
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_sim');
	clearInterval(sincronizar_audio_desafio_larissa_cnd);
	//
	document.querySelector("#tutorial_area").style.display="inherit";
	document.querySelector("#tutorial_imagem_fase_1").style.display="inherit";
	//
	document.querySelector("#tutorial_imagem_fase_1").className="animacao_atraso_1 fadeIn";
	document.querySelector("#tutorial_btn_esquerda").style.display="none";
	document.querySelector("#tutorial_btn_direita").className="animacao_atraso_2 slideInRight";
	//
	setTimeout(function(){ 
		document.querySelector("#desafio_area").style.display="none";	
	}, 2000);	

	
	
	//
	audio_tutorial_1.play("audio_tutorial_1_corte2");
	//audio_trilha_sonora.play();
	//
	setTimeout(function(){ 
		document.querySelector("#tutorial_imagem_fase_2").style.display="inherit";
		document.querySelector("#tutorial_imagem_fase_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#tutorial_area").style.background="#000000";
		//
		document.querySelector("#tutorial_painel_passo_1").style.display="inherit";
		document.querySelector("#tutorial_painel_passo_1").className="animacao_atraso_0 bounceInUp";	
	}, 2000);
	
	
}

function sincronizar_audio_desafio_larissa(){
	document.querySelector("#desafio_area").style.display="inherit";
	document.querySelector("#audio_desafio_larissa").currentTime="4";
	//
	document.querySelector("#audio_desafio_larissa").play();
	sincronizar_audio_desafio_larissa_cnd = setInterval(function(){
		//
		document.querySelector("#desafio_balao_fala_1").style.display="inherit";
		document.querySelector("#desafio_fala_1_texto_larissa").style.display="inherit";
		document.querySelector("#desafio_balao_fala_1").className="animacao_atraso_0 fadeInUp";		
		//
		if(Math.round(document.querySelector("#audio_desafio_larissa").currentTime)>=5){
			document.querySelector("#desafio_personagem_adulto_boca").style.display="inherit";
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_larissa_1";
		}		
		
		//
		if(Math.round(document.querySelector("#audio_desafio_larissa").currentTime)>=6){
			document.querySelector("#desafio_personagem_larissa").style.display="inherit";
			document.querySelector("#desafio_personagem_larissa").className="animacao_atraso_0 slideInUp";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_larissa").currentTime)>=10){
			document.querySelector("#desafio_larissa_item_1").style.display="inherit";
			document.querySelector("#desafio_larissa_item_2").style.display="inherit";
			//
			document.querySelector("#desafio_lista_item_1").style.backgroundImage= "url('./img/desafio_larissa_item_1.png')";
			document.querySelector("#desafio_lista_item_2").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";
			//
			document.querySelector("#desafio_painel_lista").style.display="inherit";
			document.querySelector("#desafio_painel_lista").className="animacao_atraso_0 bounceInUp";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_larissa").currentTime)>=12){
			document.querySelector("#desafio_balao_fala_1").className="animacao_atraso_0 fadeOutUp";	
			document.querySelector("#desafio_balao_fala_2").style.display="inherit";	
			document.querySelector("#desafio_fala_2_texto_larissa").style.display="inherit";	
			document.querySelector("#desafio_balao_fala_2").className="animacao_atraso_0 fadeInUp";
			//
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_larissa_2";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_larissa").currentTime)>=13){
			document.querySelector("#desafio_painel_lista").className="animacao_atraso_0 bounceOutRight";
			//
			document.querySelector("#desafio_caixa_creche").style.left="385px";
			document.querySelector("#desafio_caixa_creche").style.top="304px";
			document.querySelector("#desafio_caixa_creche").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_creche").className="animacao_atraso_0 wobble";			
		}
		if(Math.round(document.querySelector("#audio_desafio_larissa").currentTime)>=15){
			document.querySelector("#desafio_caixa_orfanato").style.left="672px";
			document.querySelector("#desafio_caixa_orfanato").style.top="445px";
			document.querySelector("#desafio_caixa_orfanato").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_orfanato").className="animacao_atraso_0 wobble";
		}
	}, 1000);
}


function sincronizar_audio_desafio_pedro(){
	document.querySelector("#desafio_area").style.display="inherit";	
	document.querySelector("#desafio_painel_lista").style.display="none";
	document.querySelector("#audio_desafio_pedro").currentTime="4";
	//
	document.querySelector("#audio_desafio_pedro").play();
	sincronizar_audio_desafio_pedro_cnd = setInterval(function(){
		//
		document.querySelector("#desafio_balao_fala_1").style.display="inherit";
		document.querySelector("#desafio_fala_1_texto_pedro").style.display="inherit";
		document.querySelector("#desafio_balao_fala_1").className="animacao_atraso_0 fadeInUp";		
		//
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=5){
			document.querySelector("#desafio_personagem_adulto_boca").style.display="inherit";
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_pedro_1";
		}		
		
		//
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=6){
			document.querySelector("#desafio_personagem_pedro").style.display="inherit";
			document.querySelector("#desafio_personagem_pedro").className="animacao_atraso_0 slideInUp";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=8){
			document.querySelector("#desafio_pedro_item_1").style.display="inherit";
			document.querySelector("#desafio_pedro_item_2").style.display="inherit";
			//
			document.querySelector("#desafio_lista_item_1").style.backgroundImage= "url('./img/desafio_pedro_item_1.png')";
			document.querySelector("#desafio_lista_item_2").style.backgroundImage= "url('./img/desafio_pedro_item_2.png')";
			//
			document.querySelector("#desafio_painel_lista").style.display="inherit";
			document.querySelector("#desafio_painel_lista").className="animacao_atraso_0 bounceInUp";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=9){
			setTimeout(function(){  
				document.querySelector("#desafio_personagem_adulto_boca").style.display="none";	
			}, 700);
		}		
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=10){
			document.querySelector("#desafio_balao_fala_1").className="animacao_atraso_0 fadeOutUp";	
			document.querySelector("#desafio_balao_fala_2").style.display="inherit";	
			document.querySelector("#desafio_fala_2_texto_pedro").style.display="inherit";	
			document.querySelector("#desafio_balao_fala_2").className="animacao_atraso_0 fadeInUp";
			//
			document.querySelector("#desafio_personagem_adulto_boca").style.display="inherit";	
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_pedro_2";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=13){
			document.querySelector("#desafio_painel_lista").className="animacao_atraso_0 bounceOutRight";
			//
			document.querySelector("#desafio_caixa_creche").style.left="385px";
			document.querySelector("#desafio_caixa_creche").style.top="304px";
			document.querySelector("#desafio_caixa_creche").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_creche").className="animacao_atraso_0 wobble";			
		}
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)>=14){
			document.querySelector("#desafio_caixa_orfanato").style.left="702px";
			document.querySelector("#desafio_caixa_orfanato").style.top="275px";
			document.querySelector("#desafio_caixa_orfanato").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_orfanato").className="animacao_atraso_0 wobble";
		}
		if(Math.round(document.querySelector("#audio_desafio_pedro").currentTime)==15){
			document.querySelector("#desafio_caixa_asilo").style.left="647px";
			document.querySelector("#desafio_caixa_asilo").style.top="448px";
			document.querySelector("#desafio_caixa_asilo").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_asilo").className="animacao_atraso_0 wobble";
			//
			clearInterval(sincronizar_audio_desafio_pedro_cnd);
			$("#inicial_area, #explicacao_area, #tutorial_area, #jogo_larissa_area, #jogo_pedro_area, #devolutiva_area").css( "display", "none" );
			//
			setTimeout(function(){
				document.querySelector("#conclusao_larissa_fundo").style.backgroundImage= "url('./img/conclusao_pedro_fundo.jpg')";
				document.querySelector("#conclusao_larissa_solo").style.backgroundImage= "url('./img/conclusao_pedro_solo.png')";
				document.querySelector("#conclusao_larissa_personagens").style.backgroundImage= "url('./img/conclusao_pedro_personagens.png')";
				document.querySelector("#conclusao_larissa_texto").style.backgroundImage= "url('./img/conclusao_pedro_texto.png')";
				//
				document.querySelector("#conclusao_larissa_area").style.display="none";
				document.querySelector("#devolutva_texto_larissa").style.display="none";
				//
	document.querySelector("#jogo_pedro_objeto_1").style.top="127px";
	document.querySelector("#jogo_pedro_objeto_1").style.left="507px";	

	//
	document.querySelector("#jogo_pedro_objeto_2").style.top="127px";
	document.querySelector("#jogo_pedro_objeto_2").style.left="578px";
	//
	document.querySelector("#jogo_pedro_objeto_3").style.top="126px";
	document.querySelector("#jogo_pedro_objeto_3").style.left="639px";
	//
	document.querySelector("#jogo_pedro_objeto_4").style.top="124px";
	document.querySelector("#jogo_pedro_objeto_4").style.left="704px";
	//
	document.querySelector("#jogo_pedro_objeto_5").style.top="123px";
	document.querySelector("#jogo_pedro_objeto_5").style.left="763px";
	//
	document.querySelector("#jogo_pedro_objeto_6").style.top="122px";
	document.querySelector("#jogo_pedro_objeto_6").style.left="831px";
	//
	document.querySelector("#jogo_pedro_objeto_7").style.top="133px";
	document.querySelector("#jogo_pedro_objeto_7").style.left="307px";
	//
	document.querySelector("#jogo_pedro_objeto_8").style.top="159px";
	document.querySelector("#jogo_pedro_objeto_8").style.left="309px";

	//
	document.querySelector("#jogo_pedro_objeto_9").style.top="260px";
	document.querySelector("#jogo_pedro_objeto_9").style.left="317px";
	//
	document.querySelector("#jogo_pedro_objeto_10").style.top="284px";
	document.querySelector("#jogo_pedro_objeto_10").style.left="308px";	
	//
	document.querySelector("#jogo_pedro_objeto_11").style.top="382px";
	document.querySelector("#jogo_pedro_objeto_11").style.left="307px";	
	//
	document.querySelector("#jogo_pedro_objeto_12").style.top="406px";
	document.querySelector("#jogo_pedro_objeto_12").style.left="311px";
	
				
				//
				sessionStorage.setItem('reiniciar_oed', 'instrucoes_sim');
				document.querySelector("#jogo_pedro_area").style.display="inherit";
				document.querySelector("#jogo_pedro_area").className="animacao_atraso_0 fadeIn";
				audio_trilha_sonora.play();
			}, 2000);
		setTimeout(function(){
			document.querySelector("#desafio_caixa_creche").style.display="none";
			document.querySelector("#desafio_caixa_asilo").style.display="none";
			document.querySelector("#desafio_caixa_orfanato").style.display="none";
			//document.querySelector("#desafio_caixa_cidade").style.display="none";
			document.querySelector("#desafio_balao_fala_2").style.display="none";	
			document.querySelector("#desafio_personagem_pedro").style.display="none";
			//
			document.querySelector("#conclusao_larissa_fundo").className="nada";
			document.querySelector("#conclusao_larissa_solo").className="nada";
			document.querySelector("#conclusao_larissa_personagens").className="nada";
			document.querySelector("#conclusao_larissa_texto").className="nada";
			document.querySelector("#desafio_area").style.display="none";	
			
		}, 4000);			
			
		}		
	}, 1000);
}

function sincronizar_audio_desafio_barbara(){
	document.querySelector("#desafio_area").style.display="inherit";	
	document.querySelector("#desafio_painel_lista").style.display="none";	
	//
	document.querySelector("#audio_desafio_barbara").currentTime="4";
	//
	document.querySelector("#audio_desafio_barbara").play();
	sincronizar_audio_desafio_barbara_cnd = setInterval(function(){
		//
		document.querySelector("#desafio_balao_fala_1").style.display="inherit";
		document.querySelector("#desafio_fala_1_texto_barbara").style.display="inherit";
		document.querySelector("#desafio_balao_fala_1").className="animacao_atraso_0 fadeInUp";		
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)>=5){
			document.querySelector("#desafio_personagem_adulto_boca").style.display="inherit";
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_barbara_1";
		}		
		
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)>=7){
			document.querySelector("#desafio_personagem_barbara").style.display="inherit";
			document.querySelector("#desafio_personagem_barbara").className="animacao_atraso_0 slideInUp";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)>=10){
			document.querySelector("#desafio_barbara_item_1").style.display="inherit";
			document.querySelector("#desafio_barbara_item_2").style.display="inherit";
			//
			document.querySelector("#desafio_lista_item_1").style.backgroundImage= "url('./img/desafio_barbara_item_1.png')";
			document.querySelector("#desafio_lista_item_2").style.backgroundImage= "url('./img/desafio_barbara_item_2.png')";
			//
			document.querySelector("#desafio_painel_lista").style.display="inherit";
			document.querySelector("#desafio_painel_lista").className="animacao_atraso_0 bounceInUp";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)>=12){
			document.querySelector("#desafio_balao_fala_1").className="animacao_atraso_0 fadeOutUp";	
			document.querySelector("#desafio_balao_fala_2").style.display="inherit";	
			document.querySelector("#desafio_fala_2_texto_barbara").style.display="inherit";	
			document.querySelector("#desafio_balao_fala_2").className="animacao_atraso_0 fadeInUp";
			//
			//document.querySelector("#desafio_personagem_adulto_boca").style.display="inherit";	
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_barbara_2";
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)>=14){
			document.querySelector("#desafio_painel_lista").className="animacao_atraso_0 bounceOutRight";
			//
			document.querySelector("#desafio_caixa_creche").style.left="390px";
			document.querySelector("#desafio_caixa_creche").style.top="270px";
			document.querySelector("#desafio_caixa_creche").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_creche").className="animacao_atraso_0 wobble";			
		}
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)>=15){
			document.querySelector("#desafio_caixa_orfanato").style.left="686px";
			document.querySelector("#desafio_caixa_orfanato").style.top="284px";
			document.querySelector("#desafio_caixa_orfanato").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_orfanato").className="animacao_atraso_0 wobble";
		}
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)==17){
			document.querySelector("#desafio_caixa_asilo").style.left="427px";
			document.querySelector("#desafio_caixa_asilo").style.top="451px";
			document.querySelector("#desafio_caixa_asilo").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_asilo").className="animacao_atraso_0 wobble";
			//
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)==18){
			document.querySelector("#desafio_caixa_cidade").style.left="708px";
			document.querySelector("#desafio_caixa_cidade").style.top="470px";
			document.querySelector("#desafio_caixa_cidade").style.display="inherit";
			//
			document.querySelector("#desafio_caixa_cidade").className="animacao_atraso_0 wobble";
			//
		}
		//
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)==19){
			document.querySelector("#desafio_balao_fala_2").className="animacao_atraso_0 fadeOutUp";	
			document.querySelector("#desafio_balao_fala_3").style.display="inherit";	
			document.querySelector("#desafio_fala_3_texto_barbara").style.display="inherit";	
			document.querySelector("#desafio_balao_fala_3").className="animacao_atraso_0 fadeInUp";			

		}	
		if(Math.round(document.querySelector("#audio_desafio_barbara").currentTime)==20){
			clearInterval(sincronizar_audio_desafio_barbara_cnd);
			//
			document.querySelector("#desafio_balao_fala_2").style.display="none";
			document.querySelector("#desafio_personagem_adulto_boca").className="animacao_fala_desafio_barbara_3";
			//
			$("#inicial_area, #explicacao_area, #tutorial_area, #jogo_larissa_area, #jogo_pedro_area, #devolutiva_area").css( "display", "none" );
			setTimeout(function(){ 
				//
				document.querySelector("#jogo_barbara_objeto_1").style.top="49px";
				document.querySelector("#jogo_barbara_objeto_1").style.left="191px";	
				//
				document.querySelector("#jogo_barbara_objeto_2").style.top="372px";
				document.querySelector("#jogo_barbara_objeto_2").style.left="225px";	
				//
				document.querySelector("#jogo_barbara_objeto_3").style.top="147px";
				document.querySelector("#jogo_barbara_objeto_3").style.left="443px";	
				//
				document.querySelector("#jogo_barbara_objeto_4").style.top="185px";
				document.querySelector("#jogo_barbara_objeto_4").style.left="589px";
				//
				document.querySelector("#jogo_barbara_objeto_5").style.top="270px";
				document.querySelector("#jogo_barbara_objeto_5").style.left="693px";	
				//
				document.querySelector("#jogo_barbara_objeto_6").style.top="135px";
				document.querySelector("#jogo_barbara_objeto_6").style.left="882px";	
				//
				document.querySelector("#jogo_barbara_objeto_7").style.top="480px";
				document.querySelector("#jogo_barbara_objeto_7").style.left="911px";	
				//
				document.querySelector("#jogo_barbara_objeto_8").style.top="204px";
				document.querySelector("#jogo_barbara_objeto_8").style.left="218px";	
				//
				document.querySelector("#jogo_barbara_objeto_9").style.top="169px";
				document.querySelector("#jogo_barbara_objeto_9").style.left="390px";	
				//
				document.querySelector("#jogo_barbara_objeto_10").style.top="247px";
				document.querySelector("#jogo_barbara_objeto_10").style.left="535px";	
				//
				document.querySelector("#jogo_barbara_objeto_11").style.top="247px";
				document.querySelector("#jogo_barbara_objeto_11").style.left="582px";
				//
				document.querySelector("#jogo_barbara_objeto_12").style.top="302px";
				document.querySelector("#jogo_barbara_objeto_12").style.left="510px";
				//
				document.querySelector("#jogo_barbara_objeto_13").style.top="302px";
				document.querySelector("#jogo_barbara_objeto_13").style.left="557px";
				//
				document.querySelector("#jogo_barbara_objeto_14").style.top="302px";
				document.querySelector("#jogo_barbara_objeto_14").style.left="601px";
				//
				document.querySelector("#jogo_barbara_objeto_15").style.top="176px";
				document.querySelector("#jogo_barbara_objeto_15").style.left="964px";	
				//				
				document.querySelector("#conclusao_larissa_fundo").style.backgroundImage= "url('./img/conclusao_barbara_fundo.jpg')";
				document.querySelector("#conclusao_larissa_solo").style.backgroundImage= "url('./img/conclusao_barbara_solo.png')";
				document.querySelector("#conclusao_larissa_personagens").style.backgroundImage= "url('./img/conclusao_barbara_personagens.png')";
				document.querySelector("#conclusao_larissa_texto").style.backgroundImage= "url('./img/conclusao_barbara_texto.png')";
				//
				document.querySelector("#conclusao_larissa_area").style.display="none";
				document.querySelector("#devolutva_texto_pedro").style.display="none";
				//
				sessionStorage.setItem('reiniciar_oed', 'instrucoes_sim');
				document.querySelector("#jogo_barbara_area").style.display="inherit";
				document.querySelector("#jogo_barbara_area").className="animacao_atraso_0 fadeIn";
				pos_objetos_barbara();
				audio_trilha_sonora.play();
				//
				document.querySelector("#conclusao_larissa_fundo").className="nada";
				document.querySelector("#conclusao_larissa_solo").className="nada";
				document.querySelector("#conclusao_larissa_personagens").className="nada";
				document.querySelector("#conclusao_larissa_texto").className="nada";
				document.querySelector("#desafio_area").style.display="none";	
			}, 5000);			

		}
	

		
	}, 1000);
}

/* Funções para gerar as funções aleatórias em cada fase */
function sorteio_fracoes_larissa(){
		valor_1=Math.floor((Math.random()*8)+1);
		document.querySelector("#jogo_larissa_fracao_creche").innerHTML=valor_1;
		document.querySelector("#jogo_larissa_fracao_orfanato").innerHTML=9-valor_1;
		//
		fracoes_jogo_larissa[0]=valor_1;
		fracoes_jogo_larissa[1]=9-valor_1;
		//
		console.log(fracoes_jogo_larissa);
}
function sorteio_fracoes_barbara(){
	ordem=Math.floor((Math.random()*6));
	console.log(ordem);
	//
	if(ordem==0){
		document.querySelector("#jogo_barbara_fracao_creche").innerHTML="1";
		document.querySelector("#jogo_barbara_fracao_orfanato").innerHTML="2";
		document.querySelector("#jogo_barbara_fracao_asilo").innerHTML="3";
		document.querySelector("#jogo_barbara_fracao_cidade").innerHTML="9";
		//
		fracoes_jogo_barbara[0]=1;
		fracoes_jogo_barbara[1]=2;
		fracoes_jogo_barbara[2]=3;
		fracoes_jogo_barbara[3]=9;
	}
	if(ordem==1){
		document.querySelector("#jogo_barbara_fracao_creche").innerHTML="2";
		document.querySelector("#jogo_barbara_fracao_orfanato").innerHTML="4";
		document.querySelector("#jogo_barbara_fracao_asilo").innerHTML="8";
		document.querySelector("#jogo_barbara_fracao_cidade").innerHTML="1";
		//
		fracoes_jogo_barbara[0]=2;
		fracoes_jogo_barbara[1]=4;
		fracoes_jogo_barbara[2]=8;
		fracoes_jogo_barbara[3]=1;		
	}
	if(ordem==2){
		document.querySelector("#jogo_barbara_fracao_creche").innerHTML="5";
		document.querySelector("#jogo_barbara_fracao_orfanato").innerHTML="7";
		document.querySelector("#jogo_barbara_fracao_asilo").innerHTML="1";
		document.querySelector("#jogo_barbara_fracao_cidade").innerHTML="2";
		//
		fracoes_jogo_barbara[0]=5;
		fracoes_jogo_barbara[1]=7;
		fracoes_jogo_barbara[2]=1;
		fracoes_jogo_barbara[3]=2;		
	}
	if(ordem==3){
		document.querySelector("#jogo_barbara_fracao_creche").innerHTML="7";
		document.querySelector("#jogo_barbara_fracao_orfanato").innerHTML="1";
		document.querySelector("#jogo_barbara_fracao_asilo").innerHTML="3";
		document.querySelector("#jogo_barbara_fracao_cidade").innerHTML="4";
		//
		fracoes_jogo_barbara[0]=7;
		fracoes_jogo_barbara[1]=1;
		fracoes_jogo_barbara[2]=3;
		fracoes_jogo_barbara[3]=4;		
	}
	if(ordem==4){
		document.querySelector("#jogo_barbara_fracao_creche").innerHTML="1";
		document.querySelector("#jogo_barbara_fracao_orfanato").innerHTML="3";
		document.querySelector("#jogo_barbara_fracao_asilo").innerHTML="5";
		document.querySelector("#jogo_barbara_fracao_cidade").innerHTML="6";
		//
		fracoes_jogo_barbara[0]=1;
		fracoes_jogo_barbara[1]=3;
		fracoes_jogo_barbara[2]=5;
		fracoes_jogo_barbara[3]=6;		
	}
	if(ordem==5){
		document.querySelector("#jogo_barbara_fracao_creche").innerHTML="3";
		document.querySelector("#jogo_barbara_fracao_orfanato").innerHTML="4";
		document.querySelector("#jogo_barbara_fracao_asilo").innerHTML="6";
		document.querySelector("#jogo_barbara_fracao_cidade").innerHTML="2";
		//
		fracoes_jogo_barbara[0]=3;
		fracoes_jogo_barbara[1]=4;
		fracoes_jogo_barbara[2]=6;
		fracoes_jogo_barbara[3]=2;		
	}		
}
function sorteio_fracoes_pedro(){
	ordem=Math.floor((Math.random()*7));
	console.log(ordem);
	//
	if(ordem==0){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="1";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="2";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="9";
		//
		fracoes_jogo_pedro[0]=1;
		fracoes_jogo_pedro[1]=2;
		fracoes_jogo_pedro[2]=9;
	}
	if(ordem==1){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="3";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="8";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="1";
		//
		fracoes_jogo_pedro[0]=3;
		fracoes_jogo_pedro[1]=8;
		fracoes_jogo_pedro[2]=1;		
	}
	if(ordem==2){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="7";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="1";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="4";
		//
		fracoes_jogo_pedro[0]=7;
		fracoes_jogo_pedro[1]=1;
		fracoes_jogo_pedro[2]=4;		
	}
	if(ordem==3){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="1";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="5";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="6";
		//
		fracoes_jogo_pedro[0]=1;
		fracoes_jogo_pedro[1]=5;
		fracoes_jogo_pedro[2]=6;		
	}
	if(ordem==4){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="3";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="7";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="2";
		//
		fracoes_jogo_pedro[0]=3;
		fracoes_jogo_pedro[1]=7;
		fracoes_jogo_pedro[2]=2;		
	}
	if(ordem==5){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="6";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="2";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="4";
		//
		fracoes_jogo_pedro[0]=6;
		fracoes_jogo_pedro[1]=2;
		fracoes_jogo_pedro[2]=4;			
	}
	if(ordem==6){
		document.querySelector("#jogo_pedro_fracao_creche").innerHTML="3";
		document.querySelector("#jogo_pedro_fracao_orfanato").innerHTML="4";
		document.querySelector("#jogo_pedro_fracao_asilo").innerHTML="5";
		//
		fracoes_jogo_pedro[0]=3;
		fracoes_jogo_pedro[1]=4;
		fracoes_jogo_pedro[2]=5;		
	}	
}
/* Funções para movimentos e animações */
function movimento_entrada_devolutiva(){
	TrocaInstrucao("Clique em Tentar novamente para voltar ao jogo.");
	document.querySelector("#devolutiva_area").style.display="inherit";
	//
	document.querySelector("#devolutiva_fundo").className="animacao_atraso_0 fadeIn";
	document.querySelector("#devolutiva_painel").className="animacao_atraso_0 bounceInDown";
	setTimeout(function(){ document.querySelector("#devolutiva_btn").style.display="inherit";}, 600);
	document.querySelector("#devolutiva_btn").className="animacao_atraso_0 slideInDown";
}

function movimento_saida_devolutiva(){
	TrocaInstrucao("Arraste os objetos para as caixas respeitando a fração indicada em cada destino.<br />Após arrastar todos os objetos para a caixa adequada, confirme a escolha clicando em Confirmar.");
	//
	document.querySelector("#devolutiva_btn").className="animacao_atraso_0 slideOutUp";
	document.querySelector("#devolutiva_fundo").className="animacao_atraso_0 fadeOut";
	document.querySelector("#devolutiva_painel").className="animacao_atraso_0 bounceOutUp";
	setTimeout(function(){ document.querySelector("#devolutiva_btn").style.display="none";}, 500);
	//
	setTimeout(function(){
		$("#devolutiva_area, #devolutva_texto_larissa, #devolutva_texto_pedro, #devolutva_texto_barbara").css( "display", "none" );
	}, 1000);	
}













/* Abaixo estão as funções específicas para cada um dos três jogos */
/* Funções para cliques em botões: Jogo Larissa */
$("#jogo_larissa_btn_confirmar").click(function() {
	document.querySelector("#devolutva_texto_larissa").style.display="inherit";
	//
	console.log("Creche: "+respostas_jogo_larissa[0]+" : "+fracoes_jogo_larissa[0]);
	console.log("Orfanato: "+respostas_jogo_larissa[1]+" : "+fracoes_jogo_larissa[1]);
  //
  if(respostas_jogo_larissa[0]==fracoes_jogo_larissa[0] && respostas_jogo_larissa[1]==fracoes_jogo_larissa[1]){
	document.querySelector("#conclusao_larissa_area").style.display="inherit";
	audio_conclusao_larissa.play("audio_conclusao_larissa_corte1");
	document.querySelector("#conclusao_larissa_fundo").className="animacao_atraso_0 slideInRight";
	document.querySelector("#conclusao_larissa_personagens").className="animacao_atraso_0 slideInLeft";
	document.querySelector("#conclusao_larissa_texto").className="animacao_atraso_1 bounceInDown";
	//
	setTimeout(function(){
		document.querySelector("#conclusao_larissa_area").style.top="0px";
		document.querySelector("#conclusao_larissa_area").style.left="0px";
		document.querySelector("#conclusao_larissa_fundo").className="nada";
		document.querySelector("#conclusao_larissa_personagens").className="nada";
	}, 1000);
	//
	clearInterval(pos_objetos_larissa_cnd);
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_nao');
	//
  }else{
	  movimento_entrada_devolutiva();
  }
});

$("#jogo_larissa_btn_lista").click(function() {
	TrocaInstrucao("Clique em Fechar para guardar a lista de objetos e volte ao jogo.")
	document.querySelector("#grupo_painel_larissa").style.display="inherit";
	//
	document.querySelector("#jogo_larissa_painel_lista").className="animacao_atraso_0 bounceInDown";
	setTimeout(function(){ document.querySelector("#jogo_larissa_painel_btn_fechar").style.display="inherit"; }, 600);
	document.querySelector("#jogo_larissa_painel_btn_fechar").className="animacao_atraso_0 slideInDown";
	document.querySelector("#jogo_larissa_sombra_painel").className="animacao_atraso_0 fadeIn";	
});
$("#jogo_larissa_painel_btn_fechar").click(function() {
	TrocaInstrucao("Arraste os objetos para as caixas respeitando a fração indicada em cada destino.<br />Após arrastar todos os objetos para a caixa adequada, confirme a escolha clicando em Confirmar.")
	document.querySelector("#jogo_larissa_painel_lista").className="animacao_atraso_0 bounceOutUp";
	document.querySelector("#jogo_larissa_painel_btn_fechar").className="animacao_atraso_0 slideOutUp";
	setTimeout(function(){ document.querySelector("#jogo_larissa_painel_btn_fechar").style.display="none"; }, 500);	
	document.querySelector("#jogo_larissa_sombra_painel").className="animacao_atraso_0 fadeOut";	
	//
	setTimeout(function(){document.querySelector("#grupo_painel_larissa").style.display="none"; }, 1000);
	
});



/*Funções para arrastar objetos: Jogo Larissa */
	/* Robôs */
	$( "#jogo_larissa_objeto_1" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_1").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_1";
			document.querySelector("#jogo_larissa_objeto_1").style.zIndex="20";
			
	});
	$( "#jogo_larissa_objeto_1" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, revertDuration: 1000, iframeFix: true, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_1" ).mouseleave(function() {
		document.querySelector("#jogo_larissa_objeto_1").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_larissa[0]==0){
				document.querySelector("#jogo_larissa_objeto_1").style.top="214px";
				document.querySelector("#jogo_larissa_objeto_1").style.left="833px";
			}			
		}, 5);
	});	
	$( "#jogo_larissa_objeto_1" ).mouseup(function() {
		document.querySelector("#jogo_larissa_objeto_1").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_larissa[0]==0){
				document.querySelector("#jogo_larissa_objeto_1").style.top="214px";
				document.querySelector("#jogo_larissa_objeto_1").style.left="833px";
			}			
		}, 5);		
		});
	//
	$( "#jogo_larissa_objeto_2" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_2").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_2";
			document.querySelector("#jogo_larissa_objeto_2").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_2").className="nada"; }, 1000);
	});
	$( "#jogo_larissa_objeto_2" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_2" ).mouseleave(function() {
		document.querySelector("#jogo_larissa_objeto_2").style.zIndex="10";
		setTimeout(function(){ 
		if(voltas_jogo_larissa[1]==0){
			document.querySelector("#jogo_larissa_objeto_2").style.top="70px";
			document.querySelector("#jogo_larissa_objeto_2").style.left="666px";
		}
		}, 5);		
		});
	$( "#jogo_larissa_objeto_2" ).mouseup(function() {
		document.querySelector("#jogo_larissa_objeto_2").style.zIndex="10";
		setTimeout(function(){ 
		if(voltas_jogo_larissa[1]==0){
			document.querySelector("#jogo_larissa_objeto_2").style.top="70px";
			document.querySelector("#jogo_larissa_objeto_2").style.left="666px";
		}
		}, 5);		
		});		
	//
	$( "#jogo_larissa_objeto_3" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_3").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_3";
			document.querySelector("#jogo_larissa_objeto_3").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_3").className="nada"; }, 1000);
	});
	$( "#jogo_larissa_objeto_3" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_3" ).mouseleave(function() {
		document.querySelector("#jogo_larissa_objeto_3").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[2]==0){	
			document.querySelector("#jogo_larissa_objeto_3").style.top="145px";
			document.querySelector("#jogo_larissa_objeto_3").style.left="165px";
		}
		}, 5);			
	});
	$( "#jogo_larissa_objeto_3" ).mouseup(function() {
		document.querySelector("#jogo_larissa_objeto_3").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[2]==0){	
			document.querySelector("#jogo_larissa_objeto_3").style.top="145px";
			document.querySelector("#jogo_larissa_objeto_3").style.left="165px";
		}
		}, 5);			
	});		
	//
	$( "#jogo_larissa_objeto_4" ).mousedown(function() {
		if(elementos_cortados[0]=="s"){
			document.querySelector("#jogo_larissa_objeto_4").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_4";
			document.querySelector("#jogo_larissa_objeto_4").style.zIndex="20";
			//
			document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
			document.querySelector("#jogo_larissa_objeto_4").style.height="80px";
			document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4_drag.png')";
			//
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_4").className="nada"; }, 1000);
		}
	});
	$( "#jogo_larissa_objeto_4" ).mouseleave(function() {
		setTimeout(function(){ 
		if(voltas_jogo_larissa[3]==0){
				document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
				//document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
				//document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
				document.querySelector("#jogo_larissa_objeto_4").style.zIndex="10";
				//
				document.querySelector("#jogo_larissa_objeto_4").style.left="390px";
				document.querySelector("#jogo_larissa_objeto_4").style.top="288px";
		}
		}, 5);			
	});
	$( "#jogo_larissa_objeto_4" ).mouseup(function() {
		setTimeout(function(){ 
		if(voltas_jogo_larissa[3]==0){
				document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
				document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
				document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
				document.querySelector("#jogo_larissa_objeto_4").style.zIndex="10";
				//
				document.querySelector("#jogo_larissa_objeto_4").style.left="390px";
				document.querySelector("#jogo_larissa_objeto_4").style.top="288px";
		}
		}, 5);			
	});	
	$( "#jogo_larissa_objeto_4" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});		
	//
	/* Dinossauros */
	$( "#jogo_larissa_objeto_5" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_5").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_5";
			document.querySelector("#jogo_larissa_objeto_5").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_5").className="nada"; }, 1000);
	});
	$( "#jogo_larissa_objeto_5" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_5" ).mouseleave(function() {document.querySelector("#jogo_larissa_objeto_5").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[4]==0){
			document.querySelector("#jogo_larissa_objeto_5").style.top="181px";
			document.querySelector("#jogo_larissa_objeto_5").style.left="417px";
		}
		}, 5);		
	});
	$( "#jogo_larissa_objeto_5" ).mouseup(function() {document.querySelector("#jogo_larissa_objeto_5").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[4]==0){
			document.querySelector("#jogo_larissa_objeto_5").style.top="181px";
			document.querySelector("#jogo_larissa_objeto_5").style.left="417px";
		}
		}, 5);		
	});	
	//
	$( "#jogo_larissa_objeto_6" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_6").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_6";
			document.querySelector("#jogo_larissa_objeto_6").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_6").className="nada"; }, 1000);
	});
	$( "#jogo_larissa_objeto_6" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_6" ).mouseleave(function() {document.querySelector("#jogo_larissa_objeto_6").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[5]==0){
			document.querySelector("#jogo_larissa_objeto_6").style.top="260px";
			document.querySelector("#jogo_larissa_objeto_6").style.left="140px";
		}
		}, 5);	
	});
	$( "#jogo_larissa_objeto_6" ).mouseup(function() {document.querySelector("#jogo_larissa_objeto_6").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[5]==0){
			document.querySelector("#jogo_larissa_objeto_6").style.top="260px";
			document.querySelector("#jogo_larissa_objeto_6").style.left="140px";
		}
		}, 5);	
	});	
	//
	$( "#jogo_larissa_objeto_7" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_7").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_7";
			document.querySelector("#jogo_larissa_objeto_7").style.zIndex="20";
			//
			document.querySelector("#jogo_larissa_objeto_7").style.width="114px";
			document.querySelector("#jogo_larissa_objeto_7").style.height="65px";
			document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";			
			//			
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_7").className="nada"; }, 1000);
	});
	$( "#jogo_larissa_objeto_7" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_7" ).mouseleave(function() {
		setTimeout(function(){
			if(voltas_jogo_larissa[6]==0){	
			document.querySelector("#jogo_larissa_objeto_7").style.top="267px";
			document.querySelector("#jogo_larissa_objeto_7").style.left="541px";
			document.querySelector("#jogo_larissa_objeto_7").style.width="69px";
			//document.querySelector("#jogo_larissa_objeto_7").style.height="44px";
			//document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/jogo_larissa_objeto_7.png')";			
			}
		}, 5);			

	});
	//
	$( "#jogo_larissa_objeto_7" ).mouseup(function() {
		setTimeout(function(){
			if(voltas_jogo_larissa[6]==0){	
			document.querySelector("#jogo_larissa_objeto_7").style.top="267px";
			document.querySelector("#jogo_larissa_objeto_7").style.left="541px";
			document.querySelector("#jogo_larissa_objeto_7").style.width="69px";
			document.querySelector("#jogo_larissa_objeto_7").style.height="44px";
			document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/jogo_larissa_objeto_7.png')";			
			}
		}, 5);			

	});	
	//
	$( "#jogo_larissa_objeto_8" ).mousedown(function() {
		if(elementos_cortados[2]=="s"){
			document.querySelector("#jogo_larissa_objeto_8").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_8";
			document.querySelector("#jogo_larissa_objeto_8").style.zIndex="20";
			//
			document.querySelector("#jogo_larissa_objeto_8").style.width="114px";
			document.querySelector("#jogo_larissa_objeto_8").style.height="65px";
			document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";			
			//
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_8").className="nada"; }, 1000);
		}
	});
	$( "#jogo_larissa_objeto_8" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_8" ).mouseup(function() {
		setTimeout(function(){ 
				document.querySelector("#jogo_larissa_objeto_8").style.width="89px";
				document.querySelector("#jogo_larissa_objeto_8").style.height="33px";
				document.querySelector("#jogo_larissa_objeto_8").style.left="600px";
				document.querySelector("#jogo_larissa_objeto_8").style.top="438px";
				document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/jogo_larissa_objeto_8.png')";
				document.querySelector("#jogo_larissa_objeto_8").style.zIndex="10";
		}, 5);			
	});
	//
	$( "#jogo_larissa_objeto_8" ).mouseleave(function() {
		setTimeout(function(){ 
				//document.querySelector("#jogo_larissa_objeto_8").style.width="89px";
				//document.querySelector("#jogo_larissa_objeto_8").style.height="33px";
				document.querySelector("#jogo_larissa_objeto_8").style.left="600px";
				document.querySelector("#jogo_larissa_objeto_8").style.top="438px";
				//document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/jogo_larissa_objeto_8.png')";
				document.querySelector("#jogo_larissa_objeto_8").style.zIndex="10";
		}, 5);			
	});
	//	
	$( "#jogo_larissa_objeto_9" ).mousedown(function() {
			document.querySelector("#jogo_larissa_objeto_9").className="animacao_atraso_0 tada";
			item_atual="jogo_larissa_objeto_9";
			document.querySelector("#jogo_larissa_objeto_9").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_larissa_objeto_9").className="nada"; }, 1000);
	});
	$( "#jogo_larissa_objeto_9" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_larissa_objeto_9" ).mouseleave(function() {document.querySelector("#jogo_larissa_objeto_9").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[8]==0){			
			document.querySelector("#jogo_larissa_objeto_9").style.top="393px";
			document.querySelector("#jogo_larissa_objeto_9").style.left="903px";
		}			
		}, 5);		
	});
	//
	$( "#jogo_larissa_objeto_9" ).mouseup(function() {document.querySelector("#jogo_larissa_objeto_9").style.zIndex="10";
		setTimeout(function(){
		if(voltas_jogo_larissa[8]==0){			
			document.querySelector("#jogo_larissa_objeto_9").style.top="393px";
			document.querySelector("#jogo_larissa_objeto_9").style.left="903px";
		}			
		}, 5);		
	});
	//










	
/*Funções para soltar objetos: Jogo Larissa */
	/* Rôbos */
	// Caixa creche
    $( "#jogo_larissa_frente_creche" ).droppable({
		accept: "#jogo_larissa_objeto_1, #jogo_larissa_objeto_2, #jogo_larissa_objeto_3, #jogo_larissa_objeto_4, #jogo_larissa_objeto_5, #jogo_larissa_objeto_6, #jogo_larissa_objeto_7, #jogo_larissa_objeto_8, #jogo_larissa_objeto_9",		
		drop: function( event, ui ) {
			console.log("Drop!")
			//
			document.querySelector("#jogo_larissa_frente_creche").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_larissa_caixa_creche").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_larissa_frente_creche").className="nada";
				document.querySelector("#jogo_larissa_caixa_creche").className="nada";
			}, 1000);
			if(item_atual=="jogo_larissa_objeto_1"){
				$( "#jogo_larissa_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[0]=1;
				document.querySelector("#jogo_larissa_objeto_1").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_1").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					document.querySelector("#jogo_larissa_objeto_1").style.left="420px";
				}				
			}
			if(item_atual=="jogo_larissa_objeto_2"){
				$( "#jogo_larissa_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[1]=1;
				document.querySelector("#jogo_larissa_objeto_2").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_2").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					document.querySelector("#jogo_larissa_objeto_2").style.left="420px";
				}				
			}			
			if(item_atual=="jogo_larissa_objeto_3"){
				$( "#jogo_larissa_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[2]=1;
				document.querySelector("#jogo_larissa_objeto_3").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_3").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					document.querySelector("#jogo_larissa_objeto_3").style.left="420px";
				}				
			}
			if(item_atual=="jogo_larissa_objeto_4"){
				$( "#jogo_larissa_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[3]=1;
				elementos_cortados[0]="n";
				document.querySelector("#jogo_larissa_objeto_4").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_4").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					elementos_cortados[0]="n";
					document.querySelector("#jogo_larissa_objeto_4").style.left="420px";
				}
			setTimeout(function(){
				document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
				document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
				document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
			}, 1000);
				
			}			
			/* Dinossauros */
			if(item_atual=="jogo_larissa_objeto_5"){
				$( "#jogo_larissa_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[4]=1;
				document.querySelector("#jogo_larissa_objeto_5").style.top="530px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_5").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					document.querySelector("#jogo_larissa_objeto_5").style.left="420px";
				}				
			}
			//
			if(item_atual=="jogo_larissa_objeto_6"){
				$( "#jogo_larissa_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[5]=1;
				document.querySelector("#jogo_larissa_objeto_6").style.top="530px";
				document.querySelector("#jogo_larissa_objeto_6").style.zIndex="10";
				//
				var pos_objeto = $("#jogo_larissa_objeto_6").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					document.querySelector("#jogo_larissa_objeto_6").style.left="420px";
				}				
			}
			//
			if(item_atual=="jogo_larissa_objeto_7"){
				$( "#jogo_larissa_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_7").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[6]=1;
				elementos_cortados[1]="n";
				console.log(elementos_cortados);
				document.querySelector("#jogo_larissa_objeto_7").style.top="530px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_7").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					elementos_cortados[1]="n";
					document.querySelector("#jogo_larissa_objeto_7").style.left="420px";
				}
			setTimeout(function(){
				document.querySelector("#jogo_larissa_objeto_7").style.width="132px";
				document.querySelector("#jogo_larissa_objeto_7").style.height="89px";
				document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";
			}, 1000);
				
			}
			//
			if(item_atual=="jogo_larissa_objeto_8"){
				$( "#jogo_larissa_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_8").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[7]=1;
				elementos_cortados[2]="n";
				console.log(elementos_cortados);
				document.querySelector("#jogo_larissa_objeto_8").style.top="530px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_8").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					elementos_cortados[2]="n";
					document.querySelector("#jogo_larissa_objeto_8").style.left="420px";
				}
			setTimeout(function(){
				document.querySelector("#jogo_larissa_objeto_8").style.width="132px";
				document.querySelector("#jogo_larissa_objeto_8").style.height="89px";
				document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";
			}, 1000);
				
			}
			//
			if(item_atual=="jogo_larissa_objeto_9"){
				$( "#jogo_larissa_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_9").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[0]++;
				voltas_jogo_larissa[8]=1;
				document.querySelector("#jogo_larissa_objeto_9").style.top="508px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_9").position();
				if(pos_objeto.left<320 || pos_objeto.left>482){
					document.querySelector("#jogo_larissa_objeto_9").style.left="420px";
				}				
			}
			//			

      }
    });
	/* Caixa orfanato */
    $( "#jogo_larissa_frente_orfanato" ).droppable({
		accept: "#jogo_larissa_objeto_1, #jogo_larissa_objeto_2, #jogo_larissa_objeto_3, #jogo_larissa_objeto_4, #jogo_larissa_objeto_5, #jogo_larissa_objeto_6, #jogo_larissa_objeto_7, #jogo_larissa_objeto_8, #jogo_larissa_objeto_9",		
		drop: function( event, ui ) {
			console.log("Drop!")
			//
			document.querySelector("#jogo_larissa_frente_orfanato").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_larissa_caixa_orfanato").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_larissa_frente_orfanato").className="nada";
				document.querySelector("#jogo_larissa_caixa_orfanato").className="nada";
			}, 1000);
			if(item_atual=="jogo_larissa_objeto_1"){
				$( "#jogo_larissa_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[0]=1;
				document.querySelector("#jogo_larissa_objeto_1").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_1").position();
				if(pos_objeto.left<598 || pos_objeto.left>747){
					document.querySelector("#jogo_larissa_objeto_1").style.left="690px";
				}				
			}
			if(item_atual=="jogo_larissa_objeto_2"){
				$( "#jogo_larissa_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[1]=1;
				document.querySelector("#jogo_larissa_objeto_2").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_2").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					document.querySelector("#jogo_larissa_objeto_2").style.left="690px";
				}				
			}			
			if(item_atual=="jogo_larissa_objeto_3"){
				$( "#jogo_larissa_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[2]=1;
				document.querySelector("#jogo_larissa_objeto_3").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_3").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					document.querySelector("#jogo_larissa_objeto_3").style.left="690px";
				}				
			}
			if(item_atual=="jogo_larissa_objeto_4"){
				$( "#jogo_larissa_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[3]=1;
				elementos_cortados[0]="n";
				document.querySelector("#jogo_larissa_objeto_4").style.top="518px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_4").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					document.querySelector("#jogo_larissa_objeto_4").style.left="690px";
				}
			setTimeout(function(){
				document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
				document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
				document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
			}, 1000);
				
			}			
			/* Dinossauros */
			if(item_atual=="jogo_larissa_objeto_5"){
				$( "#jogo_larissa_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[4]=1;
				document.querySelector("#jogo_larissa_objeto_5").style.top="530px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_5").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					document.querySelector("#jogo_larissa_objeto_5").style.left="690px";
				}				
			}
			//
			if(item_atual=="jogo_larissa_objeto_6"){
				$( "#jogo_larissa_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[5]=1;
				document.querySelector("#jogo_larissa_objeto_6").style.top="530px";
				document.querySelector("#jogo_larissa_objeto_6").style.zIndex="10";
				//
				var pos_objeto = $("#jogo_larissa_objeto_6").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					document.querySelector("#jogo_larissa_objeto_6").style.left="690px";
				}				
			}
			//
			if(item_atual=="jogo_larissa_objeto_7"){
				$( "#jogo_larissa_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_7").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[6]=1;
				elementos_cortados[1]="n";
				console.log(elementos_cortados);
				document.querySelector("#jogo_larissa_objeto_7").style.top="530px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_7").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					elementos_cortados[1]="n";
					document.querySelector("#jogo_larissa_objeto_7").style.left="690px";
				}
			setTimeout(function(){
				document.querySelector("#jogo_larissa_objeto_7").style.width="132px";
				document.querySelector("#jogo_larissa_objeto_7").style.height="89px";
				document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";
			}, 1000);
				
			}
			//
			if(item_atual=="jogo_larissa_objeto_8"){
				$( "#jogo_larissa_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_8").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[7]=1;
				elementos_cortados[2]="n";
				console.log(elementos_cortados);
				document.querySelector("#jogo_larissa_objeto_8").style.top="530px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_8").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					elementos_cortados[2]="n";
					document.querySelector("#jogo_larissa_objeto_8").style.left="690px";
				}
			setTimeout(function(){
				document.querySelector("#jogo_larissa_objeto_8").style.width="132px";
				document.querySelector("#jogo_larissa_objeto_8").style.height="89px";
				document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";
			}, 1000);
				
			}
			//
			if(item_atual=="jogo_larissa_objeto_9"){
				$( "#jogo_larissa_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_larissa_objeto_9").draggable({containment: "parent", disabled: true });
				respostas_jogo_larissa[1]++;
				voltas_jogo_larissa[8]=1;
				document.querySelector("#jogo_larissa_objeto_9").style.top="508px";
				document.querySelector("#jogo_larissa_objeto_9").style.left="700px";
				//
				var pos_objeto = $("#jogo_larissa_objeto_9").position();
				if(pos_objeto.left<598 || pos_objeto.left>790){
					document.querySelector("#jogo_larissa_objeto_9").style.left="690px";
				}				
			}
			//			

      }
    });
/*Funções para arrastar objetos: Jogo Pedro */
	/* Camisas */
	$( "#jogo_pedro_objeto_1" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_1").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_1";
			document.querySelector("#jogo_pedro_objeto_1").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_1").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_1" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_1" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_1").style.zIndex="15";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_1").style.top="127px";
			document.querySelector("#jogo_pedro_objeto_1").style.left="507px";	
		}, 5);		
	});
	$( "#jogo_pedro_objeto_1" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_1").style.zIndex="15";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_1").style.top="127px";
			document.querySelector("#jogo_pedro_objeto_1").style.left="507px";	
		}, 5);		
	});	
	//	
	$( "#jogo_pedro_objeto_2" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_2").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_2";
			document.querySelector("#jogo_pedro_objeto_2").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_2").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_2" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_2" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_2").style.zIndex="14";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_2").style.top="127px";
			document.querySelector("#jogo_pedro_objeto_2").style.left="578px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_2" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_2").style.zIndex="14";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_2").style.top="127px";
			document.querySelector("#jogo_pedro_objeto_2").style.left="578px";
		}, 5);		
	});	
	//	
	$( "#jogo_pedro_objeto_3" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_3").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_3";
			document.querySelector("#jogo_pedro_objeto_3").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_3").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_3" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_3" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_3").style.zIndex="13";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_3").style.top="126px";
			document.querySelector("#jogo_pedro_objeto_3").style.left="639px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_3" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_3").style.zIndex="13";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_3").style.top="126px";
			document.querySelector("#jogo_pedro_objeto_3").style.left="639px";
		}, 5);		
	});	
	//	
	$( "#jogo_pedro_objeto_4" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_4").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_4";
			document.querySelector("#jogo_pedro_objeto_4").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_4").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_4" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_4" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_4").style.zIndex="12";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_4").style.top="124px";
			document.querySelector("#jogo_pedro_objeto_4").style.left="704px";
		}, 5);	
	});
	$( "#jogo_pedro_objeto_4" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_4").style.zIndex="12";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_4").style.top="124px";
			document.querySelector("#jogo_pedro_objeto_4").style.left="704px";
		}, 5);	
	});	
	//	
	$( "#jogo_pedro_objeto_5" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_5").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_5";
			document.querySelector("#jogo_pedro_objeto_5").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_5").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_5" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_5" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_5").style.zIndex="11";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_5").style.top="123px";
			document.querySelector("#jogo_pedro_objeto_5").style.left="763px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_5" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_5").style.zIndex="11";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_5").style.top="123px";
			document.querySelector("#jogo_pedro_objeto_5").style.left="763px";
		}, 5);		
	});	
	//	
	$( "#jogo_pedro_objeto_6" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_6").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_6";
			document.querySelector("#jogo_pedro_objeto_6").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_6").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_6" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_6" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_6").style.zIndex="10";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_6").style.top="122px";
			document.querySelector("#jogo_pedro_objeto_6").style.left="831px";
		}, 5);
	});
	$( "#jogo_pedro_objeto_6" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_6").style.zIndex="10";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_6").style.top="122px";
			document.querySelector("#jogo_pedro_objeto_6").style.left="831px";
		}, 5);
	});	
	//
	/* Bermudas */
	$( "#jogo_pedro_objeto_7" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_7").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_7";
			document.querySelector("#jogo_pedro_objeto_7").style.zIndex="21";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_7").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_7" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_7" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_7").style.zIndex="21";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_7").style.top="133px";
			document.querySelector("#jogo_pedro_objeto_7").style.left="307px";
		}, 5);	
	});
	$( "#jogo_pedro_objeto_7" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_7").style.zIndex="21";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_7").style.top="133px";
			document.querySelector("#jogo_pedro_objeto_7").style.left="307px";
		}, 5);	
	});	
	//	
	$( "#jogo_pedro_objeto_8" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_8").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_8";
			document.querySelector("#jogo_pedro_objeto_8").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_8").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_8" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: true });
	$( "#jogo_pedro_objeto_8" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_8").style.zIndex="10";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_8").style.top="159px";
			document.querySelector("#jogo_pedro_objeto_8").style.left="309px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_8" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_8").style.zIndex="10";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_8").style.top="159px";
			document.querySelector("#jogo_pedro_objeto_8").style.left="309px";
		}, 5);		
	});	
	//		
	$( "#jogo_pedro_objeto_9" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_9").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_9";
			document.querySelector("#jogo_pedro_objeto_9").style.zIndex="21";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_9").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_9" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_9" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_9").style.zIndex="21";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_9").style.top="260px";
			document.querySelector("#jogo_pedro_objeto_9").style.left="317px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_9" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_9").style.zIndex="21";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_9").style.top="260px";
			document.querySelector("#jogo_pedro_objeto_9").style.left="317px";
		}, 5);		
	});	
	//	
	$( "#jogo_pedro_objeto_10" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_10").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_10";
			document.querySelector("#jogo_pedro_objeto_10").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_10").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_10" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: true });
	$( "#jogo_pedro_objeto_10" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_10").style.zIndex="10";
		setTimeout(function(){ 
		document.querySelector("#jogo_pedro_objeto_10").style.top="284px";
		document.querySelector("#jogo_pedro_objeto_10").style.left="308px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_10" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_10").style.zIndex="10";
		setTimeout(function(){ 
		document.querySelector("#jogo_pedro_objeto_10").style.top="284px";
		document.querySelector("#jogo_pedro_objeto_10").style.left="308px";
		}, 5);		
	});	
	//		
	$( "#jogo_pedro_objeto_11" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_11").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_11";
			document.querySelector("#jogo_pedro_objeto_11").style.zIndex="21";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_11").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_11" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_pedro_objeto_11" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_11").style.zIndex="21";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_11").style.top="382px";
			document.querySelector("#jogo_pedro_objeto_11").style.left="307px";
		}, 5);		
	});
	$( "#jogo_pedro_objeto_11" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_11").style.zIndex="21";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_11").style.top="382px";
			document.querySelector("#jogo_pedro_objeto_11").style.left="307px";
		}, 5);		
	});	
	//	
	$( "#jogo_pedro_objeto_12" ).mousedown(function() {
			document.querySelector("#jogo_pedro_objeto_12").className="animacao_atraso_0 tada";
			item_atual="jogo_pedro_objeto_12";
			document.querySelector("#jogo_pedro_objeto_12").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_pedro_objeto_12").className="nada"; }, 1000);
	});
	$( "#jogo_pedro_objeto_12" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: true });
	$( "#jogo_pedro_objeto_12" ).mouseleave(function() {document.querySelector("#jogo_pedro_objeto_12").style.zIndex="10";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_12").style.top="406px";
			document.querySelector("#jogo_pedro_objeto_12").style.left="311px";
		}, 5);	
	});
	$( "#jogo_pedro_objeto_12" ).mouseup(function() {document.querySelector("#jogo_pedro_objeto_12").style.zIndex="10";
		setTimeout(function(){ 
			document.querySelector("#jogo_pedro_objeto_12").style.top="406px";
			document.querySelector("#jogo_pedro_objeto_12").style.left="311px";
		}, 5);	
	});	
	//		
	
	
	
	
	
	
/*Funções para soltar objetos: Jogo Larissa */
	// Caixa creche
    $("#jogo_pedro_frente_creche").droppable({
		accept: "#jogo_pedro_objeto_1, #jogo_pedro_objeto_2, #jogo_pedro_objeto_3, #jogo_pedro_objeto_4, #jogo_pedro_objeto_5, #jogo_pedro_objeto_6, #jogo_pedro_objeto_7, #jogo_pedro_objeto_8, #jogo_pedro_objeto_9, #jogo_pedro_objeto_10, #jogo_pedro_objeto_11, #jogo_pedro_objeto_12",		
		drop: function( event, ui ) {
			//
			document.querySelector("#jogo_pedro_frente_creche").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_pedro_caixa_creche").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_pedro_frente_creche").className="nada";
				document.querySelector("#jogo_pedro_caixa_creche").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_pedro_objeto_1"){
				$( "#jogo_pedro_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[0]=1;
				document.querySelector("#jogo_pedro_objeto_1").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_1").style.left="307px";
				document.querySelector("#jogo_pedro_objeto_1").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_1").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_1").style.backgroundImage= "url('./img/jogo_pedro_objeto_1_drop.png')";
			}
			//
			if(item_atual=="jogo_pedro_objeto_2"){
				$( "#jogo_pedro_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[1]=1;
				document.querySelector("#jogo_pedro_objeto_2").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_2").style.left="317px";
				document.querySelector("#jogo_pedro_objeto_2").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_2").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_2").style.backgroundImage= "url('./img/jogo_pedro_objeto_2_drop.png')";
			}
			//			
			if(item_atual=="jogo_pedro_objeto_3"){
				$( "#jogo_pedro_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[2]=1;
				document.querySelector("#jogo_pedro_objeto_3").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_3").style.left="327px";
				document.querySelector("#jogo_pedro_objeto_3").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_3").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_3").style.backgroundImage= "url('./img/jogo_pedro_objeto_3_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_4"){
				$( "#jogo_pedro_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[3]=1;
				document.querySelector("#jogo_pedro_objeto_4").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_4").style.left="337px";
				document.querySelector("#jogo_pedro_objeto_4").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_4").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_4").style.backgroundImage= "url('./img/jogo_pedro_objeto_4_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_5"){
				$( "#jogo_pedro_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[4]=1;
				document.querySelector("#jogo_pedro_objeto_5").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_5").style.left="347px";
				document.querySelector("#jogo_pedro_objeto_5").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_5").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_5").style.backgroundImage= "url('./img/jogo_pedro_objeto_5_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_6"){
				$( "#jogo_pedro_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[5]=1;
				document.querySelector("#jogo_pedro_objeto_6").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_6").style.left="357px";
				document.querySelector("#jogo_pedro_objeto_6").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_6").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_6").style.backgroundImage= "url('./img/jogo_pedro_objeto_6_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_7"){
				$( "#jogo_pedro_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_7").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[6]=1;
				document.querySelector("#jogo_pedro_objeto_7").style.top="503px";
				document.querySelector("#jogo_pedro_objeto_7").style.left="371px";
				document.querySelector("#jogo_pedro_objeto_7").style.zIndex="14";
				document.querySelector("#jogo_pedro_objeto_7").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_8"){
				$( "#jogo_pedro_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[7]=1;
				document.querySelector("#jogo_pedro_objeto_8").style.top="513px";
				document.querySelector("#jogo_pedro_objeto_8").style.left="371px";
				document.querySelector("#jogo_pedro_objeto_8").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_9"){
				$( "#jogo_pedro_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_9").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[8]=1;
				document.querySelector("#jogo_pedro_objeto_9").style.top="523px";
				document.querySelector("#jogo_pedro_objeto_9").style.left="371px";
				document.querySelector("#jogo_pedro_objeto_9").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_10"){
				$( "#jogo_pedro_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[9]=1;
				document.querySelector("#jogo_pedro_objeto_10").style.top="533px";
				document.querySelector("#jogo_pedro_objeto_10").style.left="371px";
				document.querySelector("#jogo_pedro_objeto_10").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_11"){
				$( "#jogo_pedro_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_11").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[10]=1;
				document.querySelector("#jogo_pedro_objeto_11").style.top="543px";
				document.querySelector("#jogo_pedro_objeto_11").style.left="371px";
				document.querySelector("#jogo_pedro_objeto_11").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_12"){
				$( "#jogo_pedro_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[0]++;
				voltas_jogo_pedro[11]=1;
				document.querySelector("#jogo_pedro_objeto_12").style.top="553px";
				document.querySelector("#jogo_pedro_objeto_12").style.left="371px";
				document.querySelector("#jogo_pedro_objeto_12").style.height="0px";
			}
			//	
			
			
			
		}
	});
// Caixa orfanato
    $("#jogo_pedro_frente_orfanato").droppable({
		accept: "#jogo_pedro_objeto_1, #jogo_pedro_objeto_2, #jogo_pedro_objeto_3, #jogo_pedro_objeto_4, #jogo_pedro_objeto_5, #jogo_pedro_objeto_6, #jogo_pedro_objeto_7, #jogo_pedro_objeto_8, #jogo_pedro_objeto_9, #jogo_pedro_objeto_10, #jogo_pedro_objeto_11, #jogo_pedro_objeto_12",		
		drop: function( event, ui ) {
			//
			document.querySelector("#jogo_pedro_frente_orfanato").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_pedro_caixa_orfanato").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_pedro_frente_orfanato").className="nada";
				document.querySelector("#jogo_pedro_caixa_orfanato").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_pedro_objeto_1"){
				$( "#jogo_pedro_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[0]=1;
				document.querySelector("#jogo_pedro_objeto_1").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_1").style.left="512px";
				document.querySelector("#jogo_pedro_objeto_1").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_1").style.backgroundImage= "url('./img/jogo_pedro_objeto_1_drop.png')";
			}
			//
			if(item_atual=="jogo_pedro_objeto_2"){
				$( "#jogo_pedro_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[1]=1;
				document.querySelector("#jogo_pedro_objeto_2").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_2").style.left="522px";
				document.querySelector("#jogo_pedro_objeto_2").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_2").style.backgroundImage= "url('./img/jogo_pedro_objeto_2_drop.png')";
			}
			//			
			if(item_atual=="jogo_pedro_objeto_3"){
				$( "#jogo_pedro_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[2]=1;
				document.querySelector("#jogo_pedro_objeto_3").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_3").style.left="532px";
				document.querySelector("#jogo_pedro_objeto_3").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_3").style.backgroundImage= "url('./img/jogo_pedro_objeto_3_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_4"){
				$( "#jogo_pedro_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[3]=1;
				document.querySelector("#jogo_pedro_objeto_4").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_4").style.left="542px";
				document.querySelector("#jogo_pedro_objeto_4").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_4").style.backgroundImage= "url('./img/jogo_pedro_objeto_4_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_5"){
				$( "#jogo_pedro_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[4]=1;
				document.querySelector("#jogo_pedro_objeto_5").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_5").style.left="552px";
				document.querySelector("#jogo_pedro_objeto_5").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_5").style.backgroundImage= "url('./img/jogo_pedro_objeto_5_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_6"){
				$( "#jogo_pedro_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[5]=1;
				document.querySelector("#jogo_pedro_objeto_6").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_6").style.left="562px";
				document.querySelector("#jogo_pedro_objeto_6").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_6").style.backgroundImage= "url('./img/jogo_pedro_objeto_6_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_7"){
				$( "#jogo_pedro_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_7").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[6]=1;
				document.querySelector("#jogo_pedro_objeto_7").style.top="503px";
				document.querySelector("#jogo_pedro_objeto_7").style.left="583px";
				document.querySelector("#jogo_pedro_objeto_7").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_8"){
				$( "#jogo_pedro_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[7]=1;
				document.querySelector("#jogo_pedro_objeto_8").style.top="513px";
				document.querySelector("#jogo_pedro_objeto_8").style.left="583px";
				document.querySelector("#jogo_pedro_objeto_8").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_9"){
				$( "#jogo_pedro_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_9").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[8]=1;
				document.querySelector("#jogo_pedro_objeto_9").style.top="523px";
				document.querySelector("#jogo_pedro_objeto_9").style.left="583px";
				document.querySelector("#jogo_pedro_objeto_9").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_10"){
				$( "#jogo_pedro_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[9]=1;
				document.querySelector("#jogo_pedro_objeto_10").style.top="533px";
				document.querySelector("#jogo_pedro_objeto_10").style.left="583px";
				document.querySelector("#jogo_pedro_objeto_10").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_11"){
				$( "#jogo_pedro_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_11").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[10]=1;
				document.querySelector("#jogo_pedro_objeto_11").style.top="543px";
				document.querySelector("#jogo_pedro_objeto_11").style.left="583px";
				document.querySelector("#jogo_pedro_objeto_11").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_12"){
				$( "#jogo_pedro_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[1]++;
				voltas_jogo_pedro[11]=1;
				document.querySelector("#jogo_pedro_objeto_12").style.top="553px";
				document.querySelector("#jogo_pedro_objeto_12").style.left="583px";
				document.querySelector("#jogo_pedro_objeto_12").style.height="0px";
			}
			//	
			
			
			
		}
	});	
// Caixa asilo
    $("#jogo_pedro_frente_asilo").droppable({
		accept: "#jogo_pedro_objeto_1, #jogo_pedro_objeto_2, #jogo_pedro_objeto_3, #jogo_pedro_objeto_4, #jogo_pedro_objeto_5, #jogo_pedro_objeto_6, #jogo_pedro_objeto_7, #jogo_pedro_objeto_8, #jogo_pedro_objeto_9, #jogo_pedro_objeto_10, #jogo_pedro_objeto_11, #jogo_pedro_objeto_12",		
		drop: function( event, ui ) {
			//
			document.querySelector("#jogo_pedro_frente_asilo").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_pedro_caixa_asilo").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_pedro_frente_asilo").className="nada";
				document.querySelector("#jogo_pedro_caixa_asilo").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_pedro_objeto_1"){
				$( "#jogo_pedro_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[0]=1;
				document.querySelector("#jogo_pedro_objeto_1").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_1").style.left="721px";
				document.querySelector("#jogo_pedro_objeto_1").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_1").style.backgroundImage= "url('./img/jogo_pedro_objeto_1_drop.png')";
				
			}
			//
			if(item_atual=="jogo_pedro_objeto_2"){
				$( "#jogo_pedro_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[1]=1;
				document.querySelector("#jogo_pedro_objeto_2").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_2").style.left="731px";
				document.querySelector("#jogo_pedro_objeto_2").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_2").style.backgroundImage= "url('./img/jogo_pedro_objeto_2_drop.png')";
			}
			//			
			if(item_atual=="jogo_pedro_objeto_3"){
				$( "#jogo_pedro_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[2]=1;
				document.querySelector("#jogo_pedro_objeto_3").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_3").style.left="741px";
				document.querySelector("#jogo_pedro_objeto_3").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_3").style.backgroundImage= "url('./img/jogo_pedro_objeto_3_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_4"){
				$( "#jogo_pedro_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[3]=1;
				document.querySelector("#jogo_pedro_objeto_4").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_4").style.left="751px";
				document.querySelector("#jogo_pedro_objeto_4").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_4").style.backgroundImage= "url('./img/jogo_pedro_objeto_4_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_5"){
				$( "#jogo_pedro_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[4]=1;	
				document.querySelector("#jogo_pedro_objeto_5").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_5").style.left="761px";
				document.querySelector("#jogo_pedro_objeto_5").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_5").style.backgroundImage= "url('./img/jogo_pedro_objeto_5_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_6"){
				$( "#jogo_pedro_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[5]=1;
				document.querySelector("#jogo_pedro_objeto_6").style.top="421px";
				document.querySelector("#jogo_pedro_objeto_6").style.left="771px";
				document.querySelector("#jogo_pedro_objeto_6").style.height="0px";
				document.querySelector("#jogo_pedro_objeto_6").style.backgroundImage= "url('./img/jogo_pedro_objeto_6_drop.png')";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_7"){
				$( "#jogo_pedro_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_7").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[6]=1;
				document.querySelector("#jogo_pedro_objeto_7").style.top="503px";
				document.querySelector("#jogo_pedro_objeto_7").style.left="798px";
				document.querySelector("#jogo_pedro_objeto_7").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_8"){
				$( "#jogo_pedro_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[7]=1;
				document.querySelector("#jogo_pedro_objeto_8").style.top="513px";
				document.querySelector("#jogo_pedro_objeto_8").style.left="798px";
				document.querySelector("#jogo_pedro_objeto_8").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_9"){
				$( "#jogo_pedro_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_9").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[8]=1;
				document.querySelector("#jogo_pedro_objeto_9").style.top="523px";
				document.querySelector("#jogo_pedro_objeto_9").style.left="798px";
				document.querySelector("#jogo_pedro_objeto_9").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_10"){
				$( "#jogo_pedro_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[9]=1;
				document.querySelector("#jogo_pedro_objeto_10").style.top="533px";
				document.querySelector("#jogo_pedro_objeto_10").style.left="798px";
				document.querySelector("#jogo_pedro_objeto_10").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_11"){
				$( "#jogo_pedro_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_11").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[10]=1;
				document.querySelector("#jogo_pedro_objeto_11").style.top="543px";
				document.querySelector("#jogo_pedro_objeto_11").style.left="798px";
				document.querySelector("#jogo_pedro_objeto_11").style.height="0px";
			}
			//				
			if(item_atual=="jogo_pedro_objeto_12"){
				$( "#jogo_pedro_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: true });
				$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: false });
				//
				respostas_jogo_pedro[2]++;
				voltas_jogo_pedro[11]=1;
				document.querySelector("#jogo_pedro_objeto_12").style.top="553px";
				document.querySelector("#jogo_pedro_objeto_12").style.left="798px";
				document.querySelector("#jogo_pedro_objeto_12").style.height="0px";
			}
			//	
			
			
			
		}
	});		
	

	
/* Funções para cliques em botões: Jogo Pedro */
$("#jogo_pedro_btn_confirmar").click(function() {
	//
	document.querySelector("#devolutva_texto_pedro").style.display="inherit";
	//
	console.log("Creche: "+respostas_jogo_pedro[0]+" : "+fracoes_jogo_pedro[0]);
	console.log("Orfanato: "+respostas_jogo_pedro[1]+" : "+fracoes_jogo_pedro[1]);
	console.log("Asilo: "+respostas_jogo_pedro[2]+" : "+fracoes_jogo_pedro[2]);
  //
  if(respostas_jogo_pedro[0]==fracoes_jogo_pedro[0] && respostas_jogo_pedro[1]==fracoes_jogo_pedro[1] && respostas_jogo_pedro[2]==fracoes_jogo_pedro[2]){
	document.querySelector("#conclusao_larissa_area").style.display="inherit";
	audio_conclusao_pedro.play("audio_conclusao_pedro_corte1");
	//
	document.querySelector("#conclusao_larissa_fundo").className="animacao_atraso_0 fadeIn";
	document.querySelector("#conclusao_larissa_solo").className="animacao_atraso_0 bounceInUp";
	document.querySelector("#conclusao_larissa_personagens").className="animacao_atraso_1 fadeIn";
	document.querySelector("#conclusao_larissa_texto").className="animacao_atraso_1 slideInDown";
	setTimeout(function(){
		document.querySelector("#conclusao_larissa_area").style.top="0px";
		document.querySelector("#conclusao_larissa_area").style.left="0px";
	}, 1000);
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_nao');
	//	
  }else{
	  movimento_entrada_devolutiva();
	  //audio_trilha_sonora.stop();
	  //diminuir_volume_trilha();
  }
});

$("#devolutiva_btn").click(function() {
	movimento_saida_devolutiva();
	//audio_trilha_sonora.play();
	audio_trilha_sonora.volume(0.1);
	volume_atual=0.1;
	/*  Restaurar posições e movimentos para os objetos */
	respostas_jogo_larissa=[0,0];
	respostas_jogo_pedro=[0,0,0];
	respostas_jogo_barbara=[0,0,0,0];
	voltas_jogo_larissa=[0,0,0,0,0,0,0,0,0];
	voltas_jogo_pedro=[0,0,0,0,0,0,0,0,0,0,0,0];
	voltas_jogo_barbara=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	latas_soltas=["s","s"];
	elementos_cortados=["s","s","s","s","s","s"];
	// Larissa
	document.querySelector("#jogo_larissa_objeto_1").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_2").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_3").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_4").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_5").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_6").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_7").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_8").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_9").className="animacao_atraso_0t500ms fadeOut";		
	// Pedro
	document.querySelector("#jogo_pedro_objeto_1").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_2").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_3").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_4").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_5").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_6").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_7").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_8").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_9").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_10").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_11").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_12").className="animacao_atraso_0t500ms fadeOut";
	// Barbará
	document.querySelector("#jogo_barbara_objeto_1").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_2").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_3").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_4").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_5").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_6").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_7").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_8").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_9").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_10").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_11").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_12").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_13").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_14").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_15").className="animacao_atraso_0t500ms fadeOut";
	//
	setTimeout(function(){
	// Larissa
	document.querySelector("#jogo_larissa_objeto_1").style.top="214px";
	document.querySelector("#jogo_larissa_objeto_1").style.left="833px";	
	//
	document.querySelector("#jogo_larissa_objeto_2").style.top="70px";
	document.querySelector("#jogo_larissa_objeto_2").style.left="666px";	
	//
	document.querySelector("#jogo_larissa_objeto_3").style.top="145px";
	document.querySelector("#jogo_larissa_objeto_3").style.left="165px";	
	//
	document.querySelector("#jogo_larissa_objeto_4").style.top="288px";
	document.querySelector("#jogo_larissa_objeto_4").style.left="390px";	
	document.querySelector("#jogo_larissa_objeto_4").style.zIndex="10";
	document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
	document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
	document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
	//
	document.querySelector("#jogo_larissa_objeto_5").style.top="181px";
	document.querySelector("#jogo_larissa_objeto_5").style.left="417px";	
	//
	document.querySelector("#jogo_larissa_objeto_6").style.top="260px";
	document.querySelector("#jogo_larissa_objeto_6").style.left="140px";	
	//
	document.querySelector("#jogo_larissa_objeto_7").style.top="267px";
	document.querySelector("#jogo_larissa_objeto_7").style.left="541px";
	document.querySelector("#jogo_larissa_objeto_7").style.width="69px";
	document.querySelector("#jogo_larissa_objeto_7").style.height="44px";
	document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/jogo_larissa_objeto_7.png')";	
	//
	document.querySelector("#jogo_larissa_objeto_8").style.top="438px";
	document.querySelector("#jogo_larissa_objeto_8").style.left="600px";
	document.querySelector("#jogo_larissa_objeto_8").style.width="89px";
	document.querySelector("#jogo_larissa_objeto_8").style.height="33px";
	document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/jogo_larissa_objeto_8.png')";
	//
	document.querySelector("#jogo_larissa_objeto_9").style.top="393px";
	document.querySelector("#jogo_larissa_objeto_9").style.left="903px";	
	// Pedro
	document.querySelector("#jogo_pedro_objeto_1").style.top="127px";
	document.querySelector("#jogo_pedro_objeto_1").style.left="507px";	
	document.querySelector("#jogo_pedro_objeto_1").style.height="159px";	
	document.querySelector("#jogo_pedro_objeto_1").style.backgroundImage= "url('./img/jogo_pedro_objeto_1.png')";
	document.querySelector("#jogo_pedro_objeto_1").style.zIndex="15";
	//
	document.querySelector("#jogo_pedro_objeto_2").style.top="127px";
	document.querySelector("#jogo_pedro_objeto_2").style.left="578px";
	document.querySelector("#jogo_pedro_objeto_2").style.height="159px";	
	document.querySelector("#jogo_pedro_objeto_2").style.backgroundImage= "url('./img/jogo_pedro_objeto_2.png')";	
	document.querySelector("#jogo_pedro_objeto_2").style.zIndex="14";
	//
	document.querySelector("#jogo_pedro_objeto_3").style.top="126px";
	document.querySelector("#jogo_pedro_objeto_3").style.left="639px";
	document.querySelector("#jogo_pedro_objeto_3").style.height="159px";
	document.querySelector("#jogo_pedro_objeto_3").style.backgroundImage= "url('./img/jogo_pedro_objeto_3.png')";		
	document.querySelector("#jogo_pedro_objeto_3").style.zIndex="13";
	//
	document.querySelector("#jogo_pedro_objeto_4").style.top="124px";
	document.querySelector("#jogo_pedro_objeto_4").style.left="704px";
	document.querySelector("#jogo_pedro_objeto_4").style.height="159px";
	document.querySelector("#jogo_pedro_objeto_4").style.backgroundImage= "url('./img/jogo_pedro_objeto_4.png')";		
	document.querySelector("#jogo_pedro_objeto_4").style.zIndex="12";
	//
	document.querySelector("#jogo_pedro_objeto_5").style.top="123px";
	document.querySelector("#jogo_pedro_objeto_5").style.left="763px";
	document.querySelector("#jogo_pedro_objeto_5").style.height="158px";
	document.querySelector("#jogo_pedro_objeto_5").style.backgroundImage= "url('./img/jogo_pedro_objeto_5.png')";		
	document.querySelector("#jogo_pedro_objeto_5").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_6").style.top="122px";
	document.querySelector("#jogo_pedro_objeto_6").style.left="831px";
	document.querySelector("#jogo_pedro_objeto_6").style.height="158px";
	document.querySelector("#jogo_pedro_objeto_6").style.backgroundImage= "url('./img/jogo_pedro_objeto_6.png')";		
	document.querySelector("#jogo_pedro_objeto_6").style.zIndex="10";
	//
	document.querySelector("#jogo_pedro_objeto_7").style.top="133px";
	document.querySelector("#jogo_pedro_objeto_7").style.left="307px";
	document.querySelector("#jogo_pedro_objeto_7").style.height="60px";	
	document.querySelector("#jogo_pedro_objeto_7").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_8").style.top="159px";
	document.querySelector("#jogo_pedro_objeto_8").style.left="309px";
	document.querySelector("#jogo_pedro_objeto_8").style.height="60px";		
	document.querySelector("#jogo_pedro_objeto_8").style.zIndex="10";
	//
	document.querySelector("#jogo_pedro_objeto_9").style.top="260px";
	document.querySelector("#jogo_pedro_objeto_9").style.left="317px";
	document.querySelector("#jogo_pedro_objeto_9").style.height="59px";			
	document.querySelector("#jogo_pedro_objeto_9").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_10").style.top="284px";
	document.querySelector("#jogo_pedro_objeto_10").style.left="308px";	
	document.querySelector("#jogo_pedro_objeto_10").style.height="60px";		
	document.querySelector("#jogo_pedro_objeto_10").style.zIndex="10";
	//
	document.querySelector("#jogo_pedro_objeto_11").style.top="382px";
	document.querySelector("#jogo_pedro_objeto_11").style.left="307px";	
	document.querySelector("#jogo_pedro_objeto_11").style.height="59px";			
	document.querySelector("#jogo_pedro_objeto_11").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_12").style.top="406px";
	document.querySelector("#jogo_pedro_objeto_12").style.left="311px";
	document.querySelector("#jogo_pedro_objeto_12").style.height="60px";			
	document.querySelector("#jogo_pedro_objeto_12").style.zIndex="10";
	// Barbará
	document.querySelector("#jogo_barbara_objeto_1").style.top="49px";
	document.querySelector("#jogo_barbara_objeto_1").style.left="191px";	
	//
	document.querySelector("#jogo_barbara_objeto_2").style.top="372px";
	document.querySelector("#jogo_barbara_objeto_2").style.left="225px";	
	//
	document.querySelector("#jogo_barbara_objeto_3").style.top="147px";
	document.querySelector("#jogo_barbara_objeto_3").style.left="443px";	
	//
	document.querySelector("#jogo_barbara_objeto_4").style.top="185px";
	document.querySelector("#jogo_barbara_objeto_4").style.left="589px";
	document.querySelector("#jogo_barbara_objeto_4").style.width="65px";
	document.querySelector("#jogo_barbara_objeto_4").style.height="57px";	
	document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_4.png')";
	//
	document.querySelector("#jogo_barbara_objeto_5").style.top="270px";
	document.querySelector("#jogo_barbara_objeto_5").style.left="693px";	
	//
	document.querySelector("#jogo_barbara_objeto_6").style.top="135px";
	document.querySelector("#jogo_barbara_objeto_6").style.left="882px";	
	//
	document.querySelector("#jogo_barbara_objeto_7").style.top="480px";
	document.querySelector("#jogo_barbara_objeto_7").style.left="911px";	
	document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7.png')";
	document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(0deg)";			
	document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(0deg)";				
	document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(0deg)";			
	document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(0deg)";			
	document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(0deg)";		
	//
	document.querySelector("#jogo_barbara_objeto_8").style.top="204px";
	document.querySelector("#jogo_barbara_objeto_8").style.left="218px";	
	//
	document.querySelector("#jogo_barbara_objeto_9").style.top="169px";
	document.querySelector("#jogo_barbara_objeto_9").style.left="390px";	
	//
	document.querySelector("#jogo_barbara_objeto_10").style.top="247px";
	document.querySelector("#jogo_barbara_objeto_10").style.left="535px";	
	document.querySelector("#jogo_barbara_objeto_10").style.zIndex="11";	
	//
	document.querySelector("#jogo_barbara_objeto_11").style.top="247px";
	document.querySelector("#jogo_barbara_objeto_11").style.left="582px";
	document.querySelector("#jogo_barbara_objeto_11").style.zIndex="11";		
	//
	document.querySelector("#jogo_barbara_objeto_12").style.top="302px";
	document.querySelector("#jogo_barbara_objeto_12").style.left="510px";
	document.querySelector("#jogo_barbara_objeto_12").style.zIndex="10";	
	//
	document.querySelector("#jogo_barbara_objeto_13").style.top="302px";
	document.querySelector("#jogo_barbara_objeto_13").style.left="557px";
	document.querySelector("#jogo_barbara_objeto_13").style.zIndex="10";		
	//
	document.querySelector("#jogo_barbara_objeto_14").style.top="302px";
	document.querySelector("#jogo_barbara_objeto_14").style.left="601px";
	document.querySelector("#jogo_barbara_objeto_14").style.zIndex="10";		
	//
	document.querySelector("#jogo_barbara_objeto_15").style.top="176px";
	document.querySelector("#jogo_barbara_objeto_15").style.left="964px";	
	//
	// Larissa
	$("#jogo_larissa_objeto_1").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_2").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_3").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_4").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_5").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_6").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_7").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_8").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_9").draggable({containment: "parent", disabled: false });	
	//
	$("#jogo_larissa_objeto_1").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_2").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_3").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_4").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_5").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_6").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_7").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_8").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_9").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	// Pedro
	$("#jogo_pedro_objeto_1").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_2").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_3").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_4").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_5").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_6").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_7").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: true });	
	$("#jogo_pedro_objeto_9").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: true });	
	$("#jogo_pedro_objeto_11").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: true });	
	//
	$("#jogo_pedro_objeto_1").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_2").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_3").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_4").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_5").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_6").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_7").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_8").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_9").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_10").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_11").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_12").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	// Barbará
	$("#jogo_barbara_objeto_1").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_2").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_3").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_4").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_5").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_6").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_7").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_8").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_9").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_10").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_11").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });	
	$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });	
	$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });	
	$("#jogo_barbara_objeto_15").draggable({containment: "parent", disabled: false });	
	//
	$("#jogo_barbara_objeto_1").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_2").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_3").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_4").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_5").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_6").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_7").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_8").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_9").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_10").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_11").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_12").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_13").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_14").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_15").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	//
	}, 500);
	//
	setTimeout(function(){
		// Larissa
		document.querySelector("#jogo_larissa_objeto_1").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_3").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_4").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_5").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_6").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_7").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_8").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_9").className="animacao_atraso_0 fadeIn";		
		// Pedro
		document.querySelector("#jogo_pedro_objeto_1").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_3").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_4").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_5").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_6").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_7").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_8").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_9").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_10").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_11").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_12").className="animacao_atraso_0 fadeIn";
		// Barbará
		document.querySelector("#jogo_barbara_objeto_1").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_3").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_4").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_5").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_6").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_7").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_8").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_9").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_10").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_11").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_12").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_13").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_14").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_15").className="animacao_atraso_0 fadeIn";		
	}, 600);	
	
	
	
	
});
$("#jogo_pedro_btn_lista").click(function() {
	TrocaInstrucao("Clique em Fechar para guardar a lista de objetos e volte ao jogo.")
	document.querySelector("#grupo_painel_pedro").style.display="inherit";
	//
	document.querySelector("#jogo_pedro_painel_lista").className="animacao_atraso_0 bounceInDown";
	setTimeout(function(){ document.querySelector("#jogo_pedro_painel_btn_fechar").style.display="inherit"; }, 600);
	document.querySelector("#jogo_pedro_painel_btn_fechar").className="animacao_atraso_0 slideInDown";
	document.querySelector("#jogo_pedro_sombra_painel").className="animacao_atraso_0 fadeIn";	
});
$("#jogo_pedro_painel_btn_fechar").click(function() {
	TrocaInstrucao("Arraste os objetos para as caixas respeitando a fração indicada em cada destino.<br />Após arrastar todos os objetos para a caixa adequada, confirme a escolha clicando em Confirmar.")
	document.querySelector("#jogo_pedro_painel_lista").className="animacao_atraso_0 bounceOutUp";
	document.querySelector("#jogo_pedro_painel_btn_fechar").className="animacao_atraso_0 slideOutUp";
	setTimeout(function(){ document.querySelector("#jogo_pedro_painel_btn_fechar").style.display="none"; }, 500);	
	document.querySelector("#jogo_pedro_sombra_painel").className="animacao_atraso_0 fadeOut";	
	//
	setTimeout(function(){document.querySelector("#grupo_painel_pedro").style.display="none"; }, 1000);
	
});

/* Funções para cliques em botões: Jogo Bárbara */
$("#jogo_barbara_btn_confirmar").click(function() {
	//
	document.querySelector("#devolutva_texto_barbara").style.display="inherit";
	document.querySelector("#img_body").style.backgroundImage= "url('./img/fundo_oed_2.png')";
	//
	console.log("Creche: "+respostas_jogo_barbara[0]+" : "+fracoes_jogo_barbara[0]);
	console.log("Orfanato: "+respostas_jogo_barbara[1]+" : "+fracoes_jogo_barbara[1]);
	console.log("Asilo: "+respostas_jogo_barbara[2]+" : "+fracoes_jogo_barbara[2]);
	console.log("Cidae: "+respostas_jogo_barbara[3]+" : "+fracoes_jogo_barbara[3]);
  //
  if(respostas_jogo_barbara[0]==fracoes_jogo_barbara[0] && respostas_jogo_barbara[1]==fracoes_jogo_barbara[1] && respostas_jogo_barbara[2]==fracoes_jogo_barbara[2] && respostas_jogo_barbara[3]==fracoes_jogo_barbara[3]){
	//
	audio_conclusao_barbara.play("audio_conclusao_barbara_corte1");//
	
	$("#inicial_area, #explicacao_area, #desafio_area, #tutorial_area, #jogo_pedro_area, #conclusao_larissa_area, #devolutiva_area").css( "display", "none" );
	//
	$("#inicial_area, #explicacao_area, #tutorial_area, #jogo_larissa_area, #jogo_pedro_area, #conclusao_larissa_area, #devolutiva_area").css( "width", "1px" );
	document.querySelector("#conclusao_larissa_area").style.display="inherit";
	clearInterval(pos_objetos_barbara_cnd);
	//
	document.querySelector("#conclusao_larissa_fundo").className="animacao_atraso_0 fadeIn";
	document.querySelector("#conclusao_larissa_solo").className="animacao_atraso_0 slideInUp";
	document.querySelector("#conclusao_larissa_personagens").className="animacao_atraso_1 fadeIn";
	document.querySelector("#conclusao_larissa_texto").className="animacao_atraso_1 bounceInDown";
	//
	setTimeout(function(){ 
		$("#inicial_area, #explicacao_area, #desafio_area, #tutorial_area, #jogo_larissa_area, #jogo_pedro_area, #devolutiva_area").css( "display", "none" );
		//
		document.querySelector("#conclusao_larissa_area").style.top="0px";
		document.querySelector("#conclusao_larissa_area").style.left="0px";
	}, 1000);
	//
	sessionStorage.setItem('reiniciar_oed', 'instrucoes_nao');
	//	
  }else{
	  movimento_entrada_devolutiva();
  }
});

$("#jogo_barbara_btn_lista").click(function() {
	TrocaInstrucao("Clique em Fechar para guardar a lista de objetos e volte ao jogo.")
	document.querySelector("#grupo_painel_barbara").style.display="inherit";
	//
	document.querySelector("#jogo_barbara_painel_lista").className="animacao_atraso_0 bounceInDown";
	setTimeout(function(){ document.querySelector("#jogo_barbara_painel_btn_fechar").style.display="inherit"; }, 600);
	document.querySelector("#jogo_barbara_painel_btn_fechar").className="animacao_atraso_0 slideInDown";
	document.querySelector("#jogo_barbara_sombra_painel").className="animacao_atraso_0 fadeIn";	
});
$("#jogo_barbara_painel_btn_fechar").click(function() {
	TrocaInstrucao("Arraste os objetos para as caixas respeitando a fração indicada em cada destino.<br />Após arrastar todos os objetos para a caixa adequada, confirme a escolha clicando em Confirmar.")
	document.querySelector("#jogo_barbara_painel_lista").className="animacao_atraso_0 bounceOutUp";
	document.querySelector("#jogo_barbara_painel_btn_fechar").className="animacao_atraso_0 slideOutUp";
	setTimeout(function(){ document.querySelector("#jogo_barbara_painel_btn_fechar").style.display="none"; }, 500);	
	document.querySelector("#jogo_barbara_sombra_painel").className="animacao_atraso_0 fadeOut";	
	//
	setTimeout(function(){document.querySelector("#grupo_painel_barbara").style.display="none"; }, 1000);
	
});

/*Funções para arrastar objetos: Jogo Barbará */
	/* Pacotes */
	//
	$( "#jogo_barbara_objeto_1" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_1").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_1";
			document.querySelector("#jogo_barbara_objeto_1").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_1").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_1" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_1" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_1").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[0]==0){
				document.querySelector("#jogo_barbara_objeto_1").style.top="49px";
				document.querySelector("#jogo_barbara_objeto_1").style.left="191px";	
			}
		}, 5);	
	});
	$( "#jogo_barbara_objeto_1" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_1").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[0]==0){
				document.querySelector("#jogo_barbara_objeto_1").style.top="49px";
				document.querySelector("#jogo_barbara_objeto_1").style.left="191px";	
			}
		}, 5);	
	});	
	//
	$( "#jogo_barbara_objeto_2" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_2").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_2";
			document.querySelector("#jogo_barbara_objeto_2").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_2").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_2" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_2" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_2").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[1]==0){
				document.querySelector("#jogo_barbara_objeto_2").style.top="372px";
				document.querySelector("#jogo_barbara_objeto_2").style.left="225px";
			}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_2" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_2").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[1]==0){
				document.querySelector("#jogo_barbara_objeto_2").style.top="372px";
				document.querySelector("#jogo_barbara_objeto_2").style.left="225px";
			}
		}, 5);		
	});	
	//
	$( "#jogo_barbara_objeto_3" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_3").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_3";
			document.querySelector("#jogo_barbara_objeto_3").style.zIndex="20";
			//
			document.querySelector("#jogo_barbara_objeto_3").style.transform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_3").style.WebkitTransform="rotate(0deg)";				
			document.querySelector("#jogo_barbara_objeto_3").style.MozTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_3").style.OTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_3").style.MsTransform="rotate(0deg)";			
			//			
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_3").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_3" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_3" ).mouseleave(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[2]==0){
				document.querySelector("#jogo_barbara_objeto_3").style.top="147px";
				document.querySelector("#jogo_barbara_objeto_3").style.left="443px";
			}
		}, 5);		
		document.querySelector("#jogo_barbara_objeto_3").style.zIndex="10";
		//
		document.querySelector("#jogo_barbara_objeto_3").style.transform="rotate(303deg)";			
		document.querySelector("#jogo_barbara_objeto_3").style.WebkitTransform="rotate(303deg)";				
		document.querySelector("#jogo_barbara_objeto_3").style.MozTransform="rotate(303deg)";			
		document.querySelector("#jogo_barbara_objeto_3").style.OTransform="rotate(303deg)";			
		document.querySelector("#jogo_barbara_objeto_3").style.MsTransform="rotate(303deg)";			
		//			
	});
	$( "#jogo_barbara_objeto_3" ).mouseup(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[2]==0){
				document.querySelector("#jogo_barbara_objeto_3").style.top="147px";
				document.querySelector("#jogo_barbara_objeto_3").style.left="443px";
			}
		}, 5);		
		document.querySelector("#jogo_barbara_objeto_3").style.zIndex="10";
		//
		document.querySelector("#jogo_barbara_objeto_3").style.transform="rotate(303deg)";			
		document.querySelector("#jogo_barbara_objeto_3").style.WebkitTransform="rotate(303deg)";				
		document.querySelector("#jogo_barbara_objeto_3").style.MozTransform="rotate(303deg)";			
		document.querySelector("#jogo_barbara_objeto_3").style.OTransform="rotate(303deg)";			
		document.querySelector("#jogo_barbara_objeto_3").style.MsTransform="rotate(303deg)";			
		//			
	});	
	//
	$( "#jogo_barbara_objeto_4" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_4").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_4";
			document.querySelector("#jogo_barbara_objeto_4").style.zIndex="20";
			document.querySelector("#jogo_barbara_objeto_4").style.height="104px";
			document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_1.png')";			
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_4").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_4" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_4" ).mouseup(function() {
		setTimeout(function(){ 
		if(voltas_jogo_barbara[3]==0){
			document.querySelector("#jogo_barbara_objeto_4").style.top="185px";
			document.querySelector("#jogo_barbara_objeto_4").style.left="589px";
			document.querySelector("#jogo_barbara_objeto_4").style.zIndex="10";
			document.querySelector("#jogo_barbara_objeto_4").style.height="57px";
			document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_4.png')";			
		}
		}, 100);			
	});
	$( "#jogo_barbara_objeto_4" ).mouseleave(function() {
		setTimeout(function(){ 
		if(voltas_jogo_barbara[3]==0){
			document.querySelector("#jogo_barbara_objeto_4").style.top="185px";
			document.querySelector("#jogo_barbara_objeto_4").style.left="589px";
			document.querySelector("#jogo_barbara_objeto_4").style.zIndex="10";
			document.querySelector("#jogo_barbara_objeto_4").style.height="57px";
			document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_4.png')";			
		}
		}, 100);			
	});	
	//
	$( "#jogo_barbara_objeto_5" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_5").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_5";
			document.querySelector("#jogo_barbara_objeto_5").style.zIndex="20";
			//
			document.querySelector("#jogo_barbara_objeto_5").style.transform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_5").style.WebkitTransform="rotate(0deg)";				
			document.querySelector("#jogo_barbara_objeto_5").style.MozTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_5").style.OTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_5").style.MsTransform="rotate(0deg)";			
			//
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_5").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_5" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_5" ).mouseleave(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[4]==0){
				document.querySelector("#jogo_barbara_objeto_5").style.top="270px";
				document.querySelector("#jogo_barbara_objeto_5").style.left="693px";
			}
		}, 5);			
		document.querySelector("#jogo_barbara_objeto_5").style.zIndex="10";
		//
		document.querySelector("#jogo_barbara_objeto_5").style.transform="rotate(325deg)";			
		document.querySelector("#jogo_barbara_objeto_5").style.WebkitTransform="rotate(325deg)";				
		document.querySelector("#jogo_barbara_objeto_5").style.MozTransform="rotate(325deg)";			
		document.querySelector("#jogo_barbara_objeto_5").style.OTransform="rotate(325deg)";			
		document.querySelector("#jogo_barbara_objeto_5").style.MsTransform="rotate(325deg)";			
		//		
	});
	$( "#jogo_barbara_objeto_5" ).mouseup(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[4]==0){
				document.querySelector("#jogo_barbara_objeto_5").style.top="270px";
				document.querySelector("#jogo_barbara_objeto_5").style.left="693px";
			}
		}, 5);			
		document.querySelector("#jogo_barbara_objeto_5").style.zIndex="10";
		//
		document.querySelector("#jogo_barbara_objeto_5").style.transform="rotate(325deg)";			
		document.querySelector("#jogo_barbara_objeto_5").style.WebkitTransform="rotate(325deg)";				
		document.querySelector("#jogo_barbara_objeto_5").style.MozTransform="rotate(325deg)";			
		document.querySelector("#jogo_barbara_objeto_5").style.OTransform="rotate(325deg)";			
		document.querySelector("#jogo_barbara_objeto_5").style.MsTransform="rotate(325deg)";			
		//		
	});	
	//
	$( "#jogo_barbara_objeto_6" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_6").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_6";
			document.querySelector("#jogo_barbara_objeto_6").style.zIndex="20";
			//
			document.querySelector("#jogo_barbara_objeto_6").style.transform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_6").style.WebkitTransform="rotate(0deg)";				
			document.querySelector("#jogo_barbara_objeto_6").style.MozTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_6").style.OTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_6").style.MsTransform="rotate(0deg)";			
			//				
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_6").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_6" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_6" ).mouseleave(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[5]==0){
				document.querySelector("#jogo_barbara_objeto_6").style.top="135px";
				document.querySelector("#jogo_barbara_objeto_6").style.left="882px";
			}
		}, 5);			
		document.querySelector("#jogo_barbara_objeto_6").style.zIndex="10";
		//
		document.querySelector("#jogo_barbara_objeto_6").style.transform="rotate(349deg)";			
		document.querySelector("#jogo_barbara_objeto_6").style.WebkitTransform="rotate(349deg)";				
		document.querySelector("#jogo_barbara_objeto_6").style.MozTransform="rotate(349deg)";			
		document.querySelector("#jogo_barbara_objeto_6").style.OTransform="rotate(349deg)";			
		document.querySelector("#jogo_barbara_objeto_6").style.MsTransform="rotate(349deg)";			
		//			
	});
	$( "#jogo_barbara_objeto_6" ).mouseup(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[5]==0){
				document.querySelector("#jogo_barbara_objeto_6").style.top="135px";
				document.querySelector("#jogo_barbara_objeto_6").style.left="882px";
			}
		}, 5);			
		document.querySelector("#jogo_barbara_objeto_6").style.zIndex="10";
		//
		document.querySelector("#jogo_barbara_objeto_6").style.transform="rotate(349deg)";			
		document.querySelector("#jogo_barbara_objeto_6").style.WebkitTransform="rotate(349deg)";				
		document.querySelector("#jogo_barbara_objeto_6").style.MozTransform="rotate(349deg)";			
		document.querySelector("#jogo_barbara_objeto_6").style.OTransform="rotate(349deg)";			
		document.querySelector("#jogo_barbara_objeto_6").style.MsTransform="rotate(349deg)";			
		//			
	});	
	//
	$( "#jogo_barbara_objeto_7" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_7").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_7";
			document.querySelector("#jogo_barbara_objeto_7").style.zIndex="20";
			document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7_drag.png')";	
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_7").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_7" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_7" ).mouseup(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[6]==0){			
				document.querySelector("#jogo_barbara_objeto_7").style.top="480px";
				document.querySelector("#jogo_barbara_objeto_7").style.left="911px";
				document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7.png')";
			}
		}, 100);			
	});
	$( "#jogo_barbara_objeto_7" ).mouseleave(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[6]==0){			
				document.querySelector("#jogo_barbara_objeto_7").style.top="480px";
				document.querySelector("#jogo_barbara_objeto_7").style.left="911px";
				document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7.png')";
			}
		}, 100);			
	});	
	//
	$( "#jogo_barbara_objeto_8" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_8").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_8";
			document.querySelector("#jogo_barbara_objeto_8").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_8").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_8" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_8" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_8").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[7]==0){
				document.querySelector("#jogo_barbara_objeto_8").style.top="204px";
				document.querySelector("#jogo_barbara_objeto_8").style.left="218px";	
			}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_8" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_8").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[7]==0){
				document.querySelector("#jogo_barbara_objeto_8").style.top="204px";
				document.querySelector("#jogo_barbara_objeto_8").style.left="218px";	
			}
		}, 5);		
	});	
	//
	$( "#jogo_barbara_objeto_9" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_9").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_9";
			document.querySelector("#jogo_barbara_objeto_9").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_9").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_9" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_9" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_9").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[8]==0){
			document.querySelector("#jogo_barbara_objeto_9").style.top="169px";
			document.querySelector("#jogo_barbara_objeto_9").style.left="390px";
			}			
		}, 5);		
	});
	$( "#jogo_barbara_objeto_9" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_9").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[8]==0){
			document.querySelector("#jogo_barbara_objeto_9").style.top="169px";
			document.querySelector("#jogo_barbara_objeto_9").style.left="390px";
			}			
		}, 5);		
	});	
	//
	$( "#jogo_barbara_objeto_10" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_10").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_10";
			document.querySelector("#jogo_barbara_objeto_10").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_10").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_10" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_10" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_10").style.zIndex="11";
		setTimeout(function(){
		if(voltas_jogo_barbara[9]==0){		
			document.querySelector("#jogo_barbara_objeto_10").style.top="247px";
			document.querySelector("#jogo_barbara_objeto_10").style.left="535px";
		}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_10" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_10").style.zIndex="11";
		setTimeout(function(){
		if(voltas_jogo_barbara[9]==0){		
			document.querySelector("#jogo_barbara_objeto_10").style.top="247px";
			document.querySelector("#jogo_barbara_objeto_10").style.left="535px";
		}
		}, 5);		
	});	
	//
	$( "#jogo_barbara_objeto_11" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_11").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_11";
			document.querySelector("#jogo_barbara_objeto_11").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_11").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_11" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_11" ).mouseleave(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[10]==0){
				document.querySelector("#jogo_barbara_objeto_11").style.top="247px";
				document.querySelector("#jogo_barbara_objeto_11").style.left="582px";
			}
		}, 5);			
		latas_soltas[2]="n";
		document.querySelector("#jogo_barbara_objeto_11").style.zIndex="11";
	});
	$( "#jogo_barbara_objeto_11" ).mouseup(function() {
		setTimeout(function(){
			if(voltas_jogo_barbara[10]==0){
				document.querySelector("#jogo_barbara_objeto_11").style.top="247px";
				document.querySelector("#jogo_barbara_objeto_11").style.left="582px";
			}
		}, 5);			
		latas_soltas[2]="n";
		document.querySelector("#jogo_barbara_objeto_11").style.zIndex="11";
	});	
	//
	$( "#jogo_barbara_objeto_12" ).mousedown(function() {
		if(latas_soltas[0]=="n"){
			document.querySelector("#jogo_barbara_objeto_12").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_12";
			document.querySelector("#jogo_barbara_objeto_12").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_12").className="nada"; }, 1000);
		}
	});
	$( "#jogo_barbara_objeto_12" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_12" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_12").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[11]==0){
			document.querySelector("#jogo_barbara_objeto_12").style.top="302px";
			document.querySelector("#jogo_barbara_objeto_12").style.left="510px";
			}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_12" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_12").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[11]==0){
			document.querySelector("#jogo_barbara_objeto_12").style.top="302px";
			document.querySelector("#jogo_barbara_objeto_12").style.left="510px";
			}
		}, 5);		
	});	
	$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });	
	//
	$( "#jogo_barbara_objeto_13" ).mousedown(function() {
		if(latas_soltas[0]=="n" && latas_soltas[1]=="n"){
			$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: false });
			document.querySelector("#jogo_barbara_objeto_13").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_13";
			document.querySelector("#jogo_barbara_objeto_13").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_13").className="nada"; }, 1000);
		}
	});
	$( "#jogo_barbara_objeto_13" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_13" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_13").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[12]==0){
			document.querySelector("#jogo_barbara_objeto_13").style.top="302px";
			document.querySelector("#jogo_barbara_objeto_13").style.left="557px";
			}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_13" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_13").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[12]==0){
			document.querySelector("#jogo_barbara_objeto_13").style.top="302px";
			document.querySelector("#jogo_barbara_objeto_13").style.left="557px";
			}
		}, 5);		
	});	
	$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });	
	//
	$( "#jogo_barbara_objeto_14" ).mousedown(function() {
		if(latas_soltas[1]=="n"){
			document.querySelector("#jogo_barbara_objeto_14").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_14";
			document.querySelector("#jogo_barbara_objeto_14").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_14").className="nada"; }, 1000);
		}
	});
	$( "#jogo_barbara_objeto_14" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_14" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_14").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[13]==0){
			document.querySelector("#jogo_barbara_objeto_14").style.top="302px";
			document.querySelector("#jogo_barbara_objeto_14").style.left="601px";
			}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_14" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_14").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[13]==0){
			document.querySelector("#jogo_barbara_objeto_14").style.top="302px";
			document.querySelector("#jogo_barbara_objeto_14").style.left="601px";
			}
		}, 5);		
	});	
	$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });	
	//
	$( "#jogo_barbara_objeto_15" ).mousedown(function() {
			document.querySelector("#jogo_barbara_objeto_15").className="animacao_atraso_0 tada";
			item_atual="jogo_barbara_objeto_15";
			document.querySelector("#jogo_barbara_objeto_15").style.zIndex="20";
			setTimeout(function(){ document.querySelector("#jogo_barbara_objeto_15").className="nada"; }, 1000);
	});
	$( "#jogo_barbara_objeto_15" ).draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$( "#jogo_barbara_objeto_15" ).mouseleave(function() {document.querySelector("#jogo_barbara_objeto_15").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[14]==0){
			document.querySelector("#jogo_barbara_objeto_15").style.top="176px";
			document.querySelector("#jogo_barbara_objeto_15").style.left="964px";	
			}
		}, 5);		
	});
	$( "#jogo_barbara_objeto_15" ).mouseup(function() {document.querySelector("#jogo_barbara_objeto_15").style.zIndex="10";
		setTimeout(function(){
			if(voltas_jogo_barbara[14]==0){
			document.querySelector("#jogo_barbara_objeto_15").style.top="176px";
			document.querySelector("#jogo_barbara_objeto_15").style.left="964px";	
			}
		}, 5);		
	});	
	//

	/*Funções para soltar objetos: Jogo Barbará */
	// Caixa creche
    $( "#jogo_barbara_frente_creche" ).droppable({
		accept: "#jogo_barbara_objeto_1, #jogo_barbara_objeto_2, #jogo_barbara_objeto_3, #jogo_barbara_objeto_4, #jogo_barbara_objeto_5, #jogo_barbara_objeto_6, #jogo_barbara_objeto_7, #jogo_barbara_objeto_8, #jogo_barbara_objeto_9, #jogo_barbara_objeto_10, #jogo_barbara_objeto_11, #jogo_barbara_objeto_12, #jogo_barbara_objeto_13, #jogo_barbara_objeto_14, #jogo_barbara_objeto_15",		
		drop: function( event, ui ) {
			console.log("Drop!")
			//
			document.querySelector("#jogo_barbara_frente_creche").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_barbara_caixa_creche").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_barbara_frente_creche").className="nada";
				document.querySelector("#jogo_barbara_caixa_creche").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_barbara_objeto_1"){
				$( "#jogo_barbara_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[0]=1;
				document.querySelector("#jogo_barbara_objeto_1").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_1").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_1").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_1").style.left="328px";
				}
				//
			}
			//
			if(item_atual=="jogo_barbara_objeto_2"){
				$( "#jogo_barbara_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[1]=1;
				document.querySelector("#jogo_barbara_objeto_2").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_2").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_2").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_2").style.left="328px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_3"){
				$( "#jogo_barbara_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[2]=1;
				document.querySelector("#jogo_barbara_objeto_3").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_3").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_3").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_3").style.left="328px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_4"){
				$( "#jogo_barbara_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[3]=1;
				elementos_cortados[3]="n";
				document.querySelector("#jogo_barbara_objeto_4").style.top="518px";
				document.querySelector("#jogo_barbara_objeto_4").style.height="104px";
				document.querySelector("#jogo_barbara_objeto_4").style.width="74px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_4").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_4").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_4").style.left="328px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_5"){
				$( "#jogo_barbara_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[4]=1;
				document.querySelector("#jogo_barbara_objeto_5").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_5").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_5").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_5").style.left="328px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_6"){
				$( "#jogo_barbara_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[5]=1;
				document.querySelector("#jogo_barbara_objeto_6").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_6").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_6").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_6").style.left="328px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_7"){
				$( "#jogo_barbara_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_7").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[6]=1;
				document.querySelector("#jogo_barbara_objeto_7").style.top="530px";
				//
				document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(90deg)";				
				document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(90deg)";					
				//
				elementos_cortados[4]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_7").position();
				if(pos_objeto.left<219){
					document.querySelector("#jogo_barbara_objeto_7").style.left="219px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_7").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_8"){
				$( "#jogo_barbara_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_8").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[7]=1;
				document.querySelector("#jogo_barbara_objeto_8").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_8").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_8").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_8").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_9"){
				$( "#jogo_barbara_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_9").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[8]=1;
				document.querySelector("#jogo_barbara_objeto_9").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_9").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_9").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_9").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_10"){
				$( "#jogo_barbara_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_10").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[9]=1;
				document.querySelector("#jogo_barbara_objeto_10").style.top="536px";
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: false });
				latas_soltas[0]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_10").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_10").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_10").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_11"){
				$( "#jogo_barbara_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_11").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[10]=1;
				document.querySelector("#jogo_barbara_objeto_11").style.top="536px";
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: false });
				latas_soltas[1]="n"				
				//
				var pos_objeto = $("#jogo_barbara_objeto_11").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_11").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_11").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_12"){
				$( "#jogo_barbara_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[11]=1;
				document.querySelector("#jogo_barbara_objeto_12").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_12").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_12").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_12").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_13"){
				$( "#jogo_barbara_objeto_13" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[12]=1;
				document.querySelector("#jogo_barbara_objeto_13").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_13").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_13").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_13").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_14"){
				$( "#jogo_barbara_objeto_14" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[13]=1;
				document.querySelector("#jogo_barbara_objeto_14").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_14").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_14").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_14").style.left="328px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_15"){
				$( "#jogo_barbara_objeto_15" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_15").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[0]++;
				voltas_jogo_barbara[14]=1;
				document.querySelector("#jogo_barbara_objeto_15").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_15").position();
				if(pos_objeto.left<228){
					document.querySelector("#jogo_barbara_objeto_15").style.left="228px";
				}
				if(pos_objeto.left>328){
					document.querySelector("#jogo_barbara_objeto_15").style.left="328px";
				}
				//				
			}
			//
			
		}
	});
	// Caixa orfanato
    $( "#jogo_barbara_frente_orfanato" ).droppable({
		accept: "#jogo_barbara_objeto_1, #jogo_barbara_objeto_2, #jogo_barbara_objeto_3, #jogo_barbara_objeto_4, #jogo_barbara_objeto_5, #jogo_barbara_objeto_6, #jogo_barbara_objeto_7, #jogo_barbara_objeto_8, #jogo_barbara_objeto_9, #jogo_barbara_objeto_10, #jogo_barbara_objeto_11, #jogo_barbara_objeto_12, #jogo_barbara_objeto_13, #jogo_barbara_objeto_14, #jogo_barbara_objeto_15",		
		drop: function( event, ui ) {
			console.log("Drop!")
			//
			document.querySelector("#jogo_barbara_frente_orfanato").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_barbara_caixa_orfanato").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_barbara_frente_orfanato").className="nada";
				document.querySelector("#jogo_barbara_caixa_orfanato").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_barbara_objeto_1"){
				$( "#jogo_barbara_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[0]=1;  document.querySelector("#jogo_barbara_objeto_1").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_1").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_1").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_1").style.left="504px";
				}
				//
			}
			//
			if(item_atual=="jogo_barbara_objeto_2"){
				$( "#jogo_barbara_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[1]=1;  document.querySelector("#jogo_barbara_objeto_2").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_2").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_2").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_2").style.left="504px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_3"){
				$( "#jogo_barbara_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[2]=1; document.querySelector("#jogo_barbara_objeto_3").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_3").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_3").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_3").style.left="504px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_4"){
				$( "#jogo_barbara_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				elementos_cortados[3]="n";
				voltas_jogo_barbara[3]=1; document.querySelector("#jogo_barbara_objeto_4").style.top="518px";
				document.querySelector("#jogo_barbara_objeto_4").style.height="104px";	
				document.querySelector("#jogo_barbara_objeto_4").style.width="74px";				
				//
				var pos_objeto = $("#jogo_barbara_objeto_4").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_4").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_4").style.left="504px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_5"){
				$( "#jogo_barbara_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[4]=1; document.querySelector("#jogo_barbara_objeto_5").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_5").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_5").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_5").style.left="504px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_6"){
				$( "#jogo_barbara_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[5]=1; document.querySelector("#jogo_barbara_objeto_6").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_6").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_6").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_6").style.left="504px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_7"){
				$( "#jogo_barbara_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_7").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[6]=1; document.querySelector("#jogo_barbara_objeto_7").style.top="530px";
				//
				document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(90deg)";				
				document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(90deg)";					
				//
				elementos_cortados[4]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_7").position();
				if(pos_objeto.left<395){
					document.querySelector("#jogo_barbara_objeto_7").style.left="395px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_7").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_8"){
				$( "#jogo_barbara_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_8").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[7]=1; document.querySelector("#jogo_barbara_objeto_8").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_8").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_8").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_8").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_9"){
				$( "#jogo_barbara_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_9").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[8]=1; document.querySelector("#jogo_barbara_objeto_9").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_9").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_9").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_9").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_10"){
				$( "#jogo_barbara_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_10").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[9]=1; document.querySelector("#jogo_barbara_objeto_10").style.top="536px";
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: false });
				latas_soltas[0]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_10").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_10").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_10").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_11"){
				$( "#jogo_barbara_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_11").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[10]=1; document.querySelector("#jogo_barbara_objeto_11").style.top="536px";
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: false });
				latas_soltas[1]="n"				
				//
				var pos_objeto = $("#jogo_barbara_objeto_11").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_11").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_11").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_12"){
				$( "#jogo_barbara_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[11]=1; document.querySelector("#jogo_barbara_objeto_12").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_12").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_12").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_12").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_13"){
				$( "#jogo_barbara_objeto_13" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[12]=1; document.querySelector("#jogo_barbara_objeto_13").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_13").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_13").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_13").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_14"){
				$( "#jogo_barbara_objeto_14" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[13]=1; document.querySelector("#jogo_barbara_objeto_14").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_14").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_14").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_14").style.left="504px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_15"){
				$( "#jogo_barbara_objeto_15" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_15").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[1]++;
				voltas_jogo_barbara[14]=1; document.querySelector("#jogo_barbara_objeto_15").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_15").position();
				if(pos_objeto.left<404){
					document.querySelector("#jogo_barbara_objeto_15").style.left="404px";
				}
				if(pos_objeto.left>504){
					document.querySelector("#jogo_barbara_objeto_15").style.left="504px";
				}
				//				
			}
			//
			
		}
	});
	// Caixa asilo
    $( "#jogo_barbara_frente_asilo" ).droppable({
		accept: "#jogo_barbara_objeto_1, #jogo_barbara_objeto_2, #jogo_barbara_objeto_3, #jogo_barbara_objeto_4, #jogo_barbara_objeto_5, #jogo_barbara_objeto_6, #jogo_barbara_objeto_7, #jogo_barbara_objeto_8, #jogo_barbara_objeto_9, #jogo_barbara_objeto_10, #jogo_barbara_objeto_11, #jogo_barbara_objeto_12, #jogo_barbara_objeto_13, #jogo_barbara_objeto_14, #jogo_barbara_objeto_15",		
		drop: function( event, ui ) {
			console.log("Drop!")
			//
			document.querySelector("#jogo_barbara_frente_asilo").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_barbara_caixa_asilo").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_barbara_frente_asilo").className="nada";
				document.querySelector("#jogo_barbara_caixa_asilo").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_barbara_objeto_1"){
				$( "#jogo_barbara_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[0]=1;  document.querySelector("#jogo_barbara_objeto_1").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_1").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_1").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_1").style.left="680px";
				}
				//
			}
			//
			if(item_atual=="jogo_barbara_objeto_2"){
				$( "#jogo_barbara_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[1]=1;  document.querySelector("#jogo_barbara_objeto_2").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_2").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_2").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_2").style.left="680px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_3"){
				$( "#jogo_barbara_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[2]=1; document.querySelector("#jogo_barbara_objeto_3").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_3").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_3").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_3").style.left="680px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_4"){
				$( "#jogo_barbara_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				elementos_cortados[3]="n";
				voltas_jogo_barbara[3]=1; document.querySelector("#jogo_barbara_objeto_4").style.top="518px";
				document.querySelector("#jogo_barbara_objeto_4").style.height="104px";
				document.querySelector("#jogo_barbara_objeto_4").style.width="74px";				
				//
				var pos_objeto = $("#jogo_barbara_objeto_4").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_4").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_4").style.left="680px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_5"){
				$( "#jogo_barbara_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[4]=1; document.querySelector("#jogo_barbara_objeto_5").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_5").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_5").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_5").style.left="680px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_6"){
				$( "#jogo_barbara_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[5]=1; document.querySelector("#jogo_barbara_objeto_6").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_6").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_6").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_6").style.left="680px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_7"){
				$( "#jogo_barbara_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_7").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[6]=1; document.querySelector("#jogo_barbara_objeto_7").style.top="530px";
				//
				document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(90deg)";				
				document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(90deg)";					
				//
				elementos_cortados[4]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_7").position();
				if(pos_objeto.left<571){
					document.querySelector("#jogo_barbara_objeto_7").style.left="571px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_7").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_8"){
				$( "#jogo_barbara_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_8").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[7]=1; document.querySelector("#jogo_barbara_objeto_8").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_8").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_8").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_8").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_9"){
				$( "#jogo_barbara_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_9").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[8]=1; document.querySelector("#jogo_barbara_objeto_9").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_9").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_9").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_9").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_10"){
				$( "#jogo_barbara_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_10").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[9]=1; document.querySelector("#jogo_barbara_objeto_10").style.top="536px";
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: false });
				latas_soltas[0]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_10").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_10").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_10").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_11"){
				$( "#jogo_barbara_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_11").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[10]=1; document.querySelector("#jogo_barbara_objeto_11").style.top="536px";
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: false });
				latas_soltas[1]="n"				
				//
				var pos_objeto = $("#jogo_barbara_objeto_11").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_11").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_11").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_12"){
				$( "#jogo_barbara_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[11]=1; document.querySelector("#jogo_barbara_objeto_12").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_12").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_12").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_12").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_13"){
				$( "#jogo_barbara_objeto_13" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[12]=1; document.querySelector("#jogo_barbara_objeto_13").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_13").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_13").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_13").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_14"){
				$( "#jogo_barbara_objeto_14" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[13]=1; document.querySelector("#jogo_barbara_objeto_14").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_14").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_14").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_14").style.left="680px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_15"){
				$( "#jogo_barbara_objeto_15" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_15").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[2]++;
				voltas_jogo_barbara[14]=1; document.querySelector("#jogo_barbara_objeto_15").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_15").position();
				if(pos_objeto.left<580){
					document.querySelector("#jogo_barbara_objeto_15").style.left="580px";
				}
				if(pos_objeto.left>680){
					document.querySelector("#jogo_barbara_objeto_15").style.left="680px";
				}
				//				
			}
			//
			
		}
	});
	// Caixa cidade
    $( "#jogo_barbara_frente_cidade" ).droppable({
		accept: "#jogo_barbara_objeto_1, #jogo_barbara_objeto_2, #jogo_barbara_objeto_3, #jogo_barbara_objeto_4, #jogo_barbara_objeto_5, #jogo_barbara_objeto_6, #jogo_barbara_objeto_7, #jogo_barbara_objeto_8, #jogo_barbara_objeto_9, #jogo_barbara_objeto_10, #jogo_barbara_objeto_11, #jogo_barbara_objeto_12, #jogo_barbara_objeto_13, #jogo_barbara_objeto_14, #jogo_barbara_objeto_15",		
		drop: function( event, ui ) {
			console.log("Drop!")
			//
			document.querySelector("#jogo_barbara_frente_cidade").className="animacao_atraso_0 bounce";
			document.querySelector("#jogo_barbara_caixa_cidade").className="animacao_atraso_0 bounce";
			setTimeout(function(){
				document.querySelector("#jogo_barbara_frente_cidade").className="nada";
				document.querySelector("#jogo_barbara_caixa_cidade").className="nada";
			}, 1000);
			//
			if(item_atual=="jogo_barbara_objeto_1"){
				$( "#jogo_barbara_objeto_1" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_1").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[0]=1;  document.querySelector("#jogo_barbara_objeto_1").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_1").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_1").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_1").style.left="856px";
				}
				//
			}
			//
			if(item_atual=="jogo_barbara_objeto_2"){
				$( "#jogo_barbara_objeto_2" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_2").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[1]=1;  document.querySelector("#jogo_barbara_objeto_2").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_2").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_2").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_2").style.left="856px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_3"){
				$( "#jogo_barbara_objeto_3" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_3").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[2]=1; document.querySelector("#jogo_barbara_objeto_3").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_3").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_3").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_3").style.left="856px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_4"){
				$( "#jogo_barbara_objeto_4" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_4").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				elementos_cortados[3]="n";
				voltas_jogo_barbara[3]=1; document.querySelector("#jogo_barbara_objeto_4").style.top="518px";
				document.querySelector("#jogo_barbara_objeto_4").style.height="104px";
				document.querySelector("#jogo_barbara_objeto_4").style.width="74px";					
				//
				var pos_objeto = $("#jogo_barbara_objeto_4").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_4").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_4").style.left="856px";
				}
				//			
			}
			//
			if(item_atual=="jogo_barbara_objeto_5"){
				$( "#jogo_barbara_objeto_5" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_5").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[4]=1; document.querySelector("#jogo_barbara_objeto_5").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_5").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_5").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_5").style.left="856px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_6"){
				$( "#jogo_barbara_objeto_6" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_6").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[5]=1; document.querySelector("#jogo_barbara_objeto_6").style.top="518px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_6").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_6").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_6").style.left="856px";
				}
				//				
			}
			//
			if(item_atual=="jogo_barbara_objeto_7"){
				$( "#jogo_barbara_objeto_7" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_7").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[6]=1; document.querySelector("#jogo_barbara_objeto_7").style.top="530px";
				//
				document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(90deg)";				
				document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(90deg)";			
				document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(90deg)";					
				//
				elementos_cortados[4]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_7").position();
				if(pos_objeto.left<747){
					document.querySelector("#jogo_barbara_objeto_7").style.left="747px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_7").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_8"){
				$( "#jogo_barbara_objeto_8" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_8").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[7]=1; document.querySelector("#jogo_barbara_objeto_8").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_8").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_8").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_8").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_9"){
				$( "#jogo_barbara_objeto_9" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_9").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[8]=1; document.querySelector("#jogo_barbara_objeto_9").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_9").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_9").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_9").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_10"){
				$( "#jogo_barbara_objeto_10" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_10").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[9]=1; document.querySelector("#jogo_barbara_objeto_10").style.top="536px";
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: false });
				latas_soltas[0]="n";
				//
				var pos_objeto = $("#jogo_barbara_objeto_10").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_10").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_10").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_11"){
				$( "#jogo_barbara_objeto_11" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_11").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[10]=1; document.querySelector("#jogo_barbara_objeto_11").style.top="536px";
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: false });
				latas_soltas[1]="n"				
				//
				var pos_objeto = $("#jogo_barbara_objeto_11").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_11").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_11").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_12"){
				$( "#jogo_barbara_objeto_12" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[11]=1; document.querySelector("#jogo_barbara_objeto_12").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_12").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_12").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_12").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_13"){
				$( "#jogo_barbara_objeto_13" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[12]=1; document.querySelector("#jogo_barbara_objeto_13").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_13").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_13").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_13").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_14"){
				$( "#jogo_barbara_objeto_14" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[13]=1; document.querySelector("#jogo_barbara_objeto_14").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_14").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_14").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_14").style.left="856px";
				}
				//				
			}
			if(item_atual=="jogo_barbara_objeto_15"){
				$( "#jogo_barbara_objeto_15" ).draggable({containment: "parent", revert: false });
				$("#jogo_barbara_objeto_15").draggable({containment: "parent", disabled: true });
				respostas_jogo_barbara[3]++;
				voltas_jogo_barbara[14]=1; document.querySelector("#jogo_barbara_objeto_15").style.top="536px";
				//
				var pos_objeto = $("#jogo_barbara_objeto_15").position();
				if(pos_objeto.left<756){
					document.querySelector("#jogo_barbara_objeto_15").style.left="756px";
				}
				if(pos_objeto.left>856){
					document.querySelector("#jogo_barbara_objeto_15").style.left="856px";
				}
				//				
			}
			//
			
		}
	});
/* Abaixo estão as funções para controle do tutorial */
function parar_audios_tutorial(){
	audio_tutorial_1.stop();
	audio_tutorial_2.stop();
	audio_tutorial_3.stop();
}

$( "#tutorial_btn_direita" ).click(function() {
	parte_tutorial++;
	if(parte_tutorial>=3){
		parte_tutorial==3;
	}
	controle_tutorial();
});

$( "#tutorial_btn_esquerda" ).click(function() {
	parte_tutorial--;
	if(parte_tutorial<=1){
		parte_tutorial==1;
	}
	controle_tutorial();
});
$( "#tutorial_btn_comecar" ).click(function() {
	TrocaInstrucao("Arraste os objetos para as caixas respeitando a fração indicada em cada destino.<br />Após arrastar todos os objetos para a caixa adequada, confirme a escolha clicando em Confirmar.");
	document.querySelector("#jogo_larissa_area").style.display="inherit";
	//document.querySelector("#tutorial_area").className="animacao_atraso_0 fadeOut";
	document.querySelector("#jogo_larissa_area").className="animacao_atraso_0 fadeIn";
	pos_objetos_larissa();
	parar_audios_tutorial();
	audio_trilha_sonora.play();
	//
	document.querySelector("#jogo_larissa_objeto_1").style.top="214px";
	document.querySelector("#jogo_larissa_objeto_1").style.left="833px";	
	//
	document.querySelector("#jogo_larissa_objeto_2").style.top="70px";
	document.querySelector("#jogo_larissa_objeto_2").style.left="666px";	
	//
	document.querySelector("#jogo_larissa_objeto_3").style.top="145px";
	document.querySelector("#jogo_larissa_objeto_3").style.left="165px";	
	//
	document.querySelector("#jogo_larissa_objeto_4").style.top="288px";
	document.querySelector("#jogo_larissa_objeto_4").style.left="390px";	
	//
	document.querySelector("#jogo_larissa_objeto_5").style.top="181px";
	document.querySelector("#jogo_larissa_objeto_5").style.left="417px";	
	//
	document.querySelector("#jogo_larissa_objeto_6").style.top="260px";
	document.querySelector("#jogo_larissa_objeto_6").style.left="140px";	
	//
	document.querySelector("#jogo_larissa_objeto_7").style.top="267px";
	document.querySelector("#jogo_larissa_objeto_7").style.left="541px";
	//
	document.querySelector("#jogo_larissa_objeto_8").style.top="438px";
	document.querySelector("#jogo_larissa_objeto_8").style.left="600px";
	//
	document.querySelector("#jogo_larissa_objeto_9").style.top="393px";
	document.querySelector("#jogo_larissa_objeto_9").style.left="903px";	
	//
	setTimeout(function(){ 
		document.querySelector("#tutorial_area").style.display="none";
		document.querySelector("#tutorial_area").style.zIndex="1";
		document.querySelector("#desafio_area").style.display="none";
		document.querySelector("#jogo_larissa_area").className="nada";
	}, 1000);
});


function controle_tutorial(){
	parar_audios_tutorial();
	console.log(parte_tutorial);
	if(parte_tutorial==1){
		audio_tutorial_1.play("audio_tutorial_1_corte1");
		//
		document.querySelector("#tutorial_painel_passo_1").style.display="inherit";
		document.querySelector("#tutorial_imagem_fase_2").style.display="inherit";
		//document.querySelector("#tutorial_btn_esquerda").style.display="none";
		//
		document.querySelector("#tutorial_painel_passo_1").className="animacao_atraso_0 bounceInUp";
		document.querySelector("#tutorial_imagem_fase_2").className="animacao_atraso_0 fadeIn";
		//
		document.querySelector("#tutorial_btn_esquerda").className="animacao_atraso_0 slideOutLeft";
		//
		document.querySelector("#tutorial_painel_passo_2").className="animacao_atraso_0 bounceOutDown";
		document.querySelector("#tutorial_imagem_fase_3").className="animacao_atraso_0 fadeOut";
		document.querySelector("#tutorial_btn_direita").className="animacao_atraso_0 slideInRight";			
	}
	if(parte_tutorial==2){
		audio_tutorial_2.play("audio_tutorial_2_corte1");
		//
		document.querySelector("#tutorial_painel_passo_2").style.display="inherit";
		document.querySelector("#tutorial_imagem_fase_3").style.display="inherit";
		document.querySelector("#tutorial_btn_esquerda").style.display="inherit";
		//
		document.querySelector("#tutorial_painel_passo_2").className="animacao_atraso_0 bounceInUp";
		document.querySelector("#tutorial_imagem_fase_3").className="animacao_atraso_0 fadeIn";
		//
		document.querySelector("#tutorial_painel_passo_1").className="animacao_atraso_0 bounceOutDown";
		document.querySelector("#tutorial_imagem_fase_2").className="animacao_atraso_0 fadeOut";
		//		
		document.querySelector("#tutorial_painel_passo_3").className="animacao_atraso_0 bounceOutDown";
		document.querySelector("#tutorial_imagem_fase_4").className="animacao_atraso_0 fadeOut";
		//
		document.querySelector("#tutorial_btn_comecar").className="animacao_atraso_0 slideOutRight";
		document.querySelector("#tutorial_btn_esquerda").className="animacao_atraso_0 slideInLeft";		
		document.querySelector("#tutorial_btn_direita").className="animacao_atraso_0 slideInRight";		
	}
	if(parte_tutorial==3){
		audio_tutorial_3.play("audio_tutorial_3_corte1");
		//		
		document.querySelector("#tutorial_painel_passo_3").style.display="inherit";
		document.querySelector("#tutorial_imagem_fase_4").style.display="inherit";
		document.querySelector("#tutorial_btn_comecar").style.display="inherit";
		//
		document.querySelector("#tutorial_painel_passo_3").className="animacao_atraso_0 bounceInUp";
		document.querySelector("#tutorial_imagem_fase_4").className="animacao_atraso_0 fadeIn";
		//
		document.querySelector("#tutorial_painel_passo_2").className="animacao_atraso_0 bounceOutDown";
		document.querySelector("#tutorial_imagem_fase_3").className="animacao_atraso_0 adeOut";
		//		
		document.querySelector("#tutorial_btn_comecar").className="animacao_atraso_0 slideInRight";
		document.querySelector("#tutorial_btn_direita").className="animacao_atraso_0 slideOutRight";
		
	}		

}
	
function ir_tela_encerramento(){
	document.querySelector("#encerramento_area").style.display="inherit";
	//
	document.querySelector("#encerramento_fundo").className="animacao_atraso_0 fadeIn";
	//document.querySelector("#encerramento_personagem_adulto_1").className="animacao_atraso_0 fadeIn";
	//
	audio_trilha_sonora.stop();
	document.querySelector("#audio_encerramento_adulto").currentTime=2;
	document.querySelector("#audio_encerramento_adulto").play();
	//
	setTimeout(function(){
		//document.querySelector("#encerramento_area").style.top="0px";
		//document.querySelector("#encerramento_area").style.left="0px";
		document.querySelector("#encerramento_fundo").className="nada";
		document.querySelector("#encerramento_personagem_adulto_1").className="nada";
	}, 1000);	
	//
	sincronizar_audio_encerramento_cnd = setInterval(function(){
		//
		if(Math.round(document.querySelector("#audio_encerramento_adulto").currentTime)>=4){
			$("#encerramento_personagem_larissa, #encerramento_personagem_pedro, #encerramento_personagem_barbara, #encerramento_balao_pedro, #encerramento_balao_larissa, #encerramento_balao_barbara").css( "display", "inherit" );
			//
			document.querySelector("#encerramento_personagem_larissa").className="animacao_atraso_0t4 bounce";
			document.querySelector("#encerramento_personagem_pedro").className="animacao_atraso_0t4 bounce";
			document.querySelector("#encerramento_personagem_barbara").className="animacao_atraso_0t4 bounce";
			document.querySelector("#encerramento_balao_pedro").className="animacao_atraso_0t4 bounce";
			document.querySelector("#encerramento_balao_larissa").className="animacao_atraso_0t4 bounce";
			document.querySelector("#encerramento_balao_barbara").className="animacao_atraso_0t4 bounce";
		}
		//
		if(Math.round(document.querySelector("#audio_encerramento_adulto").currentTime)>=8){
			$("#encerramento_personagem_larissa, #encerramento_personagem_pedro, #encerramento_personagem_barbara, #encerramento_balao_pedro, #encerramento_balao_larissa, #encerramento_balao_barbara").css( "display", "inherit" );
			//
			document.querySelector("#encerramento_balao_pedro").className="animacao_atraso_0t500ms fadeOutDown";
			document.querySelector("#encerramento_balao_larissa").className="animacao_atraso_0t500ms fadeOutDown";
			document.querySelector("#encerramento_balao_barbara").className="animacao_atraso_0t500ms fadeOutDown";
			//
			document.querySelector("#encerramento_personagem_adulto_1").style.display="none";
			document.querySelector("#encerramento_personagem_adulto_2").style.display="inherit";
			document.querySelector("#encerramento_balao_adulto").style.display="inherit";
			//
			document.querySelector("#encerramento_balao_adulto").className="animacao_atraso_0 fadeInUp";
			document.querySelector("#encerramento_personagem_adulto_2_boca").className="animacao_fala_encerramento";
			
			
		}		
				
	}, 1000);	
}
	
function fim_oed_reiniciar(){
	setTimeout(function(){ 
		sessionStorage.setItem('reiniciar_oed', 'sim');
	}, 1000);	
}
	
	
function pos_objetos_larissa(){
	pos_objetos_larissa_cnd = setInterval(function(){
	//
	//console.log("123");
	var pos_objeto_1a = $("#jogo_larissa_objeto_4").position();
	var pos_objeto_1b = $("#jogo_larissa_objeto_7").position();
	var pos_objeto_1c = $("#jogo_larissa_objeto_8").position();
	//console.log(pos_objeto_1a.left+" : "+pos_objeto_1a.top);
	//
		if(pos_objeto_1a.left==390 && pos_objeto_1a.top==288){
			document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
			document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
		}else{
			document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4_drag.png')";
			document.querySelector("#jogo_larissa_objeto_4").style.height="80px";
		}
		//
		if(pos_objeto_1b.left==541 && pos_objeto_1b.top==267){
			document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/jogo_larissa_objeto_7.png')";
			document.querySelector("#jogo_larissa_objeto_7").style.height="44px";
			document.querySelector("#jogo_larissa_objeto_7").style.width="69px";
		}else{
			document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";
			document.querySelector("#jogo_larissa_objeto_7").style.height="65px";
			document.querySelector("#jogo_larissa_objeto_7").style.width="114px";
		}
		//		
		if(pos_objeto_1c.left==600 && pos_objeto_1c.top==438){
			document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/jogo_larissa_objeto_8.png')";
			document.querySelector("#jogo_larissa_objeto_8").style.width="89px";
			document.querySelector("#jogo_larissa_objeto_8").style.height="33px";
		}else{
			document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/desafio_larissa_item_2.png')";	
			document.querySelector("#jogo_larissa_objeto_8").style.width="114px";
			document.querySelector("#jogo_larissa_objeto_8").style.height="65px";
		}
		//			
		
	//	
	}, 20);
}	

function pos_objetos_barbara(){
	pos_objetos_barbara_cnd = setInterval(function(){
	//
	var pos_objeto_3a = $("#jogo_barbara_objeto_4").position();
	var pos_objeto_3b = $("#jogo_barbara_objeto_7").position();
	//console.log(pos_objeto_1a.left+" : "+pos_objeto_1a.top);
	//
		if(pos_objeto_3a.left==589 && pos_objeto_3a.top==185){
			document.querySelector("#jogo_barbara_objeto_4").style.width="65px";
			document.querySelector("#jogo_barbara_objeto_4").style.height="57px";	
			document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_4.png')";
		}else{
			document.querySelector("#jogo_barbara_objeto_4").style.width="65px";
			document.querySelector("#jogo_barbara_objeto_4").style.height="104px";
			document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_1.png')";
		}
		//
		if(pos_objeto_3b.left==911 && pos_objeto_3b.top==480){
			document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7.png')";
			document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(0deg)";				
			document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(0deg)";			
			document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(0deg)";	
		}else{
			document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7_drag.png')";	
		}		
		
	//	
	}, 20);
}


/* Funções para os botões de Refazer */
$("#jogo_larissa_btn_refazer, #jogo_pedro_btn_refazer, #jogo_barbara_btn_refazer").click(function() {
/*  Restaurar posições e movimentos para os objetos */
	respostas_jogo_larissa=[0,0];
	respostas_jogo_pedro=[0,0,0];
	respostas_jogo_barbara=[0,0,0,0];
	voltas_jogo_larissa=[0,0,0,0,0,0,0,0,0];
	voltas_jogo_pedro=[0,0,0,0,0,0,0,0,0,0,0,0];
	voltas_jogo_barbara=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	
	latas_soltas=["s","s"];
	elementos_cortados=["s","s","s","s","s","s"];
	// Larissa
	document.querySelector("#jogo_larissa_objeto_1").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_2").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_3").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_4").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_5").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_6").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_7").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_8").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_larissa_objeto_9").className="animacao_atraso_0t500ms fadeOut";		
	// Pedro
	document.querySelector("#jogo_pedro_objeto_1").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_2").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_3").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_4").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_5").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_6").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_7").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_8").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_9").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_10").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_11").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_pedro_objeto_12").className="animacao_atraso_0t500ms fadeOut";
	// Barbará
	document.querySelector("#jogo_barbara_objeto_1").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_2").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_3").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_4").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_5").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_6").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_7").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_8").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_9").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_10").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_11").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_12").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_13").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_14").className="animacao_atraso_0t500ms fadeOut";
	document.querySelector("#jogo_barbara_objeto_15").className="animacao_atraso_0t500ms fadeOut";
	//
	setTimeout(function(){
	// Larissa
	document.querySelector("#jogo_larissa_objeto_1").style.top="214px";
	document.querySelector("#jogo_larissa_objeto_1").style.left="833px";	
	//
	document.querySelector("#jogo_larissa_objeto_2").style.top="70px";
	document.querySelector("#jogo_larissa_objeto_2").style.left="666px";	
	//
	document.querySelector("#jogo_larissa_objeto_3").style.top="145px";
	document.querySelector("#jogo_larissa_objeto_3").style.left="165px";	
	//
	document.querySelector("#jogo_larissa_objeto_4").style.top="288px";
	document.querySelector("#jogo_larissa_objeto_4").style.left="390px";	
	document.querySelector("#jogo_larissa_objeto_4").style.zIndex="10";
	document.querySelector("#jogo_larissa_objeto_4").style.width="84px";
	document.querySelector("#jogo_larissa_objeto_4").style.height="56px";
	document.querySelector("#jogo_larissa_objeto_4").style.backgroundImage= "url('./img/jogo_larissa_objeto_4.png')";
	//
	document.querySelector("#jogo_larissa_objeto_5").style.top="181px";
	document.querySelector("#jogo_larissa_objeto_5").style.left="417px";	
	//
	document.querySelector("#jogo_larissa_objeto_6").style.top="260px";
	document.querySelector("#jogo_larissa_objeto_6").style.left="140px";	
	//
	document.querySelector("#jogo_larissa_objeto_7").style.top="267px";
	document.querySelector("#jogo_larissa_objeto_7").style.left="541px";
	document.querySelector("#jogo_larissa_objeto_7").style.width="69px";
	document.querySelector("#jogo_larissa_objeto_7").style.height="44px";
	document.querySelector("#jogo_larissa_objeto_7").style.backgroundImage= "url('./img/jogo_larissa_objeto_7.png')";	
	//
	document.querySelector("#jogo_larissa_objeto_8").style.top="438px";
	document.querySelector("#jogo_larissa_objeto_8").style.left="600px";
	document.querySelector("#jogo_larissa_objeto_8").style.width="89px";
	document.querySelector("#jogo_larissa_objeto_8").style.height="33px";
	document.querySelector("#jogo_larissa_objeto_8").style.backgroundImage= "url('./img/jogo_larissa_objeto_8.png')";
	//
	document.querySelector("#jogo_larissa_objeto_9").style.top="393px";
	document.querySelector("#jogo_larissa_objeto_9").style.left="903px";	
	// Pedro
	document.querySelector("#jogo_pedro_objeto_1").style.top="127px";
	document.querySelector("#jogo_pedro_objeto_1").style.left="507px";	
	document.querySelector("#jogo_pedro_objeto_1").style.height="159px";	
	document.querySelector("#jogo_pedro_objeto_1").style.backgroundImage= "url('./img/jogo_pedro_objeto_1.png')";
	document.querySelector("#jogo_pedro_objeto_1").style.zIndex="15";
	//
	document.querySelector("#jogo_pedro_objeto_2").style.top="127px";
	document.querySelector("#jogo_pedro_objeto_2").style.left="578px";
	document.querySelector("#jogo_pedro_objeto_2").style.height="159px";	
	document.querySelector("#jogo_pedro_objeto_2").style.backgroundImage= "url('./img/jogo_pedro_objeto_2.png')";	
	document.querySelector("#jogo_pedro_objeto_2").style.zIndex="14";
	//
	document.querySelector("#jogo_pedro_objeto_3").style.top="126px";
	document.querySelector("#jogo_pedro_objeto_3").style.left="639px";
	document.querySelector("#jogo_pedro_objeto_3").style.height="159px";
	document.querySelector("#jogo_pedro_objeto_3").style.backgroundImage= "url('./img/jogo_pedro_objeto_3.png')";		
	document.querySelector("#jogo_pedro_objeto_3").style.zIndex="13";
	//
	document.querySelector("#jogo_pedro_objeto_4").style.top="124px";
	document.querySelector("#jogo_pedro_objeto_4").style.left="704px";
	document.querySelector("#jogo_pedro_objeto_4").style.height="159px";
	document.querySelector("#jogo_pedro_objeto_4").style.backgroundImage= "url('./img/jogo_pedro_objeto_4.png')";		
	document.querySelector("#jogo_pedro_objeto_4").style.zIndex="12";
	//
	document.querySelector("#jogo_pedro_objeto_5").style.top="123px";
	document.querySelector("#jogo_pedro_objeto_5").style.left="763px";
	document.querySelector("#jogo_pedro_objeto_5").style.height="158px";
	document.querySelector("#jogo_pedro_objeto_5").style.backgroundImage= "url('./img/jogo_pedro_objeto_5.png')";		
	document.querySelector("#jogo_pedro_objeto_5").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_6").style.top="122px";
	document.querySelector("#jogo_pedro_objeto_6").style.left="831px";
	document.querySelector("#jogo_pedro_objeto_6").style.height="158px";
	document.querySelector("#jogo_pedro_objeto_6").style.backgroundImage= "url('./img/jogo_pedro_objeto_6.png')";		
	document.querySelector("#jogo_pedro_objeto_6").style.zIndex="10";
	//
	document.querySelector("#jogo_pedro_objeto_7").style.top="133px";
	document.querySelector("#jogo_pedro_objeto_7").style.left="307px";
	document.querySelector("#jogo_pedro_objeto_7").style.height="60px";	
	document.querySelector("#jogo_pedro_objeto_7").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_8").style.top="159px";
	document.querySelector("#jogo_pedro_objeto_8").style.left="309px";
	document.querySelector("#jogo_pedro_objeto_8").style.height="60px";		
	document.querySelector("#jogo_pedro_objeto_8").style.zIndex="10";
	//
	document.querySelector("#jogo_pedro_objeto_9").style.top="260px";
	document.querySelector("#jogo_pedro_objeto_9").style.left="317px";
	document.querySelector("#jogo_pedro_objeto_9").style.height="59px";			
	document.querySelector("#jogo_pedro_objeto_9").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_10").style.top="284px";
	document.querySelector("#jogo_pedro_objeto_10").style.left="308px";	
	document.querySelector("#jogo_pedro_objeto_10").style.height="60px";		
	document.querySelector("#jogo_pedro_objeto_10").style.zIndex="10";
	//
	document.querySelector("#jogo_pedro_objeto_11").style.top="382px";
	document.querySelector("#jogo_pedro_objeto_11").style.left="307px";	
	document.querySelector("#jogo_pedro_objeto_11").style.height="59px";			
	document.querySelector("#jogo_pedro_objeto_11").style.zIndex="11";
	//
	document.querySelector("#jogo_pedro_objeto_12").style.top="406px";
	document.querySelector("#jogo_pedro_objeto_12").style.left="311px";
	document.querySelector("#jogo_pedro_objeto_12").style.height="60px";			
	document.querySelector("#jogo_pedro_objeto_12").style.zIndex="10";
	// Barbará
	document.querySelector("#jogo_barbara_objeto_1").style.top="49px";
	document.querySelector("#jogo_barbara_objeto_1").style.left="191px";	
	//
	document.querySelector("#jogo_barbara_objeto_2").style.top="372px";
	document.querySelector("#jogo_barbara_objeto_2").style.left="225px";	
	//
	document.querySelector("#jogo_barbara_objeto_3").style.top="147px";
	document.querySelector("#jogo_barbara_objeto_3").style.left="443px";	
	//
	document.querySelector("#jogo_barbara_objeto_4").style.top="185px";
	document.querySelector("#jogo_barbara_objeto_4").style.left="589px";
	document.querySelector("#jogo_barbara_objeto_4").style.width="65px";
	document.querySelector("#jogo_barbara_objeto_4").style.height="57px";	
	document.querySelector("#jogo_barbara_objeto_4").style.backgroundImage= "url('./img/desafio_barbara_item_4.png')";
	//
	document.querySelector("#jogo_barbara_objeto_5").style.top="270px";
	document.querySelector("#jogo_barbara_objeto_5").style.left="693px";	
	//
	document.querySelector("#jogo_barbara_objeto_6").style.top="135px";
	document.querySelector("#jogo_barbara_objeto_6").style.left="882px";	
	//
	document.querySelector("#jogo_barbara_objeto_7").style.top="480px";
	document.querySelector("#jogo_barbara_objeto_7").style.left="911px";	
	document.querySelector("#jogo_barbara_objeto_7").style.backgroundImage= "url('./img/desafio_barbara_item_7.png')";
	document.querySelector("#jogo_barbara_objeto_7").style.transform="rotate(0deg)";			
	document.querySelector("#jogo_barbara_objeto_7").style.WebkitTransform="rotate(0deg)";				
	document.querySelector("#jogo_barbara_objeto_7").style.MozTransform="rotate(0deg)";			
	document.querySelector("#jogo_barbara_objeto_7").style.OTransform="rotate(0deg)";			
	document.querySelector("#jogo_barbara_objeto_7").style.MsTransform="rotate(0deg)";		
	//
	document.querySelector("#jogo_barbara_objeto_8").style.top="204px";
	document.querySelector("#jogo_barbara_objeto_8").style.left="218px";	
	//
	document.querySelector("#jogo_barbara_objeto_9").style.top="169px";
	document.querySelector("#jogo_barbara_objeto_9").style.left="390px";	
	//
	document.querySelector("#jogo_barbara_objeto_10").style.top="247px";
	document.querySelector("#jogo_barbara_objeto_10").style.left="535px";	
	document.querySelector("#jogo_barbara_objeto_10").style.zIndex="11";	
	//
	document.querySelector("#jogo_barbara_objeto_11").style.top="247px";
	document.querySelector("#jogo_barbara_objeto_11").style.left="582px";
	document.querySelector("#jogo_barbara_objeto_11").style.zIndex="11";		
	//
	document.querySelector("#jogo_barbara_objeto_12").style.top="302px";
	document.querySelector("#jogo_barbara_objeto_12").style.left="510px";
	document.querySelector("#jogo_barbara_objeto_12").style.zIndex="10";	
	//
	document.querySelector("#jogo_barbara_objeto_13").style.top="302px";
	document.querySelector("#jogo_barbara_objeto_13").style.left="557px";
	document.querySelector("#jogo_barbara_objeto_13").style.zIndex="10";		
	//
	document.querySelector("#jogo_barbara_objeto_14").style.top="302px";
	document.querySelector("#jogo_barbara_objeto_14").style.left="601px";
	document.querySelector("#jogo_barbara_objeto_14").style.zIndex="10";		
	//
	document.querySelector("#jogo_barbara_objeto_15").style.top="176px";
	document.querySelector("#jogo_barbara_objeto_15").style.left="964px";	
	//
	// Larissa
	$("#jogo_larissa_objeto_1").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_2").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_3").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_4").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_5").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_6").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_7").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_8").draggable({containment: "parent", disabled: false });	
	$("#jogo_larissa_objeto_9").draggable({containment: "parent", disabled: false });	
	//
	$("#jogo_larissa_objeto_1").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_2").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_3").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_4").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_5").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_6").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_7").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_8").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_larissa_objeto_9").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	// Pedro
	$("#jogo_pedro_objeto_1").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_2").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_3").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_4").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_5").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_6").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_7").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_8").draggable({containment: "parent", disabled: true });	
	$("#jogo_pedro_objeto_9").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_10").draggable({containment: "parent", disabled: true });	
	$("#jogo_pedro_objeto_11").draggable({containment: "parent", disabled: false });	
	$("#jogo_pedro_objeto_12").draggable({containment: "parent", disabled: true });	
	//
	$("#jogo_pedro_objeto_1").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_2").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_3").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_4").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_5").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_6").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_7").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_8").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_9").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_10").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_11").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_pedro_objeto_12").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	// Barbará
	$("#jogo_barbara_objeto_1").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_2").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_3").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_4").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_5").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_6").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_7").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_8").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_9").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_10").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_11").draggable({containment: "parent", disabled: false });	
	$("#jogo_barbara_objeto_12").draggable({containment: "parent", disabled: true });	
	$("#jogo_barbara_objeto_13").draggable({containment: "parent", disabled: true });	
	$("#jogo_barbara_objeto_14").draggable({containment: "parent", disabled: true });	
	$("#jogo_barbara_objeto_15").draggable({containment: "parent", disabled: false });	
	//
	$("#jogo_barbara_objeto_1").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_2").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_3").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_4").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_5").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_6").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_7").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_8").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_9").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_10").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_11").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_12").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_13").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_14").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	$("#jogo_barbara_objeto_15").draggable({containment: "parent", revert: false, scrollSpeed: 1, zIndex: 500, scrollSensitivity: 100});
	//
	}, 500);
	//
	setTimeout(function(){
		// Larissa
		document.querySelector("#jogo_larissa_objeto_1").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_3").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_4").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_5").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_6").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_7").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_8").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_larissa_objeto_9").className="animacao_atraso_0 fadeIn";		
		// Pedro
		document.querySelector("#jogo_pedro_objeto_1").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_3").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_4").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_5").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_6").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_7").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_8").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_9").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_10").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_11").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_pedro_objeto_12").className="animacao_atraso_0 fadeIn";
		// Barbará
		document.querySelector("#jogo_barbara_objeto_1").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_2").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_3").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_4").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_5").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_6").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_7").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_8").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_9").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_10").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_11").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_12").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_13").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_14").className="animacao_atraso_0 fadeIn";
		document.querySelector("#jogo_barbara_objeto_15").className="animacao_atraso_0 fadeIn";		
	}, 600);	
});






