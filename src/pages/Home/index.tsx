import { RxPlus } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'
import { Section } from '../../components/section'
import { Note } from '../../components/note'

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
                <Input placeholder="Pesquisar" icon={MdSearch}/>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{ 
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'React'},
                            {id: '2', name: 'Node'},
                        ] 
                        
                        }}>

                    </Note>
                </Section>
            </Content>

            <NewNote to="/new">
                <RxPlus /> Nova Nota
            </NewNote>

        </Container>
    );
}