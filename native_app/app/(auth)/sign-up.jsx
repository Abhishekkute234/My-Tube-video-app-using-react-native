import React, { useState } from "react"; // Importing React and useState hook
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native"; // Importing necessary React Native components
import { images } from "../../constants"; // Importing image assets from constants (assumed to have paths for images)
import FormField from "../../components/FormField"; // Importing custom FormField component for input fields
import CustomButton from "../../components/CustomButton"; // Importing custom Button component for form submission
import { Link } from "expo-router"; // Importing Link from Expo Router for navigation

export default function SignUp() {
  // Local state to manage the form data (username, email, password)
  const [form, setForm] = useState({
    username: "", // Initial value for username field
    email: "", // Initial value for email field
    password: "", // Initial value for password field
  });

  // State to manage loading state during form submission
  const [isSubmitting, setSubmitting] = useState(false);

  // Function to handle form submission (currently empty, you will need to add your API logic)
  const submit = async () => {
    setSubmitting(true); // Set the form to loading state when submit is initiated

    try {
      // Example: Add your API call or authentication logic here for user signup
      // await registerUser(form.username, form.email, form.password);

      // Simulating an API call delay (remove in actual implementation)
      setTimeout(() => {
        setSubmitting(false); // Reset loading state after submission
        alert("Registration Successful"); // Example success message (remove in real use)
      }, 1500);
    } catch (error) {
      console.error("Error during signup", error); // Error handling
      setSubmitting(false); // Reset loading state in case of an error
    }
  };

  return (
    // SafeAreaView to ensure content doesn't overlap system UI elements like the status bar
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          {/* Logo Image */}
          <Image
            source={images.logo} // Logo image from constants
            resizeMode="contain" // Ensures the image maintains its aspect ratio
            className="w-[115px] h-[35px]" // Styling for the logo size
          />

          {/* Title for the Sign-Up screen */}
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            SignUp to MyTube
          </Text>

          {/* Username Form Field */}
          <FormField
            title="Username" // Label for the username input
            value={form.username} // Current value of the username
            handleChangeText={(e) => setForm({ ...form, username: e })} // Update form state when text is input
            otherStyles="mt-10" // Adds margin at the top for spacing
          />

          {/* Email Form Field */}
          <FormField
            title="Email" // Label for the email input
            value={form.email} // Current value of the email
            handleChangeText={(e) => setForm({ ...form, email: e })} // Update form state when text is input
            otherStyles="mt-7" // Adds margin at the top for spacing
            keyboardType="email-address" // Keyboard type optimized for email input
          />

          {/* Password Form Field */}
          <FormField
            title="Password" // Label for the password input
            value={form.password} // Current value of the password
            handleChangeText={(e) => setForm({ ...form, password: e })} // Update form state when text is input
            otherStyles="mt-7" // Adds margin at the top for spacing
            secureTextEntry // Hide the text when typing (for passwords)
          />

          {/* Sign Up Button */}
          <CustomButton
            title="Sign Up" // Button label
            handlePress={submit} // Submit function is called when pressed
            containerStyles="mt-7" // Adds margin at the top for spacing
            isLoading={isSubmitting} // Shows a loading spinner if the form is being submitted
          />

          {/* Navigation to SignIn screen for existing users */}
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              If you have an account then
            </Text>
            <Link
              href="/sign-in" // Navigation link to the SignIn screen
              className="text-lg font-psemibold text-secondary"
            >
              SignIn
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
