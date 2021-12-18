import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import TagViewPage from './pages/TagViewPage';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route path='/' component={MainPage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/tag' component={TagViewPage} />
    </ThemeProvider>
  );
}

export default App;
