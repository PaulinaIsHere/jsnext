import Image from "next/image";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function click() {
  return (
<div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: '60px', fontWeight: 'bold', color: 'darkred' }}>Let's Party!</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <iframe
          width="720"
          height="400"
          src="https://www.youtube.com/embed/zrcBEg_Y7Q4?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
