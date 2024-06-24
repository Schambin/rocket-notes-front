import { Container, Form } from './styles.js'

import { Header } from '../../components/header'
import { Input } from '../../components/input'

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
                    <Input placeholder="Descrição"/>
                </Form>
            </main>
        </Container>
    )
}