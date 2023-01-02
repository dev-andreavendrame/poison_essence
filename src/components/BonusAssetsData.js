// Assets start -->
import snake from './images/toxic_snake.jpg';
import toxic_plumeria from './images/plumeria.jpg';
import waterlily from './images/waterlily.jpg';
import snail from './images/poison_snail.jpg';
import plantivorous from './images/plantivorous.jpg';
import wasp from './images/flower_wasp.jpg';
import frozenSnail from './images/frozen_poison_snail.jpg';
// <-- assets end

// Equipment start -->

import peHelmet from './images/pe_helmet.jpg';
import peArms from './images/pe_arms.jpg';
import peLegs from './images/pe_legs.jpg';
import peChest from './images/pe_chest.jpg';
import peStingShield from './images/pe_shield_sting.jpg';
import peSnakeSword from './images/pe_snake_sword.jpg';

// <-- equipment end

export const BONUS_ASSETS = [{
    id: 0,
    name: "Toxic Snake",
    cost: 1000,
    image: snake,
    internalId: 1,
    tokenId: 34 // test id
},
{
    id: 1,
    name: "Toxic Plumeria",
    cost: 400,
    image: toxic_plumeria,
    internalId: 2,
    tokenId: 34 // test id
},
{
    id: 2,
    name: "Poison Water Lily",
    cost: 1500,
    image: waterlily,
    internalId: 3,
    tokenId: 34 // test id
},
{
    id: 3,
    name: "Poison Snail",
    cost: 3000,
    image: snail,
    internalId: 4,
    tokenId: 34 // test id
},
{
    id: 4,
    name: "Plantivorous",
    cost: 5000,
    image: plantivorous,
    internalId: 5,
    tokenId: 34 // test id
},
{
    id: 5,
    name: "Flower Wasp",
    cost: 7000,
    image: wasp,
    internalId: 6,
    tokenId: 34 // test id
},
{
    id: 6,
    name: "Frozen Poison Snail",
    cost: 7000,
    image: frozenSnail,
    internalId: 7,
    tokenId: 34 // test id
}]
    ;

export const BONUS_EQUIPMENTS = [
    {
        id: 0,
        name: "Ancient Toxic Helmet",
        part: "Head",
        cost: 2500,
        image: peHelmet,
        internalId: 8,
        tokenId: 34 // test id
    },
    {
        id: 1,
        name: "Ancient Toxic Chest",
        part: "Chest",
        cost: 2500,
        image: peChest,
        internalId: 9,
        tokenId: 34 // test id
    },
    {
        id: 2,
        name: "Ancient Toxic Gloves",
        part: "Arms",
        cost: 2000,
        image: peArms,
        internalId: 10,
        tokenId: 34 // test id
    },
    {
        id: 3,
        name: "Ancient Toxic Boots",
        part: "Legs",
        cost: 2000,
        image: peLegs,
        internalId: 11,
        tokenId: 34 // test id
    },
    {
        id: 4,
        name: "Sting Shield",
        part: "Shield",
        cost: 1000,
        image: peStingShield,
        internalId: 12,
        tokenId: 34 // test id
    },
    {
        id: 5,
        name: "Snake Sword",
        part: "Sword",
        cost: 600,
        image: peSnakeSword,
        internalId: 13,
        tokenId: 34 // test id

    }
];