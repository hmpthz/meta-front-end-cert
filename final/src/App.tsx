import { useState, type MouseEventHandler, type ReactNode } from "react"


export function App() {
  const handleClick = (name: string, stop=false) => ((e) => {
    console.log(name, e.target, e.currentTarget);
    if (stop)
      e.stopPropagation();
  }) as MouseEventHandler;

  return (
    <div className="w-80 h-60 bg-slate-300 p-8" onClick={handleClick('#1 bubble')} onClickCapture={handleClick('#1 capture')}>
      <div className="my-4 w-60 h-40 bg-yellow-200" onClick={handleClick('#2 bubble', true)} onClickCapture={handleClick('#2 capture')}>
      </div>
    </div>
  )
}