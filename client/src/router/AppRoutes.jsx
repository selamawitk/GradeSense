// src/router/AppRoutes.jsx (or wherever you keep it)
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import AddCoursePage from '../pages/AddCoursePage';
import EditCoursePage from '../pages/EditCoursePage';
import DegreeProgressPage from '../pages/DegreeProgressPage';
import RequiredGpaPage from '../pages/RequiredGpaPage';
import CreateSemesterPage from '../pages/CreateSemesterPage';
import ViewSemesterPage from '../pages/ViewSemesterPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-course" element={<AddCoursePage />} />
      <Route path="/edit-course" element={<EditCoursePage />} />
      <Route path="/degree-progress" element={<DegreeProgressPage />} />
      <Route path="/required-gpa" element={<RequiredGpaPage />} />
      <Route path="/create-semester" element={<CreateSemesterPage />} />
      <Route path="/view-semester" element={<ViewSemesterPage />} />
    </Routes>
  );
};

export default AppRoutes;
