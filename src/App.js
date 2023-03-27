import './App.css';
import React, { useEffect, useState } from 'react';
import Clock from './Components/Clock';

function App() {
const [timerDays, setTimerDays] = useState();
const [timerHours, setTimerHours] = useState();
// eslint-disable-next-line
const [timerMinutes, setTimerMinutes] = useState();
const [timerSeconds, setTimerSeconds] = useState();

let interval;

const startTimer=()=>{
  const countDownDate= new Date("March 28,2023 ").getTime();

  interval=setInterval(() => {
const now = new Date().getTime();

const distance = countDownDate - now;

const days = Math.floor(distance / (24*60*60*1000));

const hours = Math.floor((distance % (24*60*60*1000)) / (1000*60*60));

const minutes = Math.floor((distance % (60*60*1000)) / (1000*60));

const seconds = Math.floor((distance % (60*1000)) / 1000);

if (distance < 0) {
  // Stop Timer

  clearInterval(interval.current);
}else{
  // Update Timer
  setTimerDays(days);
  setTimerHours(hours);
  setTimerMinutes(minutes);
  setTimerSeconds(seconds);
}
  });
};

useEffect(() => {
  startTimer();
});

  return (
  <div className="App">
    <Clock 
    timerDays={timerDays} 
    timerHours={timerHours} 
    timerMinutes={timerHours} 
    timerSeconds={timerSeconds}
    />
  </div>
  );
}

export default App;
