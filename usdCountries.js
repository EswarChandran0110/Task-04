var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    var usd = data.filter((x)=>{
        for (var curr in x.currencies){
            if(x.currencies[curr].code==='USD'){
                return true;
            }
        }
    }).map(x => console.log(x.name));
    console.log(usd);
    
}