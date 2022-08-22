import { useState } from 'react';
import LoginForm from 'components/mainCp/loginForm';
import MainBanner from 'components/mainCp/mainBanner';
import MainLayout from 'layout/mainLayout';
import { MainPageInner } from './style';
import SignModal from 'components/mainCp/signModal';

const MainPage = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <>
            {modal && <SignModal setModal={setModal} />}
            <MainLayout setModal={setModal}>
                <MainPageInner>
                    <MainBanner />
                    <LoginForm />
                </MainPageInner>
            </MainLayout>
        </>
    );
};
export default MainPage;
