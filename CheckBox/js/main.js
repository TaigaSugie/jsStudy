'use strict'

{
    var ck = document.getElementById('all');

    ck.onclick = function(){
        if(document.getElementById('all').checked){
            document.getElementById('box').checked = true;
            document.getElementById('box1').checked = true;
            document.getElementById('box2').checked = true;
        }else{
            document.getElementById('box').checked = false;
            document.getElementById('box1').checked = false;
            document.getElementById('box2').checked = false;
        }
    };
    ck.onclick();
}

