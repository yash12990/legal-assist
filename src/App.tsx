import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/about-us";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/sign-up-page";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protected-route";
import { ToastContainer } from "react-toastify";
import MyQueries from "./pages/my-queries";
import Profile from "./pages/profile";
import { DashboardProvider } from "./context/dashboardContext";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <AuthProvider>
        <DashboardProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutUs />} />

              <Route path="/login" element={<LoginPage />} />

              <Route path="/signup" element={<SignupPage />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/queries"
                element={
                  <ProtectedRoute>
                    <MyQueries />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </DashboardProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
