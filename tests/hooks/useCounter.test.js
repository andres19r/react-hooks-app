import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("useCounter tests", () => {
  test("should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generate the counter with a custom initial value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(9);
  });

  test("should reset the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
