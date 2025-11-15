import axios, { AxiosResponse } from "axios";

interface JoinMessageData {
  name: string;
  email: string;
  mobile: string;
  Subject: string;
  message: string;
}

export const sendJoinMessage = async (formData: JoinMessageData): Promise<AxiosResponse> => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://mail.snehshilp.org/api";

  try {
    const response = await axios.post(`${API_BASE}/Contact`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error submitting contact form:", error.response?.data || error.message);
      throw error;
    } else {
      console.error("Unexpected error submitting contact form:", error);
      throw new Error("Unknown error occurred");
    }
  }
};
