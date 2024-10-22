import { StatusBar } from "expo-status-bar"; // Importing StatusBar from Expo for managing the app's status bar
import { Redirect, Tabs } from "expo-router"; // Importing Tabs and Redirect from expo-router for tab navigation and redirection
import { Image, Text, View } from "react-native"; // Importing necessary components from React Native for UI rendering

import { icons } from "../../constants"; // Importing icons from a constants file (assuming it contains icon paths)

// Creating a component to render each Tab's icon and label
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      {/* Rendering the tab icon */}
      <Image
        source={icon} // Icon source passed as a prop
        resizeMode="contain" // Ensuring the image maintains its aspect ratio within the given dimensions
        tintColor={color} // Dynamically applying color based on whether the tab is active/inactive
        className="w-6 h-6" // Setting width and height of the icon to 24x24 (6 units in Tailwind style)
      />
      {/* Rendering the tab label */}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} // Applying different font styles based on whether the tab is active/inactive
        style={{ color: color }} // Dynamically applying the text color
      >
        {name} {/* The tab label passed as a prop */}
      </Text>
    </View>
  );
};

// The main layout component that defines the tab navigation
const TabLayout = () => {
  return (
    <>
      {/* Tabs component from expo-router to create a tab-based layout */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001", // Active tab icon color (orange)
          tabBarInactiveTintColor: "#CDCDE0", // Inactive tab icon color (gray)
          tabBarShowLabel: false, // Hides default tab labels, since custom labels are rendered in TabIcon
          tabBarStyle: {
            backgroundColor: "#161622", // Dark background for the tab bar
            borderTopWidth: 1, // Border at the top of the tab bar
            borderTopColor: "#232533", // Border color
            height: 84, // Height of the tab bar
          },
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home" // Tab name (corresponding to the screen route)
          options={{
            title: "Home", // Screen title (optional)
            headerShown: false, // Hides the header bar for this screen
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home} // Passes the home icon
                color={color} // Passes the dynamically set color (active/inactive)
                name="Home" // Passes the label "Home"
                focused={focused} // Passes whether the tab is active or not
              />
            ),
          }}
        />

        {/* Bookmark Tab */}
        <Tabs.Screen
          name="bookmark" // Route name for the bookmark tab
          options={{
            title: "Bookmark", // Optional title for the screen
            headerShown: false, // Hides the header
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark} // Icon for the bookmark tab
                color={color} // Color (active/inactive)
                name="Bookmark" // Label for the tab
                focused={focused} // Whether the tab is active or not
              />
            ),
          }}
        />

        {/* Create Tab */}
        <Tabs.Screen
          name="create" // Route name for the create tab
          options={{
            title: "Create", // Screen title
            headerShown: false, // Hides the header
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus} // Icon for the create tab
                color={color} // Color (active/inactive)
                name="Create" // Label for the tab
                focused={focused} // Whether the tab is active or not
              />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="profile" // Route name for the profile tab
          options={{
            title: "Profile", // Screen title
            headerShown: false, // Hides the header
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile} // Icon for the profile tab
                color={color} // Color (active/inactive)
                name="Profile" // Label for the tab
                focused={focused} // Whether the tab is active or not
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout; // Exporting the layout component
