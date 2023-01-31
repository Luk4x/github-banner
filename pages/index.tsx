import { useState } from 'react';

import { Main } from 'src/components/Main';
import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';

const Home: React.FC = () => {
    const [bannerData, setBannerData] = useState({ presentation: '', office: '' });

    return (
        <Main>
            <Upload bannerData={bannerData} />
            <Config bannerData={bannerData} setBannerData={setBannerData} />
        </Main>
    );
};

export default Home;
