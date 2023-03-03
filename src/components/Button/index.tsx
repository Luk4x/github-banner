import { ButtonStyled } from './styled';
import { DownloadSimple } from 'phosphor-react';

interface ButtonProps {
    onClick: () => void;
    buttonName: string;
}

export function Button({ onClick, buttonName }: ButtonProps) {
    return (
        <ButtonStyled onClick={onClick}>
            <span>{buttonName}</span>
            <DownloadSimple />
        </ButtonStyled>
    );
}
