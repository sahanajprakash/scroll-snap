import { useRef, useState, useEffect } from "react";

export function useActiveSection({ sections }: { sections: string[] }) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section.toLowerCase());
        return element ? element.offsetTop : 0;
      });

      const currentSection = sectionOffsets.findIndex(
        (offset, index) =>
          offset <= scrollY && sectionOffsets[index + 1] > scrollY
      );
      console.log(currentSection);

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [sectionsContainerRef, activeSection, setActiveSection];
}
