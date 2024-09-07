import { createContent } from "@/api/createContent";
import { getContent } from "@/api/getContent";
import { updateContent } from "@/api/updateContent";
import Editor from "@/components/editor/advanced-editor";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { JSONContent } from "novel";
import { toast } from "sonner";

export default function DailyPage() {
  const { today } = useSearch({
    from: "/_auth/_auth/daily",
  });

  const { data: initialContent, isPending } = useQuery({
    queryKey: ["daily", today],
    queryFn: async () => {
      const { data, error } = await getContent({
        day: today,
      });
      if (error) {
        throw new Error(error.message);
      }

      // 데이터가 없는경우 생성합니다.
      if (!data?.[0]?.content) {
        const { error } = await createContent({
          day: today,
        });
        if (error) {
          throw new Error(error.message);
        }
        return {};
      }

      const content = data[0].content ?? {};
      return content;
    },
    staleTime: 0,
    gcTime: 0,
  });

  const { mutateAsync: updateContentAsync } = useMutation({
    mutationFn: async (content: JSONContent) => {
      const { data, error } = await updateContent({
        day: today,
        content,
      });
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess() {
      toast.success("Content updated");
    },
  });

  const handleUpdateContent = async (content: JSONContent) => {
    await updateContentAsync(content);
  };

  return (
    <div className="p-12">
      <h1>{today}</h1>
      {isPending && <EditorSkeleton />}
      {!isPending && (
        <Editor initialValue={initialContent} onChange={handleUpdateContent} />
      )}
    </div>
  );
}

const EditorSkeleton = () => {
  return <Skeleton className="w-full h-[600px]" />;
};
