import { styled } from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    padding: 1vw;
    background-color: white;
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>All rights reserved by Kristine Peters <Link to={`/credits`}>Credits</Link> &copy;</p>

            </StyledFooter>
        </>
    )
}
