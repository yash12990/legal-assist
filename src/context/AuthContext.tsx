import { createContext, useState, type ReactNode } from "react";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signup: (data: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = (data: User) => {
    setUser(data);
  };

  // const login = (email: string, password: string) => {
  const login = (email: string) => {
    // Later you can add API logic here
    setUser({ firstName: "Demo", lastName: "User", email });
  };

  const logout = () => {
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
