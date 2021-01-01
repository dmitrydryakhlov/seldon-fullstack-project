import React from "react";

export const About = () => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">Enter word and number</h1>
            <p className="lead">{'It will return {word.length} and {number * number}'}</p>
            <p className="lead">Success rate: <b>35%</b></p>
        </div>
    </div>
)
