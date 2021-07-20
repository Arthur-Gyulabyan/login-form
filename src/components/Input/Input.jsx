import React from 'react';

export default function Input({
  type,
  text,
  isValid,
  validText,
  noValidText,
  verifier,
  name
}) {
  return (
    <div>
      <label>
        {text}
        <input
          onInput={verifier}
          type={type}
          placeholder={text}
          name={name}
        />
      </label>
      <p>{isValid ? validText : noValidText}</p>
    </div>
  );
}
