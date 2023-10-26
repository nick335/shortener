import { useState } from 'react';


export default function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyText = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      // Reset the 'copied' state after 1.5 seconds
      setTimeout(() => setCopied(false), 1500); 
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return {
    copied,
    copyText,
  };
}
