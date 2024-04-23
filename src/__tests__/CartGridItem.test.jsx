import { render, screen } from "@testing-library/react";
import CartGridItem from "../components/cart grid/CartGridItem";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe('CartGridItem', () => {
    it('should render given item information correctly', () => {
        const handleAddItemToCartMock = vi.fn();
        const item = {
            name: "Some name",
            image: "image",
            price: 100,
            qty: 1,
        }

        render(<CartGridItem item={item} handleAddItemToCart={handleAddItemToCartMock}/>);
        
        expect(screen.getByText("Some name")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "image");
        expect(screen.getByText("$100")).toBeInTheDocument();
        expect(screen.getByText("Quantity: 1")).toBeInTheDocument();

        screen.debug();
    });

    it('should call handleQuantityChange on buttons click', async () => {
        const user = userEvent.setup();
        const handleQuantityChangeMock = vi.fn();
        const item = {
            name: "Item",
            image: "Item",
            price: 100,
            qty: 2,
        };

        render(<CartGridItem item={item} handleQuantityChange={handleQuantityChangeMock}/>);

        await user.click(screen.getByRole("button", {name: /Add/}));

        expect(handleQuantityChangeMock).toHaveBeenCalledWith(item, true);

        await user.click(screen.getByRole("button", {name: /Remove/}));

        expect(handleQuantityChangeMock).toHaveBeenCalledWith(item, false);
    });
});