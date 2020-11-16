

describe('Practice Project', function() {
	
	function Additemstocart (a)
	{
	element.all(by.tagName('app-card')).each(function(item){
    	item.element(by.css('h4 a')).getText().then(function(value){
    		if (value==a)
    			{
    				item.element(by.css("button[class='btn btn-info']")).click()	.then(function(){
    					browser.sleep(2000)
    				})
    			}
    		
    	})
    })
}
  it('Form Submission', function() {
	  browser.waitForAngularEnabled(false)
    browser.get('https://qaclickacademy.github.io/protocommerce/')
    element(by.linkText('Shop')).click()
    Additemstocart ('iphone X')
    Additemstocart ('Samsung Note 8')
    //Additemstocart ('Nokia Edge')
    
    
    element(by.partialLinkText('Checkout')).getText().then(function(abc)
	  {
var res=abc.split('(');
expect(res[1].trim().charAt(0)).toEqual('2');

	  })
	  
	  
	  element(by.partialLinkText('Checkout')).click()
	  
		    element(by.tagName('tr')).element(by.css("td:nth-child(4) strong")).getText().then(function(a){
		    		console.log(a)
		    	})
		    })

  })


    
    
    
   