import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Showcase = () => {
  return (
    <section className="container">
      <div className="showcaseHeading">
        <h2>
          Our Service Center <br />{" "}
          <span className="textHighlight">Showcase</span>
        </h2>
        <div className="showcaseButton">
          <Button text="Polachi" />
          <Button text="Udumalaipettai" />
        </div>
      </div>
      <div className="showcaseGallery">
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
        <Image
          src="/BannerImage.png"
          width={308}
          height={308}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Showcase;
