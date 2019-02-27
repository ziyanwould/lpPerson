

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss";
import $ from 'jquery';
import "bootstrap/dist/js/bootstrap.min.js"
import "../../assets/js/rem";
import { resolve } from "path";
const r = path => resolve(__dirname,path);

//    console.log(r('../index/index.scss'));
$("#myCarousel").carousel('cycle');

$('.lb,.jg').click(function(){
    if($(this).index()==1){
        $('.jg').find('img').attr("src", r('../../assets/images/9g2.png'));
        $('.lb').find('img').attr("src", r('../../assets/images/lb1.png'));
       
       
        $('.heng').show();
        $('.liebiao1 .col-md-4,.liebiao2 .col-md-4').removeClass('col-md-4').addClass('col-md-12');
        $('.lpCount .show1').hide();
        $('.lpCount .show2').show();
       
    }else{
        $('.lb').find('img').attr("src", r('../../assets/images/lb2.png'));
        $('.jg').find('img').attr("src", r('../../assets/images/9g1.png'));
        $('.liebiao1 .col-md-12,.liebiao2 .col-md-12').removeClass('col-md-12').addClass('col-md-4');
        $('.lpCount .show2').hide();
        $('.lpCount .show1').show();
      
        $('.heng').hide();
  
    }

})
$('.jz,.qz').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    console.log($(this).index())
    if($(this).index()==0){
        $('.liebiao1').show();
        $('.liebiao2').hide();
        let xun = $('.heng').find('div');
        xun.eq(1).html('用证地区')
        xun.eq(2).html('证书用途')
        xun.eq(3).html('注册情况')
    }else{
        $('.liebiao2').show();
        $('.liebiao1').hide();
        let xun = $('.heng').find('div');
        xun.eq(1).html('工作地点')
        xun.eq(2).html('学历要求')
        xun.eq(3).html('经验要求')
    }
   
})