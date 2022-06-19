import React from 'react'

const Total = ({ parts }) => {
    const total = parts.reduce((prev, curr) => prev + curr.exercises, 0);
    return (
        <b>
            Total of {total} exerxises
        </b>
    )
}

export default Total;