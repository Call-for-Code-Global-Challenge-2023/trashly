import Image from "next/image";
import Jumbotron from "@/_components/Jumbotron";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pg_margin">
      <Jumbotron
        maintext="Welcome to Trashly"
        leadtext="Contribute to a cleaner and greener environment using our platform."
      >
        <div className="d-inline">
          <Link href="/working" className="btn btn-success">Find out how</Link>
          <Link href="#recycle" className="btn btn-info mx-2">Recycle Products</Link>
          <Link href="#buy" className="btn btn-success">Buy Recycled Items</Link>
        </div>
      </Jumbotron>
      <Jumbotron
        id="recycle"
        maintext="Recycle products and earn real money!"
        leadtext="Sell your plastic waste to us. You get some cashback points, using which you can redeem coupons for differnent apps that you use regularly."
      >
        <Link href="/sell" className="btn btn-success">Start recycling!</Link>
      </Jumbotron>
      <Jumbotron
        id="buy"
        maintext="Buy recycled products at a cheap rate"
        leadtext="We sell recycled products which you as a customer buy from us contribute to our initiative of saving the environment."
      >
        <Link href="/products" className="btn btn-success">Go to Shop</Link>
      </Jumbotron>
    </main>
  );
}
