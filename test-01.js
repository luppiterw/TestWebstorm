//错误的写法
// hug(function (global) {

//以下写法均可
// (function (global) {
;(function (global) {
    // "use strict" //使用js严格模式检查，使语法更规范

    // window.hug = {
    //     createNew: function () {
    //         var aHug = {
    //
    //         }
    //         return aHug
    //     }
    // }
    window.hug = {

    };

    var hug = window.hug;
    hug.abc = "123";
    // hug.alertA = function (some) {
    //     alert(some)
    // }
    hug.alertA = function () {
        alert("123456")
    };

    // window.hug = hug
    // return hug
    return hug
}());