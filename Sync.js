

describe('Practice synchronization', function() {
  it('sync', function() {
	  browser.waitForAngularEnabled(false)
    browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html')
    element(by.css('a[href*="loadAjax"]')).click();
    var EC = protractor.ExpectedConditions;
	// Waits for the element with id 'abc' to be no longer visible on the dom.
	browser.wait(EC.invisibilityOf(element(by.id('loader'))),5000);
	element(by.id('results')).getText().then(function(text){
		console.log(text)
	})
    
  })
})
