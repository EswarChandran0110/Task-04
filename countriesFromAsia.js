var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data= JSON.parse(this.response);
    var casia= data.filter((x)=>x.region==='Asia');
    for(var i in casia){
        console.log(casia[i].name);
    }
        
    
    
}