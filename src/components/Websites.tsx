import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { Web3Storage } from "web3.storage";

type Credential = {
  website: string;
  username: string;
  password: string;
};

const Websites = ({ secretKey }: { secretKey: string }) => {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [newCredential, setNewCredential] = useState<Credential>({
    website: "",
    username: "",
    password: "",
  });
  const [selectedCredential, setSelectedCredential] =
    useState<Credential | null>(null);
  const [showNote, setShowNote] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [retrieved, setRetrieved] = useState(false);

  useEffect(() => {
    if (!retrieved) {
      handleStoreCredentials();
    } else {
      setRetrieved(false);
    }
  }, [credentials]);

  const handleAddCredential = () => {
    if (
      credentials.some(
        (credential) => credential.website === newCredential.website
      )
    ) {
      alert("Website already exists");
    } else {
      const updatedCredentials = [...credentials, newCredential];
      setCredentials(updatedCredentials);
      setNewCredential({ website: "", username: "", password: "" });
    }
  };

  const handleDeleteCredential = (credentialToDelete: Credential) => {
    setCredentials((prevCredentials) =>
      prevCredentials.filter(
        (credential) => credential.website !== credentialToDelete.website
      )
    );
  };

  const handleShowHideNote = (credential: Credential) => {
    if (selectedCredential === credential) {
      setShowNote(!showNote);
    } else {
      setSelectedCredential(credential);
      setShowNote(true);
    }
  };

  const handleStoreCredentials = async () => {
    if (credentials.length === 0) return;
    const token = Cookies.get("apitoken");
    if (!token) return;
    const client = new Web3Storage({ token });
    const encryptedCredentials = credentials.map((credential) => {
      const ivWebsite = CryptoJS.lib.WordArray.random(128 / 8);
      const ivUsername = CryptoJS.lib.WordArray.random(128 / 8);
      const ivPassword = CryptoJS.lib.WordArray.random(128 / 8);
      return {
        ...credential,
        ivWebsite: ivWebsite.toString(),
        ivUsername: ivUsername.toString(),
        ivPassword: ivPassword.toString(),
        website: CryptoJS.AES.encrypt(
          credential.website,
          secretKey.toString(),
          { iv: ivWebsite }
        ).toString(),
        username: CryptoJS.AES.encrypt(
          credential.username,
          secretKey.toString(),
          { iv: ivUsername }
        ).toString(),
        password: CryptoJS.AES.encrypt(
          credential.password,
          secretKey.toString(),
          { iv: ivPassword }
        ).toString(),
      };
    });
    const data = JSON.stringify(encryptedCredentials);
    const file = new File([data], "Websites", {
      type: "application/json",
    });
    try {
      await client.put([file], { name: "Websites" });
    } catch (error) {
      console.error(error);
      alert("An error occurred while storing data.");
    }
  };

  const handleRetrieveCredentials = async () => {
    setIsLoading(true);
    const token = Cookies.get("apitoken");
    if (!token) return;
    const client = new Web3Storage({ token });
    try {
      let cid;
      for await (const upload of client.list()) {
        if (upload.name === "Websites") {
          cid = upload.cid;
          break;
        }
      }
      if (!cid) return;
      const data = await client.get(cid);
      if (!data) return;
      const file = await data.files();
      if (!file || !file[0]) return;
      const text = await file[0].text();
      let retrievedCredentials = JSON.parse(text);
      retrievedCredentials = retrievedCredentials.map((credential: any) => {
        const ivWebsite = CryptoJS.lib.WordArray.random(128 / 8);
        const ivUsername = CryptoJS.lib.WordArray.random(128 / 8);
        const ivPassword = CryptoJS.lib.WordArray.random(128 / 8);
        return {
          ...credential,
          website: CryptoJS.AES.decrypt(
            credential.website,
            secretKey.toString(),
            { ivWebsite: ivWebsite }
          ).toString(CryptoJS.enc.Utf8),
          username: CryptoJS.AES.decrypt(
            credential.username,
            secretKey.toString(),
            { ivUsername: ivUsername }
          ).toString(CryptoJS.enc.Utf8),
          password: CryptoJS.AES.decrypt(
            credential.password,
            secretKey.toString(),
            { ivPassword: ivPassword }
          ).toString(CryptoJS.enc.Utf8),
        };
      });
      setCredentials(retrievedCredentials);
    } catch (error) {
      console.error(error);
      alert("An error occurred while retrieving data.");
    }
    setRetrieved(true);
    setIsLoading(false);
  };

  return (
    <div className="absolute">
      {showForm && (
        <div className="bg-gray2 w-screen flex flex-col items-center">
          <label className="mt-5 flex flex-col">
            Website
            <input
              className="bg-gray mt-2 w-[300px]"
              value={newCredential.website}
              onChange={(e) =>
                setNewCredential({
                  ...newCredential,
                  website: e.target.value,
                })
              }
            />
          </label>
          <label className="flex flex-col mt-2">
            Username
            <input
              className="bg-gray mt-2 w-[300px]"
              value={newCredential.username}
              onChange={(e) =>
                setNewCredential({
                  ...newCredential,
                  username: e.target.value,
                })
              }
            />
          </label>
          <label className="flex flex-col mt-2">
            Password
            <input
              className="bg-gray mt-2 w-[300px]"
              value={newCredential.password}
              onChange={(e) =>
                setNewCredential({
                  ...newCredential,
                  password: e.target.value,
                })
              }
            />
          </label>
          <button
            className="mt-5 w-[100px] h-[30px] bg-blue2 hover:bg-blue3 hover:text-black active:bg-blue4"
            onClick={handleAddCredential}
          >
            Add
          </button>
          <button
            className="mt-5 w-[100px] h-[30px] bg-green hover:bg-green2 hover:text-black active:bg-green3"
            onClick={handleRetrieveCredentials}
          >
            Retrieve
          </button>
        </div>
      )}
      <div className="bg-gray2 w-screen flex flex-col items-center">
        <button
          className="mt-5 mb-5 w-[100px] h-[30px] bg-blue2 hover:bg-blue3 hover:text-black active:bg-blue4"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Hide" : "Show"}
        </button>
      </div>
      <div className="bg-gray w-screen flex flex-col items-center">
        {credentials.map((credential) => (
          <div
            className="bg-gray2 mt-5 w-[300px] flex flex-col items-center break-all"
            key={credential.website}
          >
            <div className="mt-5">Website</div>
            <div className="mt-2">{credential.website}</div>
            <button
              className="w-[100px] h-[30px] bg-blue2 hover:bg-blue3 hover:text-black mt-5 active:bg-blue4"
              onClick={() => handleShowHideNote(credential)}
            >
              {selectedCredential === credential && showNote ? "Hide" : "Show"}
            </button>
            <button
              className="w-[100px] h-[30px] bg-red hover:bg-red2 hover:text-black mt-5 mb-5 active:bg-red3"
              onClick={() => handleDeleteCredential(credential)}
            >
              Delete
            </button>
            <div>
              {selectedCredential === credential && showNote && (
                <div className="flex flex-col items-center mb-5">
                  <div>Username</div>
                  <div className="mt-2">{credential.username}</div>
                  <div className="mt-2">Password</div>
                  <div className="mt-2">{credential.password}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray w-screen flex flex-col items-center">
        {isLoading && (
          <div className="bg-gray2 mt-5 w-[300px] h-[100px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="animate-spin w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Retrieving...
          </div>
        )}
      </div>
    </div>
  );
};

export default Websites;
