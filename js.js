function pickcol(){
    var counta=0;
    var countr=0;
    var countg=0;
    var county=0;
    var colors=['aqua','red','yellow','green'];
    document.getElementById('div25').style.backgroundColor='beige';
    document.getElementById('div25').style.color='beige';
    for(var i=1;i<25;i++){
        var rancol=colors[Math.floor(Math.random()*4)];
        if (rancol=='aqua'){
            counta++;            
            if(counta<=6){
                document.getElementById('div'+i).style.backgroundColor=rancol;
                document.getElementById('div'+i).style.color=rancol;
            }
            else{
                i--;
            }
        }
        if (rancol=='red'){ 
            countr++;          
            if(countr<=6){
                document.getElementById('div'+i).style.backgroundColor=rancol;
                document.getElementById('div'+i).style.color=rancol;
            }
            else{
                i--;
            }
            
        }
        if (rancol=='green'){
            countg++;
            if(countg<=6){
                document.getElementById('div'+i).style.backgroundColor=rancol;
                document.getElementById('div'+i).style.color=rancol;  
            }
            else{
                i--;
            }
        
        }
        if (rancol=='yellow'){
            county++;            
            if(county<=6){
                document.getElementById('div'+i).style.backgroundColor=rancol;
                document.getElementById('div'+i).style.color=rancol;
            }
            else{
                i--;
            }
            
        }
    }          
}
function pickcol2(){
    var colors=['aqua','red','yellow','green','aqua','red','yellow','green','aqua','red','yellow','green','aqua','red','yellow','green','aqua','red','yellow','green','aqua','red','yellow','green'];
    for(var j=1;j<=9;j++){
        var rancol2=colors[Math.floor(Math.random()*24)];
        document.getElementById('d'+j).style.backgroundColor=rancol2;
        document.getElementById('d'+j).style.color=rancol2;
    }    
}
const timer=document.getElementById('watch');
var hr=0;
var min=0;
var sec=0;
var stop=true;
function start(){
    if(stop==true){
        stop=false;
        timercycle();
    }
}
function stopt(){
    if(stop==false){
        stop=true;
    }
}
function timercycle(){
    if(stop==false){
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
        }

        if(sec<10||sec==0){
            sec='0'+sec;
        }
        if(min<10||min==0){
            min='0'+min;
        }
        if(hr<10||hr==0){
            hr='0'+hr;
        }
        timer.innerHTML=hr+':'+min+':'+sec;
        setTimeout("timercycle()", 1000);    
    }
    if(document.getElementById('div2').style.backgroundColor==document.getElementById('d1').style.backgroundColor && document.getElementById('div6').style.backgroundColor==document.getElementById('d2').style.backgroundColor && document.getElementById('div10').style.backgroundColor==document.getElementById('d3').style.backgroundColor && document.getElementById('div22').style.backgroundColor==document.getElementById('d4').style.backgroundColor && document.getElementById('div3').style.backgroundColor==document.getElementById('d5').style.backgroundColor && document.getElementById('div7').style.backgroundColor==document.getElementById('d6').style.backgroundColor && document.getElementById('div19').style.backgroundColor==document.getElementById('d7').style.backgroundColor && document.getElementById('div23').style.backgroundColor==document.getElementById('d8').style.backgroundColor && document.getElementById('div4').style.backgroundColor==document.getElementById('d9').style.backgroundColor){
        alert("YOU WIN!!!");     
        stopt();   
    }
}
var m=0;
var move=document.getElementById('moves');
document.getElementById('div8').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor9=document.getElementById('div8').style.backgroundColor;
    document.getElementById('div8').style.backgroundColor='beige';
    document.getElementById('div8').style.color='beige';
    if(document.getElementById('div25').style.backgroundColor=='beige'){
        document.getElementById('div25').style.backgroundColor=divcolor9.toString();
        document.getElementById('div25').style.color=divcolor9.toString();
    }
    else if(document.getElementById('div11').style.backgroundColor=='beige'){
        document.getElementById('div11').style.backgroundColor=divcolor9.toString();
        document.getElementById('div11').style.color=divcolor9.toString();
    }
    else if(document.getElementById('div4').style.backgroundColor=='beige'){
        document.getElementById('div4').style.backgroundColor=divcolor9.toString();
        document.getElementById('div4').style.color=divcolor9.toString();
    }
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div8').style.backgroundColor=divcolor9.toString();
        document.getElementById('div8').style.color=divcolor9.toString();
    }
    
}    
document.getElementById('div1').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor=document.getElementById('div1').style.backgroundColor;
    document.getElementById('div1').style.backgroundColor='beige';
    document.getElementById('div1').style.color='beige';
    if(document.getElementById('div5').style.backgroundColor=='beige'){
        document.getElementById('div5').style.backgroundColor=divcolor.toString();
        document.getElementById('div5').style.color=divcolor.toString();
    }
    else if(document.getElementById('div21').style.backgroundColor=='beige'){
        document.getElementById('div21').style.backgroundColor=divcolor.toString();
        document.getElementById('div21').style.color=divcolor.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div1').style.backgroundColor=divcolor.toString();
        document.getElementById('div1').style.color=divcolor.toString();
    }
   
           
}
document.getElementById('div12').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor1=document.getElementById('div12').style.backgroundColor;
    document.getElementById('div12').style.backgroundColor='beige';
    document.getElementById('div12').style.color='beige';
    if(document.getElementById('div15').style.backgroundColor=='beige'){
        document.getElementById('div15').style.backgroundColor=divcolor1.toString();
        document.getElementById('div15').style.color=divcolor1.toString();
    }
    else if(document.getElementById('div16').style.backgroundColor=='beige'){
        document.getElementById('div16').style.backgroundColor=divcolor1.toString();
        document.getElementById('div16').style.color=divcolor1.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div12').style.backgroundColor=divcolor1.toString();
        document.getElementById('div12').style.color=divcolor1.toString();
    }        
}
document.getElementById('div17').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor2=document.getElementById('div17').style.backgroundColor;
    document.getElementById('div17').style.backgroundColor='beige';
    document.getElementById('div17').style.color='beige';
    if(document.getElementById('div13').style.backgroundColor=='beige'){
        document.getElementById('div13').style.backgroundColor=divcolor2.toString();
        document.getElementById('div13').style.color=divcolor2.toString();
    }
    else if(document.getElementById('div14').style.backgroundColor=='beige'){
        document.getElementById('div14').style.backgroundColor=divcolor2.toString();
        document.getElementById('div14').style.color=divcolor2.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div17').style.backgroundColor=divcolor2.toString();
        document.getElementById('div17').style.color=divcolor2.toString();
    }
   
           
}
document.getElementById('div25').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor3=document.getElementById('div25').style.backgroundColor;
    document.getElementById('div25').style.backgroundColor='beige';
    document.getElementById('div25').style.color='beige';
    if(document.getElementById('div24').style.backgroundColor=='beige'){
        document.getElementById('div24').style.backgroundColor=divcolor3.toString();
        document.getElementById('div24').style.color=divcolor3.toString();
    }
    else if(document.getElementById('div8').style.backgroundColor=='beige'){
        document.getElementById('div8').style.backgroundColor=divcolor3.toString();
        document.getElementById('div8').style.color=divcolor3.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div25').style.backgroundColor=divcolor3.toString();
        document.getElementById('div25').style.color=divcolor3.toString();
    }
    
           
}
document.getElementById('div21').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor4=document.getElementById('div21').style.backgroundColor;
    document.getElementById('div21').style.backgroundColor='beige';
    document.getElementById('div21').style.color='beige';
    if(document.getElementById('div1').style.backgroundColor=='beige'){
        document.getElementById('div1').style.backgroundColor=divcolor4.toString();
        document.getElementById('div1').style.color=divcolor4.toString();
    }
    else if(document.getElementById('div2').style.backgroundColor=='beige'){
        document.getElementById('div2').style.backgroundColor=divcolor4.toString();
        document.getElementById('div2').style.color=divcolor4.toString();
    } 
    else if(document.getElementById('div18').style.backgroundColor=='beige'){
        document.getElementById('div18').style.backgroundColor=divcolor4.toString();
        document.getElementById('div18').style.color=divcolor4.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div21').style.backgroundColor=divcolor4.toString();
        document.getElementById('div21').style.color=divcolor4.toString();
    }
   
           
}
document.getElementById('div18').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor5=document.getElementById('div18').style.backgroundColor;
    document.getElementById('div18').style.backgroundColor='beige';
    document.getElementById('div18').style.color='beige';
    if(document.getElementById('div21').style.backgroundColor=='beige'){
        document.getElementById('div21').style.backgroundColor=divcolor5.toString();
        document.getElementById('div21').style.color=divcolor5.toString();
    }
    else if(document.getElementById('div22').style.backgroundColor=='beige'){
        document.getElementById('div22').style.backgroundColor=divcolor5.toString();
        document.getElementById('div22').style.color=divcolor5.toString();
    } 
    else if(document.getElementById('div15').style.backgroundColor=='beige'){
        document.getElementById('div15').style.backgroundColor=divcolor5.toString();
        document.getElementById('div15').style.color=divcolor5.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div18').style.backgroundColor=divcolor5.toString();
        document.getElementById('div18').style.color=divcolor5.toString();
    }
    
           
}
document.getElementById('div15').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor6=document.getElementById('div15').style.backgroundColor;
    document.getElementById('div15').style.backgroundColor='beige';
    document.getElementById('div15').style.color='beige';
    if(document.getElementById('div18').style.backgroundColor=='beige'){
        document.getElementById('div18').style.backgroundColor=divcolor6.toString();
        document.getElementById('div18').style.color=divcolor6.toString();
    }
    else if(document.getElementById('div12').style.backgroundColor=='beige'){
        document.getElementById('div12').style.backgroundColor=divcolor6.toString();
        document.getElementById('div12').style.color=divcolor6.toString();
    } 
    else if(document.getElementById('div19').style.backgroundColor=='beige'){
        document.getElementById('div19').style.backgroundColor=divcolor6.toString();
        document.getElementById('div19').style.color=divcolor6.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div15').style.backgroundColor=divcolor6.toString();
        document.getElementById('div15').style.color=divcolor6.toString();
    }
    
           
}
document.getElementById('div14').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor7=document.getElementById('div14').style.backgroundColor;
    document.getElementById('div14').style.backgroundColor='beige';
    document.getElementById('div14').style.color='beige';
    if(document.getElementById('div10').style.backgroundColor=='beige'){
        document.getElementById('div10').style.backgroundColor=divcolor7.toString();
        document.getElementById('div10').style.color=divcolor7.toString();
    }
    else if(document.getElementById('div17').style.backgroundColor=='beige'){
        document.getElementById('div17').style.backgroundColor=divcolor7.toString();
        document.getElementById('div17').style.color=divcolor7.toString();
    } 
    else if(document.getElementById('div11').style.backgroundColor=='beige'){
        document.getElementById('div11').style.backgroundColor=divcolor7.toString();
        document.getElementById('div11').style.color=divcolor7.toString();
    }
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div14').style.backgroundColor=divcolor7.toString();
        document.getElementById('div14').style.color=divcolor7.toString();
    } 
   
           
}
document.getElementById('div11').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor8=document.getElementById('div11').style.backgroundColor;
    document.getElementById('div11').style.backgroundColor='beige';
    document.getElementById('div11').style.color='beige';
    if(document.getElementById('div14').style.backgroundColor=='beige'){
        document.getElementById('div14').style.backgroundColor=divcolor8.toString();
        document.getElementById('div14').style.color=divcolor8.toString();
    }
    else if(document.getElementById('div7').style.backgroundColor=='beige'){
        document.getElementById('div7').style.backgroundColor=divcolor8.toString();
        document.getElementById('div7').style.color=divcolor8.toString();
    } 
    else if(document.getElementById('div8').style.backgroundColor=='beige'){
        document.getElementById('div8').style.backgroundColor=divcolor8.toString();
        document.getElementById('div8').style.color=divcolor8.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div11').style.backgroundColor=divcolor8.toString();
        document.getElementById('div11').style.color=divcolor8.toString();
    }           
}
document.getElementById('div24').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor10=document.getElementById('div24').style.backgroundColor;
    document.getElementById('div24').style.backgroundColor='beige';
    document.getElementById('div24').style.color='beige';
    if(document.getElementById('div25').style.backgroundColor=='beige'){
        document.getElementById('div25').style.backgroundColor=divcolor10.toString();
        document.getElementById('div25').style.color=divcolor10.toString();
    }
    else if(document.getElementById('div20').style.backgroundColor=='beige'){
        document.getElementById('div20').style.backgroundColor=divcolor10.toString();
        document.getElementById('div20').style.color=divcolor10.toString();
    } 
    else if(document.getElementById('div4').style.backgroundColor=='beige'){
        document.getElementById('div4').style.backgroundColor=divcolor10.toString();
        document.getElementById('div4').style.color=divcolor10.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div24').style.backgroundColor=divcolor10.toString();
        document.getElementById('div24').style.color=divcolor10.toString();
    }
    
           
}
document.getElementById('div20').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor11=document.getElementById('div20').style.backgroundColor;
    document.getElementById('div20').style.backgroundColor='beige';
    document.getElementById('div20').style.color='beige';
    if(document.getElementById('div16').style.backgroundColor=='beige'){
        document.getElementById('div16').style.backgroundColor=divcolor11.toString();
        document.getElementById('div16').style.color=divcolor11.toString();
    }
    else if(document.getElementById('div23').style.backgroundColor=='beige'){
        document.getElementById('div23').style.backgroundColor=divcolor11.toString();
        document.getElementById('div23').style.color=divcolor11.toString();
    } 
    else if(document.getElementById('div24').style.backgroundColor=='beige'){
        document.getElementById('div24').style.backgroundColor=divcolor11.toString();
        document.getElementById('div24').style.color=divcolor11.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div20').style.backgroundColor=divcolor11.toString();
        document.getElementById('div20').style.color=divcolor11.toString();
    }
           
}
document.getElementById('div16').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor12=document.getElementById('div16').style.backgroundColor;
    document.getElementById('div16').style.backgroundColor='beige';
    document.getElementById('div16').style.color='beige';
    if(document.getElementById('div19').style.backgroundColor=='beige'){
        document.getElementById('div19').style.backgroundColor=divcolor12.toString();
        document.getElementById('div19').style.color=divcolor12.toString();
    }
    else if(document.getElementById('div20').style.backgroundColor=='beige'){
        document.getElementById('div20').style.backgroundColor=divcolor12.toString();
        document.getElementById('div20').style.color=divcolor12.toString();
    } 
    else if(document.getElementById('div12').style.backgroundColor=='beige'){
        document.getElementById('div12').style.backgroundColor=divcolor12.toString();
        document.getElementById('div12').style.color=divcolor12.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div16').style.backgroundColor=divcolor12.toString();
        document.getElementById('div16').style.color=divcolor12.toString();
    }

    
           
}
document.getElementById('div5').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor13=document.getElementById('div5').style.backgroundColor;
    document.getElementById('div5').style.backgroundColor='beige';
    document.getElementById('div5').style.color='beige';
    if(document.getElementById('div1').style.backgroundColor=='beige'){
        document.getElementById('div1').style.backgroundColor=divcolor13.toString();
        document.getElementById('div1').style.color=divcolor13.toString();
    }
    else if(document.getElementById('div2').style.backgroundColor=='beige'){
        document.getElementById('div2').style.backgroundColor=divcolor13.toString();
        document.getElementById('div2').style.color=divcolor13.toString();
    } 
    else if(document.getElementById('div9').style.backgroundColor=='beige'){
        document.getElementById('div9').style.backgroundColor=divcolor13.toString();
        document.getElementById('div9').style.color=divcolor13.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div5').style.backgroundColor=divcolor13.toString();
        document.getElementById('div5').style.color=divcolor13.toString();
    }
    
           
}
document.getElementById('div9').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor14=document.getElementById('div9').style.backgroundColor;
    document.getElementById('div9').style.backgroundColor='beige';
    document.getElementById('div9').style.color='beige';
    if(document.getElementById('div13').style.backgroundColor=='beige'){
        document.getElementById('div13').style.backgroundColor=divcolor14.toString();
        document.getElementById('div13').style.color=divcolor14.toString();
    }
    else if(document.getElementById('div5').style.backgroundColor=='beige'){
        document.getElementById('div5').style.backgroundColor=divcolor14.toString();
        document.getElementById('div5').style.color=divcolor14.toString();
    } 
    else if(document.getElementById('div6').style.backgroundColor=='beige'){
        document.getElementById('div6').style.backgroundColor=divcolor14.toString();
        document.getElementById('div6').style.color=divcolor14.toString();
        

    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div9').style.backgroundColor=divcolor14.toString();
        document.getElementById('div9').style.color=divcolor14.toString();
    }
    
           
}
document.getElementById('div13').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor15=document.getElementById('div13').style.backgroundColor;
    document.getElementById('div13').style.backgroundColor='beige';
    document.getElementById('div13').style.color='beige';
    if(document.getElementById('div10').style.backgroundColor=='beige'){
        document.getElementById('div10').style.backgroundColor=divcolor15.toString();
        document.getElementById('div10').style.color=divcolor15.toString();
    }
    else if(document.getElementById('div9').style.backgroundColor=='beige'){
        document.getElementById('div9').style.backgroundColor=divcolor15.toString();
        document.getElementById('div9').style.color=divcolor15.toString();
    } 
    else if(document.getElementById('div17').style.backgroundColor=='beige'){
        document.getElementById('div17').style.backgroundColor=divcolor15.toString();
        document.getElementById('div17').style.color=divcolor15.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div13').style.backgroundColor=divcolor15.toString();
        document.getElementById('div13').style.color=divcolor15.toString();
    }
    
           
}
document.getElementById('div2').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor16=document.getElementById('div2').style.backgroundColor;
    document.getElementById('div2').style.backgroundColor='beige';
    document.getElementById('div2').style.color='beige';
    if(document.getElementById('div21').style.backgroundColor=='beige'){
        document.getElementById('div21').style.backgroundColor=divcolor16.toString();
        document.getElementById('div21').style.color=divcolor16.toString();
    }
    else if(document.getElementById('div5').style.backgroundColor=='beige'){
        document.getElementById('div5').style.backgroundColor=divcolor16.toString();
        document.getElementById('div5').style.color=divcolor16.toString();
    } 
    else if(document.getElementById('div22').style.backgroundColor=='beige'){
        document.getElementById('div22').style.backgroundColor=divcolor16.toString();
        document.getElementById('div22').style.color=divcolor16.toString();
    }
    else if(document.getElementById('div6').style.backgroundColor=='beige'){
        document.getElementById('div6').style.backgroundColor=divcolor16.toString();
        document.getElementById('div6').style.color=divcolor16.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div2').style.backgroundColor=divcolor16.toString();
        document.getElementById('div2').style.color=divcolor16.toString();
    }
    
}
document.getElementById('div6').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor17=document.getElementById('div6').style.backgroundColor;
    document.getElementById('div6').style.backgroundColor='beige';
    document.getElementById('div6').style.color='beige';
    if(document.getElementById('div2').style.backgroundColor=='beige'){
        document.getElementById('div2').style.backgroundColor=divcolor17.toString();
        document.getElementById('div2').style.color=divcolor17.toString();
    }
    else if(document.getElementById('div9').style.backgroundColor=='beige'){
        document.getElementById('div9').style.backgroundColor=divcolor17.toString();
        document.getElementById('div9').style.color=divcolor17.toString();
    } 
    else if(document.getElementById('div10').style.backgroundColor=='beige'){
        document.getElementById('div10').style.backgroundColor=divcolor17.toString();
        document.getElementById('div10').style.color=divcolor17.toString();
    }
    else if(document.getElementById('div3').style.backgroundColor=='beige'){
        document.getElementById('div3').style.backgroundColor=divcolor17.toString();
        document.getElementById('div3').style.color=divcolor17.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div6').style.backgroundColor=divcolor17.toString();
        document.getElementById('div6').style.color=divcolor17.toString();
    }
   
}
document.getElementById('div10').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor18=document.getElementById('div10').style.backgroundColor;
    document.getElementById('div10').style.backgroundColor='beige';
    document.getElementById('div10').style.color='beige';
    if(document.getElementById('div13').style.backgroundColor=='beige'){
        document.getElementById('div13').style.backgroundColor=divcolor18.toString();
        document.getElementById('div13').style.color=divcolor18.toString();
    }
    else if(document.getElementById('div7').style.backgroundColor=='beige'){
        document.getElementById('div7').style.backgroundColor=divcolor18.toString();
        document.getElementById('div7').style.color=divcolor18.toString();
    } 
    else if(document.getElementById('div14').style.backgroundColor=='beige'){
        document.getElementById('div14').style.backgroundColor=divcolor18.toString();
        document.getElementById('div14').style.color=divcolor18.toString();
    }
    else if(document.getElementById('div6').style.backgroundColor=='beige'){
        document.getElementById('div6').style.backgroundColor=divcolor18.toString();
        document.getElementById('div6').style.color=divcolor18.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div10').style.backgroundColor=divcolor18.toString();
        document.getElementById('div10').style.color=divcolor18.toString();
    } 
    
}
document.getElementById('div22').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor19=document.getElementById('div22').style.backgroundColor;
    document.getElementById('div22').style.backgroundColor='beige';
    document.getElementById('div22').style.color='beige';
    if(document.getElementById('div2').style.backgroundColor=='beige'){
        document.getElementById('div2').style.backgroundColor=divcolor19.toString();
        document.getElementById('div2').style.color=divcolor19.toString();
    }
    else if(document.getElementById('div3').style.backgroundColor=='beige'){
        document.getElementById('div3').style.backgroundColor=divcolor19.toString();
        document.getElementById('div3').style.color=divcolor19.toString();
    } 
    else if(document.getElementById('div18').style.backgroundColor=='beige'){
        document.getElementById('div18').style.backgroundColor=divcolor19.toString();
        document.getElementById('div18').style.color=divcolor19.toString();
    }
    else if(document.getElementById('div19').style.backgroundColor=='beige'){
        document.getElementById('div19').style.backgroundColor=divcolor19.toString();
        document.getElementById('div19').style.color=divcolor19.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div22').style.backgroundColor=divcolor19.toString();
        document.getElementById('div22').style.color=divcolor19.toString();
    }
    
}
document.getElementById('div3').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor20=document.getElementById('div3').style.backgroundColor;
    document.getElementById('div3').style.backgroundColor='beige';
    document.getElementById('div3').style.color='beige';
    if(document.getElementById('div23').style.backgroundColor=='beige'){
        document.getElementById('div23').style.backgroundColor=divcolor20.toString();
        document.getElementById('div23').style.color=divcolor20.toString();
    }
    else if(document.getElementById('div7').style.backgroundColor=='beige'){
        document.getElementById('div7').style.backgroundColor=divcolor20.toString();
        document.getElementById('div7').style.color=divcolor20.toString();
    } 
    else if(document.getElementById('div22').style.backgroundColor=='beige'){
        document.getElementById('div22').style.backgroundColor=divcolor20.toString();
        document.getElementById('div22').style.color=divcolor20.toString();
    }
    else if(document.getElementById('div6').style.backgroundColor=='beige'){
        document.getElementById('div6').style.backgroundColor=divcolor20.toString();
        document.getElementById('div6').style.color=divcolor20.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div3').style.backgroundColor=divcolor20.toString();
        document.getElementById('div3').style.color=divcolor20.toString();
    }
   
}
document.getElementById('div7').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor21=document.getElementById('div7').style.backgroundColor;
    document.getElementById('div7').style.backgroundColor='beige';
    document.getElementById('div7').style.color='beige';
    if(document.getElementById('div10').style.backgroundColor=='beige'){
        document.getElementById('div10').style.backgroundColor=divcolor21.toString();
        document.getElementById('div10').style.color=divcolor21.toString();
    }
    else if(document.getElementById('div3').style.backgroundColor=='beige'){
        document.getElementById('div3').style.backgroundColor=divcolor21.toString();
        document.getElementById('div3').style.color=divcolor21.toString();
    } 
    else if(document.getElementById('div11').style.backgroundColor=='beige'){
        document.getElementById('div11').style.backgroundColor=divcolor21.toString();
        document.getElementById('div11').style.color=divcolor21.toString();
    }
    else if(document.getElementById('div4').style.backgroundColor=='beige'){
        document.getElementById('div4').style.backgroundColor=divcolor21.toString();
        document.getElementById('div4').style.color=divcolor21.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div7').style.backgroundColor=divcolor21.toString();
        document.getElementById('div7').style.color=divcolor21.toString();
    }
    
}
document.getElementById('div19').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor22=document.getElementById('div19').style.backgroundColor;
    document.getElementById('div19').style.backgroundColor='beige';
    document.getElementById('div19').style.color='beige';
    if(document.getElementById('div23').style.backgroundColor=='beige'){
        document.getElementById('div23').style.backgroundColor=divcolor22.toString();
        document.getElementById('div23').style.color=divcolor22.toString();
    }
    else if(document.getElementById('div15').style.backgroundColor=='beige'){
        document.getElementById('div15').style.backgroundColor=divcolor22.toString();
        document.getElementById('div15').style.color=divcolor22.toString();
    } 
    else if(document.getElementById('div22').style.backgroundColor=='beige'){
        document.getElementById('div22').style.backgroundColor=divcolor22.toString();
        document.getElementById('div22').style.color=divcolor22.toString();
    }
    else if(document.getElementById('div16').style.backgroundColor=='beige'){
        document.getElementById('div16').style.backgroundColor=divcolor22.toString();
        document.getElementById('div16').style.color=divcolor22.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div19').style.backgroundColor=divcolor22.toString();
        document.getElementById('div19').style.color=divcolor22.toString();
    }
    
}
document.getElementById('div23').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor23=document.getElementById('div23').style.backgroundColor;
    document.getElementById('div23').style.backgroundColor='beige';
    document.getElementById('div23').style.color='beige';
    if(document.getElementById('div20').style.backgroundColor=='beige'){
        document.getElementById('div20').style.backgroundColor=divcolor23.toString();
        document.getElementById('div20').style.color=divcolor23.toString();
    }
    else if(document.getElementById('div3').style.backgroundColor=='beige'){
        document.getElementById('div3').style.backgroundColor=divcolor23.toString();
        document.getElementById('div3').style.color=divcolor23.toString();
    } 
    else if(document.getElementById('div19').style.backgroundColor=='beige'){
        document.getElementById('div19').style.backgroundColor=divcolor23.toString();
        document.getElementById('div19').style.color=divcolor23.toString();
    }
    else if(document.getElementById('div4').style.backgroundColor=='beige'){
        document.getElementById('div4').style.backgroundColor=divcolor23.toString();
        document.getElementById('div4').style.color=divcolor23.toString();
    } 
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div23').style.backgroundColor=divcolor23.toString();
        document.getElementById('div23').style.color=divcolor23.toString();
    } 
    
}
document.getElementById('div4').onclick=function(){
    m++;
    move.innerHTML=m;
    var divcolor24=document.getElementById('div4').style.backgroundColor;
    document.getElementById('div4').style.backgroundColor='beige';
    document.getElementById('div4').style.color='beige';
    if(document.getElementById('div23').style.backgroundColor=='beige'){
        document.getElementById('div23').style.backgroundColor=divcolor24.toString();
        document.getElementById('div23').style.color=divcolor24.toString();
    }
    else if(document.getElementById('div7').style.backgroundColor=='beige'){
        document.getElementById('div7').style.backgroundColor=divcolor24.toString();
        document.getElementById('div7').style.color=divcolor24.toString();
    } 
    else if(document.getElementById('div24').style.backgroundColor=='beige'){
        document.getElementById('div24').style.backgroundColor=divcolor24.toString();
        document.getElementById('div24').style.color=divcolor24.toString();
    }
    else if(document.getElementById('div8').style.backgroundColor=='beige'){
        document.getElementById('div8').style.backgroundColor=divcolor24.toString();
        document.getElementById('div8').style.color=divcolor24.toString();
    }  
    else{
        alert("YOU CAN'T DO THAT!!!");
        document.getElementById('div4').style.backgroundColor=divcolor24.toString();
        document.getElementById('div4').style.color=divcolor24.toString();
    }
    
}
function resett(){
    timer.innerHTML="00:00:00";
    stop=true;
    hr=0;
    min=0;
    sec=0;
    move.innerHTML="0";
    m=0;
}
