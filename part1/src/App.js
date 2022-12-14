const Hello = () => {

  const now = new Date()

  return (
    <p>It is {now.toString()}</p>

  )
}

const App = () => {

  const a = 10
  const b = 20

  return (
    <div>
      <Hello />
      <p>
        {a} multiplied by {b} = {a * b}
      </p>
      <p>Full Stack Open part1</p>
    </div>
  )
}

export default App