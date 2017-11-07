var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:2000,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
 
 });

$(function(){
	getTime();
	
	$(".shouy").click(function(){
		$(".shouy i").css("color","red");
		$(".shouy span").css("color","red");
		$(".fen i").css("color","white");
		$(".fen span").css("color","white");
		$(".fou i").css("color","white");
		$(".fou span").css("color","white");
		$(".my i").css("color","white");
		$(".my span").css("color","white");
	});
	
	$(".fen").click(function(){
		$(".fen i").css("color","red");
		$(".fen span").css("color","red");
		$(".fou i").css("color","white");
		$(".fou span").css("color","white");
		$(".my i").css("color","white");
		$(".my span").css("color","white");
		$(".shouy i").css("color","white");
		$(".shouy span").css("color","white");
		
		
		
	});
	$(".fou").click(function(){
		$(".fou i").css("color","red");
		$(".fou span").css("color","red");
		$(".my i").css("color","white");
		$(".my span").css("color","white");
		$(".shouy i").css("color","white");
		$(".shouy span").css("color","white");
		$(".fen i").css("color","white");
		$(".fen span").css("color","white");
	});
	$(".my").click(function(){
		$(".my i").css("color","red");
		$(".my span").css("color","red");
		$(".shouy i").css("color","white");
		$(".shouy span").css("color","white");
		$(".fen i").css("color","white");
		$(".fen span").css("color","white");
		$(".fou i").css("color","white");
		$(".fou span").css("color","white");	
	});
	
	
	
});
function checkTime(i) {
    if(i<10) {
        i = "0"+i;
    }
    return i;
}
function getTime() {
    var now = new Date();//获取当前时间对象
    var leaveTime = new Date("2017,10,4 18:05:00");//获取火车出站时间
    var time = leaveTime.getTime()-now.getTime();//getTime()获取时间对象的毫秒数,1天= 1000*60*60*24
    var d = parseInt(time/(1000*60*60*24));//计算出剩余天数并取用parseInt()取整
    d = checkTime(d);
    var h = parseInt(time/(1000*60*60))%24;//用parseInt()取整计算出的小时数并对24求余获取剩余小时
    h = checkTime(h);
    var m = parseInt(time/(1000*60))%60;//用parseInt()取整计算出的分钟数并对60求余获取剩余分钟
    m = checkTime(m);
    var s = parseInt(time/1000)%60;//用parseInt()取整计算出的秒数并对60求余获取剩余秒数
    s = checkTime(s);
    $(".timer")[0].innerHTML = h + "时" + m + "分" + s + "秒";
//	$(".timer")[0].innerHTML = d + "天" + h + "时" + m + "分" + s + "秒";

}
  setInterval(getTime, 50);




