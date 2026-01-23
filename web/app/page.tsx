"use client";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

  useEffect(() => {
    console.log("Link:", link);
  }, [link]);
  return (
    <div className="">
      <nav className="sticky top-0 left-0 right-0 z-50 w-full flex items-center justify-between p-4 bg-white/75 backdrop-blur-sm h-20 border-b px-10">
        <CardTitle className="text-2xl">Rafiki</CardTitle>
        <div className="flex gap-5">
          <Button variant={"secondary"} className="w-30">
            Login
          </Button>
          <Button variant={"default"} className="w-30">
            Sign Up
          </Button>
        </div>
      </nav>
      <section className="px-80 py-60">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-semibold text-center">
              Redefine your learning experience with an intelligent, AI-powered
              platform.
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <p className="text-3xl text-center">
              Maximize your potential using tailored learning journeys,
              interactive lessons, and live progress tracking.
            </p>
            <p className="text-2xl text-center mt-4 mb-10">
              Analyse your document to automatically create questions
            </p>
            <CardContent>
              <div className="border p-7 flex flex-col items-center w-2/3 gap-7 rounded-3xl mx-auto mt-10 mb-10">
                <Button>Click to upload</Button>
                <div className="flex gap-10">
                  <span>PDF</span>
                  <span>DOCX</span>
                  <span>Power Point</span>
                </div>
              </div>
            </CardContent>
            <Input
              placeholder="Or paste a link here..."
              className="text-lg placeholder:text-xl h-16 rounded-full p-6"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              style={{ fontSize: 24 }}
            />
          </CardContent>
          <CardFooter>
            <Button
              variant={"default"}
              className="w-full h-15 rounded-full text-2xl"
            >
              Create Quiz
            </Button>
          </CardFooter>
        </Card>
      </section>
      <Footer />
    </div>
  );
}
