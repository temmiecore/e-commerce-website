import { render, screen } from "@testing-library/react";
import MainGridItem from "../components/main grid/MainGridItem";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe('MainGridItem', () => {
    it('should render given item information correctly', () => {
        const handleAddItemToCartMock = vi.fn();
        const item = {
            name: "Some name",
            image: "image",
            price: 100,
        }

        render(<MainGridItem item={item} handleAddItemToCart={handleAddItemToCartMock}/>);
        
        expect(screen.getByText("Some name")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "image");
        expect(screen.getByText("$100")).toBeInTheDocument();

        screen.debug();
    });

    it('should call handleAddItemToCart on button click', async () => {
        const user = userEvent.setup();
        const handleAddItemToCartMock = vi.fn();
        const item = {}

        render(<MainGridItem item={item} handleAddItemToCart={handleAddItemToCartMock}/>);

        await user.click(screen.getByRole("button"));

        expect(handleAddItemToCartMock).toHaveBeenCalledWith(item);
    });
});