import { Dispatch, SetStateAction, FC } from 'react';
import CommonButton from 'components/common/button';
import { BlackBackGroundTemp } from 'style/common';
import SignModalHeader from './header';
import { SignForm, SignModalTemp } from './style';
import useInput from 'hooks/useInput';
import useRegExp from 'hooks/useRegExp';
import { useEffect, useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { UserDataType } from 'typings/db/post.type/user';
import UserSerivce from 'service/userService';
import debug from 'util/debug';

interface SignModalProp {
    setModal: Dispatch<SetStateAction<boolean>>;
}

const SignModal: FC<SignModalProp> = ({ setModal }) => {
    // state
    const [email, onChangeEmail] = useInput<string>('');
    const [password, onChangePassword] = useInput<string>('');
    const [passwordConfrim, onChangePasswordConFirm] = useInput<string>('');
    const [passwordTest, setPassowrdTest] = useState<boolean>(false);

    // regExp result hooks
    const disabled = useRegExp(email, password);

    // passwordConfim test func
    useEffect(() => {
        if (password === passwordConfrim) {
            setPassowrdTest(true);
        } else {
            setPassowrdTest(false);
        }
    }, [passwordConfrim, password]);

    // react qurey mutate
    const SignUpMutate = useMutation((data: UserDataType) => UserSerivce.signUp(data), {
        onSuccess: response => {
            debug(response);
            alert('회원가입이 완료되었습니다.');
            setModal(false);
        },
        onError: error => {
            debug(error);
            alert('이미 존재하는 이메일입니다');
        },
    });

    // onSignInhandler
    const onSignInhandler = useCallback(() => {
        const data: UserDataType = {
            email: email,
            password: password,
        };
        if (email === '' && password === '') {
            alert('아이디와 비밀번호를 입력해주세요');
            return;
        } else {
            SignUpMutate.mutate(data);
        }
    }, [email, password]);

    return (
        <BlackBackGroundTemp>
            <SignModalTemp>
                <SignModalHeader setModal={setModal} />
                <SignForm>
                    <input
                        type="text"
                        placeholder="이메일"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 8자 이상"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        value={passwordConfrim}
                        onChange={onChangePasswordConFirm}
                    />
                    {passwordConfrim && !passwordTest && <p>비밀번호 확인이 일치하지 않습니다</p>}
                    <CommonButton
                        size="full"
                        mainColor="#D070FB"
                        subColor="#fff"
                        height="35px"
                        disabled={disabled ? true : passwordTest ? false : true}
                        onClick={onSignInhandler}
                    >
                        가입하기
                    </CommonButton>
                </SignForm>
            </SignModalTemp>
        </BlackBackGroundTemp>
    );
};
export default SignModal;
