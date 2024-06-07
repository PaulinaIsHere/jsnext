import Image from "next/image";

export default function Nowa() {
  return (
    <div>
      <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'darkgreen' }}>It's just cat, because why not</div>
      <div className="p-4" style={{ fontSize: '20px', fontWeight: 'bold', color: 'darkred', fontFamily: 'Baguet Script, monospace' }}>
        <p className="mb-4">Sesja is coming...</p>
        <Image alt="R" src="/R.gif" width={600} height={800} />
      </div>
    </div>
  );
}
