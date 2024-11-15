'use client';

import React from 'react';
import { CardCarousel } from '@/vibes/soul/primitives/card-carousel';
import { ProductsList } from '@/vibes/soul/primitives/products-list';
import { Navigation } from '@/vibes/soul/primitives/navigation';

const cards = [
  {
    id: '1',
    title: '',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/product_images/theme_images/rsz_2557a4871.jpg?t=1472238914',
      alt: '',
    },
    href: 'http://www.biggametreestands.com',
  },
  {
    id: '2',
    title: '',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/product_images/theme_images/rsz_557a3401.jpg?t=1472238914',
      alt: '',
    },
    href: '',
  },
  {
    id: '3',
    title: '',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/product_images/theme_images/rsz_557a36331.jpg?t=1472238914',
      alt: '',
    },
    href: '',
  },
];

const products = [
  {
    id: '1',
    title: 'Guardian XLT  Ladderstand',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/606/images/969/LS4860_Guardian_XLT__08259.1494427062.215.215.png?c=2',
      alt: 'Guardian XLT  Ladderstand',
    },
    href: 'https://shop.biggametreestands.com/guardian-xlt-ladderstand/',
    price: '$199.99',
  },
  {
    id: '2',
    title: 'The Cover-All Blind Kit',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/612/images/990/CR9025_Label__75264.1497362342.215.215.jpg?c=2',
      alt: 'The Cover-All Blind Kit',
    },
    href: 'https://shop.biggametreestands.com/the-cover-all-blind-kit/',
    price: '$139.99',
  },
  {
    id: '3',
    title: 'Hunter HD 1.5',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/617/images/1060/BGM-LS0550_Hunter_HD_1.5_treestand__06237.1552412552.215.215.png?c=2',
      alt: 'Hunter HD 1.5',
    },
    href: 'https://shop.biggametreestands.com/hunter-hd-1-5/',
    price: '$229.99',
  },
  {
    id: '4',
    title: 'Quick-Stick',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/596/images/964/CS050_Main-Label__23735.1552418685.215.215.png?c=2',
      alt: 'Quick-Stick',
    },
    href: 'https://shop.biggametreestands.com/quick-stick/',
    price: '$89.99',
  },
  {
    id: '5',
    title: 'Apex Tripod',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/638/images/1015/TP9000_TOP__86749.1527884849.215.215.jpg?c=2',
      alt: 'Apex Tripod',
    },
    href: 'https://shop.biggametreestands.com/apex-tripod/',
    price: '$299.99',
  },
  {
    id: '6',
    title: 'The Pursuit',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/595/images/959/CR8101-Pursuit-Seat-Area__61274.1494720025.215.215.png?c=2',
      alt: 'The Pursuit',
    },
    href: 'https://shop.biggametreestands.com/the-pursuit/',
    price: '$199.99',
  },
  {
    id: '7',
    title: 'The Warrior Pro',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/601/images/984/LS0100-Seat-Label__19570.1552401798.215.215.png?c=2',
      alt: 'The Warrior Pro',
    },
    href: 'https://shop.biggametreestands.com/the-warrior-pro/',
    price: '$159.99',
  },
];

/* 
groups?: Array<{
    label?: string;
    href?: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
*/
const navigationLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tree Stands',
    href: 'https://shop.biggametreestands.com/tree-stands/',
    groups: [
      {
        label: 'Hang-On',
        href: 'https://shop.biggametreestands.com/tree-stands/hang-on/',
        links: [],
      },
      {
        label: 'Ladderstands',
        href: 'https://shop.biggametreestands.com/tree-stands/ladderstands/',
        links: [
          {
            label: 'Double Ladderstands',
            href: 'https://shop.biggametreestands.com/tree-stands/ladderstands/double-ladderstands/',
          },
          {
            label: 'Single Ladderstands',
            href: 'https://shop.biggametreestands.com/tree-stands/ladderstands/single-ladderstands/',
          },
        ],
      },
      {
        label: 'Tree Stand Accessories',
        href: 'https://shop.biggametreestands.com/tree-stands/tree-stand-accessories/',
        links: [
          {
            label: 'Climbing Systems',
            href: 'https://shop.biggametreestands.com/tree-stands/tree-stand-accessories/climbing-systems/',
          },
        ],
      },
      {
        label: 'Tripods',
        href: 'https://shop.biggametreestands.com/tree-stands/tripods/',
        links: [],
      },
    ],
  },
  {
    label: 'Accessories',
    href: 'https://shop.biggametreestands.com/product-category/accessories',
    groups: [
      {
        label: 'Blind Kits',
        href: 'https://shop.biggametreestands.com/product-category/blind-kits',
      },
      {
        label: 'Ground Blind Accessories',
        href: 'https://shop.biggametreestands.com/product-category/ground-blind-accessories',
      },
      {
        label: 'Spare Parts',
        href: 'https://shop.biggametreestands.com/accessories/spare-parts/',
      },
    ],
  },
  {
    label: 'CLEARANCE',
    href: 'https://shop.biggametreestands.com/product-category/clearance',
    links: [],
  },
];

