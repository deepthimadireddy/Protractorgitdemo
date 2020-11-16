

describe('Practice Project2', function() {
	function cart(product)
		{
		browser.driver.manage().window().maximize();
		element.all(by.tagName('app-card')).each(function(item)
				 {
		    	item.element(by.css('h4 a')).getText().then(function(value){
		    		if (value==product)
		    			{
		    			element(by.css('button[class*="btn-info"]')).click();
		    			}		    			
		    				    					    			    			
		    	})
		    })
		}
  it('cart total', function() {
	  browser.waitForAngularEnabled(false)
    browser.get('https://qaclickacademy.github.io/protocommerce/')
    element(by.linkText('Shop')).click()
    //element.all(by.css('a[class="nav-link"]')).get(1).click().then(function(){
    //	browser.sleep(3000)
    //})
    cart('iphone X')
   cart('Samsung Note 8')
   
 
		    
  element(by.partialLinkText('Checkout')).click()
  
  element.all(by.tagName('tr')).each(function(item)
		  {
	  item.element(by.css('td[class="col-sm-1 col-md-1 text-center"]')).getText().then(function(text){
			console.log(text)
  		})
  })
  
  
  
  })
})

    
    
    
   
   