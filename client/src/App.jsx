import { Routers } from './routes/Routers';
import { AuthProvider } from './context/authProvider';

function App() {

  return (
    <>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </>
  )
}

export default App
