import { useEffect } from "react";
import "./style.css";

export default function App() {
  useEffect(() => {
    const audios = [];

    function stopAllSound() {
      audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }

    function playSound(src) {
      stopAllSound();

      const audio = new Audio(src);

      audio.play().catch((err) => {
        alert("an error occured:", err);
        console.error(err)
        return;
      });

      audios.push(audio);

      return;
    }

    // タブ切り替え
    const tabButtons = document.querySelectorAll(".tab-btn");
    const categories = document.querySelectorAll(".category");

    function handleTabClick(e) {
      tabButtons.forEach((btn) => btn.classList.remove("is-primary"));
      categories.forEach((cat) => cat.classList.remove("is-primary"));

      e.currentTarget.classList.add("is-primary");
      const tabId = e.currentTarget.dataset.tab;
      document.getElementById(tabId).classList.add("is-primary");
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", handleTabClick);
    });

    // サウンドボタン
    const soundButtons = document.getElementsByClassName("sound-button");
    function handleSoundClick(e) {

      const audioValue = e.currentTarget.getAttribute("audio");
      playSound(`./sounds/${audioValue}.wav`);
    }
    for (const button of soundButtons) {
      button.addEventListener("click", handleSoundClick);
    }

    // クリーンアップ
    return () => {
      tabButtons.forEach((button) => {
        button.removeEventListener("click", handleTabClick);
      });
      for (const button of soundButtons) {
        button.removeEventListener("click", handleSoundClick);
      }
    };
  }, []);

  return (
    <>
      <h1 className="is-size-3 has-text-weight-semibold title">ずんだもん VCボタン</h1>

      <div className="tab-buttons">
        <button className="tab-btn is-primary button" data-tab="greetings">あいさつ</button>
        <button className="tab-btn button" data-tab="thanks">ありがとう</button>
        <button className="tab-btn button" data-tab="love">愛</button>
      </div>

      <div className="category is-primary" id="greetings">
        <button className="is-info sound-button button" audio="good_morning">おはよう</button>
        <button className="is-info sound-button button" audio="hello">こんにちは</button>
        <button className="is-info sound-button button" audio="hello1">こ↓ん↑にちは</button>
        <button className="is-info sound-button button" audio="tya">ちゃ</button>
        <button className="is-info sound-button button" audio="good_evening">こんばんは</button>
      </div>

      <div className="category" id="thanks">
        <button className="is-info sound-button button" audio="thanks">ありがとう！</button>
      </div>

      <div className="category" id="love">
        <button className="is-info sound-button button" audio="i_love_you">愛してる</button>
        <button className="is-info sound-button button" audio="i_really_love_you">
          ほんと愛してる
        </button>
      </div>
    </>
  );
}
