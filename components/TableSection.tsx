import { gameData } from "../gameData";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import filterWeapon from "../src/filterWeapon";
import { Weapon } from "../src/interfaces";
import { useRecoilValue } from "recoil";
import { rarityFilterState } from "../app/Atom";
import ShowBtn from "./ShowBtn";
import WeaponTable from "./AssetTable";

const weapons = gameData.weapons;

export default function TableSection() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("searchQuery");
    const [showAll, setShowAll] = useState(false);
    const [searchAssets, setSearchAssets] = useState<Weapon[]>([]);
    const rarityFilter = useRecoilValue(rarityFilterState);

    const toggleShowAll = () => {
        setShowAll((curr) => !curr);
    };

    useEffect(() => {
        if (!searchQuery) {
            if (rarityFilter.size === 0) {
                setSearchAssets(weapons);
                return;
            }

            setSearchAssets(
                weapons.filter((item) =>
                    Array.from(rarityFilter).some(
                        (rarity) => item.rarity === rarity
                    )
                )
            );

            return;
        }

        const { nameMatchedItems, matchedItems } = filterWeapon(searchQuery);

        const combinedWeapons = [...nameMatchedItems, ...matchedItems];
        // 중복을 제거하기 위해 Set 객체로 변환 후 다시 배열로 변환
        const allMatchedItems = Array.from(new Set(combinedWeapons));

        if (rarityFilter.size === 0) {
            setSearchAssets(allMatchedItems);
            return;
        }

        const filteredItems = allMatchedItems.filter((item) =>
            Array.from(rarityFilter).some((filter) => item.rarity === filter)
        );

        setSearchAssets(filteredItems);
    }, [searchQuery, rarityFilter]);

    return (
        <div className="w-full max-w-screen-sm flex flex-col gap-5 text-sm sm:text-base">
            <ShowBtn showAll={showAll} toggleShowAll={toggleShowAll} />
            {searchAssets.length === 0 ? (
                <div className="text-center">없어요</div>
            ) : (
                <WeaponTable showAll={showAll} searchAssets={searchAssets} />
            )}
        </div>
    );
}
