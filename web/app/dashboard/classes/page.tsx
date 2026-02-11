import { getDocuments } from "@/utils/supabase/actions/document.action";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { DocumentCard } from "@/components/document-card";

interface Document {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  publicUrl: string;
  userId: string;
}

export default async function ClassesPage() {
  const result = await getDocuments();
  
  // Check if result is an error object
  if (result && 'error' in result && result.error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Classes</h1>
        <div className="text-red-500">
          Error loading documents: {typeof result.error === 'string' ? result.error : 'Unknown error'}
        </div>
      </div>
    );
  }

  const documents = (Array.isArray(result) ? result : []) as Document[];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Documents</h1>
        <p className="text-muted-foreground mt-2">
          Manage and view your uploaded documents
        </p>
      </div>
      
      {documents.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No documents found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Upload your first document to get started
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
