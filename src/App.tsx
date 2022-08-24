import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/mainPage';
import TodoPage from './pages/todoPage';
import PrivateRoute from './util/pravateRoute';
import GlobalStyle from 'style/global';

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    {/* public */}
                    <Route path="/" element={<MainPage />} />
                    {/* praivate */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/todo" element={<TodoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
