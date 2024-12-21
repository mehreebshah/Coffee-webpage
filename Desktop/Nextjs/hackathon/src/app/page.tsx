import Address from "./Components/Address";
import AdminDashboard from "./Components/AdminDashboard";
import Hero from "./Components/Hero";
import Popular from "./Components/Popular";
import Recomended from "./Components/Recomended";

export default function Home() {
  return (
    <>
      <Hero />
      <Address />
      <Popular/>
     <Recomended/>
     <AdminDashboard/>
    </>
  );
}
