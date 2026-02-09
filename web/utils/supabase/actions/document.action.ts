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
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      console.error("Authentication error:", authError);
      return { success: false, error: "User not authenticated" };
    }
    
    // Generate unique filename with user ID prefix for better organization
    const fileName = `${user.id}/${randomUUID()}-${file.name}`;
    
    // Upload file to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("documents")
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (uploadError) {
      console.error("Upload error:", uploadError);
      return { success: false, error: uploadError.message };
    }
    
    // Get public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from("documents")
      .getPublicUrl(fileName);
    
    console.log("Upload successful:", uploadData);
    
    return { 
      success: true, 
      data: {
        ...uploadData,
        publicUrl,
        userId: user.id
      }
    };
  } catch (error) {
    console.error("Upload failed:", error);
    return { success: false, error: "Upload failed" };
  }
};

export const deleteDocument = async () => {};
 