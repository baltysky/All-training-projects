/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	
	var addHours=0, addMin=0;
	if (interval<60) 
		addMin=interval;
	else{
		addHours=Math.floor(interval/60);
		addMin=interval%60;
	} 
	minutes+=addMin;
	if (minutes>59){
		addHours+=1;
		minutes-=60;
	}
	hours+=addHours;
	if (hours>23)
		hours%=24;

	var minStr=String(minutes), hrStr=String(hours);
	if (hours<10) hrStr='0'+hrStr;
	if (minutes<10) minStr='0'+minStr;
	return (hrStr+':'+minStr);
	
};

