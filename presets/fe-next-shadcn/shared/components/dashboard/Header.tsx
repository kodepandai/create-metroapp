export default function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
    </div>
  );
}
