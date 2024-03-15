import { Header } from "../../components/Header"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>
      <Search></Search>
      <Content></Content>
      <NewNote></NewNote>
    </Container>
  )
}
