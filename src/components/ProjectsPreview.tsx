import { useState } from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
    width: 10%;
    padding: 0.5vw;
    margin: 0 1vw;
`;

const StyledButton = styled.button`
    padding: 0.5vw;
    margin: 0 1vw;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledP = styled.p`
    padding: 0;
    margin: 0;
    vertical-align: middle;
    line-height: 1.6;
`

export default function ProjectsPreview() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    // FOR CALCULATOR P1
    //const [operator, setOperator] = useState("");

    const outputElement = document.getElementById("output");

    function doAdd() {
        let output = input1 + input2;
        if (outputElement != null) {
            if (Number(output) < 0) {
                outputElement.style.color = "red";
            }
            else {
                outputElement.style.color = "black";
            }
            outputElement.innerHTML = String(output);
        }
    }

    function doSub() {
        let output = input1 - input2;
        if (outputElement != null) {
            if (Number(output) < 0) {
                outputElement.style.color = "red";
            }
            else {
                outputElement.style.color = "black";
            }
            outputElement.innerHTML = String(output);
        }
}
    function doDiv() {
        let output = input1 / input2;
        if (outputElement != null) {
            if (Number(output) < 0) {
                outputElement.style.color = "red";
            }
            else {
                outputElement.style.color = "black";
            }
            outputElement.innerHTML = String(output);
        }
}
    function doPow() {
        let output = 1;
        if (outputElement != null) {
            for(let i = 0; i < input2; i++) {
                output = output * input1;
            }
            if (outputElement && Number(output) < 0) {
                outputElement.style.color = "red";
            }
            else {
                outputElement.style.color = "black";
            }
            outputElement.innerHTML = String(output);
        }
    }

    return (
        <>
            <h2>BU CS411 Full-stack Development Project</h2>
            <h4>Fall 2023 (September-December)</h4>
            <p>I worked in a group of 4, where two of us, including myself, focused on frontend development, while the other two concentrated on backend development. The goal of the project was to use two APIs to, 1) display a random image, and 2) pick the most common colors from the image, and display those alongside the image. Users were prompted to guess the hex values of the displayed colors and output a score. In the process, I along with my team learned to navigate Git and how to successfully work together towards a cohesive and functional end product.</p>
            <a target="_blank" href="https://github.com/rkkp25/CS411_PROJECT">GitHub link</a>

            <h2>Kristinekodes.com</h2>
            <h4>Summer 2023-Current</h4>
            <p>A website I started making in my free time to learn HTML and CSS. I quickly made the decision that I wanted this website to act as a resume of sorts, but with a more personal touch! This is currently under development: I'm currently taking a web development class, and I’m refactoring my work as the semester continues.</p>
            <a target="_blank" href="https://kristinekodes.com/">Kristinekodes.com</a>

            <h2>Chess AI</h2>
            <h4>Fall 2024</h4>
            <p>An AI that plays a game of chess by calculating the best moves at a given point using an alpha beta algorithm, and alpha beta pruning. We applied heuristics to the graph in which the AI traversed over, telling it which moves would be better or worse.</p>
            <a target="_blank" href="https://github.com/kkpeters/Chess-ABP-AI">GitHub Link</a>

            <h2>Tetris AI</h2>
            <h4>Fall 2024</h4>
            <p>A reinforcement learning based AI that over time, learns how to play tetris by taking in rewards and discounts from each move it made, learning from its mistakes or successes, and learning how to earn a higher score.</p>
            <a target="_blank" href="https://github.com/kkpeters/Tetris-RL-AI">GitHub Link</a>

            <h2>Calculator</h2>
            <StyledDiv>
                <StyledInput 
                    type="number"
                    placeholder="Input 1"
                    value={input1}
                    onChange={(e) => setInput1(Number(e.target.value))}
                />
                <StyledInput 
                    type="number"
                    placeholder="Input 2"
                    value={input2}
                    onChange={(e) => setInput2(Number(e.target.value))} 
                />
                <StyledButton onClick={doAdd}>+</StyledButton>
                <StyledButton onClick={doSub}>-</StyledButton>
                <StyledButton onClick={doDiv}>/</StyledButton>
                <StyledButton onClick={doPow}>**</StyledButton>
                <StyledP id="output"></StyledP>
            </StyledDiv>

        </>
    )
}
