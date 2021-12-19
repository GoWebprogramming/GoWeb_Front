import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import KeywordListViewPage from './pages/KeywordListPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import My404Page from './pages/My404Page';
import SignupPage from './pages/SignupPage';
import TagViewPage from './pages/TagViewPage';
import TimViewPage from './pages/TimViewPage';
import theme from './styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #fafcf9;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={LoginPage} exact />
        <Route path='/main' component={MainPage} exact />
        <Route path='/signup' component={SignupPage} />
        <Route path='/tag' component={TagViewPage} />
        <Route
          path='/keyword/:tagId/:keywordId'
          component={KeywordListViewPage}
        />
        <Route path='/tim/:tagId/:keywordId' component={TimViewPage} />
        <Route path='*' compoment={My404Page} exact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
