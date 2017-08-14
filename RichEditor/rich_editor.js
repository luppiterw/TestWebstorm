var RE = {};

RE.currentSelection = {
    "startContainer": 0,
    "startOffset": 0,
    "endContainer": 0,
    "endOffset": 0};


RE.editor = document.getElementById('editor');

document.addEventListener("selectionchange", function() { RE.backuprange(); });

// Initializations
RE.callback = function() {
    window.location.href = "re-callback://" + encodeURI(RE.getHtml());
}

RE.setHtml = function(contents) {
//    alert(decodeURIComponent(contents.replace(/\+/g, '%20')));
    RE.editor.innerHTML = decodeURIComponent(contents.replace(/\+/g, '%20'));
}

RE.getHtml = function() {
    return RE.editor.innerHTML;
}

RE.getText = function() {
    return RE.editor.innerText;
}

RE.setBaseTextColor = function(color) {
    RE.editor.style.color  = color;
}

RE.setBaseFontSize = function(size) {
    RE.editor.style.fontSize = size;
}

RE.setPadding = function(left, top, right, bottom) {
  RE.editor.style.paddingLeft = left;
  RE.editor.style.paddingTop = top;
  RE.editor.style.paddingRight = right;
  RE.editor.style.paddingBottom = bottom;
}

RE.setBackgroundColor = function(color) {
    document.body.style.backgroundColor = color;
}

RE.setBackgroundImage = function(image) {
    RE.editor.style.backgroundImage = image;
}

RE.setWidth = function(size) {
    RE.editor.style.minWidth = size;
}

RE.setHeight = function(size) {
    document.body.style.minHeight = size;

}

RE.setTextAlign = function(align) {
    RE.editor.style.textAlign = align;
}

RE.setVerticalAlign = function(align) {
    RE.editor.style.verticalAlign = align;
}

RE.setPlaceholder = function(placeholder) {
    RE.editor.setAttribute("placeholder", placeholder);
}

RE.undo = function() {
    document.execCommand('undo', false, null);
}

RE.redo = function() {
    document.execCommand('redo', false, null);
}

RE.setBold = function() {
    document.execCommand('bold', false, null);
}

RE.setItalic = function() {
    document.execCommand('italic', false, null);
}

RE.setSubscript = function() {
    document.execCommand('subscript', false, null);
}

RE.setSuperscript = function() {
    document.execCommand('superscript', false, null);
}

RE.setStrikeThrough = function() {
    document.execCommand('strikeThrough', false, null);
}

RE.setUnderline = function() {
    document.execCommand('underline', false, null);
}

RE.setTextColor = function(color) {
    RE.restorerange();
    document.execCommand("styleWithCSS", null, true);
    document.execCommand('foreColor', false, color);
    document.execCommand("styleWithCSS", null, false);
}

RE.setTextBackgroundColor = function(color) {
    RE.restorerange();
    document.execCommand("styleWithCSS", null, true);
    document.execCommand('hiliteColor', false, color);
    document.execCommand("styleWithCSS", null, false);
}

RE.setHeading = function(heading) {
    document.execCommand('formatBlock', false, '<h'+heading+'>');
}

RE.setIndent = function() {
    document.execCommand('indent', false, null);
}

RE.setOutdent = function() {
    document.execCommand('outdent', false, null);
}

RE.setJustifyLeft = function() {
    document.execCommand('justifyLeft', false, null);
}

RE.setJustifyCenter = function() {
    document.execCommand('justifyCenter', false, null);
}

RE.setJustifyRight = function() {
    document.execCommand('justifyRight', false, null);
}

RE.setBlockquote = function() {
    document.execCommand('formatBlock', false, '<blockquote>');
}

RE.insertImage = function(url, alt) {
    var html = '<img src="' + url + '" alt="' + alt + '" />';
    RE.insertHTML(html);
}

RE.insertHTML = function(html) {
    RE.restorerange();
    document.execCommand('insertHTML', false, html);
}

RE.insertText = function(text){
    RE.restorerange();
    document.execCommand("insertText", false, decodeURIComponent(text.replace(/\+/g, '%20')));
}

