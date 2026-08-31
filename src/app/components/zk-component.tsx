'use client';

import { useState, useEffect } from 'react';

export default function ZkComponent() {
  const [o1js, setO1js] = useState<typeof import('o1js') | null>(null);

  useEffect(() => {
    (async () => {
    // Lazy load o1js only on the browser client
    const o1 = await import('o1js');
    setO1js(o1);
    })();
  }, []);

  const handleHash = async () => {
    if (!o1js) return;
    const { Field, Poseidon } = o1js;
    
    const hash = Poseidon.hash([Field(42)]);
    console.log('Poseidon Hash:', hash.toString());
    const worker = new Worker(new URL('../../workers/zk.worker.ts', import.meta.url));
    worker.onmessage = (e) => console.log('Worker Result:', e.data.hash);
    worker.postMessage({ inputVal: 42 });

    return () => worker.terminate();
  };

  return (
    <button onClick={handleHash} disabled={!o1js}>
      {o1js ? 'Compute ZK Hash' : 'Loading o1js WASM...'}
    </button>
  );
}