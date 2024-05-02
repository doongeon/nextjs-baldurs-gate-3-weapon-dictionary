import { Rarity } from "../app/Atom";
import RarityFilterBtn from "./RarityFilterBtn";

export default function Filter() {
  return (
    <div className="sm:w-full sm:max-w-screen-sm w-90 flex flex-col items-center justify-center gap-5">
      <div className="text-center font-semibold text-md">필터</div>
      <div className="text-white grid grid-cols-3 sm:flex gap-5 font-semibold">
        <RarityFilterBtn text="전설" rarity={Rarity.Legendary} />
        <RarityFilterBtn text="매우 희귀" rarity={Rarity.VeryRare} />
        <RarityFilterBtn text="희귀" rarity={Rarity.Rare} />
        <RarityFilterBtn text="고급" rarity={Rarity.Uncommon} />
        <RarityFilterBtn text="평범" rarity={Rarity.Common} />
      </div>
    </div>
  );
}
