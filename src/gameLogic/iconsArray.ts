
export interface IconDefinition {
    prefix: IconPrefix;
    iconName: IconName;
    icon: [number, number, string[], string, IconPathData];
  }

export interface IconObject {
    id: number
    number: number
    condition: string
    icon: IconDefinition
}

import { IconPathData } from "@fortawesome/fontawesome-svg-core";
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

export const iconsArrayFor6x6: IconObject[] =[
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

    {
        id: 17,
        number: 9,
        condition: 'hidden',
        icon: faDice
    },
    {
        id: 18,
        number: 9,
        condition: 'hidden',
        icon: faDice
    },
    {
        id: 19,
        number: 10,
        condition: 'hidden',
        icon: faWandMagicSparkles
    },
    {
        id: 20,
        number: 10,
        condition: 'hidden',
        icon: faWandMagicSparkles
    },
    {
        id: 21,
        number: 11,
        condition: 'hidden',
        icon: faHatWizard
    },
    {
        id: 22,
        number: 11,
        condition: 'hidden',
        icon: faHatWizard
    },
    {
        id: 23,
        number: 12,
        condition: 'hidden',
        icon:  faHandFist
    },
    {
        id: 24,
        number: 12,
        condition: 'hidden',
        icon:  faHandFist
    },
    {
        id: 25,
        number: 13,
        condition: 'hidden',
        icon: faDungeon
    },
    {
        id: 26,
        number: 13,
        condition: 'hidden',
        icon: faDungeon
    },
    {
        id: 27,
        number: 14,
        condition: 'hidden',
        icon: faChessKing 
        
    },
    {
        id: 28,
        number: 14,
        condition: 'hidden',
        icon: faChessKing,
    },
    {
        id: 29,
        number: 15,
        condition: 'hidden',
        icon: faBookSkull
    },
    {
        id: 30,
        number: 15,
        condition: 'hidden',
        icon: faBookSkull
    },
    {
        id: 31,
        number: 16,
        condition: 'hidden',
        icon: faChessBoard
    },
    {
        id: 32,
        number: 16,
        condition: 'hidden',
        icon: faChessBoard
    },
    {
        id: 33,
        number: 18,
        condition: 'hidden',
        icon: faRing
    },
    {
        id: 34,
        number: 18,
        condition: 'hidden',
        icon: faRing
    },
    {
        id: 35,
        number: 19,
        condition: 'hidden',
        icon: faVrCardboard
    },
    {
        id: 36,
        number: 19,
        condition: 'hidden',
        icon: faVrCardboard
    },

]