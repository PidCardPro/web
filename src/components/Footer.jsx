import React from "react";
import PropTypes from "prop-types";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#098009]" size={30} />
);

SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

const Footer = () => {
  const items = [
    {
      type: "icon",
      icon: FaFacebookSquare,
      url: "https://www.facebook.com/people/RunnMe/61558840046598/",
    },
    {
      type: "icon",
      icon: FaInstagram,
      url: "https://www.instagram.com/runnmemedia/",
    },
    {
      type: "icon",
      icon: FaXTwitter,
      url: "https://twitter.com/RunnMeMedia",
    },
    {
      type: "icon",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/runnme",
    },
    {
      type: "icon",
      icon: FaYoutube,
      url: "https://www.youtube.com/@info-gh3zq",
    },
    {
      type: "section",
      title: "Features",
      items: [
        { text: "Get quotes", link: "/searchFreight" },
        { text: "Find freight", link: "searchFreight" },
        { text: "Instant freight", link: "/shipping-package/0" },
      ],
    },
    {
      type: "section",
      title: "Support",
      items: [
        { text: "Pricing", link: "/pricing" },
        { text: "Guides", link: "/how-it-works" },
      ],
    },
    {
      type: "section",
      title: "Company",
      items: [
        { text: "About us", link: "/about-us" },
        { text: "Jobs", link: "/register/carrier" },
      ],
    },
    {
      type: "section",
      title: "Legal",
      items: [
        { text: "Legal", link: "/claim" },
        { text: "Cookies", link: "/policy" },
        { text: "Terms", link: "/terms" },
      ],
    },
  ];

  return (
    <div className=" bg-gradient-to-t from-black to to-[#098009] mx-auto py-16 px-8 sm:px-32  grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        {/* <img src={Logo} className="h-2 object-cover" /> */}
        <h3 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFF]">
          PIDCARD.
        </h3>
        <p className="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          {items.map(
            (item, index) =>
              item.type === "icon" &&
              item.icon && (
                <a key={index} target="_blank" href={item.url} rel="noreferrer">
                  <SocialIcon icon={item.icon} />
                </a>
              )
          )}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {items.map(
          (item, index) =>
            item.type === "section" && (
              <div key={index}>
                <h6 className="font-medium text-gray-100 text-xl">
                  {item.title}
                </h6>
                <ul>
                  {item.items &&
                    item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-2 text-sm">
                        <a
                          href={subItem.link}
                          className="hover:underline cursor-pointer"
                        >
                          {subItem.text}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Footer;
