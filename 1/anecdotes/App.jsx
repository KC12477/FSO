import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Anecdote = (props) => {
  return (
    <div>{props.text}</div>
  )
}

const VoteStats = (props) => {
  return (
    <div>has {props.number} votes</div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [mostVotesIndex, setMostVotesIndex] = useState(0)

  const voteCurrAnecdote = (currVotes) => {
    const newVotes = [...currVotes]
    newVotes[selected] = currVotes[selected] + 1
    setVotes(newVotes)
    setMostVotesIndex(newVotes.indexOf(Math.max(...newVotes)))
  }

  const randomSelect = (currSelected) => {
    const randomNo = Math.floor(Math.random() * 7) + 1
    const nextSelect = (currSelected + randomNo) % 8
    setSelected(nextSelect)
  }

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote text={anecdotes[selected]} />
      <VoteStats number={votes[selected]} />
      <Button onClick={() => voteCurrAnecdote(votes)} text="vote" />
      <Button onClick={() => randomSelect(selected)} text="next anecdote" />
      <Header text={"Anecdote with most votes"} />
      <Anecdote text={anecdotes[mostVotesIndex]} />
      <VoteStats number={votes[mostVotesIndex]} />
    </div>
  )
}

export default App