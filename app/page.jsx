import Link from "next/link";

const HomePage = () => {
  return <div>
    <h1 className="text-3xl">خوش آمدید</h1>
    <Link href="/properties">نمایش خانه ها</Link>
  </div>;
};

export default HomePage;
