<template>
  <div class="student-view">

    <h4>Welcome!</h4>
    
    <div id="piechart">
      <GChart 
        type = "BarChart"
        :data =  "studentHour"
        :options = "hoursChartOptions"
        />
    </div>

    <ul>
      <li 
        v-for="i of studentrecords" :key="i['.key']">
          {{i.hour}}
        </li>
    </ul>   

  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import db from '@/firebase/init'

export default {
  props: [],
  components: { 
    GChart
  },
  data() {
    return {
      
      studentHour: [
        ["Student Hour Bar", "Hours"],
        // ["Hours",this.totalHours]
      ],
      hoursChartOptions: {
        hAxis:{
          minValue:0,
          maxValue: 100
        },
        chart: {
          title: 'Overall Community Service Progress',
          height: 500,
          width: 500
        }
      }
    }
  },
  computed: {
    totalHours: function() {
        let hours = 0;
        for (i of this.$firestore.studentrecords) {
          hours += i.hours
        }
        console.log(hours)
        return hours
      }
  },
  beforeMount() {
  }
}
</script>

<style>
</style>