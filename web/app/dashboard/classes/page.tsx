import { getDocuments } from "@/utils/supabase/actions/document.action";

export default async function ClassesPage() {
  const result = await getDocuments();
  
  if (result?.error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Classes</h1>
        <div className="text-red-500">
          Error loading documents: {result.error.message || "Unknown error"}
        </div>
      </div>
    );
  }

  const documents = result?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      {documents.length === 0 ? (
        <p className="text-gray-500">No documents found.</p>
      ) : (
        <div className="grid gap-4">
          {documents.map((doc: any) => (
            <div key={doc.id} className="border rounded-lg p-4">
              <h3 className="font-semibold">{doc.title || doc.name || "Untitled"}</h3>
              {doc.description && (
                <p className="text-gray-600 mt-2">{doc.description}</p>
              )}
              {doc.created_at && (
                <p className="text-sm text-gray-400 mt-2">
                  Created: {new Date(doc.created_at).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
