import { SignHeaderTemp } from './style';
import { Dispatch, SetStateAction, FC } from 'react';

interface SignModalHeaderProp {
    setModal: Dispatch<SetStateAction<boolean>>;
}

const SignModalHeader: FC<SignModalHeaderProp> = ({ setModal }) => {
    return (
        <SignHeaderTemp>
            <div>회원가입</div>
            <button onClick={() => setModal(false)}>x</button>
        </SignHeaderTemp>
    );
};
export default SignModalHeader;
