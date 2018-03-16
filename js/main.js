(function(){
    //动画调速初始速度
    var duration = 50;
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget);   //button
        let speed = $button.attr('data-speed');
        // console.log(speed);
        //为当前按钮添加active
        $button.addClass('active')
        //把其他按钮的active移除
        .siblings('.active').removeClass('active');
        //调速
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
            duration = 10
                break
        }
    })
    //在页面写出代码
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n=0;
        setTimeout(function run(){
            n++;
            container.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            container.scrollTop = container.scrollHeight;   
            if(n <= code.length){
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    let code = `
    /*
     *  首先，画出皮卡丘的皮肤
     */
    .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*
     *  下一步，画出皮卡丘的鼻子
     */
    .nose{
        width: 0px;
        height: 0px;
        /* 利用border属性画四分之一圆扇形 */
        border-style:  solid;
        border-width:  12px;
        border-radius: 12px;
        border-color: black transparent transparent transparent;
        position: absolute;
        top: 28px;
        left: 50%;  
        /* 此时是该div的左边线移动50%,但没居中，需要这个div自身宽度的一半进行居中 */
        transform: translateX(-50%);
    }
    /*
     *  下一步，画出皮卡丘的眼睛
     */
    .eye{
        width: 50px;
        height: 50px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid black;
    }
    /*
     *  皮卡丘的眼珠子
     */
    .eye::before{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left:6px;
        top: 2px;
    }
    /*
     *  左眼
     */
    .eye-left{
        left: 50%;
        margin-left: -140px;
    }
    /*
     *  右眼
     */
    .eye-right{
        right: 50%;
        margin-right: -140px;
    }
    /*
     *  然后，画出皮卡丘的脸
     */
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    /*
     *  将脸放到正确的位置
     */
    .face-left{
        right: 50%;
        margin-right: 126px;
    }
    .face-right{
        left: 50%;
        margin-left: 116px;
    }
    /*
     *  上嘴唇
     */
    .upperLip{
        height: 25px;
        width: 80px;
        border: 2px solid black;     
        position: absolute;   
        top: 48px;
        background: #fee433;
    }
    .upperLip-left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip-right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;     
        transform: rotate(20deg);
    }
    /*
     *  下嘴唇
     */
    .lowerLip-wrapper{
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -150px; 
        height: 110px;
        width: 300px;
        overflow: hidden;
    }
    .lowerLip{
        width: 300px;
        height: 3500px;
        background: #990513;
        border: 2px solid black;
        border-radius: 200px/2000px;
        position: absolute;
        bottom: 0px;
        overflow: hidden;
    }
    /*
     *  小舌头
     */
    .lowerLip::after{
        content: "";
        width: 100px;
        height: 100px;
        background: #fc4a62;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
    }
    /*
     *  最后一只可爱的皮卡丘送给您
     */`
    writeCode('',code);

}.call())