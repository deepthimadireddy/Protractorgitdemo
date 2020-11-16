/**
 * 
 */
describe ('protractor test',function(){
	it('element',function(){
		
		browser.get('http://juliemr.github.io/protractor-demo');
		element(by.model('first')).sendKeys(4);
	    element(by.model('second')).sendKeys(12);
	  element(by.id('gobutton')).click();
	  // when no locator is found use locator css and syntax is 'tagname[attribute="value"]'
	 

	 expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe('16');
	 element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
		 console.log(text);
	});
	  
	    });
			
});
			
		
		
		
