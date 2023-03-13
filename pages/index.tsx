import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';
import { Presentation } from 'src/components/Presentation';

import { MainStyled, Container } from '../src/styles/pages/home';

import { GetStaticProps } from 'next';
import { GithubAPI } from 'src/lib/axios';

interface githubProps {
    repoStars: number;
    users: {
        luiz: {
            name: string;
            login: string;
            imageUrl: string;
            bio: string;
            followers: number;
            following: number;
        };
        luk4x: {
            name: string;
            login: string;
            imageUrl: string;
            bio: string;
            followers: number;
            following: number;
        };
    };
}

export default function Home({ repoStars, users }: githubProps) {
    console.log(process.env.NEXT_PUBLIC_GITHUB_TOKEN);
    return (
        <Container>
            <Presentation repoStars={repoStars} users={users} />
            <MainStyled>
                <Upload />
                <Config />
            </MainStyled>
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const [repoResponse, luk4xResponse, luizResponse] = await Promise.all([
        GithubAPI.get('repos/Luk4x/github-banner'),
        GithubAPI.get('users/Luk4x'),
        GithubAPI.get('users/luizfelipe63')
    ]);

    return {
        props: {
            repoStars: repoResponse.data.stargazers_count,
            users: {
                luiz: {
                    name: luizResponse.data.name,
                    login: luizResponse.data.login,
                    imageUrl: luizResponse.data.avatar_url,
                    bio: luizResponse.data.bio,
                    followers: luizResponse.data.followers,
                    following: luizResponse.data.following
                },
                luk4x: {
                    name: luk4xResponse.data.name,
                    login: luk4xResponse.data.login,
                    imageUrl: luk4xResponse.data.avatar_url,
                    bio: luk4xResponse.data.bio,
                    followers: luk4xResponse.data.followers,
                    following: luk4xResponse.data.following
                }
            }
        },
        revalidate: 60 * 60 * 1
    };
};
