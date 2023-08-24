// Market data --------------------------------------------------------------------------------------------------------------------
import tech1 from './market/tech/tech1.jpg';
import tech2 from './market/tech/tech2.jpg';
import tech3 from './market/tech/tech3.jpg';
import tech4 from './market/tech/tech4.jpg';

import fashion1 from './market/fashion/fashion1.png';
import fashion2 from './market/fashion/fashion2.png';
import fashion3 from './market/fashion/fashion3.jpg';
import fashion4 from './market/fashion/fashion4.jpg';

import art1 from './market/art/art1.png';
import art2 from './market/art/art2.png';
import art3 from './market/art/art3.png';
import art4 from './market/art/art4.png';

export const tabsData = [
    { value: "All", label: "All" },
    { value: "Tech", label: "Tech" },
    { value: "Art", label: "Art" },
    { value: "Fashion", label: "Fashion" },
];

export const featuredItems = [
    { name: "Featured 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "Featured 2", description: "Description", image: art1, cat: "Art", price: "0.1", seller: "Andrew" },
    { name: "Featured 3", description: "Description", image: fashion1, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Featured 4", description: "Description", image: tech2, cat: "Tech", price: "0.1", seller: "Andrew" }
];

export const listedItems = [
    { name: "Item 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 2", description: "Description", image: tech2, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 3", description: "Description", image: tech3, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 4", description: "Description", image: tech4, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 5", description: "Description", image: art1, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 6", description: "Description", image: art2, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 7", description: "Description", image: art3, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 8", description: "Description", image: art4, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 9", description: "Description", image: fashion1, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Item 10", description: "Description", image: fashion2, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Item 11", description: "Description", image: fashion3, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Item 12", description: "Description", image: fashion4, cat: "Fashion", price: "0.1", seller: "Andrew" },
];

export const assetsItems = [
    { name: "item 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 2", description: "Description", image: tech2, cat: "Entertainment", price: "0.1", seller: "Andrew" },
    { name: "item 3", description: "Description", image: tech3, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "item 4", description: "Description", image: tech4, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 5", description: "Description", image: fashion1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 6", description: "Description", image: fashion2, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 7", description: "Description", image: fashion3, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 8", description: "Description", image: fashion4, cat: "Tech", price: "0.1", seller: "Andrew" },
];
export const mockHistoryData = [
    { date: "2023-08-01", description: "Bought Apes", amount: "-$500" },
    { date: "2023-08-02", description: "Sold Birds", amount: "+$2,000" },
    { date: "2023-08-03", description: "Sold DracoNfts", amount: "+$5,000" },
    { date: "2023-08-04", description: "Bought ChampsNFTs", amount: "-$200" },
    { date: "2023-08-05", description: "Bought MomNFTs", amount: "-$150" },
    { date: "2023-08-15", description: "Bought VitusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValtusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValsaltusNFTs", amount: "-$1000"}
];