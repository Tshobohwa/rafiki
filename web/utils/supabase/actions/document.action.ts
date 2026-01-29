"use server";

import { createSupabaseClient } from "../client";

export const getDocuments = async () => {
  try {
    const supabase = createSupabaseClient();
    const respone = await supabase.from("documents").select();
    console.log("response", respone);
    const r = respone.data;
    console.log("r", r);
    return respone;
  } catch (error) {
    console.log(error);
  }
};

export const getDocument = async () => {};

export const postDocument = async () => {};

export const deleteDocument = async () => {};
