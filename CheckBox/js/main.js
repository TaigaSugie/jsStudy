'use strict'

{
    // function AllChecked() {
    //     var check = document.form.checkboxall.checked;

    //     document.form.elements['checkbox1'].checked=check;
    //     document.form.elements['checkbox2'].checked=check;
    //     document.form.elements['checkbox3'].checked=check;
    // }
    // var checkall = document.getElementById('checkboxall');
    // checkall.addEventListener('checked', () => {
    //     document.getElementsByName('checkbox').checkbox.addEventListener('checked');
    // })
    const checkAll = document.checkboxwrap.elements[0].checked;
    // form:checkboxwrapの最初のelementに
    checkAll() {
        // name = allにcheckが入ってたら
        if(document.all.elements.checked){
            // name = checkboxにcheckを入れる 
            document.checkbox.elements.checked = true;
        }else {
            // name = checkboxのcheckを外す
            document.checkbox.elements.checked = false;
        }
    }
}

// var checkall = document.getElementById('checkall');
//             checkall.addEventListener('click', function () {
//                 var checkboxes = document.getElementsByClassName('row_check');
//                 for (i in checkboxes) {
//                     checkboxes[i].checked = this.checked;
//                 }
//             });

