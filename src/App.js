import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage, RegisterPage, ProtectedRoute } from "./pages/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AllJobsPage, AddJobPage, ProfilePage, SharedLayout, StatsPage } from "./pages/dashboard/";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StatsPage />} />
          <Route path='all-jobs' element={<AllJobsPage />} />
          <Route path='add-job' element={<AddJobPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
        <Route path='register' element={<RegisterPage />} />
        <Route path='landing' element={<LandingPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
