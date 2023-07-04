import Link from "next/link";

export default function Home() {
  let name = "Yeom";
  return (
    <div>
      <h4 className="title">Apple Fresh</h4>
      <p className="title-sub">by {name}</p>
    </div>
  );
}
