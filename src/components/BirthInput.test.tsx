import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BirthInput from './BirthInput';

describe('BirthInput Component', () => {
  it('renders correctly', () => {
    render(<BirthInput onCalculate={() => {}} />);
    
    expect(screen.getByText('사주 정보를 입력하세요')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('연도 (YYYY)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '운세 결과 보기' })).toBeInTheDocument();
  });

  it('calls onCalculate with correct values when form is submitted', () => {
    const onCalculateMock = vi.fn();
    render(<BirthInput onCalculate={onCalculateMock} />);
    
    const yearInput = screen.getByPlaceholderText('연도 (YYYY)');
    fireEvent.change(yearInput, { target: { value: '1990' } });
    
    const submitButton = screen.getByRole('button', { name: '운세 결과 보기' });
    fireEvent.click(submitButton);
    
    expect(onCalculateMock).toHaveBeenCalledWith(1990, 1, 1, 'unknown');
  });

  it('shows alert when year is empty', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BirthInput onCalculate={() => {}} />);
    
    const submitButton = screen.getByRole('button', { name: '운세 결과 보기' });
    fireEvent.click(submitButton);
    
    expect(alertMock).toHaveBeenCalledWith('태어난 연도를 올바르게 입력해 주세요.');
    alertMock.mockRestore();
  });

  it('updates the number of days when month is changed', () => {
    render(<BirthInput onCalculate={() => {}} />);
    
    const monthSelect = screen.getByDisplayValue('1월');
    fireEvent.change(monthSelect, { target: { value: '2' } });
    
    // February 2026 has 28 days
    // Let's check specifically for the day select options.
    const daySelect = screen.getAllByRole('combobox')[1]; // Second select is day
    const options = daySelect.querySelectorAll('option');
    expect(options.length).toBe(28);
  });
});
