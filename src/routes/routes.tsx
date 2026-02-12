import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import AboutPage from '../pages/about/AboutPage';
import ActivityDetailPage from '../pages/activity/ActivityDetailPage';
import ActivityPage from '../pages/activity/ActivityPage';
import BlogDetailPage from '../pages/blog/BlogDetailPage';
import BlogPage from '../pages/blog/BlogPage';
import HomePage from '../pages/home/HomePage';
import PhycologistPage from '../pages/phycologist/PhycologistPage';
import ServicePage from '../pages/service/ServicePage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="activity/:id" element={<ActivityDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetailPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="phycologist" element={<PhycologistPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
