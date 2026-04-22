import { Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./store/useAuthStore";

function App() {

  const {authUser, login, isLoggedIn} = useAuthStore();
  
  console.log('Auth User:', authUser);
  console.log('Is Logged In:', isLoggedIn);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 p-4 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_30%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-2rem)] w-full items-center justify-center">

        <button onClick={login} className="mb-4 rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">Login</button>

        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
