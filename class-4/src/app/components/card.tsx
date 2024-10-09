import React from "react";

interface info {
    name : string,
    rollno: number,
    age: number,
    day: string
};

const Card = (props: info) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Roll No: {props.rollno}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Day: {props.day}</h1>
        </div>
    )
};

export default Card;