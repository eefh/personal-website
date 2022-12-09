import React from "react";
import Project from "./Project";
import "./Portfolio.css";
const Portfolio = () => {
    const zerlog = [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
    ];
    const feyndit = ["Next.js", "Stripe", "GPT-3"];
    const pico8 = ["Lua"];
    const hasbrouck = ["HTML", "CSS", "JS", "React"];
    return (
        <div className="Portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <hr></hr>
            <div className="project-containers">
                <Project
                    desc="Feyndit.com offers an AI powered tutor for any subject! November 2022"
                    lang={feyndit}
                    source="https://cdn.discordapp.com/attachments/666142372580556800/1050884725348237423/image.png"
                    link="https://feyndit.com/"
                />
                <Project
                    desc="Zerlog.org is a social media site where anyone can anonymously discuss a variety of topics in interactive discussion boards."
                    lang={zerlog}
                    source="https://cdn.discordapp.com/attachments/666142372580556800/1020363913549856898/zerlog.png"
                    link="https://zerlog.org/"
                />
                <Project
                    desc="ClockCardio.com is a simple time card app. I wanted to make something simple to help me track my progress with certain subjects."
                    link="https://clockcardio.com/"
                    lang={hasbrouck}
                    source="https://cdn.discordapp.com/attachments/666142372580556800/1020512524375949383/clockcardio.png"
                />
                <Project
                    desc="My personal portfolio website. Take a look around..."
                    link="https://ethanhasbrouck.com/"
                    lang={hasbrouck}
                    source="https://cdn.discordapp.com/attachments/666142372580556800/1020510402414641182/ehcom.png"
                />
                <Project
                    lang={pico8}
                    desc="I have a collection Pico 8 games that I made just for fun, and you can play them in your browser."
                    link="https://www.lexaloffle.com/bbs/?uid=58003"
                    source="https://external-preview.redd.it/2RpWCEK6A9uu4iDH56wXn1OKVrt2EbFCLKOxET8DcOQ.jpg?auto=webp&s=1b3914d0b87eb2be206a51f892f966c7b1122e32"
                />
            </div>
        </div>
    );
};

export default Portfolio;
