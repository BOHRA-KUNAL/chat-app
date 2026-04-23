import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("auth user", authUser);

  if(isCheckingAuth) return <PageLoader />
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 p-4 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_30%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-2rem)] w-full items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
          />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to = {"/"} />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to = {"/"} /> } />
        </Routes>

        <Toaster />
      </div>
    </div>
  );
}

export default App;
