import axios, { AxiosResponse } from "axios";

const url = process.env.NEXT_PUBLIC_API_BASE;

const jsonconfig = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const sendJoinMessage = async (data: {
  name: string;
  email: string;
  mobile: string;
  position: string;
  message: string;
}): Promise<AxiosResponse> => {
  const payload = {
    ...data,
    Position: data.position,
  };

  return await axios.post(`${url}/Intern`, payload, jsonconfig);
};
