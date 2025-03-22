import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from '../../../assets/images/foto2.webp'
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
                <ContentMain>
                    <Greeting>Hi there! 👋</Greeting>
                    <MainTitle>I'm <span>Elena</span><br/>a <span>web developer</span></MainTitle>
                    <MainText>I craft responsive websites where technologies meet creativity</MainText>
                </ContentMain>
                <Photo src={photo} alt="web developer portfolio"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    font-weight: 700;
    font-size: 58px;
    color: ${theme.colors.mainSectionFont};
    letter-spacing: -0.02em;
`

const ContentMain = styled.div`

`

const MainTitle = styled.h2`
    white-space: nowrap;
    font-weight: 700;
    font-size: 58px;
    
    span {
        background: ${theme.colors.linearGradientFont};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
`

const Greeting = styled.span`
   
`

const MainText = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 42px;
    margin: 30px 0 40px;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    padding: 10px;
    object-position: top;
`

