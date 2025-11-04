import axios, { AxiosResponse } from "axios";

interface ParticipateData {
  name: string;
  email: string;
  mobile: string;
  Pincode: string;
  Address: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

export const sendParticipateForm = async (data: ParticipateData): Promise<AxiosResponse> => {
  const response = await axios.post(`${API_BASE}/participate`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};
