
describe ('Chain locators ',function(){
	it('Repeator locator',function(){
		
		browser.get('http://juliemr.github.io/protractor-demo');
		element(by.model('first')).sendKeys(12);
	    element(by.model('second')).sendKeys(12);
	  element(by.id('gobutton')).click();
	  // when no locator is found use locator css and syntax is 'tagname[attribute="value"]'
	 

	 expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe('16');
	 element(by.repeater('result in memory')).element(by.css('td:nth-child(1)')).getText().then (function(t)
			 {
		 console.log(t)
			 })
	 element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
		 console.log(text);
	});
	  
	    });
			
});
			
		
		
		
