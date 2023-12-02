import { Container, Links, Content } from "./styles.js"

import { Tag } from "../../components/Tags/"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section/"
import { ButtonText } from "../../components/ButtonText/"

export function Details() {  
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, molestias unde! Enim expedita maxime repudiandae quaerat accusamus laborum, beatae mollitia impedit molestias architecto esse velit ipsum qui inventore rerum veritatis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis facilis qui voluptatum molestias deleniti, nam dolore error odit reprehenderit alias ratione harum expedita beatae similique assumenda ducimus voluptatibus ipsam libero! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, blanditiis alias. Maxime earum, quas dolorem, animi mollitia illum doloribus rerum repellat quam aperiam voluptas autem est optio dolor dicta in!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}