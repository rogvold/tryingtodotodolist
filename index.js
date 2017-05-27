import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let taskList = [];
let numberOfTasks = 0;


class Form extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    taskList[numberOfTasks] = this.state.value;
    numberOfTasks += 1;
    updatePage();

  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Write here your goal!"
          onChange={this.handleChange} 
          />
          <button onClick={this.handleSubmit}>
            Submit
          </button>
      </div>
    );
  }
}

function updateTasks(){
  return(taskList.map((task, index) => (
    <div>
      <h2  key = {index}> 
        <input 
          type = "checkbox"
          value = {index}
          onClick ={removeTask(index)}/>
          {`${task} `} 
      </h2>
    </div>
  )));
}

function removeTask(index) {
  taskList.pop(index); //или зачеркнуть
  updatePage();
}

function updatePage() {
  ReactDOM.render(
  <div className="App"> 
    <Form/>
    {updateTasks()}
  </div>,
  document.getElementById('root'))
}

ReactDOM.render(
   <div className="App"> 
    <Form />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();

