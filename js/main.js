(function(){

    const ourVision = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"];

    var i, text = "";
    
    for(i=0; i < ourVision.length; i++){
        var str = ourVision[i];
        if(i==0){
            text += str.replace(/[$]/g, "").toUpperCase();
        }
        else{
            text += " "+str.replace(/[$]/g, "").toUpperCase(); 
        }
    }
    
    console.log(text);
    document.getElementById('text').innerHTML = text;
})();

