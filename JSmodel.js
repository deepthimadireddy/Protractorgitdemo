/**
 * 
 */

function pgobj()
{

		this.firstinput=element(by.model('first'))
		this.secondinput=element(by.model('second'))
		this.button= element(by.id('gobutton'))
		this.getresult=element(by.css('h2[class="ng-binding"]'))
		this.repeator=element(by.repeater('result in memory'))
		

		
	this.getURL=function()
	{
	browser.get('http://juliemr.github.io/protractor-demo');
	}
}

module.exports=new pgobj()

/*{
	console.log(a.engine)
	console.log(a.model)
	
	}*/
