import styled from 'styled-components'
import narutoImg from '../../images/naruto-konoha.png'
import { Quotes } from '../../components'

export function App() {
    return (
        <Content>
            <Quotes quote={'ok'} speaker={'Speaker'}/>
            <NarutoImg src={narutoImg} alt="naruto with a kunai" />
        </Content>
    );
}
// atribuindo stilos apenas para aquele componente.
const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`;