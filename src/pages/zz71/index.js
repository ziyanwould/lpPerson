
import 'bootstrap/dist/css/bootstrap.min.css'
import './common.scss'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js'

$("#myCarousel").carousel('cycle');

// export const navs = (x,y,z)=>{
//     let num = x+y;
//     num =num*z;
//     return num;
// }
function navs(x,y,z){
    let num = x+y;
    num =num*z;
    return num;
}


