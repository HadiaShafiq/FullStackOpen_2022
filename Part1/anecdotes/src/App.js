import { useState } from 'react'

function App() {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const [selected, setSelected] = useState(0)

    const [maxVoteIndex, setMaxVoteIndex] = useState(0)

    const handleAnecdoteClick = () => {
        let anecdote = Math.floor(Math.random() * anecdotes.length)
        setSelected(anecdote)
        
    }
    const handleVoteClick = () => {
        const copy = [...votes]
        copy[selected] = copy[selected] + 1
        setVotes(copy)
        if (copy[selected] > copy[maxVoteIndex]) {
            setMaxVoteIndex(selected)
        }
    }
    
  return (
      <>
          <Heading1 heading="Anecdote of the Day" />
          <GetAnecdote index={selected} anecdote={anecdotes} />
          <br /> has votes  <GetVote index={selected} votes={votes} /> <br />

          <Button text="Vote" handleClick={handleVoteClick} />
          <Button text="Next Anecdote" handleClick={handleAnecdoteClick} />

          <Heading1 heading="Anecdote with Highest Votes" />

          <GetAnecdote index={maxVoteIndex} anecdote={anecdotes} />
          <br /> has votes  <GetVote index={maxVoteIndex} votes={votes} /> <br />
      </>
  );
}

const Heading1 = ({ heading }) => {
    return (
        <>
            <h1>{heading}</h1>
        </>
    )
};

const GetAnecdote = (props) => {
    const { index, anecdote } = props
    return (
        <>
            {anecdote[index]} 
        </>
    )
    
}

const Button = ({ text, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} > {text}</button>
        </>
    )
}

const GetVote = (props) => {
    const { index, votes } = props
    return (
        <>
            {votes[index]}
        </>
    )

}

export default App;