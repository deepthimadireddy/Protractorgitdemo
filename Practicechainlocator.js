/**
 * 
 */
describe ('Practice Chain locators ',function(){
	//Addition is function name and a,b are variables and functions should always be written before it 
	function Addition(a,b)
	{
		element(by.model('first')).sendKeys(a);
	    element(by.model('second')).sendKeys(b);
	    element(by.model('operator')).element(by.css('option:nth-child(5)')).click()
	  element(by.id('gobutton')).click();
	}
	
	it('Repeator locator',function(){
		
		browser.get('http://juliemr.github.io/protractor-demo');
		
		Addition(10,2);
		Addition(12,2);
		Addition(14,1);
		Addition(2,1);
	    
	    
	    element.all(by.repeater('result in memory')).count().then(function(text)
	    		{
	    	console.log(text)
	    		})
	    		
	    
	    
	    element.all(by.repeater('result in memory')).each(function(item){
	    	item.element(by.css('td:nth-child(3)')).getText().then(function(text){
	    		console.log(text)
	    	})
	    	
	    })
	    
	    
	    
	    
	    
	    
	    
	 
	});
})
	  


		
		
		
