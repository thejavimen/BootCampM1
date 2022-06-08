'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var dec=0;
  var exp=num.length-1;
  for (var i=0;i<num.length;i++){
    dec=dec+num[i]*Math.pow(2,exp);
    exp=exp-1;
  }
  return dec;
}

function DecimalABinario(num) {
  // tu codigo aca

  var bi=[];
  var re=0;
  while(num>=1){
    re=num%2;
    bi.unshift(re);
    num=Math.floor(num/2);
  }
  return bi.join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}