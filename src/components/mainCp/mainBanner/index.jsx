import { MainBannerTemp } from './style';
import MainImeage from '../../../assets/img/main_img.png';

const MainBanner = () => {
    //render
    return (
        <MainBannerTemp>
            <div>
                <img src={MainImeage} />
            </div>
            <p>당신의 가능성에 도전하세요</p>
            <p>프리온보딩, 프론트엔드</p>
        </MainBannerTemp>
    );
};
export default MainBanner;
