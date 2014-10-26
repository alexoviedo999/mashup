$(function() {


$.ajax({
		// url: 'https://api.instagram.com/v1/users/3/media/recent/?access_token=4087907.03a834d.3fbdf8ac908649b08bbe898c154bbb69',
        url: 'https://api.instagram.com/v1/media/popular?client_id=03a834da5a654e7a96d47ec72e1043f0',
        dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < 4; i++){
            var url = result.data[i].images.standard_resolution.url;
            var location = result.data[i].location;

            if (location){
	            var appendElm = '<img src="' + url + '"/>'
	            var $div = $('<div class="item" data-slide-number="'+[i]+'">hello</div>');


var $map = $('<div class="geo">"'+[i]+'"<h1>"'+ location.latitude +'"</h1><meta name="viewport" content=""/><script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script><article><p>Finding your location: <span id="status">checking...</span></p></article></div>');


var $map = $('<div class="geo">"'+[i]+'"<h1>"'+ location.latitude +'"<div id="map"></div>');



	            var cssUrl = 'url(' + url + ')'
	            $div.addClass('photo');
	            $div.css('background-image', cssUrl);
	            $('.carousel-inner').append($div);
	            $($div).append('<h1>" '+ location.latitude +'"</h1')[0];
	            $($div).append($map)[0];



				function getLocation()
			    {
			        if (navigator.geolocation)
			        {
			        navigator.geolocation.getCurrentPosition(showPosition,showError);
			        }
			    }

			    function showPosition(position)
			    {
			        var latlon=location.latitude+","+location.longitude;

			        var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
			        +latlon+"&zoom=14&size=400x300&sensor=false";
			        document.getElementById("map").innerHTML="<img src='"+img_url+"'>";
			    }

			    showPosition(location)

			    function showError(error)
			    {
			        switch(error.code) 
			        {
			        case error.PERMISSION_DENIED:
			          doc.innerHTML="Request for Geolocation denied by the user."
			          break;
			        case error.POSITION_UNAVAILABLE:
			          doc.innerHTML="Unavailable location information."
			          break;
			        case error.TIMEOUT:
			          doc.innerHTML="Location request timed out."
			          break;
			        case error.UNKNOWN_ERROR:
			          doc.innerHTML="UNKNOWN_ERROR."
			          break;
			        }
			    }


			    getLocation();


					function error(msg) {
					  var s = document.querySelector('#status');
					  s.innerHTML = typeof msg == 'string' ? msg : "failed";
					  s.className = 'fail';
					  
					  // console.log(arguments);
					}

					if (navigator.geolocation) {
					  navigator.geolocation.getCurrentPosition(success, error);
					} else {
					  error('not supported');
					}







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
