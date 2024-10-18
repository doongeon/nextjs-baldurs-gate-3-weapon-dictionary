import { useRecoilState } from "recoil";
import { Rarity, rarityFilterState } from "../app/Atom";
import getRarityColor from "../src/getRarityColor";
import { useEffect, useState } from "react";

interface RarityFilterBtnProps {
    text: string;
    rarity: Rarity;
}

export default function RarityFilterBtn({
    text,
    rarity,
}: RarityFilterBtnProps) {
    const [rarityFilter, setRarityFilter] = useRecoilState(rarityFilterState);
    const [active, setActive] = useState(false);

    const toggleSet = (filter: Rarity) => {
        setRarityFilter((set) => {
            const newSet = new Set(set);

            if (!newSet.has(filter)) {
                newSet.add(filter);
                return newSet;
            }

            newSet.delete(filter);
            return newSet;
        });
    };

    const handleClick = (filter: Rarity) => {
        toggleSet(filter);
    };

    useEffect(() => {
        if (rarityFilter.has(rarity)) {
            setActive(true);
            return;
        }

        setActive(false);
    }, [rarityFilter]);

    return (
        <button
            className={`
            cursor-pointer 
            text-xs 
            px-1 py-1 
            sm:px-2 
            sm:text-base 
            select-none 
            font-normal 
            border 
            transition 
            duration-400 
            relative
        `}
            style={{
                color: active ? "rgba(255,255,255, 1)" : getRarityColor(rarity),
                borderColor: getRarityColor(rarity),
                textShadow: `0px 0px 5px ${getRarityColor(rarity)}`,
                boxShadow: active
                    ? `
                0px 0px 25px ${getRarityColor(rarity)},
                inset 0px 0px 15px ${getRarityColor(rarity)}
            `
                    : `
                0px 0px 15px ${getRarityColor(rarity)},
                inset 0px 0px 5px ${getRarityColor(rarity)}
            `,
                position: "relative",
                userSelect: "none",
                transition: "linear 0.4s",
            }}
            onClick={() => handleClick(rarity)}
        >
            {text}
        </button>
    );
}
