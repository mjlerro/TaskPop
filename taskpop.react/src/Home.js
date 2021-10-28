import React, { useState } from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
  const [text, setText] = useState("");
  const [month, setMonth] = useState("January");
  const [day, setDay] = useState(1);
  const [year, setYear] = useState(2021);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [taskDeck, setTaskDeck] = useState([]);
  let taskArray = [text, month, day, year];
  /*const [dueStyle, setDueStyle] = useState({color: 'black'})*/
 /*let inputStyle = {
    color: 'black'
  };*/

  /** Change color based on date */
  /*function datePassed(month, day, year) {
    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth();
    let thisDay = today.getDay();

    if (year < thisYear) {
      //inputStyle = {color: 'red'};
      setDueStyle({color: 'red'});
      return;
    } else if (year > thisYear) {
      //inputStyle = {color: 'black'};
      setDueStyle({color: 'black'});
      return;
    } else if (month < thisMonth) {
      //this.inputStyle = {color: 'red'};
      setDueStyle({color: 'red'});
      return;
    } else if (month > thisMonth) {
      //inputStyle = {color: 'black'};
      setDueStyle({color: 'black'});
      return;
    } else if (day < thisDay) {
      //inputStyle = {color: 'red'};
      setDueStyle({color: 'red'});
      return;
    } else {
      //inputStyle = {color: 'black'};
      setDueStyle({color: 'black'});
      return;
    }
  }*/

  function shuffle(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getText(array) {
    if (taskDeck.length < 1) {
      return;
    }
    return array[0];
  }

  function getDate(array) {
    if (taskDeck.length < 1) {
      return;
    }
    const monthtemp = array[1];
    const daytemp = array[2];
    const yeartemp = array[3];
    return "".concat(daytemp).concat(" ").concat(monthtemp).concat(" ").concat(yeartemp);
  }

  function discard(index) {
    if (taskDeck.length < 1) {
      return;
    }
    const toDelete = taskDeck[index];
    const newDeck = taskDeck.filter(element =>
      element !== toDelete
    );
    setIndex(shuffle(0, newDeck.length));
    return setTaskDeck(newDeck);
  }

  return (
    <div className="container bg-light" style={{"padding-bottom": "5vw"}}>
      <div className="Title">TaskPop</div>

      {/** Task Deck */}
      <div className="container bg-white" id="taskdeck">
        <div className="row task-text">
            <div className="col-sm-12" id="taskText">
              <div>{getText(taskDeck[index])}</div>
            </div>
            <div className="col-sm-12" id="taskDateText" style={{"padding-bottom": "2vw"}}>

              <div /*style={dueStyle}*/>Due {getDate(taskDeck[index])}</div>

            </div>
        </div>
        <div className="row g-3 text-center" style={{"padding-top": "10vh"}}>
          <div className="col-sm-4"> 
            <button type="button" className="btn btn-default" style={{"font-size": "calc(10px + 2vmin)"}} onClick={() => {discard(index); setCount(count + 1)/*; datePassed(month, day, year)*/}}>Complete</button>
          </div>
          <div className="col-sm-4"> 
            <button type="button" className="btn btn-default" style={{"font-size": "calc(10px + 2vmin)"}} onClick={() => {discard(index)/*; datePassed(month, day, year)*/}}>Discard</button>
          </div>
          <div className="col-sm-4"> 
            <button type="button" className="btn btn-default" style={{"font-size": "calc(10px + 2vmin)"}} onClick={() => {setIndex(shuffle(0, taskDeck.length))/*; datePassed(month, day, year)*/}}>Shuffle</button>
          </div>
        </div>
      </div>

      <div className="tracker">{count} Completed Tasks</div>
      
      {/** Add task form */}
      <form onSubmit={(event) => event.preventDefault()} className="container bg-white" id="taskbox">

        {/* "Enter a new task" */}
        <div className="row">
          <div className="col-sm-12" id="taskEnterText" style={{"padding-bottom": "2vw"}}>
            <div>Enter a new task</div>
          </div>
        </div>

        {/* Input task */}
        <div className="row" style={{"padding-bottom": "2vw"}}>
          <div className = "col-sm-12" id="input">
            <input type="text" name="forminput" className="form-control" placeholder="Write your task here" onChange={(event) => setText(event.target.value)}/>
          </div>
        </div>

        {/* Selecting Date */}
        <div className="row g-3" style={{"padding-bottom": "2vw"}}>

          {/* Month */}
          <div class="form-group col-sm-4">
            <label for="month" style={{"font-size": "calc(5px + 2vmin)"}}>Month</label>
            <select class="form-control" id="month" name="month" value={month} onChange={(event) => setMonth(event.target.value)}>
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

          {/* Day */}
          <div class="form-group col-sm-4">
            <label for="day" style={{"font-size": "calc(5px + 2vmin)"}}>Day</label>
            <select class="form-control" id="day" name="day" value={day} onChange={(event) => setDay(event.target.value)}>
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

          {/* Year */}
          <div class="form-group col-sm-4">
            <label for="year" style={{"font-size": "calc(5px + 2vmin)"}}>Year</label>
            <select class="form-control" id="year" name="year" value={year} onChange={(event) => setYear(event.target.value)}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
          </div>
        </div>

        {/* Add Button */}
        <div className="row" style={{"padding-bottom": "2vw"}}>
          <div className="col-sm-12 text-center">
            <button type="submit" className="btn btn-primary" id="addButton" onClick={() => {setTaskDeck([...taskDeck, taskArray])/*; datePassed(month, day, year)*/}}>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
