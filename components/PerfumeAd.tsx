import { Ad } from "@/types";

interface Props {
  ad: Ad;
}

export default function PerfumeAd({ ad }: Props) {
  return (
    <div className="bg-pink-100 p-4 rounded-xl shadow-md">
      <h3 className="font-bold text-lg">🔥 Sponsored</h3>

      <p className="mb-2">{ad.title}</p>

      <img src={ad.image} alt={ad.title} className="rounded-lg mb-2" />

      <a href={ad.link}>
        <button className="btn btn-secondary w-full">Shop Now</button>
      </a>
    </div>
  );
}
