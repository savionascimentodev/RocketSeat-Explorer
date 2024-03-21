import React from "react"
import { Link } from "react-router-dom"
import { FiPlusCircle } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Container, Form } from "./styles"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" icon={FiPlusCircle} />
        </Form>
      </main>
    </Container>
  )
}
