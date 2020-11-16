describe('Practice Actions', function() {
  it('Action1', function() {
    browser.get('https://www.istockphoto.com/')
    element(by.css('input[class="non-default phrase"]')).sendKeys('Phone')
    browser.actions().mouseMove(element(by.css('section[class="search-bar__istock-media-filter"]'))).click().perform().then(function(){
    	browser.sleep(3000)
    })
    		
    
    element(by.css('div[class="media-types"]')).element(by.css('ul')).element(by.css("li[data-value='photos']")).click()
   
     browser.getTitle().then(function(title){
    	console.log(title)
     })

  });
 
});