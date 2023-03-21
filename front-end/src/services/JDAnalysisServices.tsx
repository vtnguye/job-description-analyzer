import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5173/";

export async function analyzeJobDescription(
  jobDescription: string
): Promise<string> {
  const response = await axios.post(`${API_BASE_URL}/analyze`, {
    job_description: jobDescription,
  });
  return response.data.analysis;
}
