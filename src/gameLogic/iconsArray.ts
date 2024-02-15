
export interface IconDefinition {
    prefix: IconPrefix;
    iconName: IconName;
    icon: [number, number, number, number, number, string];
  }

export interface IconObject {
    id: number
    number: number
    condition: string
    icon: IconDefinition
}

import { 
     faHeart,
     faShield, 
     faGhost, 
     faGamepad,
     faDiamond,
     faDragon,
     faScroll,
     faDice,
     faHeadset,
     faWandMagicSparkles,
     faHatWizard,
     faHandFist,
     faDungeon,
     faChessKing,
     faBookSkull,
     faChessBoard,
     faRing,
     faVrCardboard,
     faChessQueen,
     IconName,
     IconPrefix
    } from "@fortawesome/free-solid-svg-icons"

export const iconsArrayFor4x4: IconObject[] = [
    {
        id: 1,
        number: 1,
        condition: 'hidden',
        icon: faHeart
    },
    {
        id: 2,
        number: 1,
        condition: 'hidden',
        icon: faHeart
    },
    {
        id: 3,
        number: 2,
        condition: 'hidden',
        icon: faShield
    },
    {
        id: 4,
        number: 2,
        condition: 'hidden',
        icon: faShield
    },
    {
        id: 5,
        number: 3,
        condition: 'hidden',
        icon: faGhost
    },
    {
        id: 6,
        number: 3,
        condition: 'hidden',
        icon: faGhost
    },
    {
        id: 7,
        number: 4,
        condition: 'hidden',
        icon: faGamepad
    },
    {
        id: 8,
        number: 4,
        condition: 'hidden',
        icon: faGamepad
    },
    {
        id: 9,
        number: 5,
        condition: 'hidden',
        icon: faDiamond
    },
    {
        id: 10,
        number: 5,
        condition: 'hidden',
        icon: faDiamond
    },
    {
        id: 11,
        number: 6,
        condition: 'hidden',
        icon: faDragon
    },
    {
        id: 12,
        number: 6,
        condition: 'hidden',
        icon: faDragon
    },
    {
        id: 13,
        number: 7,
        condition: 'hidden',
        icon: faScroll,
    },
    {
        id: 14,
        number: 7,
        condition: 'hidden',
        icon: faScroll
    },
    {
        id: 15,
        number: 8,
        condition: 'hidden',
        icon: faHeadset
    },
    {
        id: 16,
        number: 8,
        condition: 'hidden',
        icon: faHeadset
    },
]