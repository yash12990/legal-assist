import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useContext,
} from "react";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signup: (data: User) => { success: boolean; message: string };
  login: (
    email: string,
    password: string
  ) => { success: boolean; message: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (data: User) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find((u: User) => u.email === data.email);
    if (existingUser) {
      return { success: false, message: "Email already exists. Please login." };
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    setUser(data);

    return { success: true, message: "Account created successfully!" };
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

    return { success: true, message: "Login successful!" };
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
