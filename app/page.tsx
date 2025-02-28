"use client";
import { LeftBarNav } from "./components/LeftBarNav";
import { useActiveSection } from "./hooks/useActiveSection";

const pageSections = [
  "home",
  "about",
  "work",
  "expertise",
  "company",
  "contact",
];

export default function Home() {
  const [sectionsContainerRef, activeSection, setActiveSection] =
    useActiveSection({ sections: pageSections }) as [
      React.MutableRefObject<null>,
      number,
      React.Dispatch<React.SetStateAction<number>>
    ];

  return (
    <div>
      <LeftBarNav
        sections={pageSections}
        activeSection={typeof activeSection === "number" ? activeSection : 0}
      />
      <main
        ref={sectionsContainerRef}
        className="overflow-y-scroll overflow-x-hidden h-screen snap-y snap-mandatory bg-slate-200 px-[90px] "
        onScroll={(e) => {
          const scrollIndex = Math.round(
            (e.target as HTMLElement).scrollTop / window.innerHeight
          );
          if (scrollIndex !== activeSection) {
            setActiveSection(scrollIndex);
          }
        }}
      >
        <section
          id="home"
          className="min-h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">01 HOME</h1>

          <ul className="flex flex-col">
            <li className="text-2xl text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
          </ul>

          <p>Autor del poema: Pita Amor</p>
        </section>

        <section
          id="about"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">02 ABOUT</h1>
          <br />
          <p className="text-2xl text-black">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur. pariatur?
          </p>
          <br />
          <p>Autor del poema: Juan de Dios Peza</p>
        </section>

        <section
          id="work"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">03 WORK</h1>
          <br />
          <p className="text-xl text-black">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <br />
          <p>Autor del poema: Coral Bracho</p>
        </section>
        <section
          id="expertise"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">04 EXPERTISE</h1>
          <br />
          <p className="text-2xl text-black">
            Mueve los aires, torna en fuego su propia mansedumbre: el frío va al
            asombro y el resplandor a música es llevado. Nadie respira, nadie
            piensa y sólo el ondear de las miradas luce como una cabellera. En
            la sala solloza el mármol su orden recobrado, gime el río de ceniza
            y cubre rostros y trajes y humedad.
          </p>
          <br />
          <p>Autor del poema: Alí Chumacero</p>
        </section>

        <section
          id="company"
          className="h-screen snap-center snap-alway pt-[50px]"
        >
          <h1 className="text-6xl text-black">05 COMPANY</h1>
          <br />
          <p className="text-black text-2xl">
            Amo el canto del cenzontle, pájaro de cuatrocientas voces amo el
            color del jade, y el enervante perfume de las flores; Pero amo más a
            mi hermano el hombre.
          </p>
          <br />
          <p>Autor del poema: Nezahualcóyotl</p>
        </section>

        <section
          id="contact"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">06 CONTACT</h1>
          <br />
          <p className="text-2xl text-black">
            A bordo del expreso volamos sobre la irrealidad del continente. La
            tarde apagada en los espejos, y los adioses sangran en mi mente. El
            corazón nostálgico presiente a lo largo de este viaje, literaturas
            vagabundas que sacudieron las plumas de sus alas, en los fríos
            corredores del paisaje. Van pasando las campiñas sonámbulas mientras
            el tren se aleja entre los túneles del sueño. Allá de tarde en
            tarde, ciudades apedreadas de gritos y adioses.
          </p>
          <br />
          <p>Autor del poema: Manuel Maples Arce</p>
        </section>
      </main>
    </div>
  );
}
