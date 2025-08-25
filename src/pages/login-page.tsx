import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import AuthLeftSection from "@/components/auth/auth-left-section";
import { loginSchema } from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormInputs) => {
    const result = login(data.email, data.password);

    if (result.success) {
      alert(result.message);
      navigate("/dashboard");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl bg-white overflow-hidden">
        <AuthLeftSection />

        <div className="flex items-center justify-center p-8">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                Welcome Back 👋
              </CardTitle>
              <p className="text-center text-gray-500 mt-1">
                Sign in to continue to{" "}
                <span className="font-semibold text-blue-600">
                  Legal Assist
                </span>
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="yash.gupta@example.com"
                    className="mt-1"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password")}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
                  Sign In
                </Button>

                <div className="flex items-center gap-3 my-3">
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
                  <span className="text-gray-400 text-sm">or</span>
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
