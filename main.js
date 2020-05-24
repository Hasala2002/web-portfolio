var val =0;
function showmenu(){
    if (val==0){
        val=1;
    var menu =document.getElementById('menu');
    var elms = document.querySelectorAll("[id='menu1']");
    for(var i = 0; i < elms.length; i++) {
      elms[i].style.height='110px';
      elms[i].style.transition='1.2s';
      elms[i].style.opacity=1;
    }
    var elm = document.querySelectorAll("[id='icons']");
    for(var i = 0; i < elm.length; i++) {
      elm[i].style.transition='1.5s ease';
      elm[i].style.opacity=1;
      elm[i].style.fontSize='60px';
    }
    menu.style.height="400px";
    document.getElementById('btn').style.transform="rotate(90deg)";
    document.getElementById("btn").innerHTML = "clear";
    }
    else{
        val=0;
        document.getElementById("btn").innerHTML = "menu";
        var elms = document.querySelectorAll("[id='menu1']");
        for(var i = 0; i < elms.length; i++) {
            elms[i].style.height='0px';
            elms[i].style.transition='0.8s';
            elms[i].style.opacity=0;
          }
          var elm = document.querySelectorAll("[id='icons']");
          for(var i = 0; i < elm.length; i++) {
            elm[i].style.transition='0.5s ease';
            elm[i].style.fontSize='0px';
          }
        document.getElementById('btn').style.transform="rotate(360deg)";
        var menu =document.getElementById('menu');
        menu.style.height="0px";
    }
    // console.log("hello");
}