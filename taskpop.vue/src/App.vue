<template>
  <div class="container bg-light" style="padding-bottom: 5vw">
      <div class="Title">TaskPop</div>
      
      <!-- Task Deck -->
      <div className="container bg-white" id="taskdeck">
        <div className="row task-text">
            <div className="col-sm-12" id="taskText">
              <div>{{getText(taskDeck[theIndex])}}</div>
            </div>
            <div className="col-sm-12" id="taskDateText" style="padding-bottom: 2vw">

              <div>Due {{getDate(taskDeck[theIndex])}}</div>

            </div>
        </div>
        <div className="row g-3 text-center" style="padding-top: 10vh">
          <div className="col-sm-4"> 
            <button type="button" className="btn btn-default" style="font-size: calc(10px + 2vmin)" @click="increment(); discard(theIndex)">Complete</button>
          </div>
          <div className="col-sm-4"> 
            <button type="button" className="btn btn-default" style="font-size: calc(10px + 2vmin)" @click="discard(theIndex)">Discard</button>
          </div>
          <div className="col-sm-4"> 
            <button type="button" className="btn btn-default" style="font-size: calc(10px + 2vmin)" @click="setIndex(shuffle(0, taskDeck.length))">Shuffle</button>
          </div>
        </div>
      </div>
      
      <div className="tracker">{{completed}} Completed Tasks</div>

      <form className="container bg-white" id="taskbox" @submit.prevent="onSubmit">

        <!-- "Enter a new task" -->
        <div className="row">
          <div className="col-sm-12" id="taskEnterText" style="padding-bottom: 2vw">
            <div>Enter a new task</div>
          </div>
        </div>

        <!-- Input task -->
        <div className="row" style="padding-bottom: 2vw">
          <div className = "col-sm-12" id="input">
            <input type="text" name="forminput" className="form-control" placeholder="Write your task here" v-model="theTask"/>
          </div>
        </div>

        <!-- Selecting Date -->
        <div className="row g-3" style="padding-bottom: 2vw">

          <!-- Month -->
          <div class="form-group col-sm-4">
            <label for="month" style="font-size: calc(5px + 2vmin)">Month</label>
            <select class="form-control" id="month" name="month" v-model="theMonth">
                <option value="January">1</option>
                <option value="February">2</option>
                <option value="March">3</option>
                <option value="April">4</option>
                <option value="May">5</option>
                <option value="June">6</option>
                <option value="July">7</option>
                <option value="August">8</option>
                <option value="September">9</option>
                <option value="October">10</option>
                <option value="November">11</option>
                <option value="December">12</option>
            </select>
          </div>

          <!--  Day -->
          <div class="form-group col-sm-4">
            <label for="day" style="font-size: calc(5px + 2vmin)">Day</label>
            <select class="form-control" id="day" name="day" v-model="theDay">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
          </div>

          <!--  Year -->
          <div class="form-group col-sm-4">
            <label for="year" style="font-size: calc(5px + 2vmin)">Year</label>
            <select class="form-control" id="year" name="year" v-model="theYear">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
          </div>
        </div>

        <!--  Add Button -->
        <div className="row" style="padding-bottom: 2vw">
          <div className="col-sm-12 text-center">
            <button type="submit" className="btn btn-primary" id="addButton" @click="setArray(); addTask(taskArray)">Add</button>
          </div>
        </div>
      </form>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        completed: 0,
        theMonth: "January",
        theDay: 1,
        theYear: 2021,
        theTask: "",
        theIndex: 0,
        taskArray: [this.theTask, this.theMonth, this.theDay, this.theYear],
        taskDeck: []
      }
    },
    methods: {
      increment() {
        this.completed++
      },
      onSubmit () {
        console.log("Submitted");
      },
      getText(array) {
        if (this.taskDeck.length < 1 || array == null) {
          return;
        }
        return array[0];
      },
      getDate(array) {
        if (this.taskDeck.length < 1) {
          return;
        }
        const monthtemp = array[1];
        const daytemp = array[2];
        const yeartemp = array[3];
        return "".concat(daytemp).concat(" ").concat(monthtemp).concat(" ").concat(yeartemp);
      },
      setIndex(index) {
        this.theIndex = index;
      },
      shuffle(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      },
      setTaskDeck(newDeck) {
        this.taskDeck = newDeck;
      },
      discard(index) {

        if (this.taskDeck.length < 1) {
          return;
        }

        //return this.taskDeck.pop();

        const toDelete = this.taskDeck[index];
        const newDeck = this.taskDeck.filter(element =>
          element !== toDelete
        );
        this.setIndex(this.shuffle(0, newDeck.length));
        return this.setTaskDeck(newDeck);
      },
      addTask() {
        this.taskDeck.push({... this.taskArray})
      },
      setArray() {
        this.taskArray[0] = this.theTask
        this.taskArray[1] = this.theMonth
        this.taskArray[2] = this.theDay
        this.taskArray[3] = this.theYear
      }
    }
  }
</script>

<style>
  #taskbox {
    width: 40vw;
    min-height: 35vh;
    border: .1vw solid black;
    font-size: calc(10px + 2vmin);
    box-shadow: 2px 4px;
  }

  #taskdeck {
    width: 45vw;
    min-height: 40vh;
    border: .1vw solid black;
    font-size: calc(10px + 2vmin);
    box-shadow: 2px 4px;
  }

  .tracker {
    text-align: center;
    font-size: calc(5px + 2vmin);
    padding-bottom: 5vh;
    padding-top: 5vh;
  }

  #taskEnterText {
    font-weight: bold;
    font-size: calc(15px + 2vmin);
  }

  #taskText {
    font-size: calc(20px + 2vmin);
  }

  #taskDateText {
    font-size: calc(5px + 2vmin);
  }

  .Title {
    text-align: center;
    font-size: 5vw; 
    color:red; 
    font-weight: bold; 
    padding-bottom: 5vh; 
    padding-top: 5vh; 
    text-shadow: 2px 2px black;
  }

  #addButton { 
    min-width: 10vw;
    min-height: 1vw;
  }
</style>
