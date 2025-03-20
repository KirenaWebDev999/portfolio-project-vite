import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justifyContent="space-between">
                <Logo />
                <Menu />
                <MenuContact />
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
`
