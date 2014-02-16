//create a configure context item for 'page' context type
var queryText="";
var choosenEngine="";
if(!localStorage["selected_engine"]){
    localStorage["selected_engine"]="google";
}
choosenEngine=localStorage["selected_engine"];
var engines={
    "google":{
        "name":"google翻译",
        "siteUrl":"http://translate.google.cn/",
        "getSearchUrl":function(queryText){
            return encodeURI("http://translate.google.cn/#en/zh-CN/"+queryText);
        }
    },
    "baidu":{
        "name":"百度翻译",
        "siteUrl":"http://fanyi.baidu.com/#auto/zh/",
        "getSearchUrl":function(queryText){
            return encodeURI("http://fanyi.baidu.com/#auto/zh/"+queryText);
        }
    },
    "jinshan":{
        "name":"金山词霸",
        "siteUrl":"http://www.iciba.com/",
        "getSearchUrl":function(queryText){
            return "http://www.iciba.com/"+queryText;
        }
    }
}


function optionsOnClick(info, tab){
    chrome.tabs.create({"url":"options.html"});
}
var configItem = chrome.contextMenus.create({"title": "配置'翻译汇'", "contexts":["page"],
    "onclick": optionsOnClick});

function transOnClick(info,tab){
    chrome.tabs.create({"url":engines[choosenEngine].getSearchUrl(queryText)});
}
var transItem = chrome.contextMenus.create({"title": "用翻译汇查询", "contexts":["selection"],
    "onclick": transOnClick});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(choosenEngine!=localStorage["selected_engine"])
            choosenEngine=localStorage["selected_engine"];
        queryText=request.text;
        chrome.contextMenus.update(transItem, {"title":'用'+engines[choosenEngine].name+'查询"'+queryText+'"'});
    }
);