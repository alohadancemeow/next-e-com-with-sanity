const BASE_URL = process.env.BASE_URL as string;

export const createSession = async (lineItems: any) =>
  await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lineItems),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