const logo = 'Big Game Tree Stand';

const topSellers = [
  {
    id: '1',
    title: '24.5" Plastic Coated Cable ( sold individually)',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/651/images/1031/UP10-0005_Plastic_Coated_Cables__44109.1528130741.215.215.JPG?c=2',
      alt: '24.5" Plastic Coated Cable ( sold individually)',
    },
    href: 'https://shop.biggametreestands.com/24-5-plastic-coated-cable-sold-individually/',
    price: '$7.99',
  },
  {
    id: '2',
    title: 'Stabilizer Strap',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/624/images/1002/UP10-0183_Stabilizer_Strap__53510.1527966285.215.215.JPG?c=2',
      alt: 'Stabilizer Strap',
    },
    href: 'https://shop.biggametreestands.com/stabilizer-strap/',
    price: '$5.99',
  },
  {
    id: '3',
    title: 'The Cover-All Blind Kit',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/612/images/990/CR9025_Label__75264.1497362342.215.215.jpg?c=2',
      alt: 'The Cover-All Blind Kit',
    },
    href: 'https://shop.biggametreestands.com/the-cover-all-blind-kit/',
    price: '$139.99',
  },
  {
    id: '4',
    title: 'Standard Seat Cushion',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/158/images/934/CR87-V%252520MAIN__14860.1460651564.215.215.png?c=2',
      alt: 'Big Game Standard Seat Cushion',
    },
    href: 'https://shop.biggametreestands.com/standard-seat-cushion/',
    price: '$21.99',
  },
  {
    id: '5',
    title: 'Strap Assembly',
    image: {
      src: 'https://cdn10.bigcommerce.com/s-d5zv2zvfm6/products/625/images/1003/UP10-0007_Strap_Assembly__87766.1527900231.215.215.JPG?c=2',
      alt: 'Strap Assembly',
    },
    href: 'https://shop.biggametreestands.com/strap-assembly/',
    price: '$19.99',
  },
];

function App() {
  return (
    <div className="min-h-screen">
      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="https://shop.biggametreestands.com/cart.php"
        accountHref="https://shop.biggametreestands.com/account.php"
        searchHref="#"
      />
      <div className="p-6">
        <CardCarousel cards={cards} />
      </div>
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-bold">Featured Products</h2>
        <ProductsList products={products} />
      </div>
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-bold">Current Top Sellers</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topSellers.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md">
              <img src={product.image.src} alt={product.image.alt} />
              <h3 className="mb-2 text-lg font-bold">{product.title}</h3>
              <p className="mb-2 text-lg font-bold">{product.price}</p>
              <a href={product.href} className="text-blue-500 hover:text-blue-700">
                View Product
              </a>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-200 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Contact Us</h3>
            <p>GSM Outdoors</p>
            <p>5250 Frye Road</p>
            <p>Irving, TX 75061</p>
            <p>United States</p>
            <p>Mobile No.: 877-269-8490</p>
            <p>
              <a href="mailto:info@gsmorg.com">info@gsmorg.com</a>
            </p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Information</h3>
            <ul>
              <li>
                <a href="https://shop.biggametreestands.com/sitemap/">Sitemap</a>
              </li>
              <li>
                <a
                  href="https://www.guidefitter.com/insiders/biggametreestands?utm_source=biggametreestands&utm_medium=web&utm_campaign=landing_page&utm_id=gsm_footer_links"
                  target="_blank"
                >
                  Guides/Outfitters Discount
                </a>
              </li>
              <li>
                <a
                  href="https://www.guidefitter.com/insiders/biggametreestands?utm_source=biggametreestands&utm_medium=web&utm_campaign=landing_page&utm_id=gsm_footer_links"
                  target="_blank"
                >
                  Military/First Responders Discount
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-bold">Categories</h3>
            <ul>
              <li>
                <a href="https://shop.biggametreestands.com/tree-stands/">Tree Stands</a>
              </li>
              <li>
                <a href="https://shop.biggametreestands.com/product-category/accessories">
                  Accessories
                </a>
              </li>
              <li>
                <a href="https://shop.biggametreestands.com/product-category/clearance">
                  CLEARANCE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-center">
          &copy; 2024 Big Game Tree Stand.{' '}
          <a href="https://shop.biggametreestands.com/sitemap/">Sitemap</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
