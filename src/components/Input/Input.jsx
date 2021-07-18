import React from 'react';

export default function Input({ type, text, verifier }) {
  return (
    <div>
      <label>
        {text}
        <input
          onInput={(e) => verifier(e.target.value)}
          type={type}
          placeholder={text}
        />
      </label>
      <p>{}</p>
    </div>
  );
}
