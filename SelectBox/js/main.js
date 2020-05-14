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
                // selectboxに表示
                selectBox.textContent = this.value;
            }
            // バツボタンを押したら
            if(){
                selectBox.textContent = this.value.disabled;
            }
        }
    };
    // selectboxから消す
    selectCon.onclick();
}