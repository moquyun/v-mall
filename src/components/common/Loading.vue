<template>
  <div class="load-box">
    <div class="loading">
    <span>
      Loading...
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped lang="scss">
  .load-box{
    width:100%;
    height:1000%;
    //background-color: #2ecc71;//#34495e
    display: flex;
    justify-content: center;
    align-items: center;
    .loading{
      width:2rem;
      height:2rem;
      /*background-color: red;*/
      box-sizing: border-box;
      border-radius:50%;
      border-top: .1rem solid #e74c3c;
      position: relative;
      animation: a1 2s linear infinite;
      &::before,&::after{
        content: "";
        display: block;
        width:2rem;
        height:2rem;
        /*background-color: red;*/
        position: absolute;
        border-radius:50%;
        top:-.1rem;
        box-sizing: border-box;
        left:0;
      }
      &::before{
        border-top:.1rem solid #e67e22;
        transform: rotate(120deg);
      }
      &::after{
        border-top:.1rem solid #3498db;
        transform: rotate(240deg);
      }
      span{
        position: absolute;
        width:2rem;
        height:2rem;
        line-height:2rem;
        text-align: center;
        color: #1abc9c;
        animation: a2 2s linear infinite;
        font-size: .3rem;
      }
    }
  }
  @keyframes a1 {
    to{
      transform: rotate(360deg);
    }
  }
  @keyframes a2 {
    to{
      transform: rotate(-360deg);
    }
  }
</style>
