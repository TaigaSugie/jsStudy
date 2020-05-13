'use strict'

{
    // id=allを取得
    var ck = document.getElementById('all');
    // name=checkBoxを取得
    var ckBox = document.getElementsByName('checkBox');
    // ckBoxの数を取得
    var ckLength = ckBox.length;

    // allをクリック
    ck.onclick = function(){
        for(var i = 0 ; i < ckLength; i++){
            // もしallにチェックが入ったら
            if(ck.checked){
                // 他のチェックボックスにチェックを入れる
                ckBox.item(i).checked = true;
            // allにチェックが入らなかったら
            }else{
                // 他のチェックボックスのチェックを抜く
                ckBox.item(i).checked = false;
            }
        }
    };
    // allをクリックしたらイベント発動
    ck.onclick();
}

