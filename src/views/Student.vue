<template>
  <div class="student-view container">

    <h2 v-if="volunteerRecord">Volunteer View: {{ volunteerRecord.firstName }} {{volunteerRecord.lastName }}</h2>
    <p v-if="feedback" class="red-text">{{ feedback }}</p>
    <div class="barchart" v-if="hoursChartData.length > 1">
        <h4>Total Community Service Hours Earned</h4>
        <GChart 
        type = "BarChart"
        :data = "hoursChartData"
        :options = "hoursChartOptions"
        />
    </div>
    <div class="data-table">
      <h4>Detailed Records</h4>
      <GChart
      type = "Table"
      :data = "eventRecordsForChart"
      :options = "recordsTableOptions"
      ref = "recordsChartRef"
      />
    </div>
 

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
      feedback: null,
      volunteerID: "1234",
      volunteerRecord: null,
      totalHours: 0,
      eventRecords: [],
      eventRecordsForChart: [],
      hoursChartData: [
        ["Student Hour Bar", "Hours"]
      ],
      hoursChartOptions: {
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
        
      },
      recordsTableOptions: {
        alternatingRowStyle: true,
        page: "enable"      }
    }
  },
  methods: {
    capitalizeChartHeaders() {
      this.eventRecordsForChart[0].forEach((item, index) => {
        this.eventRecordsForChart[0][index] = item.charAt(0).toUpperCase() + item.slice(1)
      })
    }
  },
  created() {
      //get student ID of logged-in student


      //get data for specific student
      let ref = db.collection('events').where('volunteerID','==',this.volunteerID)
      ref.get()
      .then(snapshot => {
          snapshot.forEach(doc => {
              let eventRecord = doc.data()
              eventRecord.eventID = doc.id
              this.eventRecords.push(eventRecord)
          })

      })
      //tallies up all hours for events into totalHours
      //also pushes each object as an array, onto a separate array to be given directly to the chart
      //this should probably be in computed with the v-if directive hiding chart until it loads
      .then(() => {
          //takes first item in eventRecords and makes the keys the headers for the table
          
          this.eventRecordsForChart.push(Object.keys(this.eventRecords[0]))
          this.capitalizeChartHeaders()

          this.eventRecords.forEach(record => {
              this.totalHours += record.hours
              //pushes object values for the chart
              this.eventRecordsForChart.push(Object.values(record))
          })
          //pushes the only record needed for bar chart
          this.hoursChartData.push(["",this.totalHours])
      })
  },
  beforeMount() {

    //get doc with the corresponding volunteer ID
    //need to handle better case of this returning no volunteer record
    db.collection('volunteers').doc(this.volunteerID).get()
    .then( doc => {
      this.feedback = null
      this.volunteerRecord = doc.data()
    })
    .catch( err => {
      this.feedback = "No student with this ID"
      console.log("Error with retrieving volunteer with that ID: ", err)
    })
  },
  mounted() {

  }
}
</script>

<style>
.barchart {
    text-align:center;
}

.barchart h4 {
    text-align: center;
}

.data-table {
  text-align: center;
}


</style>