"use server";

import { createClient } from "../server";
import { randomUUID } from "crypto";

export const getDocuments = async () => {
  try {
    const supabase = await createClient();
    const response = await supabase.from("documents").select();
    console.log("response", response);
    
    if (response.error) {
      console.error("Supabase error:", response.error);
      return { data: null, error: response.error };
    }
    
    console.log("documents data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return { data: null, error };
  }
};

export const getDocument = async ({id}: {id: string}) => {
  try {
    const supabase = await createClient();
    const response = await supabase.from("documents").select("*").eq("id", id).single()
    return response.data
  } catch (error) {
    console.log("Error fetching document:", error)
    return { data: null, error }
  }
};

export const postDocument = async ({ file } : { file: File}) => {
  try {
    const supabase = await createClient();
    
    // Generate unique filename
    const fileName = `${randomUUID()}-${file.name}`;
    
    // Upload file to Supabase storage
    const { data, error } = await supabase.storage
      .from("documents")
      .upload(fileName, file);
    
    if (error) {
      console.error("Upload error:", error);
      return { success: false, error: error.message };
    }
    
    console.log("Upload successful:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Upload failed:", error);
    return { success: false, error: "Upload failed" };
  }
};

export const deleteDocument = async () => {};
