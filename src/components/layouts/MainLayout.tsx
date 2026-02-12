import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";
import PageBackground from "../PageBackground";

function MainLayout() {
  return (
    <PageBackground>
      <div className="mx-6 s:mx-8 m:mx-16 l:mx-32 w-full flex flex-col items-center ">
        <Nav />
        <Outlet />
      </div>
    </PageBackground>
  );
}

export default MainLayout;
