import { createContext, useState, useEffect, type ReactNode } from "react";

interface User {
  name?: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (name: string, email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from LocalStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Signup new user
  const signup = (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some((u: User) => u.email === email);

    if (userExists) {
      alert("User already exists!");
      return false;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  // Login user
  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (u: User) => u.email === email && u.password === password
    );

    if (!existingUser) {
      alert("Invalid email or password!");
      return false;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
    setUser(existingUser);
    return true;
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
