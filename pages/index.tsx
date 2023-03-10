import {
    MainStyled,
    PresentationContainer,
    Container,
    Presentation,
    Collaborators,
    Footer,
    PresentationBase,
    Followers
} from './styled';
import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';
import { GithubLogo, Star, Info, GitPullRequest, Coffee } from 'phosphor-react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <Container>
            <PresentationContainer>
                <Presentation>
                    <GithubLogo size={32} />
                    <h1>Github Banner</h1>
                    <span> Crie um banner personalizado para o seu GitHub</span>
                    <button>
                        <Star size={16} weight="bold" />
                        <p>Star</p> 3
                    </button>
                </Presentation>
                <Collaborators>
                    <h3>Colaboradores</h3>
                    <Carousel
                        showStatus={false}
                        transitionTime={2000}
                        showThumbs={false}
                        showArrows={false}
                        showIndicators={false}
                        infiniteLoop
                        autoPlay
                    >
                        <PresentationBase>
                            <header>
                                <div>
                                    <strong>Luiz Felipe</strong>
                                    <span>@luizfelipe63</span>
                                </div>
                                <Image
                                    src="https://github.com/luk4x.png"
                                    width={65}
                                    height={65}
                                    alt=""
                                />
                            </header>
                            <div>
                                <p>
                                    Components, icons, colors, and templates for building
                                    high-quality, accessible UI. Free and open-source.
                                </p>
                            </div>
                            <Followers>
                                <span>0 Following</span>
                                <span>2,900 Followers</span>
                            </Followers>
                        </PresentationBase>
                        <PresentationBase>
                            <header>
                                <div>
                                    <strong>Luiz Felipe</strong>
                                    <span>@luizfelipe63</span>
                                </div>
                                <Image
                                    src="https://github.com/luizfelipe63.png"
                                    width={65}
                                    height={65}
                                    alt=""
                                />
                            </header>

                            <div>
                                <p>
                                    Components, icons, colors, and templates for building
                                    high-quality, accessible UI. Free and open-source.
                                </p>
                            </div>
                            <Followers>
                                <span>0 Following</span>
                                <span>2,900 Followers</span>
                            </Followers>
                        </PresentationBase>
                    </Carousel>
                </Collaborators>
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
            <MainStyled>
                <Upload />
                <Config />
            </MainStyled>
        </Container>
    );
};

export default Home;
