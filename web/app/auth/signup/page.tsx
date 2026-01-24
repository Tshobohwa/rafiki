import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1>Create an account</h1>
          <p>sign up to get started</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="enter your full name" />
          <Input placeholder="enter your email address" />
          <Input placeholder="enter your password" />
          <Input placeholder="confirm your password" />
          <Button className="w-full">Sign up</Button>
          <div className="flex items-center justify-center gap-3">
            <hr className="w-20" />
            <p>or continue with</p>
            <hr className="w-20" />
          </div>
          <Button className="w-full">
            <Image
              src={require("../../../assets/google.png")}
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
