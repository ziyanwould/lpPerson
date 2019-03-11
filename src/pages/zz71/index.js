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


const daohang = nav =>{
    //console.log(nav.message);
    let unmer = $('.navigation').data('third');
    unmer = unmer.split(",");
    unmer  = unmer.map(Number);
    //console.log(unmer)
    let guid = $(`
    <div class="navLeft">

    </div>
    <div class="navRight">
        <div class="show1" style="display:none">
            <ul >
            
            </ul>
        </div>
        <div class="show2 clearfix" style="display:none">
            <div class="left" style="display:none">
               
            </div>
            <div class="right" style="display:none">

               

            </div>
        </div>
    </div>`)

    $('.navigation').append(guid)
    let navs = nav.message;
    let second = {}
    for (let key in navs) {
       // console.log(navs[key].firstName)
     
            $(".navLeft").append(`  <a href="${navs[key].url}"  ${!navs[key].target?'target="_blank"':''}  class=""> <span>${navs[key].firstName}</span></a>`)
     
       

    }
    
     
     $('.navLeft').on( 'mouseenter','a',function(){
        $('.navigation').css("z-index",30)
    //    console.log($(this).index())
        let num = $(this).index()
       // console.log('最终的值',$.inArray(num, unmer),num,unmer)
    if($.inArray(num, unmer)==-1) return;
    $('.show1').hide();
    $('.show2').show();
    $('.show2 .left').html("");
    $('.show2 .left').show();
    $('.show2 .right').hide();
    $(this).addClass('active').siblings().removeClass('active');
    
     let count = navs[$(this).index()].count;
     second = count;
            for (let key in count) {
             //   console.log(count[key].secondName);
                $('.show2 .left').append(`  <a href="${count[key].url}" ${count[key].target?'target="_blank"':''}   class=""> ${count[key].secondName}</a>`)
            }
     })


     $('.show2 .left').on( 'mouseenter','a',function(){
           $(this).addClass('active').siblings().removeClass('active');
        $('.show2 .right').html("");
        $('.show2 .right').show();
        let count = second[$(this).index()].count;
        for (let key in count) {
           // console.log(count[key].thirdName);
            $('.show2 .right').append(`  <a href="${count[key].url}"  ${count[key].target?'target="_blank"':''}  class=""> ${count[key].thirdName}</a>`)
        }

     })



     //多文本展示
     $('.navLeft').on( 'mouseenter','a',function(){
        $(this).addClass('active').siblings().removeClass('active');
        let num = $(this).index()
       if( $.inArray(num, unmer)!=-1) return;
         $('.show2,.show2 .left,.show2 .right').hide();
         $('.show1').show();
         $('.show1 ul').html("");
         let count = navs[$(this).index()].count;
      //   console.log("count",count)
         second = count;
         
                for (let key in count) {
                    let li = $('<li></li>');
                    let dl =$('<dl class="clearfix"></dl>');
                    dl.append(`<dt><a href="${count[key].url}" ${count[key].target?'target="_blank"':''} >${count[key].secondName}</a></dt>`)

                    let counts =count[key].count;
                    let dd = $('<dd></dd>')
                    for (let key in counts) {
                  
                     dd.append(`<a href="${counts[key].url}" ${counts[key].target?'target="_blank"':''} >${counts[key].thirdName}</a></dt>`)

                    }  
                    dl.append(dd);
                    li.append(dl) ; 
                    
                    
                     $('.show1 ul').append(li)  
                }
         })
         //移入移除展示
         $('.navigation').on( 'mouseleave','.show1',function(){
             $(this).hide()
         })
         $('.navigation').on( 'mouseleave','.show2 .right',function(){
            $(this).hide()
        })
        $('.navigation').mouseleave(function(){
            $('.show1,.show2,.show2 .left,.show2 .right').hide();
            $('.navLeft a').removeClass('active');
            $('.navigation').css("z-index",1)
        })
}
