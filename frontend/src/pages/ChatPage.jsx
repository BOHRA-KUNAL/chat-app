import { useAuthStore } from "../store/useAuthStore";

function ChatPage() {
  const {logout} = useAuthStore();
  return (
    <div>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default ChatPage