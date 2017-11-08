//Google Maps Logic
    function init_map(){
	 var myOptions = {zoom:14,center:new google.maps.LatLng(40.747878,-73.993279),mapTypeId: google.maps.MapTypeId.ROADMAP};
	 map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	 marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(40.747878, -73.993279)});
	 google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
    }
	 google.maps.event.addDomListener(window, 'load', init_map);