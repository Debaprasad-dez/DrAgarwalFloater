document.body.innerHTML+=`<a href="https://logy.ai/" target='_blank'>
<div 
style="
position: absolute;
top: 50vh;
left: 10px;
height: 100px;
width: 100px;
">
<div id="scan"></div>
<img style="position: absolute;left:39px;top: 66px;width: 20px" src="/drAEye.png" alt="">
<img id='touch' style="position: absolute;left:36px;top: 106px;width: 26px" src="/touch.svg" alt="">
<img  src="/drA.svg" alt="">
<style>
#scan{
    position: absolute;
    background: linear-gradient(180deg, rgba(103, 210, 223, 0.25) 0%, rgba(103, 210, 223, 0.125) 85.42%, rgba(103, 210, 223, 0.25) 100%);
    height: 40px;
    width: 73px;
    top: 33px;
    left: 12px;
    z-index: 100;
    border-radius: 8px 8px 0 0;
    border-bottom: solid 1px #0C50A3;
    animation: animate 4s infinite;
}
#touch{
    position: absolute;
    transform: translatey(0);
    animation: expand 2s infinite;
}
@keyframes animate {
    0%{
        height: 10px;
    }
    50%{
        height: 74px;
    }
    100%{
        height: 10px;
    }
}
@keyframes expand {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }
}
@media screen and (max-width: 600px) {
#floaterInstructions{
    display: none;
}
}
</style>
</div>
</a>

`


