describe('operator', function() {
	
	function Calc(a,b,c)
	{
		element (by.model('first')).sendKeys(a)
    	element (by.model('second')).sendKeys(b)
    	element.all(by.tagName('option')).each(function(item){
    		item.getAttribute('value').then(function(value){
    			if (value==c)
    			{
    				item.click()
    			}
    		})
    	})
  
    	element(by.id('gobutton')).click()
	}
  it('testcase1', function() {
    browser.get('http://juliemr.github.io/protractor-demo').then(function(){
    	
    	Calc(16,8,'ADDITION')
    	Calc(5,6,'MULTIPLICATION')
   
    	
    	
	element.all(by.repeater('result in memory')).each(function(item){
		item.element(by.css('td:nth-child(3)')).getText().then(function(text){
			console.log(text)
    		})
    	})
    	})
    });

  });
