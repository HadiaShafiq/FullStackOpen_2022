///* EXERCISES 1.6 -1.14*/

import { useState } from "react";

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good+1)
    const handleBadClick = () =>  setBad(bad + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)


    return (
        <>
            <Heading1 heading="Give Feedback" />

            <Button text="Good" handleClick={handleGoodClick} />
            <Button text="Neutral" handleClick={handleNeutralClick}/>
            <Button text="Bad" handleClick={handleBadClick} />

            <Heading1 heading="Statistics" />

            <Statistics good={good} bad={bad} neutral={neutral} /><br />
            

        </>
    )
};

const Heading1 = ({ heading }) => {
    return (
        <>
            <h1>{heading}</h1>
        </>
    )
};

const Button = ({ text, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} > { text }</button>
        </>
    )
}

const Statistics = (props) => {
    //console.log(bad );
    const good = props.good
    const bad = props.bad
    const neutral = props.neutral
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <>
                <b>No FeedBack Given</b>
            </>
        )
    }
    return (
        <>
            <table><tbody><Count feedback="Good" count={good} /><Count feedback="Neutral" count={neutral} /><Count feedback="Bad" count={bad} /><Total good={good} bad={bad} neutral={neutral} /><Average good={good} bad={bad} neutral={neutral} /><Percentage good={good} /></tbody></table>

        </>
    )   
};

const Count = (props) => {
    return (
        <tr>
            <td>
                {props.feedback}
            </td>
            <td>
                {props.count}
            </td >
        </tr>
    )
};

const Total = ({ good, bad, neutral }) => {
    return (
        <tr>
            <td>
                Total Feedback received
            </td>
            <td>
                {good + bad + neutral}
            </td>
        </tr>
    )
};

const Average = ({ good, bad, neutral }) => {

    const sum = function (a, b, c) {
        return (a.good + b.bad + c.neutral)
    }

    const average = function (a, b,c) {
        return (a.good + (b.bad*-1)) /c
    }
    const sums = sum({ good }, { bad }, { neutral })
    const avg = average({ good }, { bad }, sums )
    
    return (
        <tr>
            <td>
                Average Feedback
            </td>
            <td>
                {avg}
            </td>
        </tr>
    )
};

const Percentage = ({ good }) => {

    const percentage = function (a) {
        return (a.good) / 100
    }
    const per = percentage({ good })

    return (
        <tr>
            <td>
                Positive Feedback
            </td>
            <td>
                {per}
            </td>
        </tr >
    )
};

export default App;