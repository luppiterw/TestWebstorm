
(function () {
    "use strict";

    var mdEditor = document.getElementById("editor-md");
    var mdDisplay = document.getElementById("display-md");

    // resetEditorStyle();
// alert("mdEditor.style.width = " + mdEditor.style.width + " " + window.screen.width);

    window.onresize = function () {
        // resetEditorStyle();
    };


    var released = false;
    mdEditor.onkeyup = function () {
        released = true;
        setTimeout(function () {
            if(released) {
                // alert(mdEditor.innerText);
                // mdDisplay.innerText = mdEditor.innerText;
                released = false;

                mdDisplay.innerHTML = mdEditor.innerHTML;
                // alert(mdDisplay.innerText);
            }
        }, 1000);
    };



    mdEditor.onscroll = function () {
      // alert("onscroll " + mdEditor.scrollTop);
      // mdDisplay.scrollT
        // console.log(mdEditor.scrollTop);
    };






    function resetEditorStyle() {
        mdEditor.style.width = document.documentElement.clientWidth / 2 + "px";
        mdEditor.style.height = document.documentElement.clientHeight / 2 + "px";
        // mdEditor.style['cssFloat' in mdEditor.style?'cssFloat':'styleFloat']='left';
        // alert('cssFloat' in mdEditor.style);
        return this;
    }
})();
