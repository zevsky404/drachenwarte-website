import { Field, Poseidon } from 'o1js';

self.onmessage = async (e: MessageEvent) => {
  const { inputVal } = e.data;
  
  // Compute heavy ZK execution or proof generation
  const hash = Poseidon.hash([Field(inputVal)]).toString();
  
  self.postMessage({ hash });
};