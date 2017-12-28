function start() 
{
    var today = new Date();
    var H = today.getHours();
    var M = today.getMinutes();
    var S = today.getSeconds();
    M = Format(M);
    S = Format(S);
   
    $("#clock").html(H + ":" + M + ":" + S); //get element by id The html() method is used to get the content of the selected element
    
    var t = setTimeout(start, 1000);//calling the function every 1000ms(1 sec)
}

function Format(i) //adding the zero if needed
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}