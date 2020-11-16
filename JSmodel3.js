/**
 * data driven objects how to not hardcode input values
 *  
 */

//var obj =require('./JSmodel.js')
//obj.getModel()
//console.log(obj.search)



describe ('datadriven ',function(){
	
	var obj =require('./JSmodel.js');
	var using = require('jasmine-data-provider');
	var d=require('./data.js')
	beforeEach(function() {
		obj.getURL()
  });
	it('inputvalues',function(){
		
		   using(d.datadriven, function (data, description)
				   {
		obj.firstinput.sendKeys(data.FirstInput);
	 obj.secondinput.sendKeys(data.SecondInput);
	  obj.button.click();
	  // when no locator is found use locator css and syntax is 'tagname[attribute="value"]'
	 

	 expect(obj.getresult.getText()).toBe(data.Result);
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
	})
			
});
			
		
		
		
