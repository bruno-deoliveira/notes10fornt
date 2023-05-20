import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";

import {api} from "../../services/api"

import {Container, Links, Content} from "./style";

import { Tag } from "../../components/tags";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { ButtonText } from "../../components/buttonText";

export function Details(){
  const [data, setData] = useState(null)

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/")
  }

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  
  return (
    <Container>
      <Header />
      {
        data && 
        <main>
          <Content>
            <ButtonText title="Excluir nota" isActive />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {
              data.links && 
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map((link) => ( 
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            }

            {
              data.tags && 
              <Section title="Marcadores">
                {
                  data.tags.map((tag) => (
                  <Tag 
                    KEY={String(tag.id)} 
                    title={tag.name} 
                  />
                ))}
              </Section>
            }

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      }
    </Container>
  );
}