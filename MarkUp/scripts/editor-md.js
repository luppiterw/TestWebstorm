
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

                // mdDisplay.innerHTML = mdEditor.innerHTML;
                // mdDisplay.innerText = mdEditor.innerText;
                // mdDisplay.innerHTML = mdEditor.innerText.split(/\n/).length;
                var textArray = mdEditor.innerText.split(/\n/);
                // mdDisplay.innerHTML.clear();
                mdDisplay.innerHTML = "";
                for(var i in textArray) {
                    mdDisplay.innerHTML += ("<div>" + textArray[i] + "</div>");
                }

                // mdDisplay.innerHTML = "<p>" + mdEditor.innerText + "</p>";
                // mdDisplay.innerHTML += "<br>"
                // mdDisplay.innerHTML += "<p>another line</p>"
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
