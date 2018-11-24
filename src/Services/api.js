export async function fetchService(url, method = "GET", body = null) {
    const request = new Request(url, {
      method,
      withCredentials: true,
      credentials: "same-origin",
      body
    });
  
    const response = await fetch(request);
    return response.json();
  }
  