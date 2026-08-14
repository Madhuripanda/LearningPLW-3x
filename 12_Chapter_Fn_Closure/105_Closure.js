function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
        let fail = true;
        if (fail) {
            console.log('Failed!');
        }
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

//installBrowser();
/*Why does Closure work?

When a function is returned, it keeps access to variables from its outer scope.

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();
fn();

Output:

10

inner() remembers x even after outer() has completed.
*/