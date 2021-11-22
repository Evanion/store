import { Observable } from "rxjs";

export const getUser = () =>
  new Observable<User>((sub) => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch("https://randomuser.me/api/", { signal })
      .then((res) => res.json())
      .then((res) => res.results[0])
      .then((user) => {
        sub.next(user);
        sub.complete();
      })
      .catch((error) => {
        sub.error(error);
      });

    return () => controller.abort();
  });

export interface User {
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  id: { name: string; value: null };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    postcode: string | number;
    country: string;
    coordinates: { latitude: string; longitude: string };
  };
  timezone: { offset: string; description: string };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  pone: string;
  picture: { large: string; medium: string; thumbnail: string };
  registered: { date: string; age: number };
}
