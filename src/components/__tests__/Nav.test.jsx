import { render, screen } from '@testing-library/react'
import Nav from "../Nav";
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { beforeEach, expect } from 'vitest';

beforeEach(() => {
    render(<MemoryRouter><Nav/></MemoryRouter>);
    screen.debug();
});

// test routing here or higher?
describe('Nav', () => {
    it('should render images at width lower than 428px', () => {
        act(() => {
            window.innerWidth = 427;
            window.dispatchEvent(new Event("resize"));
        });

        const imgElements = screen.queryAllByRole("img");
        expect(imgElements.length > 0).toBeTruthy();

        const headingElements = screen.queryAllByRole("heading");
        expect(headingElements).toHaveLength(0);

    });
    it('should render headings at width higher than 428', () => {
        act(() => {
            window.innerWidth = 429;
            window.dispatchEvent(new Event("resize"));
        });

        const imgElements = screen.queryAllByRole("img");
        expect(imgElements).toHaveLength(0);

        const headingElements = screen.queryAllByRole("heading");
        expect(headingElements.length > 0).toBeTruthy();
    });
})