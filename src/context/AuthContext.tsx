import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (data: User) => { success: boolean; message: string };
  login: (
    email: string,
    password: string
  ) => { success: boolean; message: string };
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    return JSON.parse(localStorage.getItem("loggedInUser") || "null");
  });

  const isAuthenticated = !!user;

  const signup = (data: User) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u: User) => u.email === data.email);

    if (exists) {
      return { success: false, message: "User already exists!" };
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    setUser(data);

    return { success: true, message: "Signup successful! Welcome aboard 🎉" };
  };

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (u: User) => u.email === email && u.password === password
    );

    if (!existingUser) {
      return { success: false, message: "Invalid email or password" };
    }

    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
    setUser(existingUser);

    return {
      success: true,
      message: `Welcome back, ${existingUser.firstName}!`,
    };
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    toast.info("You have been logged out.");
  };

  const updateUser = (data: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u: User) =>
      u.email === user.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("Profile updated successfully!");
  };

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signup, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
