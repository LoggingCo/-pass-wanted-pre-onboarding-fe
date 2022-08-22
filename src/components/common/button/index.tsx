import { FC } from 'react';
import { StyleProps } from 'typings/style/style.type';
import { CommonButtonTemp } from './style';

const CommonButton: FC<StyleProps> = ({
    children,
    size,
    fontSzie,
    mainColor,
    subColor,
    width,
    height,
    disabled,
    onClick,
    onKeyPress,
    type,
}) => {
    return (
        <CommonButtonTemp
            onClick={onClick}
            onKeyPress={onKeyPress}
            size={size}
            fontSzie={fontSzie}
            mainColor={mainColor}
            subColor={subColor}
            width={width}
            height={height}
            disabled={disabled}
            type={type}
        >
            {children}
        </CommonButtonTemp>
    );
};
export default CommonButton;
