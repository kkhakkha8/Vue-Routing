<template>
  <h1>Jobs Page</h1>
  <div v-for="job in jobs" :key="job.id">
      <router-link :to="{name:'jobs-detail',params:{id:job.id}}">
        <h1 class="job">{{job.title}}</h1>
      </router-link>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      jobs:[
        {id:"1",title:"project manger",detail:"creative coder project manager"},
        {id:"2",title:"developer",detail:"creative coder developer"},
        {id:"3",title:"designer",detail:"creative coder designer"}
      ]

    }
  }

}
</script>

<style>
.job{
  color:crimson;
}
</style>