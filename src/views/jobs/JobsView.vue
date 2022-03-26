<template>
  <h1>Jobs Page</h1>
  <div v-for="job in jobs" :key="job.id"> 
   <h1 class="job">{{job.title}}</h1>
   <div v-show="detail">
    
   </div> 
  </div>
</template>

<script>


export default {
  data() {
    return {
      jobs:[
        {id:"1",title:"project manger",detail:"creative coder project manager"},
        {id:"1",title:"developer",detail:"creative coder developer"},
        {id:"1",title:"designer",detail:"creative coder designer"}
      ],
      detail : false
    }
  }

}
</script>

<style>
.job{
  color:crimson;
}
</style>