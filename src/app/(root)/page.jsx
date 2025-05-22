import React from "react";
import { LoginForm } from "@/components/pages/login/LoginForm";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Footer from "@/components/pages/login/Footer";

function Main() {
  return (
    <>
      <div className="w-full h-full">
        <div className="fixed top-5 right-5">
          <ThemeToggle />
        </div>

        <LoginForm />
        <Footer />
      </div>
    </>
  );
}

export default Main;
