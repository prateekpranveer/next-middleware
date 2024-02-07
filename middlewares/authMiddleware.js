import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const authMiddleware = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Check for your authentication criteria here
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");

      if (username === "geeksforgeeks" && password === "1234") {
        setIsAuthenticated(true);
      } else {
        router.replace("/login");
      }
    }, []);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      // You may want to render a loading spinner or some other UI while checking authentication
      return null;
    }
  };

  return AuthComponent;
};

export default authMiddleware;
