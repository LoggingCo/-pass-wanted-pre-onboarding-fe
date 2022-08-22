import { useEffect, useRef, useState } from 'react';
import LoginForm from 'components/mainCp/loginForm';
import MainBanner from 'components/mainCp/mainBanner';
import MainLayout from 'layout/mainLayout';
import { MainPageInner } from './style';
import SignModal from 'components/mainCp/signModal';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'hooks/useMedia';

const MainPage = () => {
    const [modal, setModal] = useState<boolean>(false);
    const { isPc } = useMedia();

    const navigate = useNavigate();
    const auth = useRef<string | null>(
        localStorage.getItem(process.env.REACT_APP_TOEKN_KEY as string),
    );

    useEffect(() => {
        if (auth.current) {
            navigate('/todo', { replace: true });
        } else {
            return;
        }
    }, [navigate]);

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
