function draw(shape) 
{
    var n = document.getElementById('field').value;
	for (i = 0; i < n; i++) 
	{
		var el = document.createElement('div');
        el.className = shape;
        el.setAttribute('onclick','colorchange(this)');
        el.ondblclick=function(){
			el.remove();
		}
        el.style.marginLeft = getRandomInt(40,300).toString()+'px';
        el.style.marginTop = getRandomInt(40,300).toString()+'px';
        document.body.appendChild(el);
    }
}

function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorchange(el) 
{
    if(el.className == 'triangle') {
        el.style.border = '100px solid transparent';
        el.style.borderBottom = '100px solid yellow';
    }
    else 
	{
        el.style.backgroundColor = 'yellow';
	}
}

function deleting(el) 
{
    el.remove();
}