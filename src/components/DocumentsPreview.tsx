import { styled } from "styled-components";

const StyledA = styled.a`
    color: black;
`;

const StyledImg = styled.img`
    max-width: 450px;
    border: double 5px #49b385;
    border-radius: 10%;

    @media (max-width: 900px) {
        max-width: 95%;
    }
`;

const StyledDiv = styled.div`
    padding-left: 2vw;
`;

export default function DocumentsPreview() {
    return (
        <>
            <h2>Download a PDF of my resume <StyledA target="_blank" href="kristine-peters-resume.pdf">here</StyledA>!</h2>
            <h2>Contact:</h2>
            <p>Feel free to reach out to me at the following:</p>
            <StyledDiv>
                <p><StyledA href="mailto:kristinekpeters@gmail.com">kristinekpeters@gmail.com</StyledA></p>
                <p><StyledA href="https://www.linkedin.com/in/kristine-peters-1902b8266">LinkedIn</StyledA></p>
            </StyledDiv>
            <StyledImg src="/yuki.jpg" alt="a picture of my dog, yuki"></StyledImg>
        </>
    )
}
