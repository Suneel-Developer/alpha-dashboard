import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadDocumentsOne from './pages/UploadDocumentsOne';
import UploadDocumentsTwo from './pages/UploadDocumentsTwo';
import DocumentSummary from './pages/DocumentSummary';
import './App.css';
import EditDocument from './pages/EditDocument';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import EmailConfermation from './pages/EmailConfermation';
import CompanyInformation from './pages/CompanyInformation';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';
import Plan from './pages/Plan';
import UpgradePlans from './pages/UpgradePlans';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/uploaddocumentsone' element={<UploadDocumentsOne />} />
        <Route path='/uploaddocumentstwo' element={<UploadDocumentsTwo />} />
        <Route path='/document-summary' element={<DocumentSummary />} />
        <Route path='/edit-document' element={<EditDocument />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/upgrade-plans' element={<UpgradePlans />} />
        <Route path='/email-confermation' element={<EmailConfermation />} />
        <Route path='/company-information' element={<CompanyInformation />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
