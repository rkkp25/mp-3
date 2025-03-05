import { styled } from "styled-components";

const StyledImg = styled.img`
    width: 50%;
    border: double 5px #49b385;
    border-radius: 10%;
    margin-top: 1vw;

    @media (max-width: 900px) {
        margin: auto;
        width: 60%;
    }
`;

const StyledOuterDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: calc(3px + 1vw);

    @media (max-width: 900px) {
        flex-direction: column;
        font-size: calc(3px + 2.5vw);
    }

`;

const StyledInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vw 1.5vw 0 2vw;

`;

export default function HomePreview() {
    return (
        <>
            <StyledOuterDiv>
                <StyledImg src="/about_picture.jpg" alt="a picture of me!"></StyledImg>
                <StyledInnerDiv>
                    <p>My name is Kristine Peters. I'm a senior studying computer science at Boston University. I live in the Greater Boston Area with my parents and my dog, Yuki. I'm currently looking for post-graduate employment in the Boston area or remote, and I'm most interested in Full Stack Development and Cybersecurity.</p>
                    <p>In my free time, I enjoy drawing, playing videogames, learning guitar, and working out at the gym.</p>
                </StyledInnerDiv>
            </StyledOuterDiv>
        </>
    )
}
