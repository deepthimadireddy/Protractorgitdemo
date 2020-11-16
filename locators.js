describe('locators', function() {
	function Add (a,b,c)
	{
		 element(by.model('first')).sendKeys(a);
		    element(by.model('second')).sendKeys(b);
		    element.all(by.tagName('option')).each(function(item)
		    		{
		    	item.getAttribute('value').then(function(operator)
		    			{
		    		if (operator==c)
		    			item.click()
		    		
		    			})
		    		})
		    //element(by.model('operator')).element(by.css('option:nth-child(4)')).click()
		    element(by.id('gobutton')).click()
}
		   /* element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then (function(t)
			 {
		 console.log(t)
			 })*/
		    
	it('locator',function(){
		 browser.get('https://juliemr.github.io/protractor-demo/');
		 
		 Add(5,6,'ADDITION')
		 Add(2,8,'MULTIPLICATION')
		 Add(123,3,'SUBTRACTION')
		 
		 element.all(by.repeater('result in memory')).each(function(item){
			 item.element(by.css('td:nth-child(3')).getText().then(function(t){
				 console.log(t)
			 })
		 })
		 
		 
	})
})
  
	 
    
	
		  		 
     


 
