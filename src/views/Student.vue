<template>
  <div class="student-view container">

    <h4>Welcome!</h4>
    
    <div id="barchart" v-if="chartData.length > 1">
        <h3>Total Community Service Hours Earned</h3>
        <GChart 
        type = "BarChart"
        :data = "chartData"
        :options = "chartOptions"
        />
    </div>

     <ul>
         <li v-for="(record) in studentRecords" :key="record.eventID">{{record.studentID}}</li>
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
      studentID: "1234",
      totalHours: 0,
      studentRecords: [],
      chartData: [
        ["Student Hour Bar", "Hours"]
      ],
      chartOptions: {
        animation: {
            startup: true,
            duration: 1500,
            easing: 'out'
        },
        hAxis:{
          minValue:0,
          maxValue: 100
        },
        legend: {position: "none"},
        chartArea: {
            height: 100,
            width: 400
        }
        
      }
    }
  },
  methods: {

  },
  created() {
      let ref = db.collection('events').where('studentID','==',this.studentID)
      ref.get()
      .then(snapshot => {
          console.log(snapshot)
          snapshot.forEach(doc => {
              let studentRecord = doc.data()
              studentRecord.eventID = doc.id
              this.studentRecords.push(studentRecord)
          })
      })
      .then(() => {
          this.studentRecords.forEach(record => {
              this.totalHours += record.hours
          })
          this.chartData.push(["",this.totalHours])
      })
  },
  beforeMount() {

  }
}
</script>

<style>
.barchart {
    text-align:center;
}

.barchart h3 {
    text-align: center;
}
</style>