//create a configure context item for 'page' context type
alert("haha");
console.log("haha");
var targetName="google";
var targetUrl="http://www.google.com";
function optionsOnClick(info, tab){
    chrome.tabs.create({"url":targetUrl});
}
var id = chrome.contextMenus.create({"title": "配置'L翻译'", "contexts":["page"],
    "onclick": optionsOnClick});

//chrome.contextMenus.onClicked.addListener(optionsOnClick);
