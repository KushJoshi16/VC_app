import { useEffect, useRef } from "react";

export default function StreamPlayer({ stream, autoPlay = true, muted = true, controls = false, ...props }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      muted={muted}
      playsInline
      controls={controls}
      {...props} // allows you to pass style, className, etc.
    />
  );
}
