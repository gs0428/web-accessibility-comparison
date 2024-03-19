import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "name") {
      setName(e.target.value);
      return;
    }
    setEmail(e.target.value);
  };

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  const handleStopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      <div>
        <button onClick={handleOpenModal}>Edit Profile</button>
      </div>
      {isOpen && (
        <div onClick={handleCloseModal} className="background">
          <div onClick={handleStopPropagation} className="container">
            <h1 className="title">Edit Profile</h1>
            <p className="subtitle">Make changes to your profile</p>
            <div className="input-wrap">
              <label>
                <div className="input-title">Name</div>
                <div>
                  <input id="name" value={name} onChange={handleChangeInput} placeholder="Enter your full name" />
                </div>
              </label>
              <label>
                <div className="input-title">Email</div>
                <div>
                  <input id="email" value={email} onChange={handleChangeInput} placeholder="Enter your email" />
                </div>
              </label>
            </div>
            <div className="button-wrap">
              <button className="cancel-button" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="save-button" onClick={handleCloseModal}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
