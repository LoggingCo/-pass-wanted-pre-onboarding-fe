import { FC, ReactNode, SetStateAction, Dispatch } from 'react';
import { MainLayoutHeader, MainLayoutTemp } from './style';

interface MainLayoutProps {
    children?: ReactNode;
    setModal?: Dispatch<SetStateAction<boolean>>;
}

const MainLayout: FC<MainLayoutProps> = ({ children, setModal }) => {
    return (
        <MainLayoutTemp>
            <MainLayoutHeader>
                <div>WANTED</div>
                <p>
                    계정이 없으시간요?{' '}
                    <span onClick={() => setModal && setModal(true)}>회원가입</span>
                </p>
            </MainLayoutHeader>
            {children}
        </MainLayoutTemp>
    );
};
export default MainLayout;
