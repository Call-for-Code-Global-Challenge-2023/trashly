import Image from "next/image";


export default function Home() {
  return (
    <main className="container-fluid d-flex justify-content-center align-items-center" style={{width:"100%"}}>
      <div className="">
        <p className="text-black fw-bold">Hello world</p>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </main>
  );
}
