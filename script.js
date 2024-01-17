var products = [
    {
        name: "Nike",
        description: "Air Force 1 Jester XX Black Sonic Yellow ...",
        price: "$96"
    },
    {
        name: "Converse",
        description: "Run Star Hike Three Color Unisex",
        price: "$85.5"
    },
    {
        name: "Nike",
        description: "Air Jordan 1 Retro High Obsidian UNC",
        price: "$196"
    },
    {
        name: "Nike",
        description: "Air Force 1 Shadow Beige Pale Ivory",
        price: "$115"
    },
    {
        name: "New Balance",
        description: "Air Force 1 Jester XX Black Sonic Yellow ...",
        price: "$96"
    },
    {
        name: "Asics",
        description: "Air Force 1 Jester XX Black Sonic Yellow ...",
        price: "$96"
    }
];

const list = document.getElementById("product-list");

products.forEach((product, i) => {
    list.innerHTML += `<li class="bg-white p-4 rounded-2xl">
    <div>
        <div class="aspect-4/3">
            <img src="images/shoe-${i + 1}.png" alt="Product" class="w-full h-full object-contain object-bottom">
        </div>
        <div class="mt-4">
            <h4 class="font-bold text-lg">${product.name}</h4>
            <p class="text-sm text-stone-400 my-2">${product.description}</p>
            <span class="font-semibold text-base">${product.price}</span>
        </div>
    </div>
</li>`;
});