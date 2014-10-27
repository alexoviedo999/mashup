$(function() {

	$.ajax({
        url: 'https://api.instagram.com/v1/media/popular?client_id=03a834da5a654e7a96d47ec72e1043f0',
        dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < 3; i++){
            var url = result.data[i].images.standard_resolution.url;
            var location = result.data[i].location;

            if (location){
	            var appendElm = '<img src="' + url + '"/>'
	            var $div = $('<div class="item" data-slide-number="'+[i]+'">hello</div>');
	            var mapId = "mapPlaceholder"+[i];
				var $map = $('<div class="geo">"'+[i]+'"<h4>"'+ location.latitude +'"</h4><div id="'+mapId+'"></div>');
				 $($div).append($map)[0];
	            var cssUrl = 'url(' + url + ')'
	            $div.addClass('photo');
	            $div.css('background-image', cssUrl);
	            $('.carousel-inner').append($div);
	            // $($div).append('<h1>" '+ location.latitude +'"</h1')[0];
	            

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

            showCurrentLocation(location)


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
          }
          $('.item:nth-child(1)').addClass('active')
        }
    });








});
