module.exports = {
	capitalize : function (string) { return string.charAt(0).toUpperCase() + string.slice(1); },
	random : function(array) { return array[Math.floor(Math.random() * array.length)]; }
};