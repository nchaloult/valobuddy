import { EditorProvider, useCurrentEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"

function MenuBar() {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }

  return (
    <div className="p-4 bg-orange-200">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${editor.isActive("bold") ? "bg-blue-400" : ""}`}
      >
        Bold
      </button>
    </div>
  );
}

interface MarkdownEditorProps {
  initialContent: string;
  setContent: (newContent: unknown) => void;
}
export default function MarkdownEditor({ initialContent, setContent }: MarkdownEditorProps) {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={[ StarterKit, Image ]}
      editorProps={{
        attributes: {
          spellcheck: 'false', // Performance enhancement, plus we don't really need it.
          class: "prose prose-sm sm:prose-base m-5 focus:outline-none text-neutral-100",
        },
      }}
      content={initialContent}
      onUpdate={({ editor }) => setContent(editor.getHTML())}
    >
    </EditorProvider>
  );
}
