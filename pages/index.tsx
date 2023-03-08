import {
    MainStyled,
    PresentationContainer,
    Container,
    Presentation,
    Collaborators,
    Footer,
    PresentationLucas,
    PresentationLuiz,
    HoverCardContent,
    Flex
} from './styled';
import { Upload } from 'src/components/Upload';
import { Config } from 'src/components/Config';
import { GithubLogo, Star, Info, GitPullRequest, Coffee } from 'phosphor-react';
import Image from 'next/image';
import * as HoverCard from '@radix-ui/react-hover-card';

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
                    <div>
                        <HoverCard.Root>
                            <HoverCard.Trigger>
                                <PresentationLuiz>
                                    <Image
                                        src="https://github.com/luizfelipe63.png"
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                </PresentationLuiz>
                            </HoverCard.Trigger>
                            <HoverCard.Portal>
                                <HoverCardContent>
                                    <HoverCard.Arrow />
                                    <Flex>
                                        <Image
                                            src="https://github.com/luizfelipe63.png"
                                            alt=""
                                            width={100}
                                            height={100}
                                        />
                                    </Flex>
                                    <Flex>
                                        <div>
                                            <span>Luiz Felipe</span>
                                            <span>Luizfelipe63</span>
                                        </div>
                                        <p>
                                            Components, icons, colors, and templates for
                                            building high-quality, accessible UI. Free and
                                            open-source.
                                        </p>
                                    </Flex>
                                </HoverCardContent>
                            </HoverCard.Portal>
                        </HoverCard.Root>
                        {/* <PresentationLuiz>
                            <Image
                                src="https://github.com/luizfelipe63.png"
                                alt=""
                                width={100}
                                height={100}
                            />
                        </PresentationLuiz> */}
                    </div>
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
