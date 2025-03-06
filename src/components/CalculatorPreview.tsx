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
`;

const StyledP = styled.p`
    padding: 0;
    margin: 0;
    vertical-align: middle;
    line-height: 1.6;
`;

export default function CalculatorPreview() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    // FOR CALCULATOR P1
    //const [operator, setOperator] = useState("");

    const outputElement = document.getElementById("output");

    function showOutput(output: number) {
        console.log(output);
        if (outputElement != null) {
            if (output < 0) {
                outputElement.style.color = "red";
            }
            else {
                outputElement.style.color = "black";
            }
            outputElement.innerHTML = String(output);
        }
    }

    function doAdd() {
        let output = input1 + input2;
        showOutput(output);
    }

    function doSub() {
        let output = input1 - input2;
        showOutput(output);
    }
    function doDiv() {
        let output = input1 / input2;
        showOutput(output);
    }
    function doPow() {
        let output = 1;
        if (outputElement != null) {
            for(let i = 0; i < input2; i++) {
                output = output * input1;
            }
            showOutput(output);
        }
    }
    function doClear() {
        if (outputElement != null) {
            setInput1(0)
            setInput2(0)
            //console.log(input1, input2)
            outputElement.innerHTML = "";
        }
    }

    return (
        <>
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
                <StyledButton onClick={doClear}>Clear</StyledButton>
                <StyledP id="output"></StyledP>
            </StyledDiv>
        </>
    )
}
