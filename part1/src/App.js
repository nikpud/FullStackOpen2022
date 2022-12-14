const Hello = (props) => {

  const now = new Date()

  return (
    <div>
      <p>Hello {props.name}</p>
      <p>It is {now.toString()}</p>
    </div>

  )
}

const App = () => {

  const a = 10
  const b = 20
  const name = "Bob"

  return (
    <div>
      <Hello name={name}/>
      <p>
        {a} multiplied by {b} = {a * b}
      </p>
      <p>Full Stack Open part1</p>
    </div>
  )
}

export default App