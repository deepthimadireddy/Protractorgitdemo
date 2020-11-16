//search-bar__input search-input
//element(by.css('h2[class="ng-binding"]'))
describe('ISTOCK', function() {
  it('opening istock websitr', function() {
    browser.get('https://www.istockphoto.com/')
    
    element(by.css('input[class="non-default phrase"]')).sendKeys('Phone').then(function()
    		{
    	browser.sleep(3000)
    })
    browser.actions().mouseMove(element(by.css("section [class='search-bar__istock-media-filter']"))).click().perform()
    browser.actions().mouseMove(element(by.css('div[class="media-types"]')).element(by.css('ul')).element(by.css('li[data-value="photos"]'))).click().perform().then(function(){
    	browser.sleep(5000)
    })

   browser.getTitle().then(function(title){
	   console.log(title)
   })
    	
    
    	
  })
})
    	
    
    

