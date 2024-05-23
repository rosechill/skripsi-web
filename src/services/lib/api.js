export const sendContactForm = async (data) =>
  fetch('/api/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then(async (res) => {
    if (!res.ok) throw new Error("Failed to send message");
    const responseData = await res.json();
    return responseData;
  });

export const sendBookTourForm = async (data) =>
  fetch('/api/tour', {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then(async (res) => {
    if (!res.ok) throw new Error("Failed to send message");
    const responseData = await res.json();
    return responseData;
  })