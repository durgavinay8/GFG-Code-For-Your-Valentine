/* eslint-disable react/prop-types */
const Step5 = ({ nextStep }) => {
  console.log("step5");

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-[mawur] uppercase text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)]">
        Now you&apos;re going to be hypnotized
      </h1>
      <button
        className="text-black text-2xl mt-6 px-6 py-2 bg-[#E30022] rounded-lg hover:bg-[#D3212C] font-[Arial]"
        onClick={nextStep}
      >
        Let&apos;s see
      </button>
    </div>
  );
};

export default Step5;
