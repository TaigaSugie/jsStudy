'use strict'

{
    // all checkを読み込む
    // const allCheck = document.getElementById('all');
    // 他のcheckboxを読み込む
    // const boxCheck = document.getElementById('box');
    // All checkがクリックされた時
    // allCheck.onchange = function(){
        // もしall checkにcheckが入ったら
        // if(allCheck.checked){
        //     // 他のcheckboxにcheckを入れる
        //     alert();
        //     boxCheck.checked;
        // }else{
        //     boxCheck.checked = false;
        // }
    // }
    // allCheck.onchange = null;
    document.getElementById('all').onchange = ck();

    function ck(){
    if(document.getElementById('all').checked){
        alert();
        document.getElementById('box').checked;
    }else{
        document.getElementById('box').checked = false;
    }
}
}

