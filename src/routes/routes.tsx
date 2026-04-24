import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/about/AboutPage";
import ActivityDetailPage from "../pages/activity/ActivityDetailPage";
import ActivityPage from "../pages/activity/ActivityPage";
import BlogDetailPage from "../pages/blog/BlogDetailPage";
import BlogPage from "../pages/blog/BlogPage";
import HomePage from "../pages/home/HomePage";
import PhycologistPage from "../pages/phycologist/PhycologistPage";
import ServicePage from "../pages/service/ServicePage";
import Condition from "../pages/condition/Condition";
import Policy from "../pages/policy/Policy";
import Workshop from "../pages/service/Workshop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="activity/:slug" element={<ActivityDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service/workshop" element={<Workshop />} />
          <Route path="psychologist" element={<PhycologistPage />} />
          <Route path="policy" element={<Policy />} />
          <Route path="term-condition" element={<Condition />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
