import { useState } from 'react';
import { atom, useAtom } from 'jotai';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const counterAtom = atom(0); // local jotai counter

export default function Welcome() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useAtom(counterAtom);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>

        <div className="flex items-center justify-center gap-2">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h2 className="text-xl font-semibold">Vite + React</h2>

        <div className="card flex flex-col items-center gap-4">
          <button onClick={() => setCount((v) => v + 1)}>count is {count}</button>
          <button onClick={() => setCounter((v) => v + 1)}>jotai count is {counter}</button>
          <p>
            Edit <code>src/components/Welcome.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs p-2">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

