$(".nav-switch-dark-mode").click(function(){$(this).find("i").hasClass("icon-moon")?($(this).attr("title","\u767d\u5929\u6a21\u5f0f"),$(".nav-switch-dark-mode i").removeClass("icon-moon").addClass("icon-sun text-danger"),$("#layout-css").attr("href",THEME_URL+"/media/css/layout-dark.css"),$.cookie("layout-css",THEME_URL+"/media/css/layout-dark.css",{expires:7})):($(this).attr("title","\u591c\u665a\u6a21\u5f0f"),$(".nav-switch-dark-mode i").removeClass("icon-sun text-danger").addClass("icon-moon"),
$("#layout-css").attr("href",""),$.cookie("layout-css","",{expires:7}))});
function hljsLoad(){$('a[data-toggle="tooltip"],div[data-toggle="tooltip"]').tooltip();$(function(){$(".imagesss br").each(function(){var a=$(this).html();$(this).replaceWith(a)})});$(function(){$(".imagesss img").each(function(a){$(this).after('<div class="list-box"><div class="col-sm-6"><div class="list-item-column card card-featured p-0 box-grid"><div class="list-content p-0"><div class="media media-16x9"><a class="media-content" href="'+$(this).attr("src")+'" data-fancybox="gallery"><img src="'+
$(this).attr("src")+'" /></a></div></div></div></div></div>');$(this).remove()})});$(function(){$(".nc-light-gallery img").each(function(a){$(this).after('<a href="'+$(this).attr("src")+'" data-fancybox="gallery"><img src="'+$(this).attr("src")+'" /></a>');$(this).remove()})});hljs.initHighlightingOnLoad();$("pre code").each(function(a,b){hljs.highlightBlock(b);a=$(this).text().split("\n").length-1;if(!(4>a))for(b=$("<ol/>").addClass("pre-numbering"),$(this).addClass("has-numbering").parent().append(b),
i=1;i<=a;i++)b.append($("<li/>").text(i))});$(".menu").click(function(){$(this).hasClass("cura")?($(this).children(".new-sub").hide(),$(".menu").removeClass("cura")):($(".menu").removeClass("cura"),$(this).addClass("cura"),$(".menu").children(".new-sub").slideUp("fast"),$(this).children(".new-sub").slideDown("fast"))});0==window.IS_PAGE_SINGLE&&$(document).ready(function(){$("#list-home").infinitescroll({loading:{img:THEME_URL+"/media/images/loading.svg",msgText:"\u52a0\u8f7d\u4e2d...",finishedMsg:"\u2014\u2014 \u6211\u662f\u6709\u5e95\u7ebf\u7684 \u2014\u2014"},
nextSelector:".pagenavi a",navSelector:".pagenavi",itemSelector:"#list-home .list-box",animate:!1,extraScrollPx:20});$("#list-grid").infinitescroll({loading:{img:THEME_URL+"/media/images/loading.svg",msgText:"\u52a0\u8f7d\u4e2d...",finishedMsg:"\u2014\u2014 \u6211\u662f\u6709\u5e95\u7ebf\u7684 \u2014\u2014"},nextSelector:".pagenavi a",navSelector:".pagenavi",itemSelector:"#list-grid .list-box",animate:!1,extraScrollPx:20})});(function(a){var b,d=$("#notice"),f=d.find("ul"),g=d.find("li"),h=d.find("li").length,
k=g.first().outerHeight(!0);a.autoAnimation=function(){if(!(1>=h)){var a=arguments.callee,e=d.find("li").first();e.animate({marginTop:-k},500,function(){clearTimeout(b);e.appendTo(f).css({marginTop:0});b=setTimeout(a,5E3)})}};d.mouseenter(function(){clearTimeout(b)}).mouseleave(function(){b=setTimeout(a.autoAnimation,5E3)})})(window);setTimeout(window.autoAnimation,5E3)}hljsLoad();$(".pcoded-navbar .close").on("click",function(){$(this).parents(".card").fadeOut("slow").remove()});var c=$(window)[0].innerWidth;
$(".search-btn").on("click",function(){$(this);$(".main-search").addClass("open");991>=c?$(".main-search .form-control").css({width:"90px"}):$(".main-search .form-control").css({width:"150px"})});$(".search-close").on("click",function(){$(this);$(".main-search").removeClass("open");$(".main-search .form-control").css({width:"0"})});$(".pop-search").on("click",function(){$(".search-bar").slideToggle("fast");$(".search-bar input").focus();$(".collapse").show()});$(".search-bar .close").on("click",function(){$(".search-bar").slideToggle("fast")});
991>=c&&($(".main-search").addClass("open"),$(".main-search .form-control").css({width:"100px"}));$("#mobile-collapse").on("click",function(){991<c&&$(".pcoded-navbar:not(.theme-horizontal)").toggleClass("navbar-collapsed");$("#recommended_posts").css({width:"100%"})});
$("#mobile-collapse,#mobile-collapse1").click(function(a){var b=$(window)[0].innerWidth;console.log(b);992>b&&($(".pcoded-navbar").removeClass("navbar-collapsed"),$(".pcoded-navbar").toggleClass("mob-open"),$("#content").addClass("mobile-overlay"),a.stopPropagation())});
$(window).ready(function(){var a=$(window)[0].innerWidth;$(".pcoded-main-container,.pcoded-header").on("click",function(){992>a&&1==$(".pcoded-navbar").hasClass("mob-open")&&($(".pcoded-navbar").removeClass("mob-open"),$("#content:before").removeClass("mobile-overlay"),$("#mobile-collapse,#mobile-collapse1").removeClass("on"))})});
$(window).scroll(function(){$(".pcoded-header").hasClass("headerpos-fixed")||(60<$(this).scrollTop()?($(".pcoded-navbar.menupos-fixed").css("position","fixed"),$(".pcoded-navbar.menupos-fixed").css("transition","none"),$(".pcoded-navbar.menupos-fixed").css("margin-top","0px")):($(".pcoded-navbar.menupos-fixed").removeAttr("style"),$(".pcoded-navbar.menupos-fixed").css("position","absolute"),$(".pcoded-navbar.menupos-fixed").css("margin-top","60px")));$("#body").hasClass("box-layout")&&(60<$(this).scrollTop()?
($(".pcoded-navbar").css("position","fixed"),$(".pcoded-navbar").css("transition","none"),$(".pcoded-navbar").css("margin-top","0px"),$(".pcoded-navbar").css("height","100vh"),$(".pcoded-navbar").css("border-radius","0px")):($(".pcoded-navbar").removeAttr("style"),$(".pcoded-navbar").css("position","absolute"),$(".pcoded-navbar").css("margin-top","50px")))});$("#more-details").on("click",function(){$("#nav-user-link").slideToggle()});$(".mob-toggler").on("click",function(){$(".pcoded-header > .collapse,.pcoded-header > .container > .collapse").toggleClass("d-flex")});
$(".pcoded-submenu-click").on("click",function(){"off"==$(this).next().attr("data")?($(this).next().slideDown(),$(this).next().attr("data","on"),$(this).addClass("has-ripple"),$(this).parent().addClass("pcoded-trigger")):($(this).next().slideUp(),$(this).next().attr("data","off"),$(this).removeClass("has-ripple"),$(this).parent().removeClass("pcoded-trigger"))});$(".menu-item-object-custom a , .pcoded-submenu a").on("click",function(){$(".pcoded-navbar").removeClass("mob-open")});
var headerEl="h2,h3,h4",content=".nc-light-gallery",idArr={};tocbot.init({tocSelector:".toc",contentSelector:content,headingSelector:headerEl,scrollSmooth:!0});
$(function(){$(document).pjax('a[target!=_blank]:not(a[target="_blank"],a[no-pjax])',"#content",{fragment:"#content",timeout:6E3});$(document).on("submit","form",function(a){$.pjax.submit(a,"#content",{fragment:"#content",timeout:6E3})});$(document).on("pjax:send",function(){$(".loader-bg").show();tocbot.destroy()});$(document).on("pjax:complete",function(){$(".loader-bg").hide();hljsLoino();hljsLoad();tocbot.refresh();window.ENCODE_URI_COMPONENT_TITLE=document.title;window.ENCODE_URI_COMPONENT_LINK=
this.location.href})});