'use strict'

{
    // id=allを取得
    var ck = document.getElementById('all');

    // allをクリック
    ck.onclick = function(){
        // もしallにチェックが入ったら
        if(document.getElementById('all').checked){
            // 他のチェックボックスにチェックを入れる
            document.getElementById('box').checked = true;
            document.getElementById('box1').checked = true;
            document.getElementById('box2').checked = true;
        // allにチェックが入らなかったら
        }else{
            // 他のチェックボックスのチェックを抜く
            document.getElementById('box').checked = false;
            document.getElementById('box1').checked = false;
            document.getElementById('box2').checked = false;
        }
    };
    // allをクリックしたらイベント発動
    ck.onclick();
}

