import { getDocument } from "@/utils/supabase/actions/document.action";

export default async function ClassesPage() {
  const documents = await getDocument();

  return <div>Classes Page</div>;
}
