'use-strict'
{
    // formタグを読み込む
   const input = document.getElementById('post1');
   // 最初のinputタグを読み込む
   const post1 = document.getElementsByName('postNumber')[0];
   // ２番目のinputタグを読み込む
   const post2 = document.getElementsByName('postNumber')[1];

   //　inputにkeyを押し上げたときにlogkeyを実行
   input.onkeyup = logKey;

    function logKey(e) {
        // もしpost1で数字以外が押し込まれたら
        if(post1.value.match(/[^0-9]+/)){
            // redクラスを追加
            post1.classList.add('red');
        // 数字が押し込まれている状態なら
        }else{
            post1.classList.remove('red');
        }
        if(post2.value.match(/[^0-9]+/)){
            // redクラスを追加
            post2.classList.add('red');
        }else{
            // redクラスを取り除く
            post2.classList.remove('red');
        }

        // もしlog2で数字以外が押し込まれたらelse
        // log1で数字が3桁入力されたら
        if(post1.value.length >= post1.maxLength){
            post2.focus();
        }
        // log2にfocusする
    }
}
