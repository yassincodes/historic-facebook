import Header from "../components/Header";
import ClassPicker from "../components/ClassPicker";
import Post from "../components/Post";
import { motion, AnimatePresence } from "framer-motion";

import Elissa from "../arrays/array5/Elissa";
import Hannibal from "../arrays/array5/Hannibal";
import IbnKhaldoun from "../arrays/array5/IbnKhaldoun";
import News5 from "../arrays/array5/News5";

const ElissaPosts = Elissa.slice(1);
const HannibalPosts = Hannibal.slice(1);
const IbnKhaldounPosts = IbnKhaldoun.slice(1);
const News5Posts = News5.slice(1);

import AbdelazizThaalbi from "../arrays/array6/AbdelazizThaalbi";
import Barbarossa from "../arrays/array6/Barbarossa";
import Bourguiba from "../arrays/array6/Bourguiba";
import CharlesV from "../arrays/array6/CharlesV";
import FarhatHached from "../arrays/array6/FarhatHached";
import HayreddinPasha from "../arrays/array6/HayreddinPasha";
import JulesFerry from "../arrays/array6/JulesFerry";
import Khaznadar from "../arrays/array6/Khaznadar";
import News6 from "../arrays/array6/News6";
import SinanPasha from "../arrays/array6/SinanPasha";

const AbdelazizThaalbiPosts = AbdelazizThaalbi.slice(1);
const BarbarossaPosts = Barbarossa.slice(1);
const BourguibaPosts = Bourguiba.slice(1);
const CharlesVPosts = CharlesV.slice(1);
const FarhatHachedPosts = FarhatHached.slice(1);
const HayreddinPashaPosts = HayreddinPasha.slice(1);
const JulesFerryPosts = JulesFerry.slice(1);
const KhaznadarPosts = Khaznadar.slice(1);
const News6Posts = News6.slice(1);
const SinanPashaPosts = SinanPasha.slice(1);

const allPosts = [
  ElissaPosts,
  HannibalPosts,
  IbnKhaldounPosts,
  News5Posts,
  AbdelazizThaalbiPosts,
  BarbarossaPosts,
  BourguibaPosts,
  CharlesVPosts,
  FarhatHachedPosts,
  HayreddinPashaPosts,
  JulesFerryPosts,
  KhaznadarPosts,
  News6Posts,
  SinanPashaPosts,
];

console.log(allPosts.map((array) => array[0]));

function Home() {
  function getKey(index) {
    return `post-${index + 1}`;
  }

  const postVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  };

  return (
    <div className="home">
      <Header />
      <AnimatePresence>
        {allPosts
          .flat()
          .map((obj) => obj)
          .sort(() => Math.random() - 0.5)
          .map((post, index) => (
            <motion.div
              key={getKey(index)}
              variants={postVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <Post
                text={post.text}
                image={post.image}
                hashtag={post.hashtag}
                hashtagLink={post.hashtagLink}
                name={post.name}
                username={post.username}
                pic={post.pic}
              />
            </motion.div>
          ))}
      </AnimatePresence>
      <div style={{ height: "1vh" }}></div>
    </div>
  );
}

export default Home;
