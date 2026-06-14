import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FortuneCookie from './FortuneCookie';

describe('FortuneCookie Component', () => {
  it('renders the initial state', () => {
    render(<FortuneCookie />);
    expect(screen.getByText('포춘 쿠키를 열어보세요')).toBeDefined();
    expect(screen.getByText('🥠')).toBeDefined();
  });

  it('opens the cookie when clicked', () => {
    render(<FortuneCookie />);
    const cookie = screen.getByText('🥠');
    fireEvent.click(cookie);
    
    // After clicking, the cookie should open
    // We should see the '다시 열어보기' button
    expect(screen.getByText('다시 열어보기')).toBeDefined();
    // The closed cookie emoji should be gone (or replaced)
    expect(screen.queryByText('🥠')).toBeNull();
  });
});
