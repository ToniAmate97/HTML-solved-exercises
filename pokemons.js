$().ready(function() {
	$.get("http://40.118.8.76/pokemons/2",function(data){
		$("#code").text(data.num);
		$("#normal_sprite").html("<img src='"+data.images[0].front+"'>"); 
		$("#shiny_sprite").html("<img src='"+data.images[1].front_shiny+"'>");
		$("#name").text(data.name);
		$("#type").text(data.types[0].type.name);
		$("hm").text(data.moves.HM);
	}, "json");
})