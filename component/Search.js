import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import CustomTable from "./CustomTable";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PriceRange from "./PriceRange";
import "../styles/PriceRange.module.css";
export default function Search() {
  const [radioValue, setRadioValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState("off");
  const [maxx, setMax] = useState("");
  const [minn, setMin] = useState("");
  // const takeMin = (value) => {
  //   setMinnn(value);
  //   console.log(minnn);
  // };
  // const takeMax = (value) => {
  //   setMaxxx(value);
  //   console.log(maxxx);
  // };

  // console.log(radioValue);
  // console.log(searchValue);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        data: `${radioValue}`,
        value: `${searchValue}`,
      },
    });
  };
  const handleClick1 = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/searchbyrange",
      query: {
        data: `${radioValue}`,
        Min: `${minn}`,
        Max: `${maxx}`,
      },
    });
  };
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchSection}>
        <input
          type="text"
          className={styles.searchInput}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>

      <div className={`${isOpen}`}>
        <style jsx>{`
          .on {
            display: grid;
          }
          .off {
            display: none;
          }
        `}</style>

        <div className={styles.rangecontainer}>
          <div className={styles.pricerange}>
            <div className={styles.line1}></div>
            <div className={styles.parent1}>
              <div className={styles.div10}>
                <label>
                  Min:
                  <div>
                    <input
                      value={minn}
                      onChange={(e) => {
                        setMin(e.target.value);
                      }}
                    />
                  </div>
                </label>
              </div>
              <div className={styles.div20}>
                <label>
                  Max:
                  <div>
                    <input
                      value={maxx}
                      onChange={(e) => {
                        setMax(e.target.value);
                      }}
                    />
                  </div>
                </label>
              </div>
              <div className={styles.div30}>
                <button className={styles.buttonfilter} onClick={handleClick1}>
                  Filter
                </button>
              </div>
            </div>

            <div className={styles.line1}></div>
          </div>
        </div>
      </div>
      <div className={styles.category}>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="points"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("on");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Points</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="title"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Name</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="description"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Description</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="taster_name"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Taster</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="price"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("on");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Price</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="variety"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Variety</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="region_1"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Region</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="province"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Province</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="country"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Country</div>
        </label>
        <label className={styles.radioName}>
          <input
            className={styles.inpu}
            type="radio"
            name="asd"
            value="winery"
            onChange={(e) => {
              setRadioValue(e.target.value);
              setIsOpen("off");
            }}
          />
          <div className={styles.raddesign}></div>
          <div className={styles.text}>By Winery</div>
        </label>
      </div>
    </div>
  );
}
