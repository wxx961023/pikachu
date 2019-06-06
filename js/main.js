//思考为什么需要用立即执行函数
!function(){
  var duration = 50
  $('.actions').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active') 
      .siblings('.active').removeClass('active')
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
  function writeCode(prefix,code,fn){
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    let id
    id = setTimeout(function run(){
      n += 1;
      container.innerHTML = code.substring(0,n);
      styleTag.innerHTML = code.substring(0,n);  
      container.scrollTop = container.scrollHeight 
      if(n<code.length){
        id = setTimeout(run,duration)
      }else{
        fn && fn.call()
      }
    },duration)
  };
  let code = `
    /*
     * 首先，需要皮卡丘的皮 
    */
    .preview{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FEE433;
    }
    .wrapper{
      width: 100%;
      height: 165px;
      position:relative;
    }
    /*
    * 接下来，画皮卡丘的鼻子
    */
    .nose{
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 12px;
      border-color:black transparent transparent;
      border-radius:11px;
      position: absolute;
      left: 50%;
      top: 28px;
      transform:translateX(-50%);
    }
    /*
    * 接下来，画皮卡丘的眼睛
    */
    .eye{
      width: 49px;
      height:49px;
      background: #2e2e2e;
      position: absolute;
      border-radius: 50%;
      border:2px solid #000000;
    }
    /*
    * 眼睛的眼珠子
    */
    .eye::before{
      content:'';
      display:block;
      width: 24px;
      height: 24px;
      background:white;
      position: absolute;
      border-radius:50%;
      left: 5px;
      top: -1px;
      border:2px solid #000;
    }
    .eye.left{
      right: 50%;
      margin-right:90px;
    }
    .eye.right{
      left: 50%;
      margin-left:90px;
    }
    /*
    * 然后，画皮卡丘的脸
    */
    .face{
      width: 68px;
      height: 68px;
      background: #FC0d1c;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top:85px;
    }
    .face.left{
      right: 50%;
      margin-right: 116px;
    }
    .face.right{
      left: 50%;
      margin-left: 116px;
    }
    /*
    * 接下来，画上嘴唇
    */
    .upperLip{
      width: 80px;
      height: 20px;
      border: 3px solid black;
      border-top:none;
      position:absolute;
      top:46px;
      background: #FEE433;
      z-index: 1;
    }
    .upperLip.left{
      right:50%;
      border-bottom-left-radius:40px 20px;
      border-right:none;
      transform:rotate(-15deg)
    }
    .upperLip.right{
      border-left:none;
      border-bottom-right-radius:40px 20px;
      left:50%; 
      transform:rotate(15deg)
    }
    .lowerLip-wrapper{
      bottom: 0;
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      height:110px;
      overflow: hidden;
      width: 200px;
    }
    /*
    * 接下来，画舌头
    */
    .lowerLip{
      height: 3000px;
      width: 200px;
      background:#990513;
      border-radius: 100px/500px;
      border:3px solid black;
      position: absolute;
      bottom: 0;
      overflow: hidden;
    }
    .lowerLip::after{
      content:'';
      position: absolute;
      display: block;
      bottom: 0;
      width: 90px;
      height: 90px;
      background: #FC4A62;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
    }
    /*
    * 最后，送你这个皮卡丘
    */
  `
  writeCode('',code)
}.call();