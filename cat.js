const fs = require('fs')


module.exports = () =>
{fs.readFile('./', (err, data) => {
    if(err) {
        throw err
    } else {
        process.stdout.write(data.join('\n'))
        process.stdout.write('prompt > ');
    }
})}
