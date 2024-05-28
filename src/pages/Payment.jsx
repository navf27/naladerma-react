import React, { useEffect } from "react";
import Navbar from "../components/atoms/Navbar";
import Footer from "../components/atoms/Footer";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();

  useEffect(() => {
    // const snapScript = "https://app.stg.midtrans.com/snap/snap.js";
    // // const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
    // const clientKey = "SB-Mid-client-L-g7C54rmdOL1C-w";
    // const script = document.createElement("script");
    // script.src = snapScript;
    // script.setAttribute("data-client-key", clientKey);
    // script.async = true;
    // document.body.appendChild(script);
    // // window.snap.pay("ddfaca2d-a51d-4598-9037-60d46f65f9fa")
    // return () => {
    //   document.body.removeChild(script);
    // };
    // You can also change below url value to any script url you wish to load,
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    // Optional: set script attribute, for example snap.js have data-client-key attribute
    // (change the value according to your client-key)
    // const myMidtransClientKey = "your-client-key-goes-here";
    scriptTag.setAttribute("data-client-key", clientKey);
    // scriptTag.async = true;

    document.body.appendChild(scriptTag);

    // window.snap.embed("755a2176-68b8-48d4-b6d3-80020b3312ad", {
    //   embedId: "snap",
    // });

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          window.snap.pay("755a2176-68b8-48d4-b6d3-80020b3312ad");
        }}
        className="bg-yellow"
      >
        show
      </button>
      <div className="flex justify-center">
        <div id="snap">
          {/* <Navbar value={["Event", "Karya", "Tentang Kami"]} /> */}
          {/* <section>
          <div>{id}</div>
        </section> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Payment;
