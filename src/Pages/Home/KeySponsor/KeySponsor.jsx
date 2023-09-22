import React from "react";
import Marquee from "react-fast-marquee";

const sponsors = [
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162627/1729.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162631/1831.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162605/1236.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162614/1433.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162639/257.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162609/1332.png",
  },
  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162622/1628.png",
  },

  {
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162652/5_big7.png",
  },
  {
    logo: "https://images-workbench.99static.com/9FFhJYRQsHrcPmfClHW3xoR8Pvo=/99designs-contests-attachments/133/133258/attachment_133258495",
  },
  {
    logo: "https://dynamic.brandcrowd.com/asset/logo/cb52f9e5-32ed-4f83-b20a-3aa171749462/logo-search-grid-1x?logoTemplateVersion=1&v=638095294425300000&text=Code+Mates",
  },
];

const KeySponsor = () => {
  return (
    <div className="pt-6 px-2 home-container">
        <h1 className="text-4xl font-bold mb-5  font-Poppins">
          Leading Key Sponsor Companies
        </h1>
        <p className=" font-semibold mb-10">
          Our Esteemed Sponsor Companies Shaping the Future of Learning.
        </p>
      <div className="container mx-auto">
        <Marquee className="mb-5" direction="left" speed={30}>
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-4"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                className="w-40 h-32"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default KeySponsor;
