// Imports  
import { styled } from "styled-components";
import { useLocation } from "react-router";

// Styles   
const StyledHeader = styled.header`
    padding: 1vw 3vw;
    background-color: #63d6a4;
    border-bottom: double 5px white;
`;

const StyledH1 = styled.h1`
    font-size: calc(5px + 1.5vw);

    @media (max-width: 900px) {
        font-size: calc(5px + 4vw);
    }
`;

const StyledP = styled.p`
    font-size: calc(3px + 1vw);
    
    @media (max-width: 900px) {
        font-size: calc(3px + 3vw);
    }
`;


export default function Header() {
    const location = useLocation();
	let pathname = location.pathname;
    if (pathname==="/") {
            pathname = "Home";
    }
    else {
        pathname = pathname.charAt(1).toUpperCase() + pathname.slice(2);
    }


    return (
        <>
            <StyledHeader>
                <StyledH1>Kristine Peters</StyledH1>
                <StyledP>{pathname}</StyledP>
            </StyledHeader>
        </>
    )
}


