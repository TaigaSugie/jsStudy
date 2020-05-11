'use strict'

{
    // formタグを読み込む
    const wrap = document.getElementById('checkboxwrap');
    // all checkを読み込む
    const All = document.checkboxwrap.all.checked;
    // 他のcheckboxを読み込む
    const box = document.checkboxwrap.checkbox.checked;
    // もしall checkにcheckが入ったら
    function allCheck(){
    if(All === true){
        // 他のcheckboxにcheckを入れる
        box === true;
    }else{
        box === false;
    }
    }

    allCheck();
}

