import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../navbar/Nav";
import PageBackground from "../PageBackground";
import Footer from "../footer/Footer";
import ContactButton from "../button/ContactButton";

function getPage(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/psychologist") return "psychologist";
  if (pathname === "/about") return "about";
  if (pathname === "/blog") return "blog";
  if (pathname.startsWith("/blog/")) return "blog-detail";
  if (pathname === "/activity") return "activity";
  if (pathname.startsWith("/activity/")) return "activity-detail";
  if (pathname === "/service/workshop") return "workshop";
  if (pathname === "/service") return "service";
  return "default";
}

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-w-hidden max-w-screen">
      <PageBackground page={getPage(pathname)}>
        <div className="mx-6 s:mx-8 m:mx-16 l:mx-32 w-full flex flex-col items-center">
          <Nav />
          <div className="w-full flex flex-col items-center pt-20 m:pt-10">
            <Outlet />
          </div>
        </div>
      </PageBackground>
      <Footer />
      <ContactButton />
    </div>
  );
}

export default MainLayout;
