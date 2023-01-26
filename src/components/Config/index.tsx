import { ConfigStyled, InputStyled } from './styled';

export function Config() {
    return (
        <ConfigStyled>
            <InputStyled type="text" placeholder="Apresentação" />
            <InputStyled type="text" placeholder="Cargo" />
        </ConfigStyled>
    );
}
