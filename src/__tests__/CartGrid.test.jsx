import { render, screen } from "@testing-library/react";
import CartGrid from "../components/cart grid/CartGrid";
import { expect, vi } from "vitest";

describe('CartGrid', () => {
    it('should render empty grid when cartItems is empty', async () => {
        const cartItems = [];
        const handleQuantityChangeMock = vi.fn();

        render(<CartGrid cartItems={cartItems} handleQuantityChange={handleQuantityChangeMock} />);

        expect(screen.queryAllByRole("button", {name: /Add/})).toHaveLength(0);
    });

    it('should render grid of cartItems', async () => {
        const cartItems = [
            { id: 1, name: "Item1", price: "100", image: "", qty: 1 },
            { id: 2, name: "Item2", price: "200", image: "", qty: 1 },
            { id: 3, name: "Item3", price: "200", image: "", qty: 1 },
        ];
        const handleQuantityChangeMock = vi.fn();

        render(<CartGrid cartItems={cartItems} handleQuantityChange={handleQuantityChangeMock} />);

        expect(screen.queryAllByRole("button", {name: /Add/})).toHaveLength(3);

        screen.debug();
    });
});