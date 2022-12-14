import styled from '@emotion/styled';
import { StyleProps } from 'typings/style/style.type';

export const CommonButtonTemp = styled.button<StyleProps>`
    width: ${props =>
        props.width
            ? props.width
            : props.size === 'small'
            ? '4rem'
            : props.size === 'medium'
            ? '7rem'
            : props.size === 'large'
            ? '10rem'
            : props.size === 'full' && '100%'};

    ${props => (props.height ? `height: ${props.height}` : 'aspect-ratio: 5 / 1')};
    opacity: ${props => props.disabled && '0.3'};
    border-radius: 8px;
    font-size: ${props => props.fontSzie && props.fontSzie};
    padding: 4px 0;

    background-color: ${props => (props.mainColor ? props.mainColor : props.theme.mainColor)};
    color: ${props => (props.subColor ? props.subColor : props.theme.subColor)};

    :hover {
        opacity: ${props => (props.disabled ? '0.3' : '0.6')};
    }
`;
