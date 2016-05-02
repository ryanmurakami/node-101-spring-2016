const child = require('child_process');

// tests 

test('addTest', 'node solution.js 1 + 2 + 3', '6');
test('subtractTest', 'node solution.js 3 - 2 - 10', '5');
test('addSubTest', 'node solution.js 10 + 2 - 3', '11');
test('mulTest', 'node solution.js 1 \\* 8 \\* 2', '16');

// test function
function test(testName, execCommand, expResult) {
    child.exec(execCommand, (err, stdout, stderr) => {
        if (err || stderr) {
            console.error('error happened: ' + err || stderr);
        } else if (expResult != stdout.trim()) {
            console.error('Test-' + testName + ' failed. Expected ' + expResult + ' but got ' + stdout.trim());
        } else {
            console.log('Test-' + testName + ' passed.');
        }
    });
}
