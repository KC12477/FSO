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
      <Part name = {props.array[0].name} exerciseNumber = {props.array[0].exercises} />
      <Part name = {props.array[1].name} exerciseNumber = {props.array[1].exercises} />
      <Part name = {props.array[2].name} exerciseNumber = {props.array[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.array[0].exercises + props.array[1].exercises 
      + props.array[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name = {course} />
      <Content array = {parts} />
      <Total array = {parts} />
    </div>
  )
}

export default App