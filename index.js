window.onload=function () {
    let category=document.querySelectorAll(".category_photo li");
    let circleBtn=document.querySelectorAll(".circleBtn div");
    let zuobian=document.querySelector(".category_photo_left");
    let youbian=document.querySelector(".category_photo_right");
    let box=document.querySelector(".category");
    console.log(box,circleBtn);
    //图片移动
    let now=0;
    let next=0;
    let t=setInterval(move,1500);
   function move() {
       next++;
       if (next==category.length){
           next=0;
       }
       // category[now].style.zIndex="10";
       // category[next].style.zIndex="10";
       category[next].style.left="1226px";
       animate(category[now],{left:-1226});
       animate(category[next],{left:0});
       circleBtn[now].className="";
       circleBtn[next].className="circle";
       now=next;
   }
   function move1() {
       next--;
       if (next<0){
           next=category.length-1;
       }
       category[next].style.left="-1226px";
       animate(category[now],{left:1226});
       animate(category[next],{left:0});
       circleBtn[now].className="";
       circleBtn[next].className="circle";
       now=next;
   }
    box.onmouseenter=function () {
        clearInterval(t);
    };
    box.onmouseleave=function () {
        t=setInterval(move,1500);
    };
    zuobian.onclick=function () {
        move();
    };
    youbian.onclick=function () {
        move1();
    };

       ////圆点
    for (let i=0;i<circleBtn.length;i++){
        circleBtn[i].onclick=function () {
            if (now==i){
                return;
            }
            else if (now<i){
                category[i].style.left="1226px";
                animate(category[now],{left:-1226});
                animate(category[i],{left:0});
                circleBtn[now].className="";
                circleBtn[i].className="circle";
            }
            else {
                category[i].style.left="-1226px";
                animate(category[now],{left:1226});
                animate(category[i],{left:0});
                circleBtn[now].className="";
                circleBtn[i].className="circle";
            }
            next=now=i;
        }
    }
}