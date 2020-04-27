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
    function checkboxAll() {
        if(document.all.elements.checked){
            document.checkbox.elements.checked = true;
        }else {
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

