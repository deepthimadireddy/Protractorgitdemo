describe('Browser Actions', function() {
  it('browser', function() {
    browser.get('https://www.istockphoto.com/').then(function(){
    	browser.sleep(3000)
    })
    element(by.css('input[class="non-default phrase"]')).sendKeys('phone').then(function(){
    	browser.sleep(5000)
    })
    
    
    //element(by.css('section[class="search-bar__istock-media-filter"]')).element(by.css('div:nth-child(1)')).click().then(function(){
    	//console.log('the test worked')
    //})
	    	

    //browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    //browser.actions().sendKeys(protractor.Key.ENTER).perform()
    
    browser.actions().mouseMove(element(by.css("section [class='search-bar__istock-media-filter']"))).click().perform()
    
    
   element(by.css(" div[class='media-types']")).element(by.css("ul")).element(by.css("li[data-value='photos']")).click()

    	
   browser.getTitle().then(function(title){
	   console.log(title+'print the title')
   })
    
    })

  })
   