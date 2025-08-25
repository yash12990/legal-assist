import Sidebar from "@/components/sidebar";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@/lib/validation";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { User, Menu } from "lucide-react";

export type ProfileFormValues = yup.InferType<typeof profileSchema>;

type Props = {
  showHeading?: boolean;
};

const Profile = ({ showHeading = true }: Props) => {
  const { user, updateUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    },
  });

  useEffect(() => {
    reset({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    });
  }, [user, reset]);

  const onSubmit = (data: ProfileFormValues) => {
    updateUser(data);
    setEditMode(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:w-64`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        />
      )}

      <main className="flex-1 p-6 md:p-8 w-full">
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
        </div>

        {showHeading && (
          <h1 className="hidden md:block text-3xl font-bold text-gray-800 mb-6">
            Your Profile
          </h1>
        )}

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-lg w-full mx-auto">
          {editMode ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 text-sm sm:text-base">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 text-sm sm:text-base">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm sm:text-base">
                  Email
                </label>
                <input
                  {...register("email")}
                  className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <User size={40} className="text-indigo-600" />
                <div>
                  <h2 className="text-xl font-semibold">
                    {user?.firstName} {user?.lastName}
                  </h2>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => setEditMode(true)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
