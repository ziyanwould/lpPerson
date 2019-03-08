import "babel-polyfill"
import 'bootstrap/dist/css/bootstrap.min.css'
import './common.scss'
import './index.scss'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js'
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

    let url= './assets/js/messae.json';
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
          
            console.log(nav.message);
            
            let navs = nav.message;
            let second = {}
            for (let key in navs) {
               // console.log(navs[key].firstName)
                if(navs[key].target){
                    $(".navLeft").append(`  <a href="${navs[key].url}"  target="_blank"  class=""> ${navs[key].firstName}</a>`)
                } 
                else {
                    $(".navLeft").append(`  <a href="${navs[key].url}" class=""> ${navs[key].firstName}</a>`)
                }
               

            }
            
             
             $('.navLeft').on( 'mouseenter','a',function(){
            //    console.log($(this).index())
             $('.show2 .left').html("");
             let count = navs[$(this).index()].count;
             second = count;
                    for (let key in count) {
                        console.log(count[key].secondName);
                        $('.show2 .left').append(`  <a href="${count[key].url}"  target="_blank"  class=""> ${count[key].secondName}</a>`)
                    }
             })


             $('.show2 .left').on( 'mouseenter','a',function(){
                $('.show2 .right').html("");
                let count = second[$(this).index()].count;
                for (let key in count) {
                    console.log(count[key].thirdName);
                    $('.show2 .right').append(`  <a href="${count[key].url}"  target="_blank"  class=""> ${count[key].thirdName}</a>`)
                }

             })



             //多文本展示
             $('.navLeft').on( 'mouseenter','a',function(){
              
               if( $(this).index()==0) return;
                 $('.show1 ul').html("");
                 let count = navs[$(this).index()].count;
                 second = count;
                 let li = $('<li></li>')
                        for (let key in count) {
                           
                        }
                 })
    
          
          
        })()
}
 



