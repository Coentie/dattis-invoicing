import GuestLayout from './components/ui/GuestLayout.jsx';
import useAuth from './hooks/useAuth.jsx';

function Home() {
  const auth = useAuth();

  return (
    <GuestLayout>
    </GuestLayout>
  )
}

export default Home
