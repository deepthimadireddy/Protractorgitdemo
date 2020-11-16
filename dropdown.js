describe('dropdown',function(){
	
	function add(a,b)
	{
		element(by.model('first')).sendKeys(a)
		element(by.model('second')).sendKeys(b)
		element(by.id('gobutton')).click()
	}
	
	it('dropdownoptions',function(){
		browser.get('http://juliemr.github.io/protractor-demo')
		add(2,3)
		
			
		element.all(by.tagName('option')).each(function(item){
			item.getAttribute('value').then(function(value){
				console.log(value)

			})
		})
	})
})
