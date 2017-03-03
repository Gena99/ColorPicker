$(document).ready(function(){
	//console.log("hello");

// initialisation des variables
// récupérer les valeurs définies dans le dom pour les input avec les id R, V et B
var R = $('#R').val();
var V = $('#V').val();
var B = $('#B').val();
// mettre à jour la couleur du fond d'écran
changerCouleurFondEcran();

// positionner la valeur par défaut du gradient aux mêmes valeurs que le fond d'écran
var rouge = R, vert = V, bleu = V;

// déclarer les function pour changer les couleurs
function changerCouleurFondEcran(){
	//$("body").css({"background-color":'rgb(' + R + ',' + V + ',' + B + ')'});
	$("body").css({'background': "linear-gradient(to right, rgb(" + R + "," + V + "," + B + "),rgb(" + R + "," + V + "," + B + ")"}); 
}
function changerDegrade(){
	$("body").css({'background': "linear-gradient(to right, rgb(" + rouge + "," + vert + "," + bleu + "),rgb(" + R + "," + V + "," + B + ")"}); 
}



$("#R").on("change", function(){
	console.log($(this).attr('id'))
	R=$(this).val();
	console.log("R" + R);
	changerCouleurFondEcran();
	});
$("#V").on("change", function(){
	V=$(this).val();
	console.log(V);
	changerCouleurFondEcran();
	});
$("#B").on("change", function(){
	B=$(this).val();
	console.log(B);
	changerCouleurFondEcran();
	});

$('#gradient1').on("change",function(){
		rouge = $(this).val();
		console.log(rouge)
		changerDegrade();
	});
$('#gradient2').on("change",function(){
		vert = $(this).val();
		console.log(vert)
		changerDegrade();
	});
$('#gradient3').on("change",function(){
	bleu = $(this).val();
	console.log(bleu)
	changerDegrade();
	});
	
});

