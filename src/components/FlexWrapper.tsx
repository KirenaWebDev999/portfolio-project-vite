import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justifyContent?: string
    alignItems?: string
    wrap?: string
    gap?: string
    alignContent?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '20px'};
    height: 100%;
`