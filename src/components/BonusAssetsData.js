// Assets start -->
import snake from './images/toxic_snake.jpg';
import toxic_plumeria from './images/plumeria.jpg';
import waterlily from './images/waterlily.jpg';
import snail from './images/poison_snail.jpg';
import plantivorous from './images/plantivorous.jpg';
import wasp from './images/flower_wasp.jpg';
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
    image: snake
},
{
    id: 1,
    name: "Toxic Plumeria",
    cost: 400,
    image: toxic_plumeria
},
{
    id: 2,
    name: "Poison Water Lily",
    cost: 1500,
    image: waterlily
},
{
    id: 3,
    name: "Poison Snail",
    cost: 3000,
    image: snail
},
{
    id: 4,
    name: "Plantivorous",
    cost: 5000,
    image: plantivorous
},
{
    id: 5,
    name: "Flower Wasp",
    cost: 7000,
    image: wasp
}]
    ;

export const BONUS_EQUIPMENTS = [
    {
        id: 0,
        name: "Ancient Toxic Helmet",
        part: "Head",
        cost: 2500
    },
    {
        id: 1,
        name: "Ancient Toxic Chest",
        part: "Chest",
        cost: 2500
    },
    {
        id: 2,
        name: "Ancient Toxic Gloves",
        part: "Arms",
        cost: 2000
    },
    {
        id: 3,
        name: "Ancient Toxic Boots",
        part: "Legs",
        cost: 2000
    },
    {
        id: 4,
        name: "Sting Shield",
        part: "Shield",
        cost: 1000
    },
    {
        id: 5,
        name: "Snake Sword",
        part: "Sword",
        cost: 600
    }
];