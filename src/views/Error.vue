<template>
    <div class="errorStyle">
      <h3>404</h3>
    </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped lang="scss">
.errorStyle{
  height:100%;
  position: relative;
  h3{
    height: 1.5rem;
    width:100%;
    font-size: 1rem;
    text-align:center;
    position: absolute;
    top:0;
    bottom:0;
    margin:auto;
  }
}
</style>
