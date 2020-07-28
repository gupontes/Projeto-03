window.onload = function(){
	var map;

	function initalize(){
		var mapProp = {
			center: new google.maps.LatLng(-23.695647,-46.6509546),
			scrollWheel: false,
			zoom: 14,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"), mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
		}else{
			infoWindow.open(map,marker);
		}
		
	}

	initalize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
	addMarker(-27.616637,-48.5923228,'',conteudo,true);


	setTimeout(function(){
		map.panTo({'lat':-23.695647,'lng':-46.6509546});
		map.setZoom(12);
	},4000);
}