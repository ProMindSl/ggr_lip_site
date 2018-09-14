window.onload = function() 
{
	window.onscroll = bgMove;
};


/* Скроллинг bg*/
function bgMove() /* start position of bg is -80px*/
{
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	let bg = document.getElementById("bgPIC_1");
	/*let curPosY = getNumFromBgPosString(bg.style.backgroundPositionY);*/
	bg.style.backgroundPositionY = (-80+(scrolled/2))+'px';
};

function getNumFromBgPosString(posString)
{
	let symbols = posString.split('');
	let num = '';

	for(let i=0; i<symbols.length; i++)
	{
		if (symbols[i] == 'p') return  Number(num);
		num += symbols[i];
	}
	return num;
}

$(function() /* Возврат экрана в top */
{
	$(window).scroll(function() 
	{
 		if($(this).scrollTop() != 0) $('#toTop').fadeIn();
 		else $('#toTop').fadeOut();
  	});
 
	$('#toTop').click(function() 
	{
 		$('body,html').animate({scrollTop:0},800);
 	});
});

