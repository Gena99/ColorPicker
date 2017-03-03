$(document).ready(function(){
	//console.log("hello");

var R, V, B;
var rouge, vert, bleu;


$("#R").on("change mousemove", function(){
	R=$(this).val();
	console.log(R);
	$("body").css({"background-color":'rgb(' + R + ',' + V + ',' + B + ')'});
	});
$("#V").on("change mousemove", function(){
	V=$(this).val();
	console.log(V);
	$("body").css({"background-color":'rgb(' + R + ',' + V + ',' + B + ')'});
	});
$("#B").on("change mousemove", function(){
	B=$(this).val();
	console.log(B);
	$("body").css({"background-color":'rgb(' + R + ',' + V + ',' + B + ')'});
	});

$('#gradient1').on("change mousemove",function(){
		rouge = $(this).val();
		console.log(rouge)
		$("body").css({'background': "linear-gradient(to right, rgb(" + rouge + "," + vert + "," + bleu + "),rgb(" + R + "," + V + "," + B + ")"}); 
	});
	$('#gradient2').on("change mousemove",function(){
		vert = $(this).val();
		console.log(vert)
		$("body").css({'background': "linear-gradient(to right, rgb(" + rouge + "," + vert + "," + bleu + "),rgb(" + R + "," + V + "," + B + ")"}); 
	});
	$('#gradient3').on("change mousemove",function(){
		bleu = $(this).val();
		console.log(bleu)
		$("body").css({'background': "linear-gradient(to right, rgb(" + rouge + "," + vert + "," + bleu + "),rgb(" + R + "," + V + "," + B + ")"}); 
	});
});

