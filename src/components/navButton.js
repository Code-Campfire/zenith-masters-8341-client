import { useState } from 'react';

export default function ButtonSettings() {
  const [active, setActive] = useState('Home');
  const buttons = ['Account'];

  return (
    <div className="flex gap-2">
      {buttons.map((label) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className={`px-4 py-2 rounded ${
            active === label
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          <img src="/account-icon.png" style={{ 
            width: '30px',
            height: '30px',
          }} alt="Acct Icon" />
          {label}
        </button>
      ))}
    </div>
  );
}
