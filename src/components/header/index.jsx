import { Container, Profile } from './styles.js'

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/schambin.png" alt="User Image" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Sacudo</strong>
                </div>
            </Profile>
        </Container>
    )
}