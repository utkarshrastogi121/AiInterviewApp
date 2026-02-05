const API = import.meta.env.VITE_API_URL;


export const generateQuestions = async (data: any) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/generate-questions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Request failed");
  }

  const json = await res.json();
  return json.questions;
};

export const evaluateAnswer = async (data: any) => {
  const res = await fetch(`${API}/evaluate-answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!json.success) throw new Error("Evaluation failed");
  return json.result;
};
