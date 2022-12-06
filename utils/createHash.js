const crypto = require('crypto');
const hashString = string => crypto.createHash('256').update(string).digest('hex');
module.exports = hashString;
