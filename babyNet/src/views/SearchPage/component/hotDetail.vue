<template>
     <div class="hotDatail_page">
         <search-Input></search-Input>
     </div>
</template>

<script>
import searchInput from "./toInput";
export default {
  name: 'hotDatail',
  data () {
    return {
      
    }
  },
   components:{
     searchInput
  },
  methods:{
     
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .hotDatail_page{
        width:100%;
        overflow: hidden;
    }
   
</style>
