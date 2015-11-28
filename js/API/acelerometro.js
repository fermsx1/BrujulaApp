var ac = {
	watchID: null,
	options: {frequency:500},
	init: function(){
		alert("init acelerometro");
		if(!ac.watchID)
			ac.watchID = navigator.accelerometer.watchAcceleration(ac.success, ac.err, ac.options);
	},
	stop: function(){
		if(ac.watchID != null){
			navigator.accelerometer.clearWatch(ac.watchID);
			ac.watchID = null;
			$('#acelerometro .scroll h2').html('Detenido');
		}
	},
	success: function(a){
		alert("success");
		$('#acelerometro .scroll h2').html('X: ' + a.x + '<br>' +
										   'Y: ' + a.y + '<br>' +
										   'Z: ' + a.z);
	},
	err: function(err){
		alert(err.code);
	}
};