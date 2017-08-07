<template>
   	<!--顶部标题行-->
  <header class="header-bar">
      <slot name="header-list-group"></slot>
  </header>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .header-bar{
		 width:100%;
		 height:0.44rem;
		 background: #fff;
		 display:flex;
		 
	}
</style>
