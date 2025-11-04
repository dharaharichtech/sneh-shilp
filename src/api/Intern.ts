import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_BASE;

export const sendJoinMessage = async (data: {
  name: string;
  email: string;
  mobile: string;
  position: string;
  message: string;
}) => {
  const payload = { ...data }; 
  return await axios.post(`${url}/intern`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};
