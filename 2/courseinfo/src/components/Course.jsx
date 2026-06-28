import Header from './Header'
import Content from './Content'
import Total from './total'

const Course = (props) => {  return props.courses.map(course => (
  <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts.reduce((sum, part) => sum + part.exercises, 0)
        }
      />
    </div>
))}

export default Course