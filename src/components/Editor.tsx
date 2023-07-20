import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { initialContent } from './initialContent';
import { lowlight } from 'lowlight';
import html from 'highlight.js/lib/languages/xml';
import js from 'highlight.js/lib/languages/javascript';
import {
  RxFontBold,
  RxFontItalic,
  RxCode,
  RxStrikethrough,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx';

import 'highlight.js/styles/base16/ashes.css';

import { BubbleButton } from './BubbleButton';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('js', js);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none"
      }
    }
  });

  return (
    <>
      <EditorContent
        className="pt-16 prose prose-lg prose-invert prose-pink text-zinc-800 max-w-[700px] mx-auto"
        editor={editor}
      />
      {editor && <FloatingMenu
        className="flex flex-col px-1 py-2 overflow-hidden rounded-lg shadow-md bg-zinc-800 border-zinc-600 shadow-black/50"
        editor={editor}
        shouldShow={({ state }) => {
          const { $from } = state.selection;
          const currentLineText = $from.nodeBefore?.text ?? '';

          return currentLineText === '/';
        }}
      >
        <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none cursor-pointer" onClick={() => editor.chain().focus().toggleBold().run()}>
          <img
            src="http://www.notion.so/images/blocks/text/en-US.png"
            alt="Text"
            className="w-12 border rounded-md border-zinc-600" 
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <div>
            <span>Text</span>
            <span>Start writing with plain text</span>
          </div>
        </button>
        <button
          className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none cursor-pointer"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <img
            src="http://www.notion.so/images/blocks/header.57a7576a.png"
            alt="Heading"
            className="w-12 border rounded-md border-zinc-600"
          />
          <div>
            <span>Heading 1</span>
            <span>Big section heading</span>
          </div>
        </button>
      </FloatingMenu>
      }
      {editor && <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="flex overflow-hidden border divide-x rounded-lg shadow-xl divide-zinc-600 bg-zinc-800 border-zinc-600 shadow-black/50"
      >
        <BubbleButton>
          Text
          <RxChevronDown className="w-4 h-4 ml-1" />
        </BubbleButton>
        <BubbleButton>
          Comment
          <RxChatBubble className="w-4 h-4 ml-1" />
        </BubbleButton>
        <div className="flex items-center gap-1.5 px-2">
          <BubbleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')}
          >
            <RxFontBold className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            data-active={editor.isActive('italic')}
          >
            <RxFontItalic className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strike')}
          >
            <RxStrikethrough className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            data-active={editor.isActive('codeBlock')}
          >
            <RxCode className="w-4 h-4" />
          </BubbleButton>
        </div>
      </BubbleMenu>}
    </>
  );
}
