import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { Note } from "./../../components/note";
import { Input } from "./../../components/input";
import { Header } from "./../../components/header";
import { Section } from "./../../components/section";
import { ButtonText } from "./../../components/buttonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
