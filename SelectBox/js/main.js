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
    var listWrap = document.getElementById('listBox');
    var choose = document.getElementsByName('selectContent');
    // listWrap.style.display = "none";

    box.onclick = function(){
        if(listWrap.style.display == 'none'){
            listWrap.style.display = 'block';
        }else{
            listWrap.style.display = 'none';
        }
    };

    choose.onclick = function(){
        for(i = 0; i <=choose.length; i++){
            if(!choose[i].hasChildNodes[i]){
                const div1 = document.createElement('div');
                const text1 = document.createTextNode(i.value);
                div1.appendChild(text1);
                box.appendChild(div1);
            }
            if(div1(this).onclick){
                div1(this).removeChild(div1(this));
            }
        }
    }


}