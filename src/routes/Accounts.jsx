import Header from "../components/Header";
import Elissa from "../arrays/array5/Elissa";
import Hannibal from "../arrays/array5/Hannibal";
import IbnKhaldoun from "../arrays/array5/IbnKhaldoun";
import News5 from "../arrays/array5/News5";
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

import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const profiles = [
  IbnKhaldoun.slice(0, 1)[0],
  AbdelazizThaalbi.slice(0, 1)[0],
  Barbarossa.slice(0, 1)[0],
  Bourguiba.slice(0, 1)[0],
  CharlesV.slice(0, 1)[0],
  Elissa.slice(0, 1)[0],
  FarhatHached.slice(0, 1)[0],
  Hannibal.slice(0, 1)[0],
  HayreddinPasha.slice(0, 1)[0],
  JulesFerry.slice(0, 1)[0],
  Khaznadar.slice(0, 1)[0],
  News5.slice(0, 1)[0],
  News6.slice(0, 1)[0],
  SinanPasha.slice(0, 1)[0],
];

const messengerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-messenger"
    width="23"
    height="23"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
    <path d="M8 13l3 -2l2 2l3 -2" />
  </svg>
);

const characterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-user"
    width="23"
    height="23"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="white"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
);

console.log(profiles);

function Accounts() {
  return (
    <>
      <Header />
      <div
        className="accounts"
        style={{ paddingLeft: "10vw", paddingRight: "10vw" }}
      >
        {profiles.map((character) => {
          return (
            <div
              style={{ padding: "20px", width: "100%", borderRadius: "20px" }}
            >
              <div
                style={{
                  height: "30vh",
                  position: "relative",
                }}
              >
                <img
                  src={character.pic}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                />
              </div>
              <div
                style={{
                  background: "white",
                  textAlign: "right",
                  padding: "5px 10px 5px 5px",
                }}
              >
                {character.name}
              </div>

              {character.username === "news6" ||
              character.username === "news5" ? (
                <div
                  style={{ background: "white", padding: "30px 5px 30px 5px" }}
                >
                  <Link to={`/${character.username}`}>
                    <Button style={{ width: "100%" }} colorScheme="blue">
                      الملف الشخصي {characterIcon}
                    </Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <div style={{ background: "white", padding: "5px" }}>
                    <a
                      href={`https://historic-messenger.vercel.app/${character.username}`}
                    >
                      <Button style={{ width: "100%" }}>
                        محادثة {messengerIcon}
                      </Button>
                    </a>
                  </div>
                  <div style={{ background: "white", padding: "5px" }}>
                    <Link to={`/${character.username}`}>
                      <Button style={{ width: "100%" }} colorScheme="blue">
                        الملف الشخصي {characterIcon}
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accounts;
