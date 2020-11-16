/**
 * 
 */


describe ('pgobjects ',function(){
	var obj =require('./JSmodel.js');
	var using = require('jasmine-data-provider');
	var d=require('./datadriven.js');
	
	beforeEach(function(){
		obj.getURL();
	});
	using(d.datadriven, function (data, description){
		
	
	it('Repeatorlocatorwithobjects'+description,function(){
		

		obj.firstinput.sendKeys(data.firstinput);
	    obj.secondinput.sendKeys(data.secondinput);
	  obj.button.click();
	  // when no locator is found use locator css and syntax is 'tagname[attribute="value"]'
	 

	 /*obj.getresult.getText().then(function(text){
		 console.log(text)
	 });*/
	  obj.repeator.element(by.css('td:nth-child(1)')).getText().then (function(t)
			 {
		 console.log(t)
			 })
			 
			 expect(obj.getresult.getText()).toBe(data.result);
	 obj.getresult.getText().then(function(text){
		 console.log(text);
	});
	  
	    });
	
			
});
	
});
		
		
		
