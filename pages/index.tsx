import { MainStyled } from './styled';
import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';

const Home: React.FC = () => {
    return (
        <MainStyled>
            <Upload />
            <Config />
        </MainStyled>
    );
};

export default Home;
