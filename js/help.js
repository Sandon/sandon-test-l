(function($){
    $(function(){
        function searchGA(){
            var adsIfrs=[];
            var iframes=document.getElementsByTagName("IFRAME");
            for(var i=0;i!=iframes.length;i++){
                var ifrWin=iframes[i].contentWindow;
                var secLevelIfrs=ifrWin.document.getElementsByTagName("IFRAME");
                for(var j=0;j!=secLevelIfrs.length;j++){
                    //console.log(secLevelIfrs[j]);
                    var thisIfr=secLevelIfrs[j];
                    var id=thisIfr.getAttribute("id");
                    var name=thisIfr.getAttribute("name");
                    var pattern=/^.*google_ads_frame.*$/gi;

                    if(pattern.test(id)||pattern.test(name)){
                        adsIfrs.push(thisIfr);
                        thisIfr.setAttribute("id","");
                        thisIfr.setAttribute("name","");
                        thisIfr.setAttribute("src","http://www.baidu.com");
                    }
                }
            }



            return adsIfrs;
        }
        var gAds=searchGA();
        console.log(gAds);
    });
})(jQuery);
