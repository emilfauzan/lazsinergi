import Footer from '@/components/common/Footer/Footer';
import Topbar from '@/components/navigation/Topbar/Topbar';
import Home from '@/pages/dashboard/home/Home'

export default function Dashboard() {
  return (
    <main className="overflow-hidden">
      <Topbar/>
      <Home />
      <Footer/>

    </main>
  );
}
