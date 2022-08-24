import { useEffect, useRef, useState } from 'react';
import LoginForm from 'components/mainCp/loginForm';
import MainBanner from 'components/mainCp/mainBanner';
import MainLayout from 'layout/mainLayout';
import { MainPageInner } from './style';
import SignModal from 'components/mainCp/signModal';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'hooks/useMedia';
import TokenService from 'service/tokenService';

const MainPage = () => {
    // state
    const [modal, setModal] = useState<boolean>(false);
    // midea
    const { isPc } = useMedia();
    // naviagte
    const navigate = useNavigate();
    // token
    const auth = useRef<string | null>(TokenService.get(process.env.REACT_APP_TOEKN_KEY as string));
    // IsExist token redirect
    useEffect(() => {
        if (auth.current) {
            navigate('/todo', { replace: true });
        } else {
            return;
        }
    }, [navigate]);
    // html
    return (
        <>
            {modal && <SignModal setModal={setModal} />}
            <MainLayout setModal={setModal}>
                <MainPageInner>
                    {isPc && <MainBanner />}
                    <LoginForm />
                </MainPageInner>
            </MainLayout>
        </>
    );
};
export default MainPage;
