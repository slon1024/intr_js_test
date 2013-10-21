module('asynchronous test');
//sart() - Start running tests again after the testrunner was stopped. See stop().
//stop() - Stop the testrunner to wait for async tests to run. Call start() to continue.
test('stop and start', function() {  
    // Pause the test first  
    stop();  
      
    setTimeout(function() {  
        ok(true);  
  
        // After the assertion has been called,  
        // continue the test  
        start();  
    }, 100); 
});

//asyncTest() - Add an asynchronous test to run. The test must include a call to start().
asyncTest('asyncTest - without explicitly stop()', function() {

    setTimeout(function() {  
        ok(true);  
  
        // After the assertion has been called,  
        // continue the test  
        start();  
    }, 100); 
});
