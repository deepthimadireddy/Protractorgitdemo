var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
	    browserName: 'chrome'
	  },
  //specs: ['Practise Project Form Submission.js'],
	  ////"smokesuite": "./node_modules/.bin/protractor Config1.js --suite smoke",
	  specs:['ChainLocator.js','chainlocatorpractice2','pgobjectsdemo.js'],
	  
	  jasmineNodeOpts: {
		    showColors: true, // Use colors in the command line report.
		  },
	  
	 onPrepare:function(){
			browser.driver.manage().window().maximize();
			
			jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );
			
			
	 }
	 
	 
	  
};
