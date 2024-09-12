import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

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
  setContent: (newContent: unknown) => void;
}
export default function MarkdownEditor({ setContent }: MarkdownEditorProps) {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={[ StarterKit ]}
      editorProps={{
        attributes: {
          spellcheck: 'false', // Performance enhancement, plus we don't really need it.
          class: "prose prose-sm sm:prose-base m-5 focus:outline-none text-neutral-100",
        },
      }}
      content={content}
      onUpdate={({ editor }) => setContent(editor.getHTML())}
    >
    </EditorProvider>
  );
}
