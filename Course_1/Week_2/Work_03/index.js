// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
var objArr=[];
module.exports = function (command) {
	
	var strAr1=command.split(" ");

	switch (strAr1[0])
	{
	case 'ADD':{
		var exObj=false;
		var telStr=strAr1[2].split(",");
		if (objArr.length>0)
		{ 
			objArr.forEach(function (CV){
					if (CV.name==strAr1[1]) {
						telStr.forEach(function(CVS){
							CV.tel.push(CVS);
						});
					exObj=true;
				}
				});
		}
		if (!exObj){
			objArr.push({name:strAr1[1], tel:telStr});
		}
		objArr.sort(function (x, y) {
    	var a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    	if (a > b) {
        return 1;
    	}
   		 if (a < b) {
        return -1;
   		 }
    		return 0;
			});
		break;
	}
	case "REMOVE_PHONE":{
			var jj,j;
			var exOb=false;
			for (j=0;j<objArr.length;j++){
				for (jj=0;jj<objArr[j].tel.length;jj++){
						if (objArr[j].tel[jj]==strAr1[1]){
							objArr[j].tel.splice(jj,1);
							exOb=true;
						}
					}
				}
				return exOb;
				
		break;
	}
	case "SHOW":{
		var j=0;
		var strRet=[];
		for (j=0;j<objArr.length;j++)
				if (objArr[j].tel.length>0)
				{
					strRet.push(objArr[j].name+": "+objArr[j].tel.join(", "));
				}
		return strRet;
		break;
	}
}
}
