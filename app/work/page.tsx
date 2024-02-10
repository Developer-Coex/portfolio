"use client";

import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import Magentic from "@/components/ui/magentic";

export default function WorkPage() {
  const projectsData = [
    {
      title: (
        <>
          Sneakers <br /> Shop
        </>
      ),
      description: "page",
      link: "abc",
      imageLink: "/img/projects/1.png",
    },
    {
      title: (
        <>
          Nike <br /> Store
        </>
      ),
      description: "page",
      link: "sc",
      imageLink: "/img/projects/2.png",
    },
    {
      title: (
        <>
          Adidas <br /> Store
        </>
      ),
      description: "page",
      link: "sds",
      imageLink: "/img/projects/3.png",
    },
    {
      title: (
        <>
          Puma <br /> Store
        </>
      ),
      description: "page",
      link: "fsre",
      imageLink: "/img/projects/4.png",
    },
    {
      title: (
        <>
          Reebok <br /> Store
        </>
      ),
      description: "page",
      link: "3r3",
      imageLink: "/img/projects/5.png",
    },
  ];

  return (
    <>
      <Header color="Dark"></Header>
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <div className={`section s${index} `} key={item.link}>
              <div className="fullpage__slide">
                <a
                  className={`image image--works image--works${
                    index + 1
                  } anime`}
                  href={item.link}
                  style={{
                    background: `url(${item.imageLink}) center center / contain no-repeat`,
                  }}
                >
                  <div className="image__over">
                    <div className="image__cover">1</div>
                    <div className="image__cover">2</div>
                  </div>
                  <div className="page-num anime">
                    <p>0{index + 1}</p>
                  </div>
                </a>
                <div className="title ml-paddingX">
                  <h2 className="title__text js-letter anime font-semibold">
                    {item.title}
                    <br />
                  </h2>
                  <div className="js-letter anime borderv">
                    <span></span>
                    <span className="js-letter"></span>
                  </div>
                  <p className="title__lead js-letter anime">
                    {item.description}
                  </p>
                  <div className="btn-wrap js-letter anime">
                    <Magentic strength={50} className="btn" href={item.link}>
                      <p className="shapka">Show Me</p>
                    </Magentic>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}