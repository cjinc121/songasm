import React, { useState } from "react";
import "./styles.css";
const genrelist = {
  ROCK: [
    {
      name: "GUSTAAKH",
      singer: "THE LOCAL TRAIN",
      view: "100MN",
      link:
        "https://www.youtube.com/watch?v=S3Wimxxq7xc&ab_channel=TheLocalTrain"
    },
    {
      name: "BAAWRA",
      singer: "NAALAYAK",
      view: "100MN",
      link: "https://www.youtube.com/watch?v=msuf-V1inOY&ab_channel=Naalayak"
    },
    {
      name: "I'm Shipping Up To Boston",
      singer: "Dropkick Murphys",
      view: "100MN",
      link: "https://www.youtube.com/watch?v=x-64CaD8GXw&ab_channel=MarkHiggins"
    }
  ],
  BOLLYWOOD: [
    {
      name: "KUN-FAAYA-KUN",
      singer: "A.R.RAHMAN",
      view: "100MN",
      link: "https://www.youtube.com/watch?v=x-64CaD8GXw&ab_channel=MarkHiggins"
    },
    {
      name: "SUUBHARAMBH",
      singer: "SHRUTI PATHAK",
      view: "100MN",
      link:
        "https://www.youtube.com/watch?v=dlz09a-pyPE&ab_channel=SonyMusicIndiaVEVO"
    },
    {
      name: "TU KISI RAIL SI",
      singer: "INDIAN OCEAN",
      view: "100MN",
      link:
        "https://www.youtube.com/watch?v=zpf8hrbT2d0&ab_channel=ZeeMusicCompany"
    }
  ],
  POP: [
    {
      name: "LEVITATING",
      singer: "DUA LIPA",
      view: "100MN",
      link: "https://www.youtube.com/watch?v=TUVcZfQe-Kw&ab_channel=DuaLipa"
    },
    {
      name: "SUGAR",
      singer: "MAROON 5",
      view: "100MN",
      link: "https://www.youtube.com/watch?v=09R8_2nJtjg&ab_channel=Maroon5VEVO"
    },
    {
      name: "HELLO",
      singer: "ADELE",
      view: "100MN",
      link: "https://www.youtube.com/watch?v=YQHsXMglC9A&ab_channel=AdeleVEVO"
    }
  ]
};

export default function App() {
  const [genre, setgenre] = useState("ALL");
  var genrearr = Object.keys(genrelist);
  function clickhandler(g) {
    setgenre(g);
  }
  return (
    <div className="App">
      <h1>Songasm!!</h1>
      <blockquote>
        “Where words leave off, music begins.” ― Heinrich Heine
      </blockquote>
      <button style={{ cursor: "pointer" }} onClick={() => clickhandler("ALL")}>
        ALL
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => clickhandler("ROCK")}
      >
        ROCK
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => clickhandler("BOLLYWOOD")}
      >
        BOLLYWOOD
      </button>
      <button style={{ cursor: "pointer" }} onClick={() => clickhandler("POP")}>
        POP
      </button>
      <hr></hr>
      <div>
        {
          genre != "ALL" &&
            genrelist[genre].map((item) => {
              return (
                <div className="card-pro">
                  <div className="card">{item.name}</div>
                  <div className="card">{item.singer}</div>
                  <div className="card">{item.view}</div>
                  <div className="link">
                    <a href={item.link}>
                      <div className="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })
          /* {genre.map((item) => {
          return <div className="card">{item}</div>;
        })} */
        }
        {genre === "ALL" &&
          genrearr.map((gt) => {
            return genrelist[gt].map((item) => {
              return (
                <div className="card-pro">
                  <div className="card">{item.name}</div>
                  <div className="card">{item.singer}</div>
                  <div className="card">{item.view}</div>
                  <div className="link">
                    <a href={item.link}>
                      <div className="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              );
            });
          })}
      </div>
    </div>
  );
}
