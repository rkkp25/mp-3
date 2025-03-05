import { styled } from "styled-components";

const StyledFooter = styled.footer`
    padding: 1vw;
    background-color: white;
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>All rights reserved.</p>
            </StyledFooter>
        </>
    )
}
