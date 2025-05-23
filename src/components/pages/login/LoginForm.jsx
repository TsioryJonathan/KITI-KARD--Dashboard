"use client";

import React from "react";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import assets from "../../../../public/Images/assets";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";

export function LoginForm() {
  const {theme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Card className="mx-auto max-w-md w-full shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2 p-4">
            <Image
              src={currentTheme === "dark" ? assets.logoDark : assets.logoLight}
              alt="KITI-KARD"
              className="w-30 object-cover"
            ></Image>
          </div>
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Sign in to manage your NFC business cards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email here"
                  required
                  className="bg-background"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm text-text underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-background"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className={"text-text"} />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal text-text"
                >
                  Remember me
                </Label>
              </div>
              <CustomButton
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </CustomButton>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            <CustomButton>
              <span>
                <FcGoogle />
              </span>
              Google
            </CustomButton>
            <CustomButton onClick={() => signIn("github")}>
              <span>
                <FaGithub />
              </span>
              Github
            </CustomButton>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8 text-center">
        <div className="inline-flex items-center justify-center p-1 bg-background/50 backdrop-blur-sm border rounded-full">
          <div className="flex space-x-1">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <div className="size-2 rounded-full bg-primary/70 animate-pulse [animation-delay:0.2s]" />
            <div className="size-2 rounded-full bg-primary/40 animate-pulse [animation-delay:0.4s]" />
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Secure, encrypted connection
        </p>
      </div>
    </div>
  );
}
