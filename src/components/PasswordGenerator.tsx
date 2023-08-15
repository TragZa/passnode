import { useState } from "react";
import ClipboardIcon from "./icons/ClipboardIcon";

type PasswordOptions = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = () => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: '!@#$%^&*()_+~`|}{[]\\:;"<>,.?/',
    };

    let password = "";
    let characters = "";

    if (options.uppercase) characters += charset.uppercase;
    if (options.lowercase) characters += charset.lowercase;
    if (options.numbers) characters += charset.numbers;
    if (options.symbols) characters += charset.symbols;

    for (let i = 0; i < options.length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(password);
  };

  return (
    <div className="bg-gray2 absolute w-screen flex flex-col items-center">
      <div className="w-[200px] flex flex-col">
        <div className="flex justify-between">
          <div className="mt-5">Length</div>
          <input
            className="bg-gray mt-4 w-[30px] h-[30px]"
            type="number"
            value={options.length}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                length: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-2">Uppercase</div>
          <input
            className="mt-2"
            type="checkbox"
            checked={options.uppercase}
            onChange={(e) =>
              setOptions((prev) => ({ ...prev, uppercase: e.target.checked }))
            }
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-2">Lowercase</div>
          <input
            className="mt-2"
            type="checkbox"
            checked={options.lowercase}
            onChange={(e) =>
              setOptions((prev) => ({ ...prev, lowercase: e.target.checked }))
            }
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-2">Numbers</div>
          <input
            className="mt-2"
            type="checkbox"
            checked={options.numbers}
            onChange={(e) =>
              setOptions((prev) => ({ ...prev, numbers: e.target.checked }))
            }
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-2">Symbols</div>
          <input
            className="mt-2"
            type="checkbox"
            checked={options.symbols}
            onChange={(e) =>
              setOptions((prev) => ({ ...prev, symbols: e.target.checked }))
            }
          />
        </div>
      </div>
      <button
        className="w-[200px] h-[30px] bg-blue2 hover:bg-blue3 hover:text-black mt-5 mb-5 active:bg-blue4"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      {password && (
        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
          className="flex justify-center w-[200px] h-[30px] hover:bg-blue3 hover:text-black mb-5 active:bg-blue4"
        >
          <ClipboardIcon />
          {password}
        </button>
      )}
    </div>
  );
};

export default PasswordGenerator;
