import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
            <MenuContact />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`
