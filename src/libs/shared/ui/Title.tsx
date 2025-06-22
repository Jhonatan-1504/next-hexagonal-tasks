"use client";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl font-extrabold dark:text-white mb-2">{children}</h2>
  );
};

export default Title;
