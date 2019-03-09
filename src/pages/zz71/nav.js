exports.daohang = nav =>{
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
     
            $(".navLeft").append(`  <a href="${navs[key].url}"  ${!navs[key].target?'target="_blank"':''}  class=""> ${navs[key].firstName}</a>`)
     
       

    }
    
     
     $('.navLeft').on( 'mouseenter','a',function(){
        $('.navigation').css("z-index",30)
    //    console.log($(this).index())
        let num = $(this).index()
        console.log('最终的值',$.inArray(num, unmer),num,unmer)
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