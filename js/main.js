$(function() {
	$.ajax({
        url: 'https://api.instagram.com/v1/media/popular?client_id=03a834da5a654e7a96d47ec72e1043f0',
        dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < result.data.length; i++){
            console.log(result);
            var location = result.data[i].location;

            if (location!==null){
            	var url = result.data[i].images.standard_resolution.url;
            	var currentPicObj = result.data[i];
            	currentPicObj.cssUrl = 'url(' + url + ')';
	            currentPicObj.$div = $('<div class="item" data-slide-number="'+[i]+'"></div>');
	            var mapId = "mapPlaceholder"+[i];
				var $map = $('<div class="geo"><h4>Latitude:"'+ location.latitude +'"</h4><h4>Longitude:"'+ location.longitude +'"</h4><div class="map-block" id="'+mapId+'"></div>');
	            $(currentPicObj.$div).append($map);
	            currentPicObj.$div.addClass('photo');
	            currentPicObj.$div.css('background-image', currentPicObj.cssUrl);
	            $('.carousel-inner').append(currentPicObj.$div);
	    


				function showCurrentLocation(position) {
	                var latitude = location.latitude;
	                var longitude = location.longitude;
	                var coords = new google.maps.LatLng(latitude, longitude);

	                var mapOptions = {
		                zoom: 15,
		                center: coords,
		                mapTypeControl: true,
		                mapTypeId: google.maps.MapTypeId.ROADMAP
		            };

		            //create the map, and place it in the HTML map div
		            map = new google.maps.Map(
		            document.getElementById(mapId), mapOptions
		            );

		            //place the initial marker
		            var marker = new google.maps.Marker({
			            position: coords,
			            map: map,
			            title: "Current location!"
		            });
	            }

            	showCurrentLocation(location);

				// when the carousel slides, load the ajax content
				$('#myCarousel').on('slid', function (e) {
				  
					// get index of currently active item
					var idx = $('#myCarousel .item.active').index();
					// var url = $('.item.active').data('url');

					// ajax load from data-url
				  	$('.item').html("wait...");
					$('.item').load(url,function(result){
					    $('#myCarousel').carousel(idx);  
					});
				  
				});
            }
            else {
            	result.data.splice(i,1);
            }
          }
          result.data.splice(5,result.data.length - 5);
          $('.item:nth-child(1)').addClass('active');
        }
    });








});
