function e(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 };

function update() {
	name = document.getElementById('name').value;

	document.getElementById('updateMe').innerHTML = e(name);
};

function safeUpdate() {
	name = document.getElementById('safe-name').value;
	document.getElementById('safeUpdateMe').innerHTML = e(name);
};

function fizz() {
    name = document.getElementById('safe-name').value;
    if (name.match(/^\d+$/)) {
        if ((name % 3 === 0) && (name % 5 === 0) && (name != '') && (name != 0)) {
            name = 'FizzBuzz!';
        } else if (name % 3 === 0) {
            name = 'Fizz';
        } else if (name % 5 === 0) {
            name = 'Buzz';
        } 
        document.getElementById('safeUpdateMe').innerHTML = e(name);
    } else {
        document.getElementById('safeUpdateMe').innerHTML = '';
    }
};

