import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import ToolkitPage from './pages/ToolkitPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="toolkit" element={<ToolkitPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
