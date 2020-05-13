'use-strict'
{
    // selectboxを取得
    var selectBox = document.getElementsByName('selectBox');
    var selectCon = document.getElementsByName('selectContent');
    var contentLength = selectCon.length;
    // styleが
    // selectbox配下のoptionが選択されたら
    selectCon.onclick = function(){
        for(var i = 0; i < contentLength; i++){
            if(selectCon.selected){
                selectBox.textContent = this.value;
            }else{
                selectBox.textContent = this.value.disabled;
            }
        }
    };
    // selectboxに表示
    // バツボタンを押したら
    // selectboxから消す
    selectCon.onclick();
}