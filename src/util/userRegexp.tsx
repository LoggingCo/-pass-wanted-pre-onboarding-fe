import { useRef } from 'react';

const UserRegExp = () => {
    const emailExp = useRef<RegExp>(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    );
    const passwordExp = useRef<RegExp>(/^.{8}/);

    return { emailExp, passwordExp };
};
export default UserRegExp;
