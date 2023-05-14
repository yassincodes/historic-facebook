import Header from "../components/Header";
const homeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke="#2c3e50"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="5 12 3 12 12 3 21 12 19 12" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <rect x="10" y="12" width="4" height="4" />
  </svg>
);

const hashtagIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-hash"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="9" x2="19" y2="9" />
    <line x1="5" y1="15" x2="19" y2="15" />
    <line x1="11" y1="4" x2="7" y2="20" />
    <line x1="17" y1="4" x2="13" y2="20" />
  </svg>
);

const videoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-video"
    width="44"
    height="44"
    stroke="#2c3e50"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
    <rect x="3" y="6" width="12" height="12" rx="2" />
  </svg>
);

const accountsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-users"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke="#2c3e50"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
  </svg>
);
function Menu() {
  return (
    <>
      <Header />
      <div className="home" style={{height: "85vh"}}>
        <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center", padding: "20px"}}>
          <div>{homeIcon}</div>
          <div>الصفحة الرئيسية</div>
        </div>
        <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center", padding: "20px"}}>
          <div>{hashtagIcon}</div>
          <div>قائمة الدروس</div>
        </div>{" "}
        <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center", padding: "20px"}}>
          <div>{videoIcon}</div>
          <div>قائمة الفديوهات</div>
        </div>{" "}
        <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center", padding: "20px"}}>
          <div>{accountsIcon}</div>
          <div>الملفات الشخصية</div>
        </div>
      </div>
    </>
  );
}

export default Menu;
