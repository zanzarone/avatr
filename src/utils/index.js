export function generateRandomString(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }

  return result;
}

export async function generateAvatar(options) {
  // Fetch options
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
    // body: options,
  };
  console.log(process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/generate`,
    fetchOptions
  );
  if (!response.ok) {
    throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
  }
  // a Blob object representing the file data
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");
  link.href = url;

  // Set the filename attribute (optional)
  link.setAttribute("download", "avatar.png");

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger a click event on the link to start the download
  link.click();

  // Clean up - remove the link and revoke the URL
  link.remove();
  window.URL.revokeObjectURL(url);
}
