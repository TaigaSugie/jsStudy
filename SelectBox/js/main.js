'use-strict'
{
    // // selectboxを取得
    // var selectBox = document.getElementsByName('selectBox');
    // var selectCon = document.getElementsByName('selectContent');
    // var contentLength = selectCon.length;
    // // style指定
    // // selectbox配下のoptionが選択されたら
    // selectCon.onclick = function(){
    //     for(var i = 0; i < contentLength; i++){
    //         if(selectCon.selected){
    //             // selectboxに表示
    //             selectBox.textContent = this.value;
    //         }
    //         // バツボタンを押したら
    //         if(){
    //             selectBox.textContent = this.value.disabled;
    //         }
    //     }
    // };
    // // selectboxから消す
    // selectCon.onclick();

    var box = document.getElementById('box');
    var listWrap = document.getElementsByClassName('listWrap');
    // listWrap.style.display = "none";

    box.onclick = function(){
        if(listWrap.style.display == 'none'){
            listWrap.style.display = 'block';
        }else{
            listWrap.style.display = 'none';
        }
    };
}