'use-strict'
{
    const first = document.getElementById('first');
    //　最初の3桁入力フォーム
    const second = document.getElementById('seccond');
    // 4桁入力フォーム
    const postNumber = [ first, second ];
    //　入力フォームまとめ

    function number() {
        //　もし数字以外が入力されたら
        if(document.forms.first.first === isNaN('abc')){
            //　赤い背景を表示して警告
            first.classList.add('red');
        }else {
            // 赤い背景クラスを外す
            first.classList.remove('red');
        }
    }
    number();
}