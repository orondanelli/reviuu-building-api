'use strict';

exports.cleanPrice = (price) => {
    return parseInt(price.replace(/[$.]/g,'').trim());
}

exports.timeSCL = (datetime) => {
    return datetime.toLocaleString("es-CL", {timeZone: "America/Santiago"})
}