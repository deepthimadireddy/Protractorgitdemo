describe('Practice Project', function() {
  it('Form Submission', function() {
	  browser.waitForAngularEnabled(false)
    browser.get('https://qaclickacademy.github.io/protocommerce/')
    element(by.name('name')).sendKeys('Sarada');
	  element(by.name('email')).sendKeys('Sarada@gmail.com');
	  element(by.id('exampleInputPassword1')).sendKeys('test123');
	  element(by.id('exampleCheck1')).click();
	  element(by.id("exampleFormControlSelect1")).element(by.css('option:nth-child(2)')).click();
	  //element(by.cssContainingText('Select[id="exampleFormControlSelect1"] option',"Female")).click();
	 	  element.all(by.name('inlineRadioOptions')).get(0).click()
	  element(by.name('bday')).sendKeys('09/08/1980').then(function(){
		  browser.sleep(5000)
	  })
	  element(by.buttonText('Submit')).click();
	  /*element(by.css('input[class="btn btn-success"]')).click().then(function()
			 {
		  browser.sleep(3000)
	  })*/
    element(by.css('div[class="alert alert-success alert-dismissible"]')).getText().then(function(message){
    	console.log(message)
    })
	  
    
    element(by.name('name')).clear()
    element(by.name('name')).sendKeys('MS').then(function(){
    	expect(element.all(by.css('div[class="alert alert-danger"]')).count()).toEqual(0)
    
    })
    
    
		//element(by.id("exampleFormControlSelect1")).element(by.css('option:nth-child(1)')).click();
		
		
		
		
	})
})