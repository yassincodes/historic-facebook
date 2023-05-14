// see the link
// use that link to filer the combined array
// show things
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Post from "../components/Post";

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

function Hashtag() {
  const location = useLocation();
  const currentRoute = location.pathname.slice(1);
  console.log(currentRoute);

  const hashtagName = allPosts
    .map((array) => array[0])
    .filter((post) => post.hashtagLink === currentRoute)[0].hashtag;

  return (
    <div className="home">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "90vw",
          marginTop: "2vh",
          fontSize: "1.7em",
          color: "rgb(24, 119, 242)",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        {hashtagName}#
      </div>

      {allPosts
        .map((array) => array[0])
        .filter((post) => post.hashtagLink === currentRoute)
        .map((post) => (
          <Post
            text={post.text}
            hashtag={post.hashtag}
            hashtagLink={post.hashtagLink}
            name={post.name}
            username={post.username}
            pic={post.pic}
          />
        ))}

      <div style={{ height: "1vh" }}></div>
    </div>
  );
}

export default Hashtag;
