import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ZodiacGrid from './ZodiacGrid';

describe('ZodiacGrid Component', () => {
  it('renders all 12 zodiac items', () => {
    render(<ZodiacGrid onSelect={() => {}} selectedId={null} />);
    
    // There are 12 zodiac signs
    const items = screen.getAllByRole('button');
    expect(items.length).toBe(12);
  });

  it('calls onSelect when an item is clicked', () => {
    const onSelectMock = vi.fn();
    render(<ZodiacGrid onSelect={onSelectMock} selectedId={null} />);
    
    const ratItem = screen.getByText('쥐띠');
    fireEvent.click(ratItem.closest('button')!);
    
    expect(onSelectMock).toHaveBeenCalledWith('rat');
  });

  it('highlights the selected zodiac', () => {
    render(<ZodiacGrid onSelect={() => {}} selectedId="ox" />);
    
    const oxButton = screen.getByText('소띠').closest('button');
    expect(oxButton).toHaveClass(/selected/);
  });
});
