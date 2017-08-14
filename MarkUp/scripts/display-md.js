(function () {
    "use strict";

    var mdEditor = document.getElementById("editor-md");
    var mdDisplay = document.getElementById("display-md");


    // resetDisplayStyle();

// alert("mdEditor.style.width = " + mdEditor.style.width + " " + window.screen.width);

    window.onresize = function () {
        // mdDisplay.style.offsetStart = "10px";
        // resetDisplayStyle();
    };

    // var released = false;
    // mdEditor.onkeyup = function () {
    //     released = true;
    //     setTimeout(function () {
    //         if(released) {
    //             // alert(mdEditor.innerText);
    //             released = false;
    //
    //         }
    //     }, 1000);
    // };
    
    function resetDisplayStyle() {
        mdDisplay.style.width = document.documentElement.clientWidth / 2 + "px";
        mdDisplay.style.height = document.documentElement.clientHeight / 2 + "px";
        // mdDisplay.style['cssFloat' in mdDisplay.style?'cssFloat':'styleFloat']='right';
        // alert('cssFloat' in mdDisplay.style);
        return this;
    }

})();