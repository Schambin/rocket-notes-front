import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js'

import { Header } from '../../components/header'

export function Home() {
    return (
        <Container>

            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
            </Menu>

            <Search>

            </Search>

            <Content>
                <NewNote />
            </Content>

        </Container>
    );
}