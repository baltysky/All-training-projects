/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var arrStr=tweet.split(" ");
	var resStr=[];
	var n=0;
	arrStr.forEach(function HT(CV){
		if (CV[0]=="#"){
			resStr[n]=CV.slice(1);
			n++;
		}
	});
	return resStr;
};
