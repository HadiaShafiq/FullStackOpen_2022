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



 ///////* EXERCISE 1.4 ALL OBJECTS IN AN ARRAY and 1.5 *
/*
const App = () => {
    const course = {
        name : 'Half Stack Application Development',
        parts : [
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
    }
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
};

const Header = (props) => {

    return (
        <>
            <h1>{props.course.name}</h1>
        </>
    )
};
const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    )
};
const Total = (props) => {
    return (
        <>
            <p>
                Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </>
    )
};
const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
};
export default App;
 */


///////* EXERCISE 1.3 USING OBJECTS*/
/*    
const App = () => {
    const course = 'Half Stack Application Development'

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
    return (
        <>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
        </>
    )
};

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
};
const Content = (props) => {
    return (
        <>
            <Part part={props.part1.name} exercises={props.part1.exercises} />
            <Part part={props.part2.name} exercises={props.part2.exercises} />
            <Part part={props.part3.name} exercises={props.part3.exercises} />

        </>
    )
};
const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </>
    )
};
const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
};
export default App;
*/