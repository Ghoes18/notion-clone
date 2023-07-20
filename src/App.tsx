import { Editor } from "./components/Editor";

function App() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-rose-700 to-pink-600 text-zinc-50">
      <div className="w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-lg bg-zinc-800 border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="p-4 border-r bg-zinc-900 border-r-zinc-800">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-red-500" />
            <button className="w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-yellow-500" />
            <button className="w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-green-500" />
          </div>
        </aside>
        <main className="p-4 overflow-auto">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
