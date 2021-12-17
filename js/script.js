document.getElementById('demo').onkeypress = function(event){
    if (event.key==Number(event.key) || event.key==String("+") || event.key==String("*") || event.key==String("/") || event.key==String("-") ||event.key==String("."))
        return true;
    else
        return false;
}

function my_fun(){
  let value = document.getElementById("demo").value;
  value = eval(value);
  document.getElementById("demo").value = value;
}

function click_fun(x){
  document.getElementById("demo").value = document.getElementById("demo").value+x;
}
function clean(){
  document.getElementById("demo").value="";
}
function one(){
  var sm = document.getElementById("demo").value;
  sm = sm.substring(0,sm.length-1);
  document.getElementById("demo").value= sm;
}
