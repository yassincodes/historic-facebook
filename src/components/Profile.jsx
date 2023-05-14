import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Post from "../components/Post";
import { Avatar, Button } from "@chakra-ui/react";

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

const profiles = {
  IbnKhaldoun: IbnKhaldoun.slice(0, 1),
  AbdelazizThaalbi: AbdelazizThaalbi.slice(0, 1),
  Barbarossa: Barbarossa.slice(0, 1),
  Bourguiba: Bourguiba.slice(0, 1),
  CharlesV: CharlesV.slice(0, 1),
  Elissa: Elissa.slice(0, 1),
  FarhatHached: FarhatHached.slice(0, 1),
  hannibal: Hannibal.slice(0, 1),
  HayreddinPasha: HayreddinPasha.slice(0, 1),
  JulesFerry: JulesFerry.slice(0, 1),
  Khaznadar: Khaznadar.slice(0, 1),
  News5: News5.slice(0, 1),
  News6: News6.slice(0, 1),
  SinanPasha: SinanPasha.slice(0, 1),
};

const posts = {
  IbnKhaldoun: IbnKhaldoun.slice(1),
  AbdelazizThaalbi: AbdelazizThaalbi.slice(1),
  Barbarossa: Barbarossa.slice(1),
  Bourguiba: Bourguiba.slice(1),
  CharlesV: CharlesV.slice(1),
  Elissa: Elissa.slice(1),
  FarhatHached: FarhatHached.slice(1),
  hannibal: Hannibal.slice(1),
  HayreddinPasha: HayreddinPasha.slice(1),
  JulesFerry: JulesFerry.slice(1),
  Khaznadar: Khaznadar.slice(1),
  News5: News5.slice(1),
  News6: News6.slice(1),
  SinanPasha: SinanPasha.slice(1),
};

function Profile() {
  // getting the right info
  const location = useLocation();
  const currentRoute = location.pathname;
  const profileId = currentRoute.substring(1);

  const profileInfo = profiles[profileId];
  const profilePosts = posts[profileId];

  // icons
  const websiteIcon = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="24px"
      class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
    >
      <g>
        <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
        <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
      </g>
    </svg>
  );

  const locationIcon = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="24px"
      class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
    >
      <g>
        <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
        <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
      </g>
    </svg>
  );

  const birthdayIcon = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="24px"
      class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
    >
      <g>
        <path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path>
        <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path>
      </g>
    </svg>
  );

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

  const moreInfoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-info-circle"
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 9h.01" />
      <path d="M11 12h1v4h1" />
    </svg>
  );

  return (
    <div style={{ background: "#e0e0e0" }}>
      <Header />
      {profileInfo
        ? profileInfo.slice(0, 1).map((info) => {
            return (
              <div style={{ background: "white" }}>
                <div>
                  <section
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={info.cover}
                      style={{
                        width: "80vw",
                        height: "30vh",
                        objectFit: "cover",
                        borderBottomRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                  </section>
                  <section
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row-reverse",
                      padding: "10px",
                      marginLeft: "10vw",
                      marginRight: "10vw",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "normal",
                        alignItems: "center",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <div>
                        <Avatar src={info.pic} status="available" size="lg" />
                      </div>
                      <div>
                        <div dir="rtl">{info.name}</div>
                        <div style={{ textAlign: "end" }}>@{info.username}</div>
                      </div>
                    </div>
                    <div>
                      {info.username === "News6" ||
                      info.username === "News5" ? (
                        ""
                      ) : (
                        <a
                          href={`https://historic-messenger.vercel.app/${info.username}`}
                        >
                          <Button>محادثة {messengerIcon}</Button>
                        </a>
                      )}
                      <a
                        style={{ marginLeft: "10px" }}
                        href={`https://historic-messenger.vercel.app/${info.username}`}
                      >
                        <Button colorScheme="blue" className="info-button">
                          معلومات حول {info.name} {moreInfoIcon}
                        </Button>
                        <style jsx>{`
                          @media (max-width: 700px) {
                            .info-button {
                              display: none;
                            }
                          }
                        `}</style>
                      </a>
                    </div>
                  </section>
                  <section
                    style={{
                      marginLeft: "20vw",
                      marginRight: "20vw",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ direction: "rtl", fontSize: "1.1em", paddingBottom: "10px" }}>
                      {info.bio}
                    </div>
                  </section>
                  {info.username === "News6" || info.username === "News5" ? (
                    ""
                  ) : (
                    <section
                      style={{
                        marginTop: "2vh",
                        marginLeft: "10vw",
                        marginRight: "10vw",
                        paddingBottom: "10px"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                          padding: "5px",
                        }}
                      >
                        <div style={{ marginLeft: "8px" }}>{websiteIcon}</div>
                        <div>
                          <a
                            href={info.website}
                            target="_blank"
                            style={{ color: "#0000EE" }}
                          >
                            {info.websiteName}
                          </a>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                          padding: "5px",
                        }}
                      >
                        <div style={{ marginLeft: "8px" }}>{locationIcon}</div>
                        <div>{info.location}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                          padding: "5px",
                        }}
                      >
                        <div style={{ marginLeft: "8px" }}>{birthdayIcon}</div>
                        <div style={{ direction: "rtl" }}>{info.birthday}</div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            );
          })
        : "loadin ..."}
      <div>
        {profilePosts &&
          profilePosts.map((post) => (
            <Post
              text={post.text}
              image={post.image}
              name={post.name}
              username={post.username}
              hashtag={post.hashtag}
              hashtagLink={post.hashtagLink}
              pic={post.pic}
            />
          ))}
      </div>

      <div style={{ height: "1vh" }}></div>
    </div>
  );
}

export default Profile;
