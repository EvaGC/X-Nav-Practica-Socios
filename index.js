$(document).ready(function () {

	$(".nav-tabs>li.active>a").ready(function () {
	   var cad =  "";
	   
	   var cadena = $.getJSON("timeline.json", function( data ) {
	       for (l in data) {
	           cad += ("<div class = 'col-md-8 well center'>" + 
	           	"<img class='img-circle' src=" + data[l].avatar + ">" +
				"<hr size=3 width=100% align=left>"
	           	+"<h3>"+ data[l].autor + "</h3>" 
	           	+"<h5>"+ data[l].titulo + "</h5>" 
	            + "<div class = 'hide'>"
	            	+"<p>"+ data[l].contenido + "</p>"
	            	+ "<img class='img' style='height:400px; position: relative;' src=" + data[l].imagen + ">"
	            	+"<p>"+ data[l].fecha + "</p>"
	            + "</div></div>");     
	        }
	        $("#textoHome").html(cad); 
	});
}) ;

$("#down").on( "click", function(){
	$('div').removeClass('hide');
});

	$("#act").click(function () {
	   var cad =  "";
	   var cadena = $.getJSON("update.json", function( data ) {
	       for (l in data) {
	           cad += ("<div class = 'col-md-8 well center'>" + 
	           	"<img class='img-circle' src=" + data[l].avatar + ">" +
				"<hr size=3 width=100% align=left>"
	           	+"<h3>"+ data[l].autor + "</h3>" 
	           	+"<h5>"+ data[l].titulo + "</h5>" 
	            + "<div class = 'hide'>"
	            	+"<p>"+ data[l].contenido + "</p>"
	            	+ "<img class='img' style='height:400px; margin:0px auto;' src=" + data[l].imagen + ">"
	            	+"<p>"+ data[l].fecha + "</p>" 	

	            + "</div></div>"); 

	        }
	       $("#textoActualizar").html(cad);
	   })  
	})

	$("a.Prof").click(function () {
	   var cad =  "";
	   var cadena = $.getJSON("myline.json", function( data ) {
	       for (l in data) {
	           cad += ("<div class = 'col-md-8 well center'>" + 
	           	"<img class='img-circle' src=" + data[l].avatar + ">" +
				"<hr size=3 width=100% align=left>"
	           	+"<h3>"+ data[l].autor + "</h3>" 
	           	+"<h5>"+ data[l].titulo + "</h5>" 
	            + "<div class = 'hide'>"
	            	+"<p>"+ data[l].contenido + "</p>"
	            	+ "<img class='img' style='height:400px; margin:0px auto;' src=" + data[l].imagen + ">"
	            	+"<p>"+ data[l].fecha + "</p>" 	

	            + "</div></div>"); 
	        }
	       $("#textoProfile").html(cad);
	   })     
	})

	$("a.Mes").click(function () {
	   var cad =  "";
	   var cadena = $.getJSON("mensajes.json", function( data ) {
	       for (l in data) {
	           cad += ("<div class = 'col-md-8 well center'>" + data[l].autor + ": " +  data[l].contenido + "<br>"  + 
	               data[l].fecha+ "</div>").replace("y undefined", "").replace(", undefined", "");
	        }
	       $("#textoMessages").html(cad);
	   });     
	});
});

