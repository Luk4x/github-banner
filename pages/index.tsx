import {
    MainStyled,
    PresentationContainer,
    Container,
    Presentation,
    Collaborators,
    Footer
} from './styled';
import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';
import { GithubLogo, Star, Info, GitPullRequest, Coffee } from 'phosphor-react';

import { HoverCard } from 'src/components/HoverCard/HoverCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

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
                        <HoverCard githubName="Luk4x">
                            <div>
                                <span>Luiz Felipe</span>
                                <span>Luizfelipe63</span>
                            </div>
                            <p>
                                Components, icons, colors, and templates for building
                                high-quality, accessible UI. Free and open-source.
                            </p>
                        </HoverCard>
                        <HoverCard githubName="luizfelipe63">
                            <div>
                                <span>Luiz Felipe</span>
                                <span>Luizfelipe63</span>
                            </div>
                            <p>
                                Components, icons, colors, and templates for building
                                high-quality, accessible UI. Free and open-source.
                            </p>
                        </HoverCard>
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
