import React, { useEffect, useRef, useState } from "react";

const ArtworkModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto py-20">
        {/* <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button> */}
        <div
          className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
              Your Message Sent Successfully
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-[#FFCC00]`}
            ></span>
            <div className="max-h-80 overflow-auto">
              <p className="mb-5 text-base leading-relaxed text-body-color text-justify">
                Pada zaman dahulu kala, berdirilah kerajaan yang bernama
                Kerajaan Kahuripan. Kerajaan Kahuripan kemudian dibagi menjadi
                dua kerajaan demi mencegah terjadinya perang saudara. <br />{" "}
                <br />
                Kerajaan Kahuripan berdiri menjadi Kerajaan Kediri dan Kerajaan
                Jenggala. Namun sebelum Raja Erlangga meninggal, beliau berpesan
                agar kerajaan tersebut bersatu kembali. Artikel ini telah tayang
                di Katadata.co.id dengan judul "Penuh Pesan Moral, Ini Cerita
                Ande Ande Lumut dan Klenting Kuning", <br />
                <br />
                Kemudian, kedua kerajaan itu pun bersatu kembali dengan cara
                menikahkan Raden Panji Asmarabangun dari Kerajaan Jenggala dan
                Dewi Sekartaji yakni dari Kerajaan Kediri. Sayangnya pernikahan
                tersebut ditentang oleh Ibu Tiri Dewi Sekartaji. Artikel ini
                telah tayang di Katadata.co.id dengan judul "Penuh Pesan Moral,
                Ini Cerita Ande Ande Lumut dan Klenting Kuning",
              </p>
            </div>
            {/* <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white "
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                  <a href={`/#`}> View Details </a>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkModal;
