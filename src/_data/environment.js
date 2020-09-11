require('dotenv').config()

module.exports = function() {
    return process.env.LOCAL_DEVELOPMENT || "PRODUCTION";
}