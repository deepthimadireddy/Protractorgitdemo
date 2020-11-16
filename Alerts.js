describe('Practice Alerts', function() {
  it('Alert', function() {
	  browser.waitForAngularEnabled(false)
    browser.get('https://www.rahulshettyacademy.com/AutomationPractice/')
    element(by.id('confirmbtn')).click()
    browser.switchTo().alert().accept()
    
  })
})