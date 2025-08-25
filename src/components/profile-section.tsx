import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
import { profileSchema } from "@/lib/validation";

export type ProfileFormValues = yup.InferType<typeof profileSchema>;

const ProfileSection = () => {
  const { user, updateUser } = useAuth();
  const [editMode, setEditMode] = useState(false);

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
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-3xl mx-auto transition-transform transform hover:scale-[1.01]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        👤 Your Profile
      </h2>

      {editMode ? (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">First Name</label>
            <input
              {...register("firstName")}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Last Name</label>
            <input
              {...register("lastName")}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email (full width) */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              {...register("email")}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="sm:col-span-2 flex gap-4 justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 font-medium">First Name</p>
            <p className="text-gray-800 font-semibold">{user?.firstName}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 font-medium">Last Name</p>
            <p className="text-gray-800 font-semibold">{user?.lastName}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm sm:col-span-2">
            <p className="text-gray-500 font-medium">Email</p>
            <p className="text-gray-800 font-semibold">{user?.email}</p>
          </div>
          <div className="sm:col-span-2 flex justify-end mt-2">
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
