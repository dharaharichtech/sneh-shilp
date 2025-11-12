export interface InternData {
  name: string;
  email: string;
  mobile: string;
  position: string;
  message: string;
}

export const sendJoinMessage = async (data: InternData): Promise<Response> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${API_URL}/intern`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error("Error sending join message:", error);
    throw error;
  }
};
