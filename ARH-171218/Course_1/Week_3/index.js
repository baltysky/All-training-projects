/**
 * @param {String} date
 * @returns {Object}
 */


module.exports = function (date) {
	_value=date;
		return{
			
			get value(){
				return _value;
			},

			add: function (addNum,addType){
				if (addNum<0) throw new TypeError();
				//************
				var V1=_value.split(" ");
				var vY=V1[0].split("-");
				var vT=V1[1].split(":");
				var cY=parseInt(vY[0])
				,cM=parseInt(vY[1])
				,cD=parseInt(vY[2])
				,cH=parseInt(vT[0])
				,cMin=parseInt(vT[1]);
				switch (addType){
					case "years": {
						
						var mDate=new Date(cY+addNum,cM,cD,cH,cMin);
						
						break;
					}
					case "months": {
						
						var mDate=new Date(cY,cM+addNum,cD,cH,cMin);
						
					break;
					}
					case "days": {
						if (cD+addNum==31&&cM==4)
						var mDate=new Date(cY,cM,cD+addNum+1,cH,cMin);
					else
						var mDate=new Date(cY,cM,cD+addNum,cH,cMin);
						
					break;
					}
					case "hours": {
						
						var mDate=new Date(cY,cM,cD,cH+addNum,cMin);
						
					break;
					}
					case "minutes": {
						
						var mDate=new Date(cY,cM,cD,cH,cMin+addNum);
				
					break;
					}
					default:
						throw new TypeError();

				}
				cY=mDate.getFullYear();
				cM=mDate.getMonth();
				cD=mDate.getDate();
				cH=mDate.getHours();
				cMin=mDate.getMinutes();
				var oM,oD,oH,oMin;
				if (cM<10) oM="0"+cM; 
				else oM=""+cM;
				if (cH<10) oH="0"+cH; 
				else oH=""+cH;
				if (cD<10) oD="0"+cD; 
				else oD=""+cD;
				if (cMin<10) oMin="0"+cMin; 
				else oMin=""+cMin;
				
				_value=cY+"-"+oM+"-"+oD+" "+oH+":"+oMin;
				//************
				
			return this;
		},
			subtract: function (addNum,addType){
			if (addNum<0) throw new TypeError();
				//************
				var V1=_value.split(" ");
				var vY=V1[0].split("-");
				var vT=V1[1].split(":");
				var cY=parseInt(vY[0])
				,cM=parseInt(vY[1])
				,cD=parseInt(vY[2])
				,cH=parseInt(vT[0])
				,cMin=parseInt(vT[1]);
				switch (addType){
					case "years": {
						var mDate=new Date(cY-addNum,cM,cD,cH,cMin);
						break;
					}
					case "months": {
						var mDate=new Date(cY,cM-addNum,cD,cH,cMin);
					break;
					}
					case "days": {
						if (cD-addNum<=0)
						var mDate=new Date(cY,cM,cD-addNum-1,cH,cMin);
						else
						var mDate=new Date(cY,cM,cD-addNum,cH,cMin);
					break;
					}
					case "hours": {
						var mDate=new Date(cY,cM,cD,cH-addNum,cMin);
					break;
					}
					case "minutes": {
						var mDate=new Date(cY,cM,cD,cH,cMin-addNum);
					break;
					}
					default:
						throw new TypeError();

				}
				cY=mDate.getFullYear();
				cM=mDate.getMonth();
				cD=mDate.getDate();
				cH=mDate.getHours();
				cMin=mDate.getMinutes();
				var oM,oD,oH,oMin;
				if (cM<10) oM="0"+cM; 
				else oM=""+cM;
				if (cH<10) oH="0"+cH; 
				else oH=""+cH;
				if (cD<10) oD="0"+cD; 
				else oD=""+cD;
				if (cMin<10) oMin="0"+cMin; 
				else oMin=""+cMin;
				
				_value=cY+"-"+oM+"-"+oD+" "+oH+":"+oMin;
				
				//************
			return this;
		}
	
	}
}
