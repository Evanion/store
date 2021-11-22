import { useState, useEffect } from "react";
import { of } from "rxjs";
import { getUser, User } from "./user";

interface UserState {
  loading: boolean;
  loaded: boolean;
  user?: User;
  error?: Error | null;
}

export const useUser = () => {
  const [user, setUser] = useState<UserState>({
    loading: false,
    loaded: false,
    error: null,
  } as UserState);
  useEffect(() => {
    setUser((state) => ({ ...state, loading: true, loaded: false }));
    getUser().subscribe({
      next: (usr) =>
        setUser((state) => ({
          ...state,
          loading: false,
          loaded: true,
          user: usr,
          error: null,
        })),
      error: (error) => {
        setUser((state) => ({ ...state, loading: false, loaded: true, error }));
      },
    });
  }, []);
  return user;
};
