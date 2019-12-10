<template>
    <div refs="studentAddEventModal" id="student-add-event-modal" class="modal">
        
        <form class="col s12">
            <div class="modal-content">
                <h4>Add an Event</h4>
                <div class="row">
                    <div class="input-field col s4">
                        <input name="first_name" id="first_name" type="text" class="validate" v-model="firstName">
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s4">
                        <input name="last_name" id="last_name" type="text" class="validate" v-model="lastName">
                        <label for="last_name">Last Name</label>
                    </div>

                    <div class="input-field col s3">
                        <input name="student_ID" id="student_ID" type="text" class="validate" v-model="studentID">
                        <label for="student_ID">Student ID</label>                        
                    </div>
                </div>
                <div class="row">

                    <div class="input-field col s6">
                    <label for="org">Volunteer Organization</label>
                        <select class="browser-default" v-if="volunteerOrgs.length > 0" name="org">
                            <option value="" disabled selected>Choose Organization</option>
                            <option v-for="(eachOrg, index) in volunteerOrgs" :key="index" v-bind:value="index">{{eachOrg}}</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col s3">
                          <input name="event_date" id="event_date" type="text" class="datepicker" v-model="volunteerEventDate">
                          <label for="event_date">Volunteer Event Date</label>                        
                    </div>
                    <div class="col s3">
                          <input name="event_time_begin" id="event_time_begin" type="text" class="timepicker" v-model="volunteerEventStartTime">
                          <label for="event_time_begin">Start Time</label>                        
                    </div>
                    <div class="col s3">
                          <input name="event_time_end" id="event_time_end" type="text" class="timepicker" v-model="volunteerEventEndTime">
                          <label for="event_time_end">End Time</label>                        
                    </div>                                               
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn teal">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    data() {

        return {
            firstName: null,
            lastName: null,
            studentID: null,
            volunteerOrgs: [],
            selectedVolunteerOrgs: null,
            volunteerEventDate: null,
            volunteerEventStartTime: null,
            volunteerEventEndTime: null
        }
    },
    methods: {
        AddEvent() {

        },
    },
    created() {
      let ref = db.collection('organizations')
      ref.get()
      .then(snapshot => {
          snapshot.forEach(doc => {
              let orgRecord = doc.data()
              this.volunteerOrgs.push(orgRecord.name)
              console.log(orgRecord.name)
          })
          console.log(this.volunteerOrgs.length)
      })

    }

}

</script>

<style>


</style>