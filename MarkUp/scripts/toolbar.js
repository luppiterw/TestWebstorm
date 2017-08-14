
(function () {
    var toolbar = document.getElementById("toolbar");

    var resetToolbarStyle = function () {
        toolbar.style.width = document.documentElement.clientWidth + 4  + "px";
    };

    resetToolbarStyle();
    window.onresize = function () {
        resetToolbarStyle();
    };



})();