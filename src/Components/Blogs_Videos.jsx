import React from "react";

const Blogs_Videos = () => {
  return (
    <div class="videos">
      <div className="cardVid">
        <video className="vid" src="./ATLANTIS.WEBM" controls></video>
        <a href="https://youtu.be/33ou_Z3IqrE">Seafret - Atlantis.</a>
      </div>

      <div className="cardVid">
        <video className="vid" src="./BEST-PART.mp4" controls></video>
        <a href="https://youtu.be/hKgl5-lkT8U">
          {" "}
          Daniel Caesar feat. HER - Best Part.
        </a>
      </div>

      <div className="cardVid">
        <video className="vid" src="./BY-MY-SIDE.mp4" controls></video>
        <a href="https://youtu.be/zpHaEnHhCSY">
          Zack Tadublo feat. Tiara Andini - By My Side.
        </a>
      </div>

      <div href="https://youtu.be/GIG38MD_l3k" className="cardVid">
        <video className="vid" src="./CANT-TAKE-MY-EYES.mp4" controls></video>
        <a href="https://youtu.be/GIG38MD_l3k">
          Joseph Vincent - Can't Take My Eyes On You.
        </a>
      </div>

      <div className="cardVid">
        <video className="vid" src="./HIT-DIFFERENT.mp4" controls></video>
        <a href="https://youtu.be/qJlMkMtK7-8">SZA - Hit Different.</a>
      </div>

      <div className="cardVid">
        {" "}
        <video className="vid" src="./PEACHES.mp4" controls></video>
        <a href="https://youtu.be/tQ0yjYUFKAE">
          Justin Bieber feat. Giveon & Daniel Caesar - Peaches.
        </a>
      </div>

      <div className="cardVid">
        <video className="vid" src="./SERE.mp4" controls></video>
        <a href="https://youtu.be/udtsQ3weRz0">
          DJ Spinall feat. FireBoy - Sere.
        </a>
      </div>

      <div className="cardVid">
        <video className="vid" src="./WEAK.mp4" controls></video>
        <a href="https://youtu.be/Cz__09kv07s">
          Larissa Lambert - Weak (cover).
        </a>
      </div>
    </div>
  );
};

export default Blogs_Videos;
