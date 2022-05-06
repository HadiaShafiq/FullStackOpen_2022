///////* EXERCISE 1.4 ALL OBJECTS IN AN ARRAY and 1.5 *

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