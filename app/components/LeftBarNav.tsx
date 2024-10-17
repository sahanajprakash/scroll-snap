interface LeftBarNavProps {
  sections: string[];
  activeSection: number;
}

export function LeftBarNav({ sections, activeSection }: LeftBarNavProps) {
  console.log(activeSection);

  const updateURL = (sectionIndex: number) => {
    const sectionId = sections[sectionIndex].toLowerCase();
    const newUrl = `${window.location.origin}/#${sectionId}`;

    // Update the URL without reloading
    window.history.pushState(null, "", newUrl);
  };
  updateURL(activeSection);

  const handleSectionClick = (sectionIndex: number) => {
    const sectionId = sections[sectionIndex].toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed left-5 top-1/2 transform -translate-y-1/2 z-10">
      <ul className="space-y-8 text-white text-3xl">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer text-black ${
              index === activeSection ? "scale-125" : ""
            }`}
            onClick={() => handleSectionClick(index)}
          >
            {`${(index + 1).toString().padStart(2, "0")}`}
          </li>
        ))}
      </ul>
    </nav>
  );
}
