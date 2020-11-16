describe ('handling drop down selections',function(){
	

	function Calc (a,b,c)
	{
		element(by.model('first')).sendKeys(a)
		element(by.model('second')).sendKeys(b)
		
		element.all(by.tagName('option')).each(function(item){
			item.getAttribute('value').then(function(values){
		
				if (values==c)
					{
					item.click()
					}
				
			})
		})
		
		element(by.id('gobutton')).click();
	}
				
	
	
	it('dropdown',function(){

	browser.get('http://juliemr.github.io/protractor-demo');
	Calc(2,3,'ADDITION')
	Calc(5,6,'MULTIPLICATION')
	Calc(10,5,'DIVISION')

	
	element.all(by.repeater('result in memory')).each(function(item){
		item.element(by.css('td:nth-child(3)')).getText().then(function(text){
			console.log(text)
		})
	})
		
	})
})
