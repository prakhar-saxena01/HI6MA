function readingEvents(){function e(){swipeTime=!0}eBook.addEventListener("click",nextPage)
var t=new Hammer(eBook)
swipeTime=!0,swipeInt=2e3,t.on("swipe",function(t){if(swipeTime){if(4==t.direction){nextPage(),swipeTime=!1,clearInterval(r)
var r=setInterval(e,swipeInt)}if(2==t.direction){prevPage(),swipeTime=!1,clearInterval(r)
var r=setInterval(e,swipeInt)}}})
setInterval(e,swipeInt)}function endOfChapter(){HI6MA.readingBook=!1,HI6MA.openChapter=!0,eBook.setAttribute("style","transform: translateX(-30px)")}function loadBook(){location.hash=HI6MA.series+"_"+HI6MA.chapter,totalPages=1,page=1,eBook.innerHTML="",leftM=0,imgSrc="i/"+HI6MA.series+"/"+HI6MA.chapter_full+"/"+pformat(page)+".png"
var e=document.createElement("img")
e.setAttribute("src",imgSrc),e.setAttribute("id","pagePNG"+page),e.setAttribute("onerror","removeBroken(this)"),eBook.appendChild(e),imgSrc="i/"+HI6MA.series+"/"+HI6MA.chapter_full+"/"+pformat(page)+".jpg","/"+pformat(HI6MA.currentPage)+".jpg"
var e=document.createElement("img")
e.setAttribute("src",imgSrc),e.setAttribute("id","pageJPG"+page),e.setAttribute("onerror","removeBroken(this)"),eBook.appendChild(e),document.querySelector("#pagePNG1").classList.add("currentPage"),document.querySelector("#pageJPG1").classList.add("currentPage"),loadImg(page)}function loadImg(e){document.querySelector("#pagePNG"+e).onload=function(){appendImg(e)},document.querySelector("#pageJPG"+e).onload=function(){appendImg(e)}}function appendImg(e){e++,imgSrc="i/"+HI6MA.series+"/"+HI6MA.chapter_full+"/"+pformat(e)+".png"
var t=document.createElement("img")
t.setAttribute("src",imgSrc),t.setAttribute("id","pagePNG"+e),t.setAttribute("onerror","removeBroken(this)"),eBook.appendChild(t),imgSrc="i/"+HI6MA.series+"/"+HI6MA.chapter_full+"/"+pformat(e)+".jpg"
var t=document.createElement("img")
t.setAttribute("src",imgSrc),t.setAttribute("id","pageJPG"+e),t.setAttribute("onerror","removeBroken(this)"),eBook.appendChild(t),HI6MA.readingBook&&loadImg(e),totalPages++,title(HI6MA.currentPage,totalPages),readingEvents()}function removeBroken(e){try{e.parentNode.removeChild(e)}catch(t){}}function pformat(e){return 10>e?"00"+e:100>e?"0"+e:e}function checkKey(e){e=e||window.event,eHTML.classList.contains("viewing")&&("37"==e.keyCode?nextPage():"39"==e.keyCode&&prevPage())}function title(e,t){document.title="["+e+"/"+t+"] "+HI6MA.series_full+" | "+document.domain}function truncate(e){return e.replace(/\W/g,"")}var sheet=document.styleSheets[document.styleSheets.length-1]
sheet.insertRule("#book img{max-width:"+(window.innerWidth-30)+"px;}",1),sheet.insertRule("@media (orientation: portrait), (max-width: 750px){#book img{max-width:"+window.innerWidth+"px !important;}}",1)
var leftM=0,eHeader=document.getElementsByTagName("header")[0],eSidebar=document.getElementsByTagName("sidebar")[0],eBack=document.getElementById("back"),eSeries=document.getElementById("series"),eBook=document.getElementById("book"),eTitle=document.getElementById("title"),eHeadTitle=document.getElementById("headTitle"),eHTML=document.querySelector("html"),eFooter=document.getElementsByTagName("footer")[0],domain=document.domain
"www"===domain.substr(0,3)&&(domain=domain.substr(4,domain.length)),series="",chapter="",series_r="",chapter_r=""
var seriesList=document.querySelectorAll("#series .book"),URL=document.URL
if(URL=URL.split("#"),void 0!=URL[1]&&URL[1].length>2){"/"==URL[1].substr(0,1)&&(URL[1]=URL[1].substr(1)),URL[1]=URL[1].split("#"),URL[1]=URL[1][URL[1].length-1]
var urlX=URL[1].split("_")
HI6MA.series=urlX[0],HI6MA.chapter=urlX[1],HI6MA.readingBook=!0,HI6MA.openChapter=!1,HI6MA.showSeries=!1,eBook.setAttribute("style","transform: translateX(0px)")
for(var i=0;i<HI6MA.booklist.length;i++)if(HI6MA.booklist[i].folder==HI6MA.series){HI6MA.series_full=HI6MA.booklist[i].name,HI6MA.loadedChapters=HI6MA.booklist[i].chapters
for(var j=0;j<HI6MA.booklist[i].chapters.length;j++)truncate(HI6MA.booklist[i].chapters[j])==HI6MA.chapter&&(HI6MA.chapter_full=HI6MA.booklist[i].chapters[j])}leftM=0,HI6MA.currentPage=1,loadBook()}var nextPage=function(e){window.scrollTo(0,0)
try{eBook.removeEventListener("click",nextPage),leftM+=document.querySelector(".currentPage").offsetWidth
try{document.querySelector("#pagePNG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}try{document.querySelector("#pageJPG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}HI6MA.currentPage++
try{document.querySelector("#pagePNG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}try{document.querySelector("#pageJPG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}eBook.addEventListener("click",nextPage),eBook.setAttribute("style","transform: translateX("+leftM+"px)")}catch(e){endOfChapter()}title(HI6MA.currentPage,totalPages)},prevPage=function(){if(HI6MA.currentPage>1){try{eBook.removeEventListener("click",nextPage),leftM-=document.querySelector(".currentPage").previousElementSibling.offsetWidth
try{document.querySelector("#pagePNG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}try{document.querySelector("#pageJPG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}HI6MA.currentPage--
try{document.querySelector("#pagePNG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}try{document.querySelector("#pageJPG"+HI6MA.currentPage).classList.toggle("currentPage")}catch(e){}eBook.addEventListener("click",nextPage),eBook.setAttribute("style","transform: translateX("+leftM+"px)")}catch(e){}title(HI6MA.currentPage,totalPages)}}
document.onkeydown=checkKey