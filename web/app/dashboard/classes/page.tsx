import { getDocuments } from "@/utils/supabase/actions/document.action";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, Clock } from "lucide-react";

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

  // Extract clean filename from the UUID-prefixed name
  const getCleanFileName = (name: string) => {
    const parts = name.split('-');
    if (parts.length > 5) {
      return parts.slice(5).join('-');
    }
    return name;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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
            <Card key={doc.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base line-clamp-2">
                      {getCleanFileName(doc.name)}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Document
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Created: {formatDate(doc.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Updated: {formatTime(doc.updated_at)}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a 
                    href={doc.publicUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View
                  </a>
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                >
                  Create Quiz
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
