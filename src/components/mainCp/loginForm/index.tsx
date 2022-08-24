import { useMutation } from '@tanstack/react-query';
import CommonButton from 'components/common/button';
import useInput from 'hooks/useInput';
import useRegExp from 'hooks/useRegExp';
import { useCallback } from 'react';
import UserSerivce from 'service/userService';
import { UserDataType } from 'typings/db/post.type/user';
import { LoginFormTemp } from './style';
import debug from 'util/debug';
import { useNavigate } from 'react-router-dom';
import TokenService from 'service/tokenService';

const LoginForm = () => {
    // util
    const naviagte = useNavigate();

    // state
    const [email, onChangeEmail] = useInput<string>('');
    const [password, onChangePassword] = useInput<string>('');

    // regExp result hooks
    const disabled = useRegExp(email, password);

    // react qurey mutate
    const LoginMutate = useMutation((data: UserDataType) => UserSerivce.login(data), {
        onSuccess: response => {
            debug(response);
            TokenService.set({
                key: process.env.REACT_APP_TOEKN_KEY as string,
                value: response.data.access_token,
            });
            if (TokenService.get(process.env.REACT_APP_TOEKN_KEY as string)) {
                naviagte('/todo', { replace: true });
            }
        },
        onError: error => {
            debug(error);
            alert('이메일 혹은 비밀번호를 확인해주세요');
        },
    });

    // onLoginHandler
    const onLoginHandler = useCallback(() => {
        const data: UserDataType = {
            email: email,
            password: password,
        };
        if (email === '' && password === '') {
            alert('아이디와 비밀번호를 입력해주세요');
            return;
        } else {
            LoginMutate.mutate(data);
        }
    }, [email, password]);

    // render
    return (
        <LoginFormTemp>
            <p>사전과제 확인하기</p>
            <p>사전과제 확인을 위해 로그인 해주세요</p>
            <div>
                <input type="text" placeholder="이메일" value={email} onChange={onChangeEmail} />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <CommonButton
                size="full"
                mainColor="#D070FB"
                subColor="#fff"
                height="48px"
                disabled={disabled}
                onClick={onLoginHandler}
            >
                과제 확인하기
            </CommonButton>
        </LoginFormTemp>
    );
};
export default LoginForm;
