import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe('App', () => {
    describe('routing', () => {
        it('should render landing page on / route', () => {
            render(
                <App />
            );

            expect(screen.getByText("Discover Endless Adventures. Gear Up with Us Today.")).toBeInTheDocument();

            screen.debug();
        });

        it('should render shop page on /home route', async () => {
            const user = userEvent.setup();
            
            render(
                <App />
            );

            await user.click(screen.getByRole("link", {name:"Home"}))

            expect(screen.getByRole("heading", {name:"15% off everything monochrome."})).toBeInTheDocument();
        });

        it('should render cart page on /cart route', async () => {
            const user = userEvent.setup();
            
            render(
                <App />
            );

            await user.click(screen.getByRole("link", {name:"Cart"}))

            expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
        });
    });
})