<template>
  <div id="app">
    <student-component></student-component>
  </div>
</template>

<script>
import StudentComponent from '@/views/student'
export default {
  name: 'app',
  components:{
      StudentComponent
  }
}
</script>

