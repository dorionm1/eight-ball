import './App.css';
import React, { useState } from 'react';

const answers =
[
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

const Header = () => {
  return (
    <h1>Eight Ball App</h1>
  )
}

const EightBall = () => {
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState("Think of a question")
  const [color, setColor] = useState("black")

  const randArrIndex = Math.floor(Math.random() * answers.length)

  const handleClick = () => {
    setToggle(!toggle)
    if(toggle-true){
      setText(answers[randArrIndex].msg);
      setColor(answers[randArrIndex].color);
    } else {
      setText("Think of a Question");
      setColor("black");
    }
  }

  return (
      <div id ="eight-ball" style={{ backgroundColor: color}} onClick={handleClick}>
          <div id="text">{text}</div>
      </div>
  );
}

const App = () => {
  return (
  <div className="app">
      <Header/>
      <EightBall/>
  </div>
  );
}

export default App;
