"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
    increment,
    decrement,
} from "@/lib/redux/features/counter/counterSlice";

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
