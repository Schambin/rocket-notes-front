import { RxPlus } from "react-icons/rx";
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'

export function Home() {
    return (
        <Container>

            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive={true}/>
                </li>
                <li>
                    <ButtonText title="FrontEnd" />
                </li>
                <li>
                    <ButtonText title="Node" />
                </li>
                <li>
                    <ButtonText title="React" />
                </li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>
                <RxPlus />
                Nova Nota
            </NewNote>

        </Container>
    );
}