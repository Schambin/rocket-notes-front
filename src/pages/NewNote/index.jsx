import { Container, Form } from './styles.js'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { NoteItem } from '../../components/noteItem'
import { Section } from '../../components/section'

export function NewNote() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">Voltar</a>
                    </header>
                    
                    <Input placeholder="Título" />
                    <TextArea placeholder="Descrição" />

                    <Section title="Links Úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew={true} placeholder="URL"/>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}