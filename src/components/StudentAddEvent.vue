<template>
    <div refs="studentAddEventModal" id="student-add-event-modal" class="modal">
        
        <form class="col s12">
            <div class="modal-content">
                <h4>Add an Event</h4>
                <div class="row">
                    <div class="input-field col s4">
                        <input name="first_name" id="first_name" type="text" class="validate">
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s4">
                        <input name="last_name" id="last_name" type="text" class="validate">
                        <label for="last_name">Last Name</label>
                    </div>

                    <div class="input-field col s3">
                        <input name="student_ID" id="student_ID" type="text" class="validate">
                        <label for="student_ID">Student ID</label>                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <select name="org">
                            <option value="" disabled selected>Choose Organization</option>
                            <option value="1">BASE</option>
                            <option value="2">Soup Kitchen</option>
                            <option value="3">Other</option>
                        </select>
                        <label for="org">Volunteer Organization</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s3">
                          <input name="event_date" id="event_date" type="text" class="datepicker">
                          <label for="event_date">Volunteer Event Date</label>                        
                    </div>
                    <div class="col s3">
                          <input name="event_time_begin" id="event_time_begin" type="text" class="timepicker">
                          <label for="event_time_begin">Start Time</label>                        
                    </div>
                    <div class="col s3">
                          <input name="event_time_end" id="event_time_end" type="text" class="timepicker">
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
export default {
    data() {

        return {

            }
    }
}
</script>

<style>


</style>