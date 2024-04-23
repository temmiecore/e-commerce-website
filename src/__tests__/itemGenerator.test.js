import { expect, it } from "vitest";
import { getItemName, getItemPrice, getItemImage, getItem } from "../assets/item generator/itemGenerator"

describe("getItem functions", () => {
    it("should return string for Name/Image and number for Price", async () => {
        const itemName = await getItemName();
        expect(typeof itemName).toBe("string");

        const itemPrice = await getItemPrice();
        expect(typeof itemPrice).toBe("number");
        
        const itemImage = await getItemImage();
        expect(typeof itemImage).toBe("string");
    });
});

describe("getItem", () => {
    it("should handle async correctly", async () => {
        const data = await getItem();
        expect(data).toBeDefined();
    });
    it("should return array of three items", async () => {
        const data = await getItem();
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBe(3);
    });
});