'use-strict'
{
    // formタグを読み込む
   const input = document.getElementById('post1');
   // 最初のinputタグを読み込む
   const log1 = document.getElementById('first');
   // ２番目のinputタグを読み込む
   const log2 = document.getElementById('second');

   //　inputにkeyを押し上げたときにlogkeyを実行
   input.onkeyup = logKey;

    function logKey(e) {
        // もしlog1で数字以外が押し込まれたら
        if(log1.value.match(/[^0-9]+/)){
            // redクラスを追加
            first.classList.add('red');
        // 数字が押し込まれている状態なら
        }else{
            first.classList.remove('red');
        }
        if(log2.value.match(/[^0-9]+/)){
            // redクラスを追加
            second.classList.add('red');
        }else{
            // redクラスを取り除く
            second.classList.remove('red');
        }

        // もしlog2で数字以外が押し込まれたらelse
        // log1で数字が3桁入力されたら
        if(log1.value.length >= log1.maxLength){
            second.focus();
        }
        // log2にfocusする
    }
}
