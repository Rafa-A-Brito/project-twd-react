import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://placehold.co/225x225"
        alt="Imagem do Item X"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio - RJ</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          magnam nobis ut reiciendis similique omnis? Deserunt, blanditiis
          maxime quod recusandae, tempora officia voluptatibus magni ipsum in
          suscipit perspiciatis vero atque! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptas, aperiam est. Sunt earum
          praesentium culpa unde nemo, omnis commodi nihil ut, temporibus
          molestiae voluptatum alias. Natus sequi libero illum molestias.
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 550,00</span>
      </p>
    </a>
  );
};

export default Item;
