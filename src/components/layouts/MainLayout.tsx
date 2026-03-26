import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../navbar/Nav";
import PageBackground from "../PageBackground";
import Footer from "../footer/Footer";
import ContactButton from "../button/ContactButton";

function MainLayout() {
  const { pathname } = useLocation();
  const isPsychologistPage = pathname === "/phycologist";
  const isAboutPage = pathname === "/about";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-w-hidden max-w-screen">
      <PageBackground
        showTopShape={pathname === "/"}
        showMiddleShape={isPsychologistPage}
        showBottomShape={isAboutPage}
        showSideVectors={isPsychologistPage}
        showArticleVector={pathname === "/blog"}
        showArticleDetailsVector={
          pathname.startsWith("/blog/") && pathname !== "/blog"
        }
        variant={
          isPsychologistPage ||
          (pathname.startsWith("/blog/") && pathname !== "/blog")
            ? "pink"
            : "green"
        }
        plain={isAboutPage}
      >
        <div className="mx-6 s:mx-8 m:mx-16 l:mx-32 w-full flex flex-col items-center">
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
