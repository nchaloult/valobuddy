import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";

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
export default function MarkdownEditor({
  initialContent,
  setContent,
}: MarkdownEditorProps) {
  async function uploadImage(file: File): Promise<string> {
    // TODO: Hit a backend endpoint that you create to upload this image to
    // Imgur, and get a public URL back.
    //
    // In the meantime, we're stubbing that functionality out here by returning
    // the URL for a random image on the Internet.

    return "https://i.imgur.com/46gZCE2.jpeg";
  }

  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={[StarterKit, ImageExtension]}
      editorProps={{
        attributes: {
          spellcheck: "false", // Performance enhancement, plus we don't really need it.
          class:
            "prose prose-sm sm:prose-base m-5 focus:outline-none text-neutral-100",
        },
        handleDrop: (view, event, slice, moved) => {
          // Great blog post about getting drag & drop images to work.
          // https://www.codemzy.com/blog/tiptap-drag-drop-image

          // If doing anything other than dropping an external file...
          if (
            !(
              !moved &&
              event.dataTransfer &&
              event.dataTransfer.files &&
              event.dataTransfer.files[0]
            )
          ) {
            return false;
          }

          let file = event.dataTransfer.files[0]; // The dropped file.
          let filesize = (file.size / 1024 / 1024).toFixed(4); // The filesize in MB.
          if (
            !(file.type === "image/jpeg" || file.type === "image/png") ||
            filesize >= 10
          ) {
            window.alert(
              "Images need to be in jpg or png format and less than 10mb in size."
            );
            return false;
          }

          // Check the image's dimensions.
          let _URL = window.URL || window.webkitURL;
          let img = new Image();
          img.src = _URL.createObjectURL(file);
          img.onload = function () {
            if (this.width > 5000 || this.height > 5000) {
              window.alert(
                "Your images need to be less than 5000 pixels in height and width."
              );
            } else {
              uploadImage(file)
                .then((publicUrl) => {
                  // Pre-load the image before responding so loading indicators
                  // can stay and swaps out smoothly when the image is ready.
                  let image = new Image();
                  image.src = publicUrl;
                  image.onload = function () {
                    // Place the now uploaded image in the editor where it was
                    // dropped.

                    const { schema } = view.state;
                    const coordinates = view.posAtCoords({
                      left: event.clientX,
                      top: event.clientY,
                    });

                    // Create the TipTap Image element/"node".
                    const node = schema.nodes.image.create({
                      src: publicUrl,
                    });

                    // Place that "node" in the correct position.
                    const transaction = view.state.tr.insert(
                      coordinates.pos,
                      node
                    );

                    return view.dispatch(transaction);
                  };
                })
                .catch(function (error) {
                  if (error) {
                    window.alert(
                      "There was a problem uploading your image, please try again."
                    );
                  }
                });
            }
          };

          return true;
        },
      }}
      content={initialContent}
      onUpdate={({ editor }) => setContent(editor.getHTML())}
    ></EditorProvider>
  );
}
