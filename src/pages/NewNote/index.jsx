import { Container, Form } from './styles.js'
import { MdClose } from "react-icons/md";

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'

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

                    <h2>Links Úteis</h2>
                    
                </Form>
            </main>
        </Container>
    )
}