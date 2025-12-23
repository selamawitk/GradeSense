import axios from '../../api/axiosInstance'; 

export const getUserProfile = async () => {
  const response = await axios.get('/users/me');
  return response.data;
};

export const updateUserProfile = async (userData) => {
  const response = await axios.put('/users/me', userData);
  return response.data;
};

export const uploadAvatar = async (formData) => {
  const response = await axios.post('/users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const deleteUserAccount = async () => {
  const response = await axios.delete('/users/me');
  return response.data;
};
