import { useState } from "react"; // Importing useState for managing local state
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"; // Importing necessary React Native components

import { icons } from "../constants"; // Importing icons from a constants file

// Functional component to create a form field (e.g., for input text or passwords)
const FormField = ({
  title, // The label/title for the field (e.g., 'Password', 'Email')
  value, // The value of the input field
  placeholder, // Placeholder text when the input is empty
  handleChangeText, // Callback to handle changes in the input text
  otherStyles, // Additional styling that can be passed as a prop
  ...props // Spreading additional props passed to the component
}) => {
  const [showPassword, setShowPassword] = useState(false); // Local state to toggle password visibility

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Container for the label and input field. Using space-y-2 for vertical spacing between elements */}

      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      {/* Label for the input field, styled as base size and medium weight font */}

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        {/* Input container with rounded borders, background color, and padding. Flexbox used to align items horizontally */}

        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value} // Current value of the input
          placeholder={placeholder} // Placeholder text (e.g., 'Enter your password')
          placeholderTextColor="#7B7B8B" // Color for the placeholder text
          onChangeText={handleChangeText} // Function to update the state when text changes
          secureTextEntry={title === "Password" && !showPassword}
          // `secureTextEntry` hides the text if the title is 'Password' and password visibility is off
          {...props} // Spreading additional props (e.g., keyboardType, autoFocus)
        />

        {title === "Password" && (
          // If the field is for 'Password', show the toggle for password visibility
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* Button to toggle password visibility */}
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              // Switch between 'eye' icon (password hidden) and 'eyeHide' icon (password visible)
              className="w-6 h-6" // Size for the eye/eyeHide icon
              resizeMode="contain" // Ensures the icon maintains its aspect ratio
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField; // Exporting the FormField component for use in other parts of the app
