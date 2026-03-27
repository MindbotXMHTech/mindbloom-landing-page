import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../navbar/Nav";
import PageBackground from "../PageBackground";
import Footer from "../footer/Footer";
import ContactButton from "../button/ContactButton";

function MainLayout() {
  const { pathname } = useLocation();
  const isPsychologistPage = pathname === "/psychologist";
  const isActivityPage = pathname === "/activity";
  const isServicePage = pathname === "/service";
  const isWorkshopPage = pathname === "/service/workshop";
  const isActivityDetailPage =
    pathname.startsWith("/activity/") && pathname !== "/activity";
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
        showBottomShapes={pathname === "/"}
        hideSideShape={pathname === "/"}
        showHomeVector={pathname === "/"}
        showActivityVector={isActivityPage}
        showActivityDetailsVector={isActivityDetailPage}
        showServiceVector={isServicePage}
        showWorkshopVector={isWorkshopPage}
        variant={
          isPsychologistPage ||
          (pathname.startsWith("/blog/") && pathname !== "/blog")
            ? "pink"
            : "green"
        }
        plain={isAboutPage || isActivityDetailPage}
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
