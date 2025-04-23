import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hello: "world" }}>
      {children}
    </UserContext.Provider>
  );
};
