const twoPlaces = function(value) {
    return value < 10 ? `0${value}` : value;
}

module.exports = function() {
    let date = new Date();
    let year = twoPlaces(date.getFullYear());
    let month = twoPlaces(date.getMonth()+1);
    let day = twoPlaces(date.getDate());
    let hours = twoPlaces(date.getHours());
    let minutes = twoPlaces(date.getMinutes());
    let seconds = twoPlaces(date.getSeconds());
    let milliseconds = twoPlaces(date.getMilliseconds());
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}