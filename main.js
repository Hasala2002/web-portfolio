function test(){
    alert("works");
}

function nav1in(btn){
//   btn=document.getElementById("navicon1");
  btn.innerHTML='<span class="descript">HOME</span>';
//   <i class="material-icons-outlined matcss">home</i>
}

function nav1out(btn){
    // btn=document.getElementById("navicon1");
    btn.innerHTML='<i class="material-icons-outlined matcss">home</i>';
  }