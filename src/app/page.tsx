import "@/styles/cards/cardStyles.scss";
import "@/styles/text/cityLightEffect.css";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="autumn fixed left-0 top-0 z-[-1] flex h-screen w-full items-center justify-center bg-purple-200 bg-opacity-40">
      <div className="">
        <div className="flex">
        <div className="shadows_into_light cityLightEffect text-3xl text-white">
          Your Brownie Stop
        </div>
        </div>

          <div className="body mt-10">
          <div className="container">
            <div className="cards">
              <div className="card card-one">
                <h2 className="card-title">Nutella Brownies</h2>
                <p className="date">Rs. 400</p>
                <div className="description">
                  Elevate your brownie game with nutella.
                  <Image src="/brownie.jpg" alt="brownie" height={200} width={200} />
                </div>

              </div>
              <div className="card card-two">
                <h2 className="card-title">Card Two</h2>
                <p className="date">May 26, 2021</p>
                <p className="description">
                  If you read carefully, you'll find that this is not your
                  typical lorem ipsum.
                </p>
              </div>
              <div className="card card-three">
                <h2 className="card-title">Card Three</h2>
                <p className="date">May 27, 2021</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </div>
              <div className="card card-four">
                <h2 className="card-title">Card Four</h2>
                <p className="date">May 28, 2021</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </div>
              <div className="card card-four">
                <h2 className="card-title">Card Four</h2>
                <p className="date">May 28, 2021</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </div>
              <div className="card card-four">
                <h2 className="card-title">Card Four</h2>
                <p className="date">May 28, 2021</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
