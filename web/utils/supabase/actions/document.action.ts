"use server";

import { createClient } from "../server";
import { cookies } from "next/headers";

export const getDocuments = async () => {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase.from("documents").select();
    console.log("response", response);
    
    if (response.error) {
      console.error("Supabase error:", response.error);
      return { data: null, error: response.error };
    }
    
    console.log("documents data:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return { data: null, error };
  }
};

export const getDocument = async () => {};

export const postDocument = async () => {};

export const deleteDocument = async () => {};
