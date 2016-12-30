/*  
	名企笔试：2013网易游戏笔试题(英雄升级问题)

	英雄每次升级都需要花费宝石，已知英雄每升一级成功的概率如下。

	英雄升级，从0级升到1级，概率100%。
	从1级升到2级，有1/3的可能成功；1/3的可能停留原级；1/3的可能下降到0级；
	从2级升到3级，有1/9的可能成功；4/9的可能停留原级；4/9的可能下降到1级。
	每次升级要花费一个宝石，不管成功还是停留还是降级。

	求英雄从0级升到3级平均花费的宝石数目？
	【来自】微信公众好：算法爱好者 
*/

/*普通码农版本*/
/*var foo=(level)=>{
	if(level == 0) return 1;//从0级到1级
	if(level == 1){//从1级到2级
		var r = 3*Math.random();
		if(r<1){
			return 2//升级到2级
		}else if(r<2){
			return 1//保留原级
		}else{
			return 0//降级到0级
		}
	}
	if(level == 2){
		var r=Math.random()*9;
		if(r<1){//从2级升级到3级
			return 3
		}else if(r<5){
			return 2//保留原级
		}else{
			return 1//降级到1级
		}
	}
}
var bar = () => {//计算一次能拿的宝石数目
	var lv = 0; 
	var gem = 0;     
	while (lv != 3) {         
		lv = foo(lv);         
		gem++;     
	}     
	return gem; 
} 
(function (t) {     
	var gs = 0;     
	for (var i = 0; i < t; i++)         
		gs += bar();     
	console.log(gs / t); 
})(1000);*/


/*最终精简的版本*/
var n=100000;/*执行次数*/
var result = ((t)=>{
    var sum=0,i=0;
    while(i<t){sum += getGemCount();i++}
    return Math.round(sum/t);
    function getGemCount(){
        var level=0,gem=0;
        while(level<3){
            level=(function(lv){
                switch(lv){
                    case 0:return 1;break;
                    case 1:
                        var r1=Math.floor(Math.random()*3);
                        switch(r1){
                            case 0:return 2;break;
                            case 1:return 1;break;
                            case 2:return 0;break;
                        }
                    case 2:
                        var r2=Math.random()*9;
                        return r2<1? 3:r2<5 ? 2:1;
                        break;
                }
            })(level);
            gem++;
        }
        return gem;
    }
})(n);
console.log(result);

/*
	阿卜杜
	2016-12-29
 */
