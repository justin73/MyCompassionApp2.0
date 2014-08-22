$(function(){
	$('button').click(function(){
		var note = $('#note');
		
			var hour = localStorage.getItem('Hour');
			var minute = localStorage.getItem('Minute');
			var second = localStorage.getItem('Second');
			alert(hour+":"+minute+":"+second);
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + window.localStorage.getItem("Hour")*60*60*1000+window.localStorage.getItem("Minute")*60*1000+window.localStorage.getItem("Second")*1000;
		//ts=(new Date()).getTime()+3*60*60*1000;
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			
			note.html(message);
		}
	});
		});
		
		
	
	
});
