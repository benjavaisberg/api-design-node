const fs = require('fs');

var readFile = function() {
    return new Promise(function(resolve, reject) {
        fs.readFile('./package.json', function(err, file) {
            if (err) {
                reject(err);
            } else {
                resolve(file.toString());
            }
        });
    });
}

readFile()
    .then(function(file) {
        console.log(file);
    })
    .catch(function(err) {
        console.log(err);
    })