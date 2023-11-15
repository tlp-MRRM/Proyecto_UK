import { SocketProvider } from './context/socketProvider';
import { Routers } from './routes/Routers';
import { AuthProvider } from './context/authProvider';

function App() {

  return (
    <>
      <AuthProvider>
        <SocketProvider>
          <Routers />
        </SocketProvider>
      </AuthProvider>
    </>
  )
}

export default App
