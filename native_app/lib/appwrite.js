import { Platform } from "react-native";

// All the AppWrite configuration details are stored in this object
export const appwriteConfig = {
  // The endpoint URL for the AppWrite cloud service
  endpoint: "https://cloud.appwrite.io/v1",

  // The platform identifier for your app (iOS/Android), set based on your package name or app identifier
  platform: "com.jsm.mytube",

  // Unique ID of the project created on the AppWrite console
  projectId: "6719f229002fe466d342",

  // Unique ID of the database created in AppWrite for storing app data
  databaseId: "6719f512002e66820d9f",

  // ID of the collection in AppWrite used for storing user-related data
  userCollectionId: "6719f56e000cf41be4d4",

  // ID of the collection in AppWrite used for storing video-related data
  videoCollectionId: "6719f5e800397528ff20",

  // Storage bucket ID in AppWrite for storing files (like video files)
  storageId: "6719fa250024b7baf2bb",
};
