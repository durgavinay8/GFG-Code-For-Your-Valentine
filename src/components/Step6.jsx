// eslint-disable-next-line react/prop-types
const Step6 = ({ nextStep }) => {
  return (
    <div className="relative w-full h-screen">
      <video
        onEnded={nextStep}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        playsInline
      >
        <source src="/glimpse_of_us.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Step6;
