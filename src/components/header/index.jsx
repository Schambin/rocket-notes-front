import { MdLogout } from "react-icons/md";
import { Container, Profile, Logout } from './styles.js'

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/schambin.png" alt="User Image" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Schambao</strong>
                </div>

            </Profile>
            
                <Logout>
                    <MdLogout />
                </Logout>
        </Container>
    )
}