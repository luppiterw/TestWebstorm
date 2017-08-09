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
(function inter() {
    var inter = document.getElementById("inner")
    if(inter.innerHTML === "") {
        // alert("1")
        inter.innerHTML="显示的文字"
    } else {
        // alert("2")

        inter.innerHTML=""
    }
})();
