const Tag: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      title={title}
      className={`w-fit p-1 px-3 text-gray-100 font-bold rounded-full text-sm bg-teal-600`}
    >
      {title}
    </div>
  );
};

export default Tag;
