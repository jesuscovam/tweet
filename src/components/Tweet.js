import { useState } from "react";

const avatar =
  "https://pbs.twimg.com/profile_images/1391573293090623488/rzZs93Jl_x96.jpg";

export function Tweet() {
  const [tweet, setTweet] = useState("");

  const handlerSendTweet = () => {
    setTweet("");
  };
  return (
    <div className={styles.containerTweetInput}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <div className={styles.containerRightColumn}>
        <input
          value={tweet}
          onChange={(event) => setTweet(event.target.value)}
          className={styles.inputTweet}
          type="text"
          placeholder="What's happening?"
        />
        <div className={styles.containerButtons}>
          <div></div>
          <button
            onClick={handlerSendTweet}
            className={
              tweet === "" ? styles.buttonTweetBlocked : styles.buttonTweet
            }
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  containerTweetInput: "bg-black p-6 flex flex-row items-start max-w-md",
  avatar: "h-12 w-12 rounded-full",
  containerRightColumn: "flex flex-col ml-4 w-full",
  inputTweet: "bg-black font-bold text-white",
  containerButtons: "flex flex-row justify-between w-full mt-4",
  buttonTweet:
    "bg-blue-400 px-4 py-3 rounded-full text-white font-bold text-lg",
  buttonTweetBlocked:
    "bg-blue-400 opacity-50 px-4 py-3 rounded-full text-white font-bold text-lg cursor-not-allowed",
};
