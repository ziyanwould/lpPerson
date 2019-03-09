import "bootstrap/dist/css/bootstrap.min.css"
import "./commom.scss";
import "./index.scss";
import $ from 'jquery';
import "bootstrap/dist/js/bootstrap.min.js"
import "../../assets/js/rem";
import { resolve } from "path";
const r = path => resolve(__dirname,path);

$('.firstkey a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.secondkey').show();
    $('.secondkey').find('dd a').eq(0).addClass('active')
})
$('.secondkey a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');})