import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{ width: 700, height: 450, margin:"auto" }}
      variant="quilted"
      cols={6}
      rowHeight={108}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-silver_1_2_1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-airpods-with-charging-case-1_2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_pink_1.jpg',
    title: 'Camera',
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_gold_1_1_1_4.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_tough_speckled_-_white_1_1.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_sp_grip_case_iphone_xr_fw18_-_black_3.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-silicon-case-black-1.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_max_grey.jpg',
    title: 'Fern',
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-max-black-1.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001421_1.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465902049.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-space-grey_4_2_1_3.jpg',
    title: 'Bike',
    cols: 2,
  },
];