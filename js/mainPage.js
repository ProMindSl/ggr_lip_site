window.onload = function() 
{
	window.onscroll = bgMove;
};


/* bg scrolling*/
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
	/*symbols.forEach(function(item)
	{
		if (item == 'p') return nums;
		nums.push(item);
	});*/

	for(let i=0; i<symbols.length; i++)
	{
		if (symbols[i] == 'p') return  Number(num);
		num += symbols[i];
	}
	return num;
}