RE.insertLink = function(url, title) {
    RE.restorerange();
    var sel = document.getSelection();
    if (sel.toString().length != 0) {
        if (sel.rangeCount) {

            var el = document.createElement("a");
            el.setAttribute("href", url);
            el.setAttribute("title", title);

            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(el);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    RE.callback();
}

RE.prepareInsert = function() {
    RE.backuprange();
}

RE.backuprange = function(){
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      RE.currentSelection = {
          "startContainer": range.startContainer,
          "startOffset": range.startOffset,
          "endContainer": range.endContainer,
          "endOffset": range.endOffset};
    }
}

RE.restorerange = function(){
    var selection = window.getSelection();
    selection.removeAllRanges();
    var range = document.createRange();
    range.setStart(RE.currentSelection.startContainer, RE.currentSelection.startOffset);
    range.setEnd(RE.currentSelection.endContainer, RE.currentSelection.endOffset);
    selection.addRange(range);
}

RE.enabledEditingItems = function(e) {
//    alert("click");
    var items = [];
    if (document.queryCommandState('bold')) {
        items.push('bold');
    }
    if (document.queryCommandState('italic')) {
        items.push('italic');
    }
    if (document.queryCommandState('subscript')) {
        items.push('subscript');
    }
    if (document.queryCommandState('superscript')) {
        items.push('superscript');
    }
    if (document.queryCommandState('strikeThrough')) {
        items.push('strikeThrough');
    }
    if (document.queryCommandState('underline')) {
        items.push('underline');
    }
    if (document.queryCommandState('insertOrderedList')) {
        items.push('orderedList');
    }
    if (document.queryCommandState('insertUnorderedList')) {
        items.push('unorderedList');
    }
    if (document.queryCommandState('justifyCenter')) {
        items.push('justifyCenter');
    }
    if (document.queryCommandState('justifyFull')) {
        items.push('justifyFull');
    }
    if (document.queryCommandState('justifyLeft')) {
        items.push('justifyLeft');
    }
    if (document.queryCommandState('justifyRight')) {
        items.push('justifyRight');
    }
    if (document.queryCommandState('insertHorizontalRule')) {
        items.push('horizontalRule');
    }
    if (document.queryCommandState('paste')) {
        items.push('paste');
    }
    if (document.queryCommandState(''))
    var formatBlock = document.queryCommandValue('formatBlock');
    if (formatBlock.length > 0) {
        items.push(formatBlock);
    }
//    alert(document.selectionStart);
//
//    alert(e.clientY);
//    alert(RE.editor.selectionStart);
//    alert(window.getSelection().anchorOffset);
//    alert(window.scrollY);
//    alert(window.getSelection().rangeCount);
//    alert(window.getSelection().anchorNode);
//    alert(window.getSelection().getRangeAt(0));
//    window.getSelection().focusOffset;
//    alert(e.offsetLeft);
//    alert(e.offsetTop);
    window.location.href = "re-state://" + encodeURI(items.join(','));
//    alert(RE.editor.clientHeight);
}

RE.focus = function() {
    var range = document.createRange();
    range.selectNodeContents(RE.editor);
    range.collapse(false);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    RE.editor.focus();
}

RE.blurFocus = function() {
    RE.editor.blur();
}

RE.removeFormat = function() {
    execCommand('removeFormat', false, null);
}
RE.reLoadText = function()
{
    window.RichEditor.regetHTMLContent(RE.getHtml());
}
RE.cursorPosition = function() {
//    alert(window.scrollY);
//    alert(RE.editor.scrollTop);
//    RE.editor.scrollTop = window.scrollY;
//    var cursorPos = RE.editor.selectionStart;
    var ed = document.getElementById('editor');
    var pos = -1;
//    pos = ed.selection().start;//ed.selectionStart;
//    alert(navigator.userAgent.indexOf("MSIE"));

//    alert(RE.editor.selectionStart);
//    alert(document.selection);
//    RE.editor.selectionStart = 2;
//    RE.editor.selectionEnd = 4;
//    alert(RE.editor.selectionStart);
//    alert(window.event.clientY);
//    window.RichEditor.getCursorPosition(window.getSelection().anchorOffset);
    var cursor = 0; // 光标位置
//    RE.insertHTML("sssss");
//    alert(RE.editor.getSelection());
//    alert(1);
//    RE.focus();
//    var rng = document.createRange();
//    rng.selectNodeContents(RE.editor);
//    alert(rng);
//    alert(RE.editor.offsetTop);


//    var range = document.createRange();
//    alert(2);
//    var srcele = range.parentElement();//获取到当前元素
//    alert(3);
//    var copy = document.body.createTextRange();
//    alert(4);
//    copy.moveToElementText(srcele);
//    for (cursor = 0; copy.compareEndPoints("StartToStart", range) < 0; cursor++)
//    {
//        alert(5+cursor);
//        copy.moveStart("character", 1);//改变光标位置，实际上我们是在记录cursor的数量.
//    }
//
//    alert(6);

}

//var cursor = 0; // 光标位置
//document.onselectionchange = function () {
//    alert("document.onselectionchange");
//    alert(window.getSelection().anchorOffset);
//    alert(window.getSelection().rangeCount);
//    var range = document.selection.createRange();
//    alert("document.onselectionchange 1");
//    var srcele = range.parentElement();//获取到当前元素
//    alert("document.onselectionchange 2");
//    var copy = document.body.createTextRange();
//    alert("document.onselectionchange 3");
//    copy.moveToElementText(srcele);
//    for (cursor = 0; copy.compareEndPoints("StartToStart", range) < 0; cursor++) {
//        copy.moveStart("character", 1);//改变光标位置，实际上我们是在记录cursor的数量.
//    }
//    alert("document.onselectionchange 4");
//    alert(cursor);
//}

RE.testFun = function(){
//    window.TestJS.printTest("22222222");
//    window.TedstJS.printTest("111111111111111111");
//    window.TestJS.getText(RE.getText());
//    var properties = "";
//    for(var i in RE.editor)
//    {
//        properties += "s=[" + i + "]\n";
//    }
//    var lines = RE.getText().split(/\n/g);
//    window.TestJS.getSelection(properties);//(RE.editor.length);
//    var test = "******\n";
//    for(i = 0; i < lines.length; i++ )
//    {
//        test += i + " " + lines[i] + "\n"
//    }
//    test += "\n";
//    G("text_linenumber").style.height = RE.editor.clientHeight + "px";
//    window.TestJS.getSelection(test);//(lines.length);
//    alert(doucment.body.style.minHeight);

//    alert(RE.editor.clientHeight);
//    RE.setUnderline();
//    autoScroll();

}
RE.touchMove = function()
{
    window.location.href = "re-touchmove://" + encodeURI(RE.getHtml());
}
RE.touchFun = function()
{
    window.location.href = "re-touch://";
}
window.onscroll = function(e)
{
    window.location.href = "re-scroll://";
}

//RE.onScroll = function()
//{
//    window.RichEditor.getCursorPosition(RE.editor.scrollTop);
////    alert("RE.onScroll");
//    window.location.href = "re-scroll://";
//}

// Event Listeners
RE.editor.addEventListener("input", RE.callback);
//RE.editor.addEventListener("paste", RE.callback);
RE.editor.addEventListener("keyup", function(e)
{
    var KEY_LEFT = 37,KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40;
    if (e.which == KEY_LEFT || e.which == KEY_RIGHT ||
        e.which == KEY_UP || e.which == KEY_DOWN)
        {
        RE.enabledEditingItems(e);
        }
});
RE.editor.addEventListener("click", RE.enabledEditingItems);
RE.editor.addEventListener("scroll", RE.onScroll);

//RE.editor.addEventListener("touchstart", RE.touchFun);
//RE.editor.addEventListener("touchmove", RE.touchFun);
//RE.editor.addEventListener("touchend", RE.touchFun);
//RE.editor.addEventListener("mousemove", RE.touchFun);
//RE.editor.addEventListener("touchcancel",RE.touchFun);


