"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email, password)
  }, [email, password])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1>Login</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Enter your password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button className="w-full">Login</Button>
          <div className="flex items-center justify-center gap-2">
            <hr className="w-20" />
            <p className="text-center">or continue with</p>
            <hr className="w-20" />
          </div>
          <Button className="w-full" onSubmit={() => {}}>
            <Image
              src={require("../assets/google.png")}
              alt="Google"
              className="h-4 w-4"
            />
            Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
