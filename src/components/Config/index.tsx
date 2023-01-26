import { Input } from '../Input';
import { ConfigStyled } from './styled';

export function Config() {
    return (
        <ConfigStyled>
            <Input placeholder="Apresentação" />
            <Input placeholder="Cargo" />
        </ConfigStyled>
    );
}
