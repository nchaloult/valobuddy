import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import { Markdown } from "tiptap-markdown";

function MenuBar() {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }

  function promptForHyperlink() {
    if (editor?.isActive("link")) {
      return editor.chain().focus().unsetLink().run();
    }

    const href = prompt("URL to link to:");
    if (!href) {
      return editor?.chain().focus().run();
    }

    return editor?.chain().focus().setLink({ href }).run();
  }

  return (
    <div className="bg-neutral-600 pb-0.5">
      <div className="grid gap-0.5 grid-flow-col auto-cols-max [&>*]:px-2.5 [&>*]:py-1 [&>*]:text-sm [&>*]:font-['Space_Mono']">
        <button
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("bold") ? "bg-left-bottom" : "bg-right-bottom"
          }`}
        >
          B
        </button>
        <button
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("italic") ? "bg-left-bottom" : "bg-right-bottom"
          }`}
        >
          I
        </button>
        <button
          title="Strikethrough"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("strike") ? "bg-left-bottom" : "bg-right-bottom"
          }`}
        >
          S
        </button>
        <button
          title="Block quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("blockquote") ? "bg-left-bottom" : "bg-right-bottom"
          }`}
        >
          "
        </button>
        <button
          title="Bulleted list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("bulletList") ? "bg-left-bottom" : "bg-right-bottom"
          }`}
        >
          *
        </button>
        <button
          title="Numbered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("orderedList")
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          1
        </button>
        {/* No disabled state on this button. Honestly, we can probably get rid
            of the disabled states on all buttons. */}
        <button
          title="Hyperlink"
          onClick={promptForHyperlink}
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("link") ? "bg-left-bottom" : "bg-right-bottom"
          }`}
        >
          L
        </button>
        <button
          title="Heading 1"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("heading", { level: 1 })
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          H1
        </button>
        <button
          title="Heading 2"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          H2
        </button>
        <button
          title="Heading 3"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("heading", { level: 3 })
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          H3
        </button>
        <button
          title="Heading 4"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("heading", { level: 4 })
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          H4
        </button>
        <button
          title="Heading 5"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("heading", { level: 5 })
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          H5
        </button>
        <button
          title="Heading 6"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          disabled={
            !editor.can().chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 focus:bg-left-bottom focus:text-neutral-900 transition-all duration-200 ${
            editor.isActive("heading", { level: 6 })
              ? "bg-left-bottom"
              : "bg-right-bottom"
          }`}
        >
          H6
        </button>
      </div>
    </div>
  );
}

interface MarkdownEditorProps {
  initialContent: string;
  setContent: (newContent: string) => void;
}
export default function MarkdownEditor({
  initialContent,
  setContent,
}: MarkdownEditorProps) {
  async function uploadImage(file: File): Promise<{
    publicUrl: string;
    deleteHash: string;
  }> {
    const requestBody = new FormData();
    requestBody.append("type", "image");
    requestBody.append("title", "Image for strat in ValoBuddy");
    requestBody.append("image", file);

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        // TODO: Either store this client ID as a secure cookie on the client
        // side, or perform this image-uploading work on the server side, and
        // put this client ID in an environment variable.
        //
        // Technically, this client ID doesn't need to be kept a secret. It can
        // still be abused, though. For instance, people could mass-upload
        // images with this client ID, and Imgur would think we're the ones
        // doing it. We'd have no way to prove that we weren't.
        //
        // This GitHub repo is public, so this client ID is out there and
        // available to anyone who's scraping for these things. I'm kinda just
        // shrugging my shoulders at that for now, honestly.
        Authorization: "Client-ID 85608d9006f9d83",
        Accept: "application/json",
      },
      body: requestBody,
    });

    const data: any = await response.json();
    return { publicUrl: data.data.link, deleteHash: data.data.deletehash };
  }

  return (
    <div className="bg-neutral-700 border-2 border-neutral-600 hover:border-neutral-500 has-[:focus]:border-neutral-400 transition-all duration-200">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={[StarterKit, ImageExtension, LinkExtension, Markdown]}
        editorProps={{
          attributes: {
            spellcheck: "false", // Performance enhancement, plus we don't really need it.
            // Re. max-w-full: there seems to be a max width set on this editor.
            // Not sure if it's coming from Tailwind's prose classes, if it's
            // baked into Tiptap itself, or what. We're overriding it here.
            class:
              "prose prose-invert prose-neutral prose-sm max-w-full min-h-[30svh] px-2 py-1 focus:outline-none",
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

            // Check the image's dimensions.
            let _URL = window.URL || window.webkitURL;
            let img = new Image();
            img.src = _URL.createObjectURL(file);
            img.onload = function () {
              uploadImage(file)
                .then(({ publicUrl, deleteHash }) => {
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
                    if (!coordinates) {
                      // TODO: Revisit this home-grown error message?
                      throw new Error(
                        "The editor view did not return coordinates for its current position."
                      );
                    }

                    // Create the TipTap Image element/"node".
                    //
                    // TODO: Explore adding the deleteHash to this node as a
                    // mark?
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
            };

            return true;
          },
        }}
        content={initialContent}
        onUpdate={({ editor }) =>
          setContent(editor.storage.markdown.getMarkdown())
        }
      ></EditorProvider>
    </div>
  );
}
