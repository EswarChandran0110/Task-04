var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var data = JSON.parse(this.response);
var total= data.reduce((sum,cv)=>sum+cv.population,0);
console.log(total);
}