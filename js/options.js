//save options to localStorage
function save_options(){
    var select=document.getElementById("selects");
    localStorage["selected_engine"]=select.children[select.selectedIndex].value;
    alert("保存成功");
}

//restore saved option from localStorage
function restore_options(){
    var engine=localStorage["selected_engine"];
    if(!engine)
        return;

    var select=document.getElementById("selects");
    for(var i=0;i!=select.children.length;i++){
        if(select.children[i].value==engine){
            select.children[i].selected="true";
            break;
        }
    }
}
document.addEventListener("DOMContentLoaded",restore_options);
document.getElementById("save-btn").addEventListener("click",save_options);
