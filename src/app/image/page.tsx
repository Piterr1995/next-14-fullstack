import Image from "next/image";
import myImage from "../../../public/next.svg";

export default function Fill() {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, auto))",
      }}
    >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} style={{ position: "relative", height: "300px" }}>
            <Image
              alt="human"
              src={myImage}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
        ))}
    </div>
  );
}
