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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const partArray = [part1.name, part2.name, part3.name]
  const exerciseArray = [part1.exercises, part2.exercises, part3.exercises]

  return (
    <div>
      <Header name = {course} />
      <Content nameArray = {partArray} exercises = {exerciseArray} />
      <Total number = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App