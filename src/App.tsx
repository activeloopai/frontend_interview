import styled from "styled-components";

const AppContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 20px;
`;

const AppHeader = styled.header`
  position: relative;
  width: 100%;
`;

const SiteTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <SiteTitle>Activeloop Auction Site</SiteTitle>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
