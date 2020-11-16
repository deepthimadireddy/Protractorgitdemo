describe('Protractor tutorial', function() {
  it('testcase1', function() {
    browser.get('http://angularjs.org').then(function(){
    	console.log('open first and then print');
    });

  });
 
});