import { create } from 'zustand';

// 1. Define what our data looks like
interface UserProfile {
  username: string;
  email: string;
  mobile?: string;
  bio?: string;
}

// 2. Define the "Actions" (functions) our store can do
interface UserState {
  profile: UserProfile | null;
  tempUser: UserProfile | null;
  
  // These are the functions we will call from our screens
  setTempUser: (data: UserProfile) => void;
  setUser: (data: UserProfile | null) => void;
  logout: () => void;
}

// 3. Create the store
const useStore = create<UserState>((set) => ({
  profile: null, // Initially, no one is logged in
  tempUser: null, // Initially, no signup data

  // Action: Save signup info temporarily
  setTempUser: (data) => set({ tempUser: data }),

  // Action: Log the user in officially
  setUser: (data) => set({ profile: data, tempUser: null }),

  // Action: Clear everything
  logout: () => set({ profile: null, tempUser: null }),
}));

export default useStore;