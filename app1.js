$(document).ready(function(){

	// Positionner les valeurs par défaut du gradient avec les valeurs 
	// déclarée dans le Dom
	var couleursDeFond = {
		R1: $('#R1').val(),
		V1: $('#V1').val(),
		B1: $('#B1').val(),
		R2: $('#R1').val(),
		V2: $('#V1').val(),
		B2: $('#B1').val()
	};

	// Initialiser les valeurs de départ des couleurs à l'écran
	$("#ValeurR1").text(couleursDeFond.R1);
	$("#ValeurV1").text(couleursDeFond.V1);
	$("#ValeurB1").text(couleursDeFond.B1);
	$("#ValeurR2").text(couleursDeFond.R2);
	$("#ValeurV2").text(couleursDeFond.V2);
	$("#ValeurB2").text(couleursDeFond.B2);
	

	// Déclarer le getionnaire d'événements sur les sliders 
	$("#R1, #V1, #B1, #R2, #V2, #B2 ").on("change", function(){
		var id = $(this).attr('id');
		var couleur = $(this).val();
		couleursDeFond[id] = couleur;
		$("body").css({'background': "linear-gradient(to right, rgb(" + couleursDeFond.R1 + "," + couleursDeFond.V1 + "," + couleursDeFond.B1 + "),rgb(" + couleursDeFond.R2 + "," + couleursDeFond.V2 + "," + couleursDeFond.B2 + ")"}); 
		var cible = "#Valeur"+id;
	$(cible).text(couleur);
	});
});
