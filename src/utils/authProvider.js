// "https://kkn-backend.et.r.appspot.com/",
export const apiUrl = "https://kkn-backend.et.r.appspot.com/";
// export const apiUrl = "http://localhost:8080";

export const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status === 401) {
          throw new Error("401");
        }
        if (response.status === 400) {
          throw new Error("400");
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem("auth", JSON.stringify(auth));
      })
      .catch(({ message }) => {
        if (message === "401") throw new Error("Username atau password salah");
        if (message === "400")
          throw new Error("Username atau password tidak lengkap");

        throw new Error("Koneksi gagal");
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { _id, username } = JSON.parse(localStorage.getItem("auth"));
      return Promise.resolve({
        id: _id,
        fullName: username,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => {
    return Promise.resolve({ allowed: true });
  },
};
