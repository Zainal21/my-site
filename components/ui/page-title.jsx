export default function PageTitle({ title }) {
  return (
    <h1 className="pt-5 font-body lg:text-2xl text-xl font-semibold text-primary dark:text-white max-w-4xl">
      {title}
    </h1>
  );
}
