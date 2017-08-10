// function inter() {
//     var inter = document.getElementById("inner")
//     if(inter.innerHTML === "") {
//            // alert("1")
//         inter.innerHTML="显示的文字"
//     } else {
//            // alert("2")
//
//         inter.innerHTML=""
//     }
// }

// 如下写法外部无法直接引用inter()方法
// (function inter() {
//     var inter2 = document.getElementById("inner")
//     var jqueryInter = $("#inner")
//     var inter = jqueryInter.get()
//     alert(inter2.toString() + " " + inter.toString())
//
//     if(inter.innerHTML === "") {
//         // alert("1")
//         inter.innerHTML="显示的文字"
//     } else {
//         // alert("2")
//
//         inter.innerHTML=""
//     }
//     // $.inter = this
// })();


$(function () {
    $.anotherInter = function () {
        // var inter = document.getElementById("inner")
        // alert(inter.toString())
        var jqueryInter = $('#inner')       ///< jquery对象
        var inter = jqueryInter.get(0)      ///< 需要从jquery对象中提取Element
        // alert(inter2.toString() + " " + inter.toString())

        if(inter.innerHTML === "") {
            // alert("1")
            inter.innerHTML="显示的文字"
        } else {
            // alert("2")

            inter.innerHTML=""
        }
    };

    var popup = function () {
        alert("something")
        // return popup
    };
    window.popup = popup;

});