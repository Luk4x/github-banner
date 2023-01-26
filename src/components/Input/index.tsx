import { InputStyled } from './styled';

interface InputProps {
    placeholder: string;
}

export function Input({ placeholder }: InputProps) {
    return <InputStyled type="text" placeholder={placeholder} />;
}
