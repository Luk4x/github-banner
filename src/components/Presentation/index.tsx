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
}

export function Presentation({ repoStars }: gitHubProps) {
    return (
        <PresentationContainer>
            <PresentationContent>
                <GithubLogo size={32} />
                <h1>Github Banner</h1>
                <span> Crie um banner personalizado para o seu GitHub</span>
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
                            <strong>Lucas</strong>
                            <p>@luk4x</p>
                        </div>
                    </CarouselPresentationHeader>
                    <CarouselPresentationBody>
                        <p>
                            Components, icons, colors, and templates for building
                            high-quality, accessible UI. Free and open-source.
                        </p>
                        <div>
                            <span>0 Following</span>
                            <span>2,900 Followers</span>
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
                            <strong>Luiz Felipe</strong>
                            <p>@luizfelipe63</p>
                        </div>
                    </CarouselPresentationHeader>
                    <CarouselPresentationBody>
                        <p>
                            Components, icons, colors, and templates for building
                            high-quality, accessible UI. Free and open-source.
                        </p>
                        <div>
                            <span>0 Following</span>
                            <span>2,900 Followers</span>
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
