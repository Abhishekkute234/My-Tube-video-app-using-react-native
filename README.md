# React-Native-APP

My React Native Project with Expo
This project is created using React Native and Expo to develop cross-platform mobile applications for both iOS and Android.

Features
React Native Components:
Text: Displays text in the app with customizable styles.
View: A container like div that wraps all components.
TouchableOpacity: For creating buttons with opacity effect.
TouchableHighlight: A button with a highlight effect.
TouchableWithoutFeedback: A button with no visual feedback.
ActivityIndicator: Displays a loading animation.
Image: Displays images.
ImageBackground: Uses an image as a background.
FlatList: Displays long lists with optimized rendering.
ScrollView: Holds multiple components and enables scrolling.
SafeAreaView: Ensures content appears correctly on all devices (handles borders).
TextInput: Accepts user input.
Animations: Using Animatable for UI animations.
Styling: Using NativeWind (Tailwind CSS for React Native) for design.
Backend: Integrated with AppWrite (open-source backend solution) for OAuth, database, and storage.
Real-time Debugging: React Native Debugger and Inspector for real-time support.
Installation
Step 1: Create an Expo Project
Run the following command to create a new Expo project:

bash
Copy code
npx create-expo-app my-new-project
cd my-new-project
Step 2: Install Required Dependencies
Install the necessary dependencies:

bash
Copy code
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
Step 3: Explore the app.json File
Familiarize yourself with the project’s settings in the app.json file. This is where you configure various project-level settings.

Step 4: Modify the \_layout.jsx File
Replace the code in your \_layout.jsx file with the following:

javascript
Copy code
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
return (
<>
<Text>Header</Text>
<Slot />
<Text>Footer</Text>
</>
);
};

export default RootLayout;

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
});
Step 5: Create an index.jsx File
This will be your home page. Create the file inside the app directory:

javascript
Copy code
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
return (
<View style={styles.container}>
<Text>Hello Abhishek, you have created your new project!</Text>
<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
});
Step 6: Create a profile.jsx Page
Add a basic structure to your profile.jsx file:

javascript
Copy code
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
return (
<View style={styles.container}>
<Text>Welcome to the Profile Page!</Text>
</View>
);
};

export default Profile;

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
});
In your index.jsx file, import Link from expo-router to navigate to the profile page:

javascript
Copy code
import { Link } from "expo-router";

export default function App() {
return (
<View style={styles.container}>
<Text>Hello Abhishek, you have created your new project!</Text>
<Link href="./profile" style={{ color: "blue" }}>
Go to Profile Page
</Link>
<StatusBar style="auto" />
</View>
);
}
