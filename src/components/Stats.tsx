"use client";

import Countup from "react-countup";

const statss = [
  {
    num: 1,
    text: "Years of experience"
  },
  {
    num: 8,
    text: "Projects Completed"
  },
  {
    num: 12,
    text: "Technologies of experience"
  },
  {
    num: 200,
    text: "Code Commits"
  },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 justify-center xl:justify-between max-w-[90%] mx-auto xl:max-w-none">
          {statss.map((item, index) => {
            return (
              <div
                className="flex-1 flex flex-col items-center xl:items-start gap-2 text-center xl:text-left"
                key={index}
              >
                <Countup
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl sm:text-5xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px] sm:max-w-[150px]" : "max-w-[200px]"}`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats;
