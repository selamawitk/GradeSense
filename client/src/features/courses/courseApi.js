import axios from "../../api/axiosInstance";

export const getCourses = async ()=>{
    const response = axios.get("/courses")
    return response.data
};

export const addCourse = async(courseData) =>{
    const response =axios.post("/courses",courseData)
    return response.data
};

export const updateCourse  = async (id, courseData)=>{
    const response = axios.put(`/courses/${id}`,courseData)
    return response.data
}

export const deleteCourse = async(id) =>{
    const response = axios.delete(`/courses/${id}`)
    return response.data
}