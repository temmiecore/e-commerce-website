import { render, screen, waitFor } from "@testing-library/react";
import MainGridItem from "../components/main grid/MainGridItem";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe('MainGridItem', () => {
    it('should call handleAddItemToCart on button click', async () => {
        const user = userEvent.setup();
        const handleAddItemToCartMock = vi.fn();

        render(<MainGridItem name="name" price={100} image="image" handleAddItemToCart={handleAddItemToCartMock}/>);

        await user.click(screen.getByRole("button"));

        expect(handleAddItemToCartMock).toHaveBeenCalledOnce();
        screen.debug();
    });
});