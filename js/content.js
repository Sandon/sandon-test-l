//get selected text
function getSelectionText() {
    if(window.getSelection) {
        return window.getSelection().toString();
    } else if(document.selection && document.selection.createRange) {
        return document.selection.createRange().text;
    }
    return '';
}
var newSele="", oldSele="";
function getNowSeletion(){
    oldSele=newSele;
    newSele=getSelectionText();
    chrome.runtime.sendMessage({text: newSele}, function(response) {
        console.log(response.farewell);
    });
}
window.addEventListener("mouseup",getNowSeletion);
