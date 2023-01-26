import { Main } from 'src/components/Main';
import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';

const Home: React.FC = () => {
    return (
        <Main>
            <Upload />
            <Config />
        </Main>
    );
};

export default Home;
