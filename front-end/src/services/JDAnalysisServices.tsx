import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

async function analyzeJobDescription(jobDescription: string): Promise<string> {
  const response = await axios.post(`${API_BASE_URL}/analyze`, {
    job_description: jobDescription,
  });
  return response.data;
}
export default analyzeJobDescription;
