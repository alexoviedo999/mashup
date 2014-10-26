$(function() {


$.ajax({
		// url: 'https://api.instagram.com/v1/users/3/media/recent/?access_token=4087907.03a834d.3fbdf8ac908649b08bbe898c154bbb69',
        url: 'https://api.instagram.com/v1/media/popular?client_id=03a834da5a654e7a96d47ec72e1043f0',
        dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < result.data.length; i++){
            var url = result.data[i].images.thumbnail.url;
            var location = result.data[i].location;

            if (location){
	            var appendElm = '<img src="' + url + '"/>'
	            var $div = $('<div>');
	            var cssUrl = 'url(' + url +')'
	            $div.addClass('photo');
	            $div.css('background-image', cssUrl);
	            $('#photos').prepend($div);
	            // $($div).append(appendElm);
	            $($div).prepend('<h1>" '+ location.latitude +'"</h1')[0];
            }
          }
        }
      });

});
