'use strict'

{
    // function AllChecked() {
    //     var check = document.form.checkboxall.checked;

    //     document.form.elements['checkbox1'].checked=check;
    //     document.form.elements['checkbox2'].checked=check;
    //     document.form.elements['checkbox3'].checked=check;
    // }
    var checkall = document.getElementById('checkall');
    checkall.addEventListener('click', function() {
        var checkbox = document.getElementsByName('checkbox');
        for(i in checkbox) {
            checkbox[i].checked = this.checked;
        }
    })
}

// var checkall = document.getElementById('checkall');
//             checkall.addEventListener('click', function () {
//                 var checkboxes = document.getElementsByClassName('row_check');
//                 for (i in checkboxes) {
//                     checkboxes[i].checked = this.checked;
//                 }
//             });

