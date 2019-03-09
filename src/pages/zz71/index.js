import "babel-polyfill"
import 'bootstrap/dist/css/bootstrap.min.css'
import './common.scss'
import './index.scss'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js'
import {daohang} from'./nav.js'
import { resolve } from "path";
const r = path => resolve(__dirname,path);


$("#myCarousel").carousel('cycle');
//$("#myCarousels").carousel('cycle');

export const navs = (x,y,z)=>{
    let num = x+y;
    num =num*z;
    return num;
}
$('.switch,.navSecond').on('click','a',function(){
    if($(this).html()!="更多&gt;&gt;"){
        $(this).addClass("active").siblings().removeClass("active")
    }
    //console.log($(this).index())
  
})

window.onload = function() {
    //先获取三个元素	
    var area = $("#box-move"),
        ul1 = $("#ul1"),
        ul2 = $("#ul2");
    area.scrollTop(0);

    //克隆一个列表ul2，作为衔接滚动；
    ul2.html(ul1.html());
    //按照指定的周期（以毫秒计）来调用函数。
    var myscroll = setInterval(function() {
        scroll()
    }, 50)
    var top = area.scrollTop();

    function scroll() {
        if (area.scrollTop() >= ul1.height()) {
            top = 0;
            area.scrollTop(0)
        } else {
            area.scrollTop(top++);
        }
    }

    //鼠标移入清除滚动
    area.mouseover(function() {
            clearInterval(myscroll)
        })
        //鼠标移出滚动继续
    area.mouseout(function() {
        myscroll = setInterval(function() {
            scroll()
        }, 50)
    })

    ///请求导航列表

    const url = $('.navigation').data('url');
  
    
     // let url= './assets/js/messae.json';
    // let url= 'https://www.liujiarong.top/js/messae.json';

  

        ;(async() => {
          const nav = await  $.ajax({ 
            type:'get', 
            url:url, 
            cache:false, 
            dataType:'json', 
            success:function(data){ 
   
             return data;
            
            } 
            });
          
    
            daohang(nav)   
                 
          
          
        })()
}
 



/**鼠标移入事件和获得焦距的处理 */
$('.searchs  .input-lgs').focus(function(){
   
    $('.serHistory').show();
    $('.serHistory').removeClass('fade')
})
$('.input-lgs').blur(function(){
    $('.serHistory').hide()
})
$('.serHistory').mouseleave(function(){
    $(this).hide()
})
$('.wx').hover(function(){
  
    $(".ewm .shows").show();
},function(){

    $(".ewm .shows").hide();
});

