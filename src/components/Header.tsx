import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
        &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Header = () => (
    <div className="header-div">
        <StyledLink to="/homepage"><header>ROCK PAPER SCISSORS</header></StyledLink>
    </div>
)