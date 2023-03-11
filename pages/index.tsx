import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';
import { Presentation } from 'src/components/Presentation';

import { MainStyled, Container } from './styled';

import { GetServerSideProps } from 'next';
import { GithubAPI } from 'src/lib/axios';

interface githubProps {
    repoStars: number;
}

export default function Home({ repoStars }: githubProps) {
    return (
        <Container>
            <Presentation repoStars={repoStars} />
            <MainStyled>
                <Upload />
                <Config />
            </MainStyled>
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // const repoResponse = await GithubAPI.get('repos/Luk4x/github-banner');
    // const userResponse = await GithubAPI.get('users/Luk4x');

    return {
        props: {
            repoStars: 3
            // name: userResponse.data.login
        }
    };
};
