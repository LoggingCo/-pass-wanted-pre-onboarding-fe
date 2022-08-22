import { useEffect, useRef, useState } from 'react';

const useRegExp = (email: string, passowrd: string) => {
    const [emailResult, setEmailResult] = useState<boolean>(false);
    const [passwordResult, setPasswordResult] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);

    const emailExp = useRef<RegExp>(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    );
    const passwordExp = useRef<RegExp>(/^.{8}/);

    useEffect(() => {
        if (email === '') {
            setEmailResult(false);
        } else {
            if (emailExp.current.test(email)) {
                setEmailResult(true);
            } else {
                setEmailResult(false);
            }
        }
    }, [email]);

    useEffect(() => {
        if (passowrd === '') {
            setPasswordResult(false);
        } else {
            if (passwordExp.current.test(passowrd)) {
                setPasswordResult(true);
            } else {
                setPasswordResult(false);
            }
        }
    }, [passowrd]);

    useEffect(() => {
        if (emailResult && passwordResult) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [emailResult, passwordResult]);

    return disabled;
};
export default useRegExp;
