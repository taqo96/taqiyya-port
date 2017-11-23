$(document).ready(function() {
	$('#fullpage').fullpage();
});

function myFunction() {
    var x = document.getElementById('myMenu');
    if (x.className === 'topnav') {
        x.className += 'responsive';
    } else {
        x.className = 'topnav';
    }
};
