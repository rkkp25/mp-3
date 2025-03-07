// Imports
import { Link } from "react-router";
import { styled } from "styled-components";

// Styles 
const StyledLink = styled(Link)`
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    margin: 3vw 0;
    padding: 0.5vw 4vw;
    border: solid 2px #49b385;
    background-color: white;
    text-decoration: none;
    color: black;
    font-size: calc(2px + 1vw);

    @media (max-width: 900px) {
        padding: 0.5vw;
        margin: 0 1vw;
        font-size: calc(2px + 1.7vw);
    }


`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#63d6a4, white);
    border-right: double 5px white;
    padding: 0 3vw;
    text-align: center;

    @media (max-width: 900px) {
        display: inline;
        background-image: linear-gradient(#63d6a4, #63d6a4);
        padding: 1vw;
        border-right: none;
        border-bottom: double 5px white;
    }

`;

export default function Nav() {
    return (
        <>
            <StyledNav>
                <StyledLink to={`/`}>Home</StyledLink>
                <StyledLink to={`/education`}>Education</StyledLink>
                <StyledLink to={`/experience`}>Experience</StyledLink>
                <StyledLink to={`/skills`}>Skills</StyledLink>
                <StyledLink to={`/projects`}>Projects</StyledLink>
                <StyledLink to={`/documents`}>Documents</StyledLink>
            </StyledNav>
        </>
    )
}

