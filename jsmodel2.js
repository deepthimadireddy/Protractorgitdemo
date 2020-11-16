//var obj =require('./JSmodel.js')
//obj.getModel()
//console.log(obj.search)



describe ('Chain locators ',function(){
	
	var obj =require('./JSmodel.js')
	beforeEach(function() {
		obj.getURL()
  });
	it('Repeator locator',function(){
		
	
		obj.firstinput.sendKeys(4);
	 obj.secondinput.sendKeys(12);
	  obj.button.click();
	  // when no locator is found use locator css and syntax is 'tagname[attribute="value"]'
	 

	 expect(obj.getresult.getText()).toBe('10');
	 element(by.repeater('result in memory')).element(by.css('td:nth-child(1)')).getText().then (function(t)
			 {
		 console.log(t)
			 })
	obj.getresult.getText().then(function(text){
		 console.log(text);
	});
	 
	 afterEach(function() {
		    console.log('using setup and teardown')
		  });
	  
	    });
			
});
			
		
		
		
