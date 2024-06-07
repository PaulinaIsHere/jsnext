import Image from "next/image";

export default function clickme() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: '60px', fontWeight: 'bold', color: 'red' }}>Oops...</div>
      <div className="p-4">
        <p className="mb-4">O_o</p>
        <div style={{ margin: 'auto', width: '600px', height: '800px' }}>
        <Image alt="click" src="/click.jpg" width={600} height={800} />
      </div>
    </div>
    </div>
  );
}