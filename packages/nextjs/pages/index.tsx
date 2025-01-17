import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="hero mt-6 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <figure>
            <Image
              alt="Have experience? No, sir. I hope you will gain some here. You're hired."
              src="/experience.jpg"
              width={500}
              height={500}
              className="max-w-xs rounded-lg shadow-2xl"
            />
            <figcaption className="text-center">No copyright infringment intended.</figcaption>
          </figure>
          <div>
            <h1 className="text-5xl text-center">Earn a monthly ETH stream building public goods!</h1>
            <p className="mt-6 text-lg">
              <strong className="text-red-500">New building web3?</strong> This roadmap of{" "}
              <Link className="underline" href="./learn">
                free learning resources
              </Link>{" "}
              will get you started.
              <br />
              <strong className="text-yellow-500">Got web3 skills?</strong> Go to{" "}
              <Link className="underline" href="https://speedrunethereum.com/" target="_blank">
                SpeedRunEthereum
              </Link>{" "}
              and{" "}
              <strong>
                complete the challenges to join{" "}
                <Link className="underline" href="https://buidlguidl.com/" target="_blank">
                  BuidlGuidl
                </Link>
              </strong>
              .
              <br />
              <strong className="text-green-500">After you join, build dApps</strong> for the Ethereum blockchain with{" "}
              <strong>
                <Link className="underline" href="https://scaffoldeth.io/" target="_blank">
                  Scaffold-ETH 2
                </Link>
                , an open source toolkit
              </strong>
              .
            </p>
            <p className="text-center text-2xl">
              <strong>Share your builds</strong> with{" "}
              <Link className="underline" href="https://buidlguidl.com/" target="_blank">
                BuidlGuidl
              </Link>{" "}
              and the world, <strong>and earn some ETH!</strong>
            </p>

            <div className="flex flex-col lg:flex-row lg:justify-center mt-8 gap-6 items-center">
              <Link className="underline" href="./learn">
                <button className="btn btn-error">Free Learning Resources</button>
              </Link>
              <Link className="underline" href="https://speedrunethereum.com/" target="_blank">
                <button className="btn btn-warning">SpeedRunEthereum</button>
              </Link>
              <Link className="underline" href="./share">
                <button className="btn btn-success">Share this page</button>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link className="underline underline-offset-4" href="https://github.com/luloxi/0-to-BuidlGuidl">
                Repo
              </Link>{" "}
              made by{" "}
              <Link href="https://twitter.com/LuloxEth" className="underline underline-offset-4">
                Lulox
              </Link>{" "}
              🐱
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
