import { FaArrowCircleRight } from "react-icons/fa";

export default function ChatInput({
  input,
  setInput,
  handleSubmit,
  handleKeyDown,
}: {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center pt-0">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full"
      >
        <input
          type="text"
          className="flex-1 h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 mx-2 my-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          disabled={input.length === 0}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
        >
          <FaArrowCircleRight /> {" "}
          <span className="mx-2">Send</span>
        </button>
      </form>
    </div>
  );
}

function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      {...props}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
    >
      <FaArrowCircleRight />
    </button>
  );
}
