$(document).ready(function() {
  $("#mobile-products").html(mobileProduct (shades[0]));

  $(#mobile-products").on(click, '.circle', function() {
    const index=$(this).data('index');
    console.log(index);
  });

});

const shade= {
  img:"url(design-assets/product-red.jpg)",
  subtitle: "Rock-N-Stroll",
  color: "Red",
  Price: "$199",
}

const shade= {
  img: "design-assets/product-green.jpg",
  subtitle: "Rock-N-Stroll",
  color: "Red",
  Price: "$199",
}

const shade= {
  img:"design-assets/product-blue.jpg",
  subtitle: "Rock-N-Stroll",
  color: "Red",
  Price: "$199",
}

const shade= {
  img:"design-assets/product-black.jpg",
  subtitle: "Rock-N-Stroll",
  color: "Red",
  Price: "$199",
}

const shades= [redshade, greenshade, blueshade, blackshade,]


function mobileProducts(product) {
return `


const product-mobile = {
  subtitle: 'Rock-N-Stroll',
  color: 'Red',
  price: '$199.99',

}
