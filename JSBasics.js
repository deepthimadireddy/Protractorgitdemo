/**
 * 
 */
//If else ***************************************************************
console.log ('this is a test');
var a='five'
	if (a=='one')
		{ 
		console.log('it is one')
		}
	else if (a=='two')
		{
		
		console.log('it is two')
		}
	else if (a=='five')
		{
		console.log('it is 5')
		}
	else 
		{
		console.log('it is neither')
		}
// For loop*******************************************************************************
for (var i=1;i<=50;i++)
	{
	console.log(i)
	}

//While**************************************************

var k=1;
while (k<10)
	{
	console.log(k)
	k++;
	
	}

// do while loop**************

var j=15
do
	{
	console.log(j)
	j++
		}
while (j<5)
//Functions *********** function name here is 'add' and this function is called when ever necessary and we just need to pass the parameters.
	
	
	function add(a,b)
{
	return a+b
	}
	
	console.log(add(2,3))
	console.log(add(123,890))
	
	
	// arrays******************
	var a=['sarada','mahesh','shruthi']
	console.log(a.length+'  this is the length of the array')
	for (i=0;i<a.length;i++)
		{
		console.log(a[i]+'   these are the array values')
		
		}
	
	var b=new Array();
	b[0]='Shruthi'
	b[1]='mahesh'
	b[2]='deepthi'
	b[3]='grandma'
	b[4]='grandpa'
	console.log(b.length+'  length of the array')
	
	for (i=0;i<b.length;i++)
		{
		console.log(b[i])
		}
// print arrays in reverse order******
	var b=new Array();
	b[0]='Shruthi'
	b[1]='mahesh'
	b[2]='deepthi'
	b[3]='grandma'
	b[4]='grandpa'
	console.log(b.length+'  length of the array')
	
	for (i<b.length-1;i>=0;i--)
		{
		console.log(b[i])
		}

	//String declaration and methods
	
	var name='Deepthi'
	console.log(name.charAt(6))
	
	console.log(name.concat(' Madireddy'))
	console.log(name.indexOf('p')+'this is the index of p')
	console.log(name.slice(3,6))
	console.log(name.toUpperCase())
	