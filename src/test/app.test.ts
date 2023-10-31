import { add } from '../app'; // Import the add function

describe('add function', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should handle negative numbers', () => {
    const result = add(-2, -3);
    expect(result).toBe(-5);
  });

  it('should handle zero', () => {
    const result = add(0, 3);
    expect(result).toBe(3);
  });
});
