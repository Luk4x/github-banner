import {
    PresentationContainer,
    PresentationContent,
    Footer,
    CarouselPresentation,
    CarouselPresentationHeader,
    CarouselPresentationBody
} from './styled';

import Image from 'next/image';
import { GithubLogo, Star, Info, GitPullRequest, Coffee } from 'phosphor-react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

interface gitHubProps {
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

export function Presentation({ repoStars, users }: gitHubProps) {
    return (
        <PresentationContainer>
            <PresentationContent>
                <GithubLogo size={32} />
                <h1>Github Banner</h1>
                <span>Crie um banner personalizado para o seu GitHub</span>
                <button>
                    <Star size={16} weight="bold" />
                    <p>Star</p> {repoStars}
                </button>
            </PresentationContent>
            <Carousel
                showStatus={false}
                transitionTime={2000}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                infiniteLoop
                autoPlay
                interval={4000}
            >
                <CarouselPresentation>
                    <CarouselPresentationHeader>
                        <Image
                            src="https://github.com/luk4x.png"
                            width={65}
                            height={65}
                            alt=""
                        />
                        <div>
                            <strong>{users.luk4x.name}</strong>
                            <p>{users.luk4x.login}</p>
                        </div>
                    </CarouselPresentationHeader>
                    <CarouselPresentationBody>
                        <p>{users.luk4x.bio}</p>
                        <div>
                            <span>{users.luk4x.following} following</span>
                            <span>{users.luk4x.followers} Followers</span>
                        </div>
                    </CarouselPresentationBody>
                </CarouselPresentation>
                <CarouselPresentation>
                    <CarouselPresentationHeader>
                        <Image
                            src="https://github.com/luizfelipe63.png"
                            width={65}
                            height={65}
                            alt=""
                        />
                        <div>
                            <strong>{users.luiz.name}</strong>
                            <p>{users.luiz.login}</p>
                        </div>
                    </CarouselPresentationHeader>
                    <CarouselPresentationBody>
                        <p>{users.luiz.bio}</p>
                        <div>
                            <span>{users.luiz.following} Following</span>
                            <span>{users.luiz.followers} Followers</span>
                        </div>
                    </CarouselPresentationBody>
                </CarouselPresentation>
            </Carousel>
            <Footer>
                <button>
                    <GitPullRequest size={24} />
                </button>
                <button>
                    <Info size={24} />
                </button>
                <button>
                    <Coffee size={24} />
                </button>
            </Footer>
        </PresentationContainer>
    );
}
