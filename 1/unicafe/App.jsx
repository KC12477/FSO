import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <StatisticLine text={"good"} value={props.good} />
          <StatisticLine text={"neutral"} value={props.neutral} />
          <StatisticLine text={"bad"} value={props.bad} />
          <StatisticLine text={"All"} value={props.all} />
          <StatisticLine text={"Average"} value={props.average} />
          <StatisticLine text={"Positive"} value={props.positive + " %"} />
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    incrementStats([updatedGood, bad])
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    incrementStats([good, bad])
  }

  const incrementBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    incrementStats([good, updatedBad])
  }

  const incrementStats = (statsArray) => {
    const updatedAll = all + 1
    setAll(updatedAll)
    const updatedAverage = (statsArray[0] - statsArray[1]) / updatedAll
    setAverage(updatedAverage)
    setPositive(statsArray[0] * 100 / updatedAll)
  }

  return (
    <div>
      <Header text={"give feedback"} />
      <div>
        <Button onClick={() => incrementGood()} text="good" />
        <Button onClick={() => incrementNeutral()} text="neutral" />
        <Button onClick={() => incrementBad()} text="bad" />
      </div>
      <Header text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App