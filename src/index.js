module.exports = function getZerosCount(number, base) {
  // your implementation
var syst = [],temp = 2;
do {
    if(base%temp == 0){
        syst = base;
        base = Math.round(base/temp);
    }else {
        temp++;
    }
}
while(temp <= base)

var rst = 0;
var a=1;
while(a<20){

    var num = Math.floor(number/Math.pow(syst, a))
    rst = rst+ num;
    a++;
}
return rst;
}