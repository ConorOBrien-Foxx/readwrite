const fs = require("fs");

const read = (fileName) => fs.readFileSync(fileName).toString();
const write = (fileName, data) => (fs.writeFileSync(fileName, data), data);

module.exports = {
    read: read,
    write: 
};