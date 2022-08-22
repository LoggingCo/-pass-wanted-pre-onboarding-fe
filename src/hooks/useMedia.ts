import { useMediaQuery } from 'react-responsive';
import { size } from 'util/media';

type useMediaHook = {
    isPc: boolean;
    isTablet: boolean;
    isMobile: boolean;
};

export const useMedia = (): useMediaHook => {
    const isPc = useMediaQuery({
        query: `(min-width:${size.desktop})`,
    });
    const isTablet = useMediaQuery({
        query: `(min-width:${size.tablet}) and (max-width:${size.desktop})`,
    });
    const isMobile = useMediaQuery({
        query: `(max-width:${size.mobile}`,
    });

    return { isPc, isTablet, isMobile };
};
