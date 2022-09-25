const Part = (props) =>{
  return (
  <p>
    {props.name} {props.exerciseNumber}
  </p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.nameArray[0]} exerciseNumber = {props.exercises[0]} />
      <Part name = {props.nameArray[1]} exerciseNumber = {props.exercises[1]} />
      <Part name = {props.nameArray[2]} exerciseNumber = {props.exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partArray = [part1, part2, part3]
  const exerciseArray = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header name = {course} />
      <Content nameArray = {partArray} exercises = {exerciseArray} />
      <Total number = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App