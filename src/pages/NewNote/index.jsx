import { Container, Form } from './styles.js'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { NoteItem } from '../../components/noteItem'
import { Section } from '../../components/section'
import { Button } from '../../components/button'

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
                        <NoteItem isNew placeholder="URL"/>
                        <NoteItem value="https://rocketseat.com.br" />
                    </Section>

                    <Section title="Marcadores">
                        <div id='tags'>
                            <NoteItem isNew placeholder="Novo Marcador" />
                            <NoteItem type="text" value="React" />
                            <NoteItem type="text" value="Node" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}