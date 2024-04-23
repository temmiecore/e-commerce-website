import { render, screen } from "@testing-library/react"
import Checkout from "../components/Checkout";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe('Checkout', () => {
    const cartItems = [
        { id: 1, name: "Item1", price: "100", image: "", qty: 1 },
        { id: 2, name: "Item2", price: "200", image: "", qty: 1 },
        { id: 3, name: "Item3", price: "200", image: "", qty: 1 },
    ];

    it('should calculate correct price based on cartItems', () => {
        const handleCheckoutMock = vi.fn();

        render(<Checkout cartItems={cartItems} handleCheckout={handleCheckoutMock}/>)

        expect(screen.getByText("Subtotal: $500")).toBeInTheDocument();
        expect(screen.getByText("Fees: $10")).toBeInTheDocument();
        expect(screen.getByText("Tax: $25")).toBeInTheDocument();
        expect(screen.getByText("Total: $535")).toBeInTheDocument();

        screen.debug();
    });

    it('should call handleCheckout on button click', async () => {
        const handleCheckoutMock = vi.fn();
        const user = userEvent.setup();
        
        render(<Checkout cartItems={cartItems} handleCheckout={handleCheckoutMock}/>)

        await user.click(screen.getByText("Checkout now"));

        expect(handleCheckoutMock).toHaveBeenCalledOnce();
    });
});