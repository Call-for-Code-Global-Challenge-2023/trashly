import ProductBuy from "@/_components/ProductBuy";
import React from "react";

export default function Products() {
  var productList = [
    {
      title: "Bird house",
      desc: "a Bird house made using recycled plastic",
      price: "₹150",
      imagelink:
        "https://th.bing.com/th/id/R.bf91b920dc5d2bb03721a8b4e316db89?rik=Gf0NQVBEPYNizw&riu=http%3a%2f%2fdiyready.com%2fwp-content%2fuploads%2f2016%2f03%2fDIY-Plastic-Bottle-Bird-House.jpg&ehk=33aaVhsBlnLMcELJsRRBOcMCfhwrLiz9DNLvUTog%2fCw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Flower Decoration",
      desc: "a flower vase made using recycled plastic and old newspapers",
      price: "₹150",
      imagelink:
        "https://i.pinimg.com/originals/b1/31/fb/b131fbe806b5f2e1b9363c75aa4eee27.jpg",
    },
    {
      title: "Little Bug",
      desc: "a home decoration made using used plastic bottles and cardboards",
      price: "₹160",
      imagelink:
        "https://ideastand.com/wp-content/uploads/2017/10/plastic-bottle-diy/16-reusing-plastic-water-bottles.jpg",
    },
    {
      title: "Cactus Decoration",
      desc: "cactus decoration made using recycled bottles and color papers",
      price: "₹100",
      imagelink:
        "https://th.bing.com/th/id/R.c7a71239600e6765a80975b46ab72005?rik=Ek%2bM1JVVoAoOTg&riu=http%3a%2f%2fdiyready.com%2fwp-content%2fuploads%2f2016%2f03%2fRecycled-PET-Plastic-Bottle-Plant-And-Animal-Sculptures.jpg&ehk=HHP%2b1zkTAQ2a1v2AoQwvQiUHzobptslsPNbruZ7O48Q%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Wall Hangings",
      desc: "wall hanging decoration made from plastic mugs, color papers and strings",
      price: "₹110",
      imagelink:
        "https://th.bing.com/th/id/R.b61fe82ddaf625a785252c7d7fb19549?rik=vX4673ipxTcDvQ&riu=http%3a%2f%2fbestofdiyideas.com%2fwp-content%2fuploads%2f2016%2f09%2fbottle-plants-diy-plastic-bottle-projects.jpg&ehk=aSE7lWAc%2bmhmJyTYr%2bg2amrcXE26as3BjJYzxkc2uko%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Flower Vases",
      desc: "flower vases made using recycled plastic bottles and used CD disks",
      price: "₹120",
      imagelink:
        "https://www.diyncrafty.com/wp-content/uploads/2017/07/DIY-Cup-Planter-from-Plastic-Bottles.jpg",
    },
  ];
  return (
    <div
      className="p-4 d-flex flex-row flex-wrap justify-content-center align-items-center pg_margin"
      style={{minHeight:"60vh" }}
    >
      {productList.map((ele) => {
        return (
          <ProductBuy
            key={Math.random()}
            imagelink={ele.imagelink}
            price={ele.price}
            title={ele.title}
            desc={ele.desc}
          />
        );
      })}
    </div>
  );
}
