module.exports = function toReadable (number) {
  
  var units=["","one","two","three", "four", "five", "six", "seven", "eight", "nine"];
  var dozens=["","ten","twenty", "thirty","forty","fifty","sixty","seventy","eighty", "ninety"];
  var fromEl=["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var nnn=[units,dozens];
  var a=number.toString().trim().split("").reverse();  //reversed array of units

var array2=[];
if (number==0) {return "zero";}
else {
if (a[1]==1) {array2.push(fromEl[a[0]]);}
else {
for (var i=0;i<2; i++) {
  
var j=nnn[i];
  array2.push(j[a[i]]);
}
}
    if (a.length==3) {array2.push(units[a[2]] + " hundred");}

  /*if (a.length==5 && a[4]==1) {array2.push(fromEl[a[3]] +" thousand");}
  if  (a.length==5 && a[4]!=1 && i==3) {array2.push(units[a[3]] + " thousand");}
  if (i==4) {array2.push(dozens[a[4]]);}

  if (i==5) {array2.push(units[a[4]] + " thousand");}*/
  var result=array2.reverse().join(" ").trim();
 return result.replace("  "," ");
}
 

}


