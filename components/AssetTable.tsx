import { Weapon } from "../src/interfaces";
import AssetTableItem from "./AssetTableItem";

interface WeaponTableProps {
  showAll: boolean;
  searchAssets: Weapon[];
}

export default function WeaponTable({
  showAll,
  searchAssets,
}: WeaponTableProps) {
  return (
    <div className="w-full max-w-screen-sm flex flex-col">
      <div className="w-full flex justify-between *:w-1/2 sm:*:w-1/3 *:text-center border-b-2 border-b-neutral-600 pb-2">
        <div>이름</div>
        <div className="hidden sm:block">데미지</div>
        <div>최대 데미지</div>
      </div>
      {searchAssets
        .sort((w1, w2) => -w1.damageStat.maxDamage + w2.damageStat.maxDamage)
        .slice(0, showAll ? searchAssets.length : 5)
        .map((weapon) => (
          <AssetTableItem key={weapon.id} weapon={weapon} />
        ))}
    </div>
  );
}
