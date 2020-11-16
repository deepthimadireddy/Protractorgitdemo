describe('PracticeProject3', function() {
	
	function selectitems(product){
		element.all(by.tagName('app-card')).each(function(item)
				 {
		    	item.element(by.css('h4 a')).getText().then(function(value){
		    		
		    		if (value==product)
		    			{
		    			
		    			item.element(by.css('button[class*="btn-info"]')).click()
		    			//.then(function(){
		    				//browser.sleep(5000)
		    			//})
		    			}		    			
		    				    					    			    			
		    	})
		    })
		    
	}
	
  it('cartprice', function() {
	  browser.waitForAngularEnabled(false)
    browser.get('https://qaclickacademy.github.io/protocommerce/')
    element(by.linkText('Shop')).click()
    //selectitems("Samsung Note 8")
    selectitems("iphone X")
    selectitems("Nokia Edge")
    element(by.css('a[class="nav-link btn btn-primary"]')).click()
    
   
    //element.all(by.css('table[class="table table-hover"]')).each(function(item)
    		//{
    	//console.log(item)
		  //item.element(by.css('td[class="col-sm-1 col-md-1 text-center"]')).getText().then(function(value){
	 
    		//console.log(value)
		  //})
    		
    	//})
    	
    
 /*var tabledata=element(by.css('table[class="table table-hover"]'))
  var rows=tabledata.all(by.tagName('tr'))
  //element(by.css("td:nth-child(4) strong"))
  var cells=rows.all(by.tagName('td')).all(by.css("td:nth-child(4) strong")).getText().then(function(value){
		console.log(value)
	  })*/
	  
  /*var cells=rows.all(by.tagName('td')).get(3).getText().then(function(value){
	console.log(value)
  })*/
  
  
element(by.css('table[class="table table-hover"]')).all(by.tagName('tr')).each(function(item)
		{
	item.all(by.css("td:nth-child(4) strong")).getText().then(function(abc)
			  {
		//var res=abc.split('.');
		//res[1].trim().charAt(0);
		console.log(abc)
		

			  })
			  
		 
	 })
	 
  
  
	 
	 
	  /*element.all(by.css('td[class="col-sm-1 col-md-1 text-center"]')).getText().then(function(value){
    	console.log(value)
    })*/
   
    

   /* var abc=element.all(by.css('tbody tr'))
    abc.get(1).getText().then(function(item){
    	console.log(item)
    	//abc.get(0).element.all(by.css('td[class="col-sm-1 col-md-1"]')).get(2).then(function(text){
    	//	console.log(text)
    		})*/
    	
    	
    
})
})
		   

    //let list = element.all(by.css('.items li')); expect(list.get(0).getText()).toBe('First');
  
