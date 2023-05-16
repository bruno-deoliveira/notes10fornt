import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";

import { Link } from "react-router-dom";

import { Container, Form } from "./style";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br/" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section>
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova Tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
