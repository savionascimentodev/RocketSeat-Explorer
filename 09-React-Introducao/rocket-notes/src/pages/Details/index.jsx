import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Teste</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consequatur impedit maxime suscipit voluptates. Laboriosam numquam
            quia placeat laborum. Autem dolore ad ex deserunt aliquam minima
            quaerat nesciunt et incidunt.
          </p>

          <Section title="Links úteis">
            {/* Passando o Children */}
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
