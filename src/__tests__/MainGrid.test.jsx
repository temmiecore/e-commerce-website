import { render, screen, waitFor } from "@testing-library/react";
import MainGrid from "../components/main grid/MainGrid";
import { expect, vi } from "vitest";

describe('MainGrid', () => {
    it('should render grid of items after loading', async () => {
        const handleAddItemToCartMock = vi.fn();

        render(<MainGrid handleAddItemToCart={handleAddItemToCartMock}/>);

        await waitFor(() => expect(screen.getAllByRole("button", {name:"+ Add to cart"}).length).toBeGreaterThan(0));
        
        screen.debug();
    });
});