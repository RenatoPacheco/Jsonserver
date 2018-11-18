const guid = require('guid')
const dateNow = require('../helper/dateNow');

module.exports = function(message, reference = null) {
    return {
        id: guid.create(),
        message: message,
        reference: reference,
        date: dateNow()
    }
}