// app/component/AuthorBox.tsx
import Image from "next/image";

export default function AuthorBox({ author }: { author: any }) {
  if (!author) return null;
  return (
    <div className="flex items-center gap-3 mt-16 border-t pt-6">
      {author.image ? (
        <Image
          src={author.image}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      )}
      <div>
        <p className="font-semibold text-gray-900 text-sm">{author.name}</p>
        {author.role && <p className="text-sm text-gray-500">{author.role}</p>}
      </div>
    </div>
  );
}
