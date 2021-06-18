/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import Header from 'components/Admin/Header/Header';
import SideMenu from 'components/Admin/SideMenu/SideMenu';
import Featured from 'components/Admin/Featured/Featured';
import Active from 'components/Admin/Active/Active';
import CityActive from 'components/Admin/City/Active/CityActive';
import CityConf from 'components/Admin/City/Conf/CityConf';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Side = styled.div`
  flex: 20;
  max-height: 100%;
  border-right: 0.5px solid #cdcdce;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Main = styled.div`
  flex: 80;
  padding: 30px;
  min-height: 100%;
  background: #f3f3f4;
`;

const Title = styled.div`
  font-weight: 500;
  color: #676a6c;
  font-size: 18px;
  margin-bottom: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Side>
          <SideMenu />
        </Side>
        <Main>
          <Title>Codemi Home</Title>
          <MainContainer>
            <Featured />
            <Active />
          </MainContainer>
          <MainContainer>
            <CityActive />
            <CityConf />
          </MainContainer>
        </Main>
      </Container>
    </Wrapper>
    // <AppWrapper>
    //   <Helmet
    //     titleTemplate="%s - React.js Boilerplate"
    //     defaultTitle="React.js Boilerplate"
    //   >
    //     <meta name="description" content="A React.js Boilerplate application" />
    //   </Helmet>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/features" component={FeaturePage} />
    //     <Route path="" component={NotFoundPage} />
    //   </Switch>
    //   <Footer />
    //   <GlobalStyle />
    // </AppWrapper>
  );
}
