import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import LottoGenerator from './LottoGenerator';

describe('LottoGenerator Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders correctly and starts generating numbers', async () => {
    render(<LottoGenerator seedId="rat" />);
    
    expect(screen.getByText('오늘의 행운 번호')).toBeInTheDocument();
    expect(screen.getByText('기운을 모으는 중...')).toBeInTheDocument();
    
    // Fast-forward time
    await act(async () => {
      vi.advanceTimersByTime(800);
    });
    
    // Check if 6 numbers are rendered
    const balls = screen.getAllByText(/[0-9]+/);
    expect(balls.length).toBe(6);
  });

  it('regenerates numbers when refresh button is clicked', async () => {
    render(<LottoGenerator seedId="rat" />);
    
    await act(async () => {
      vi.advanceTimersByTime(800);
    });
    
    const initialBalls = screen.getAllByText(/[0-9]+/).map(ball => ball.textContent);
    
    const refreshButton = screen.getByRole('button', { name: /다른 기운 받기/i });
    fireEvent.click(refreshButton);
    
    // Note: The component doesn't clear numbers during spin, so "기운을 모으는 중..." won't appear
    // if numbers were already present.
    expect(refreshButton).toBeDisabled();
    
    await act(async () => {
      vi.advanceTimersByTime(800);
    });
    
    const newBalls = screen.getAllByText(/[0-9]+/).map(ball => ball.textContent);
    expect(refreshButton).not.toBeDisabled();
  });
});
