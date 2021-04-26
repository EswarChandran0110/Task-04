var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    var lesspopulation = data.filter((x)=>x.population<200000);
    for(var i in lesspopulation){
        console.log(lesspopulation[i].name);
    }
    
}