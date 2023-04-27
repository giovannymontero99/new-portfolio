import React, { useRef, useEffect, useState } from 'react';

const useIntersection = () => {
  const reference = useRef();
  const [isIntersected, setIsIntersected] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((observedSection) => {
      observedSection.forEach((entry) => {
        return setIsIntersected(entry.isIntersecting);
      });
    }, {});

    observer.observe(reference.current);
  }, []);

  return [isIntersected, reference];
};

export default useIntersection;
