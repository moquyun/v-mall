<template>
  <div class="amoyPwdBox">
    <div class="amoyBox">
      <div class="amoy-top">
        <h1>淘口令购买</h1>
        <span class="close"><i class="iconfont icon-close"></i></span>
      </div>
      <div class="amoy-middle">
        <div class="amoy-m-top">
          <div class="copy">长按框内 > 拷贝</div>
          <div class="amoyPwd" id="copyAmoyPwd" style="-webkit-user-select: text;user-select: text;">￥NA5yZtIsisZ￥
          </div>
        </div>
        <div class="amoy-m-c">
          <a href="javascript:;" class="btn" id="oneKeyCopy" data-clipboard-text="￥NA5yZtIsisZ￥">一键复制</a>
          <a href="javascript:;" id="copySuccess">复制成功</a>
        </div>
        <div class="ios_tips">您的ios版本小于10，不可一键复制<br/>请长按拷贝或用浏览器领券模式</div>
        <div class="amoy-m-b">

        </div>
      </div>
      <div class="amoy-bot">
        <p class="p-c7e4b40">
          在售原价：<span style="text-decoration:line-through;color:#333;">￥9.90</span>&emsp;券后价：<span
          style="color:#f00;font-weight:bold">￥6.90</span><br/>
          点击复制后,请打开【手机淘宝】购买!<br/>
          注:若复制失败,请【长按框内-拷贝】或用【浏览器领券】模式
        </p>
      </div>
    </div>
    <div class="tips" style="display: none;">
      淘口令复制成功,请打开淘宝APP领券
    </div>
  </div>
</template>

<script>
export default {
  name: 'amoyPwdBox'
}
</script>

<style scoped lang="scss">
  /*****************淘口令领券********************************/
  .amoyPwdBox{width: 100%;height: 100%;background: rgba(0,0,0,0.5);z-index: 99999;position: absolute;top: 0;}
  .amoyBox{width: 86%;
    position: absolute;top: 12%;left: 7%;
    display: -webkit-flex;-webkit-flex-direction: column;
    display: flex;flex-direction: column;
    border-radius: 5px;
  }
  .amoy-top{
    width: 100%;
    border-radius: 5px 5px 0 0;
    background: #FFB801;
    color: #FFFFFF;
    height: 55px;
    line-height: 55px;
    display: -webkit-flex;
    display: flex;
    text-align: center;
  }
  .amoy-top h1{-webkit-flex: 1;flex: 1;font-size: 20px;}
  .amoy-top span{display: block;width: 40px;height: 55px; position: absolute;right: 10px;}

  .amoy-top span i{font-size: 28px;}
  .amoy-middle{
    position: relative;
    background: #FFFFFF;
    -webkit-flex: 3;
    flex: 3;
  }
  .copy{width: 40%;height: 28px;background:#FFB801 ;text-align: center;line-height: 28px;color: #FFFFFF;
    position: relative;left: 30%;top: 14px;
  }
  .amoyPwd{ width: 86%;height: 60px;line-height: 65px;text-align: center;
    margin: auto;border:2px dashed  #FFB801;border-radius: 5px;font-size: 16px;}
  .amoy-m-c{
    position:relative ;
  }
  .amoy-m-c a{
    width: 50%;
    height: 45px;
    text-align: center;
    border-radius: 50px;
    color: #FFFFFF;
    display: block;
    font-size: 15px;
    margin:20px auto;
  }
  .amoy-m-b {position: relative;margin-bottom: 10px;}
  .amoy-m-b .p-c0b8fd2{
    font-size:14px ;
    text-align: center;
    color: #0b8fd2;
  }
  #oneKeyCopy{
    line-height: 45px;
    background: #FF6633;
  }
  #copySuccess{
    line-height: 45px;
    display: none;
    background: #66cc00;
    position: absolute;
    top: -20px;
    left: 25%;
  }
  .amoy-bot{
    position: relative;
    border-radius:  0 0 5px 5px;
    background: #F0F0F0;
    -webkit-flex: 2;
    flex: 2;
  }
  .amoy-bot .p-c7e4b40{
    color: #7e4b40;
    font-size: 14px;
    padding:10px 25px;
  }
  .tips{
    width: 80%;
    left:10%;border-radius:20px;background:rgba(0,0,0,0.8);padding:8px 0;
    position: absolute;
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
    bottom: 12%;
  }
  .ios_tips{text-align:center;color:#f00;font-size:12px;margin:8px 0;display:none}
</style>
