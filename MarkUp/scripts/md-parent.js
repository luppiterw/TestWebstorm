(function () {
    "use strict";

    var mdParent = document.getElementById("md-parent");

    resetMdParentStyle();
    window.onresize = function () {
        resetMdParentStyle();
    };

    function resetMdParentStyle() {
        mdParent.style.width = document.documentElement.clientWidth - 40 + "px";
        mdParent.style.height = document.documentElement.clientHeight  + "px";
        mdParent.style.paddingTop = "4px";
        // alert(mdParent.style.width + " "  + mdParent.style.height + " " + document.documentElement.clientHeight);
        return this;
    }

})();