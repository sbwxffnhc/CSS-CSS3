function loadVideo(e){var n=$("#icon_play"),i=($("#bg_video"),new tvp.VideoInfo);i.setVid(e);var t=new tvp.Player;!function(){var e=navigator.userAgent.match(/chrome\/(\d+)/i);e&&e[1]}();(bowser.tablet||bowser.safari)&&n.hide();var o={width:1024,height:600,video:i,modId:"video_show",vodFlashSkin:"http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",autoplay:"1",playerType:"html5"};navigator.userAgent.indexOf("MSIE")>=0&&navigator.userAgent.indexOf("Opera")<0&&(o.playerType=""),n.on("click",function(){try{t.create(o),$("#video_show,.fullmask").show()}catch(e){console.log("播放失败")}})}function fixTxtHeght(){$("html").attr("lang")}function loadPcVideo(){$(".slide-video .logo").on("click",function(){player=new Txplayer({containerId:"video18",vid:"s07155e95ar",width:"1024",height:"600"}),$(".banner-video,.fullmask").show(),player.on("ready",function(){player.play()}),autovideosize(),$(window).resize(function(){autovideosize()})}),$("#icon_play").on("click",function(){/en-us/.test(location.href)?player=new Txplayer({containerId:"video18",vid:"z0165kfbrmf",width:"1024",height:"600"}):player=new Txplayer({containerId:"video18",vid:"a0165qlzxbt",width:"1024",height:"600"}),$(".banner-video,.fullmask").show(),player.on("ready",function(){player.play()}),autovideosize(),$(window).resize(function(){autovideosize()})})}function autovideosize(){var e=$(document).width(),n=$(window).height(),i=$(document).height();$(".banner-video").width(e),$(".banner-video").height(i),$(".banner-video .video").css({top:(n-600)/2})}if(navigator.userAgent.indexOf("MSIE")>=0&&navigator.userAgent.indexOf("Opera")<0){$("#rotatingGlobe").hide(),$(".banner_img_planet").show();var userAgent=navigator.userAgent,rMsie=/(MSIE\s|trident.*rv:)([\w.]+)/,version,match=rMsie.exec(userAgent);match[2]<9&&$(".slide-video video").hide()}else $(".banner_img_planet").hide(),$("#rotatingGlobe").show(),function(){var e=document.getElementById("rotatingGlobe"),n=planetaryjs.planet();n.loadPlugin(function(e){e=e||{};var n=!1,i=null,t=function(){window.innerWidth,e.extraWidth,e.extraHeight;i.canvas.width=1500,i.canvas.height=624,i.projection.translate([750,950])};return function(e){i=e,e.onInit(function(){n=!0,d3.select(window).on("resize",function(){n=!0})}),e.onDraw(function(){n&&(t(),n=!1)})}}({extraHeight:-120})),n.loadPlugin(function(e){return e=e||{},function(n){n.onInit(function(){window.innerWidth,e.extraWidth,window.innerHeight,e.extraHeight;n.projection.scale(800)})}}({extraHeight:-120})),n.loadPlugin(planetaryjs.plugins.earth({topojson:{file:"../js/world-110m.json"},oceans:{fill:"#085dc0"},land:{fill:"#7db4f4"},borders:{stroke:"#7db4f4"}})),n.loadPlugin(planetaryjs.plugins.pings()),n.loadPlugin(planetaryjs.plugins.zoom({scaleExtent:[50,5e3]})),n.projection.rotate([50,-10,0]),n.draw(e);var i=["white"];setInterval(function(){var e=45*Math.random()+40,t=360*Math.random()-180,o=i[Math.floor(Math.random()*i.length)];n.plugins.pings.add(t,e,{color:o,ttl:2e3,angle:10*Math.random()})},100)}();var addVideoHandler=function(e,n){var i=new tvp.VideoInfo;i.setVid(e),i.setTitle(n);var t=new tvp.Player,o=$("#bg_video"),a=$("#icon_play");o.width(),o.height();t.create({width:1024,height:600,video:i,modId:"video18",playerType:"html5",isHtml5ShowPlayBtnOnPause:!1}),a.on("click",function(){t.play(),$(".banner-video,.fullmask").show(),autovideosize()})};$(function(){fixTxtHeght(),loadPcVideo(),$(".banner-video .close").on("click",function(){$(".banner-video,.fullmask").hide(),$("#video18").empty()}),$(".flexslider").flexslider({animation:"fade",slideshowSpeed:6e3,controlsContainer:$(".custom-controls-container"),customDirectionNav:$(".custom-navigation a")}),$(".tab_item").on("click",function(){var e=$(this).children().text();$(this).addClass("current").siblings().removeClass("current"),$(this).parent(".tab_list").siblings(".news_con").find(".list_"+e).siblings().hide().end().fadeIn(400)}),$(".fullmask").height($(document).height())});