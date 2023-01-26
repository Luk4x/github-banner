import { ReactNode } from 'react';
import { MainStyled } from './styled';

export function Main({ children }: { children: ReactNode }) {
    return <MainStyled>{children}</MainStyled>;
}
