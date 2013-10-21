//Register a callback to fire whenever the test suite begins.
QUnit.begin(function() {
    console.log('begin test');
});

//Register a callback to fire whenever an assertion completes.
QUnit.log(function( details ) {
  console.log( "Log: ", details.result, details.message );
});

//Register a callback to fire whenever a test begins.
QUnit.testStart(function( details ) {
  console.log( "Now running test: ", details.module, details.name );
});

//Register a callback to fire whenever a test ends.
QUnit.testDone(function( details ) {
  console.log( "Finished running test: ", details.module, details.name, "Failed/total: ", details.failed, details.total, details.duration );
});

//Register a callback to fire whenever a module begins.
QUnit.moduleStart(function( details ) {
  console.log( "Now running module: ", details.name );
});

// Register a callback to fire whenever a module ends.
QUnit.moduleDone(function( details ) {
  console.log( "Finished running module: ", details.name, "Failed/total: ", details.failed, details.total );
});

//Register a callback to fire whenever the test suite ends.
QUnit.done(function( details ) {
  console.log( "Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});
