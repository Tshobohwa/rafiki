import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1>Login</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Enter your email address" />
          <Input placeholder="Enter your password" />
          <Button className="w-full">Login</Button>
          <div className="flex items-center justify-center">
            <hr className="w-20" />
            <p className="text-center">or continue with</p>
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
