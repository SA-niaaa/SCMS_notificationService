const API_URL = "http://localhost:8081/auth";

export const login = async (userId: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });

    const data = await response.json();

    if (!data || data === "Invalid Credentials") {
      return false;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userId", data.id.toString());
    localStorage.setItem("userName", data.username);
    localStorage.setItem("userRole", "Store User");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const logout = (): void => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  localStorage.removeItem("userRole");
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};

export const getCurrentUser = () => {
  return {
    id: localStorage.getItem("userId"),
    name: localStorage.getItem("userName"),
    role: localStorage.getItem("userRole"),
  };
};