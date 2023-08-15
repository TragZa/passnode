import { useState } from "react";
import { useRouter } from "next/router";
import AuthModal from "../components/AuthModal";
import Sidebar from "../components/Sidebar";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secretKey, setSecretKey] = useState("");

  const handleSecretKeyChange = (newSecretKey: string) => {
    setSecretKey(newSecretKey);
  };

  const handleIsSubmittedChange = (newIsSubmitted: boolean) => {
    setIsSubmitted(newIsSubmitted);
  };

  const router = useRouter();

  const route = () => {
    router.push("/");
  };

  const route2 = () => {
    router.push("/how-to-setup");
  };

  return (
    <div className="bg-gray w-screen h-screen">
      {isSubmitted ? null : (
        <div>
          <div className="bg-gray2 fixed z-10 w-screen flex justify-between 450:justify-center items-center">
            <button
              onClick={route}
              className="mt-5 w-full 450:w-[150px] h-[30px] hover:bg-blue3 hover:text-black active:bg-blue4"
            >
              Home
            </button>
            <button
              onClick={route2}
              className="mt-5 w-full 450:w-[150px] h-[30px] hover:bg-blue3 hover:text-black active:bg-blue4"
            >
              How To Setup
            </button>
            <button className="mt-5 w-full 450:w-[150px] h-[30px] bg-blue3 text-black active:bg-blue4">
              App
            </button>
          </div>
          <div className="bg-gray2 fixed top-[50px] z-10 w-screen flex flex-col justify-center items-center">
            <div className="bg-blue3 w-screen 450:w-[450px] h-[2px] mb-5"></div>
          </div>
        </div>
      )}
      <Sidebar secretKey={secretKey} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <AuthModal
          onIsSubmittedChange={handleIsSubmittedChange}
          onSecretKeyChange={handleSecretKeyChange}
        />
      </div>
    </div>
  );
};

export default App;
