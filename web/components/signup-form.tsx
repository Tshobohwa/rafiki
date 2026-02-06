"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";
import { signUp, signInWithGoogle } from "@/utils/supabase/actions/auth.action";
import Link from "next/link";
import googleIcon from "../assets/google.png";

export default function SignupForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    setPasswordMatch(true);
    const result = await signUp(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    const result = await signInWithGoogle();
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Sign up to get started
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              disabled={loading}
            />
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              disabled={loading}
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              disabled={loading}
              minLength={6}
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              disabled={loading}
              minLength={6}
              className={!passwordMatch ? "border-red-500" : ""}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Sign up"}
            </Button>
          </form>

          <div className="flex items-center justify-center gap-3">
            <hr className="w-20" />
            <p className="text-sm text-muted-foreground">or continue with</p>
            <hr className="w-20" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <Image src={googleIcon} alt="Google" className="h-4 w-4 mr-2" />
            Google
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
