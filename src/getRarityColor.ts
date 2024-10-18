import { Rarity } from "../app/Atom";

export default function getRarityColor(rarity: Rarity | string): string {
    switch (rarity) {
        case Rarity.Legendary:
            return "#FF5900";
        case Rarity.VeryRare:
            return "#D1007B";
        case Rarity.Rare:
            return "#01BFFF";
        case Rarity.Uncommon:
            return "#01BD39";
        default:
            return "#D2D2D2";
    }
}
