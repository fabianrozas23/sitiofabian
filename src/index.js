import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderMenu from "./App";
import Footer from "./Footer";
import styled from "styled-components";
import { Divider, Container } from "semantic-ui-react";
import { Inicio } from './Inicio';

const Fotos = () => <h1>Fotos</h1>;
const Validador = () => <h1>Validador</h1>;
const Formulario = () => <h1>Formulario</h1>;
const Rss= () => <h1>URL doesn't exist</h1>;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const Content = styled(Container)`
  margin-top: 6em
  flex: 1;
`;

ReactDOM.render(
  <Router>
    <Wrapper>
      <HeaderMenu
        onItemClick={item => this.onItemClick(item)}
        items={[
          ["Inicio", "/"],
          ["Validador", "/Validador"],
          ["Formulario", "/Formulario"],
          ["Fotos", "/Fotos"],
          ["Redes sociales", "/Rss"]
        ]}
        headerIcon={"compass outline"}
      />
      <Divider />
      <Content>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/Validador" component={Validador} />
          <Route path="/Formulario" component={Formulario} />
          <Route path="/Fotos" component={Fotos} />
          <Route component={Rss} />
        </Switch>
      </Content>
      <Footer />
    </Wrapper>
  </Router>,
  document.getElementById("root")
);