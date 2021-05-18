import axios from "axios";

const base_url = "https://opentdb.com/api.php";

export async function getQuestions(numberOfQuestions) {
  const response = await axios.get(`${base_url}?amount=${numberOfQuestions}`);
  return response;
}
