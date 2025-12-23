import React, { createContext, useState, useEffect } from "react";
import { getCourses, addCourse, updateCourse, deleteCourse } from "./courseApi";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const addNewCourse = async (courseData) => {
    try {
      const newCourse = await addCourse(courseData);
      setCourses((prev) => [...prev, newCourse]);
    } catch (error) {
      console.error("Failed to add course", error);
    }
  };

  const updateExistingCourse = async (id, courseData) => {
    try {
      const updatedCourse = await updateCourse(id, courseData);
      setCourses((prev) =>
        prev.map((course) => (course._id === id ? updatedCourse : course))
      );
    } catch (error) {
      console.error("Failed to update course", error);
    }
  };

  const deleteExistingCourse = async (id) => {
    try {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Failed to delete course", error);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        addNewCourse,
        updateExistingCourse,
        deleteExistingCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
