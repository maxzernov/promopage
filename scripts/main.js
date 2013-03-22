$(document).ready(function(){
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
var css3_nthChild = supportsSelector("nth-child");

    if(!css3_nthChild){
	    $(".m-list-sorted-4 .b-list__item:eq(4)").addClass("m-fifth");
    }else{
	console.log("nth-child supported");
    }

    function supportsSelector(selector) {
	var el = document.createElement('div');
	el.innerHTML = ['&shy;', '<style>', selector, '{}', '</style>'].join('');
	el = document.body.appendChild(el);
	var style = el.getElementsByTagName('style')[0],
	    ret = !!(style.sheet.rules || style.sheet.cssRules)[0];
	document.body.removeChild(el);
	return ret;
    }

});
