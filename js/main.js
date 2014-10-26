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
// '<div class="active item" data-url="'+ url +'" data-slide-number="0">'

	            var appendElm = '<img src="' + url + '"/>'
	            // var $div = $('<div class="item" data-url="'+ url +'" data-slide-number="0">');
	            var $div = $('<div class="item" data-slide-number="'+[i]+'"></div>');
	            var cssUrl = 'url(' + url + ')'
	            $div.addClass('photo');
	            $div.css('background-image', cssUrl);
	            $('.carousel-inner').append($div);
	            // $($div).append(appendElm);
	            $($div).append('<h1>" '+ location.latitude +'"</h1')[0];


	            $('#myCarousel').carousel({
				  interval:false // remove interval for manual sliding
				});

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
