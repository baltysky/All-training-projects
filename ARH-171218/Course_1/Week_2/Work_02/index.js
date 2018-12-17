/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	
	if (hashtags.length==0) return "";
	var htResStr=[];
	var resStr;
	hashtags.forEach(function HTR(CV){
		if (htResStr.indexOf(CV.toLowerCase())<0)
			
			htResStr.push(CV.toLowerCase());
	});
	resStr=htResStr.join(", ");
	return resStr;
};
