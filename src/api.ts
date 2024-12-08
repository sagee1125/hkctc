export const sendEmail = async (formData: any) => {
  const response = await fetch(
    "http://your-php-server-url/your-php-script.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  const data = await response.json();
  return data;
};
