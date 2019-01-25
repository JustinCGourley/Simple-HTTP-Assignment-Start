const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (require, response) =>
{
    response.writeHead(200, {'Content-Type': 'image/gif'});
    response.write(image);
    response.end();
}

module.exports.getImage = getImage;