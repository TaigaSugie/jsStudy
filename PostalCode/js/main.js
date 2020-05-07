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
        // もしlog2で数字以外が押し込まれたら
        }else if(log2.value.match(/[^0-9]+/)){
            // redクラスを追加
            second.classList.add('red');
        // 数字が押し込まれている状態なら
        }else{
            // redクラスを取り除く
            first.classList.remove('red');
            second.classList.remove('red');
        }
    }
}
