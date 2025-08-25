import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import AuthLeftSection from "@/components/auth/auth-left-section";
import { signupSchema } from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

type SignupFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: SignupFormInputs) => {
    // const { confirmPassword, ...userData } = data;
    const { ...userData } = data;
    const result = signup(userData);

    if (result.success) {
      toast(result.message);
      navigate("/dashboard");
    } else {
      toast.error(result.message);
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
                Create an Account ✍️
              </CardTitle>
              <p className="text-center text-gray-500 mt-1">
                Sign up to start using{" "}
                <span className="font-semibold text-blue-600">
                  Legal Assist
                </span>
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label htmlFor="firstName" className="text-gray-700">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      className="mt-1"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-[10px] mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="lastName" className="text-gray-700">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      className="mt-1"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-[10px] mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="id@example.com"
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

                <div>
                  <label htmlFor="confirmPassword" className="text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("confirmPassword")}
                    />
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </span>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
                  Create Account
                </Button>

                <div className="flex items-center gap-3 my-3">
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
                  <span className="text-gray-400 text-sm">or</span>
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign In
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
