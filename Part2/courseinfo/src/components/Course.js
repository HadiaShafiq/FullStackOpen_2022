import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    return (
        <>
            {course.map(course =>
                <div key={course.id} >
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                </div>

            )}
        </>
    )
}

export default Course