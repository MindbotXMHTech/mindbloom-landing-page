import { Outlet, useLocation } from "react-router-dom";
import Nav from "../navbar/Nav";
import PageBackground from "../PageBackground";
import Footer from "../footer/Footer";
import ContactButton from "../button/ContactButton";

function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="overflow-w-hidden max-w-screen">
      <PageBackground showTopShape={pathname === "/"}>
        <div className="mx-6 s:mx-8 m:mx-16 l:mx-32 w-full flex flex-col items-center ">
          <Nav />
          <Outlet />
        </div>
      </PageBackground>
      <Footer />
      <ContactButton />
    </div>
  );
}

export default MainLayout;
