import React, { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ end, duration }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="text-4xl font-bold text-orange-600">
      {inView ? <NumberAnimation end={end} duration={duration} /> : 0}
    </div>
  );
};

const NumberAnimation = ({ end, duration }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{value} +</span>;
};

export default AnimatedNumber;
