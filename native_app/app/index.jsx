import { StatusBar } from "expo-status-bar"; // Importing the StatusBar component from Expo to control the status bar appearance
import { Redirect, router } from "expo-router"; // Importing Redirect and router from expo-router to handle navigation and redirection
import { View, Text, Image, ScrollView } from "react-native"; // Importing core React Native components for UI rendering
import { SafeAreaView } from "react-native-safe-area-context"; // SafeAreaView ensures the app content doesn't overlap system UI elements (like the notch or status bar)

import { images } from "../constants"; // Importing images from a constants file (assuming this file contains paths for images used in the component)
// import { CustomButton, Loader } from "../components"; // Importing a custom button component and a loader component (presumably reusable components in the app)
import { useGlobalContext } from "../context/GlobalProvider"; // Importing the global context to access shared state (such as user authentication and loading status)

const Welcome = () => {
  // Accessing values from the global context (e.g., loading state and authentication status)
  const { loading, isLogged } = useGlobalContext();

  // If the user is not loading and already logged in, redirect to the home page
  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Loader component: displays a loading spinner if the app is loading */}
      <Loader isLoading={loading} />
      <ScrollView
        contentContainerStyle={{
          height: "100%", // Ensures the ScrollView covers the full height of the screen
        }}
      >
        {/* Main content container */}
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* Logo Image */}
          <Image
            source={images.logo} // The source of the logo image (from the images constant)
            className="w-[130px] h-[84px]" // Tailwind-style dimensions for the logo
            resizeMode="contain" // Ensures the logo keeps its aspect ratio while fitting within the specified dimensions
          />

          {/* Cards Image (probably a decorative image) */}
          <Image
            source={images.cards} // Source for another image (cards illustration)
            className="max-w-[380px] w-full h-[298px]" // Responsive dimensions for the image
            resizeMode="contain" // Keeps the image's aspect ratio intact
          />

          {/* Title text with a nested colored word */}
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"} {/* Text with line breaks */}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>{" "}
              {/* Aora is highlighted with a different color */}
            </Text>

            {/* Decorative path image */}
            <Image
              source={images.path} // Source for a path-like image (possibly underlining or decorative)
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8" // Positioned and sized with Tailwind classes and absolute positioning
              resizeMode="contain" // Keeps the aspect ratio of the image
            />
          </View>

          {/* Subtitle text */}
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          {/* Custom button that navigates to the sign-in screen */}
          <CustomButton
            title="Continue with Email" // Button label
            handlePress={() => router.push("/sign-in")} // Navigates to the sign-in screen when pressed
            containerStyles="w-full mt-7" // Styling for the button container (full width and some margin on top)
          />
        </View>
      </ScrollView>
      {/* Customizing the StatusBar */}
      <StatusBar backgroundColor="#161622" style="light" />{" "}
      {/* Sets the background color and the light style for status bar text */}
    </SafeAreaView>
  );
};

export default Welcome; // Exporting the Welcome component to be used in other parts of the app
