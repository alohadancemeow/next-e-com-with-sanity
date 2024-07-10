export const createSession = async (lineItems: any) =>
  await fetch(`/api/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lineItems),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
