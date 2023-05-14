// facebook --------------- messegs - account
// home - hashtags - accounts

// home => filter the posts -> make the array in a random way -> map
// hashtags => map the list of hashtags -> when the user clicks on a one it will filter the array
// of posts and give a new array => map
// accounts => a big array containing only the names -> map

// make an array of characters containing
// name, pic, bio, messenger link, posts (id, date, type, grade, hashtag)
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import Home from "./routes/Home";
import Hashtags from "./routes/Hashtags";
import Videos from "./routes/Videos";
import Accounts from "./routes/Accounts";
import Menu from "./routes/Menu";
import Profile from "./components/Profile";
import Hashtag from "./components/Hashtag";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

function App() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [showTopContent, setShowTopContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
      setShowTopContent(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <div>
          {showParagraph && (
            <div>
              <div style={{ background: "#e0e0e0", height: "100vh" }}>
                <div
                  style={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 200, damping: 12 },
                  }}
                >
                  <img src={logo} style={{ width: "300px" }} alt="logo" />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ margin: "0 5px" }}>جاري تحميل الموقع</div>
                  <Spinner color='blue.500'/>
                </div>
              </div>
            </div>
          )}

          {showTopContent && (
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/hashtags" element={<Hashtags />} />
              <Route path="/Videos" element={<Videos />} />
              <Route path="/Accounts" element={<Accounts />} />
              <Route path="/Menu" element={<Menu />} />

              <Route path="/elissa" element={<Profile />} />
              <Route path="/hannibal" element={<Profile />} />
              <Route path="/ibn_khaldoun" element={<Profile />} />
              <Route path="/news5" element={<Profile />} />
              <Route path="/abdelaziz_thaalbi" element={<Profile />} />
              <Route path="/barbarossa" element={<Profile />} />
              <Route path="/bourguiba" element={<Profile />} />
              <Route path="/charlesV" element={<Profile />} />
              <Route path="/farhat_hached" element={<Profile />} />
              <Route path="/hayreddin_pasha" element={<Profile />} />
              <Route path="/jules_ferry" element={<Profile />} />
              <Route path="/khaznadar" element={<Profile />} />
              <Route path="/news6" element={<Profile />} />
              <Route path="/sinan_pasha" element={<Profile />} />

              <Route path="/hi" element={<Hashtag />} />
              <Route path="/hi2" element={<Hashtag />} />
            </Routes>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
