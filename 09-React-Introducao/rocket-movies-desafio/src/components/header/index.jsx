import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/savionascimentodev.png"
          alt="Foto do Usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Sávio Nascimento</strong>
        </div>
      </Profile>

      <Logout to="/register">
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
