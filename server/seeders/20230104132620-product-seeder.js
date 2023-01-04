"use strict";

let list = [
  {
    product_id: "8100001270",
    product_name: "Apple iPhone Xs Max 512GB, Silver",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-silver_1_2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-max-512gb-silver-qr-new",
  },
  {
    product_id: "8100001269",
    product_name: "Apple iPhone Xs Max 512GB, Space Grey",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-space-gray_1_2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-max-512gb-space-grey-new",
  },
  {
    product_id: "8100001137",
    product_name: "Apple iPhone Xs 512GB, Space Grey",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-space-gray_1_2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-512gb-space-grey-new",
  },
  {
    product_id: "8100001132",
    product_name: "Apple iPhone Xs 64GB, Silver",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-silver_1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-64gb-silver-new",
  },
  {
    product_id: "8100001131",
    product_name: "Apple iPhone Xs 64GB, Space Grey",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-space-gray_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-64gb-space-grey-qrp",
  },
  {
    product_id: "8100010757",
    product_name: "Apple AirPods With Wireless Charging Case (Generasi ke-2)",
    product_price: 2799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-airpods-with-charging-case-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-airpods-with-wireless-charging-case-generasi-ke2",
  },
  {
    product_id: "8100004719",
    product_name: "JBL Earphone T110BT - Grey",
    product_price: 199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-grey",
  },
  {
    product_id: "8100004717",
    product_name: "JBL Earphone T110BT - White",
    product_price: 199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-white-1",
  },
  {
    product_id: "8100004720",
    product_name: "JBL Earphone T110BT - Pink",
    product_price: 700000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-pink",
  },
  {
    product_id: "8100004718",
    product_name: "JBL Earphone T110BT - Blue",
    product_price: 199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-blue-new",
  },
  {
    product_id: "8100022902",
    product_name: "JBL Charge 4 - Red",
    product_price: 1949000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-red-1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-red",
  },
  {
    product_id: "8100004539",
    product_name: "JBL Charge 4 - Green",
    product_price: 1800000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-green-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-green",
  },
  {
    product_id: "8100004536",
    product_name: "JBL Charge 4 - Blue",
    product_price: 2100000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-blue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-blue-qrp",
  },
  {
    product_id: "8100004535",
    product_name: "JBL Charge 4 - Black",
    product_price: 1800000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-black-qrp",
  },
  {
    product_id: "8100006273",
    product_name: "JBL Flip 4 - Grey",
    product_price: 1199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_4_grey_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-grey",
  },
  {
    product_id: "8100006271",
    product_name: "JBL Flip 4 - Blue",
    product_price: 1199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_4_blue_1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-blue",
  },
  {
    product_id: "8100006275",
    product_name: "JBL Flip 4 - Black",
    product_price: 1199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-black-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-black-qrp",
  },
  {
    product_id: "8100025617",
    product_name: "Mazer  Converter Mini DP to HDMI 4K + VGA",
    product_price: 549000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer-mini-display-port-to-hdmi-_4k30hz_vga-dual-display-adapter_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-converter-mini-dp-to-hdmi-4k-vga",
  },
  {
    product_id: "8100025616",
    product_name: "Belkin Family RockStar 4-Ports USB Home Charger - White",
    product_price: 599000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin-family-rockstar-4-ports-usb-home-charger_4.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-family-rockstar-4-ports-usb-home-charger-white",
  },
  {
    product_id: "8100013060",
    product_name: "Earpods With 3.5 mm Headphone Plug",
    product_price: 449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-earpods-with-3-5-mm-headphone-plug-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-earpods-with-3-5-mm-headphone-plug-qrp-ibox",
  },
  {
    product_id: "8100011025",
    product_name: "Beats Urbeats3 - Grey",
    product_price: 1600000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats-urbeats3-gray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-urbeats3-grey",
  },
  {
    product_id: "8100012483",
    product_name: "iPhone Xs Leather Case, Black",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-leather-case-black-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-leather-case-black-qrp-ibox",
  },
  {
    product_id: "8100012492",
    product_name: "iPhone Xs Max Leather Case, (PRODUCT) Red",
    product_price: 129000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-leather-case-red-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-max-leather-case-product-red-qrp-new-ibox",
  },
  {
    product_id: "8100012504",
    product_name: "iPhone Xs Max Silicone Case, (PRODUCT) Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-silicon-case-red-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-max-silicone-case-product-red-qrp-ibox",
  },
  {
    product_id: "8100012508",
    product_name: "iPhone Xs Max Silicone Case, White",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-silicon-case-white-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-max-silicone-case-white-qrp-ibox",
  },
  {
    product_id: "8100012511",
    product_name: "iPhone Xs Silicone Case, Midnight Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-silicone-case-midnight-blue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-silicone-case-midnight-blue-qrp-ibox",
  },
  {
    product_id: "8100012647",
    product_name: "Smart Keyboard For 10.5 inci iPad Pro",
    product_price: 3399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-smart-keyboard-for-10-5-inch-ipad-pro-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-smart-keyboard-for-10-5-inch-ipad-pro-ibox",
  },
  {
    product_id: "8100006393",
    product_name: "Anker PowerCore+ 10050mAh with Quick Charge 3.0 - Black",
    product_price: 965000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/katalog_kirim_via_darat_tokopedia_banner_samsung_powerbank_10000mahb.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powercore-10050mah-with-quick-charge-3-0-black",
  },
  {
    product_id: "8100005413",
    product_name: "Element Case Illusion iPhone Xs - Smoke",
    product_price: 569000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/l/element-case-illusion-smoke-1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/element-case-illusion-iphone-xs-smoke",
  },
  {
    product_id: "8100005414",
    product_name: "Element Case Illussion iPhone Xs Max - Smoke",
    product_price: 569000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/l/element-case-illusion-smoke-xs-max-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/element-case-illussion-iphone-xs-max-smoke-qrp",
  },
  {
    product_id: "8100005415",
    product_name: "Element Case Shadow iPhone Xs - Black",
    product_price: 699000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/c/ec-shadow-black.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/element-case-shadow-iphone-xs-black-qrp",
  },
  {
    product_id: "8100005670",
    product_name: "iLuv XS Max Metal Forge Case - Black",
    product_price: 239000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/iluv-metal-forge-case-for-iphone-xs-max-black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iluv-xs-max-metal-forge-case-black-qrp",
  },
  {
    product_id: "8100005671",
    product_name: "iLuv Metal Forge Case For iPhone Xs Max - Pink",
    product_price: 239000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/iluv-metal-forge-case-for-iphone-xs-max-pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iluv-metal-forge-case-for-iphone-xs-max-pink-qrp",
  },
  {
    product_id: "8100004520",
    product_name: "JBL Headphone T600 BTNC - Blue",
    product_price: 1140000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-t600-blue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-headphone-t600-btnc-blue-qrp",
  },
  {
    product_id: "8100013995-IB",
    product_name: "Lamina Tempered Glass Esential iPhone 11/XR",
    product_price: 149000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_essential.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-esential-iphone-11-xr",
  },
  {
    product_id: "8100013778",
    product_name: "Spigen AirPods Case - Grey",
    product_price: 249000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-airpods-case-grey-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-airpods-case-grey",
  },
  {
    product_id: "8100006458",
    product_name: "Spigen Essential QC 3.0 Wall Charger - White",
    product_price: 399000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-wall-charger-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/spigen-wall-charger-white-qrp",
  },
  {
    product_id: "8100008913",
    product_name:
      "Tucano Second Skin Elements Sleeve for Macbook Pro 13 Inch - Black",
    product_price: 399000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic80202520104511_1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-second-skin-elements-sleeve-for-macbook-pro-13-inch-black",
  },
  {
    product_id: "8100008376",
    product_name: "Adidas iPhone XR Moulded Case - White/Black",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_iphone_xr_moulded_white_black_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xr-moulded-case-white-black",
  },
  {
    product_id: "8100004725",
    product_name: "JBL Free X - Black",
    product_price: 499000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_free_x_black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-free-x-black",
  },
  {
    product_id: "8100004827",
    product_name: "JBL Free X - White",
    product_price: 499000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-free-x-white-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-free-x-white-new",
  },
  {
    product_id: "8100011039",
    product_name: "Beats Powerbeats Pro - Navy",
    product_price: 3699000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-navy_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-navy",
  },
  {
    product_id: "8100011038",
    product_name: "Beats Powerbeats Pro - Moss",
    product_price: 3699000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-moss_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-moss",
  },
  {
    product_id: "8100011037",
    product_name: "Beats Powerbeats Pro - Ivory",
    product_price: 3699000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-ivory_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-ivory",
  },
  {
    product_id: "8100007852",
    product_name:
      "Casemate Airpods Case - Creaturepods - Tricky Trickster Case - Blue",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-airpods-case-creaturepods-tricky-trickster-case-blue_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-creaturepods-tricky-trickster-case-blue",
  },
  {
    product_id: "8100005773",
    product_name: "iLuv iPhone XS Max Vyneer - Black",
    product_price: 229000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/v/y/vyneer_black_10.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iluv-iphone-xs-max-vyneer-black",
  },
  {
    product_id: "8100004518",
    product_name: "JBL Headphone T600 BTNC - Black",
    product_price: 1140000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_tune_600btnc_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/jbl-headphone-t600-btnc-black-qrp",
  },
  {
    product_id: "8100007717",
    product_name:
      "Casemate Airpods Hook Ups Case + Neck Strap - Living Coral Light Pink",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-living_coral_light_pink_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-living-coral-light-pink",
  },
  {
    product_id: "8100006390",
    product_name: "Anker PowerLine+ Lightning (3ft/0.9m) With Pouch - Gold",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerline-lightning-gold-3ft_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerline-plus-lightning-3ft-0-9m-with-pouch-gold-qrp",
  },
  {
    product_id: "8100006389",
    product_name: "Anker PowerLine+ Lightning (3ft/0.9m) With Pouch - Red",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerline-lightning-red-3ft_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerline-lightning-3ft-0-9m-with-pouch-red",
  },
  {
    product_id: "8100006464",
    product_name: "Anker PowerLine+ Lightning (3ft/0.9m) With Pouch - White",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerline-lightning-white_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerline-plus-lightning-3ft-0-9m-with-pouch-white-qrp",
  },
  {
    product_id: "8100003982",
    product_name: "Otterbox Symmetry iPhone XS Max - Clear",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/y/symmetry_clear_xmax_2__1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-xs-max-symmetry-clear-qrp",
  },
  {
    product_id: "8100003981",
    product_name: "OtterBox Symmetry Series For iPhone Xs Max - Black",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_symmetry_series_for_iphone_x_black_1__2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-for-iphone-xs-max-black",
  },
  {
    product_id: "8100013810",
    product_name: "Kajsa iPhone XS Ninja - Grey",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-xs-ninja-grey-qrp",
  },
  {
    product_id: "8100006000",
    product_name:
      "Kajsa Outdoor Collection Wood Pattern iPhone Xs Back Case - Dark Brown",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa-outdoor-collection-wood-pattern-iphone-xs-back-case-dark-brown.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-xs-kajsa-wood-brown-qrp",
  },
  {
    product_id: "8100005999",
    product_name:
      "Kajsa Outdoor Collection Wood Pattern iPhone Xs Back Case - Light Brown",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa-outdoor-collection-wood-pattern-iphone-xs-back-case-light-brown.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-xs-kajsa-wood-brown-qrp-2",
  },
  {
    product_id: "8100006016",
    product_name: "Kajsa iPhone X/XS Trans Shield - Clear",
    product_price: 349000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-x-xs-trans-shield-clear",
  },
  {
    product_id: "8100008382",
    product_name: "Adidas iPhone XS Max Moulded - Pink",
    product_price: 699000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_iphone_xs_max_moulded_pink-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xs-max-moulded-pink",
  },
  {
    product_id: "8100008381",
    product_name: "Adidas iPhone XS Max Grip Case - Black",
    product_price: 699000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_sp_grip_case_iphone_xs_max_fw18_-_black_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xs-max-grip-case-black-qrp-new",
  },
  {
    product_id: "8100012509",
    product_name: "iPhone XS Silicone Case, (PRODUCT) Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/r/mrwc2fe_a_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-silicone-case-product-red-qrp-ibox",
  },
  {
    product_id: "8100004716",
    product_name: "JBL Earphone T110BT - Black",
    product_price: 199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-black-qrp-1",
  },
  {
    product_id: "8100007857",
    product_name: "Casemate iPhone 11 Pro Barely There - Clear",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_barely_there_-_clear_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-barely-there-clear",
  },
  {
    product_id: "8100007725",
    product_name: "Casemate iPhone 11 Tough Speckled - White",
    product_price: 149000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_tough_speckled_-_white_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-tough-speckled-white",
  },
  {
    product_id: "8100008450",
    product_name: "UAG Apple iPhone 11 Pro Pathfinder - White",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-pathfinder-white-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-pathfinder-white",
  },
  {
    product_id: "IC846127185950",
    product_name: "Casemate iPhone 11 Pro Max Tough Groove - Iridescent",
    product_price: 129000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_tough_groove_-_iridescent_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-tough-groove-iridescent",
  },
  {
    product_id: "8100007731",
    product_name: "Casemate iPhone 11 Pro Max Tough Speckled - White",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_tough_speckled_white.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-tough-speckled-white",
  },
  {
    product_id: "8100008372",
    product_name: "UAG Apple iPhone 11 Pro Plasma - Ice",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-plasma-ice-1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-plasma-ice",
  },
  {
    product_id: "IC846127186810",
    product_name: "Casemate iPhone 11 Pro Max Tough - Camo",
    product_price: 129000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_tough_-_camo.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-tough-camo",
  },
  {
    product_id: "8100008451",
    product_name: "UAG Apple iPhone 11 Monarch - Black",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-monarch-black-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-monarch-black",
  },
  {
    product_id: "8100008457",
    product_name: "UAG Apple iPhone 11 Plasma - Ice",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-plasma-ice-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/uag-apple-iphone-11-plasma-ice",
  },
  {
    product_id: "8100008456",
    product_name: "UAG Apple iPhone 11 Plasma - Ash",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-plasma-ash-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/uag-apple-iphone-11-plasma-ash",
  },
  {
    product_id: "8100008462",
    product_name: "UAG Apple iPhone 11 Pro Max Monarch - Black",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-monarch-black-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-monarch-black",
  },
  {
    product_id: "8100008464",
    product_name: "UAG Apple iPhone 11 Pro Max Monarch - Crimson",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-monarch-crimson-1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-monarch-crimson",
  },
  {
    product_id: "8100008463",
    product_name: "UAG Apple iPhone 11 Pro Max Monarch - Carbon Fiber",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-monarch-carbon-1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-monarch-carbon-fiber",
  },
  {
    product_id: "8100008609",
    product_name: "UAG Apple iPhone 11 Pro Max Plasma - Ice",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-plasma-ice-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-plasma-ice",
  },
  {
    product_id: "8100008378",
    product_name: "Adidas iPhone XR Moulded - Blue",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_or_moulded_case_for_iphone_xr_fw_18_-_blue_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xr-moulded-blue-qrp",
  },
  {
    product_id: "8100008380",
    product_name: "Adidas iPhone XR Grip Case - Black",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_sp_grip_case_iphone_xr_fw18_-_black_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xr-grip-case-black-qrp",
  },
  {
    product_id: "8100012749",
    product_name: "Apple 40mm Sport Band, White",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-40mm-sport-band-white-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-white-ibox",
  },
  {
    product_id: "8100012870-IB",
    product_name: "Apple 44mm Sport Band, Black",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/t/mtpl2fe_a1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-sport-band-black-qrp-new-ibox",
  },
  {
    product_id: 8100011174,
    product_name: "Apple 40mm Sport Band, Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-40mm-sport-band-red-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-red-ibox",
  },
  {
    product_id: 8100012482,
    product_name: "iPhone Xs Leather Case, (PRODUCT) Red",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/r/mrwk2fe_a.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-xs-leather-case-product-red-qrp-ibox",
  },
  {
    product_id: 8100011042,
    product_name: "Beats Urbeats 3.0 Lightning - Coral",
    product_price: 1080000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/muhv2pa_a1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/urbeats-3-lightning-coral",
  },
  {
    product_id: 8100012582,
    product_name: "Apple Pencil 2nd Gen, White",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-pencil-2nd_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-pencil-2nd-gen-white-new",
  },
  {
    product_id: 8100010647,
    product_name: "Beats BT Headphone Studio 3 - Red",
    product_price: 5100000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/2/12_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-bt-headphone-studio-3-red",
  },
  {
    product_id: 8100006272,
    product_name: "JBL Flip 4 - Teal",
    product_price: 1199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic69252819224111.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/jbl-portable-speaker-flip-4-teal-qr",
  },
  {
    product_id: 8100006274,
    product_name: "JBL Flip 4 - Red",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-red-2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-red-qr",
  },
  {
    product_id: "8100012683-IB",
    product_name: "Apple Apple 40mm Sport Band, Pink Sand",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/t/mtpm2fe_a1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-sport-band-pink-sand-qrp-new-new-ibox",
  },
  {
    product_id: 8100006277,
    product_name: "JBL Pulse 3 - Black",
    product_price: 2199000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_pulse_3_black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-pulse-3-black-qrp",
  },
  {
    product_id: 8100006278,
    product_name: "JBL Pulse 3 - White",
    product_price: 3800000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_pulse_3_white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-pulse-3-white-new",
  },
  {
    product_id: 8100010917,
    product_name: "Beats Solo 3 Wireless - Gold",
    product_price: 4480000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats_solo_3_wireless_gold_1_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-solo-3-wireless-gold-qr",
  },
  {
    product_id: 8100012318,
    product_name: "iPhone 11 Clear Case",
    product_price: 299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-clear-case-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-clear-case-1-ibox",
  },
  {
    product_id: 8100012404,
    product_name: "iPhone 11 Silicone Case, Black",
    product_price: 299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-silicon-case-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-silicone-case-black-ibox",
  },
  {
    product_id: 8100012319,
    product_name: "iPhone 11 Pro Clear Case",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-clear-case-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-clear-case-ibox",
  },
  {
    product_id: 8100012320,
    product_name: "iPhone 11 Pro Leather Case, Black",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-leather-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-leather-case-black-ibox",
  },
  {
    product_id: 8100012390,
    product_name: "iPhone 11 Pro Silicone Case, Black",
    product_price: 299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-black-2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-silicone-case-black-ibox",
  },
  {
    product_id: 8100012383,
    product_name: "iPhone 11 Pro Max Silicone Case, Midnight Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-blue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-silicone-case-midnight-blue-ibox",
  },
  {
    product_id: 8100012384,
    product_name: "iPhone 11 Pro Max Silicone Case, Pink Sand",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-soft-pink-2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-silicone-case-pink-sand-ibox",
  },
  {
    product_id: 8100012334,
    product_name: "iPhone 11 Pro Max Leather Case, Black",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-leather-case-black-ibox",
  },
  {
    product_id: 8100012338,
    product_name: "iPhone 11 Pro Max Leather Case, Red",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-red-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-leather-case-red-ibox",
  },
  {
    product_id: 8100012377,
    product_name: "iPhone 11 Pro Max Leather Folio, Black",
    product_price: 799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-folio-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-leather-folio-black-ibox",
  },
  {
    product_id: 8100012376,
    product_name: "iPhone 11 Pro Max Leather Folio, Aubergine",
    product_price: 799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-folio-aubergine-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-leather-folio-aubergine-ibox",
  },
  {
    product_id: 8100012333,
    product_name: "iPhone 11 Pro Max Clear Case",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-clear-case-2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-clear-case-ibox",
  },
  {
    product_id: 8100008946,
    product_name: "Tucano Top Sleeve for Macbook Pro 13 Inch - Black",
    product_price: 899000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/o/top-second-skin-13_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-top-sleeve-for-macbook-pro-13-inch-black",
  },
  {
    product_id: 8100008338,
    product_name:
      "Tucano Work Out 3 Slim Bag for Macbook Pro or Notebook 13 Inch - Red",
    product_price: 899000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/w/o/work-out-3-slim-bag-laptop-13.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-work-out-3-slim-bag-for-macbook-pro-or-notebook-13-inch-red",
  },
  {
    product_id: 8100008675,
    product_name: "Tucano Loop Slim Bag for Macbook 13.3 Inch - Black",
    product_price: 649000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic80202520621151.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-loop-slim-bag-for-macbook-13-3-inch-black",
  },
  {
    product_id: 8100004496,
    product_name: "CaseStudi iPhone XS Max - Paris",
    product_price: 199500,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4897071255608.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-xr-paris-qrp",
  },
  {
    product_id: 8100003979,
    product_name: "OtterBox Symmetry Clear iPhone Xr - Clear",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/o/hotspots-700x600_1_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-xr-clear-qrp",
  },
  {
    product_id: 8100008377,
    product_name: "Adidas OR Moulded Case PU iPhone XS Max - White/Black",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas-iphone-7-8-plus-moulded-case-white-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-or-moulded-case-pu-iphone-xs-max-white-black",
  },
  {
    product_id: "8100004495-IB",
    product_name: "CaseStudi iPhone Xr - Paris",
    product_price: 189500,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casestudi1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casestudi-iphone-xr-case-paris-qrp-ib",
  },
  {
    product_id: 8100007215,
    product_name: "Spigen La Manon Calin for iPhone 11 Pro Max - Pale Pink",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/i/pic_lamanon_iphone11promax_pink1_071219141253_ll.jpg_mm.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-la-manon-calin-for-iphone-11-pro-max-pale-pink-qrp",
  },
  {
    product_id: 8100006463,
    product_name: "Anker Powerline+ Lightning 3ft - Gray",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker-powerline-lightning-mfi-certified-3ft09m-gray-a8121ha1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerlineplus-lightning-3ft-gray-qrp-1",
  },
  {
    product_id: 8100010884,
    product_name: "Beats Solo 3 Wireless - Silver",
    product_price: 4480000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats_solo_3_wireless_silver_1_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-solo-3-wireless-silver-qrp",
  },
  {
    product_id: 8100007727,
    product_name: "Casemate Rifle Paper for iPhone 11 - Happy Stripes",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/m/cmi_iphone_11r_riflepaper_happystripes_cm039376_1-min.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-rifle-paper-for-iphone-11-happy-stripes-qrp",
  },
  {
    product_id: "IC846127187893",
    product_name: "Casemate Rifle Paper for iPhone 11 Pro Max - Gorgeous Girl",
    product_price: 129000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/a/aax_1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-rifle-paper-for-iphone-11-pro-max-gorgeous-girl-qrp",
  },
  {
    product_id: 8100007336,
    product_name: "Spigen Crystal Flex for iPhone 11 Pro - Crystal Clear",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_pro_liquid_crystal_cr_04_3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-crystal-flex-for-iphone-11-pro-crystal-clear-qrp",
  },
  {
    product_id: 8100007338,
    product_name: "Spigen Slim Armor for iPhone 11 Pro - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigenb1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-pro-black-qrp",
  },
  {
    product_id: "IA8809640259166",
    product_name: "Spigen Core Armor for iPhone 11 - Matte Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_iphone_xr2_core_armor_01_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-core-armor-for-iphone-11-matte-black-qrp",
  },
  {
    product_id: 8100007328,
    product_name: "Spigen Slim Armor for iPhone 11 - Rose Gold",
    product_price: 149000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigenr1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-rose-gold-qrp-1",
  },
  {
    product_id: 8100005774,
    product_name: "iLuv iPhone XS Max Vyneer - Pink",
    product_price: 229000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/v/y/vyneer_pink_01_b3419685-7f61-4d85-a5d8-3eb03a870dd2_480x480_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iluv-iphone-xs-max-vyneer-pink",
  },
  {
    product_id: 8100008392,
    product_name: "Adidas OR Moulded Case Camo FW19 iPhone 11 - Raw Green",
    product_price: 509150,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas-or-moulded-case-camo-fw19-iphone-11-raw-green-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-or-moulded-case-camo-fw19-iphone-11-raw-green-qrp",
  },
  {
    product_id: 8100008402,
    product_name:
      "Adidas SP Protective Clear Case Small Logo FW19 iPhone 11 Pro Max - Clear",
    product_price: 599000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas-sp-protective-clear-case-small-logo-fw19-iphone-11-pro-max-clear-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-sp-protective-clear-case-small-logo-fw19-iphone-11-pro-max-clear-qrp",
  },
  {
    product_id: 8100008404,
    product_name: "Adidas SP Protective Pocket Case FW19 iPhone 11 Pro - Black",
    product_price: 509150,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas-sp-protective-pocket-case-fw19-iphone-11-pro-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-sp-protective-pocket-case-fw19-iphone-11-pro-black-qrp",
  },
  {
    product_id: 8100012321,
    product_name: "iPhone 11 Pro Leather Case, Forest Green",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-leather-case-forest-green-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-leather-case-forest-green-qrp-ibox",
  },
  {
    product_id: 8100012391,
    product_name: "iPhone 11 Pro Silicon Case, Mid Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-mid-blue-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-silicon-case-mid-blue-qrp-ibox",
  },
  {
    product_id: 8100012337,
    product_name: "iPhone 11 Pro Max Leather Case, Forest Green",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-forest-green-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-leather-case-forest-green-qrp-ibox",
  },
  {
    product_id: 8100008079,
    product_name: "Element Case Rally iPhone 11 Pro Max - Clear",
    product_price: 662150,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/r/a/rallya1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-rally-iphone-11-pro-max-clear-qrp",
  },
  {
    product_id: 8100008086,
    product_name: "Element Case Illusion iPhone 11 Pro - Black",
    product_price: 500650,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/illusiona1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-illusion-iphone-11-pro-black-qrp",
  },
  {
    product_id: 8100008087,
    product_name: "Element Case Illusion iPhone 11 - Black",
    product_price: 589000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/illusionb1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-illusion-iphone-11-black-qrp",
  },
  {
    product_id: 8100008154,
    product_name: "Element Case Illusion iPhone 11 Pro Max - Black",
    product_price: 589000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/illusionc1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-illusion-iphone-11-pro-max-black-qrp",
  },
  {
    product_id: 8100007881,
    product_name: "Gosh Koori iPhone 11 Pro Case - Clear",
    product_price: 419000,
    brand: "Gosh",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/o/gosh-koori-clear-500x450.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/gosh-iphone-11-pro-case-koori-clear-qrp",
  },
  {
    product_id: 8100008679,
    product_name: "iBacks Barvity Case For iPhone 11 - Navy",
    product_price: 391300,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/_/b_8_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-barvity-case-for-iphone-11-navy-qrp",
  },
  {
    product_id: 8100003936,
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro - Grey",
    product_price: 429000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_black.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-grey-qrp",
  },
  {
    product_id: 8100003937,
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro - Burgundy",
    product_price: 429000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_burgundy.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-burgundy-qrp",
  },
  {
    product_id: 8100003938,
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro - Black",
    product_price: 429000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_black_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-black-qrp",
  },
  {
    product_id: 8100003939,
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro Max - Grey",
    product_price: 429000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_max_grey.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-max-grey-qrp",
  },
  {
    product_id: 8100003943,
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 - Burgundy",
    product_price: 399000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_burgundy.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-burgundy-qrp",
  },
  {
    product_id: 8100003944,
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 - Black",
    product_price: 399000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_black.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-black-qrp",
  },
  {
    product_id: 8100004101,
    product_name: "LifeProof Slam iPhone 11 Pro - Black Crystal",
    product_price: 492150,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphp19-av.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-pro-black-crystal-qrp",
  },
  {
    product_id: 8100004109,
    product_name: "LifeProof Slam iPhone 11 - Black Crystal",
    product_price: 579000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphl19-av.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-black-crystal-qrp",
  },
  {
    product_id: 8100004110,
    product_name: "LifeProof Slam iPhone 11 - Junk Food",
    product_price: 492150,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphl19-0c70.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-junk-food-qrp",
  },
  {
    product_id: 8100004122,
    product_name: "LifeProof Slam iPhone 11 Pro Max - Black Crystal",
    product_price: 492150,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphp19-av_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-pro-max-black-crystal-qrp",
  },
  {
    product_id: 8100004123,
    product_name: "LifeProof Slam iPhone 11 Pro Max - Junk Food",
    product_price: 492150,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphp19-0c70.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-pro-max-junk-food-qrp",
  },
  {
    product_id: 8100004097,
    product_name: "Otterbox Commuter Series iPhone 11 Pro - Black",
    product_price: 441150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-black-2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-pro-black-qrp",
  },
  {
    product_id: 8100004099,
    product_name: "Otterbox Symmetry Clear iPhone 11 Pro - Clear",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-clear-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-pro-clear-qrp",
  },
  {
    product_id: 8100004103,
    product_name: "Otterbox Pop Symmetry iPhone 11 Pro - Black",
    product_price: 730150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-pop-symmetry-iphone-11-pro-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-pop-symmetry-iphone-11-pro-black-qrp",
  },
  {
    product_id: 8100004106,
    product_name: "Otterbox Symmetry Clear iPhone 11 - Clear",
    product_price: 594150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-clear-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-clear-qrp",
  },
  {
    product_id: 8100004107,
    product_name: "Otterbox Symmetry Clear iPhone 11 - Stardust",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-star-dust-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-stardust-qrp",
  },
  {
    product_id: 8100004108,
    product_name: "Otterbox Symmetry Series iPhone 11 - We'll Call Blue",
    product_price: 594150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-we-ll-call-blue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-we-ll-call-blue-qrp",
  },
  {
    product_id: 8100004112,
    product_name: "Otterbox Pop Symmetry iPhone 11 - Black",
    product_price: 730150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-pop-symmetry-iphone-11-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-pop-symmetry-iphone-11-black-qrp",
  },
  {
    product_id: 8100004113,
    product_name: "Otterbox Pop Symmetry iPhone 11 - Mint To Be",
    product_price: 730150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-pop-symmetry-iphone-11-mint-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-pop-symmetry-iphone-11-mint-to-be-qrp",
  },
  {
    product_id: 8100004114,
    product_name: "Otterbox Commuter Series iPhone 11 - Black",
    product_price: 519000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-black-qrp",
  },
  {
    product_id: 8100004116,
    product_name: "Otterbox Commuter Series iPhone 11 Pro Max - Black",
    product_price: 441150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-max-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-pro-max-black-qrp",
  },
  {
    product_id: 8100004117,
    product_name: "Otterbox Commuter Series iPhone 11 Pro Max - Bespoke Way",
    product_price: 441150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-max-bespoke-way-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-pro-max-bespoke-way-qrp",
  },
  {
    product_id: 8100004118,
    product_name: "Otterbox Symmetry Series iPhone 11 Pro Max - Black",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-black-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-pro-max-black-qrp",
  },
  {
    product_id: 8100004119,
    product_name: "Otterbox Symmetry Series iPhone 11 Pro Max - Risk Tiger",
    product_price: 594150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-risk-tiger-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-pro-max-risk-tiger-qrp",
  },
  {
    product_id: 8100004120,
    product_name: "Otterbox Symmetry Clear iPhone 11 Pro Max - Clear",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-clear-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-pro-max-clear-qrp",
  },
  {
    product_id: 8100004121,
    product_name:
      "Otterbox Symmetry Series iPhone 11 Pro Max - We'll Call Blue",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-weecallblue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-pro-max-we-ll-call-blue-qrp",
  },
  {
    product_id: 8100007210,
    product_name: "Spigen iPhone 11 Pro Max Slim Armor - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-11-pro-max-slim-armor-black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-11-pro-max-slim-armor-black-qr",
  },
  {
    product_id: 8100007217,
    product_name: "Spigen iPhone 11 Pro Max La Manon Classy - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_iphone_11_pro_max_la_manon_classy_-_black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-11-pro-max-la-manon-classy-black-qr",
  },
  {
    product_id: 8100007487,
    product_name: "Spigen AirPods Pro Case Tough Armor - Black",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_tough_armor_-_black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-case-tough-armor-black",
  },
  {
    product_id: 8100005981,
    product_name: "UAG AirPods Silicone Case - Black/Orange",
    product_price: 449000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_silicone_case_blackorange-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-airpods-silicone-case-olive-drab-1",
  },
  {
    product_id: 8100004593,
    product_name: "UAG AirPods Pro Silicone Case - Black",
    product_price: 499000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_pro_silicone_case-_black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-airpods-pro-silicone-case-black",
  },
  {
    product_id: 8100004594,
    product_name: "UAG AirPods Pro Silicone Case - Black/Orange",
    product_price: 499000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_pro_silicone_case-_black_orange-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-airpods-pro-silicone-case-black-orange",
  },
  {
    product_id: 8100013378,
    product_name: "Feeltek Lightning to USB-A 100cm - Black",
    product_price: 175200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100036-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-100cm-black",
  },
  {
    product_id: 8100013387,
    product_name: "Feeltek Lightning to USB-A 180cm - Gold",
    product_price: 199200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100012-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-180cm-gold",
  },
  {
    product_id: 8100013388,
    product_name: "Feeltek Lightning to USB-A 180cm - Black",
    product_price: 199200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100036-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-180cm-black",
  },
  {
    product_id: 8100013382,
    product_name: "Feeltek 8 in 1 USB-C Portable Hub - Gray",
    product_price: 1039077,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100074-1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-8-in-1-usb-c-portable-hub-gray-new",
  },
  {
    product_id: 8100013170,
    product_name: "Feeltek 11 in 1 USB-C Keyboard Hub - Gray",
    product_price: 1799000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_11-in-1_usb-c_keyboard_hub_gry__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-11-in-1-usb-c-keyboard-hub-gray-new",
  },
  {
    product_id: 8100013417,
    product_name: "Feeltek Display 2 in 1 USB-C Hub Gray",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001281.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-display-2-in-1-usb-c-hub-gray-new",
  },
  {
    product_id: 8100013419,
    product_name: "Feeltek Lightning to USB-C 120cm - Black",
    product_price: 299000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001421.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-c-120cm-black",
  },
  {
    product_id: 8100013166,
    product_name:
      "Feeltek Air Lightning to USB-C Cable 180cm Metallic + Braid - Black",
    product_price: 349000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001421_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-air-lightning-to-usb-c-cable-180cm-metallic-plus-braid-black",
  },
  {
    product_id: 8100013167,
    product_name: "Feeltek USB-C to USB-C Cable 120cm TPE - White",
    product_price: 119200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001661.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-usb-c-to-usb-c-cable-120cm-tpe-white-new",
  },
  {
    product_id: 8100013168,
    product_name: "Feeltek USB-C to USB-C Cable 200cm TPE - White",
    product_price: 179000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001661_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-usb-c-to-usb-c-cable-200cm-tpe-white-new",
  },
  {
    product_id: 8100013381,
    product_name: "Feeltek Jet Glass 7 in 2 USB-C Hub - Black",
    product_price: 1099000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_jet_glass_7_in_2_usb-c_hub_blk_0.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-jet-glass-7-in-2-usb-c-hub-black-new",
  },
  {
    product_id: 8100013380,
    product_name: "Feeltek Jet Glass 6 in 1 USB-C Hub - Black",
    product_price: 999000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_jet_glass_6_in_1_usb-c_hub_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-jet-glass-6-in-1-usb-c-hub-black-new",
  },
  {
    product_id: 8100005980,
    product_name: "UAG Apple AirPods Silicone Case - Black",
    product_price: 449000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic10185e114040c.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-airpods-silicone-case-black-promo",
  },
  {
    product_id: 8100007871,
    product_name:
      "Casemate AirPods Pro Rifle Paper Garden Party Blush with Gold Circular Ring",
    product_price: 449000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191135.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-rifle-paper-garden-party-blush-with-gold-circular-ring-promo",
  },
  {
    product_id: 8100008196,
    product_name: "Anker Soundcore 2 - Blue",
    product_price: 1550000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker_soundcore_2_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/anker-soundcore-2-blue",
  },
  {
    product_id: 8100021110,
    product_name: "Lamina Tempered Glass iPhone 11 Pro 5.8 inch 2019",
    product_price: 399000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_2_10.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-11-pro-5-8-inch-2019",
  },
  {
    product_id: 8100013383,
    product_name: "Feeltek Nano Power Bank 10000 mAh - Gray",
    product_price: 399000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471000811.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-nano-power-bank-10000-mah-gray",
  },
  {
    product_id: 8100013384,
    product_name: "Feeltek Nano Power Bank 10000 mAh - Gold",
    product_price: 399000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001731.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-nano-power-bank-10000-mah-gold",
  },
  {
    product_id: 8100013165,
    product_name: "Feeltek Omni PD Power Bank 10000 mAh - Gray",
    product_price: 599000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001041.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-omni-pd-power-bank-10000-mah-gray",
  },
  {
    product_id: 8100013416,
    product_name: "Feeltek Omni PD Power Bank 10000 mAh - Gold",
    product_price: 599000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100098.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-omni-pd-power-bank-10000-mah-gold",
  },
  {
    product_id: 8100005757,
    product_name: "Itskins 2M Hybrid Frost iPhone 11 - Transparent/ Black",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxi-hybmk-bktr-marketing-3_23.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-frost-iphone-11-transparent-black",
  },
  {
    product_id: 8100005875,
    product_name: "Itskins 2M Hybrid Clear iPhone 11 - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic48944655878261.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-clear-iphone-11-transparent",
  },
  {
    product_id: 8100005764,
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 Pro Max - Transparent/ Plain Black",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxm-hybso-pbtr-03.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-max-transparent-plain-black",
  },
  {
    product_id: 8100005886,
    product_name: "Itskins 2M Hybrid Clear iPhone 11 Pro Max - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465800871.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-clear-iphone-11-pro-max-transparent",
  },
  {
    product_id: 8100005869,
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 Pro Max - Transparent/ Khaki",
    product_price: 359100,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465489038.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-max-transparent-khaki",
  },
  {
    product_id: 8100005893,
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 Pro - Transparent/ Plain Black",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465902049.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-transparent-plain-black",
  },
  {
    product_id: 8100005890,
    product_name: "Itskins 2M Hybrid Solid iPhone 11 Pro - Transparent/ Khaki",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465875640.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-transparent-khaki",
  },
  {
    product_id: 8100005867,
    product_name:
      "Itskins 2M Hybrid Frost iPhone 11 Pro - Transparent/ Light Pink",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465453770.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-frost-iphone-11-pro-transparent-light-pink",
  },
  {
    product_id: 8100007764,
    product_name:
      "Mazer USB-C Direct Plug-in to USB3.0X2/SD/Micro SD/USB-C PD3.0 Charging - Gray",
    product_price: 799000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/1/m1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-usbc-direct-plugin-to-usb3-0x2-sd-micro-sd-usbc-pd3-0-charging-gray",
  },
  {
    product_id: 8100007877,
    product_name:
      "Mazer USB-C Direct Plug-in to HDMI4K/USB3.0X2/USB-CX2/SD/Micro SD/USB-C PD3.0 Charging - Gray",
    product_price: 1119200,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/3/m3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-usbc-direct-plugin-to-hdmi4k-usb3-0x2-usbcx2-sd-micro-sd-usbc-pd3-0-charging-gray",
  },
  {
    product_id: "ILA-TG-APIPXR11-IB",
    product_name: "Lamina Tempered Glass for iPhone XR / 11",
    product_price: 149000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_new_tg.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-11-6-1-inch-2019-ib",
  },
  {
    product_id: 8100004210,
    product_name:
      "Monocozzi Motif Apple Certified Braided USB-C to Lightning Sync and Charge Cable 100cm - Charcoal",
    product_price: 189500,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199105324.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-motif-apple-certified-braided-usb-c-to-lightning-sync-and-charge-cable-100cm-charcoal",
  },
  {
    product_id: 8100004211,
    product_name:
      "Monocozzi Motif Apple Certified Braided USB-C to Lightning Sync and Charge Cable 25cm - Charcoal",
    product_price: 174500,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199105355.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-motif-apple-certified-braided-usb-c-to-lightning-sync-and-charge-cable-25cm-charcoal",
  },
  {
    product_id: 8100004213,
    product_name:
      "Monocozzi Pattern Lab 10000 Mah PD 18W QC 3.0 Powerbank with Cable USB Type C - Abstract",
    product_price: 299500,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199105416.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-10000-mah-pd-18w-qc-30-powerbank-with-cable-usb-type-c-abstract",
  },
  {
    product_id: 8100012375,
    product_name:
      "Apple 60W MagSafe 2 Power Adapter (MacBook Pro with 13inci Retina display)",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_18_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-60w-magsafe-2-power-adapter-macbook-pro-with-13inci-retina-display-ibox",
  },
  {
    product_id: "8100010753-IB",
    product_name: "61W USB C Power Adapter",
    product_price: 1459000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61w-usb-c.1-600x600.jpeg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-61w-usb-c-power-adapter-ibox",
  },
  {
    product_id: 8100023025,
    product_name: "Apple 45W MagSafe 2 Power Adapter for MacBook Air",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/s/asasad.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-45w-magsafe-2-power-adapter-for-macbook-air-ibox",
  },
  {
    product_id: 8100012935,
    product_name: "Apple 44mm Pure Platinum/Black Nike Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_pure_platinum_black_flat_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-pure-platinum-black-nike-sport-band-regular-ibox",
  },
  {
    product_id: 8100012761,
    product_name: "40mm Pomegranate Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_pomegranate_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-pomegranate-sport-loop-ibox",
  },
  {
    product_id: 8100011176,
    product_name: "40mm Anchor Grey Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_anchor_gray_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-anchor-grey-sport-loop-ibox",
  },
  {
    product_id: 8100012687,
    product_name: "Apple 40mm Pure Platinum/Black Nike Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_pure_platinum_black_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-pure-platinum-black-nike-sport-band-regular-ibox",
  },
  {
    product_id: 8100012716,
    product_name: "Apple 40mm Black/Pink Blast Nike Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_black_pink_blast_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-black-pink-blast-nike-sport-band-regular-ibox",
  },
  {
    product_id: 8100012759,
    product_name: "40mm Pink Blast/True Berry Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_pink_blast_true_berry_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-pink-blast-true-berry-nike-sport-loop-ibox",
  },
  {
    product_id: 8100012831,
    product_name: "Apple 44mm Pine Green Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_pine_green_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-pine-green-sport-band-regular-ibox",
  },
  {
    product_id: 8100012666,
    product_name: "40mm Gold Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_gold_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-gold-milanese-loop-ibox",
  },
  {
    product_id: 8100012861,
    product_name: "Apple 44mm (PRODUCT)RED Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_product_red_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-productred-sport-band-regular-ibox",
  },
  {
    product_id: 8100012829,
    product_name: "44mm Khaki Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_khaki_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-44mm-khaki-sport-loop-ibox",
  },
  {
    product_id: 8100012938,
    product_name: "44mm Saddle Brown Leather Loop, Medium",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_saddle_brown_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-saddle-brown-leather-loop-medium-ibox",
  },
  {
    product_id: 8100012867,
    product_name: "44mm Black Leather Loop, Medium",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_black_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-black-leather-loop-medium-ibox",
  },
  {
    product_id: 8100012866,
    product_name: "44mm Black Leather Loop, Large",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_black_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-black-leather-loop-large-ibox",
  },
  {
    product_id: 8100012884,
    product_name: "44mm Gold Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_gold_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-gold-milanese-loop-ibox",
  },
  {
    product_id: 8100012762,
    product_name: "40mm Royal Pulse/Lava Glow Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_royal_pulse_lava_glow_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-royal-pulse-lava-glow-nike-sport-loop-ibox",
  },
  {
    product_id: 8100012722,
    product_name: "40mm Khaki Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_khaki_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-khaki-sport-loop-ibox",
  },
  {
    product_id: 8100012937,
    product_name: "44mm Saddle Brown Leather Loop, Large",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_saddle_brown_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-saddle-brown-leather-loop-large-ibox",
  },
  {
    product_id: 8100012717,
    product_name: "40mm Camel Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_camel_flat_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-camel-sport-loop-ibox",
  },
  {
    product_id: 8100012834,
    product_name: "44mm Royal Pulse/Lava Glow Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_royal_pulse_lava_glow_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-royal-pulse-lava-glow-nike-sport-loop-ibox",
  },
  {
    product_id: 8100012787,
    product_name: "Apple 44mm Black/Pink Blast Nike Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_black_pink_blast_flat_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-black-pink-blast-nike-sport-band-regular-ibox",
  },
  {
    product_id: 8100012705,
    product_name: "Apple USB C Digital AV Multiport Adapter",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/muf82.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-usb-c-digital-av-multiport-adapter-ibox",
  },
  {
    product_id: 8100012711,
    product_name: "USB C VGA Multiport Adapter",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/j/mj1l2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-usb-c-vga-multiport-adapter-ibox",
  },
  {
    product_id: 8100012940,
    product_name: "44mm Space Black Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_space_black_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-space-black-milanese-loop-ibox",
  },
  {
    product_id: 8100012733,
    product_name: "40mm Space Black Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_space_black_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-space-black-milanese-loop-ibox",
  },
  {
    product_id: 8100012719,
    product_name: "40mm Desert Sand/Volt Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_dessert_sand_volt_flat_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-desert-sand-volt-nike-sport-loop-ibox",
  },
  {
    product_id: 8100012788,
    product_name: "44mm Camel Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_camel_flat_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/apple-44mm-camel-sport-loop-ibox",
  },
  {
    product_id: 8100012833,
    product_name: "44mm Pomegranate Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_pomegranate_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-pomegranate-sport-loop-ibox",
  },
  {
    product_id: 8100012891,
    product_name: "44mm Meyer Lemon Leather Loop, Medium",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_meyer_lemon_flat_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-meyer-lemon-leather-loop-medium-ibox",
  },
  {
    product_id: 8100012524,
    product_name: "Leather Sleeve for 10,5inci iPad Pro, Taupe",
    product_price: 2599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/p/mpu02_av3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-leather-sleeve-for-105inci-ipad-pro-taupe-ibox",
  },
  {
    product_id: 8100012522,
    product_name: "Leather Sleeve for 10,5inci iPad Pro, Midnight Blue",
    product_price: 2599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/p/mpu22.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-leather-sleeve-for-105inci-ipad-pro-midnight-blue-ibox",
  },
  {
    product_id: 8100012521,
    product_name: "Leather Sleeve for 10,5inci iPad Pro, Black",
    product_price: 2599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/p/mpu62.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-leather-sleeve-for-105inci-ipad-pro-black-ibox",
  },
  {
    product_id: 8100012893,
    product_name: "44mm Silver Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_silver_flat_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-44mm-milanese-loop-ibox",
  },
  {
    product_id: 8100012790,
    product_name: "44mm Desert Sand/Volt Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_dessert_sand_volt_flat_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-desert-sand-volt-nike-sport-loop-ibox",
  },
  {
    product_id: "8100013053-IB",
    product_name: "Apple Watch Series 3 38mm GPS, Space Grey, Black Sport Band",
    product_price: 3699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_38mm_sport_band_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-38mm-gps-space-grey-black-sport-bandox-ib",
  },
  {
    product_id: "8100013055-IB",
    product_name: "Apple Watch Series 3 42mm GPS, Space Grey, Black Sport Band",
    product_price: 4399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_42mm_sport_band_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-3-42mm-gps-space-grey-black-sport-band-ibox",
  },
  {
    product_id: 8100021523,
    product_name: "Apple Lightning to USB Cable 1m",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-lightning-to-usb-cable-_1-m__1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-lightning-to-usb-cable-1m",
  },
  {
    product_id: 8100021535,
    product_name: "Apple USB-C To Lightning Cable 1m",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/q/mqgj2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-usbc-to-lightning-cable-1m-ibox",
  },
  {
    product_id: 8100012643,
    product_name: "Smart Keyboard Folio For iPad Pro 11",
    product_price: 3999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-smart-keyboard-folio-for-ipad-pro11-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-smart-keyboard-folio-for-ipad-pro-11-ibox",
  },
  {
    product_id: 8100012548,
    product_name: "Apple Lightning to USB Cable 2m",
    product_price: 649000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-lightning-to-usb-cable-2m-1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/apple-lightning-to-usb-cable-2m-ibox",
  },
  {
    product_id: 8100012865,
    product_name: "Apple 44mm Anthracite/Black Nike Sport Band, Reguler",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/4/44mm_nike_sport_band_anthracite-black.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-nike-sport-band-anthracite-black-ibox",
  },
  {
    product_id: "MNQN2PA/A",
    product_name: "iPhone 7 Plus 32 GB, Silver",
    product_price: 5799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-silver_4_2_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "MNQP2PA/A",
    product_name: "iPhone 7 Plus 32 GB, Gold",
    product_price: 5799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-gold_4_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "MNQQ2PA/A",
    product_name: "iPhone 7 Plus 32 GB, Rose Gold",
    product_price: 5799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-rose-gold_4_2_3_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "MQU72PA/A",
    product_name: "iPhone 7 Plus 32 GB, Jet Black",
    product_price: 5799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-jet-black_4_3_4_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "8100003313-IB",
    product_name: "iPhone 7 Plus 128 GB, Black",
    product_price: 6499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-black_4_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "8100003314-IB",
    product_name: "iPhone 7 Plus 128 GB, Silver",
    product_price: 6499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_iphone_7_plus_silver_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "8100003315-IB",
    product_name: "iPhone 7 Plus 128 GB, Rose Gold",
    product_price: 6499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-rose-gold_4_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "8100002943-IB",
    product_name: "iPhone 7 Plus 128 GB, Gold",
    product_price: 6499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-gold_4_2_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "MNQM2PA/A",
    product_name: "iPhone 7 Plus 32 GB, Black",
    product_price: 5799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-7-plus-black_4_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-7-plus-ibox-1",
  },
  {
    product_id: "MQ6H2PA/A",
    product_name: "iPhone 8 64GB, Silver",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-silver_4_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "MQ6J2PA/A",
    product_name: "iPhone 8 64GB, Gold",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-gold_4_1_2_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "MQ6G2PA/A",
    product_name: "iPhone 8 64GB, Space Grey",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-space-grey_4_2_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "MX162PA/A",
    product_name: "iPhone 8 128GB, Space Grey",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-space-grey_4_2_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "MX172PA/A",
    product_name: "iPhone 8 128GB, Silver",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-silver_4_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "MX182PA/A",
    product_name: "iPhone 8 128GB, Gold",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-gold_4_1_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "8100003318-IB",
    product_name: "iPhone 8 256GB, Space Gray",
    product_price: 11499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-space-grey_4_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "8100003319-IB",
    product_name: "iPhone 8 256GB, Silver",
    product_price: 11499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-silver_4_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "8100003320-IB",
    product_name: "iPhone 8 256GB, Gold",
    product_price: 11499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-gold_4_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "8100001289-IB",
    product_name: "iPhone 8 256GB, (PRODUCT)RED",
    product_price: 11499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-8-red_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "HAP-IP8-64G-RED-IB",
    product_name: "iPhone 8 64GB, (PRODUCT)RED",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-8-red_2_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-ibox",
  },
  {
    product_id: "MX242PA/A",
    product_name: "iPhone 8 Plus 128GB, Space Gray",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-space-grey_4_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "MX252PA/A",
    product_name: "iPhone 8 Plus 128GB, Silver",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-silver_4_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "MX262PA/A",
    product_name: "iPhone 8 Plus 128GB, Gold",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-gold_4_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "MQ8L2PA/A",
    product_name: "iPhone 8 Plus 64GB, Space Gray",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-space-grey_4_3_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "8100003321-IB",
    product_name: "iPhone 8 Plus 64GB, Silver",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-silver_4_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "8100003322-IB",
    product_name: "iPhone 8 Plus 64GB, Gold",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-gold_4_2_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "8100003324-IB",
    product_name: "iPhone 8 Plus 256GB, Silver",
    product_price: 13499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-silver_4_2_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "8100003323-IB",
    product_name: "iPhone 8 Plus 256GB, Space Grey",
    product_price: 13499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-space-grey_4_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "8100003325-IB",
    product_name: "iPhone 8 Plus 256GB, Gold",
    product_price: 13499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-8-plus-gold_4_1_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-8-plus-ibox",
  },
  {
    product_id: "8100001188-IB",
    product_name: "iPhone 11 Pro 64GB, Space Grey",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001189-IB",
    product_name: "iPhone 11 Pro 64GB, Silver",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_silver_new_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001190-IB",
    product_name: "iPhone 11 Pro 64GB, Gold",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_gold_new_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001191-IB",
    product_name: "iPhone 11 Pro 64GB, Midnight Green",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_midnight_green_new_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001192-IB",
    product_name: "iPhone 11 Pro 256GB, Space Grey",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001193-IB",
    product_name: "iPhone 11 Pro 256GB, Silver",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_silver_new_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001194-IB",
    product_name: "iPhone 11 Pro 256GB, Gold",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_gold_new_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001196-IB",
    product_name: "iPhone 11 Pro 512GB, Space Grey",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001195-IB",
    product_name: "iPhone 11 Pro 256GB, Midnight Green",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_midnight_green_new_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001197-IB",
    product_name: "iPhone 11 Pro 512GB, Silver",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_silver_new_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001669-IB",
    product_name: "iPhone 11 Pro 512GB, Gold",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_gold_new_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001198-IB",
    product_name: "iPhone 11 Pro 512GB, Midnight Green",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_midnight_green_new_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-ibox-1",
  },
  {
    product_id: "8100001149-IB",
    product_name: "iPhone 11 Pro Max 512GB, Midnight Green",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_midnight_green_new_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001109-IB",
    product_name: "iPhone 11 Pro Max 512GB, Gold",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_gold_new_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001107-IB",
    product_name: "iPhone 11 Pro Max 512GB, Space Grey",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_space_grey_new_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001106-IB",
    product_name: "iPhone 11 Pro Max 256GB, Midnight Green",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_midnight_green_new_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001105-IB",
    product_name: "iPhone 11 Pro Max 256GB, Gold",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_gold_new_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001104-IB",
    product_name: "iPhone 11 Pro Max 256GB, Silver",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_silver_new_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001103-IB",
    product_name: "iPhone 11 Pro Max 256GB, Space Grey",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_space_grey_new_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001102-IB",
    product_name: "iPhone 11 Pro Max 64GB, Midnight Green",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_midnight_green_new_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001101-IB",
    product_name: "iPhone 11 Pro Max 64GB, Gold",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_gold_new_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001100-IB",
    product_name: "iPhone 11 Pro Max 64GB, Silver",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_silver_new_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001099-IB",
    product_name: "iPhone 11 Pro Max 64GB, Space Grey",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_space_grey_new_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001108-IB",
    product_name: "iPhone 11 Pro Max 512GB, Silver",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_max_silver_new_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-pro-max-ibox-1",
  },
  {
    product_id: "8100001086-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi + Cellular 128GB, Gold",
    product_price: 9599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_gold_1_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001087-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi + Cellular 128GB, Silver",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_silver_1_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001088-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi + Cellular 128GB, Space Gray",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_spacegray_1_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "MW6D2PA/A",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi + Cellular 32GB, Gold",
    product_price: 6999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_gold_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001084-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi + Cellular 32GB, Silver",
    product_price: 6999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_silver_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "MW6A2PA/A",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi + Cellular 32GB, Space Gray",
    product_price: 6999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_spacegray_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001080-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi 128GB, Gold",
    product_price: 8299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_gold_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001081-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi 128GB, Silver",
    product_price: 8299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_silver_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001082-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi 128GB, Space Gray",
    product_price: 8299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_spacegray_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001077-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi 32GB, Gold",
    product_price: 5699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_gold_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001078-IB",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi 32GB, Silver",
    product_price: 5699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_silver_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "MW742PA/A",
    product_name: "iPad (Gen 7) 10,2 inci, Wi-Fi 32GB, Space Gray",
    product_price: 5699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_ipad_gen7_wifi_spacegray_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-7-ibox",
  },
  {
    product_id: "8100001121-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi + Cellular 256 GB, Silver",
    product_price: 15799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-_-cellular-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001122-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi + Cellular 256GB, Gold",
    product_price: 15799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-_-cellular-gold_2-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001120-IB",
    product_name:
      "iPad Air (Gen 3) 10,5 inci, Wi-Fi + Cellular 256GB, Space Gray",
    product_price: 15799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-_-cellular-space-gray_2-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "MV0F2PA/A",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi + Cellular 64 GB, Gold",
    product_price: 12799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-_-cellular-gold_2-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001118-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi + Cellular 64 GB, Silver",
    product_price: 12799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-_-cellular-silver-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "MV0D2PA/A",
    product_name:
      "iPad Air (Gen 3) 10,5 inci, Wi-Fi + Cellular 64GB, Space Gray",
    product_price: 12799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-_-cellular-space-gray_2-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001116-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi 256GB, Gold",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-gold_2-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001096-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi 256GB, Silver",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001095-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi 256GB, Space Gray",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-space-gray_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001727-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi 64GB, Gold",
    product_price: 10299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-gold_2-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001094-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi 64GB, Silver",
    product_price: 10299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-silver-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001093-IB",
    product_name: "iPad Air (Gen 3) 10,5 inci, Wi-Fi 64GB, Space Gray",
    product_price: 10299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-3-wi-fi-space-gray_2_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-air-ibox",
  },
  {
    product_id: "8100001141-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi + Cellular 256 GB, Gold",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-_-cellular-gold_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001140-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi + Cellular 256 GB, Silver",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-_-cellular-silver_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001794-IB",
    product_name:
      "iPad mini (Gen 5) 7,9 inci, Wi-Fi + Cellular 256 GB, Space Gray",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-_-cellular-space-gray_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001139-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi + Cellular 64 GB, Gold",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-_-cellular-gold_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001129-IB",
    product_name:
      "iPad mini (Gen 5) 7,9 inci, Wi-Fi + Cellular 64 GB, Space Gray",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-_-cellular-space-gray_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001130-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi + Cellular 64 GB, Silver",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-_-cellular-silver_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001128-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi 256GB, Gold",
    product_price: 10699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-gold_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001127-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi 256GB, Silver",
    product_price: 10699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-silver.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001126-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi 256GB, Space Gray",
    product_price: 10699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-space-gray_4_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001125-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi 64GB, Gold",
    product_price: 7699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-gold_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001124-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi 64GB, Silver",
    product_price: 7699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "8100001123-IB",
    product_name: "iPad mini (Gen 5) 7,9 inci, Wi-Fi 64GB, Space Gray",
    product_price: 7699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-mini-5-wi-fi-space-gray_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-5-ibox",
  },
  {
    product_id: "MU222PA/A",
    product_name: "iPad Pro 11 inci, Wi-Fi + Cellular 1TB, Silver",
    product_price: 28999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MU1V2PA/A",
    product_name: "iPad Pro 11 inci, Wi-Fi + Cellular 1TB, Space Grey",
    product_price: 28999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001162-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi + Cellular 256GB, Silver",
    product_price: 17499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001534-IB",
    product_name:
      "iPad Pro (Gen 1) 11 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 17499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MU1F2PA/A",
    product_name:
      "iPad Pro (Gen 1) 11 inci, Wi-Fi + Cellular 512GB, Space Grey",
    product_price: 22199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001533-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi + Cellular 64GB, Silver",
    product_price: 15599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001528-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 256GB, Silver",
    product_price: 15499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001527-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 256GB, Space Grey",
    product_price: 15499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001529-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 512GB, Space Grey",
    product_price: 19699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001530-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 512GB, Silver",
    product_price: 19699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001161-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi + Cellular 64GB, Space Grey",
    product_price: 15599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001532-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 1TB, Silver",
    product_price: 25999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_5_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001531-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 1TB, Space Grey",
    product_price: 22199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_9.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001525-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 64GB, Space Grey",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001526-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi 64GB, Silver",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001535-IB",
    product_name: "iPad Pro (Gen 1) 11 inci, Wi-Fi + Cellular 512GB, Silver",
    product_price: 22199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001536-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 64GB, Space Grey",
    product_price: 13499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_8.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001537-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 64GB, Silver",
    product_price: 13499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_8.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MTFL2PA/A",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 256GB, Space Grey",
    product_price: 19299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MTFN2PA/A",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 256GB, Silver",
    product_price: 19299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001538-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 512GB, Space Grey",
    product_price: 18199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MTFQ2PA/A",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 512GB, Silver",
    product_price: 18199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001540-IB",
    product_name:
      "iPad Pro (Gen 3) 12,9 inci, Wi-Fi + Cellular 64GB, Space Grey",
    product_price: 17799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001792-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi + Cellular 64GB, Silver",
    product_price: 19299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001541-IB",
    product_name:
      "iPad Pro (Gen 3) 12,9 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 22099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001703-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi + Cellular 256GB, Silver",
    product_price: 22099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001110-IB",
    product_name:
      "iPad Pro (Gen 3) 12,9 inci, Wi-Fi + Cellular 512GB, Space Grey",
    product_price: 25799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001793-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi + Cellular 512GB, Silver",
    product_price: 25799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "8100001539-IB",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 1TB, Space Grey",
    product_price: 29499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/_/1_7_1_4_1-1_7_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MTFT2PA/A",
    product_name: "iPad Pro (Gen 3) 12,9 inci, Wi-Fi 1TB, Silver",
    product_price: 29499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_1_1_6_1-1_7_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-3-ibox",
  },
  {
    product_id: "MQAC2PA/A",
    product_name: "iPhone X 64GB, Space Grey",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-x-space-grey_2_3_4_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-x-ibox-1",
  },
  {
    product_id: "8100003360-IB",
    product_name: "iPhone X 64GB, Silver",
    product_price: 6000000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-x-silver_3_3_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-x-ibox-1",
  },
  {
    product_id: "MQAF2PA/A",
    product_name: "iPhone X 256GB, Space Grey",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-x-space-grey_2_3_3_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-x-ibox-1",
  },
  {
    product_id: "8100003362-IB",
    product_name: "iPhone X 256GB, Silver",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-x-silver_3_2_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-x-ibox-1",
  },
  {
    product_id: "8100001506-IB",
    product_name: "iPad Pro 10,5 Inci Wi-Fi Cell 64GB, Gold",
    product_price: 8999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-gen-2-gold.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-2-ibox",
  },
  {
    product_id: "MQF22PA/A",
    product_name: "iPad Pro 10,5 Inci Wi-Fi Cell 64GB, Rose Gold",
    product_price: 9999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-gen-2-rose-gold.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-2-ibox",
  },
  {
    product_id: "8100001508-IB",
    product_name: "iPad Pro 10,5 inci, Wi-Fi + Cellular 64GB, Silver",
    product_price: 11199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/n/e/new_ipad_pro_10.5-in_wi-fi_cell_64gb_silver.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-2-ibox",
  },
  {
    product_id: "8100002699-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 1TB, Silver",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002698-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 1TB, Space Grey",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002754-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 128GB, Space Grey",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002755-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 128GB, Silver",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100001221-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 256GB, Space Grey",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002695-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 256GB, Silver",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002696-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 512GB, Space Grey",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002697-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi 512GB, Silver",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002686-IB",
    product_name:
      "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 128GB, Space Grey",
    product_price: 14499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002687-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 128GB, Silver",
    product_price: 14499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002700-IB",
    product_name:
      "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 16499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002701-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 256GB, Silver",
    product_price: 16499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_5_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002702-IB",
    product_name:
      "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 512GB, Space Grey",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002745-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 512GB, Silver",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002746-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 1TB, Space Grey",
    product_price: 26499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-space-grey-1_1_1_2_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002747-IB",
    product_name: "iPad Pro (Gen 2) 11 inci, Wi-Fi + Cellular 1TB, Silver",
    product_price: 26499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-ipad-pro-2020-wifi-only-silver-1_1_3_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002688-IB",
    product_name:
      "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 128GB, Space Grey",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002689-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 128GB, Silver",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002748-IB",
    product_name:
      "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002749-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 256GB, Silver",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002750-IB",
    product_name:
      "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 512GB, Space Grey",
    product_price: 24499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002751-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 512GB, Silver",
    product_price: 24499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002752-IB",
    product_name:
      "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 1TB, Space Grey",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1_1_1_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002753-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi + Cellular 1TB, Silver",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002756-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 128GB, Space Grey",
    product_price: 15999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002685-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 128GB, Silver",
    product_price: 15999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100001220-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 256GB, Space Grey",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002690-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 256GB, Silver",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002691-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 512GB, Space Grey",
    product_price: 21499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002692-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 512GB, Silver",
    product_price: 21499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002693-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 1TB, Space Grey",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-spacegray-202003_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100002694-IB",
    product_name: "iPad Pro (Gen 4) 12,9 inci, Wi-Fi 1TB, Silver",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-pro-12-select-wifi-silver-202003_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-4-ibox",
  },
  {
    product_id: "8100001298-IB",
    product_name:
      "MacBook Air (13.3inci, 2017) 1.8GHz, 8GB RAM, 128GB SSD, Silver",
    product_price: 12499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2017_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-13-inch-2017-ibox",
  },
  {
    product_id: "8100001821-IB",
    product_name:
      "MacBook Air 13.3inci, 1.6GHz, 8GB RAM, 256GB SSD, Space Grey",
    product_price: 16499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2019-space-grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2019-ibox",
  },
  {
    product_id: "8100019405-IB",
    product_name: "MacBook Air 13.3inci, 1.6GHz, 8GB RAM, 256GB SSD, Silver",
    product_price: 16499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2019-silver_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2019-ibox",
  },
  {
    product_id: "8100001713-IB",
    product_name: "MacBook Air 13.3inci, 1.6GHz, 8GB RAM, 256GB SSD, Gold",
    product_price: 16499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2019-gold_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2019-ibox",
  },
  {
    product_id: "8100019409-IB",
    product_name:
      "MacBook Air 13.3inci, 1.6GHz, 8GB RAM, 128GB SSD, Space Grey",
    product_price: 15099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2019-space-grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2019-ibox",
  },
  {
    product_id: "8100019404-IB",
    product_name: "MacBook Air 13.3inci, 1.6GHz, 8GB RAM, 128GB SSD, Silver",
    product_price: 15099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2019-silver_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2019-ibox",
  },
  {
    product_id: "8100001712-IB",
    product_name: "MacBook Air 13.3inci, 1.6GHz, 8GB RAM, 128GB SSD, Gold",
    product_price: 15099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-air-2019-gold.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2019-ibox",
  },
  {
    product_id: "8100001463-IB",
    product_name:
      "MacBook Air (Retina, 13.3inci, 2020) 1.1GHZ, 8GB RAM, 256GB SSD, Space Grey",
    product_price: 15999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_space_gay_1_1-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2020-ibox",
  },
  {
    product_id: "8100001464-IB",
    product_name:
      "MacBook Air (Retina, 13.3inci, 2020) 1.1GHZ, 8GB RAM, 256GB SSD, Silver",
    product_price: 16599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_silver_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2020-ibox",
  },
  {
    product_id: "8100001466-IB",
    product_name:
      "MacBook Air (Retina, 13.3inci, 2020) 1.1GHZ, 8GB RAM, 512GB SSD, Space Grey",
    product_price: 21799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_space_gay_1_1-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2020-ibox",
  },
  {
    product_id: "8100001467-IB",
    product_name:
      "MacBook Air (Retina, 13.3inci, 2020) 1.1GHZ, 8GB RAM, 512GB SSD, Silver",
    product_price: 21799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_silver_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2020-ibox",
  },
  {
    product_id: "8100001465-IB",
    product_name:
      "MacBook Air (Retina, 13.3inci, 2020) 1.1GHZ, 8GB RAM, 256GB SSD, Gold",
    product_price: 16599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_gold_1_1-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2020-ibox",
  },
  {
    product_id: "8100001468-IB",
    product_name:
      "MacBook Air (Retina, 13.3inci, 2020) 1.1GHZ, 8GB RAM, 512GB SSD, Gold",
    product_price: 21799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_gold_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-macbook-air-2020-ibox",
  },
  {
    product_id: "8100001709-IB",
    product_name:
      "MacBook Pro 13.3inci, 1.4GHz, 8GB RAM, 128GB SSD, Space Grey",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-13-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001710-IB",
    product_name: "MacBook Pro 13.3inci, 1.4GHz, 8GB RAM, 128GB SSD, Silver",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-13-space-gray-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001711-IB",
    product_name:
      "MacBook Pro 13.3inci, 1.4GHz, 8GB RAM, 256GB SSD, Space Grey",
    product_price: 24299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-13-silver-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "MUHR2ID/A",
    product_name: "MacBook Pro 13.3inci, 1.4GHz, 8GB RAM, 256GB SSD, Silver",
    product_price: 24299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-13-space-gray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100004077-IB",
    product_name: "Monocozzi Lucid Folio iPad Pro 12.9  - Charcoal",
    product_price: 699000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-2017-lucid_foilo-ipad_pro12.9_-black-01_65679b91-1062-42cf-808e-0c6d85812a80_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-folio-ipad-pro-12-9-charcoal-ib",
  },
  {
    product_id: "8100004093-IB",
    product_name: "Monocozzi Lucid Slim iPhone Xs Max - White",
    product_price: 329000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-iphone6.5-white01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-xs-max-white-ib",
  },
  {
    product_id: "8100016548-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell for MacBook 12 - Black",
    product_price: 119800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/item-monocozzi-case-macbook-12inc-black-matte.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-for-macbook-12-black-ib",
  },
  {
    product_id: "8100004220-IB",
    product_name:
      "Monocozzi Pattern Lab Soft TPU Bumper Cover for iPhone 11 Pro - Floral",
    product_price: 349000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_pattern_lab_soft_tpu_bumper_cover_for_iphone_11_pro_floral-1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-soft-tpu-bumper-cover-for-iphone-11-pro-floral-ib",
  },
  {
    product_id: "8100008833-IB",
    product_name: "Caseology iPhone Xs Max Vault Series - Black",
    product_price: 264500,
    brand: "Caseology",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81oce7awmdl._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/caseology-iphone-xs-max-vault-series-black-ib",
  },
  {
    product_id: "8100008718-IB",
    product_name: "Caseology iPhone Xs Skyfall Series - Gold",
    product_price: 239500,
    brand: "Caseology",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81c3wm_hdyl._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/caseology-iphone-xs-skyfall-series-gold-ib",
  },
  {
    product_id: "8100005636-IB",
    product_name: "Nmax Mix and Match Slipcase Series iPhone X - Black",
    product_price: 803000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/nmax-mix-and-match-slipcase-series-iphone-x-black-ib",
  },
  {
    product_id: "8100008042-IB",
    product_name: "UNIQ Clouteigo  for iPhone X - Blue",
    product_price: 379000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_clouteigo_for_iphone_x_-_blue.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-clouteigo-for-iphone-x-blue-ib",
  },
  {
    product_id: "8100008122-IB",
    product_name: "UNIQ Glacier Frost Xtreme for iPhone X - Silver",
    product_price: 329000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_glacier_frost_xtreme_for_iphone_x_-_silver.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-glacier-frost-xtreme-for-iphone-x-silver-ib",
  },
  {
    product_id: "8100008137-IB",
    product_name: "UNIQ iPhone Xs Max Valencia Clear - Titanium Silver",
    product_price: 399000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_iphone_xs_max_valencia_clear_-_titanium_silver.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-iphone-xs-max-valencia-clear-titanium-silver-ib",
  },
  {
    product_id: "8100016345-IB",
    product_name: "UNIQ Outfitter iPad Pro(New) - Terre Nude Beige",
    product_price: 799000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/n/i/niq_outfitter_ipad_pro_new_-_terre_nude_beige.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-outfitter-ipad-pronew-terre-nude-beige-ib",
  },
  {
    product_id: "8100003797-IB",
    product_name:
      "RAVPower 60W 5-Port USB Desktop Charge With USB-C PD (RP-PC059)",
    product_price: 424500,
    brand: "RAVPower",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51hq0u0vkvl._ac_sl1000_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ravpower-60w-5port-usb-desktop-charge-with-usbc-pd-rppc059-ib",
  },
  {
    product_id: "8100003798-IB",
    product_name: "RAVPower Lightning Cable Charge and Sync 0.9m (RP-CB019)",
    product_price: 199500,
    brand: "RAVPower",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_6_672x672.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ravpower-lightning-cable-charge-and-sync-0-9m-rpcb019-ib",
  },
  {
    product_id: "8100004336-IB",
    product_name: "Switcheasy Crush for Iphone X - Ultra Black",
    product_price: 299000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4897017144775.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-crush-for-iphone-x-ultra-black-ib",
  },
  {
    product_id: "8100004782-IB",
    product_name: "Switcheasy Crush for iPhone Xs Max - Ultra Black",
    product_price: 349000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/7/5796ecca6c59401b9d5a53ed8b58022e.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-crush-for-iphone-xs-max-ultra-black-ib",
  },
  {
    product_id: "8100004780-IB",
    product_name: "Switcheasy Crush for iPhone Xs/X - Ultra Black",
    product_price: 349000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/f/dfff.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-crush-for-iphone-xs-x-ultra-black-ib",
  },
  {
    product_id: "8100004784-IB",
    product_name: "Switcheasy Flash Luscious PC+TPU for iPhone XR - Rose Gold",
    product_price: 449000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/d/6d9627f9df764b43a047782b63e9e8ef.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-flash-luscious-pcplustpu-for-iphone-xr-rose-gold-ib",
  },
  {
    product_id: "8100004342-IB",
    product_name: "SwitchEasy Glass for iPhone X - Black",
    product_price: 449000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/3/d/3ddd00c97f1b43c19723f1da538d70e2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-glass-for-iphone-x-black-ib",
  },
  {
    product_id: "8100004343-IB",
    product_name: "SwitchEasy Glass for iPhone X - White",
    product_price: 449000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/3/1/31983d56c5894ca5b780c2eb85164bb5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-glass-for-iphone-x-white-ib",
  },
  {
    product_id: "8100004340-IB",
    product_name: "SwitchEasy iGlass for iPhone X - Black",
    product_price: 499000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/c/9c9afd047f424f26ab11c003856fd403_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-iglass-for-iphone-x-black-ib",
  },
  {
    product_id: "8100004787-IB",
    product_name: "Switcheasy iGlass for iPhone Xs Max - Black",
    product_price: 599000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/d/bd48c09634784b778f1226d4eb843ccb.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-iglass-for-iphone-xs-max-black-ib",
  },
  {
    product_id: "8100004786-IB",
    product_name: "Switcheasy iGlass for iPhone Xs/X - Black",
    product_price: 599000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/c/9c9afd047f424f26ab11c003856fd403.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-iglass-for-iphone-xs-x-black-ib",
  },
  {
    product_id: "8100004789-IB",
    product_name: "Switcheasy Starfield for iPhone Xs Max - Ultra Clear",
    product_price: 399000,
    brand: "Switcheasy",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/0/9036beda604a4cb0bc5ed7f2e0225723.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/switcheasy-starfield-for-iphone-xs-max-ultra-clear-ib",
  },
  {
    product_id: 8100003990,
    product_name: "OtterBox Statement iPhone Xs Max - Lucent Storm",
    product_price: 799000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxsmax-sta-lucentstorm-b.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterboax-statement-iphone-xs-max-lucent-storm-ibox",
  },
  {
    product_id: "8100008073-IB",
    product_name: "STM Dux MacBook Air 13 Retina - Black",
    product_price: 959000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm-dux-2018-macbook-air-13-frontangle.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-dux-macbook-air-13-retina-black-ib",
  },
  {
    product_id: "8100008070-IB",
    product_name: "STM Able Cable USB-C to USB-C (1.5m) - Gray",
    product_price: 499000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61dhonbp2pl._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-able-cable-usbc-to-usbc-1-5m-gray-ib",
  },
  {
    product_id: "8100008255-IB",
    product_name: "STM Blazer (13inch) - Black",
    product_price: 849000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81ra7w0tu3l._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-blazer-13inch-black-ib",
  },
  {
    product_id: "8100008256-IB",
    product_name: "STM Blazer (13inch) - Granite Grey",
    product_price: 849000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81axk7lepql._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-blazer-13inch-granite-grey-ib",
  },
  {
    product_id: "MNET2ZA-A",
    product_name: "Beats Solo3 Wireless Headphones - Rose Gold",
    product_price: 4480000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51pbyjvsxsl._ac_sl1000_.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-rose-gold-ibox",
  },
  {
    product_id: "MNEQ2ZA-A",
    product_name: "Beats Solo3 Wireless Headphones - Silver",
    product_price: 4480000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51liwulu7cl._ac_sl1000_.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-silver-ibox",
  },
  {
    product_id: "MNER2ZA-A",
    product_name: "Beats Solo3 Wireless Headphones - Gold",
    product_price: 4480000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/1/71c3puhb_2l._ac_sl1500_.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-gold-ibox",
  },
  {
    product_id: "MP582ZA-A",
    product_name: "Beats Solo3 Wireless Headphones - Black",
    product_price: 4480000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51qxa-98q_l._ac_sl1000_.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-black-ibox",
  },
  {
    product_id: 8100011047,
    product_name: "urBeats3 Earphones with Lightning Connector - Black",
    product_price: 1600000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61i8ck6nqml._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/urbeats3-earphones-with-lightning-connector-black-ibox",
  },
  {
    product_id: 8100011048,
    product_name: "urBeats3 Earphones with Lightning Connector - Matte Gold",
    product_price: 1600000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/-/s-l1600.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/urbeats3-earphones-with-lightning-connector-matte-gold-ibox",
  },
  {
    product_id: "8100004508-IB",
    product_name: "CaseStudi iPad 12.9 with Pencil Slot - Black",
    product_price: 636300,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/black_11_back_80105fbc-f632-4e90-90e7-0d58bdf7cd7d_2048x2048.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casestudi-ipad-12-9-with-pencil-slot-black-ib",
  },
  {
    product_id: "8100013813-IB",
    product_name: "CaseStudi iphone 8 Plus Case - Kind of Blue",
    product_price: 259000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/blue_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casestudi-iphone-8-plus-case-kind-of-blue-ib",
  },
  {
    product_id: "8100013814-IB",
    product_name: "CaseStudi iPhone 8P Case - Military Tiger",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/i/military_green_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casestudi-iphone-8p-case-military-tiger-ib",
  },
  {
    product_id: 8100008149,
    product_name: "iBacks Acta Carbon for iPhone 7 Plus - Navy",
    product_price: 174500,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/n/a/navy_3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-acta-carbon-for-iphone-7-plus-navy-ibox",
  },
  {
    product_id: 8100008661,
    product_name: "iBacks Aurora Glass Case for iPhone X - Black",
    product_price: 399500,
    brand: "",
    product_image_url: "https://cdn.eraspace.com/pub/media/catalog/product",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-aurora-glass-case-for-iphone-x-black-ibox",
  },
  {
    product_id: 8100008662,
    product_name: "iBacks Aurora Glass Case for iPhone X - Silver",
    product_price: 399500,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/2/4/24619116_f1d510ff-8eef-4852-9329-c81c35164650_800_800.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-aurora-glass-case-for-iphone-x-silver-ibox",
  },
  {
    product_id: 8100005524,
    product_name: "iBacks Castell for iPhone X - Gold",
    product_price: 274500,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/3/b/3b.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-castell-for-iphone-x-gold-ibox",
  },
  {
    product_id: 8100008677,
    product_name: "iBacks Monarch for iPhone XR - Dark Grey",
    product_price: 264500,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/c/scs.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-monarch-for-iphone-xr-dark-grey-ibox",
  },
  {
    product_id: 8100008676,
    product_name: "iBacks Monarch for iPhone XR - Navy",
    product_price: 264500,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/w/d/wdw.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-monarch-for-iphone-xr-navy-ibox",
  },
  {
    product_id: 8100008259,
    product_name:
      "Incase Hardshell Case for Macbook Air 13inch Retina Display Dots - Clear",
    product_price: 799000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/n/inmb2006170-clr_incase_macbook13inretinadisplay_hardshellcase_c.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/incase-hardshell-case-for-macbook-air-13inch-retina-display-dots-clear-ibox",
  },
  {
    product_id: "8100003812-IB",
    product_name: "intelliARMOR Lynkhub Pro 3-in-1 USB C Hub - Space Gray",
    product_price: 699000,
    brand: "intelliARMOR",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/n/intelliarmor-ucpro-1-500x450.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/intelliarmor-lynkhub-pro-3in1-usb-c-hub-space-gray-ib",
  },
  {
    product_id: "8100005885-IB",
    product_name: "ITSkins 3M Supreme Frost iPhone 11  - Grey Black",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxi-sprfr-gybk-front.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-3m-supreme-frost-iphone-11-grey-black-ib",
  },
  {
    product_id: "8100005994-IB",
    product_name: "ITSkins 3M Supreme Frost iPhone 11 Pro  - Grey Black",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxe-sprfr-gybk-front.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-3m-supreme-frost-iphone-11-pro-grey-black-ib",
  },
  {
    product_id: "8100005884-IB",
    product_name: "ITSkins Hybrid Edge (Venum) for iPhone XS Max - Black Mat",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxp-vnrld-bkma-fornt.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-hybrid-edge-venum-for-iphone-xs-max-black-mat-ib",
  },
  {
    product_id: "8100005772-IB",
    product_name: "ITSkins Hybrid Frost (MKII) for iPhone XR - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/ap61-hybmk-trsp-fornt.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-hybrid-frost-mkii-for-iphone-xr-transparent-ib",
  },
  {
    product_id: "8100005767-IB",
    product_name: "ITSkins Hybrid Frost (MKII) for iPhone XS Max - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxp-hybmk-trsp-fornt.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-hybrid-frost-mkii-for-iphone-xs-max-transparent-ib",
  },
  {
    product_id: "8100005765-IB",
    product_name: "ITSkins Hybrid Frost (MKII) for iPhone XS/X - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/5/1542164444.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-hybrid-frost-mkii-for-iphone-xs-x-transparent-ib",
  },
  {
    product_id: "8100005872-IB",
    product_name: "ITSkins Spectrum Clear for iPhone XR - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/5/1541586167_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-spectrum-clear-for-iphone-xr-transparent-ib",
  },
  {
    product_id: "8100005768-IB",
    product_name: "ITSkins Spectrum Clear for iPhone XS/X - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/aphx-specm-trsp-fornt.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-spectrum-clear-for-iphone-xs-x-transparent-ib",
  },
  {
    product_id: "8100006003-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case iPhone Xs Max - Green",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/l/all.637_2048x.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-iphone-xs-max-green-ib",
  },
  {
    product_id: "8100015574-IB",
    product_name:
      "Kajsa Ninja Collection Wood Pattern iPhone X Back Case - Dark Brown",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/v/c/vc.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-ninja-collection-wood-pattern-iphone-x-back-case-dark-brown-ib",
  },
  {
    product_id: "8100014925-IB",
    product_name:
      "Kajsa Outdoor Collection Wood Pattern iPhone X Back Case - Grey",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/s/as_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-outdoor-collection-wood-pattern-iphone-x-back-case-grey-ib",
  },
  {
    product_id: "8100014927-IB",
    product_name:
      "Kajsa Vintage Collection Genuine Leather iPhone X Back Case - Black",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/x/_/x.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-vintage-collection-genuine-leather-iphone-x-back-case-black-ib",
  },
  {
    product_id: "8100004558-IB",
    product_name:
      "Kate Spade New York Slim Sleeve for 13inch- Reverse Hollyhock Pale Vellum",
    product_price: 899000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61rvaq5sbtl._ac_sl1000_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-slim-sleeve-for-13inch-reverse-hollyhock-pale-vellum-ib",
  },
  {
    product_id: "8100006360-IB",
    product_name: "Micropack Car Charger Dual Port - Black (MCC-236PD-BK)",
    product_price: 460000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/c/mcc-236pdrev-506x506x_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-car-charger-dual-port-black-mcc236pdbk-ib",
  },
  {
    product_id: "IA79G-05066-IB",
    product_name: "Microsoft Office Home and Student 2019 (1 Mac)",
    product_price: 1799000,
    brand: "Microsoft",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/m/hmj42.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/microsoft-office-home-and-student-2019-1-mac-ib",
  },
  {
    product_id: "IC4897021599714-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell Case for MacBook Air 11 - Black",
    product_price: 109800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_lucid_translucent_hard_shell_case_for_macbook_air_11_-_black.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-case-for-macbook-air-11-black-ib",
  },
  {
    product_id: "8100004218-IB",
    product_name:
      "Monocozzi Lucid Acrylic Hybrid TPU Bumper iPhone 11 Pro Max - Charcoal",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-lucid-iphone19_6.5_cha_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-acrylic-hybrid-tpu-bumper-iphone-11-pro-max-charcoal-ib",
  },
  {
    product_id: "8100004089-IB",
    product_name: "Monocozzi Lucid Folio iPad 2018 9.7- Charcoal",
    product_price: 549000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/r/grey01_19b94c48-ca06-41d1-875c-32157dbec768.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-folio-ipad-2018-9-7-charcoal-ib",
  },
  {
    product_id: "8100004090-IB",
    product_name: "Monocozzi Lucid Folio iPad 2018 9.7- Tan",
    product_price: 549000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/r/brown01_149ed497-129f-4181-a954-cffe688393a9_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-folio-ipad-2018-9-7-tan-ib",
  },
  {
    product_id: 8100015425,
    product_name: "Monocozzi Lucid folio iPad Air 3 / iPad Pro 9.7 inch - Tan",
    product_price: 109800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/r/brown01_149ed497-129f-4181-a954-cffe688393a9_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-folio-ipad-air-3-ipad-pro-9-7-inch-tan-ibox",
  },
  {
    product_id: "8100001510-IB",
    product_name:
      "MacBook Pro 13.3inci, 2.4GHz, 8GB RAM, 256GB SSD, Space Grey",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-4port-space-gray-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-empat-port-thunderbolt-3-ibox",
  },
  {
    product_id: "MV992ID/A",
    product_name: "MacBook Pro 13.3inci, 2.4GHz, 8GB RAM, 256GB SSD, Silver",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-4port-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-empat-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001511-IB",
    product_name:
      "MacBook Pro 13.3inci, 2.4GHz, 8GB RAM, 512GB SSD, Space Grey",
    product_price: 32599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-4port-space-gray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-empat-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001512-IB",
    product_name: "MacBook Pro 13.3inci, 2.4GHz, 8GB RAM, 512GB SSD, Silver",
    product_price: 32599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-macbook-pro-4port-silver-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2019-empat-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001089-IB",
    product_name:
      "MacBook Pro (16 inci, 2019) 2.6GHz, 16GB RAM, 512GB SSD, Space Grey",
    product_price: 37299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-16-inch-space-gray-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-16-inci-ibox",
  },
  {
    product_id: "8100001090-IB",
    product_name:
      "MacBook Pro (16 inci, 2019) 2.6GHz, 16GB RAM, 512GB SSD, Silver",
    product_price: 37299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-16-inch-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-16-inci-ibox",
  },
  {
    product_id: "8100001091-IB",
    product_name:
      "MacBook Pro (16 inci, 2019) 2.3GHz, 16GB RAM, 1TB SSD, Space Grey",
    product_price: 43799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-16-inch-space-gray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-16-inci-ibox",
  },
  {
    product_id: "8100001092-IB",
    product_name:
      "MacBook Pro (16 inci, 2019) 2.3GHz, 16GB RAM, 1TB SSD, Silver",
    product_price: 43799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-16-inch-silver-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-16-inci-ibox",
  },
  {
    product_id: "8100001498-IB",
    product_name: "iMac 21.5inci, 2.3GHz, 8GB RAM, 1TB hard drive, Silver",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-2017-1a_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-2017-ibox",
  },
  {
    product_id: "8100001111-IB",
    product_name: "iMac 21.5inci, 3.6GHz, 8GB RAM, 1TB hard drive, Silver",
    product_price: 20799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-2017-1a_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-21-5-inci-retina-4k",
  },
  {
    product_id: "8100001112-IB",
    product_name: "iMac 21.5inci, 3.0GHz, 8GB RAM, 1TB fusion drive, Silver",
    product_price: 24199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-2017-1a_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-21-5-inci-retina-4k",
  },
  {
    product_id: "8100001113-IB",
    product_name: "iMac 27inci, 3.0GHz, 8GB RAM, 1TB fusion drive, Silver",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-2017-1_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-27-inci-retina-5k",
  },
  {
    product_id: "8100001114-IB",
    product_name: "iMac 27inci, 3.1GHz, 8GB RAM, 1TB fusion drive, Silver",
    product_price: 32599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-2017-1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-27-inci-retina-5k",
  },
  {
    product_id: "8100001115-IB",
    product_name: "iMac 27inci, 3.7GHz, 8GB RAM, 2TB fusion drive, Silver",
    product_price: 37599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-2017-1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-27-inci-retina-5k",
  },
  {
    product_id: "8100001715-IB",
    product_name: "iMac Pro 27inci, 3.2GHz, 32GB RAM, 1TB SSD, Space Grey",
    product_price: 85799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac-pro-1a_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-pro-ibox",
  },
  {
    product_id: "8100013004-IB",
    product_name: "Apple TV 4K 64GB",
    product_price: 3999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_tv_4k_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/apple-tv-4k",
  },
  {
    product_id: "8100013016-IB",
    product_name: "Apple Watch Series 5 40mm GPS, Silver, White Sport Band",
    product_price: 7799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_40mm_silver_aluminum_white_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-5-gps-ibox",
  },
  {
    product_id: "8100013015-IB",
    product_name: "Apple Watch Series 5 40mm GPS, Gold, Pink Sand Sport Band",
    product_price: 7799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_40mm_gold_aluminum_pink_sand_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-5-gps-ibox",
  },
  {
    product_id: "8100013017-IB",
    product_name: "Apple Watch Series 5 40mm GPS, Space Grey, Black Sport Band",
    product_price: 7799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_40mm_space_gray_aluminum_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-5-gps-ibox",
  },
  {
    product_id: "8100013031-IB",
    product_name: "Apple Watch Series 5 44mm GPS, Silver, White Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_44mm_silver_aluminum_white_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-5-gps-ibox",
  },
  {
    product_id: "8100013018-IB",
    product_name: "Apple Watch Series 5 44mm GPS, Gold, Pink Sand Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_44mm_gold_aluminum_pink_ssand_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-5-gps-ibox",
  },
  {
    product_id: "8100013019-IB",
    product_name: "Apple Watch Series 5 44mm GPS, Space Grey, Black Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_44mm_space_gray_aluminum_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-5-gps-ibox",
  },
  {
    product_id: "8100013012-IB",
    product_name:
      "Apple Watch Nike Series 5 40mm GPS, Silver, Black Nike Sport Band",
    product_price: 7799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_band_44mm_silver_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-5-gps-ibox",
  },
  {
    product_id: "8100013013-IB",
    product_name:
      "Apple Watch Nike Series 5 40mm GPS, Space Grey, Black Nike Sport Band",
    product_price: 7799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_band_44mm_space_gray_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-5-gps-ibox",
  },
  {
    product_id: "8100013014-IB",
    product_name:
      "Apple Watch Nike Series 5 44mm GPS, Silver, Black Nike Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_band_44mm_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-5-gps-ibox",
  },
  {
    product_id: "MX3W2ID/A",
    product_name:
      "Apple Watch Nike Series 5 44mm GPS, Space Grey, Black Nike Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_band_44mm_space_gray_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-5-gps-ibox",
  },
  {
    product_id: "8100013052-IB",
    product_name: "Apple Watch Series 3 38mm GPS, Silver, White Sport Band",
    product_price: 4199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_38mm_sport_band_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-3-gps",
  },
  {
    product_id: "8100013053-IB",
    product_name: "Apple Watch Series 3 38mm GPS, Space Grey, Black Sport Band",
    product_price: 4199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_38mm_sport_band_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-3-gps",
  },
  {
    product_id: "8100013054-IB",
    product_name: "Apple Watch Series 3 42mm GPS, Silver, White Sport Band",
    product_price: 4699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_42mm_sport_band_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-3-gps",
  },
  {
    product_id: "8100013055-IB",
    product_name: "Apple Watch Series 3 42mm GPS, Space Grey, Black Sport Band",
    product_price: 4699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_42mm_sport_band_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-3-gps",
  },
  {
    product_id: "8100001131-IB",
    product_name: "iPhone XS 64GB, Space Grey",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-space-gray_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001132-IB",
    product_name: "iPhone XS 64GB, Silver",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-silver_1_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001133-IB",
    product_name: "iPhone XS 64GB, Gold",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-gold_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001134-IB",
    product_name: "iPhone XS 256GB, Space Grey",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-space-gray_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001135-IB",
    product_name: "iPhone XS 256GB, Silver",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-silver_1_1_2_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001136-IB",
    product_name: "iPhone XS 256GB, Gold",
    product_price: 19999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-gold_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001137-IB",
    product_name: "iPhone XS 512GB, Space Grey",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-space-gray_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001138-IB",
    product_name: "iPhone XS 512GB, Silver",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-silver_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001315-IB",
    product_name: "iPhone XS 512GB, Gold",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-gold_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-ibox",
  },
  {
    product_id: "8100001316-IB",
    product_name: "iPhone XS Max 64GB, Space Grey",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-space-gray_1_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001317-IB",
    product_name: "iPhone XS Max 64GB, Silver",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-silver_1_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001267-IB",
    product_name: "iPhone XS Max 64GB, Gold",
    product_price: 17999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-gold_1_1_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001319-IB",
    product_name: "iPhone XS Max 256GB, Gold",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-gold_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001268-IB",
    product_name: "iPhone XS Max 256GB, Space Grey",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-space-gray_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001318-IB",
    product_name: "iPhone XS Max 256GB, Silver",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-silver_1_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001271-IB",
    product_name: "iPhone XS Max 512GB, Gold",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-gold_1_3_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001270-IB",
    product_name: "iPhone XS Max 512GB, Silver",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-silver_1_2_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001269-IB",
    product_name: "iPhone XS Max 512GB, Space Grey",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xs-max-space-gray_1_2_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xs-max-ibox",
  },
  {
    product_id: "8100001412-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Dua Thunderbolt 3) 1.4GHZ, 8GB RAM, 256GB SSD, Space Grey",
    product_price: 21699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-spacegray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001413-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Dua Thunderbolt 3) 1.4GHZ, 8GB RAM, 256GB SSD, Silver",
    product_price: 21699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001414-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Dua Thunderbolt 3) 1.4GHZ, 8GB RAM, 512GB SSD, Space Grey",
    product_price: 25099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-spacegray-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001415-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Dua Thunderbolt 3) 1.4GHZ, 8GB RAM, 512GB SSD, Silver",
    product_price: 25099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-silver-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-dua-port-thunderbolt-3-ibox",
  },
  {
    product_id: "8100001408-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Empat Thunderbolt 3) 2.0GHZ, 16GB RAM, 512GB SSD, Space Grey",
    product_price: 29999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-spacegray-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-empat-port-thunderbolt-3",
  },
  {
    product_id: "8100001409-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Empat Thunderbolt 3) 2.0GHZ, 16GB RAM, 512GB SSD, Silver",
    product_price: 29999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-silver-1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-empat-port-thunderbolt-3",
  },
  {
    product_id: "8100001410-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Empat Thunderbolt 3) 2.0GHZ, 16GB RAM, 1TB SSD, Space Grey",
    product_price: 33399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-spacegray-1_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-empat-port-thunderbolt-3",
  },
  {
    product_id: "8100001411-IB",
    product_name:
      "MacBook Pro (13.3inci, 2020, Empat Thunderbolt 3) 2.0GHZ, 16GB RAM, 1TB SSD, Silver",
    product_price: 33399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-2020-2port-silver-1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/macbook-pro-2020-empat-port-thunderbolt-3",
  },
  {
    product_id: "8100011182-IB",
    product_name: "Apple 40mm Sport Band, Black",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-40mm-sport-band-black-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-reguler",
  },
  {
    product_id: "8100012931-IB",
    product_name: "Apple 40mm Sport Band, Pink Sand",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-sport-band-40mm-pink-sand_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-reguler",
  },
  {
    product_id: "8100011174-IB",
    product_name: "Apple 40mm Sport Band, Red",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-40mm-sport-band-red-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-reguler",
  },
  {
    product_id: "8100012738-IB",
    product_name: "Apple 40mm Sport Band, Stone",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-40mm-sport-band-stone-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-reguler",
  },
  {
    product_id: "8100012749-IB",
    product_name: "Apple 40mm Sport Band, White",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-40mm-sport-band-white-1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-band-reguler",
  },
  {
    product_id: "MXHV2FE/A-IB",
    product_name: "40mm (PRODUCT)RED Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_productred_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-loop",
  },
  {
    product_id: "8100011176-IB",
    product_name: "40mm Anchor Grey Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_anchor_gray_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-loop",
  },
  {
    product_id: "8100012717-IB",
    product_name: "40mm Camel Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_camel_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-loop",
  },
  {
    product_id: "8100012722-IB",
    product_name: "40mm Khaki Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_khaki_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-loop",
  },
  {
    product_id: "8100012761-IB",
    product_name: "40mm Pomegranate Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_pomegranate_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-sport-loop",
  },
  {
    product_id: "8100012687-IB",
    product_name: "Apple 40mm Pure Platinum/Black Nike Sport Band, Regular",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_pure_platinum_black_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-nike-sport-band-regular",
  },
  {
    product_id: "8100012716-IB",
    product_name: "Apple 40mm Black/Pink Blast Nike Sport Band, Regular",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_black_pink_blast_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-nike-sport-band-regular",
  },
  {
    product_id: "8100012762-IB",
    product_name: "40mm Royal Pulse/Lava Glow Nike Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_royal_pulse_lava_glow_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-nike-sport-loop",
  },
  {
    product_id: "8100012759-IB",
    product_name: "40mm Pink Blast/True Berry Nike Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_pink_blast_true_berry_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-nike-sport-loop",
  },
  {
    product_id: "8100012719-IB",
    product_name: "40mm Desert Sand/Volt Nike Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_dessert_sand_volt_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-40mm-nike-sport-loop",
  },
  {
    product_id: "8100012666-IB",
    product_name: "40mm Gold Milanese Loop",
    product_price: 2549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_gold_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/40mm-milanese-loop",
  },
  {
    product_id: "8100012733-IB",
    product_name: "40mm Space Black Milanese Loop",
    product_price: 2549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_space_black_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/40mm-milanese-loop",
  },
  {
    product_id: "8100012861-IB",
    product_name: "Apple 44mm (PRODUCT)RED Sport Band, Regular",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_product_red_flat_1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/44mm-sport-band-regular",
  },
  {
    product_id: "8100012831-IB",
    product_name: "Apple 44mm Pine Green Sport Band, Regular",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_pine_green_flat_1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/44mm-sport-band-regular",
  },
  {
    product_id: "8100012865-IB",
    product_name: "Apple 44mm Anthracite/Black Nike Sport Band, Reguler",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/4/44mm_nike_sport_band_anthracite-black_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-nike-sport-band-regular",
  },
  {
    product_id: "8100012787-IB",
    product_name: "Apple 44mm Black/Pink Blast Nike Sport Band, Regular",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_black_pink_blast_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-nike-sport-band-regular",
  },
  {
    product_id: "8100012935-IB",
    product_name: "Apple 44mm Pure Platinum/Black Nike Sport Band, Regular",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_pure_platinum_black_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-nike-sport-band-regular",
  },
  {
    product_id: "MXHW2FE/A-IB",
    product_name: "44mm (PRODUCT)RED Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_productred_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-sport-loop",
  },
  {
    product_id: "8100012788-IB",
    product_name: "44mm Camel Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_camel_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-sport-loop",
  },
  {
    product_id: "8100012829-IB",
    product_name: "44mm Khaki Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_khaki_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-sport-loop",
  },
  {
    product_id: "8100012833-IB",
    product_name: "44mm Pomegranate Sport Loop",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_pomegranate_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-sport-loop",
  },
  {
    product_id: "8100012867-IB",
    product_name: "44mm Black Leather Loop, Medium",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_black_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-leather-loop-medium",
  },
  {
    product_id: "8100012891-IB",
    product_name: "44mm Meyer Lemon Leather Loop, Medium",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_meyer_lemon_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-leather-loop-medium",
  },
  {
    product_id: "8100012938-IB",
    product_name: "44mm Saddle Brown Leather Loop, Medium",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_saddle_brown_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-leather-loop-medium",
  },
  {
    product_id: "8100012866-IB",
    product_name: "44mm Black Leather Loop, Large",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_black_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-leather-loop-large",
  },
  {
    product_id: "8100012937-IB",
    product_name: "44mm Saddle Brown Leather Loop, Large",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_saddle_brown_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-leather-loop-large",
  },
  {
    product_id: "8100012884-IB",
    product_name: "44mm Gold Milanese Loop",
    product_price: 2549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_gold_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-milanese-loop",
  },
  {
    product_id: "8100012893-IB",
    product_name: "44mm Silver Milanese Loop",
    product_price: 2549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_silver_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-milanese-loop",
  },
  {
    product_id: "8100012940-IB",
    product_name: "44mm Space Black Milanese Loop",
    product_price: 2549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_space_black_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/44mm-milanese-loop",
  },
  {
    product_id: "8100012334-IB",
    product_name: "iPhone 11 Pro Max Leather Case, Black",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-leather-case",
  },
  {
    product_id: "8100012337-IB",
    product_name: "iPhone 11 Pro Max Leather Case, Forest Green",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-forest-green-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-leather-case",
  },
  {
    product_id: "8100012338-IB",
    product_name: "iPhone 11 Pro Max Leather Case, Red",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-red-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-leather-case",
  },
  {
    product_id: "8100012376-IB",
    product_name: "iPhone 11 Pro Max Leather Folio, Aubergine",
    product_price: 2299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-folio-aubergine-1_2_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-leather-folio",
  },
  {
    product_id: "8100012377-IB",
    product_name: "iPhone 11 Pro Max Leather Folio, Black",
    product_price: 2299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-folio-black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-leather-folio",
  },
  {
    product_id: "8100012381-IB",
    product_name: "iPhone 11 Pro Max Silicone Case, Black",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-black-1_3.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-silicone-case",
  },
  {
    product_id: "8100012383-IB",
    product_name: "iPhone 11 Pro Max Silicone Case, Midnight Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-blue-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-silicone-case",
  },
  {
    product_id: "8100012384-IB",
    product_name: "iPhone 11 Pro Max Silicone Case, Pink Sand",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-soft-pink-2_3.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-max-silicone-case",
  },
  {
    product_id: "8100012330-IB",
    product_name: "iPhone 11 Pro Max Smart Battery Case, Black",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvp2_av1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-11-pro-max-smart-battery-case",
  },
  {
    product_id: "8100012331-IB",
    product_name: "iPhone 11 Pro Max Smart Battery Case, Pink Sand",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvr2_av1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-11-pro-max-smart-battery-case",
  },
  {
    product_id: "8100012332-IB",
    product_name: "iPhone 11 Pro Max Smart Battery Case, White",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvq2_av1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-11-pro-max-smart-battery-case",
  },
  {
    product_id: "8100010760-IB",
    product_name: "30W USB-C Power Adapter",
    product_price: 899000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_18_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-30w-usb-c-power-adapter-ib-1",
  },
  {
    product_id: "8100012719-IB",
    product_name: "40mm Desert Sand/Volt Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_dessert_sand_volt_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-desert-sand-volt-nike-sport-loop-ib",
  },
  {
    product_id: "8100012759-IB",
    product_name: "40mm Pink Blast/True Berry Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_pink_blast_true_berry_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-pink-blast-true-berry-nike-sport-loop-ib",
  },
  {
    product_id: "8100012761-IB",
    product_name: "40mm Pomegranate Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_pomegranate_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-pomegranate-sport-loop-ib",
  },
  {
    product_id: "8100012687-IB",
    product_name: "Apple 40mm Pure Platinum/Black Nike Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_pure_platinum_black_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-pure-platinum-black-nike-sport-band-regular-ib",
  },
  {
    product_id: "8100012762-IB",
    product_name: "40mm Royal Pulse/Lava Glow Nike Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_loop_royal_pulse_lava_glow_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-royal-pulse-lava-glow-nike-sport-loop-ib",
  },
  {
    product_id: "8100012733-IB",
    product_name: "40mm Space Black Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_space_black_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-40mm-space-black-milanese-loop-ib",
  },
  {
    product_id: "8100012861-IB",
    product_name: "Apple 44mm (PRODUCT)RED Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_band_product_red_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-productred-sport-band-regular-ib",
  },
  {
    product_id: "8100012866-IB",
    product_name: "44mm Black Leather Loop, Large",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_black_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-black-leather-loop-large-ib",
  },
  {
    product_id: "8100012788-IB",
    product_name: "44mm Camel Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_camel_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-44mm-camel-sport-loop-ib",
  },
  {
    product_id: "8100012884-IB",
    product_name: "44mm Gold Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_gold_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-44mm-gold-milanese-loop-ib",
  },
  {
    product_id: "8100012829-IB",
    product_name: "44mm Khaki Sport Loop",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_sport_loop_khaki_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-44mm-khaki-sport-loop-ib",
  },
  {
    product_id: "8100012891-IB",
    product_name: "44mm Meyer Lemon Leather Loop, Medium",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_meyer_lemon_flat_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-meyer-lemon-leather-loop-medium-ib",
  },
  {
    product_id: "8100012935-IB",
    product_name: "Apple 44mm Pure Platinum/Black Nike Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_nike_sport_band_pure_platinum_black_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-pure-platinum-black-nike-sport-band-regular-ib",
  },
  {
    product_id: "8100012937-IB",
    product_name: "44mm Saddle Brown Leather Loop, Large",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_saddle_brown_flat_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-saddle-brown-leather-loop-large-ib",
  },
  {
    product_id: "8100012938-IB",
    product_name: "44mm Saddle Brown Leather Loop, Medium",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_44mm_leather_loop_saddle_brown_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-saddle-brown-leather-loop-medium-ib",
  },
  {
    product_id: "8100012940-IB",
    product_name: "44mm Space Black Milanese Loop",
    product_price: 2349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_5_milanese_loop_space_black_flat_1_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-44mm-space-black-milanese-loop-ib",
  },
  {
    product_id: "8100023025-IB",
    product_name: "45W MagSafe 2 Power Adapter for MacBook Air",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/s/asasad_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-45w-magsafe-2-power-adapter-for-macbook-air-ib-1",
  },
  {
    product_id: "8100012375-IB",
    product_name:
      "60W MagSafe 2 Power Adapter (MacBook Pro with 13inci Retina display)",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_18_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-60w-magsafe-2-power-adapter-macbook-pro-with-13inci-retina-display-ib-1",
  },
  {
    product_id: "8100021543-IB",
    product_name: "61W USB C Power Adapter",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61w-usb-c.1-600x600_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-61w-usb-c-power-adapter-ib-1",
  },
  {
    product_id: "8100010754-IB",
    product_name: "96W USB-C Power Adapter",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/7/57c654ce27e05c6fd590d7953e3054a6_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-96w-usb-c-power-adapter-ib-1",
  },
  {
    product_id: "8100012337-IB",
    product_name: "iPhone 11 Pro Max Leather Case, Forest Green",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-silicon-case-forest-green-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-max-leather-case-forest-green-qrp-ib",
  },
  {
    product_id: "8100012390-IB",
    product_name: "iPhone 11 Pro Silicone Case, Black",
    product_price: 299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-black-2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-iphone-11-pro-silicone-case-black-ib",
  },
  {
    product_id: "8100012558-IB",
    product_name: "Magic Keyboard for 11inci iPad Pro (Gen ke 2)",
    product_price: 6599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/x/mxqt2ll_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-magic-keyboard-for-11inci-ipad-pro-gen-ke-2-ib",
  },
  {
    product_id: "8100012560-IB",
    product_name: "Magic Keyboard for 12,9inci iPad Pro (Gen ke 4)",
    product_price: 7199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/x/mxqu2ll_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-magic-keyboard-for-129inci-ipad-pro-gen-ke-4-ib",
  },
  {
    product_id: "8100022967-IB",
    product_name: "Magic Mouse 2, Space Gray",
    product_price: 1499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-magic-mouse-space-gray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-magic-mouse-2-space-gray-ib",
  },
  {
    product_id: "8100012645-IB",
    product_name: "Smart Keyboard Folio for iPad Pro 12,9inci (Gen ke 4)",
    product_price: 4099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/x/mxnl2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-smart-keyboard-folio-for-ipad-pro-129inci-gen-ke-4-ib",
  },
  {
    product_id: "8100012705-IB",
    product_name: "USB C Digital AV Multiport Adapter",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/muf82_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-usb-c-digital-av-multiport-adapter-ib",
  },
  {
    product_id: "8100012706-IB",
    product_name: "USB C to 3.5 mm Headphone Jack Adapter",
    product_price: 249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/mu7e2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-usb-c-to-3-5-mm-headphone-jack-adapter-ib",
  },
  {
    product_id: "8100012710-IB",
    product_name: "USB C to USB Adapter",
    product_price: 379000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/j/mj1m2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-usb-c-to-usb-adapter-ib",
  },
  {
    product_id: "8100012702-IB",
    product_name: "USB SuperDrive",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/d/md564_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/usb-superdrive",
  },
  {
    product_id: "8100013008-IB",
    product_name: "Watch Magnetic Charger to USB C Cable (1 m)",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/x/mx2h2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-magnetic-charger-to-usb-c-cable-1-m-ib",
  },
  {
    product_id: "8100015425-IB",
    product_name: "Monocozzi Lucid folio iPad Air 3 / iPad Pro 9.7 inch - Tan",
    product_price: 109800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/r/brown01_149ed497-129f-4181-a954-cffe688393a9_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-folio-ipad-air-3-ipad-pro-9-7-inch-tan-ib",
  },
  {
    product_id: "8100008911-IB",
    product_name: "Anker Nebula Apollo Mini Projector - Black",
    product_price: 7999000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/1/11111_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-nebula-apollo-mini-projector-black-ib",
  },
  {
    product_id: "8100008211-IB",
    product_name: "Anker Soundcore Flare - Black",
    product_price: 1450000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker-soundcore-flare-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/anker-soundcore-flare-black-ib",
  },
  {
    product_id: "8100013050-IB",
    product_name:
      "Apple Watch Nike+ Series 3 GPS, 38mm Space Grey Aluminium Case with Anthracite/Black Nike Sport Band",
    product_price: 4199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-watch-3-nike-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-3-gps",
  },
  {
    product_id: "8100013051-IB",
    product_name:
      "Apple Watch Nike+ Series 3 42mm GPS, Space Grey, Black Nike Sport Band",
    product_price: 4699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_42mm_nike_band_space_grey_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-3-gps",
  },
  {
    product_id: "8100011042-IB",
    product_name: "Beats Urbeats 3.0 Lightning - Coral",
    product_price: 1280000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/muhv2pa_a1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/urbeats-3-lightning-coral-ib",
  },
  {
    product_id: "8100011025-IB",
    product_name: "Beats Urbeats3 - Grey",
    product_price: 1600000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats-urbeats3-gray-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-urbeats3-grey-ib",
  },
  {
    product_id: "8100025616-IB",
    product_name: "Belkin Family RockStar 4-Ports USB Home Charger - White",
    product_price: 599000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin-family-rockstar-4-ports-usb-home-charger_4_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-family-rockstar-4-ports-usb-home-charger-white-ib",
  },
  {
    product_id: "8100007725-IB",
    product_name: "Casemate iPhone 11 Tough Speckled - White",
    product_price: 149000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_tough_speckled_-_white_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-tough-speckled-white-ib",
  },
  {
    product_id: "8100007857-IB",
    product_name: "Casemate iPhone 11 Pro Barely There - Clear",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_barely_there_-_clear_6_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-barely-there-clear-ib",
  },
  {
    product_id: "8100008086-IB",
    product_name: "Element Case Illusion iPhone 11 Pro - Black",
    product_price: 500650,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/illusiona1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-illusion-iphone-11-pro-black-qrp-ib",
  },
  {
    product_id: "8100008079-IB",
    product_name: "Element Case Rally iPhone 11 Pro Max - Clear",
    product_price: 662150,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/r/a/rallya1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-rally-iphone-11-pro-max-clear-qrp-ib",
  },
  {
    product_id: "8100013396-IB",
    product_name: "Feeltek Disinfectan UV Box",
    product_price: 329000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/v/uvbox-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/feeltek-disinfectan-uv-box-ib",
  },
  {
    product_id: "8100013416-IB",
    product_name: "Feeltek Omni PD Power Bank 10000 mAh - Gold",
    product_price: 599000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100098_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-omni-pd-power-bank-10000-mah-gold-ib",
  },
  {
    product_id: "8100013165-IB",
    product_name: "Feeltek Omni PD Power Bank 10000 mAh - Gray",
    product_price: 599000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001041_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-omni-pd-power-bank-10000-mah-gray-ib",
  },
  {
    product_id: "8100013384-IB",
    product_name: "Feeltek Nano Power Bank 10000 mAh - Gold",
    product_price: 299000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/a/aaad.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-nano-power-bank-10000-mah-gold-ib",
  },
  {
    product_id: "8100013383-IB",
    product_name: "Feeltek Nano Power Bank 10000 mAh - Gray",
    product_price: 399000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia843647100081-ib.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-nano-power-bank-10000-mah-gray-ib",
  },
  {
    product_id: "8100013168-IB",
    product_name: "Feeltek USB-C to USB-C Cable 200cm TPE - White",
    product_price: 179000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001661_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-usb-c-to-usb-c-cable-200cm-tpe-white-new-ib",
  },
  {
    product_id: "8100013167-IB",
    product_name: "Feeltek USB-C to USB-C Cable 120cm TPE - White",
    product_price: 149000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001661_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-usb-c-to-usb-c-cable-120cm-tpe-white-new-ib",
  },
  {
    product_id: "8100013166-IB",
    product_name:
      "Feeltek Air Lightning to USB-C Cable 180cm Metallic + Braid - Black",
    product_price: 349000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001421_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-air-lightning-to-usb-c-cable-180cm-metallic-plus-braid-black-ib",
  },
  {
    product_id: "8100013419-IB",
    product_name: "Feeltek Lightning to USB-C 120cm - Black",
    product_price: 239200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001421_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-c-120cm-black-ib",
  },
  {
    product_id: "8100013417-IB",
    product_name: "Feeltek Display 2 in 1 USB-C Hub Gray",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001281_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-display-2-in-1-usb-c-hub-gray-new-ib",
  },
  {
    product_id: "8100013382-IB",
    product_name: "Feeltek 8 in 1 USB-C Portable Hub - Gray",
    product_price: 1299000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100074-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-8-in-1-usb-c-portable-hub-gray-new-ib",
  },
  {
    product_id: "8100013388-IB",
    product_name: "Feeltek Lightning to USB-A 180cm - Black",
    product_price: 249000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100036-1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-180cm-black-ib",
  },
  {
    product_id: "8100013387-IB",
    product_name: "Feeltek Lightning to USB-A 180cm - Gold",
    product_price: 249000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100012-1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-180cm-gold-ib",
  },
  {
    product_id: "8100013378-IB",
    product_name: "Feeltek Lightning to USB-A 100cm - Black",
    product_price: 219000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100036-1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-100cm-black-ib",
  },
  {
    product_id: "8100008149-IB",
    product_name: "iBacks Acta Carbon for iPhone 7 Plus - Navy",
    product_price: 199000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/n/a/navy_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-acta-carbon-for-iphone-7-plus-navy-ib",
  },
  {
    product_id: "8100008679-IB",
    product_name: "iBacks Barvity Case For iPhone 11 - Navy",
    product_price: 391300,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/_/b_8_2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-barvity-case-for-iphone-11-navy-qrp-ib",
  },
  {
    product_id: "8100005670-IB",
    product_name: "iLuv XS Max Metal Forge Case - Black",
    product_price: 239000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/l/iluv-metal-forge-case-for-iphone-xs-max-black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iluv-xs-max-metal-forge-case-black-qrp-ib",
  },
  {
    product_id: "8100005671-IB",
    product_name: "iLuv Metal Forge Case For iPhone Xs Max - Pink",
    product_price: 239000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iluv-metal-forge-case-for-iphone-xs-max-pink-qrp-ib",
  },
  {
    product_id: "8100005799-IB",
    product_name:
      "Incase Hardshell Case for Macbook Pro Retina 13inch (CL60608)",
    product_price: 799000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61fet1yqxdl._sl1000__1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/incase-hardshell-case-for-macbook-pro-retina-13inch-cl60608-ib",
  },
  {
    product_id: "IC6925281918988-IB",
    product_name: "JBL Headphone T450BT - White",
    product_price: 399000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t450_bt_white_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/jbl-headphone-t450bt-white-qrp-ib",
  },
  {
    product_id: "8100003939-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro Max - Grey",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_max_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-max-grey-qrp-ib",
  },
  {
    product_id: "8100006016-IB",
    product_name: "Kajsa iPhone X/XS Trans Shield - Clear",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-x-xs-trans-shield-clear-ib",
  },
  {
    product_id: "8100005999-IB",
    product_name:
      "Kajsa Outdoor Collection Wood Pattern iPhone Xs Back Case - Light Brown",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa-outdoor-collection-wood-pattern-iphone-xs-back-case-light-brown_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-xs-kajsa-wood-brown-qrp-2-ib",
  },
  {
    product_id: "8100013810-IB",
    product_name: "Kajsa iPhone XS Ninja - Grey",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-xs-ninja-grey-qrp-ib",
  },
  {
    product_id: "8100013994-IB",
    product_name: "Lamina Dettachble Privacy Series for Macbook Air 13",
    product_price: 299000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_macbook_snap_to_hide_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-dettachble-privacy-series-for-macbook-air-13-ib",
  },
  {
    product_id: "8100007929-IB",
    product_name:
      "Lamina iPhone 6/6s/7 Plus 0.22mm Premium Tempered Glass Slim series",
    product_price: 249000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_new_0.22_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-iphone-6-6s-7-plus-0-22mm-premium-tempered-glass-slim-series-ib",
  },
  {
    product_id: "8100006071-IB",
    product_name: "Lamina Tempered Glass iPad Pro / Air 2 9,7 inch",
    product_price: 49000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_ipad_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-ipad-pro-air-2-9-7-inch-ib",
  },
  {
    product_id: "8100021110-IB",
    product_name: "Lamina Tempered Glass iPhone 11 Pro 5.8 inch 2019",
    product_price: 19000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_2_10_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-11-pro-5-8-inch-2019-ib",
  },
  {
    product_id: "8100006100-IB",
    product_name: "Lamina Essential Tempered Glass for iPhone SE/6/6S/7/7S/8",
    product_price: 19000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_essential_7_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tg-essential-apple-iphone-6-6s-7-ib",
  },
  {
    product_id: "8100004101-IB",
    product_name: "LifeProof Slam iPhone 11 Pro - Black Crystal",
    product_price: 492150,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphp19-av_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-pro-black-crystal-qrp-ib",
  },
  {
    product_id: "8100025617-IB",
    product_name: "Mazer  Converter Mini DP to HDMI 4K + VGA",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer-mini-display-port-to-hdmi-_4k30hz_vga-dual-display-adapter_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-converter-mini-dp-to-hdmi-4k-vga-ib",
  },
  {
    product_id: "8100004211-IB",
    product_name:
      "Monocozzi Motif Apple Certified Braided USB-C to Lightning Sync and Charge Cable 25cm - Charcoal",
    product_price: 174500,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199105355_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-motif-apple-certified-braided-usb-c-to-lightning-sync-and-charge-cable-25cm-charcoal-ib",
  },
  {
    product_id: "8100004210-IB",
    product_name:
      "Monocozzi Motif Apple Certified Braided USB-C to Lightning Sync and Charge Cable 100cm - Charcoal",
    product_price: 189500,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199105324_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-motif-apple-certified-braided-usb-c-to-lightning-sync-and-charge-cable-100cm-charcoal-ib",
  },
  {
    product_id: "8100004213-IB",
    product_name:
      "Monocozzi Pattern Lab 10000 Mah PD 18W QC 3.0 Powerbank with Cable USB Type C - Abstract",
    product_price: 299500,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199105416_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-10000-mah-pd-18w-qc-30-powerbank-with-cable-usb-type-c-abstract-ib",
  },
  {
    product_id: "8100004120-IB",
    product_name: "Otterbox Symmetry Clear iPhone 11 Pro Max - Clear",
    product_price: 594150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-clear-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-pro-max-clear-qrp-ib",
  },
  {
    product_id: "8100004114-IB",
    product_name: "Otterbox Commuter Series iPhone 11 - Black",
    product_price: 441150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-black-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-black-qrp-ib",
  },
  {
    product_id: "8100004108-IB",
    product_name: "Otterbox Symmetry Series iPhone 11 - We'll Call Blue",
    product_price: 594150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-we-ll-call-blue-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-we-ll-call-blue-qrp-ib",
  },
  {
    product_id: "8100004103-IB",
    product_name: "Otterbox Pop Symmetry iPhone 11 Pro - Black",
    product_price: 730150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-pop-symmetry-iphone-11-pro-black-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-pop-symmetry-iphone-11-pro-black-qrp-ib",
  },
  {
    product_id: "8100004099-IB",
    product_name: "Otterbox Symmetry Clear iPhone 11 Pro - Clear",
    product_price: 594150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-clear-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-pro-clear-qrp-ib",
  },
  {
    product_id: "8100004097-IB",
    product_name: "Otterbox Commuter Series iPhone 11 Pro - Black",
    product_price: 441150,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-black-2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-pro-black-qrp-ib",
  },
  {
    product_id: "8100007217-IB",
    product_name: "Spigen iPhone 11 Pro Max La Manon Classy - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_iphone_11_pro_max_la_manon_classy_-_black-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-11-pro-max-la-manon-classy-black-qr-ib",
  },
  {
    product_id: "8100007210-IB",
    product_name: "Spigen iPhone 11 Pro Max Slim Armor - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-11-pro-max-slim-armor-black-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-11-pro-max-slim-armor-black-qr-ib",
  },
  {
    product_id: "8100007325-IB",
    product_name: "Spigen Hybrid NX + Frame for iPhone 11 - Gunmetal",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_hybrid_nx_navy_blue_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-hybrid-nx-frame-for-iphone-11-gun-metal-qrp-1-ib",
  },
  {
    product_id: "8100007324-IB",
    product_name: "Spigen Hybrid NX + Frame for iPhone 11 - Matte Black",
    product_price: 149000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_hybrid_nx_matt_blk_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-hybrid-nx-frame-for-iphone-11-matte-black-qrp-ib",
  },
  {
    product_id: "IA8809640259173-IB",
    product_name: "Spigen Crystal Flex for iPhone 11 - Crystal Clear",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_liquid_crystal_cr_01_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-crystal-flex-for-iphone-11-crystal-clear-qrp-ib",
  },
  {
    product_id: "IA8809640259166-IB",
    product_name: "Spigen Core Armor for iPhone 11 - Matte Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_iphone_xr2_core_armor_01_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-core-armor-for-iphone-11-matte-black-qrp-ib",
  },
  {
    product_id: "IA8809640259586-IB",
    product_name: "Spigen Ultra Hybrid for iPhone 11 Pro - Crystal Clear",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigencr1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-ultra-hybrid-for-iphone-11-pro-crystal-clear-qrp-ib",
  },
  {
    product_id: "8100007338-IB",
    product_name: "Spigen Slim Armor for iPhone 11 Pro - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigenb1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-pro-black-qrp-ib",
  },
  {
    product_id: "8100007336-IB",
    product_name: "Spigen Crystal Flex for iPhone 11 Pro - Crystal Clear",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_pro_liquid_crystal_cr_04_3_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-crystal-flex-for-iphone-11-pro-crystal-clear-qrp-ib",
  },
  {
    product_id: "8100007215-IB",
    product_name: "Spigen La Manon Calin for iPhone 11 Pro Max - Pale Pink",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/i/pic_lamanon_iphone11promax_pink1_071219141253_ll.jpg_mm_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-la-manon-calin-for-iphone-11-pro-max-pale-pink-qrp-ib",
  },
  {
    product_id: "8100008338-IB",
    product_name:
      "Tucano Work Out 3 Slim Bag for Macbook Pro or Notebook 13 Inch - Red",
    product_price: 899000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/w/o/work-out-3-slim-bag-laptop-13_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-work-out-3-slim-bag-for-macbook-pro-or-notebook-13-inch-red-ib",
  },
  {
    product_id: "8100008946-IB",
    product_name: "Tucano Top Sleeve for Macbook Pro 13 Inch - Black",
    product_price: 899000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/o/top-second-skin-13_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-top-sleeve-for-macbook-pro-13-inch-black-ib",
  },
  {
    product_id: "8100008913-IB",
    product_name:
      "Tucano Second Skin Elements Sleeve for Macbook Pro 13 Inch - Black",
    product_price: 399000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic80202520104511_1_2_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-second-skin-elements-sleeve-for-macbook-pro-13-inch-black-ib",
  },
  {
    product_id: "8200000004-IB",
    product_name: "ShiftCam 6-in-1 Travel Set iPhone XS Max",
    product_price: 470000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/i/fireshot_capture_035_-_shiftcam_2.0__6-in-1_travel_set_with_front_facing_lens_-_devthren-lim__-_devthren.com_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-6-in-1-travel-set-iphone-xs-max-1",
  },
  {
    product_id: "8100008609-IB",
    product_name: "UAG Apple iPhone 11 Pro Max Plasma - Ice",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-plasma-ice-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-plasma-ice-ib",
  },
  {
    product_id: "8100008611-IB",
    product_name: "UAG Apple iPhone 11 Pro Max Pathfinder Camo - Midnight",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-pathfinder-camo-midnight-1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-pathfinder-camo-midnight-ib",
  },
  {
    product_id: "8100008372-IB",
    product_name: "UAG Apple iPhone 11 Pro Plasma - Ice",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-plasma-ice-1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-plasma-ice-ib",
  },
  {
    product_id: "8100008450-IB",
    product_name: "UAG Apple iPhone 11 Pro Pathfinder - White",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-pathfinder-white-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-pathfinder-white-ib",
  },
  {
    product_id: "8100005886-IB",
    product_name: "Itskins 2M Hybrid Clear iPhone 11 Pro Max - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465800871_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-clear-iphone-11-pro-max-transparent-ib",
  },
  {
    product_id: "8100007326-IB",
    product_name: "Spigen Slim Armor for iPhone 11 - Black",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigenb1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-black-qrp-ib",
  },
  {
    product_id: "8100012320-IB",
    product_name: "iPhone 11 Pro Leather Case, Black",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-leather-black-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-leather-case",
  },
  {
    product_id: "8100012321-IB",
    product_name: "iPhone 11 Pro Leather Case, Forest Green",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-leather-case-forest-green-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-leather-case",
  },
  {
    product_id: "8100012323-IB",
    product_name: "iPhone 11 Pro Leather Case, (PRODUCT)Red",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-leather-red-4_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-leather-case",
  },
  {
    product_id: "8100012391-IB",
    product_name: "iPhone 11 Pro Silicone Case, Midnight Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-mid-blue-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-silicone-case",
  },
  {
    product_id: "8100012390-IB",
    product_name: "iPhone 11 Pro Silicone Case, Black",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-black-2_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-silicone-case",
  },
  {
    product_id: "8100012394-IB",
    product_name: "iPhone 11 Pro Silicone Case, White",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-white-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-silicone-case",
  },
  {
    product_id: "8100012393-IB",
    product_name: "iPhone 11 Pro Silicone Case, (PRODUCT)Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-silicon-case-red-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-silicone-case",
  },
  {
    product_id: "8100012404-IB",
    product_name: "iPhone 11 Silicone Case, Black",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-silicon-case-black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-silicone-case",
  },
  {
    product_id: "8100012405-IB",
    product_name: "iPhone 11 Silicone Case, White",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-silicon-case-white-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-silicone-case",
  },
  {
    product_id: "8100012398-IB",
    product_name: "iPhone 11 Pro Smart Battery Case, Black",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvl2_av1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-smart-battery-case",
  },
  {
    product_id: "8100012399-IB",
    product_name: "iPhone 11 Pro Smart Battery Case, Pink Sand",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvn2_av1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-smart-battery-case",
  },
  {
    product_id: "8100012400-IB",
    product_name: "iPhone 11 Pro Smart Battery Case, White",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvm2_av1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-smart-battery-case",
  },
  {
    product_id: "8100012406-IB",
    product_name: "iPhone 11 Smart Battery Case, Black",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvh2_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-smart-battery-case",
  },
  {
    product_id: "8100012407-IB",
    product_name: "iPhone 11 Smart Battery Case, Soft White",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/w/mwvj2_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-smart-battery-case",
  },
  {
    product_id: "8100012463-IB",
    product_name: "iPhone SE Silicone Case, Pink Sand",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-se-silicon-pink-sand-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-silicone-case",
  },
  {
    product_id: "8100012462-IB",
    product_name: "iPhone SE Silicone Case, Black",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-se-silicon-black-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-silicone-case",
  },
  {
    product_id: "8100049373-IB",
    product_name: "iPhone SE Silicone Case, Midnight",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_se_silicone_case_midnight_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-silicone-case",
  },
  {
    product_id: "8100049374-IB",
    product_name: "iPhone SE Silicone Case, Abyss Blue",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_se_silicone_case_abyss_blue_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-silicone-case",
  },
  {
    product_id: "8100049375-IB",
    product_name: "iPhone SE Silicone Case, Chalk Pink",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_se_silicone_case_chalk_pink_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-silicone-case",
  },
  {
    product_id: "8100049376-IB",
    product_name: "iPhone SE Silicone Case, (PRODUCT)RED",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_se_silicone_case_product_red_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-silicone-case",
  },
  {
    product_id: "8100012459-IB",
    product_name: "iPhone SE Leather Case, Black",
    product_price: 799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-se-leather-black-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-leather-case",
  },
  {
    product_id: "8100012460-IB",
    product_name: "iPhone SE Leather Case, Midnight Blue",
    product_price: 799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-se-leather-blue-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-leather-case",
  },
  {
    product_id: "8100015587-IB",
    product_name:
      "Kajsa Vintage Collection Genuine Leather iPhone X back case - Light brown",
    product_price: 475000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-vintage-collection-genuine-leather-iphone-x-back-case-light-brown-ib",
  },
  {
    product_id: "8100006004-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case For Iphone Xs Max - Burgundy",
    product_price: 499000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-xs-max-burgundy-ib",
  },
  {
    product_id: "8100014756-IB",
    product_name:
      "Kajsa Preppie Collection Genuine Leather Back Case For Iphone Xs Max - Grey",
    product_price: 499000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-preppie-collection-genuine-leather-back-case-for-iphone-xs-max-grey-ib",
  },
  {
    product_id: "8100006007-IB",
    product_name:
      "Kajsa Preppie Collection Genuine Leather Back Case For Iphone Xr - Red",
    product_price: 475000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-preppie-collection-genuine-leather-back-case-for-iphone-xr-red-ib",
  },
  {
    product_id: "8100006010-IB",
    product_name:
      "Kajsa Dale Collection V Style Back Case For Iphone Xs Max - Blue",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894505026445.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-dale-collection-v-style-back-case-for-iphone-xs-max-blue-ib",
  },
  {
    product_id: "8100006012-IB",
    product_name:
      "Kajsa Dale Collection V Style Back Case For Iphone Xr - Blue",
    product_price: 349000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894505026490.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-dale-collection-v-style-back-case-for-iphone-xr-blue-ib",
  },
  {
    product_id: "8100013418-IB",
    product_name: "Feeltek Proxy 5 in 1 USB-C Hub - Black",
    product_price: 999000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001352_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-proxy-5-in-1-usb-c-hub-black-new-ib",
  },
  {
    product_id: "8100005275-IB",
    product_name: "Tech21 Pure Smoke For iPhone Xs Max - Smoke",
    product_price: 699000,
    brand: "Tech21",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic5056234705971-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/tech21-pure-smoke-for-iphone-xs-max-smoke-ib",
  },
  {
    product_id: "8100005272-IB",
    product_name: "Tech21 Pure Clear for Purley iPhone Xr - Clear",
    product_price: 519000,
    brand: "Tech21",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/e/tech21_pure_clear_for_purley_iphone_xr_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tech21-pure-clear-for-purley-iphone-xr-clear-qrp-ib",
  },
  {
    product_id: "IC4895199101258-IB",
    product_name: "Monocozzi Lucid Shock Protection Case for iPhone 7 - Black",
    product_price: 69800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi-lucid-shock-protection-case-for-iphone-7-black_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-shock-protection-case-for-iphone-7-black-qrp-ib",
  },
  {
    product_id: "8100013437-IB",
    product_name: "Casemate iPhone XR Barely There - Cardinal",
    product_price: 279200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xr-barely-there-cardinal_1_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-barely-there-cardinal-1-ib",
  },
  {
    product_id: "IC4895199101241-IB",
    product_name:
      "Monocozzi Lucid Slim Ultra Slim (0.3mm) Case for iPhone 7 - Grey",
    product_price: 55800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi-lucid-slim-ultra-slim-case-for-iphone-7-grey_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-ultra-slim-0-3mm-case-for-iphone-7-grey-qrp-ib",
  },
  {
    product_id: "8100007600-IB",
    product_name: "Casemate iPhone XR - Kodak Striped Kodachrome Super 8",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-kodak-striped-kodachrome-super-8_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-kodak-striped-kodachrome-super-8-qrp-ib",
  },
  {
    product_id: "8100013374-IB",
    product_name: "Casemate iPhone XR - Kodak Matte Black + Shiny Black Logo",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-kodak-matte-black-shiny-black-logo_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-kodak-matte-black-shiny-black-logo-ib",
  },
  {
    product_id: "8100007602-IB",
    product_name: "Casemate iPhone XR Kodak - Vintage Kodachrome II Print",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-kodak-vintage-kodachrome-ii-print_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-kodak-vintage-kodachrome-qrp-ib",
  },
  {
    product_id: "8100007049-IB",
    product_name: "Spigen Slim Armor iPhone  XS Max - Rose Gold",
    product_price: 529000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-7-8plus-slim-armor-rose-gold-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-7-8-plus-slim-armor-rose-gold-ib",
  },
  {
    product_id: "8100007050-IB",
    product_name: "Spigen Slim Armor CS iPhone XR - Black",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-xr-slim-armor-black-0_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-cs-iphone-xr-black-qrp-ib",
  },
  {
    product_id: "8100007051-IB",
    product_name: "Spigen iPhone XR Slim Armor - Rose Gold",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613766417_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-rose-gold-1-ib",
  },
  {
    product_id: "8100007191-IB",
    product_name: "Spigen iPhone XS Max Slim Armor - Gold",
    product_price: 529000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs--slim-armor-champagne-1_1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-xs-max-slim-armor-gold-ib",
  },
  {
    product_id: "8100012587-IB",
    product_name: "Pencil Case, Saddle Brown",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_pencil_case_saddle_brown-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-pencil-case-ib",
  },
  {
    product_id: "8100012586-IB",
    product_name: "Pencil Case, Midnight Blue",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/q/mq0w2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-pencil-case-ib",
  },
  {
    product_id: "8100012624-IB",
    product_name: "Pencil Case, Electric Blue",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/e/pecil-case-electric-blue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-pencil-case-ib",
  },
  {
    product_id: "8100012585-IB",
    product_name: "Pencil Case, Black",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/q/mq0x2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-pencil-case-ib",
  },
  {
    product_id: "8100012584-IB",
    product_name: "Pencil Case, (PRODUCT)RED",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/b/5bf23e8a30459_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-pencil-case-ib",
  },
  {
    product_id: "8100012521-IB",
    product_name: "Leather Sleeve for 10,5inci iPad Pro, Black",
    product_price: 2599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/p/mpu62_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/leather-sleeve-for-10-5inci-ipad-pro-ib",
  },
  {
    product_id: "8100012522-IB",
    product_name: "Leather Sleeve for 10,5inci iPad Pro, Midnight Blue",
    product_price: 2599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/p/mpu22_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/leather-sleeve-for-10-5inci-ipad-pro-ib",
  },
  {
    product_id: "8100012524-IB",
    product_name: "Leather Sleeve for 10,5inci iPad Pro, Taupe",
    product_price: 2599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/p/mpu02_av2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/leather-sleeve-for-10-5inci-ipad-pro-ib",
  },
  {
    product_id: "8100012509-IB",
    product_name: "iPhone XS Silicone Case, (PRODUCT) Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/r/mrwc2fe_a_1_5.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-silicone-case-ib",
  },
  {
    product_id: "8100012511-IB",
    product_name: "iPhone Xs Silicone Case, Midnight Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-silicone-case-midnight-blue-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-silicone-case-ib",
  },
  {
    product_id: "8100012504-IB",
    product_name: "iPhone Xs Max Silicone Case, (PRODUCT) Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-silicon-case-red-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-max-silicone-case-ib",
  },
  {
    product_id: "8100012508-IB",
    product_name: "iPhone Xs Max Silicone Case, White",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-silicon-case-white-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-max-silicone-case-ib",
  },
  {
    product_id: "8100012492-IB",
    product_name: "iPhone Xs Max Leather Case, (PRODUCT) Red",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-leather-case-red-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-max-leather-case-ib",
  },
  {
    product_id: "8100012495-IB",
    product_name: "iPhone Xs Max Leather Case, Peony Pink",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-max-leather-case-peony-pink-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-max-leather-case-ib",
  },
  {
    product_id: "8100012490-IB",
    product_name: "iPhone XS Leather Folio, Peony Pink",
    product_price: 1799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/r/mrx12_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-leather-folio-ib",
  },
  {
    product_id: "8100012483-IB",
    product_name: "iPhone Xs Leather Case, Black",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-leather-case-black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-leather-case-ib",
  },
  {
    product_id: "8100012482-IB",
    product_name: "iPhone Xs Leather Case, (PRODUCT) Red",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/r/mrwk2fe_a_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-leather-case-ib",
  },
  {
    product_id: "8100012485-IB",
    product_name: "iPhone Xs Leather Case, Saddle Brown",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-leather-case-brown-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-leather-case-ib",
  },
  {
    product_id: "8100012484-IB",
    product_name: "iPhone Xs Leather Case, Midnight Blue",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-xs-leather-case-midnight-blue-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-xs-leather-case-ib",
  },
  {
    product_id: "8100022968-IB",
    product_name: "Magic Mouse 2, Silver",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-magic-mouse-silver-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-magic-mouse-2-ib",
  },
  {
    product_id: "8100022967-IB",
    product_name: "Magic Mouse 2, Space Gray",
    product_price: 1799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-magic-mouse-space-gray-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-magic-mouse-2-ib",
  },
  {
    product_id: "8100022995-IB",
    product_name: "Watch Magnetic Charging Cable 1m",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-watch-magnetic-chargingcable-1m-1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-magnetic-charging-cable-1m-new-ib",
  },
  {
    product_id: "8100013009-IB",
    product_name: "Watch Magnetic Charging Cable 0.3m",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-watch-magnetic-chargingcable-0-3m-1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-magnetic-charging-cable-0-3m-new-ib",
  },
  {
    product_id: "8100032092-IB",
    product_name: "USB-C To Lightning Cable 1m",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/q/mqgj2_1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/apple-usbc-to-lightning-cable-1m-new-ib",
  },
  {
    product_id: "8100012647-IB",
    product_name: "Smart Keyboard For 10.5 inci iPad Pro",
    product_price: 3199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-smart-keyboard-for-10-5-inch-ipad-pro-1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-smart-keyboard-for-10-5-inch-ipad-pro-new-ib",
  },
  {
    product_id: "8100012643-IB",
    product_name: "Smart Keyboard Folio For iPad Pro 11",
    product_price: 3999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-smart-keyboard-folio-for-ipad-pro11-1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/smart-keyboard-folio-for-ipad-pro-11",
  },
  {
    product_id: "8100011054-IB",
    product_name: "18W USB-C Power Adapter",
    product_price: 449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-18w-usb-c-power-adapter-1_1_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-18w-usbc-power-adapter-ib",
  },
  {
    product_id: "8100012236-IB",
    product_name: "5W USB Power Adapter",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_5w_usb_power_adapter_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-5w-usb-power-adapter-white-new-ib",
  },
  {
    product_id: "8100013060-IB",
    product_name: "Earpods With 3.5 mm Headphone Plug",
    product_price: 549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-earpods-with-3-5-mm-headphone-plug-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-earpods-with-3-5-mm-headphone-plug-new-ib",
  },
  {
    product_id: "8100013061-IB",
    product_name: "Earpods With Lightning Connector",
    product_price: 549000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-earpods-lightning-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-earpods-with-lightning-connector-new-ib",
  },
  {
    product_id: "8100003260-IB",
    product_name:
      "iMac (Retina 4K, 21.5 inci, 2020) 2.3GHz, 8GB RAM, 256 SSD, Silver",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_21.5_inci_2.3ghz_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-21-5-inci-2020",
  },
  {
    product_id: "8100003261-IB",
    product_name:
      "iMac (Retina 4K, 21.5 inci, 2020) 3.6GHz, 8GB RAM, 256 SSD, Silver",
    product_price: 20799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_21.5_inci_3ghz_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-21-5-inci-retina-4k-2020",
  },
  {
    product_id: "8100003262-IB",
    product_name:
      "iMac (Retina 4K, 21.5 inci, 2020) 3.0GHz, 8GB RAM, 256 SSD, Silver",
    product_price: 24199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_21.5_inci_3ghz_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-21-5-inci-retina-4k-2020",
  },
  {
    product_id: "8100003263-IB",
    product_name:
      "iMac (Retina 5K, 27 inci, 2020) 3.1GHz, 8GB RAM, 256 SSD, Silver",
    product_price: 29699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_27_inci_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-27-inci-retina-5k-2020",
  },
  {
    product_id: "8100003264-IB",
    product_name:
      "iMac (Retina 5K, 27 inci, 2020) 3.3GHz, 8GB RAM, 512 SSD, Silver",
    product_price: 32999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_27_inci_silver_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-27-inci-retina-5k-2020",
  },
  {
    product_id: "8100003265-IB",
    product_name:
      "iMac (Retina 5K, 27 inci, 2020) 3.8GHz, 8GB RAM, 512 SSD, Silver",
    product_price: 37999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_27_inci_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-27-inci-retina-5k-2020",
  },
  {
    product_id: "8100025621-IB",
    product_name: "Mazer Cable USB to USB 120CM 3.1A - Black",
    product_price: 59000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/cable-usb-a-to-usb-c-120cm-3.1a-black_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-usb-to-usb-120cm-3-1a-black-ib",
  },
  {
    product_id: "8100013379-IB",
    product_name: "Feeltek Lightning to USB-A 100cm - Gold",
    product_price: 219000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100012-1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-100cm-gold-ib",
  },
  {
    product_id: "8200000008-IB",
    product_name:
      "ShiftCam Universal Filter Adapter 12mm Aspherical Ultra Wide-Angle Lens",
    product_price: 96000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_universal_filter_adapter_12mm_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-universal-filter-adapter-12mm-aspherical-ultra-wide-angle-lens-ib",
  },
  {
    product_id: "8100005973-IB",
    product_name: "Micropack 2 in 1 Lightning - Gold",
    product_price: 379000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6970517492312_micropack_i218_cable_mfi_2_in_1_lightning_1.8_m_-_gold_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-2-in-1-lightning-gold-ib",
  },
  {
    product_id: "8100005974-IB",
    product_name: "Micropack 2 in 1 Lightning - Rose Gold",
    product_price: 379000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6970517492329_micropack_i218_cable_mfi_2_in_1_lightning_1.8_m_-_rose_gold_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-2-in-1-lightning-rose-gold-qrp-new-ib",
  },
  {
    product_id: "8100007686-IB",
    product_name: "Mazer Converter USB C to VGA - White",
    product_price: 79000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_-_converter_usb_c_to_vga_abs_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-converter-usb-c-to-vga-white-ib",
  },
  {
    product_id: "8100007756-IB",
    product_name: "Mazer 2 in 1 Cable 0.18M - Black",
    product_price: 129000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/v/bv.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-2-in-1-cable-0-18m-black-ib",
  },
  {
    product_id: "8100007760-IB",
    product_name:
      "Mazer ALU.DURA.TEK USB-C to Lightning 30W/3.1A PD Fast Charging 1.2M Cable - Black",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer-alu.dura.tek-usb-c-to-lightning-30w3.1a-pd-fast-charging-1.2m-cable-black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-alu-dura-tek-usb-c-to-lightning-30w-3-1a-pd-fast-charging-1-2m-cable-black-ib",
  },
  {
    product_id: "8100005819-IB",
    product_name: "Feeltek USB-C to HDMI Cable 180cm - Grey",
    product_price: 449000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471005551_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-usb-c-to-hdmi-cable-180cm-grey-ib",
  },
  {
    product_id: "8100007753-IB",
    product_name:
      "Mazer Cable 3-In-1 Lightning/Micro/Type-C Rugged 1.5M - Black",
    product_price: 179000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_cable_3-in-1-15m-black_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-3in1-lightning-micro-typec-rugged-1-5m-black-ib",
  },
  {
    product_id: "8100007806-IB",
    product_name: "Belkin Mixit DuraTek Lightning with Kevlar 1.2M Rose - Gold",
    product_price: 499000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_mixit_duratek_lightning_with_kevlar_1.2m_rose_gold_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-mixit-duratek-lightning-with-kevlar-1-2m-rose-gold-ib",
  },
  {
    product_id: "8100003913-IB",
    product_name: "Belkin Car Dash and Window Mount",
    product_price: 559000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin-car-dash-and-window-mount-1_3_1_1.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-car-dash-and-window-mount-ib",
  },
  {
    product_id: "8100007724-IB",
    product_name: "Casemate iPhone 11 Tough Groove - Iridescent",
    product_price: 149000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_tough_groove_-_iridescent_7_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-tough-groove-iridescent-ib",
  },
  {
    product_id: "8100008057-IB",
    product_name:
      "Belkin HDMI to VGA Projector Adapter with 3.5 mm and Micro-USB Power Up",
    product_price: 199000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_hdmi_to_vga_projector_adapter_with_3.5_mm_and_micro-usb_power_up_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-hdmi-to-vga-projector-adapter-with-3-5-mm-and-micro-usb-power-up-ib",
  },
  {
    product_id: "8200000011-IB",
    product_name: "ShiftCam 3-in-1 Travel Set iPhone 11",
    product_price: 389000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia06040156446021_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-3-in-1-travel-set-iphone-1-ib",
  },
  {
    product_id: "8200000012-IB",
    product_name: "ShiftCam 5-in-1 Travel Set iPhone 11 Pro",
    product_price: 439000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia06040156446261_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-5-in-1-travel-set-iphone-11-pro-ib",
  },
  {
    product_id: "8200000005-IB",
    product_name:
      "ShiftCam CPL and Universal Filter Adapter 12mm Aspherical Ultra Wide-Angle Lens",
    product_price: 339000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_cpl_and_universal_filter_adapter_12mm_aspherical_ultra_wide-angle_lens_0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-cpl-universal-filter-adapter-12mm-aspherical-ultra-wide-angle-lens-ib",
  },
  {
    product_id: "8200000001-IB",
    product_name: "ShiftCam 3-in-1 Travel Set for iPhone XR",
    product_price: 309000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/aph3000301-500-500_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-3-in-1-travel-set-for-iphone-xr-ib",
  },
  {
    product_id: "8200000007-IB",
    product_name: "ShiftCam Premium Bag All ProLens And Aspherical Lens",
    product_price: 289000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_premium_bag_all_prolens_aspherical_lens_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-premium-bag-all-prolens-aspherical-lens-ib",
  },
  {
    product_id: "8200000016-IB",
    product_name: "ShiftCam ProLens 10x25 Macro",
    product_price: 479000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/5/954953_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/shiftcam-prolens-10x25-macro-ib",
  },
  {
    product_id: "8100004865-IB",
    product_name:
      "Kate Spade New York Protective Hardshell Case for iPhone 11 - Hollyhock Floral Clear/Cream with Ston",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/9/191058101006_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-hollyhock-floral-clear-cream-with-ston-ib",
  },
  {
    product_id: "8100004869-IB",
    product_name:
      "Kate Spade New York Protective Hardshell Case for iPhone 11 Pro Max - Soft Touch Disco Dots Black/Gold/Crystal Gems/Pearls",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/s/ksnyphcforiphone11promaxsofttouchdiscodotsblackgoldcryst_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-max-soft-touch-disco-dots-blackgoldcrystal-gemspearls-ib",
  },
  {
    product_id: "8100004871-IB",
    product_name:
      "Kate Spade New York Protective Hardshell Case (1-PC Comold) for iPhone 11 - Scattered Flowers Black",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/s/ksnyphcforiphone11scatteredflowersblack_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-1-pc-comold-for-iphone-11-scattered-flowers-black-ib",
  },
  {
    product_id: "8100004873-IB",
    product_name:
      "Kate Spade new york Protective Hardshell Case for iPhone 11 Pro - Spade Flower Pearl Foil/Crystal Gems",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_nyphc_for_iphone_11_pro_spade_flower_pearl_foilcrystal_gems_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-spade-flower-pearl-foilcrystal-gems-ib",
  },
  {
    product_id: "8100004878-IB",
    product_name:
      "Kate Spade New York Wrap Case for iPhone 11 Pro Max - Gold Munera Gold PC/Gold Logo",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/s/ks_nywc_for_iphone_11_pro_max_gold_munera_gold_pcgold_logo_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-wrap-case-for-iphone-11-pro-max-gold-munera-gold-pcgold-logo-ib",
  },
  {
    product_id: "8100004874-IB",
    product_name:
      "Kate Spade New York Protective Hardshell Case for iPhone 11 - Spade Flower Pearl Foil/Crystal Gems",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/s/ksnyphcforiphone11spade_flower_pearl_foilcrystal_gems_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-spade-flower-pearl-foilcrystal-gems-ib",
  },
  {
    product_id: "8100004887-IB",
    product_name:
      "Coach Protective Case for iPhone 11 Pro - Dreamy Peony Clear/Pink/Glitter",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach-protective-case-for-iphone-11-pro-dreamy-peony-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-pro-dreamy-peony-clearpinkglitter-ib",
  },
  {
    product_id: "8100004889-IB",
    product_name:
      "Coach Protective Case for iPhone 11 Pro Max - Dreamy Peony Clear/Pink/Glitter",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach-protective-case-for-iphone-11-pro-max-dreamy-peony-1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-pro-max-dreamy-peony-clearpinkglitter-ib",
  },
  {
    product_id: "8100004890-IB",
    product_name: "Coach Slim Wrap Case for iPhone 11 Pro Signature C - Khaki",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/9/191058104205_1.jpeg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/coach-slim-wrap-case-for-iphone-11-pro-signature-c-khaki-ib",
  },
  {
    product_id: "8100004960-IB",
    product_name: "Coach Slim Wrap Case for iPhone 11 Signature C - Khaki",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/9/191058104212_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-slim-wrap-case-for-iphone-11-signature-c-khaki-ib",
  },
  {
    product_id: "8100004963-IB",
    product_name: "Coach Slim Wrap Case for iPhone 11 Signature C - Black",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/3/6357356cv12d_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-slim-wrap-case-for-iphone-11-signature-c-black-ib",
  },
  {
    product_id: "8100004970-IB",
    product_name:
      "Coach Protective Case for iPhone 11 - Glitter Americana Neutral Silver Glitter/Gold Glitter/Rose Gold Glitter/Multi",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach_glitter-americana-protective-case-iphone-11_verizon-990x990_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-glitter-americana-neutral-silver-glittergold-glitterrose-gold-glittermulti-ib",
  },
  {
    product_id: "8100005154-IB",
    product_name: "Mazer Alu USB-C to HDMI 4K+VGA Dual Display Adapter",
    product_price: 229000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic5055517361040_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-alu-usbc-to-hdmi-4kplusvga-dual-display-adapter-ib",
  },
  {
    product_id: "8100006128-IB",
    product_name:
      "Mazer Multiport USB-C to 3 x USB 3.0 + LAN + HDMI 4K + SD/MicroSD + USB-C",
    product_price: 799000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/s/usb-c_pd_3.0_adapter-01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-multiport-usbc-to-3-x-usb-3-0-plus-lan-plus-hdmi-4k-plus-sd-microsd-plus-usbc-ib",
  },
  {
    product_id: "8100003789-IB",
    product_name: "Micropack Powerbank Discovery 10.000 - Black Grey",
    product_price: 799000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/i/micropack.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-powerbank-discovery-10-000-black-grey-ib",
  },
  {
    product_id: "8100003923-IB",
    product_name: "Belkin USB-C + USB-A AC Charger, 15W+12W - Silver",
    product_price: 349000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_usb_c_a_charger_15w_12w_-_silver_600x600px_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-usb-c-usb-a-ac-charger-15w-12w-silver-ib",
  },
  {
    product_id: "8100007804-IB",
    product_name:
      "Belkin Watch Valet  Charge Dock for Apple Watch + iPhone with Lightning Connector - White",
    product_price: 499000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_watch_valet_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-watch-valet-charge-dock-for-apple-watch-plus-iphone-with-lightning-connector-white-ib",
  },
  {
    product_id: "8100008058-IB",
    product_name: "Belkin Pocket Power 10K - Silver",
    product_price: 299000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin-pocket-power-10k---silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-pocket-power-10k-silver-ib",
  },
  {
    product_id: "8100013393-IB",
    product_name: "Feeltek Jet Glass 8 in 1 USB-C Lego Hub - Black",
    product_price: 1599000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_jet_glass_8_in_1_usb-c_lego_hub_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-jet-glass-8-in-1-usb-c-lego-hub-black-ib",
  },
  {
    product_id: "8100013182-IB",
    product_name: "IT Power Connector USB A to USB C Cable - Black",
    product_price: 149000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it7_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-a-to-usb-c-cable-black-ib",
  },
  {
    product_id: "8100013188-IB",
    product_name: "IT Power Connector USB A to Lightning Cable - Black",
    product_price: 249000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it8_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-a-to-lightning-cable-black-ib",
  },
  {
    product_id: "8100013190-IB",
    product_name: "IT Power Connector USB C to Lightning Cable - White",
    product_price: 319000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it9_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-lightning-cable-white-ib",
  },
  {
    product_id: "8100013193-IB",
    product_name: "IT Plug IT 30 Wall Charger 30W - White",
    product_price: 249000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it13_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-plug-30-wall-charger-30w-white-ib",
  },
  {
    product_id: "8100013196-IB",
    product_name:
      "IT Plug IT 65 GaN Charger 65W - Black (for HP, Macbook, Nintendo Switch, etc)",
    product_price: 779000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it6_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/it-plug-65-gan-charger-65w-black-ib",
  },
  {
    product_id: "8100013199-IB",
    product_name:
      "IT Multi Port 5 in 1 Hub with USB-C cable for Macbook, iPad, PC and Tablet",
    product_price: 689000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it4-new.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-multi-port-5-in-1-hub-with-usb-c-cable-for-macbook-ipad-pc-tablet-ib",
  },
  {
    product_id: "8100013198-IB",
    product_name:
      "IT Multi Port 8 in 1 Hub with USB-C cable for Macbook, iPad, PC and Tablet",
    product_price: 819000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it5-new.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-multi-port-8-in-1-hub-with-usb-c-cable-for-macbook-ipad-pc-tablet-ib",
  },
  {
    product_id: "8100013203-IB",
    product_name:
      "IT Portable Charger Prime 10,000 mAh Power Bank with PD and QC",
    product_price: 489000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it11-new.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/it-portable-charger-prime-10-000-mah-power-bank-with-pd-qc-ib",
  },
  {
    product_id: "8100013205-IB",
    product_name:
      "IT Portable Charger Pro 10,000 mAh Slim Power Bank with PD and QC",
    product_price: 319000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it10_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-portable-charger-pro-10-000-mah-slim-power-bank-with-pd-qc-ib",
  },
  {
    product_id: "8100005959-IB",
    product_name: "EMZ MacBook Sleeve with Stand 13 - Black",
    product_price: 199000,
    brand: "EMZ",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/icemz-slmbp13-bk1_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/emz-macbook-sleeve-with-stand-13-black-ib",
  },
  {
    product_id: "8100013395-IB",
    product_name: "Feeltek Portable 9 in 2 USB-C Hub - Gray",
    product_price: 1279200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471005861_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-portable-9-in-2-usb-c-hub-gray-ib",
  },
  {
    product_id: "8100013392-IB",
    product_name: "Feeltek Wireless Charging Pad 15W - Brown",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia843647100067-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-wireless-charging-pad-15w-brown-ib",
  },
  {
    product_id: "8100005459-IB",
    product_name: "Feeltek Elec HD Webcam 720P - Black",
    product_price: 299000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia843647100609-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-elec-hd-webcam-720p-black-ib",
  },
  {
    product_id: "8100006762-IB",
    product_name: "Feeltek Elec Full HD Webcam 1080P - Black",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia843647100616-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-elec-full-hd-webcam-1080p-black-ib",
  },
  {
    product_id: "8100008265-IB",
    product_name: "STM Rugged Case Plus iPad Pro 11 Inch 2nd Gen - Black",
    product_price: 1339000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461115501_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/stm-rugged-case-plus-ipad-pro-11-inch-2nd-gen-black-ib",
  },
  {
    product_id: "8100008267-IB",
    product_name: "STM Rugged Case Plus iPad Pro 12.9 Inch 4th Gen - Black",
    product_price: 1339000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461115501_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/stm-rugged-case-plus-ipad-pro-12-9-inch-4th-gen-black-ib",
  },
  {
    product_id: 8100007025,
    product_name: "OtterBox React iPhone SE 2nd Gen/iPhone 7/8 - Clear",
    product_price: 499000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042132231.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-react-iphone-se-2nd-gen-iphone-7-8-clear",
  },
  {
    product_id: "8100007025-IB",
    product_name: "OtterBox React iPhone SE 2nd Gen/iPhone 7/8 - Clear",
    product_price: 499000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042132231_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-react-iphone-se-2nd-gen-iphone-7-8-clear-ib",
  },
  {
    product_id: "IC4710343470762-IB",
    product_name: "Adam Elements iKlips C OTG Lightning/USB-C 128GB - Grey",
    product_price: 2699000,
    brand: "Adam Elements",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic47103434707791_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/adam-elements-iklips-c-otg-lightning-usb-c-128gb-grey-ib",
  },
  {
    product_id: "8100022961-IB",
    product_name: "AirPods Pro With Wireless Charging Case",
    product_price: 4199000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airpods_pro_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-airpods-pro-new-ib",
  },
  {
    product_id: "8100010757-IB",
    product_name: "AirPods With Wireless Charging Case Generasi ke 2",
    product_price: 2999000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-airpods-with-charging-case-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-airpods-with-wireless-charging-case-generasi-ke2-new-ib",
  },
  {
    product_id: "8100022962-IB",
    product_name: "AirPods With Charging Case Generasi ke 2",
    product_price: 2499000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-airpods-with-charging-case-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-airpods-with-charging-case-generasi-ke-2-new-ib",
  },
  {
    product_id: "8100012538-IB",
    product_name: "Lightning to 3.5 mm Headphone Jack Adapter",
    product_price: 249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-lightning-to-3.5-mm-headphone-jack-adapter_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lightning-to-3-5-mm-headphone-jack-adapter",
  },
  {
    product_id: "8100012548-IB",
    product_name: "Lightning to USB Cable 2m",
    product_price: 649000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-lightning-to-usb-cable-2m-1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-lightning-to-usb-cable-2m-new-ib",
  },
  {
    product_id: "8100012578-IB",
    product_name: "Pencil 1st Gen, White",
    product_price: 1999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-pencil-1_1_2_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-pencil-1st-gen-white-new-ib",
  },
  {
    product_id: "8100012582-IB",
    product_name: "Pencil 2nd Gen, White",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-pencil-2nd.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-pencil-2nd-gen-white-new-ib",
  },
  {
    product_id: "8100008378-IB",
    product_name: "Adidas iPhone XR Moulded - Blue",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_or_moulded_case_for_iphone_xr_fw_18_-_blue_3_1_3.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xr-moulded-blue-ib-con",
  },
  {
    product_id: "8100008376-IB",
    product_name: "Adidas iPhone XR Moulded - White/Black",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_iphone_xr_moulded_white_black_5_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xr-moulded-blue-ib-con",
  },
  {
    product_id: "8100008382-IB",
    product_name: "Adidas iPhone XS Max Moulded - Pink",
    product_price: 699000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_iphone_xs_max_moulded_pink-1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xs-max-moulded-ib-con",
  },
  {
    product_id: "8100008379-IB",
    product_name: "Adidas iPhone XS Max Moulded - Blue",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_or_moulded_case_pu_iphone_xs_max_fw_18_-_blue_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-xs-max-moulded-ib-con",
  },
  {
    product_id: "8100004967-IB",
    product_name: "Kate Spade AirPods Case - White",
    product_price: 549000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic1910581048471-1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kate-spade-airpods-case-ib",
  },
  {
    product_id: "8100004965-IB",
    product_name: "Kate Spade AirPods Case - Hollyhock",
    product_price: 549000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic1910581047931-1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kate-spade-airpods-case-ib",
  },
  {
    product_id: "8100004966-IB",
    product_name: "Kate Spade AirPods Case - Scattered Flowers",
    product_price: 549000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic191058104830-1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kate-spade-airpods-case-ib",
  },
  {
    product_id: "8100004968-IB",
    product_name: "Kate Spade AirPods Case - Gold",
    product_price: 549000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic1910581048541-1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kate-spade-airpods-case-ib",
  },
  {
    product_id: "8100007753-IB",
    product_name:
      "Mazer Cable 3-In-1 Lightning/Micro/Type-C Rugged 1.5M - Black",
    product_price: 449000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_cable_3-in-1-15m-black_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-3-in-1-lightning-micro-type-c-rugged-1-5m-ib",
  },
  {
    product_id: "8100007755-IB",
    product_name:
      "Mazer Cable 3-In-1 Lightning/Micro/Type-C Rugged 1.5M - Black/Blue",
    product_price: 449000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_cable_3-in-1-15m-blue_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-3-in-1-lightning-micro-type-c-rugged-1-5m-ib",
  },
  {
    product_id: "8100007759-IB",
    product_name: "Mazer Multi3 Duratek Ii Usb-A/C To Usb-C 1.5M - Red",
    product_price: 399000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/8/8881304541756_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-multi3-duratek-ii-usbac-to-usbc-15m-ib",
  },
  {
    product_id: "8100007758-IB",
    product_name: "Mazer Multi3 Duratek Ii Usb-A/C To Usb-C 1.5M - Blue",
    product_price: 399000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8881304541749_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-multi3-duratek-ii-usbac-to-usbc-15m-ib",
  },
  {
    product_id: "8100006357-IB",
    product_name:
      "Micropack Cable USB-A to Lightning Charge and Sync 1.2m - Red",
    product_price: 229000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/_/b_19_3.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-cable-usba-to-lightning-charge-and-sync-1-2m-ib",
  },
  {
    product_id: "8100006356-IB",
    product_name:
      "Micropack Cable USB-A to Lightning Charge and Sync 1.2m - Black",
    product_price: 219000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_19.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-cable-usba-to-lightning-charge-and-sync-1-2m-ib",
  },
  {
    product_id: "8100004085-IB",
    product_name: "Monocozzi Gritty for iPhone X - Stone Grey",
    product_price: 429000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_gritty_for_iphone_x_-_stone_grey.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/monocozzi-gritty-for-iphone-x-ib",
  },
  {
    product_id: "8100004086-IB",
    product_name: "Monocozzi Gritty for iPhone X - Red",
    product_price: 429000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_gritty_for_iphone_x_-_red.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/monocozzi-gritty-for-iphone-x-ib",
  },
  {
    product_id: "8100004084-IB",
    product_name: "Monocozzi Gritty for iPhone X - Black",
    product_price: 429000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_gritty_for_iphone_x_-_black.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/monocozzi-gritty-for-iphone-x-ib",
  },
  {
    product_id: "8100004088-IB",
    product_name: "Monocozzi iPad 9.7 2018 with Pencil - Tan",
    product_price: 649000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-2018_ipad9.7_-lucidfolio-brown_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-ipad-9-7-2018-with-pencil-ib",
  },
  {
    product_id: "8100004087-IB",
    product_name: "Monocozzi iPad 9.7 2018 with Pencil - Charcoal",
    product_price: 649000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-2018_ipad9.7_-lucidfolio-black_01.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-ipad-9-7-2018-with-pencil-ib",
  },
  {
    product_id: "8100004216-IB",
    product_name:
      "Monocozzi Lucid Acrylic Hybrid TPU Bumper iPhone 11 - Charcoal",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_lucid_acrylic_hybrid_tpu_bumper_iphone_11_-_charcoal.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-acrylic-hybrid-tpu-bumper-iphone-11-ib",
  },
  {
    product_id: "8100004217-IB",
    product_name: "Monocozzi Lucid Acrylic Hybrid TPU Bumper iPhone 11 - Beige",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/i/fiottqmg1569298572.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-acrylic-hybrid-tpu-bumper-iphone-11-ib",
  },
  {
    product_id: "8100004214-IB",
    product_name:
      "Monocozzi Lucid Acrylic Hybrid TPU Bumper iPhone 11 Pro - Charcoal",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-lucid-iphone19_6.5_cha_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-acrylic-hybrid-tpu-bumper-iphone-11-pro-ib",
  },
  {
    product_id: "8100004215-IB",
    product_name:
      "Monocozzi Lucid Acrylic Hybrid TPU Bumper iPhone 11 Pro - Beige",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-lucid-iphone19_6.5_bei_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-acrylic-hybrid-tpu-bumper-iphone-11-pro-ib",
  },
  {
    product_id: "8100004080-IB",
    product_name:
      "Monocozzi Lucid iPad Pro 10.5  Folio Shock Resist Detachable Cover - Tan",
    product_price: 649000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-lucid_plus_folio-tan-01_508eaa5b-d097-4d1b-a6c3-7ecb90ea3e8f.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-ipad-pro-10-5-folio-shock-resist-detachable-cover-ib",
  },
  {
    product_id: "8100004079-IB",
    product_name:
      "Monocozzi Lucid iPad Pro 10.5  Folio Shock Resist Detachable - Charcoal",
    product_price: 649000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-lucid_plus_folio-charcoal-01_76751c6c-9df6-4cf0-b1ed-40d433b1fbd3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-ipad-pro-10-5-folio-shock-resist-detachable-cover-ib",
  },
  {
    product_id: "8100004082-IB",
    product_name: "Monocozzi Lucid Slim iPhone X - White",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi-lucid-slim-iphone-x-white.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-x-ib",
  },
  {
    product_id: "8100004083-IB",
    product_name: "Monocozzi Lucid Slim iPhone X - Black",
    product_price: 299000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi-lucid-slim-iphone-x-black.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-x-ib",
  },
  {
    product_id: "8100004229-IB",
    product_name: "Monocozzi Lucid Slim iPhone Xs - White",
    product_price: 329000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-iphone5.8-white01.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-xs-ib",
  },
  {
    product_id: "8100004091-IB",
    product_name: "Monocozzi Lucid Slim iPhone Xs - Black",
    product_price: 329000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-iphone5.8-black01.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-xs-ib",
  },
  {
    product_id: "8100004093-IB",
    product_name: "Monocozzi Lucid Slim iPhone Xs Max - White",
    product_price: 329000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-iphone6.5-white01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-xs-max-ib",
  },
  {
    product_id: "8100004092-IB",
    product_name: "Monocozzi Lucid Slim iPhone Xs Max - Black",
    product_price: 329000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-case-iphone6.5-black01.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-iphone-xs-max-ib",
  },
  {
    product_id: "IC4895199101241-IB",
    product_name:
      "Monocozzi Lucid Slim Ultra Slim (0.3mm) Case for iPhone 7 - Grey",
    product_price: 279000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi-lucid-slim-ultra-slim-case-for-iphone-7-grey_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-ultra-slim-0-3mm-case-for-iphone-7-ib",
  },
  {
    product_id: "IC4895199101234-IB",
    product_name:
      "Monocozzi Lucid Slim Ultra Slim (0.3mm) Case for iPhone 7 - White",
    product_price: 279000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi-lucid-slim-ultra-slim-case-for-iphone-7-white_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-slim-ultra-slim-0-3mm-case-for-iphone-7-ib",
  },
  {
    product_id: "8100029004-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell Case for MacBook Pro 13 - White",
    product_price: 599000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_lucid_translucent_hard_shell_case_for_macbook_pro_13_-_white.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-case-for-macbook-pro-13",
  },
  {
    product_id: "8100016238-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell Case for MacBook Pro 13 - Black",
    product_price: 599000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_lucid_translucent_hard_shell_case_for_macbook_pro_13_-_black.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-case-for-macbook-pro-13",
  },
  {
    product_id: "8100004207-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell MacBook Air 13 Touch Bar - White",
    product_price: 749000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/lucid-newmacbookpro-13inch-white-1_1__1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-macbook-air-13-touch-bar-ib",
  },
  {
    product_id: "8100004206-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell MacBook Air 13 Touch Bar - Black",
    product_price: 749000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/lucid-newmacbookpro-13inch-black-1_41ecfd59-e67e-48ae-9d7a-5061bae53995_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-macbook-air-13-touch-bar-ib",
  },
  {
    product_id: "8100004073-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell MacBook Air 13 Touch Bar - White",
    product_price: 649000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/lucid-newmacbookpro-13inch-white-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-macbook-air-13-touch-bar-ib-new",
  },
  {
    product_id: "8100013811-IB",
    product_name:
      "Monocozzi Lucid Translucent Hard Shell MacBook Air 13 Touch Bar Black",
    product_price: 649000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/lucid-newmacbookpro-13inch-black-1_41ecfd59-e67e-48ae-9d7a-5061bae53995.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-lucid-translucent-hard-shell-macbook-air-13-touch-bar-ib-new",
  },
  {
    product_id: "8100004223-IB",
    product_name:
      "Monocozzi Pattern Lab Soft TPU Bumper Cover for iPhone 11 - Gradation",
    product_price: 349000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_pattern_lab_soft_tpu_bumper_cover_for_iphone_11_-_gradation-1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-soft-tpu-bumper-cover-for-iphone-11-ib",
  },
  {
    product_id: "8100004222-IB",
    product_name:
      "Monocozzi Pattern Lab Soft TPU Bumper Cover for iPhone 11 - Floral",
    product_price: 349000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_pattern_lab_soft_tpu_bumper_cover_for_iphone_11_-_floral-1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-soft-tpu-bumper-cover-for-iphone-11-ib",
  },
  {
    product_id: "8100004225-IB",
    product_name:
      "Monocozzi Pattern Lab Soft TPU Bumper Cover iPhone 11 Pro Max - Gradation",
    product_price: 349000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mono-patternl-iphone19_6.5_gra_1_3cf7c8d4-5e16-44eb-88b3-c23d3c61491b_2048x2048.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-soft-tpu-bumper-cover-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004224-IB",
    product_name:
      "Monocozzi Pattern Lab Soft TPU Bumper Cover iPhone 11 Pro Max - Floral",
    product_price: 349000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/x/a/xax_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-pattern-lab-soft-tpu-bumper-cover-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100003996-IB",
    product_name: "OtterBox + Pop Symmetry iPhone XR  - Go To Blue",
    product_price: 859000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxr_pop_symm10.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otter-plus-pop-symmetry-iphone-xr-ib",
  },
  {
    product_id: "8100003995-IB",
    product_name: "OtterBox + Pop Symmetry iPhone XR - Black",
    product_price: 859000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxr_pop_symm1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otter-plus-pop-symmetry-iphone-xr-ib",
  },
  {
    product_id: "8100003998-IB",
    product_name: "OtterBox + Pop Symmetry iPhone Xs Max - Go To Blue",
    product_price: 859000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxsm_pop_symm10.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otter-plus-pop-symmetry-iphone-xs-max-ib",
  },
  {
    product_id: "8100003997-IB",
    product_name: "OtterBox + Pop Symmetry iPhone Xs Max - Black",
    product_price: 859000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxsm_pop_symm1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otter-plus-pop-symmetry-iphone-xs-max-ib",
  },
  {
    product_id: "8100003795-IB",
    product_name: "Micropack Wall Charger PD248 Smart - Black",
    product_price: 549000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6970517492862-1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-wall-charger-pd248-smart-black-ib",
  },
  {
    product_id: "8100004116-IB",
    product_name: "Otterbox Commuter Series iPhone 11 Pro Max - Black",
    product_price: 519000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-max-black-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004117-IB",
    product_name: "Otterbox Commuter Series iPhone 11 Pro Max - Bespoke Way",
    product_price: 519000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-commuter-series-iphone-11-pro-max-bespoke-way-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-series-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004113-IB",
    product_name: "Otterbox Pop Symmetry iPhone 11 - Mint To Be",
    product_price: 859000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-pop-symmetry-iphone-11-mint-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-pop-symmetry-iphone-11-ib",
  },
  {
    product_id: "8100004112-IB",
    product_name: "Otterbox Pop Symmetry iPhone 11 - Black",
    product_price: 859000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-pop-symmetry-iphone-11-black-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-pop-symmetry-iphone-11-ib",
  },
  {
    product_id: "8100003840-IB",
    product_name: "Micropack Wireless Power Bank 10KC 10.000 mAh - Black",
    product_price: 769000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6970517493647-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-wireless-power-bank-10kc-10-000-mah-black-ib",
  },
  {
    product_id: "8100003987-IB",
    product_name: "OtterBox Statement iPhone XR - Lucent Storm",
    product_price: 799000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxr-sta-lucentstorm-b.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/otterboax-statement-iphone-xr-ib",
  },
  {
    product_id: "8100003986-IB",
    product_name: "OtterBox Statement iPhone XR - Lucent Jade",
    product_price: 799000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxr-sta-lucentjade-b.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/otterboax-statement-iphone-xr-ib",
  },
  {
    product_id: "8100003990-IB",
    product_name: "OtterBox Statement iPhone Xs Max - Lucent Storm",
    product_price: 799000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxsmax-sta-lucentstorm-b_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterboax-statement-iphone-xs-max-ib",
  },
  {
    product_id: "8100003989-IB",
    product_name: "OtterBox Statement iPhone Xs Max - Lucent Jade",
    product_price: 799000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxsmax-sta-lucentjade-b.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterboax-statement-iphone-xs-max-ib",
  },
  {
    product_id: "8100003988-IB",
    product_name: "OtterBox Statement iPhone Xs Max - Lucent Black",
    product_price: 799000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipxsmax-sta-lucentblack-b_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterboax-statement-iphone-xs-max-ib",
  },
  {
    product_id: "8100004106-IB",
    product_name: "Otterbox Symmetry Clear iPhone 11 - Clear",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-clear-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-ib",
  },
  {
    product_id: "8100004107-IB",
    product_name: "Otterbox Symmetry Clear iPhone 11 - Stardust",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-star-dust-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-clear-iphone-11-ib",
  },
  {
    product_id: "8100003796-IB",
    product_name: "Micropack Wireless Charging Pad 10PD - Black",
    product_price: 599000,
    brand: "Micropack",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6970517493630-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/micropack-wireless-charging-pad-10pd-black-ib",
  },
  {
    product_id: "8100004118-IB",
    product_name: "Otterbox Symmetry Series iPhone 11 Pro Max - Black",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-black-1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004119-IB",
    product_name: "Otterbox Symmetry Series iPhone 11 Pro Max - Risk Tiger",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-risk-tiger-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004121-IB",
    product_name:
      "Otterbox Symmetry Series iPhone 11 Pro Max - We'll Call Blue",
    product_price: 699000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox-symmetry-series-iphone-11-pro-max-weecallblue-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-series-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100005084-IB",
    product_name: "Popsockets Luxe - Acetate Pearl White",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005085-IB",
    product_name: "Popsockets Luxe - Acetate Classic Tortoise",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781411141_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005090-IB",
    product_name: "Popsockets Luxe - Backspin Aluminum Black",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005091-IB",
    product_name: "Popsockets Luxe - Backspin Aluminum Starry Eye",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781456861_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005199-IB",
    product_name: "Popsockets Luxe - Tidepool Galaxy Purple",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781585251_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005092-IB",
    product_name: "Popsockets Luxe - Backspin Aluminum Mind Trap",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781456931_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005203-IB",
    product_name: "Popsockets Luxe - Glam Inlay Acetate Lilac",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781667801_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005204-IB",
    product_name: "Popsockets Luxe - Glam Inlay Acetate Rose Gold",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781667971_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005205-IB",
    product_name: "Popsockets Luxe - Glam Inlay Acetate Aquamarine",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781668031_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005198-IB",
    product_name: "Popsockets Luxe - Tidepool Rose",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781584951_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005197-IB",
    product_name: "Popsockets Luxe - Tidepool Halo White",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781584881_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005206-IB",
    product_name: "Popsockets Luxe - Acetate Powder Blue",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781668101_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-luxe-ib",
  },
  {
    product_id: "8100005207-IB",
    product_name: "Popsockets Premium - Pebbled Vegan Leather Rose Gold",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781669881_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005312-IB",
    product_name: "Popsockets Premium - Pebbled Vegan Leather Black",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781713711_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005191-IB",
    product_name: "Popsockets Premium - Color Chrome Powder Pink",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781576271_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005188-IB",
    product_name: "Popsockets Premium - Enamel Donut Pink",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781534211_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005192-IB",
    product_name: "Popsockets Premium - Color Chrome Seafoam",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781576411_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005194-IB",
    product_name: "Popsockets Premium - Foil Confetti Lilac",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781582661_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005086-IB",
    product_name: "Popsockets Premium - Twist Black Aluminum",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005088-IB",
    product_name: "Popsockets Premium - Pressed Flower Delphinium Pink",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005087-IB",
    product_name: "Popsockets Premium - Twist Rose Gold Aluminum",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781411691_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005076-IB",
    product_name: "Popsockets Premium - Aluminum Black",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005073-IB",
    product_name: "Popsockets Premium - Sparkle Rose",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005072-IB",
    product_name: "Popsockets Premium - Sparkle Black",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005068-IB",
    product_name: "Popsockets Premium - Glitter Morning Haze",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005187-IB",
    product_name: "Popsockets Premium - Enamel Ride the Wave Coral",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781533841_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005071-IB",
    product_name: "Popsockets Premium - Sparkle Snow White",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/popsockets_premium_sparkle_snow_white_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005094-IB",
    product_name: "Popsockets Premium - Pressed Flower White Daisy",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781501471_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005089-IB",
    product_name: "Popsockets Premium - Pressed Flower Larkspur Purple",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781449001_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005208-IB",
    product_name: "Popsockets Premium - Pebbled Vegan Leather Prussian Navy",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781669951_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005210-IB",
    product_name: "Popsockets Premium - Glitter Peach Shores",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781672991_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005078-IB",
    product_name: "Popsockets Premium - Glitter Nebula",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781390051_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005195-IB",
    product_name: "Popsockets Premium - Foil Confetti Silver",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781582801_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005189-IB",
    product_name: "Popsockets Premium - Enamel Solar Flare Black",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781534691_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005070-IB",
    product_name: "Popsockets Premium - Color Chrome Mermaid White",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781353351_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005077-IB",
    product_name: "Popsockets Premium - Glitter Black",
    product_price: 179000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781389471_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-premium-ib",
  },
  {
    product_id: "8100005456-IB",
    product_name: "Popsockets Standard - Saturn Stargazer",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781904881_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005454-IB",
    product_name: "Popsockets Standard - Garden Party",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781904331_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005451-IB",
    product_name: "Popsockets Standard - The Hills are Alive",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005448-IB",
    product_name: "Popsockets Standard - Just Hanging Out",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781894441_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005447-IB",
    product_name: "Popsockets Standard - Daydreaming Dorothy",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781891921_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005446-IB",
    product_name: "Popsockets Standard - Boho Bouquet White",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005445-IB",
    product_name: "Popsockets Standard - Super Camo",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005443-IB",
    product_name: "Popsockets Standard - Garden State",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781889111_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005444-IB",
    product_name: "Popsockets Standard - Mahalo",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005442-IB",
    product_name: "Popsockets Standard - Micro Blossoms",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781886901_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005319-IB",
    product_name: "Popsockets Standard - Papaya Party",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781798031_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005316-IB",
    product_name: "Popsockets Standard - Rainbow Journey",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005343-IB",
    product_name: "Popsockets Standard - Sun and Moon",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781882321_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005323-IB",
    product_name: "Popsockets Standard - So Fly",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781801441_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005455-IB",
    product_name: "Popsockets Standard - Rosy Glow",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781904711_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005457-IB",
    product_name: "Popsockets Standard - Shaky Bones White",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781905251_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005450-IB",
    product_name: "Popsockets Standard - Pink Moon",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781897031_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005453-IB",
    product_name: "Popsockets Standard - Peony Perfume",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781903961_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005317-IB",
    product_name: "Popsockets Standard - Ocean View",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_20_7_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005441-IB",
    product_name: "Popsockets Standard - May Day",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781886831_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005449-IB",
    product_name: "Popsockets Standard - Leslie's Special Aqua",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781894441_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005320-IB",
    product_name: "Popsockets Standard - Fineapple",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781798271_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005344-IB",
    product_name: "Popsockets Standard - Dreamy Galaxy Swirl",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781885081_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005318-IB",
    product_name: "Popsockets Standard - Berry Bloom",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781797801_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005342-IB",
    product_name: "Popsockets Standard - Bee Boho",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781882181_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100005346-IB",
    product_name: "Popsockets Standard - Strawberry Milk Tie Dye",
    product_price: 129000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8429781885601_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/popsockets-standard-ib",
  },
  {
    product_id: "8100013747-IB",
    product_name: "Spigen AirPods Case - Black",
    product_price: 249000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-airpods-case-black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-airpods-case-ib",
  },
  {
    product_id: "IA8809613763324-IB",
    product_name: "Spigen AirPods Case - Grey",
    product_price: 249000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613763324-ib_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-airpods-case-ib",
  },
  {
    product_id: "8100013904-IB",
    product_name: "Spigen AirPods Pro Case Silicone Fit - Pink",
    product_price: 379000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_silicone_fit_-_pink-1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-case-silicone-fit-ib",
  },
  {
    product_id: "8100007484-IB",
    product_name: "Spigen AirPods Pro Case Silicone Fit - Black",
    product_price: 379000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_silicone_fit_-_black-1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-case-silicone-fit-ib",
  },
  {
    product_id: "8100013907-IB",
    product_name: "Spigen AirPods Pro Case Tough Armor - Military Green",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_tough_armor_-_military_green-1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-case-tough-armor-ib",
  },
  {
    product_id: "8100013906-IB",
    product_name: "Spigen AirPods Pro Case Tough Armor - Charcoal",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_tough_armor_-_charcoal-1_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-case-tough-armor-ib",
  },
  {
    product_id: "8100007487-IB",
    product_name: "Spigen AirPods Pro Case Tough Armor - Black",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_tough_armor_-_black-1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-case-tough-armor-ib",
  },
  {
    product_id: "8100007324-IB",
    product_name: "Spigen Hybrid NX + Frame for iPhone 11 - Matte Black",
    product_price: 549000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_hybrid_nx_matt_blk_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-hybrid-nx-frame-for-iphone-11-ib",
  },
  {
    product_id: "8100007325-IB",
    product_name: "Spigen Hybrid NX + Frame for iPhone 11 - Gunmetal",
    product_price: 549000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/i/title_ipxi_hybrid_nx_navy_blue_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-hybrid-nx-frame-for-iphone-11-ib",
  },
  {
    product_id: "8100008734-IB",
    product_name: "Spigen iPhone X/XS Classic C1 - Graphite",
    product_price: 699000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs-classic-c1-black-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-classic-c1-ib",
  },
  {
    product_id: "8100008733-IB",
    product_name: "Spigen iPhone X/XS Classic C1 - Ruby",
    product_price: 699000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs-classic-c1-red-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-classic-c1-ib",
  },
  {
    product_id: "8100007059-IB",
    product_name: "Spigen iPhone X/XS Slim Armor - Satin Silver",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs--slim-armor-silver-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-slim-armor-ib",
  },
  {
    product_id: "8100007055-IB",
    product_name: "Spigen iPhone X/XS Slim Armor - Champagne Gold",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-xr-slim-armor-champagne-1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-slim-armor-ib",
  },
  {
    product_id: "8100007054-IB",
    product_name: "Spigen iPhone X/XS Slim Armor - Gunmetal",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs--slim-armor-metal-1_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-slim-armor-ib",
  },
  {
    product_id: "8100007056-IB",
    product_name: "Spigen iPhone X/XS Slim Armor - Black",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/capturea_1_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-slim-armor-ib",
  },
  {
    product_id: "8100007058-IB",
    product_name: "Spigen iPhone X/XS Slim Armor - Merlot Red",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613766325-ib1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-slim-armor-ib",
  },
  {
    product_id: "8100007057-IB",
    product_name: "Spigen iPhone X/XS Slim Armor - Rose Gold",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs--slim-armor-rose-1_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-x-xs-slim-armor-ib",
  },
  {
    product_id: "8100007190-IB",
    product_name: "Spigen iPhone XR Slim Armor - Blue",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613768268_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-ib",
  },
  {
    product_id: "8100007189-IB",
    product_name: "Spigen iPhone XR Slim Armor - White",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613768251_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-ib",
  },
  {
    product_id: "8100007066-IB",
    product_name: "Spigen iPhone XR Slim Armor - Rose Gold",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613766417_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-ib",
  },
  {
    product_id: "8100007064-IB",
    product_name: "Spigen iPhone XR Slim Armor - Champagne Gold",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-x-xs--slim-armor-champagne-1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-ib",
  },
  {
    product_id: "8100007052-IB",
    product_name: "Spigen iPhone XS Slim Armor - Black",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/images_4_.jpeg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-ib",
  },
  {
    product_id: "8100007188-IB",
    product_name: "Spigen iPhone XR Slim Armor - Red",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/spigen-iphone-xr-slim-armor-ib",
  },
  {
    product_id: "8100007332-IB",
    product_name: "Spigen La Manon Calin for iPhone 11 - Pale Pink",
    product_price: 599000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/_/8_max_1__1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-la-manon-calin-for-iphone-11-ib",
  },
  {
    product_id: "8100007330-IB",
    product_name: "Spigen La Manon Calin for iPhone 11 - Chic Black",
    product_price: 599000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/2/9200000117577642_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-la-manon-calin-for-iphone-11-ib",
  },
  {
    product_id: "8100007333-IB",
    product_name: "Spigen La Manon Calin for iPhone 11 - Camel Brown",
    product_price: 599000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/2/9200000117577918_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-la-manon-calin-for-iphone-11-ib",
  },
  {
    product_id: "8100007331-IB",
    product_name: "Spigen La Manon Calin for iPhone 11 - Oatmeal Beige",
    product_price: 599000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/_/8_max_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-la-manon-calin-for-iphone-11-ib",
  },
  {
    product_id: "8100007326-IB",
    product_name: "Spigen Slim Armor for iPhone 11 - Black",
    product_price: 549000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigenb1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-ib",
  },
  {
    product_id: "8100007327-IB",
    product_name: "Spigen Slim Armor for iPhone 11 - Gunmetal",
    product_price: 549000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigeng1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-ib",
  },
  {
    product_id: "8100007328-IB",
    product_name: "Spigen Slim Armor for iPhone 11 - Rose Gold",
    product_price: 549000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigenr1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-ib",
  },
  {
    product_id: "8100007074-IB",
    product_name: "Spigen Slim Armor iPhone XS Max - Black",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/capturea_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-iphone-xs-max-ib",
  },
  {
    product_id: "8100007073-IB",
    product_name: "Spigen Slim Armor iPhone XS Max - Champagne Gold",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic88096137664866_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-iphone-xs-max-ib",
  },
  {
    product_id: "8100007072-IB",
    product_name: "Spigen Slim Armor iPhone XS Max - Gunmetal",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/z/azazaz5_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-iphone-xs-max-ib",
  },
  {
    product_id: "8100007075-IB",
    product_name: "Spigen Slim Armor iPhone XS Max - Rose Gold",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613766516-ib1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-iphone-xs-max-ib",
  },
  {
    product_id: "8100007077-IB",
    product_name: "Spigen Slim Armor iPhone XS Max - Satin Silver",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen1_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-iphone-xs-max-ib",
  },
  {
    product_id: "8100008841-IB",
    product_name: "STM Grace Sleeve (13inch) - Night Sky",
    product_price: 656000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81ke6w3infl._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-grace-sleeve-13inch-ib",
  },
  {
    product_id: "8100008840-IB",
    product_name: "STM Grace Sleeve (13inch) - Hunter Green",
    product_price: 656000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/1/9156hbnr9nl._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-grace-sleeve-13inch-ib",
  },
  {
    product_id: "8100008262-IB",
    product_name: "STM Grace Sleeve (13inch) - Cloud Grey",
    product_price: 656000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/1/91dd6gdh6yl._ac_sl1500_.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-grace-sleeve-13inch-ib",
  },
  {
    product_id: "8100008847-IB",
    product_name: "STM Must Stash - Windsor Wine",
    product_price: 349000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81kqgblyh_l._ac_sl1500_.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/stm-must-stash-granite-ib",
  },
  {
    product_id: "8100008845-IB",
    product_name: "STM Must Stash - Granite Black",
    product_price: 349000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/1/91bohvlw9kl._ac_sl1500_.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/stm-must-stash-granite-ib",
  },
  {
    product_id: "8100008974-IB",
    product_name: "STM Myth Sleeve (13inch) - Windsor Wine",
    product_price: 1279000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm-2018-myth-collection-sleeve-windsorwine-front-square_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-myth-sleeve-13inch-granite-ib",
  },
  {
    product_id: "8100008973-IB",
    product_name: "STM Myth Sleeve (13inch) - Slate Blue",
    product_price: 1279000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm-2018-myth-collection-sleeve-slateblue-front-square_1-768x601.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-myth-sleeve-13inch-granite-ib",
  },
  {
    product_id: "8100008972-IB",
    product_name: "STM Myth Sleeve (13inch) - Granite Black",
    product_price: 1279000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm-2018-myth-collection-sleeve_graniteblack-front-square.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-myth-sleeve-13inch-granite-ib",
  },
  {
    product_id: "8100008266-IB",
    product_name:
      "STM Rugged Case Plus iPad Pro 11 Inch 2nd Gen - Midnight Blue",
    product_price: 1339000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461116111_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/stm-rugged-case-plus-ipad-pro-11-inch-2nd-gen-ib",
  },
  {
    product_id: "8100008265-IB",
    product_name: "STM Rugged Case Plus iPad Pro 11 Inch 2nd Gen - Black",
    product_price: 1339000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461115501_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/stm-rugged-case-plus-ipad-pro-11-inch-2nd-gen-ib",
  },
  {
    product_id: "8100013708-IB",
    product_name: "UAG AirPods Pro Silicone Case - Orange",
    product_price: 499000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_pro_silicone_case-_orange-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-airpods-pro-silicone-case-ib",
  },
  {
    product_id: "8100013707-IB",
    product_name: "UAG AirPods Pro Silicone Case - Olive Drab",
    product_price: 499000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_pro_silicone_case-_olive_drab-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-airpods-pro-silicone-case-ib",
  },
  {
    product_id: "8100013705-IB",
    product_name: "UAG AirPods Pro Silicone Case - Black",
    product_price: 499000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_pro_silicone_case-_black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-airpods-pro-silicone-case-ib",
  },
  {
    product_id: "8100004594-IB",
    product_name: "UAG AirPods Pro Silicone Case - Black/Orange",
    product_price: 499000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_airpods_pro_silicone_case-_black_orange-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-airpods-pro-silicone-case-ib",
  },
  {
    product_id: "8100013702-IB",
    product_name: "UAG Apple AirPods Silicone Case - Olive Drab",
    product_price: 449000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic10185e1172971_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-airpods-silicone-case-olive-drab-ib",
  },
  {
    product_id: "8100013700-IB",
    product_name: "UAG Apple AirPods Silicone Case - Black",
    product_price: 449000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic10185e114040c_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-airpods-silicone-case-olive-drab-ib",
  },
  {
    product_id: "8100008457-IB",
    product_name: "UAG Apple iPhone 11 Plasma - Ice",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-plasma-ice-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/uag-apple-iphone-11-plasma-ib",
  },
  {
    product_id: "8100008456-IB",
    product_name: "UAG Apple iPhone 11 Plasma - Ash",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-plasma-ash-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/uag-apple-iphone-11-plasma-ib",
  },
  {
    product_id: "8100008462-IB",
    product_name: "UAG Apple iPhone 11 Pro Max Monarch - Black",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-monarch-black-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-monarch-ib",
  },
  {
    product_id: "8100008464-IB",
    product_name: "UAG Apple iPhone 11 Pro Max Monarch - Crimson",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-max-monarch-crimson-1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-monarch-ib",
  },
  {
    product_id: "8100008463-IB",
    product_name: "UAG Apple iPhone 11 Pro Max Monarch - Carbon Fiber",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag-apple-iphone-11-pro-monarch-carbon-1_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-max-monarch-ib",
  },
  {
    product_id: "8100008290-IB",
    product_name: "UAG Apple iPhone Xs Plasma - Ash/Black",
    product_price: 659000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_iphone_xs_plasma_case_-_ash_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-xs-plasma-ash-ib",
  },
  {
    product_id: "8100008280-IB",
    product_name: "UAG Apple iPhone Xs Plasma - Ice/Black",
    product_price: 659000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uag_iphone_xs_plasma_case_-_ice_black-1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-xs-plasma-ash-ib",
  },
  {
    product_id: "8100008279-IB",
    product_name: "UAG iPad 2017 9.7 Metropolis Case - Cobalt",
    product_price: 749000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8543320076771_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-ipad-2017-9-7-metropolis-case-ib",
  },
  {
    product_id: "8100008278-IB",
    product_name: "UAG iPad 2017 9.7 Metropolis Case - Magma",
    product_price: 749000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-ipad-2017-9-7-metropolis-case-ib",
  },
  {
    product_id: "8100008124-IB",
    product_name: "UNIQ Glacier Luxe Kanvas for iPhone X - Slate Grey",
    product_price: 349000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_glacier_luxe_kanvas_for_iphone_x_-_slate_grey.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-glacier-luxe-kanvas-for-iphone-x-ib",
  },
  {
    product_id: "8100008123-IB",
    product_name: "UNIQ Glacier Luxe Kanvas for iPhone X - Pewter Beige",
    product_price: 349000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_glacier_luxe_kanvas_for_iphone_x_-_pewter_beige.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-glacier-luxe-kanvas-for-iphone-x-ib",
  },
  {
    product_id: "8100008128-IB",
    product_name: "UNIQ Xtremsis for iPhone X - Ebon Black/Black",
    product_price: 499000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_xtremsis_for_iphone_x_-_ebon_black_black.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-xtremsis-for-iphone-x-cobalt-ib",
  },
  {
    product_id: "8100008127-IB",
    product_name: "UNIQ Xtremsis For iPhone X - Cobalt Grey/Navy",
    product_price: 499000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_xtremsis_for_iphone_x_-_cobalt_grey_navy.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-xtremsis-for-iphone-x-cobalt-ib",
  },
  {
    product_id: "8100008146-IB",
    product_name: "UNIQ Yorker New iPad 10.5 (2019) Kanvas - Velvet Mist Grey",
    product_price: 599000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_yorker_new_ipad_10.5_2019_kanvas_-_velvet_mist_grey.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-yorker-new-ipad-10-5-2019-kanvas-ib",
  },
  {
    product_id: "8100008145-IB",
    product_name:
      "UNIQ Yorker New iPad 10.5 (2019) Kanvas - Obsidian Knit (Black)",
    product_price: 599000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/n/uniq_yorker_new_ipad_10.5_2019_kanvas_-_obsidian_knit_black_.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-yorker-new-ipad-10-5-2019-kanvas-ib",
  },
  {
    product_id: "8100008144-IB",
    product_name: "UNIQ Yorker New iPad Mini 5 Kanvas - Velvet Mist Grey",
    product_price: 499000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kanvas-ipad-grey_1_.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-yorker-new-ipad-mini-5-kanvas-ib",
  },
  {
    product_id: "8100008143-IB",
    product_name: "UNIQ Yorker New iPad Mini 5 Kanvas - Obsidiant Knit Black",
    product_price: 499000,
    brand: "Uniq",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kanvas-ipad-black.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uniq-yorker-new-ipad-mini-5-kanvas-ib",
  },
  {
    product_id: "8100011047-IB",
    product_name: "urBeats3 Earphones with Lightning Connector - Black",
    product_price: 1800000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/1/61i8ck6nqml._ac_sl1500__1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/urbeats3-earphones-with-lightning-connector-ib",
  },
  {
    product_id: "8100011048-IB",
    product_name: "urBeats3 Earphones with Lightning Connector - Matte Gold",
    product_price: 1800000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/-/s-l1600_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/urbeats3-earphones-with-lightning-connector-ib",
  },
  {
    product_id: "8100004806-IB",
    product_name:
      "X-doria Defense Lux Casing for iPhone Xs Max - Black Leather",
    product_price: 529000,
    brand: "X-doria",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/7/473200_web_xdoria_defenselux_iphone_xsmax_blackleather_01_280x.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/xdoria-defense-lux-casing-for-iphone-xs-max-ib",
  },
  {
    product_id: "8100004805-IB",
    product_name:
      "X-doria Defense Lux Casing for iPhone Xs Max - Black Carbon Fiber",
    product_price: 529000,
    brand: "X-doria",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/7/473194_web_xdoria_defenselux_iphone_xsmax_black-carbon-fiber_01_320x.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/xdoria-defense-lux-casing-for-iphone-xs-max-ib",
  },
  {
    product_id: "8100015100-IB",
    product_name: "Alto Casing Genuine Leather Anello for iPhone X - Raven",
    product_price: 825000,
    brand: "Alto",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic728028394085.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/alto-casing-genuine-leather-anello-for-iphone-x-ib",
  },
  {
    product_id: "8100016480-IB",
    product_name: "Alto Casing Genuine Leather Anello for iPhone X - Navy",
    product_price: 825000,
    brand: "Alto",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/a/6a7abdc0241b9bb0a5d34793f78a171d_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/alto-casing-genuine-leather-anello-for-iphone-x-ib",
  },
  {
    product_id: "8100006401-IB",
    product_name: "Anker PowerCore+ 10050mAh with Quick Charge 3.0 - Pink",
    product_price: 965000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/s/ssxsx_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powercore-10050mah-with-quick-charge-3-0-ib",
  },
  {
    product_id: "8100006400-IB",
    product_name: "Anker PowerCore+ 10050mAh with Quick Charge 3.0 - Silver",
    product_price: 965000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/s/ssxsxa.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powercore-10050mah-with-quick-charge-3-0-ib",
  },
  {
    product_id: "8100006393-IB",
    product_name: "Anker PowerCore+ 10050mAh with Quick Charge 3.0 - Black",
    product_price: 965000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/1/a1311011_td01_v1_0.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powercore-10050mah-with-quick-charge-3-0-ib",
  },
  {
    product_id: "8100006390-IB",
    product_name: "Anker PowerLine+ Lightning (3ft/0.9m) With Pouch - Gold",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerline-plus-lightning-3ft-0-9m-with-pouch-ib",
  },
  {
    product_id: "8100006389-IB",
    product_name: "Anker PowerLine+ Lightning (3ft/0.9m) With Pouch - Red",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerline-plus-lightning-3ft-0-9m-with-pouch-ib",
  },
  {
    product_id: "8100006464-IB",
    product_name: "Anker PowerLine+ Lightning (3ft/0.9m) With Pouch - White",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerline-lightning-white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerline-plus-lightning-3ft-0-9m-with-pouch-ib",
  },
  {
    product_id: "8100011036-IB",
    product_name: "Beats Powerbeats Pro - Black",
    product_price: 3999000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-black_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-black-ib",
  },
  {
    product_id: "8100011039-IB",
    product_name: "Beats Powerbeats Pro - Navy",
    product_price: 3999000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-navy_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-black-ib",
  },
  {
    product_id: "8100011038-IB",
    product_name: "Beats Powerbeats Pro - Moss",
    product_price: 3999000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-moss_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-black-ib",
  },
  {
    product_id: "8100011037-IB",
    product_name: "Beats Powerbeats Pro - Ivory",
    product_price: 3999000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/powerbeats-pro-ivory_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats-pro-black-ib",
  },
  {
    product_id: "8100010917-IB",
    product_name: "Beats Solo 3 Wireless - Gold",
    product_price: 4980000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats_solo_3_wireless_gold_1_1_3_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-solo-3-wireless-ib",
  },
  {
    product_id: "8100010884-IB",
    product_name: "Beats Solo 3 Wireless - Silver",
    product_price: 4980000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats_solo_3_wireless_silver_1_1_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-solo-3-wireless-ib",
  },
  {
    product_id: "MNET2ZA-A-IB",
    product_name: "Beats Solo3 Wireless Headphones - Rose Gold",
    product_price: 4980000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51pbyjvsxsl._ac_sl1000__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-ib",
  },
  {
    product_id: "MNEQ2ZA-A-IB",
    product_name: "Beats Solo3 Wireless Headphones - Silver",
    product_price: 4980000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51liwulu7cl._ac_sl1000__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-ib",
  },
  {
    product_id: "MNER2ZA-A-IB",
    product_name: "Beats Solo3 Wireless Headphones - Gold",
    product_price: 4980000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/1/71c3puhb_2l._ac_sl1500__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-ib",
  },
  {
    product_id: "MP582ZA-A-IB",
    product_name: "Beats Solo3 Wireless Headphones - Black",
    product_price: 4980000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/1/51qxa-98q_l._ac_sl1000__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/beats-solo3-wireless-headphones-ib",
  },
  {
    product_id: "8100013665-IB",
    product_name:
      "Casemate Airpods Case - Creaturepods - Edge The Bad Boy Case - White/Red",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-airpods-case-creaturepods-edge-the-bad-boy-case-whitered_1_3.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-creaturepods-ib",
  },
  {
    product_id: "8100013661-IB",
    product_name:
      "Casemate Airpods Case - Creaturepods - Tricky Trickster Case - Blue",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-airpods-case-creaturepods-tricky-trickster-case-blue_1_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-creaturepods-ib",
  },
  {
    product_id: "IC846127190749-IB",
    product_name: "Casemate AirPods Case Rifle Paper Co - Meadow",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127190749-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-rifle-paper-co-ib",
  },
  {
    product_id: "8100007867-IB",
    product_name:
      "Casemate AirPods Case Rifle Paper Co - Clear Blush Garden Party",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127190732-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-rifle-paper-co-ib",
  },
  {
    product_id: "8100013624-IB",
    product_name:
      "Casemate Airpods Hook Ups Case + Neck Strap - Fushia Dark Pink",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-fushia_dark_pink_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-ib",
  },
  {
    product_id: "8100013625-IB",
    product_name:
      "Casemate Airpods Hook Ups Case + Neck Strap - Living Coral Light Pink",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-living_coral_light_pink_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-ib",
  },
  {
    product_id: "8100013681-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Edge The Bad Boy Case - White/Red",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191838a_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-ib",
  },
  {
    product_id: "8100013680-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Ozzy Dramatic Case - White/Black",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191821_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-ib",
  },
  {
    product_id: "8100013679-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Chuck The Cool Guy Case - Green",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191814_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-ib",
  },
  {
    product_id: "8100007873-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Spike Harmless Case - Black",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191807_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-ib",
  },
  {
    product_id: "8100013678-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Tricky Trickster Case - Blue",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/m/cmi-tricky_pro-img_1_1_-min_copy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-ib",
  },
  {
    product_id: "8100013676-IB",
    product_name:
      "Casemate AirPods Pro Hookups Sheer Crystal Blush with Pink Circular Ring",
    product_price: 329000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191050_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-hookups-sheer-ib",
  },
  {
    product_id: "8100007869-IB",
    product_name:
      "Casemate AirPods Pro Hookups Sheer Crystal Clear with Silver Circular Ring",
    product_price: 329000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191043_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-hookups-sheer-ib",
  },
  {
    product_id: "8100013675-IB",
    product_name:
      "Casemate AirPods Pro Rifle Paper Meadow with Gold Circular Ring",
    product_price: 449000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191128_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-rifle-paper-ib",
  },
  {
    product_id: "8100013677-IB",
    product_name:
      "Casemate AirPods Pro Rifle Paper Garden Party Blush with Gold Circular Ring",
    product_price: 449000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic846127191135_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-rifle-paper-ib",
  },
  {
    product_id: "8100007457-IB",
    product_name: "Casemate Barely There iPhone Xs - Black",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xs-barely-there-black_1_1_3_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casemate-iphone-xs-barely-ib",
  },
  {
    product_id: "8100007456-IB",
    product_name: "Casemate Barely There iPhone XS - Clear",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xs-barely-there-clear_1_2_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casemate-iphone-xs-barely-ib",
  },
  {
    product_id: "8100007585-IB",
    product_name: "Casemate Barely There iPhone XS Max - Cardinal",
    product_price: 349000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xs-max-barely-there--cardinal_1_1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xs-max-barely-there-ib",
  },
  {
    product_id: "8100007584-IB",
    product_name: "Casemate Barely There iPhone Xs Max - Blush",
    product_price: 349000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xs-max-barely-there-blush_1_3_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xs-max-barely-there-ib",
  },
  {
    product_id: "8100007731-IB",
    product_name: "Casemate iPhone 11 Pro Max Tough Speckled - White",
    product_price: 599000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_tough_speckled_white_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-tough-speckled-ib",
  },
  {
    product_id: "8100007441-IB",
    product_name: "Casemate iPhone X Brilliance - Brooch",
    product_price: 999000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-x-brilliance---brooch_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-x-brilliance-ib-new",
  },
  {
    product_id: "8100007440-IB",
    product_name: "Casemate iPhone X  Brilliance - Iridescent",
    product_price: 999000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-x-brilliance---iridescent_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-x-brilliance-ib-new",
  },
  {
    product_id: "8100013655-IB",
    product_name: "Casemate Rifle Paper for iPhone 11 Pro Max - Happy Stripes",
    product_price: 599000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/m/cmi_iphone_11s_6.5_riflepaper_happystripes_cm039410_1-min_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-rifle-paper-for-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100013674-IB",
    product_name: "Casemate Rifle Paper for iPhone 11 Pro Max - Gorgeous Girl",
    product_price: 599000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/a/aax_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-rifle-paper-for-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100008837-IB",
    product_name: "Caseology iPhone Xs Max Skyfall Series - Gold",
    product_price: 529000,
    brand: "Caseology",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/1/712vyvybcdl._ac_sl1500_.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/caseology-iphone-xs-max-skyfall-series-ib",
  },
  {
    product_id: "8100008832-IB",
    product_name: "Caseology iPhone Xs Max Skyfall Series - Black",
    product_price: 529000,
    brand: "Caseology",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/1/71lhczs8rtl._ac_sl1500_.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/caseology-iphone-xs-max-skyfall-series-ib",
  },
  {
    product_id: "8100004487-IB",
    product_name: "CaseStudi iPhone 8 Case - Military Tiger",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/8/4897071253642_1__1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-8-case-ib",
  },
  {
    product_id: "8100004486-IB",
    product_name: "CaseStudi iPhone 8 Case - Military Black",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/8/4897071253703.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-8-case-ib",
  },
  {
    product_id: "8100004482-IB",
    product_name: "CaseStudi iPhone 8 Case - Kind of Blue",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prim_blue_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-8-case-ib",
  },
  {
    product_id: "8100004364-IB",
    product_name: "CaseStudi iPhone 8 Case - I Will Always Love You",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casestudi-iphone-8-case---i-will-always-love-you.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-8-case-ib",
  },
  {
    product_id: "8100004481-IB",
    product_name: "CaseStudi iPhone X - Marble White",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/marble_white_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-ib",
  },
  {
    product_id: "8100004480-IB",
    product_name: "CaseStudi iPhone X - Marble Black",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casestudi-4897071255813-1-500x450.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-ib",
  },
  {
    product_id: "8100004479-IB",
    product_name: "CaseStudi iPhone X Case - Nouvelle",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/n/o/nouvel_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-case-ib",
  },
  {
    product_id: "8100004484-IB",
    product_name: "CaseStudi iPhone X Case - Military Tiger",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/8/4897071253642_2_.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-case-ib",
  },
  {
    product_id: "8100004478-IB",
    product_name: "CaseStudi iPhone X Case - Kind of Blue",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/x/_/x_kind_of_blue_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-case-ib",
  },
  {
    product_id: "8100004366-IB",
    product_name: "CaseStudi iPhone X Case - I will Always",
    product_price: 259000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casestudi_love_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-case-ib",
  },
  {
    product_id: "8100004485-IB",
    product_name: "CaseStudi iPhone X Case - SQ Black",
    product_price: 280000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/5/8/5879741_r1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-x-case-ib",
  },
  {
    product_id: "8100004497-IB",
    product_name: "CaseStudi iPhone Xs Max - Blossom",
    product_price: 379000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/6/_/6.5_6_blossom_b_front_w.iphone_1000_1024x1024_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-xs-max-ib",
  },
  {
    product_id: "8100004500-IB",
    product_name: "CaseStudi iPhone Xs Max - Rose",
    product_price: 419000,
    brand: "CaseStudi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/r/o/rose1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/casestudi-iphone-xs-max-ib",
  },
  {
    product_id: "8100004969-IB",
    product_name:
      "Coach Protective Case for iPhone 11 Pro - Glitter Americana Neutral Silver Glitter/Multi",
    product_price: 799000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100004887-IB",
    product_name:
      "Coach Protective Case for iPhone 11 Pro - Dreamy Peony Clear/Pink/Glitter",
    product_price: 799000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach-protective-case-for-iphone-11-pro-dreamy-peony-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100004971-IB",
    product_name:
      "Coach Protective Case for iPhone 11 Pro Max - Glitter Americana Neutral Silver Glitter/Multi",
    product_price: 799000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coachb1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004889-IB",
    product_name:
      "Coach Protective Case for iPhone 11 Pro Max - Dreamy Peony Clear/Pink/Glitter",
    product_price: 799000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach-protective-case-for-iphone-11-pro-max-dreamy-peony-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004964-IB",
    product_name:
      "Coach Slim Wrap Case for iPhone 11 Pro Max - Signature C Black",
    product_price: 899000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach-protective-case-for-iphone-11-pro-max-signature-c-black-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-slim-wrap-case-for-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100013769-IB",
    product_name:
      "Coach Slim Wrap Case for iPhone 11 Pro Max - Signature C Khaki",
    product_price: 899000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coach-protective-case-for-iphone-11-pro-max-signature-c-khaki-1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-slim-wrap-case-for-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100005935-IB",
    product_name: "EMZ Macbook Case 13 inch Touch Bar - White",
    product_price: 499000,
    brand: "EMZ",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/m/emz-04_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/emz-macbook-case-13-inch-touch-bar-ib",
  },
  {
    product_id: "8100005933-IB",
    product_name: "EMZ Macbook Case 13 inch Touch Bar - Black",
    product_price: 499000,
    brand: "EMZ",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/emz-macbook-case-13-inch-touch-bar-ib",
  },
  {
    product_id: "8100005960-IB",
    product_name: "EMZ MacBook Sleeve with Stand 13 - Brown",
    product_price: 399000,
    brand: "EMZ",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/icemz-slmbp13-br1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/emz-macbook-sleeve-with-stand-13-ib",
  },
  {
    product_id: "8100005959-IB",
    product_name: "EMZ MacBook Sleeve with Stand 13 - Black",
    product_price: 399000,
    brand: "EMZ",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/icemz-slmbp13-bk1_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/emz-macbook-sleeve-with-stand-13-ib",
  },
  {
    product_id: "8100013379-IB",
    product_name: "Feeltek Lightning to USB-A 100cm - Gold",
    product_price: 219000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100012-1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-100cm-ib",
  },
  {
    product_id: "8100013378-IB",
    product_name: "Feeltek Lightning to USB-A 100cm - Black",
    product_price: 219000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100036-1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-100cm-ib",
  },
  {
    product_id: "8100013387-IB",
    product_name: "Feeltek Lightning to USB-A 180cm - Gold",
    product_price: 249000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100012-1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-180cm-ib",
  },
  {
    product_id: "8100013388-IB",
    product_name: "Feeltek Lightning to USB-A 180cm - Black",
    product_price: 249000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100036-1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-180cm-ib",
  },
  {
    product_id: "8100013383-IB",
    product_name: "Feeltek Nano Power Bank 10000 mAh - Gray",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia843647100081-ib.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-nano-power-bank-10000-mah-ib",
  },
  {
    product_id: "8100013384-IB",
    product_name: "Feeltek Nano Power Bank 10000 mAh - Gold",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/a/aaad.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-nano-power-bank-10000-mah-ib",
  },
  {
    product_id: "8100013165-IB",
    product_name: "Feeltek Omni PD Power Bank 10000 mAh - Gray",
    product_price: 799000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8436471001041_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-omni-pd-power-bank-10000-mah-ib",
  },
  {
    product_id: "8100013416-IB",
    product_name: "Feeltek Omni PD Power Bank 10000 mAh - Gold",
    product_price: 799000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic843647100098_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-omni-pd-power-bank-10000-mah-ib",
  },
  {
    product_id: "8100008661-IB",
    product_name: "iBacks Aurora Glass Case for iPhone X - Black",
    product_price: 799000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/s/ds.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-aurora-glass-case-for-iphone-x-ib",
  },
  {
    product_id: "8100008662-IB",
    product_name: "iBacks Aurora Glass Case for iPhone X - Silver",
    product_price: 799000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/2/4/24619116_b02cd538-6edd-4b92-aa94-dd347e7c7424_800_800_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-aurora-glass-case-for-iphone-x-ib",
  },
  {
    product_id: "8100004081-IB",
    product_name: "iBacks Catalyst Sleeve for Laptop/ Macbook 13inch - Blue",
    product_price: 999000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/2/-/2-c_orig_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-catalyst-sleeve-for-laptop-macbook-13inch-ib",
  },
  {
    product_id: "8100004071-IB",
    product_name: "iBacks Catalyst Sleeve for Laptop/ Macbook 13inch - Black",
    product_price: 999000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/2/-/2-c_orig_1__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-catalyst-sleeve-for-laptop-macbook-13inch-ib",
  },
  {
    product_id: "8100008677-IB",
    product_name: "iBacks Monarch for iPhone XR - Dark Grey",
    product_price: 529000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/c/scs_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ibacks-monarch-for-iphone-xr-ib",
  },
  {
    product_id: "8100008676-IB",
    product_name: "iBacks Monarch for iPhone XR - Navy",
    product_price: 529000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/w/d/wdw_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ibacks-monarch-for-iphone-xr-ib",
  },
  {
    product_id: "8100005773-IB",
    product_name: "iLuv iPhone XS Max Vyneer - Black",
    product_price: 229000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/v/y/vyneer_black_10_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iluv-iphone-xs-max-vyneer-ib",
  },
  {
    product_id: "8100005774-IB",
    product_name: "iLuv iPhone XS Max Vyneer - Pink",
    product_price: 229000,
    brand: "iLuv",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/v/y/vyneer_pink_01_b3419685-7f61-4d85-a5d8-3eb03a870dd2_480x480_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iluv-iphone-xs-max-vyneer-ib",
  },
  {
    product_id: "8100005867-IB",
    product_name:
      "Itskins 2M Hybrid Frost iPhone 11 Pro - Transparent/ Light Pink",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465453770_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-frost-iphone-11-pro-ib",
  },
  {
    product_id: "8100005760-IB",
    product_name: "ITSkins 2M Hybrid Frost iPhone 11 Pro  - Transparent Black",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxm-hybmk-bktr-marketing-3_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-frost-iphone-11-pro-ib",
  },
  {
    product_id: "8100005868-IB",
    product_name:
      "ITSkins 2M Hybrid Frost iPhone 11 Pro Max  - Transparent Light Pink",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxm-hybmk-lktr-marketing-3_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-frost-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100005755-IB",
    product_name:
      "ITSkins 2M Hybrid Frost iPhone 11 Pro Max  - Transparent Black",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxm-hybmk-bktr-marketing-3_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-frost-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100005769-IB",
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 - Transparent/ Plain Black",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic48944653104621_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-ib",
  },
  {
    product_id: "8100005762-IB",
    product_name: "ITSkins 2M Hybrid Solid iPhone 11  - Transparent Khaki",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxi-hybso-katr-03_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-ib",
  },
  {
    product_id: "8100005893-IB",
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 Pro - Transparent/ Plain Black",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465902049_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-ib",
  },
  {
    product_id: "8100005890-IB",
    product_name: "Itskins 2M Hybrid Solid iPhone 11 Pro - Transparent/ Khaki",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465875640_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-ib",
  },
  {
    product_id: "8100005764-IB",
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 Pro Max - Transparent/ Plain Black",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apxm-hybso-pbtr-03_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100005869-IB",
    product_name:
      "Itskins 2M Hybrid Solid iPhone 11 Pro Max - Transparent/ Khaki",
    product_price: 399000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465489038_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-2m-hybrid-solid-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100005761-IB",
    product_name:
      "ITSkins Hybrid Edge (Venum) for iPhone XS/X - SpaceGrey and Black",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/aphx-vnrld-sgbk-fornt.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-hybrid-edge-venum-for-iphone-xs-x-ib",
  },
  {
    product_id: "8100005892-IB",
    product_name: "ITSkins Hybrid Edge (Venum) for iPhone XS/X - Black Mat",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/aphx-vnrld-bkma-fornt.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-hybrid-edge-venum-for-iphone-xs-x-ib",
  },
  {
    product_id: "8100022902-IB",
    product_name: "JBL Charge 4 - Red",
    product_price: 3000000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-red-1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-ib",
  },
  {
    product_id: "8100004539-IB",
    product_name: "JBL Charge 4 - Green",
    product_price: 3000000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-green-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-ib",
  },
  {
    product_id: "8100004536-IB",
    product_name: "JBL Charge 4 - Blue",
    product_price: 3000000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-blue-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-ib",
  },
  {
    product_id: "8100004535-IB",
    product_name: "JBL Charge 4 - Black",
    product_price: 3000000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-charge-2-black-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-ib",
  },
  {
    product_id: "8100004524-IB",
    product_name: "JBL Clip 3 - Grey",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-grey_1_3.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004523-IB",
    product_name: "JBL Clip 3 - Red",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-red_1_3.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004522-IB",
    product_name: "JBL Clip 3 - Blue",
    product_price: 749000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-ocean-blue_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004521-IB",
    product_name: "JBL Clip 3 - Black",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-black_1_4.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004530-IB",
    product_name: "JBL Clip 3 - Sand",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-sand-1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004527-IB",
    product_name: "JBL Clip 3 - Green",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-green-1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004525-IB",
    product_name: "JBL Clip 3 - Teal",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-teal-1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004528-IB",
    product_name: "JBL Clip 3 - Yellow",
    product_price: 1200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-clip-3-yellow-1_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-clip-3-ib",
  },
  {
    product_id: "8100004717-IB",
    product_name: "JBL Earphone T110BT - White",
    product_price: 560000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_white_1_2_4.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-ib",
  },
  {
    product_id: "8100004720-IB",
    product_name: "JBL Earphone T110BT - Pink",
    product_price: 560000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_pink_1_5.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-ib",
  },
  {
    product_id: "8100004718-IB",
    product_name: "JBL Earphone T110BT - Blue",
    product_price: 560000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_blue_1_5.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-ib",
  },
  {
    product_id: "8100004719-IB",
    product_name: "JBL Earphone T110BT - Grey",
    product_price: 560000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_grey_1_6.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-ib",
  },
  {
    product_id: "8100004716-IB",
    product_name: "JBL Earphone T110BT - Black",
    product_price: 560000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_t110bt_black_1_2_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-earphone-t110bt-ib",
  },
  {
    product_id: "8100006275-IB",
    product_name: "JBL Flip 4 - Black",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6925281922442a.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-ib",
  },
  {
    product_id: "8100006276-IB",
    product_name: "JBL Flip 4 - White",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-ib",
  },
  {
    product_id: "8100006273-IB",
    product_name: "JBL Flip 4 - Grey",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_4_grey_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-ib",
  },
  {
    product_id: "8100006271-IB",
    product_name: "JBL Flip 4 - Blue",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_4_blue_1_2_4_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-ib",
  },
  {
    product_id: "8100006272-IB",
    product_name: "JBL Flip 4 - Teal",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic69252819224111_5_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-ib",
  },
  {
    product_id: "8100006274-IB",
    product_name: "JBL Flip 4 - Red",
    product_price: 2200000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_4_red_1_2_8_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-4-ib",
  },
  {
    product_id: "8100006277-IB",
    product_name: "JBL Pulse 3 - Black",
    product_price: 3800000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_pulse_3_black_1_2_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-pulse-3-ib",
  },
  {
    product_id: "8100006278-IB",
    product_name: "JBL Pulse 3 - White",
    product_price: 3800000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_pulse_3_white_1_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-pulse-3-ib",
  },
  {
    product_id: "8100014923-IB",
    product_name: "Kajsa Lance Collection iPhone X Back Case - Red",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/l/all_5_bd053cff-1e53-4c04-9829-e6f71515f037_2048x.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-lance-collection-iphone-x-back-case-ib",
  },
  {
    product_id: "8100016686-IB",
    product_name: "Kajsa Lance Collection iPhone X Back Case - Olive",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/l/all_7_add46aea-8203-4f4a-b523-bf51f1653580_2048x.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-lance-collection-iphone-x-back-case-ib",
  },
  {
    product_id: "8100016621-IB",
    product_name: "Kajsa Lance Collection iPhone X Back Case - Grey",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/l/all_8_9e38a62b-c7e9-425d-88f2-00bec96c1bbf_2048x.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-lance-collection-iphone-x-back-case-ib",
  },
  {
    product_id: "8100003943-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 - Burgundy",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_burgundy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-ib",
  },
  {
    product_id: "8100003944-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 - Black",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-ib",
  },
  {
    product_id: "8100003936-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro - Grey",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adc.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100003937-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro - Burgundy",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_burgundy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100003938-IB",
    product_name:
      "Kajsa Luxe Collection Genuine Leather Back Case for iPhone 11 Pro - Black",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_luxe_collection_genuine_leather_back_case_for_iphone_11_pro_black_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-luxe-collection-genuine-leather-back-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100016620-IB",
    product_name: "Kajsa Ninja Collection iPhone X Pocket Back Case - Green",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894505016378.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-ninja-collection-iphone-x-pocket-back-case-ib",
  },
  {
    product_id: "8100016466-IB",
    product_name: "Kajsa Ninja Collection iPhone X Pocket Back Case - Blue",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/s/ssc.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-ninja-collection-iphone-x-pocket-back-case-ib",
  },
  {
    product_id: "8100015311-IB",
    product_name: "Kajsa Ninja Collection iPhone X Pocket Back Case - Black",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894505016408.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-ninja-collection-iphone-x-pocket-back-case-ib",
  },
  {
    product_id: "8100015320-IB",
    product_name:
      "Kajsa Preppie Collection Genuine Leather Back iPhone Xs Max Red",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/x/x/xx.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-preppie-collection-genuine-leather-back-iphone-xs-max-ib",
  },
  {
    product_id: "8100016623-IB",
    product_name:
      "Kajsa Preppie Collection Genuine Leather Back iPhone Xs Max Black",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/d/gd.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-preppie-collection-genuine-leather-back-iphone-xs-max-ib",
  },
  {
    product_id: "8100006002-IB",
    product_name: "Kajsa Wireless Charger - White",
    product_price: 599000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894505019348.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-wireless-charger-ib",
  },
  {
    product_id: "8100006001-IB",
    product_name: "Kajsa Wireless Charger - Black",
    product_price: 599000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894505019331.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-wireless-charger-ib",
  },
  {
    product_id: "8100004873-IB",
    product_name:
      "Kate Spade new york Protective Hardshell Case for iPhone 11 Pro - Spade Flower Pearl Foil/Crystal Gems",
    product_price: 649000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_nyphc_for_iphone_11_pro_spade_flower_pearl_foilcrystal_gems_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100004870-IB",
    product_name:
      "Kate Spade New York Protective Hardshell Case for iPhone 11 Pro - Scattered Flowers Black/White",
    product_price: 649000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/katespadea4_2a.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-ib",
  },
  {
    product_id: "8100004109-IB",
    product_name: "LifeProof Slam iPhone 11 - Black Crystal",
    product_price: 579000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphl19-av_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-junk-food-ib",
  },
  {
    product_id: "8100004110-IB",
    product_name: "LifeProof Slam iPhone 11 - Junk Food",
    product_price: 579000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphl19-0c70_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-junk-food-ib",
  },
  {
    product_id: "8100004122-IB",
    product_name: "LifeProof Slam iPhone 11 Pro Max - Black Crystal",
    product_price: 579000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphp19-av_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-pro-max-ib",
  },
  {
    product_id: "8100004123-IB",
    product_name: "LifeProof Slam iPhone 11 Pro Max - Junk Food",
    product_price: 579000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/p/lpsl-apl-iphp19-0c70_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-slam-iphone-11-pro-max-ib",
  },
  {
    product_id: "IA846127177436-IB",
    product_name: "Casemate iPhone 8 Waterfall - Junk Food",
    product_price: 349000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/c/ac8461271774361_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/casemate-iphone-8-waterfall-ib",
  },
  {
    product_id: "8100007307-IB",
    product_name: "Casemate iPhone 8 Waterfall - Magenta",
    product_price: 349000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/c/ac8461271742821_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/casemate-iphone-8-waterfall-ib",
  },
  {
    product_id: "8100008353-IB",
    product_name: "UAG iPad 9.7 Screen Plyo - Ice",
    product_price: 1099000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic812451031669-ib1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-ipad-9-7-screen-plyo-ice-ib",
  },
  {
    product_id: "8100004019-IB",
    product_name: "Cozi Smart Travel Kit - Cherry Red",
    product_price: 599000,
    brand: "Cozi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic840021103867-ib1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/cozi-smart-travel-kit-ib",
  },
  {
    product_id: "8100004140-IB",
    product_name: "Cozi Smart Travel Kit - Dark Blue",
    product_price: 599000,
    brand: "Cozi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/0/104697816_5490cf1b-8333-4d52-aaab-3afc1174f065_742_409.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/cozi-smart-travel-kit-ib",
  },
  {
    product_id: "8100005998-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Solid Antimicrobial - Grey",
    product_price: 314100,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465994716-ib1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-solid-antimicrobial-grey-ib",
  },
  {
    product_id: "8100005998-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Solid Antimicrobial - Grey",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465994716-ib1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-solid-antimicrobial-ib",
  },
  {
    product_id: "8100005870-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Solid Antimicrobial - Plain Black",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465510862-ib1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-solid-antimicrobial-ib",
  },
  {
    product_id: "8100005770-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Frost Antimicrobial - Black",
    product_price: 314100,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465355982-ib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-frost-antimicrobial-black-ib",
  },
  {
    product_id: "8100005754-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Frost Antimicrobial - Light Pink",
    product_price: 314100,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465102500-ib1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-frost-antimicrobial-light-pink-ib",
  },
  {
    product_id: "8100005754-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Frost Antimicrobial - Light Pink",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465102500-ib1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-frost-antimicrobial-ib",
  },
  {
    product_id: "8100005770-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Frost Antimicrobial - Black",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465355982-ib1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-frost-antimicrobial-ib",
  },
  {
    product_id: "8100005882-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Frost Antimicrobial - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465683771a_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-frost-antimicrobial-ib",
  },
  {
    product_id: "8100005882-IB",
    product_name:
      "Itskins Case for iPhone SE 2020/8/7/6S/6 Spectrum Frost Antimicrobial - Transparent",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4894465683771a_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-iphone-se-2020-8-7-6s-6-spectrum-frost-antimicrobial-transparent-ib",
  },
  {
    product_id: "8100017803-IB",
    product_name: "1More ColorBuds T.W In-Ear Headphones - Pink",
    product_price: 899000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/ess6001t-pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/1more-colorbuds-t-w-in-ear-headphones-ib",
  },
  {
    product_id: "8100017802-IB",
    product_name: "1More ColorBuds T.W In-Ear Headphones - Green",
    product_price: 899000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/ess6001t-green_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/1more-colorbuds-t-w-in-ear-headphones-ib",
  },
  {
    product_id: "8100017801-IB",
    product_name: "1More ColorBuds T.W In-Ear Headphones - Gold",
    product_price: 899000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/ess6001t-gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/1more-colorbuds-t-w-in-ear-headphones-ib",
  },
  {
    product_id: "8100017800-IB",
    product_name: "1More ColorBuds T.W In-Ear Headphones - Black",
    product_price: 899000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/ess6001t-black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/1more-colorbuds-t-w-in-ear-headphones-ib",
  },
  {
    product_id: "8100005600-IB",
    product_name: "Turbo Vinator UV Sterilizer - Black",
    product_price: 1100000,
    brand: "Turbo",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/u/turbo_vinator_uv_sterilizer-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/turbo-vinator-uv-sterilizer-black-ib",
  },
  {
    product_id: "8100014421-IB",
    product_name: "1More Stylish BT In-Ear Headphones - Pink",
    product_price: 699000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/esd6001b-pink_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/1more-stylish-bt-in-ear-headphones-ib",
  },
  {
    product_id: "8100017807-IB",
    product_name: "1More Stylish BT In-Ear Headphones - Green",
    product_price: 699000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/esd6001b-green_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/1more-stylish-bt-in-ear-headphones-ib",
  },
  {
    product_id: "8100014420-IB",
    product_name: "1More Stylish BT In-Ear Headphones - Gold",
    product_price: 699000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/esd6001b-gold_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/1more-stylish-bt-in-ear-headphones-ib",
  },
  {
    product_id: "8100017806-IB",
    product_name: "1More Stylish BT In-Ear Headphones - Black",
    product_price: 699000,
    brand: "1More",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/s/esd6001b-black_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/1more-stylish-bt-in-ear-headphones-ib",
  },
  {
    product_id: "8100005794-IB",
    product_name: "Incase Sleeve for Macbook 13” Flight Nylon - Forest Green",
    product_price: 899000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100065409181_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/incase-sleeve-for-macbook-13-flight-nylon-forest-green-ib",
  },
  {
    product_id: "8100005792-IB",
    product_name: "Incase Sleeve for Macbook 13” Flight Nylon - Deep Orange",
    product_price: 899000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100065409011_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/incase-sleeve-for-macbook-13-flight-nylon-deep-orange-ib",
  },
  {
    product_id: "8100005792-IB",
    product_name: "Incase Sleeve for Macbook 13” Flight Nylon - Deep Orange",
    product_price: 899000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100065409011_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/incase-sleeve-for-macbook-13-flight-nylon-ib",
  },
  {
    product_id: "8100005794-IB",
    product_name: "Incase Sleeve for Macbook 13” Flight Nylon - Forest Green",
    product_price: 899000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100065409181_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/incase-sleeve-for-macbook-13-flight-nylon-ib",
  },
  {
    product_id: "8100005795-IB",
    product_name: "Incase Sleeve for Macbook 13” Woolenex - Graphite",
    product_price: 899000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/6/c6tnumfisvy3oh2zboqx_inmb100605-gft_d_s4cux1n7x64u_1000x_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/incase-sleeve-for-macbook-13-woolenex-graphite-ib",
  },
  {
    product_id: "8100008557-IB",
    product_name: 'Rivacase Sleeve for Laptop 13.3" - Red',
    product_price: 399000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic42604035722691_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-for-laptop-13-3-ib",
  },
  {
    product_id: "8100008478-IB",
    product_name: 'Rivacase Sleeve for Laptop 13.3" - Blue',
    product_price: 399000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic42604035751851_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-for-laptop-13-3-ib",
  },
  {
    product_id: "8100008605-IB",
    product_name: 'Rivacase Sleeve for Laptop 13.3" - Black',
    product_price: 399000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic42604035722521_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-for-laptop-13-3-ib",
  },
  {
    product_id: "8100008606-IB",
    product_name: 'Rivacase Sleeve for Laptop 13.3" - Grey',
    product_price: 399000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic42604035751921_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-for-laptop-13-3-ib",
  },
  {
    product_id: "8100008968-IB",
    product_name: "STM Myth Back Pack 28L 15 Inch - Slate Blue",
    product_price: 2199000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6084100616821_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-pack-28l-15-inch-ib",
  },
  {
    product_id: "8100008967-IB",
    product_name: "STM Myth Back Pack 28L 15 Inch - Granite Black",
    product_price: 2199000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6084100616751_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-pack-28l-15-inch-ib",
  },
  {
    product_id: "8100008971-IB",
    product_name: "STM Myth Pack 18L 15 Inch - Windsor Wine",
    product_price: 1918000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6084100616681_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-pack-18l-15-inch-ib",
  },
  {
    product_id: "8100008970-IB",
    product_name: "STM Myth Pack 18L 15 Inch - Slate Blue",
    product_price: 1918000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6084100616441_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-pack-18l-15-inch-ib",
  },
  {
    product_id: "8100008969-IB",
    product_name: "STM Myth Pack 18L 15 Inch - Granite Black",
    product_price: 1918000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6084100570811_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-pack-18l-15-inch-ib",
  },
  {
    product_id: "8100008297-IB",
    product_name: "Tomtoc Sleeve 13” Macbook 2017 – Gray/Brown",
    product_price: 799000,
    brand: "Tomtoc",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic69719370611641_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tomtoc-sleeve-13-macbook-2017-gray-brown-ib",
  },
  {
    product_id: "8100022910-IB",
    product_name: "Harman Kardon Onyx Studio 5 - Black",
    product_price: 2499000,
    brand: "Harman Kardon",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/k/hk_onyx_studio_5_black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/harman-kardon-onyx-studio-5-black-ib",
  },
  {
    product_id: "8100023999-IB",
    product_name: "Harman Kardon Onyx Studio 5 -  Gray",
    product_price: 2499000,
    brand: "Harman Kardon",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/k/hk_onyx_studio_5_grey_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/harman-kardon-onyx-studio-5-gray-ib",
  },
  {
    product_id: "8100008093-IB",
    product_name: "Anker Power+ Lightning 6ft - Golden",
    product_price: 433000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker-powerline-lightning-mfi-certified-6ft18m-gold-a8122hb1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerplus-lightning-6ft-golden-ib",
  },
  {
    product_id: "8100013164-IB",
    product_name: "Feeltek Wireless Charging Pad 15W - Black",
    product_price: 499000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8436471000501_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-wireless-charging-pad-15w-black-ib",
  },
  {
    product_id: "8100004982-IB",
    product_name: "Incipio DualPro for iPhone SE - Midnight Blue",
    product_price: 449000,
    brand: "Incipio",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic1910581114251_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/incipio-dualpro-for-iphone-se",
  },
  {
    product_id: "8100007017-IB",
    product_name: "Incipio DualPro for iPhone SE -  Black",
    product_price: 449000,
    brand: "Incipio",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8400761830811.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/incipio-dualpro-for-iphone-se",
  },
  {
    product_id: "8100007018-IB",
    product_name: "Incipio NGP Pure for iPhone SE - Clear",
    product_price: 349000,
    brand: "Incipio",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8400761837841_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/incipio-ngp-pure-for-iphone-se-ib",
  },
  {
    product_id: "8100007019-IB",
    product_name: "Incipio NGP Pure for iPhone SE - Black",
    product_price: 349000,
    brand: "Incipio",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8400761837911_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/incipio-ngp-pure-for-iphone-se-ib",
  },
  {
    product_id: "8100005896-IB",
    product_name: "Itskins Case For Airpods Spectrum Solid - Pink",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins-case-for-airpods-spectrum-solid-pink-1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-airpods-spectrum-solid-ib",
  },
  {
    product_id: "8100005894-IB",
    product_name: "Itskins Case For Airpods Spectrum Solid - Plain Black",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins-case-for-airpods-spectrum-solid-black-1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-case-for-airpods-spectrum-solid-ib",
  },
  {
    product_id: "8100008081-IB",
    product_name: "STM Dux Plus Duo iPad 7th Gen AP - Black",
    product_price: 1469000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/u/dux-plus-duo-7th-gen-black-backleftangle.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-dux-plus-duo-ipad-7th-gen-ap-black-ib",
  },
  {
    product_id: "8100008392-IB",
    product_name: "Adidas OR Moulded Case Camo FW19 iPhone 11 - Raw Green",
    product_price: 509150,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas-or-moulded-case-camo-fw19-iphone-11-raw-green-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-or-moulded-case-camo-fw19-iphone-11-raw-green-new-ib",
  },
  {
    product_id: "8100008404-IB",
    product_name: "Adidas SP Protective Pocket Case FW19 iPhone 11 Pro - Black",
    product_price: 509150,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas-sp-protective-pocket-case-fw19-iphone-11-pro-black-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-sp-protective-pocket-case-fw19-iphone-11-pro-black-new-ib",
  },
  {
    product_id: "8100006396-IB",
    product_name: "Anker PowerCore+10050 QC - Gold",
    product_price: 965000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker---powercore_10050-gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powercore-10050-qc-gold-new-ib",
  },
  {
    product_id: "8100008215-IB",
    product_name: "Anker Powercore External Battery 15600mAh - Black",
    product_price: 1125000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker_powercore_external_battery_15600mah_-_black-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powercore-external-battery-15600mah-black-new-ib",
  },
  {
    product_id: "8100006463-IB",
    product_name: "Anker Powerline+ Lightning 3ft - Gray",
    product_price: 399000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker-powerline-lightning-mfi-certified-3ft09m-gray-a8121ha1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/anker-powerlineplus-lightning-3ft-gray-new-ib",
  },
  {
    product_id: "8100008196-IB",
    product_name: "Anker Soundcore 2 - Blue",
    product_price: 1550000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker_soundcore_2_blue_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/anker-soundcore-2-blue-new-ib",
  },
  {
    product_id: "8100012325-IB",
    product_name: "iPhone 11 Pro Leather Folio, Aubergine",
    product_price: 2299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-max-leather-folio-aubergine-2_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-leather-folio-ib",
  },
  {
    product_id: "8100012326-IB",
    product_name: "iPhone 11 Pro Leather Folio, Black",
    product_price: 2299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-iphone-11-pro-leather-folio-black-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-11-pro-leather-folio-ib",
  },
  {
    product_id: "8100012855-IB",
    product_name: "Watch Magnetic Charging Cable 2m",
    product_price: 699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple-watch-magnetic-chargingcable-2m-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/watch-magnetic-charging-cable-2m",
  },
  {
    product_id: "8100005151-IB",
    product_name:
      "Mazer EnerG Wi.Convertible QI 10W PAD and Stand Charger - Black",
    product_price: 199000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_energ_wi.convertible_qi_10w_pad_stand_charger-black-01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-energ-wi-convertible-qi-10w-pad-and-stand-charger-black-ib",
  },
  {
    product_id: "8100007676-IB",
    product_name: "Mazer Converter USB C to HDMI 4K - Grey",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/img2334-1519631808_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-converter-usb-c-to-hdmi-4k-gold-ib-new",
  },
  {
    product_id: "8100025633-IB",
    product_name: "Mazer Multiport USB A to 3 x USB 3.0 + LAN - Gold",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer---multiport-usb-a-to-3-x-usb-3.0-_-lan-_-alu-__1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-multiport-usb-a-to-3-x-usb-30-plus-lan-gold-ib",
  },
  {
    product_id: "8100007876-IB",
    product_name:
      "Mazer Wireless 10000mAH with Docking 10W+QC3.0+PD18W Power Bank - Black",
    product_price: 419000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/9/a/9a1209a09d4f48970c2fb1dbcf6d8eef.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-wireless-10000mah-with-docking-10w-qc3-0-pd18w-power-bank-black-ib",
  },
  {
    product_id: "8100007766-IB",
    product_name:
      "Mazer GLITZ.TEK III USB-C to Lightning PD 100W/5.1A Fast Charging 1.5M Cable - Red",
    product_price: 199000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/x/sxsxsxsx_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-glitz-tek-iii-usbc-to-lightning-pd-100w-5-1a-fast-charging-1-5m-cable-red-ib",
  },
  {
    product_id: "8100005270-IB",
    product_name: "Mazer Alu.Dura.Tek USB-C2C Cable 2.0m/3.1A - Red",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic5055517358408_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-aluduratek-usbc2c-cable-20m31a-red-ib",
  },
  {
    product_id: "8100025618-IB",
    product_name: "Mazer Cable Lightning 200CM 3.1A - Gold",
    product_price: 119000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_cable_lightning_200cm_3.1a_gold_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-lightning-200cm-3-1a-gold-ib",
  },
  {
    product_id: "8100010516-IB",
    product_name: "Beats Pill+ - White",
    product_price: 3700000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats-pill-white-1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-pill-plus-white-ib",
  },
  {
    product_id: "8100006705-IB",
    product_name: "Sony WF-XB700 - Blue",
    product_price: 1799000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361073351_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wf-xb700-ib",
  },
  {
    product_id: "8100006704-IB",
    product_name: "Sony WF-XB700 - Black",
    product_price: 1799000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4548736107281-ib1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wf-xb700-ib",
  },
  {
    product_id: "8100006710-IB",
    product_name: "Sony WF SP800 - White",
    product_price: 2599000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361122921_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/sony-wf-sp800-ib",
  },
  {
    product_id: "8100006709-IB",
    product_name: "Sony WF SP800 - Blue",
    product_price: 2599000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361122541_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/sony-wf-sp800-ib",
  },
  {
    product_id: "8100006711-IB",
    product_name: "Sony WF SP800 - Orange",
    product_price: 2599000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361123391_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/sony-wf-sp800-ib",
  },
  {
    product_id: "8100006708-IB",
    product_name: "Sony WF SP800 - Black",
    product_price: 2599000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361122161_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/sony-wf-sp800-ib",
  },
  {
    product_id: "IC4548736107489-IB",
    product_name: "Sony WI-SP510 - White",
    product_price: 1299000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361074891_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wi-sp510-ib",
  },
  {
    product_id: "IC4548736107434-IB",
    product_name: "Sony WI-SP510 - Blue",
    product_price: 1299000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361074341_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wi-sp510-ib",
  },
  {
    product_id: "IC4548736107533-IB",
    product_name: "Sony WI-SP510 - Orange",
    product_price: 1299000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/_/a_20_14_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wi-sp510-ib",
  },
  {
    product_id: "IC4548736107380-IB",
    product_name: "Sony WI-SP510 - Black",
    product_price: 1299000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361073801_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wi-sp510-ib",
  },
  {
    product_id: "IC4548736107786-IB",
    product_name: "Sony WH CH710N - White",
    product_price: 1999000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361077861_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wh-ch710n-ib",
  },
  {
    product_id: "IC4548736107731-IB",
    product_name: "Sony WH CH710N - Blue",
    product_price: 1999000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361077311_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wh-ch710n-ib",
  },
  {
    product_id: "IC4548736107687-IB",
    product_name: "Sony WH CH710N - Black",
    product_price: 1999000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361076871_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wh-ch710n-ib",
  },
  {
    product_id: "8100006707-IB",
    product_name: "Sony WH 1000XM4 - Silver",
    product_price: 4999000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361121791_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wh-1000xm4-ib",
  },
  {
    product_id: "8100006706-IB",
    product_name: "Sony WH 1000XM4 - Black",
    product_price: 4999000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic45487361121241_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/sony-wh-1000xm4-ib",
  },
  {
    product_id: "8100005497-IB",
    product_name: "Sony BT Headphone WH-XB700 - Blue",
    product_price: 2199000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/o/sony-extra-bass-wireless-bluetooth-headphones-wh-xb700-blue-1599858-01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/sony-bt-headphone-wh-xb700-ib",
  },
  {
    product_id: "8100005496-IB",
    product_name: "Sony BT Headphone WH-XB700 - Black",
    product_price: 2199000,
    brand: "Sony",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/o/sony-bt-wh700-black-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/sony-bt-headphone-wh-xb700-ib",
  },
  {
    product_id: "8100013380-IB",
    product_name: "Feeltek Jet Glass 6 in 1 USB-C Hub - Black",
    product_price: 999000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_jet_glass_6_in_1_usb-c_hub_black_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-jet-glass-6-in-1-usb-c-hub-black-ib",
  },
  {
    product_id: "8100007339-IB",
    product_name: "Spigen Slim Armor for iPhone 11 Pro - Gunmetal",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigeng1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-pro-gunmetal-ib",
  },
  {
    product_id: "8100007340-IB",
    product_name: "Spigen Slim Armor for iPhone 11 Pro - Rose Gold",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-for-iphone-11-rose-gold-qrp-2",
  },
  {
    product_id: "8100013192-IB",
    product_name: "IT Power Connector USB C to Lightning Cable - Black",
    product_price: 299000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-lightning-cable-black-ib",
  },
  {
    product_id: "8100013381-IB",
    product_name: "Feeltek Jet Glass 7 in 2 USB-C Hub - Black",
    product_price: 1099000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_jet_glass_7_in_2_usb-c_hub_blk_0_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-jet-glass-7-in-2-usb-c-hub-black-ib",
  },
  {
    product_id: "8100011041-IB",
    product_name: "Beats Urbeats 3.0 Lightning - Blue",
    product_price: 1030000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/muht2pa_a1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/beats-urbeats-3-0-lightning-blue-ib",
  },
  {
    product_id: "8100006844-IB",
    product_name: "STM Powerkick Wireless PB 10.000mAh - Grey",
    product_price: 1469000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461100101_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/stm-powerkick-wireless-pb-10-000mah-grey-ib",
  },
  {
    product_id: "8100008296-IB",
    product_name: "Tomtoc Sleeve 13” Macbook 2016 – Black",
    product_price: 699000,
    brand: "Tomtoc",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic69704122207511_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/tomtoc-sleeve-13-macbook-2016-ib",
  },
  {
    product_id: "8100008286-IB",
    product_name: "Tomtoc Sleeve 13” Macbook 2016 - Dazzling Blue",
    product_price: 698999,
    brand: "Tomtoc",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic6970412223424a_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/tomtoc-sleeve-13-macbook-2016-ib",
  },
  {
    product_id: "8100008556-IB",
    product_name: "Rivacase Sleeve for MBP 13 - Black",
    product_price: 699000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic42604035762361_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-for-mbp-13-black-ib",
  },
  {
    product_id: "8100008600-IB",
    product_name: "Rivacase Messenger 8720 for 13 - Grey",
    product_price: 349000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic42604035702581_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-messenger-8720-for-13-grey-ib",
  },
  {
    product_id: "8100008599-IB",
    product_name: "Rivacase Messenger 8221 for 13 - Black",
    product_price: 429000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic69018010822161_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-messenger-8221-for-13-black-ib",
  },
  {
    product_id: "8100006574-IB",
    product_name: "Tucano Workout 3 for 13 - Green Grey",
    product_price: 899000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/w/o/work-out-3-slim-bag-the-iconic-model-of-the-collection-the-nylon-work-out-3-slim-bag-for-macbook-pro-or-laptop-13-stylistically-_3__1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-workout-3-for-13-green-grey-ib",
  },
  {
    product_id: "8100011043-IB",
    product_name: "Beats Urbeats 3.0 Lightning - Yellow",
    product_price: 1080000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/u/muhu2pa_a1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/beats-urbeats-3-0-lightning-yellow-ib",
  },
  {
    product_id: "8100022914-IB",
    product_name: "Harman Kardon Onyx Studio 5 - Blue",
    product_price: 2499000,
    brand: "Harman Kardon",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/k/hk_onyx_studio_5_blue_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/harman-kardon-onyx-studio-5-blue-ib",
  },
  {
    product_id: "8100006719-IB",
    product_name: "Itskins iPhone 12/12 Pro - Hybrid Black",
    product_price: 549000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_12_pro_hybrid_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-12-pro-hybrid-black-ib",
  },
  {
    product_id: "8100006720-IB",
    product_name: "Itskins iPhone 12 Mini - Hybrid Black",
    product_price: 549000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_mini_hybrid_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-mini-hybrid-black-ib",
  },
  {
    product_id: "8100006721-IB",
    product_name: "Itskins iPhone 12 Pro Max - Hybrid Black",
    product_price: 549000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_pro_max_hybrid_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-pro-max-hybrid-black-ib",
  },
  {
    product_id: "8100006717-IB",
    product_name: "Itskins iPhone 12/12 Pro - Hybrid Clear",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_12_pro_hybrid_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-12-pro-hybrid-clear-ib",
  },
  {
    product_id: "8100006718-IB",
    product_name: "Itskins iPhone 12 Mini - Hybrid Clear",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_mini_hybrid_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-mini-hybrid-clear-ib",
  },
  {
    product_id: "8100006715-IB",
    product_name: "Itskins iPhone 12 Pro Max - Hybrid Clear",
    product_price: 449000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_pro_max_hybrid_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-pro-max-hybrid-clear-ib",
  },
  {
    product_id: "8100006716-IB",
    product_name: "Itskins iPhone 12/12 Pro - Hybrid Silk",
    product_price: 499000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_12_pro_hybrid_silk_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-12-pro-hybrid-silk-ib",
  },
  {
    product_id: "8100006714-IB",
    product_name: "Itskins iPhone 12 Mini - Hybrid Silk",
    product_price: 499000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_12_mini_hybrid_silk_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-12-mini-hybrid-silk-ib",
  },
  {
    product_id: "8100006049-IB",
    product_name: "Ibacks iPhone 12 mini Reflection - Grey",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/r/gray_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-reflection-ib",
  },
  {
    product_id: "8100006048-IB",
    product_name: "Ibacks iPhone 12 mini Reflection - Olive",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/l/oliv.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-reflection-ib",
  },
  {
    product_id: "8100006047-IB",
    product_name: "Ibacks iPhone 12 mini Reflection - Black",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/blackxx.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-reflection-ib",
  },
  {
    product_id: "8100006046-IB",
    product_name: "Ibacks iPhone 12 mini Reflection - Red",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/r/e/red_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-reflection-ib",
  },
  {
    product_id: "8100006053-IB",
    product_name: "Ibacks iPhone 12/12 Pro Reflection - Grey",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/1/c1b3f19bb1c3641dfc36c6b27048fe7a.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-reflection-ib",
  },
  {
    product_id: "8100006052-IB",
    product_name: "Ibacks iPhone 12/12 Pro Reflection - Olive",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/l/olivrd.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-reflection-ib",
  },
  {
    product_id: "8100006051-IB",
    product_name: "Ibacks iPhone 12/12 Pro Reflection - Black",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/blackzs.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-reflection-ib",
  },
  {
    product_id: "8100006050-IB",
    product_name: "Ibacks iPhone 12/12 Pro Reflection - Red",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/r/e/red_1__1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-reflection-ib",
  },
  {
    product_id: "8100006057-IB",
    product_name: "Ibacks iPhone 12 Pro Max Reflection - Grey",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/1/c1b3f19bb1c3641dfc36c6b27048fe7a_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-reflection-ib",
  },
  {
    product_id: "8100006056-IB",
    product_name: "Ibacks iPhone 12 Pro Max Reflection - Olive",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/l/olivas.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-reflection-ib",
  },
  {
    product_id: "8100006055-IB",
    product_name: "Ibacks iPhone 12 Pro Max Reflection - Black",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/d/fd66d4bbb387499fc2f8631b5e29100c.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-reflection-ib",
  },
  {
    product_id: "8100006054-IB",
    product_name: "Ibacks iPhone 12 Pro Max Reflection - Red",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/r/e/redsf_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-reflection-ib",
  },
  {
    product_id: "8100006948-IB",
    product_name: "ibacks iPhone 12 Mini Zaphire Case - Clear",
    product_price: 383200,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/a/sasassd_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-zaphire-case-clear-ib",
  },
  {
    product_id: "8100006023-IB",
    product_name: "ibacks iPhone 12/12 Pro Zaphire - Clear",
    product_price: 423200,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/2/2/228984a9-9b9d-4625-bc49-14022b42ffff_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-zaphire-clear-ib",
  },
  {
    product_id: "8100006024-IB",
    product_name: "ibacks iPhone 12/12 Pro Max Zaphire - Clear",
    product_price: 447200,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/2/3/2398f5dc-6dc7-446a-b8db-1555268f515e_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-zaphire-clear-ib",
  },
  {
    product_id: "8100006032-IB",
    product_name: "ibacks iPhone 12 mini Barvity Case - Blue",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/e/4/e4b066ae-1ca8-4f71-9aa2-7c8227992fdd.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-barvity-case-ib",
  },
  {
    product_id: "8100006031-IB",
    product_name: "ibacks iPhone 12 mini Barvity Case - Black",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/b/cbsj_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-barvity-case-ib",
  },
  {
    product_id: "8100006034-IB",
    product_name: "ibacks iPhone 12/12 Pro Barvity - Blue",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/2/12blue.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-barvity-ib",
  },
  {
    product_id: "8100006033-IB",
    product_name: "ibacks iPhone 12/12 Pro Barvity - Black",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/2/12black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12-pro-barvity-ib",
  },
  {
    product_id: "8100006036-IB",
    product_name: "ibacks iPhone 12 Pro Max Barvity - Blue",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/2/12promaxblue.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-barvity-ib",
  },
  {
    product_id: "8100006035-IB",
    product_name: "ibacks iPhone 12 Pro Max Barvity - Black",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/1/2/12promaxblack_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-barvity-ib",
  },
  {
    product_id: "8100006039-IB",
    product_name: "ibacks iPhone 12 mini Carbon Case - Green",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/r/greencarbon.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-carbon-case-ib",
  },
  {
    product_id: "8100006038-IB",
    product_name: "ibacks iPhone 12 mini Carbon Case - Blue",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/bluecarbon.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-carbon-case-ib",
  },
  {
    product_id: "8100006037-IB",
    product_name: "ibacks iPhone 12 mini Carbon Case - Black",
    product_price: 559000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/blackcarbon_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-mini-carbon-case-ib",
  },
  {
    product_id: "8100006042-IB",
    product_name: "ibacks iPhone 12/12Pro Carbon Case - Green",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/r/greencarbon_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12pro-carbon-case-ib",
  },
  {
    product_id: "8100006041-IB",
    product_name: "ibacks iPhone 12/12Pro Carbon Case - Blue",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/bluecarbon_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12pro-carbon-case-ib",
  },
  {
    product_id: "8100006040-IB",
    product_name: "ibacks iPhone 12/12Pro Carbon Case - Black",
    product_price: 599000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/blackcarbon_3.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-12pro-carbon-case-ib",
  },
  {
    product_id: "8100006045-IB",
    product_name: "ibacks iPhone 12 Pro Max Carbon Case - Green",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/g/r/greencarbon_4.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-carbon-case-ib",
  },
  {
    product_id: "8100006044-IB",
    product_name: "ibacks iPhone 12 Pro Max Carbon Case - Blue",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/bluecarbon_4.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-carbon-case-ib",
  },
  {
    product_id: "8100006043-IB",
    product_name: "ibacks iPhone 12 Pro Max Carbon Case - Black",
    product_price: 699000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/l/blackcarbon_4_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-12-pro-max-carbon-case-ib",
  },
  {
    product_id: "8100006738-IB",
    product_name: "Kajsa Iphone 12 Mini Trans-Shield - Grey",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone12_grey_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-mini-trans-shield-ib",
  },
  {
    product_id: "8100006737-IB",
    product_name: "Kajsa Iphone 12 Mini Trans-Shield - Clear",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone12_transparent_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-mini-trans-shield-ib",
  },
  {
    product_id: "8100006778-IB",
    product_name: "Kajsa Iphone 12/12 Pro Trans-Shield - Grey",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone12_grey_2_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-12-pro-trans-shield-ib",
  },
  {
    product_id: "8100006777-IB",
    product_name: "Kajsa Iphone 12/12 Pro Trans-Shield - Clear",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone12_transparent_2_3_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-12-pro-trans-shield-ib",
  },
  {
    product_id: "8100006776-IB",
    product_name: "Kajsa Iphone 12 Pro Max Trans-Shield - Grey",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone12_grey_2_4.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-pro-max-trans-shield-ib",
  },
  {
    product_id: "8100006775-IB",
    product_name: "Kajsa Iphone 12 Pro Max Trans-Shield - Clear",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone12_transparent_2_4_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-pro-max-trans-shield-ib",
  },
  {
    product_id: "8100001325-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi 32GB, Space Grey",
    product_price: 6299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-space-grey-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100002731-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi 32GB, Silver",
    product_price: 6299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-silver-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100002732-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi 32GB, Gold",
    product_price: 6299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-gold-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100002733-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi 128GB, Space Grey",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-space-grey-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100002734-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi 128GB, Silver",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100003036-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi 128GB, Gold",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-gold-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100002737-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi + Cellular 32GB, Space Grey",
    product_price: 8799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-cell-space-grey-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100022374-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi + Cellular 32GB, Silver",
    product_price: 8799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-cell-silver-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100002738-IB",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi + Cellular 32GB, Gold",
    product_price: 8799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-cell-gold-1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "MYML2PA/A",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi + Cellular 128GB, Space Grey",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-cell-space-grey-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "MYMM2PA/A",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi + Cellular 128GB, Silver",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-cell-silver-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "MYMN2PA/A",
    product_name: "iPad (Gen 8) 10,2 inci, Wi-Fi + Cellular 128GB, Gold",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-8-wifi-cell-gold-1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-generasi-ke-8",
  },
  {
    product_id: "8100006855-IB",
    product_name: "Otterbox iPhone 12 Mini React Clear",
    product_price: 525000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_react_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-react-clear-ib",
  },
  {
    product_id: "8100006722-IB",
    product_name: "Kajsa Iphone 12 Mini Leather - Green",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/luxe_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-mini-leather-ib",
  },
  {
    product_id: "8100006723-IB",
    product_name: "Kajsa Iphone 12 Mini Leather - Burgundy",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/luxe_2_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-mini-leather-ib",
  },
  {
    product_id: "8100006724-IB",
    product_name: "Kajsa Iphone 12 Mini Leather - Black",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/luxe_5.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-mini-leather-ib",
  },
  {
    product_id: "8100006728-IB",
    product_name: "Kajsa Iphone 12/12 Pro Leather - Green",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/luxe_2_4.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-12-pro-leather-ib",
  },
  {
    product_id: "8100006729-IB",
    product_name: "Kajsa Iphone 12/12 Pro Leather - Burgundy",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/luxe_2_3.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-12-pro-leather-ib",
  },
  {
    product_id: "8100006730-IB",
    product_name: "Kajsa Iphone 12/12 Pro Leather - Black",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/u/luxe_5_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-12-12-pro-leather-ib",
  },
  {
    product_id: "8100006856-IB",
    product_name: "Otterbox iPhone 12/12 Pro React Clear",
    product_price: 525000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_react_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-react-clear-ib",
  },
  {
    product_id: "8100006857-IB",
    product_name: "Otterbox iPhone 12 Pro Max React Clear",
    product_price: 525000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_react_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-react-clear-ib",
  },
  {
    product_id: "8100022399-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 64GB, Space Grey",
    product_price: 11199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-space-grey-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022397-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 64GB, Silver",
    product_price: 11199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-silver-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022396-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 64GB, Rose Gold",
    product_price: 11199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-rose-gold-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100002855-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 64GB, Sky Blue",
    product_price: 11199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-skyblue-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022394-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 64GB, Green",
    product_price: 11199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-green-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022393-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 256GB, Space Grey",
    product_price: 14099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-space-grey-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022391-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 256GB, Silver",
    product_price: 14099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-silver-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022390-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 256GB, Rose Gold",
    product_price: 14099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-rose-gold-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022392-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 256GB, Sky Blue",
    product_price: 14099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-skyblue-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100002861-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi 256GB, Green",
    product_price: 14099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-green-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022389-IB",
    product_name:
      "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 64GB, Space Grey",
    product_price: 13799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-space-grey-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022387-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 64GB, Silver",
    product_price: 13799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-silver-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022386-IB",
    product_name:
      "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 64GB, Rose Gold",
    product_price: 13799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-rose-gold-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022388-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 64GB, Sky Blue",
    product_price: 13799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-blue-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022385-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 64GB, Green",
    product_price: 13799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-green-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022384-IB",
    product_name:
      "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 16699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-space-grey-1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022382-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 256GB, Silver",
    product_price: 16699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-silver-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022381-IB",
    product_name:
      "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 256GB, Rose Gold",
    product_price: 16699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-rose-gold-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022383-IB",
    product_name:
      "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 256GB, Sky Blue",
    product_price: 16699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-blue-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100022380-IB",
    product_name: "iPad Air (Gen 4) 10,9 inci, Wi-Fi + Cellular 256GB, Green",
    product_price: 16699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad-air-4-wifi-cellular-green-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-4th-gen-10-9-inci",
  },
  {
    product_id: "8100006732-IB",
    product_name: "Kajsa Iphone 12 Mini Dale - Grey",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mountain_pattern_6.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-mini-dale-ib",
  },
  {
    product_id: "8100006731-IB",
    product_name: "Kajsa Iphone 12 Mini Dale - Black",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mountain_pattern_3_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-mini-dale-ib",
  },
  {
    product_id: "8100006736-IB",
    product_name: "Kajsa Iphone 12/12 Pro Dale - Grey",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mountain_pattern_6_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-12-pro-dale-ib",
  },
  {
    product_id: "8100006735-IB",
    product_name: "Kajsa Iphone 12/12 Pro Dale - Black",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mountain_pattern_3_3_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-12-pro-dale-ib",
  },
  {
    product_id: "8100006734-IB",
    product_name: "Kajsa Iphone 12 Pro Max Dale - Grey",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mountain_pattern_6_4.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-pro-max-dale-ib",
  },
  {
    product_id: "8100006733-IB",
    product_name: "Kajsa Iphone 12 Pro Max Dale - Black",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/mountain_pattern_3_4_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-12-pro-max-dale-ib",
  },
  {
    product_id: "8100006915-IB",
    product_name: "Otterbox iPhone 12 Mini React Black",
    product_price: 525000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_react_black_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-react-black-ib",
  },
  {
    product_id: "8100006916-IB",
    product_name: "Otterbox iPhone 12/12 Pro React Black",
    product_price: 525000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_react_black_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-react-black-ib",
  },
  {
    product_id: "8100006917-IB",
    product_name: "Otterbox iPhone 12 Pro Max React Black",
    product_price: 525000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_react_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-react-black-ib",
  },
  {
    product_id: "8100006864-IB",
    product_name: "Lifeproof iPhone 12 Mini Wake - Blue",
    product_price: 626000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042156161.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/lifeproof-iphone-12-mini-wake-ib",
  },
  {
    product_id: "8100006863-IB",
    product_name: "Lifeproof iPhone 12 Mini Wake - Black",
    product_price: 626000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042156091_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/lifeproof-iphone-12-mini-wake-ib",
  },
  {
    product_id: "8100006871-IB",
    product_name: "Lifeproof iPhone 12/12 Pro Wake - Blue",
    product_price: 626000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042161491.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-12-12-pro-wake-ib",
  },
  {
    product_id: "8100006870-IB",
    product_name: "Lifeproof iPhone 12/12 Pro Wake - Black",
    product_price: 626000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042161321_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-12-12-pro-wake-ib",
  },
  {
    product_id: "8100006914-IB",
    product_name: "Lifeproof iPhone 12 Pro Max Wake - Blue",
    product_price: 626000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042161491_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-12-pro-max-wake-ib",
  },
  {
    product_id: "8100006877-IB",
    product_name: "Lifeproof iPhone 12 Pro Max Wake - Black",
    product_price: 626000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042161321_3_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-12-pro-max-wake-ib",
  },
  {
    product_id: "8100006921-IB",
    product_name: "Adidas iPhone 12 Mini Moulded Basic",
    product_price: 555000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460834301_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-12-mini-moulded-basic-ib",
  },
  {
    product_id: "8100006924-IB",
    product_name: "Adidas iPhone 12 Mini Moulded PU",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460835841_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-12-mini-moulded-pu-ib",
  },
  {
    product_id: "8100006860-IB",
    product_name: "Otterbox iPhone 12 Mini Symmetry Black",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_symmetry_black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-symmetry-black-ib",
  },
  {
    product_id: "8100006867-IB",
    product_name: "Otterbox iPhone 12/12 Pro Symmetry Black",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_symmetry_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-symmetry-black-ib",
  },
  {
    product_id: "8100006874-IB",
    product_name: "Otterbox iPhone 12 Pro Max Symmetry Black",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_symmetry_black_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-symmetry-black-ib",
  },
  {
    product_id: "8100006930-IB",
    product_name: "Adidas iPhone 12 Mini Protective - Smoke",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460843521.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-12-mini-protective-ib",
  },
  {
    product_id: "8100006927-IB",
    product_name: "Adidas iPhone 12 Mini Protective - Clear",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460843831_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-12-mini-protective-ib",
  },
  {
    product_id: "8100006861-IB",
    product_name: "Otterbox iPhone 12 Mini Symmetry Grey",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_symmetry_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-symmetry-grey-ib",
  },
  {
    product_id: "8100006933-IB",
    product_name: "Adidas iPhone 12 Mini Grip - Clear",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460845671_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-12-mini-grip-clear-ib",
  },
  {
    product_id: "8100006936-IB",
    product_name: "Adidas iPhone 12 Mini Grip - Black",
    product_price: 737000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460846281.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-12-mini-grip-black-ib",
  },
  {
    product_id: "8100006868-IB",
    product_name: "Otterbox iPhone 12/12 Pro Symmetry Grey",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_symmetry_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-symmetry-grey-ib",
  },
  {
    product_id: "8100006875-IB",
    product_name: "Otterbox iPhone 12 Pro Max Symmetry Grey",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_symmetry_grey_1_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-symmetry-grey-ib",
  },
  {
    product_id: "8100006849-IB",
    product_name: "ElementCase iPhone 12 Mini - Clear",
    product_price: 908000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461113761.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/elementcase-iphone-12-mini-ib",
  },
  {
    product_id: "8100006853-IB",
    product_name: "ElementCase iPhone 12 Mini - Black",
    product_price: 908000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461114681_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/elementcase-iphone-12-mini-ib",
  },
  {
    product_id: "8100006862-IB",
    product_name: "Otterbox iPhone 12 Mini Symmetry Clear",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_symmetry_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-symmetry-clear-ib",
  },
  {
    product_id: "8100006869-IB",
    product_name: "Otterbox iPhone 12/12 Pro Symmetry Clear",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_symmetry_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-symmetry-clear-ib",
  },
  {
    product_id: "8100006876-IB",
    product_name: "Otterbox iPhone 12 Pro Max Symmetry Clear",
    product_price: 838000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_symmetry_clear_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-symmetry-clear-ib",
  },
  {
    product_id: "8100006859-IB",
    product_name: "Otterbox iPhone 12 Mini Commuter Blue",
    product_price: 636000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_commuter_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-commuter-blue-ib",
  },
  {
    product_id: "8100006858-IB",
    product_name: "Otterbox iPhone 12 Mini Commuter Black",
    product_price: 636000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_mini_commuter_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-commuter-black-ib",
  },
  {
    product_id: "8100006866-IB",
    product_name: "Otterbox iPhone 12/12 Pro Commuter Blue",
    product_price: 636000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_commuter_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-commuter-blue-ib",
  },
  {
    product_id: "8100006865-IB",
    product_name: "Otterbox iPhone 12/12 Pro Commuter Black",
    product_price: 636000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_12_pro_commuter_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-commuter-black-ib",
  },
  {
    product_id: "8100006873-IB",
    product_name: "Otterbox iPhone 12 Pro Max Commuter Blue",
    product_price: 636000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_commuter_blue_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-commuter-blue-ib",
  },
  {
    product_id: "8100006872-IB",
    product_name: "Otterbox iPhone 12 Pro Max Commuter Black",
    product_price: 636000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/o/t/otterbox_iphone_12_pro_max_commuter_black_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-commuter-black-ib",
  },
  {
    product_id: "8100006851-IB",
    product_name: "ElementCase iPhone 12 Pro Max - Clear",
    product_price: 908000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461114751_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/elementcase-iphone-12-pro-max-ib",
  },
  {
    product_id: "8100006852-IB",
    product_name: "ElementCase iPhone 12 Pro Max - Black",
    product_price: 899000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461114681_5_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/elementcase-iphone-12-pro-max-ib",
  },
  {
    product_id: "8100006939-IB",
    product_name: "Gosh for iPhone 12 Mini Koori Case",
    product_price: 494000,
    brand: "Gosh",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_series_gosh_koori_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/gosh-for-iphone-12-mini-koori-case-ib",
  },
  {
    product_id: "8100006940-IB",
    product_name: "Gosh for iPhone 12/12 Pro Koori Case",
    product_price: 525000,
    brand: "Gosh",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_series_gosh_koori_5_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/gosh-for-iphone-12-12-pro-koori-case-ib",
  },
  {
    product_id: "8100006941-IB",
    product_name: "Gosh for iPhone 12 Pro Max Koori Case",
    product_price: 555000,
    brand: "Gosh",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_series_gosh_koori_5_2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/gosh-for-iphone-12-pro-max-koori-case-ib",
  },
  {
    product_id: "8100007273-IB",
    product_name: "Anker PowerPort Atom PD - White",
    product_price: 2500000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/n/anker-powerport-pd-atom-4-white-a2041_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/anker-powerport-atom-pd-white-ib",
  },
  {
    product_id: "8100006430-IB",
    product_name: "Kate Spade Sleeve 13 Fairmount SQ - Black",
    product_price: 1099000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8400761429891_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-sleeve-13-fairmount-sq-black-ib",
  },
  {
    product_id: "8100006431-IB",
    product_name: "Kate Spade Sleeve 13 Colour Block - Black",
    product_price: 1099000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_sleeve_13-colour_block_black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-sleeve-13-colour-block-black-ib",
  },
  {
    product_id: "8100004556-IB",
    product_name: "Kate Spade Sleeve 13 Inch - Pale",
    product_price: 899000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_new_york_slim_sleeve_for_13inch_pale_vellum-gold_zipper_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kate-spade-sleeve-13-inch-ib",
  },
  {
    product_id: "8100004555-IB",
    product_name: "Kate Spade Sleeve 13 Inch - Black",
    product_price: 899000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_new_york_slim_sleeve_for_13inch_black_1_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/kate-spade-sleeve-13-inch-ib",
  },
  {
    product_id: "8100004557-IB",
    product_name: "Kate Spade Sleeve 13 Inch Hollyhock - Matte",
    product_price: 999000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_new_york_slim_sleeve_for_13inch_reverse_hollyhock_mate_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-sleeve-13-inch-hollyhock-ib",
  },
  {
    product_id: "IC191058103475-IB-1",
    product_name: "Kate Spade Sleeve 13 Inch Hollyhock - Pale Vellum",
    product_price: 999000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_new_york_slim_sleeve_for_13inch_reverse_hollyhock_pale_vellum_1_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-sleeve-13-inch-hollyhock-ib",
  },
  {
    product_id: "8100008602-IB",
    product_name: "Rivacase Sleeve 7903 for Macbook Pro 13 - Blue",
    product_price: 449000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/9/7903_blue.4260403573402.ver2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-7903-for-macbook-pro-13-ib",
  },
  {
    product_id: "8100008603-IB",
    product_name: "Rivacase Sleeve 7903 for Macbook Pro 13 - Grey",
    product_price: 449000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/9/7903_grey.4260403573419.ver03_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-7903-for-macbook-pro-13-ib",
  },
  {
    product_id: "8100065867-IB",
    product_name: "Rivacase Sleeve 7903 for MacBook Pro 13 - Red",
    product_price: 449000,
    brand: "Rivacase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/9/7903_red.4260403573259.ver02_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/rivacase-sleeve-7903-for-macbook-pro-13-ib",
  },
  {
    product_id: "8100007536-IB",
    product_name: "UAG iPad Air 10.9 4th Gen Metropolis - Magma",
    product_price: 849000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1225561193931.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-ipad-air-10-9-4th-gen-metropolis-ib",
  },
  {
    product_id: "8100007535-IB",
    product_name: "UAG iPad Air 10.9 4th Gen Metropolis - Cobalt",
    product_price: 849000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1225561150501.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-ipad-air-10-9-4th-gen-metropolis-ib",
  },
  {
    product_id: "8100007534-IB",
    product_name: "UAG iPad Air 10.9 4th Gen Metropolis - Black",
    product_price: 849000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1225561140401_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-ipad-air-10-9-4th-gen-metropolis-ib",
  },
  {
    product_id: "8100032154-IB",
    product_name: "iPhone XR 128GB, Blue",
    product_price: 9299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-blue_1_6_1_9.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032161-IB",
    product_name: "iPhone XR 128GB, Coral",
    product_price: 9299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-coral_1_6_1_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032162-IB",
    product_name: "iPhone XR 128GB, Yellow",
    product_price: 9299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-yellow_1_6_1_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100018976-IB",
    product_name: "iPhone XR 128GB, (PRODUCT) RED",
    product_price: 9299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-red_1_6_1_8.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032174-IB",
    product_name: "iPhone XR 128GB, White",
    product_price: 9299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-white_1_6_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032153-IB",
    product_name: "iPhone XR 128GB, Black",
    product_price: 9299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-black_1_6_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032176-IB",
    product_name: "iPhone XR 64GB, Blue",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-blue_1_6_1_8.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032163-IB",
    product_name: "iPhone XR 64GB, Coral",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-coral_1_6_1_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032172-IB",
    product_name: "iPhone XR 64GB, Yellow",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-yellow_1_6_1_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032173-IB",
    product_name: "iPhone XR 64GB, (PRODUCT) RED",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-red_1_6_1_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032175-IB",
    product_name: "iPhone XR 64GB, Black",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-black_1_6_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032151-IB",
    product_name: "iPhone XR 64GB, White",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-xr-white_1_6_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-xr-ibox-1",
  },
  {
    product_id: "8100032155-IB",
    product_name: "iPhone 11 64GB, Black",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_black_new_1_7.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032177-IB",
    product_name: "iPhone 11 64GB, White",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_white_new_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100018445-IB",
    product_name: "iPhone 11 64GB, (PRODUCT) RED",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_red_new_1_9.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032156-IB",
    product_name: "iPhone 11 64GB, Yellow",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_yellow_new_1_9.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032157-IB",
    product_name: "iPhone 11 64GB, Purple",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_purple_new_1_9.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032158-IB",
    product_name: "iPhone 11 64GB, Green",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_green_new_1_8.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032159-IB",
    product_name: "iPhone 11 128GB, Black",
    product_price: 9249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_black_new_1_7_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032160-IB",
    product_name: "iPhone 11 128GB, White",
    product_price: 9249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_white_new_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032152-IB",
    product_name: "iPhone 11 128GB, (PRODUCT)RED",
    product_price: 9249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_red_new_1_10.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032164-IB",
    product_name: "iPhone 11 128GB, Yellow",
    product_price: 9249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_yellow_new_1_10.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032165-IB",
    product_name: "iPhone 11 128GB, Purple",
    product_price: 9249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_purple_new_1_10.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032166-IB",
    product_name: "iPhone 11 128GB, Green",
    product_price: 9249000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_green_new_1_9.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032167-IB",
    product_name: "iPhone 11 256GB, Black",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_black_new_1_7_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032168-IB",
    product_name: "iPhone 11 256GB, White",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_white_new_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100018444-IB",
    product_name: "iPhone 11 256GB, (PRODUCT)RED",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_red_new_1_11.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032169-IB",
    product_name: "iPhone 11 256GB, Yellow",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_yellow_new_1_11.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032170-IB",
    product_name: "iPhone 11 256GB, Purple",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_purple_new_1_11.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100032171-IB",
    product_name: "iPhone 11 256GB, Green",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_green_new_1_10.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-iphone-11-new-package",
  },
  {
    product_id: "8100003201-IB",
    product_name: "iPhone SE 2nd Gen 256GB, (PRODUCT) RED",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-red-1_4_6.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003199-IB",
    product_name: "iPhone SE 2nd Gen 256GB, Black",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-black-1_4_3_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003200-IB",
    product_name: "iPhone SE 2nd Gen 256GB, White",
    product_price: 10499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-white-1_4_2_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003198-IB",
    product_name: "iPhone SE 2nd Gen 128GB, (PRODUCT) RED",
    product_price: 8799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-red-1_4_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003197-IB",
    product_name: "iPhone SE 2nd Gen 128GB, White",
    product_price: 8799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-white-1_4_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003196-IB",
    product_name: "iPhone SE 2nd Gen 128GB, Black",
    product_price: 8799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-black-1_4_3_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003195-IB",
    product_name: "iPhone SE 2nd Gen 64GB, (PRODUCT) RED",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-red-1_4_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003194-IB",
    product_name: "iPhone SE 2nd Gen 64GB, White",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-white-1_4_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100003768-IB",
    product_name: "iPhone SE 2nd Gen 64GB, Black",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-se-black-1_4_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-2nd-gen-new",
  },
  {
    product_id: "8100007275-IB",
    product_name: "Anker Liberty Air 2",
    product_price: 2199000,
    brand: "Anker",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8480610613381_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/anker-liberty-air-2-ib",
  },
  {
    product_id: "8100007539-IB",
    product_name: "Kate Spade Iphone 12 Pro Max - Hollyhock",
    product_price: 599000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581209081_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-pro-max-hollyhock-ib",
  },
  {
    product_id: "8100007542-IB",
    product_name: "Coach iPhone 12 Pro Max Signature C - Denim",
    product_price: 719000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/i/ciph-063-scdnm_coach_iphone12promax_slimwrap_nodevice_c_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-pro-max-signature-c-denim-ib",
  },
  {
    product_id: "8100007544-IB",
    product_name: "Coach iPhone12 Mini Signature C - Khaki",
    product_price: 719200,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581211411_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-mini-signature-c-khaki-ib",
  },
  {
    product_id: "8100007545-IB",
    product_name: "Coach iPhone 12/12 Pro Signature C - Khaki",
    product_price: 899000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581211411_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-12-pro-signature-c-ib",
  },
  {
    product_id: "8100007543-IB",
    product_name: "Coach iPhone 12/12 Pro Signature C - Black",
    product_price: 899000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581211101_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-12-pro-signature-c-ib",
  },
  {
    product_id: "8100007547-IB",
    product_name: "Kate Spade Iphone 12/12 Pro - Evergreen",
    product_price: 599200,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581211961_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-12-pro-evergreen-ib",
  },
  {
    product_id: "8100007548-IB",
    product_name: "Kate Spade Iphone 12 Pro Max - Evergreen",
    product_price: 599200,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581212261_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-pro-max-evergreen-ib",
  },
  {
    product_id: "8100007553-IB",
    product_name: "Kate Spade Iphone 12 Pro Max - Glitter Ombre",
    product_price: 479000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581224451_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-pro-max-glitter-ombre-ib",
  },
  {
    product_id: "8100007557-IB",
    product_name: "Kate Spade Iphone 12 Mini - White Glitter",
    product_price: 479200,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581235031_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-mini-white-glitter-ib",
  },
  {
    product_id: "8100007558-IB",
    product_name: "Kate Spade Iphone 12/12 Pro - White Glitter",
    product_price: 479200,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581235031_4_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-12-pro-white-glitter-ib",
  },
  {
    product_id: "8100007566-IB",
    product_name: "Coach iPhone 12/12 Pro Signature Emboss",
    product_price: 719200,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581236401_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-12-pro-signature-emboss-ib",
  },
  {
    product_id: "8100007669-IB",
    product_name: "Kate Spade Iphone 12 Mini - Clover Heart",
    product_price: 479200,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581275011_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-12-mini-clover-heart-ib",
  },
  {
    product_id: "8100007672-IB",
    product_name: "Coach iPhone 12 Mini Signature C - Denim",
    product_price: 719200,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581210351_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-mini-signature-c-denim-ib",
  },
  {
    product_id: "8100007673-IB",
    product_name: "Coach iPhone 12/12 Pro Signature C - Denim",
    product_price: 719200,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia1910581210351_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-iphone-12-12-pro-signature-c-denim-ib",
  },
  {
    product_id: "8100006779-IB",
    product_name: "Monocozzi iPad Pro 11 (2020) with Pencil Slot - Black",
    product_price: 749000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_ipad_pro11_20_w_pencilslot_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-ipad-pro-11-2020-with-pencil-slot-ib",
  },
  {
    product_id: "8100006780-IB",
    product_name: "Monocozzi iPad Pro 11 (2020) with Pencil Slot - Tan",
    product_price: 749000,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/o/monocozzi_ipad_pro11_20_w_pencilslot_tan_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-ipad-pro-11-2020-with-pencil-slot-ib",
  },
  {
    product_id: "8100006847-IB",
    product_name: "STM iPad Air 4 Rugged Plus - Black",
    product_price: 1353000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461106691_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/stm-ipad-air-4-rugged-plus-ib",
  },
  {
    product_id: "8100006848-IB",
    product_name: "STM iPad Air 4 Rugged Plus - Blue",
    product_price: 1353000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461106761_2.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/stm-ipad-air-4-rugged-plus-ib",
  },
  {
    product_id: "8100006918-IB",
    product_name: "Otterbox iPhone 12 mini Symmetry+ - Black",
    product_price: 935100,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042265991_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-mini-symmetryplus-black-ib",
  },
  {
    product_id: "8100006919-IB",
    product_name: "Otterbox iPhone 12/12 Pro Symmetry+ - Black",
    product_price: 935100,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042266051_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-12-pro-symmetryplus-black-ib",
  },
  {
    product_id: "8100006920-IB",
    product_name: "Otterbox iPhone 12 Pro Max Symmetry+ - Black",
    product_price: 1050000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042266121_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-iphone-12-pro-max-symmetryplus-black-ib",
  },
  {
    product_id: "8100013184-IB",
    product_name: "IT. Power Connector USB C to C Cable 1,2 m - Black",
    product_price: 169000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it3_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-c-cable-1-2-m-black-ib",
  },
  {
    product_id: "8100013186-IB",
    product_name: "IT. Power Connector USB C to C Cable 2 m - Black",
    product_price: 199000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it3-new.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-c-cable-2-m-black-ib",
  },
  {
    product_id: "8100017196-IB",
    product_name: "IT. Plug IT 30 Charger 30 - Black",
    product_price: 249000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it12_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/it-plug-it-30-charger-30-black-ib",
  },
  {
    product_id: "8100018671-IB",
    product_name: "iPhone 12 Pro Max 256GB Graphite",
    product_price: 17499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_graphite_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-256gb-graphite",
  },
  {
    product_id: "8100018740-IB",
    product_name: "iPhone 12 Pro Max 256GB Silver",
    product_price: 17499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-256gb-silver",
  },
  {
    product_id: "8100018670-IB",
    product_name: "iPhone 12 Pro Max 256GB Gold",
    product_price: 17499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_gold_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-256gb-gold",
  },
  {
    product_id: "8100018738-IB",
    product_name: "iPhone 12 Pro Max 256GB Pacific Blue",
    product_price: 17499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_pacific_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-256gb-pacific-blue",
  },
  {
    product_id: "8100018531-IB",
    product_name: "iPhone 12 64GB Black",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018537-IB",
    product_name: "iPhone 12 64GB White",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_white_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018460-IB",
    product_name: "iPhone 12 64GB (PRODUCT)RED",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_product_red_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018532-IB",
    product_name: "iPhone 12 64GB Blue",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018535-IB",
    product_name: "iPhone 12 64GB Green",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_green_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018451-IB",
    product_name: "iPhone 12 128GB Black",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018454-IB",
    product_name: "iPhone 12 128GB White",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_white_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018450-IB",
    product_name: "iPhone 12 128GB (PRODUCT)RED",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_product_red_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018452-IB",
    product_name: "iPhone 12 128GB Blue",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018453-IB",
    product_name: "iPhone 12 128GB Green",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_green_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018456-IB",
    product_name: "iPhone 12 256GB Black",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018459-IB",
    product_name: "iPhone 12 256GB White",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018455-IB",
    product_name: "iPhone 12 256GB (PRODUCT)RED",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_product_red_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018457-IB",
    product_name: "iPhone 12 256GB Blue",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100018458-IB",
    product_name: "iPhone 12 256GB Green",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_green_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100022448-IB",
    product_name: "iPhone 12 256GB Purple",
    product_price: 14999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_purple_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100022447-IB",
    product_name: "iPhone 12 128GB Purple",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_purple_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100022451-IB",
    product_name: "iPhone 12 64GB Purple",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_purple_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-ibox",
  },
  {
    product_id: "8100020473-IB",
    product_name: "iPhone 12 mini 64GB Black",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_black_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018558-IB",
    product_name: "iPhone 12 mini 64GB White",
    product_price: 12999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_white_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018549-IB",
    product_name: "iPhone 12 mini 64GB (PRODUCT)RED",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_red_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018554-IB",
    product_name: "iPhone 12 mini 64GB Blue",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_blue_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018556-IB",
    product_name: "iPhone 12 mini 64GB Green",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_green_1_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018539-IB",
    product_name: "iPhone 12 mini 128GB Black",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_black_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100020472-IB",
    product_name: "iPhone 12 mini 128GB White",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_white_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100020470-IB",
    product_name: "iPhone 12 mini 128GB (PRODUCT)RED",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_red_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018540-IB",
    product_name: "iPhone 12 mini 128GB Blue",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_blue_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018541-IB",
    product_name: "iPhone 12 mini 128GB Green",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_green_1_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018544-IB",
    product_name: "iPhone 12 mini 256GB Black",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_black_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018548-IB",
    product_name: "iPhone 12 mini 256GB White",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_white_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018543-IB",
    product_name: "iPhone 12 mini 256GB (PRODUCT)RED",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_red_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018545-IB",
    product_name: "iPhone 12 mini 256GB Blue",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_blue_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018546-IB",
    product_name: "iPhone 12 mini 256GB Green",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_green_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100022460-IB",
    product_name: "iPhone 12 mini 64GB Purple",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_purple_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100022453-IB",
    product_name: "iPhone 12 mini 128GB Purple",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_purple_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100022455-IB",
    product_name: "iPhone 12 mini 256GB Purple",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_mini_purple_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-mini-ibox",
  },
  {
    product_id: "8100018644-IB",
    product_name: "iPhone 12 Pro 128GB Graphite",
    product_price: 18499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_graphite_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018650-IB",
    product_name: "iPhone 12 Pro 128GB Silver",
    product_price: 18499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018641-IB",
    product_name: "iPhone 12 Pro 128GB Gold",
    product_price: 18499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_gold_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018647-IB",
    product_name: "iPhone 12 Pro 128GB Pacific Blue",
    product_price: 18499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_pacific_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018652-IB",
    product_name: "iPhone 12 Pro 256GB Graphite",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_graphite_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018655-IB",
    product_name: "iPhone 12 Pro 256GB Silver",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018651-IB",
    product_name: "iPhone 12 Pro 256GB Gold",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018653-IB",
    product_name: "iPhone 12 Pro 256GB Pacific Blue",
    product_price: 20999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_pacific_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018657-IB",
    product_name: "iPhone 12 Pro 512GB Graphite",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_graphite_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018659-IB",
    product_name: "iPhone 12 Pro 512GB Silver",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018656-IB",
    product_name: "iPhone 12 Pro 512GB Gold",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_gold_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018658-IB",
    product_name: "iPhone 12 Pro 512GB Pacific Blue",
    product_price: 24999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_pacific_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-ibox",
  },
  {
    product_id: "8100018662-IB",
    product_name: "iPhone 12 Pro Max 128GB Graphite",
    product_price: 20499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_graphite_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018667-IB",
    product_name: "iPhone 12 Pro Max 128GB Silver",
    product_price: 20499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_white_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018661-IB",
    product_name: "iPhone 12 Pro Max 128GB Gold",
    product_price: 20499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018665-IB",
    product_name: "iPhone 12 Pro Max 128GB Pacific Blue",
    product_price: 20499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_pacific_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018671-IB",
    product_name: "iPhone 12 Pro Max 256GB Graphite",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_graphite_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018740-IB",
    product_name: "iPhone 12 Pro Max 256GB Silver",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018670-IB",
    product_name: "iPhone 12 Pro Max 256GB Gold",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_gold_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018738-IB",
    product_name: "iPhone 12 Pro Max 256GB Pacific Blue",
    product_price: 22999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_pacific_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018742-IB",
    product_name: "iPhone 12 Pro Max 512GB Graphite",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_graphite_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018746-IB",
    product_name: "iPhone 12 Pro Max 512GB Silver",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_white_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018741-IB",
    product_name: "iPhone 12 Pro Max 512GB Gold",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_gold_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100018744-IB",
    product_name: "iPhone 12 Pro Max 512GB Pacific Blue",
    product_price: 26999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_pacific_blue_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-12-pro-max-ibox",
  },
  {
    product_id: "8100021039-IB",
    product_name: "20W USB-C Power Adapter",
    product_price: 449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_20w_usb-c_power_adapter-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/20w-usb-c-power-adapter",
  },
  {
    product_id: "8100012298-IB",
    product_name: "MagSafe Charger",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magsafe_charger-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magsafe-charger",
  },
  {
    product_id: "8100007968-IB",
    product_name: "UAG IPhone 12 Mini Monarch - Black",
    product_price: 719200,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510359401_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-mini-monarch-black-ib",
  },
  {
    product_id: "8100007971-IB",
    product_name: "UAG IPhone 12 / 12 Pro Civilian - Black",
    product_price: 599200,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510360771_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-12-pro-civilian-black-ib",
  },
  {
    product_id: "8100007969-IB",
    product_name: "UAG IPhone 12 / 12 Pro Monarch - Black",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510360461_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-12-pro-monarch-ib",
  },
  {
    product_id: "8100007979-IB",
    product_name: "UAG IPhone 12 / 12 Pro Monarch - Mallard",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia812451036886_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-12-pro-monarch-ib",
  },
  {
    product_id: "8100007970-IB",
    product_name: "UAG IPhone 12 / 12 Pro Monarch - Crimson",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510360601_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-12-pro-monarch-ib",
  },
  {
    product_id: "8100007965-IB",
    product_name: "UAG IPhone 12 / 12 Pro Pathfinder - Black",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510357111_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-12-pro-pathfinder-ib",
  },
  {
    product_id: "8100007964-IB",
    product_name: "UAG IPhone 12 / 12 Pro Pathfinder - Silver",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510357041_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-12-pro-pathfinder-ib",
  },
  {
    product_id: "8100007973-IB",
    product_name: "UAG IPhone 12 / 12 Pro Plasma - Ice",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510361141_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-12-pro-plasma-ib",
  },
  {
    product_id: "8100007972-IB",
    product_name: "UAG IPhone 12 / 12 Pro Plasma - Ash",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510361071_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-12-pro-plasma-ib",
  },
  {
    product_id: "8100007974-IB",
    product_name: "UAG IPhone 12 Pro Max Monarch - Black",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510361451_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-pro-max-monarch-ib",
  },
  {
    product_id: "8100006424-IB",
    product_name: "UAG IPhone 12 Pro Max Monarch - Mallard",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510372031_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-pro-max-monarch-ib",
  },
  {
    product_id: "8100007975-IB",
    product_name: "UAG IPhone 12 Pro Max Monarch - Crimson",
    product_price: 899000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510361691_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-pro-max-monarch-ib",
  },
  {
    product_id: "8100007967-IB",
    product_name: "UAG IPhone 12 Pro Max Pathfinder - Black",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510357731_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-pro-max-pathfinder-ib",
  },
  {
    product_id: "8100006425-IB",
    product_name: "UAG IPhone 12 Pro Max Pathfinder - Mallard",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510372581_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-pro-max-pathfinder-ib",
  },
  {
    product_id: "8100007966-IB",
    product_name: "UAG IPhone 12 Pro Max Pathfinder - Silver",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510357661_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/uag-iphone-12-pro-max-pathfinder-ib",
  },
  {
    product_id: "8100007978-IB",
    product_name: "UAG IPhone 12 Pro Max Plasma - Ice",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510362131_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-pro-max-plasma-ib",
  },
  {
    product_id: "8100007977-IB",
    product_name: "UAG IPhone 12 Pro Max Plasma - Ash",
    product_price: 599000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8124510362061_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-12-pro-max-plasma-ib",
  },
  {
    product_id: "8100009604-IB",
    product_name: "Microsoft Office Home and Student 2019 POSA",
    product_price: 1577000,
    brand: "Microsoft",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/i/microsoft_office_home_student_2019_posa.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/microsoft-office-home-and-student-2019-posa",
  },
  {
    product_id: "8100024492-IB",
    product_name: "iPhone 12 mini Leather Case with MagSafe, (PRODUCT)RED",
    product_price: 1199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_leather_case_with_magsafe_product_red_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-leather-case-with-magsafe-product-red",
  },
  {
    product_id: "8100024482-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, (PRODUCT)RED",
    product_price: 949000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_product_red_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe-product-red",
  },
  {
    product_id: "8100024467-IB",
    product_name: "iPhone 12 mini Clear Case with MagSafe",
    product_price: 949000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_clear_case_with_magsafe_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-clear-case-with-magsafe",
  },
  {
    product_id: "8100024465-IB",
    product_name: "iPhone Leather Wallet with MagSafe, California Poppy",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_california_poppy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100018972-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Baltic Blue",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_baltic_blue_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100022992-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Black",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100021177-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Saddle Brown",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_saddle_brown_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100029713-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Dark Cherry",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_dark_cherry1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100029749-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Midnight",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_midnight1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100029715-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Sequoia Green",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_sequoia_green1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100029714-IB",
    product_name: "iPhone Leather Wallet with MagSafe, Wisteria",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_leather_wallet_with_magsafe_wisteria1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-leather-wallet-with-magsafe",
  },
  {
    product_id: "8100021180-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Deep Navy",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_deep_navy_1_3.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018750-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Kumquat",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_kumquat_1_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024470-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Pink Citrus",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_pink_citrus_1_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024469-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Plum",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_plum_1_2_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100021179-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Cypress Green",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_cypress_green_1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "MHLE3ZA/A-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, White",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_white_1_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018751-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, (PRODUCT)RED",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_product_red_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018752-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Black",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_silicone_case_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024563-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Amethyst",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_silicone_case_with_magsafe_amethyst.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024565-IB",
    product_name: "iPhone 12 Pro Max Silicone Case with MagSafe, Pistachio",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12_pro_max_silicone_case_with_magsafe_pistachio.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018410-IB",
    product_name:
      "iPhone 12 Pro Max Leather Case with MagSafe, California Poppy",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_leather_case_with_magsafe_california_poppy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-leather-case-with-magsafe",
  },
  {
    product_id: "8100024489-IB",
    product_name: "iPhone 12 Pro Max Leather Case with MagSafe, (PRODUCT)RED",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_leather_case_with_magsafe_product_red_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-leather-case-with-magsafe",
  },
  {
    product_id: "8100021181-IB",
    product_name: "iPhone 12 Pro Max Leather Case with MagSafe, Baltic Blue",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_leather_case_with_magsafe_baltic_blue_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-leather-case-with-magsafe",
  },
  {
    product_id: "8100018749-IB",
    product_name: "iPhone 12 Pro Max Leather Case with MagSafe, Saddle Brown",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_leather_case_with_magsafe_saddle_brown_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-leather-case-with-magsafe",
  },
  {
    product_id: "8100021184-IB",
    product_name: "iPhone 12 Pro Max Leather Case with MagSafe, Black",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_pro_max_leather_case_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-pro-max-leather-case-with-magsafe",
  },
  {
    product_id: "8100018564-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, Kumquat",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_kumquat_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018639-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, Pink Citrus",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_pink_citrus_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018640-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, Plum",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_plum_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024483-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, Cypress Green",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_cypress_green_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018638-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, Deep Navy",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_deep_navy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "MHKV3ZA/A-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, White",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_white_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024482-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, (PRODUCT)RED",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_product_red_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018565-IB",
    product_name: "iPhone 12 mini Silicone Case with MagSafe, Black",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_silicone_case_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018755-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, Kumquat",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_kumquat_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100024480-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, Pink Citrus",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_pink_citrus_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100022991-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, Plum",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_plum_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018424-IB",
    product_name:
      "iPhone 12 | 12 Pro Silicone Case with MagSafe, Cypress Green",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_cypress_green_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100021183-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, Deep Navy",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_deep_navy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100021210-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, White",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_white_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018421-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, (PRODUCT)RED",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_product_red_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100022990-IB",
    product_name: "iPhone 12 | 12 Pro Silicone Case with MagSafe, Black",
    product_price: 1149000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_silicone_case_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-silicone-case-with-magsafe",
  },
  {
    product_id: "8100018448-IB",
    product_name:
      "iPhone 12 | 12 Pro Leather Case with MagSafe, California Poppy",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_leather_case_with_magsafe_california_poppy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-leather-case-with-magsafe",
  },
  {
    product_id: "8100024491-IB",
    product_name: "iPhone 12 | 12 Pro Leather Case with MagSafe, (PRODUCT)RED",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_leather_case_with_magsafe_product_red_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-leather-case-with-magsafe",
  },
  {
    product_id: "8100022989-IB",
    product_name: "iPhone 12 | 12 Pro Leather Case with MagSafe, Baltic Blue",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_leather_case_with_magsafe_baltic_blue_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-leather-case-with-magsafe",
  },
  {
    product_id: "8100018753-IB",
    product_name: "iPhone 12 | 12 Pro Leather Case with MagSafe, Saddle Brown",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_leather_case_with_magsafe_saddle_brown_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-leather-case-with-magsafe",
  },
  {
    product_id: "8100022988-IB",
    product_name: "iPhone 12 | 12 Pro Leather Case with MagSafe, Black",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_12_pro_leather_case_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-leather-case-with-magsafe",
  },
  {
    product_id: "8100024578-IB",
    product_name: "iPhone 12 | 12 Pro Leather Case with MagSafe, Deep Violet",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_12___12_pro_leather_case_with_magsafe_deep_violt.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-12-pro-leather-case-with-magsafe",
  },
  {
    product_id: "8100024493-IB",
    product_name: "iPhone 12 mini Leather Case with MagSafe, California Poppy",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_leather_case_with_magsafe_california_poppy_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-leather-case-with-magsafe",
  },
  {
    product_id: "8100024492-IB",
    product_name: "iPhone 12 mini Leather Case with MagSafe, (PRODUCT)RED",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_leather_case_with_magsafe_product_red_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-leather-case-with-magsafe",
  },
  {
    product_id: "8100021178-IB",
    product_name: "iPhone 12 mini Leather Case with MagSafe, Baltic Blue",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_leather_case_with_magsafe_baltic_blue_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-leather-case-with-magsafe",
  },
  {
    product_id: "8100018562-IB",
    product_name: "iPhone 12 mini Leather Case with MagSafe, Saddle Brown",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_leather_case_with_magsafe_saddle_brown_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-leather-case-with-magsafe",
  },
  {
    product_id: "8100018561-IB",
    product_name: "iPhone 12 mini Leather Case with MagSafe, Black",
    product_price: 1449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_12_mini_leather_case_with_magsafe_black_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-12-mini-leather-case-with-magsafe",
  },
  {
    product_id: "8100006098-IB",
    product_name: "Lamina Tempered Glass iPhone 12 mini",
    product_price: 79000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina-ip12_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-12-mini-ib",
  },
  {
    product_id: "8100006099-IB",
    product_name: "Lamina Tempered Glass iPhone 12/12 Pro",
    product_price: 149000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina-ip12_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-12-12-pro-ib",
  },
  {
    product_id: "8100007661-IB",
    product_name: "Lamina Tempered Glass iPhone 12 Pro Max",
    product_price: 79000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina-ip12_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-12-pro-max-ib",
  },
  {
    product_id: "8100010641-IB",
    product_name: "Beats Studio 2 - White",
    product_price: 1699000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beat-studio2-white-new-1_3w.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-studio-2-white-ib",
  },
  {
    product_id: "8100010642-IB",
    product_name: "Beats Studio 2 Wireless - Blue",
    product_price: 6300000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/h/mha92pab-ib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-studio-2-blue-wireless-ib",
  },
  {
    product_id: "MMQR2FE/A-IB",
    product_name: "iPhone 7 Plus Silicone Case - Black",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_silicone_case_black.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-silicone-case",
  },
  {
    product_id: "MMQV2FE/A-IB",
    product_name: "iPhone 7 Plus Silicone Case - (PRODUCT)RED",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_silicone_case_product_red.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-silicone-case",
  },
  {
    product_id: "ML8V2ZA-A-IB",
    product_name: "Beats Powerbeats3 Wireless - Black",
    product_price: 2649000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats-powerbeats3-wi-black-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats3-wireless-ib",
  },
  {
    product_id: "ML8W2ZA-A-IB",
    product_name: "Beats Powerbeats3 Wireless - White",
    product_price: 2649000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats-powerbeats3-wi-white-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-powerbeats3-wireless-ib",
  },
  {
    product_id: "8100012433-IB",
    product_name: "iPhone 7 Silicone Case - White",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_silicone_case_white.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-silicone-case-ib",
  },
  {
    product_id: "MMX02FE/A-IB",
    product_name: "iPhone 7 Silicone Case - Sea Blue",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_silicone_case_sea_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-silicone-case-ib",
  },
  {
    product_id: "8100012222-IB",
    product_name: "iPhone 7 Silicone Case - Pink Sand",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_silicone_case_pink_sand.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-silicone-case-ib",
  },
  {
    product_id: "8100025901-IB",
    product_name: "iPhone 7 Silicone Case - Cocoa",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_silicone_case_cocoa.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-silicone-case-ib",
  },
  {
    product_id: "8100013113-IB",
    product_name: "iPhone 7 Leather Case - (PRODUCT)RED",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_product_red.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "8100013114-IB",
    product_name: "iPhone 7 Leather Case - Black",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_black.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "MMY32FE/A-IB",
    product_name: "iPhone 7 Leather Case - Midnight Blue",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_midnight_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "MMY22FE/A-IB",
    product_name: "iPhone 7 Leather Case - Saddle Brown",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_saddle_brown_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "MMY42FE/A-IB",
    product_name: "iPhone 7 Leather Case - Sea Blue",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_sea_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "8100013119-IB",
    product_name: "iPhone 7 Leather Case - Tan",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_tan.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "MMY12FE/A-IB",
    product_name: "iPhone 7 Leather Case - Storm Gray",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_leather_case_storm_gray.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-leather-case-ib",
  },
  {
    product_id: "MMYF2FE/A-IB",
    product_name: "iPhone 7 Plus Leather Case - Saddle Brown",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_leather_case_saddle_brown_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-leather-case-ib",
  },
  {
    product_id: "MMYG2FE/A-IB",
    product_name: "iPhone 7 Plus Leather Case - Midnight Blue",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_leather_case_midnight_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-leather-case-ib",
  },
  {
    product_id: "MMYH2FE/A-IB",
    product_name: "iPhone 7 Plus Leather Case - Sea Blue",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_leather_case_sea_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-leather-case-ib",
  },
  {
    product_id: "8100012203-IB",
    product_name: "iPhone 7 Plus Leather Case - Black",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_leather_case_black.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-leather-case-ib",
  },
  {
    product_id: "MMYL2FE/A-IB",
    product_name: "iPhone 7 Plus Leather Case - Tan",
    product_price: 99000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_7_plus_leather_case_tan_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-7-plus-leather-case-ib",
  },
  {
    product_id: "8100012474-IB",
    product_name: "iPhone X Leather Folio - Black",
    product_price: 1799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_folio_black_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-folio-ib",
  },
  {
    product_id: "8100012475-IB",
    product_name: "iPhone X Leather Folio - Cosmos Blue",
    product_price: 1799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_folio_cosmos_blue_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-folio-ib",
  },
  {
    product_id: "8100012473-IB",
    product_name: "iPhone X Leather Folio - Berry",
    product_price: 1799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_folio_berry_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-folio-ib",
  },
  {
    product_id: "8100012476-IB",
    product_name: "iPhone X Leather Folio - Taupe",
    product_price: 1799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_folio_taupe_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-folio-ib",
  },
  {
    product_id: "8100012477-IB",
    product_name: "iPhone X Silicone Case - Black",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_silicone_case_black.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-silicone-case-ib",
  },
  {
    product_id: "8100012478-IB",
    product_name: "iPhone X Silicone Case - Midnight Blue",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_silicone_case_midnight_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-silicone-case-ib",
  },
  {
    product_id: "MQT42FE/A-IB",
    product_name: "iPhone X Silicone Case - Blue Cobalt",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_silicone_case_blue_cobalt.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-silicone-case-ib",
  },
  {
    product_id: "8100012479-IB",
    product_name: "iPhone X Silicone Case - Rose Red",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_silicone_case_rose_red.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-silicone-case-ib",
  },
  {
    product_id: "8100012472-IB",
    product_name: "iPhone X Leather Case - Taupe",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_taupe.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012471-IB",
    product_name: "iPhone X Leather Case - Saddle Brown",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_saddle_brown.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012468-IB",
    product_name: "iPhone X Leather Case - Midnight Blue",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_midnight_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012466-IB",
    product_name: "iPhone X Leather Case - Black",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_black.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012465-IB",
    product_name: "iPhone X Leather Case - (PRODUCT)RED",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_product_red.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012467-IB",
    product_name: "iPhone X Leather Case - Charcoal Gray",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_charcoal_gray.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012469-IB",
    product_name: "iPhone X Leather Case - Dark Aubergine",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_dark_aubergine.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "MQTH2FE/A-IB",
    product_name: "iPhone X Leather Case - Cosmos Blue",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_cosmos_blue.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100012470-IB",
    product_name: "iPhone X Leather Case - Pink Fuchsia",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_x_leather_case_pink_fuchsia.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/iphone-x-leather-case-ib",
  },
  {
    product_id: "8100024519-IB",
    product_name: "Apple Watch Series 6 40mm GPS, Silver, White Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-silver-white-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-40mm-gps-silver-white-sport-band-ibox",
  },
  {
    product_id: "8100022976-IB",
    product_name: "Apple Watch Series 6 40mm  GPS, Gold, Pink Sand Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-blue-gold-pink-sand-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-40mm-gps-gold-pink-sand-sport-band-ibox",
  },
  {
    product_id: "8100022978-IB",
    product_name: "Apple Watch Series 6 40mm GPS, Space Grey, Black Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-space-grey-black-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-40mm-gps-space-gray-black-sport-band-ibox",
  },
  {
    product_id: "8100022975-IB",
    product_name: "Apple Watch Series 6 40mm GPS, Blue, Deep Navy Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-blue-deep-navy-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-40mm-gps-blue-deep-navy-sport-band-ibox",
  },
  {
    product_id: "8100022977-IB",
    product_name:
      "Apple Watch Series 6 40mm GPS, PRODUCT(RED), PRODUCT(RED) Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-productred-red-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-40mm-gps-product-red-product-red-sport-band-ibox-1",
  },
  {
    product_id: "8100021550-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Silver, White Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-silver-white-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-44mm-gps-silver-white-sport-band-ibox",
  },
  {
    product_id: "8100021548-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Gold, Pink Sand Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-gold-pink-sand-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-44mm-gps-gold-pink-sand-sport-band-ibox",
  },
  {
    product_id: "8100022980-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Space Grey, Black Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-space-grey-black-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-44mm-gps-space-gray-black-sport-band-ibox",
  },
  {
    product_id: "8100022979-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Blue, Deep Navy Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-blue-deep-navy-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-44mm-gps-blue-deep-navy-sport-band-ibox",
  },
  {
    product_id: "8100021549-IB",
    product_name:
      "Apple Watch Series 6 44mm GPS, PRODUCT(RED), PRODUCT(RED) Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-productred-red-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-6-44mm-gps-product-red-product-red-sport-band-ibox-1",
  },
  {
    product_id: "8100024616-IB",
    product_name:
      "Apple Watch Nike Series 6 40mm GPS, Silver, Pure Platinum/Black Nike Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-40mm-gps-silver-platinum-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-6-40mm-gps-silver-pure-platinum-black-nike-sport-band-ibox",
  },
  {
    product_id: "8100022970-IB",
    product_name:
      "Apple Watch Nike Series 6 40mm GPS, Space Grey, Anthracite/Black Nike Sport Band",
    product_price: 7499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-40mm-gps-space-grey-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-6-40mm-gps-space-gray-anthracite-black-nike-sport-band-ibox",
  },
  {
    product_id: "8100022972-IB",
    product_name:
      "Apple Watch Nike Series 6 44mm GPS, Silver, Pure Platinum/Black Nike Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-44mm-gps-silver-platinum-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-6-44mm-gps-silver-pure-platinum-black-nike-sport-band-ibox-1",
  },
  {
    product_id: "8100022971-IB",
    product_name:
      "Apple Watch Nike Series 6 44mm GPS, Space Grey, Anthracite/Black Nike Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-44mm-gps-space-grey-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-nike-series-6-44mm-gps-space-gray-anthracite-black-nike-sport-band-ibox-1",
  },
  {
    product_id: "8100024519-IB",
    product_name: "Apple Watch Series 6 40mm GPS, Silver, White Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-silver-white-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100022976-IB",
    product_name: "Apple Watch Series 6 40mm  GPS, Gold, Pink Sand Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-blue-gold-pink-sand-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100022978-IB",
    product_name: "Apple Watch Series 6 40mm GPS, Space Grey, Black Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-space-grey-black-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100022975-IB",
    product_name: "Apple Watch Series 6 40mm GPS, Blue, Deep Navy Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-blue-deep-navy-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100022977-IB",
    product_name:
      "Apple Watch Series 6 40mm GPS, PRODUCT(RED), PRODUCT(RED) Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-40mm-gps-productred-red-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100021550-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Silver, White Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-silver-white-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100021548-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Gold, Pink Sand Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-gold-pink-sand-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100022980-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Space Grey, Black Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-space-grey-black-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100022979-IB",
    product_name: "Apple Watch Series 6 44mm GPS, Blue, Deep Navy Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-blue-deep-navy-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100021549-IB",
    product_name:
      "Apple Watch Series 6 44mm GPS, PRODUCT(RED), PRODUCT(RED) Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-6-44mm-gps-productred-red-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-series-6-ibox",
  },
  {
    product_id: "8100024616-IB",
    product_name:
      "Apple Watch Nike Series 6 40mm GPS, Silver, Pure Platinum/Black Nike Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-40mm-gps-silver-platinum-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-6-ibox",
  },
  {
    product_id: "8100022970-IB",
    product_name:
      "Apple Watch Nike Series 6 40mm GPS, Space Grey, Anthracite/Black Nike Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-40mm-gps-space-grey-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-6-ibox",
  },
  {
    product_id: "8100022972-IB",
    product_name:
      "Apple Watch Nike Series 6 44mm GPS, Silver, Pure Platinum/Black Nike Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-44mm-gps-silver-platinum-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-6-ibox",
  },
  {
    product_id: "8100022971-IB",
    product_name:
      "Apple Watch Nike Series 6 44mm GPS, Space Grey, Anthracite/Black Nike Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/w/aws-nike-6-44mm-gps-space-grey-black-nike-sport-band-1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-6-ibox",
  },
  {
    product_id: "8100007928-IB",
    product_name:
      "Lamina Premium Tempered Glass 0.22mm for iPhone SE/6/6S/7/7S/8",
    product_price: 19000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_new_0.22_3_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-iphone-6-6s-7-0-22mm-premium-tempered-glass-slim-series-new-ib",
  },
  {
    product_id: "8100013649-IB",
    product_name: "Lamina Screen Protector Macbook Air 13 inch",
    product_price: 49000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_macbook_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-screen-protector-macbook-air-13-inch-ib",
  },
  {
    product_id: "8100019411-IB",
    product_name:
      "MacBook Air (13 inci, M1 2020) 8GB RAM, 256GB SSD, Space Grey",
    product_price: 17199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_air_m1_space_gray_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-m1-2020-ibox",
  },
  {
    product_id: "8100019407-IB",
    product_name: "MacBook Air (13 inci, M1 2020) 8GB RAM, 256GB SSD, Silver",
    product_price: 17199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_air_m1_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-m1-2020-ibox",
  },
  {
    product_id: "8100019401-IB",
    product_name: "MacBook Air (13 inci, M1 2020) 8GB RAM, 256GB SSD, Gold",
    product_price: 17199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_air_m1_gold_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-m1-2020-ibox",
  },
  {
    product_id: "8100019412-IB",
    product_name:
      "MacBook Air (13 inci, M1 2020) 8GB RAM, 512GB SSD, Space Grey",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_air_m1_space_gray_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-m1-2020-ibox",
  },
  {
    product_id: "8100019408-IB",
    product_name: "MacBook Air (13 inci, M1 2020) 8GB RAM, 512GB SSD, Silver",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_air_m1_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-m1-2020-ibox",
  },
  {
    product_id: "8100019402-IB",
    product_name: "MacBook Air (13 inci, M1 2020) 8GB RAM, 512GB SSD, Gold",
    product_price: 18999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_air_m1_gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-air-m1-2020-ibox",
  },
  {
    product_id: "8100021165-IB",
    product_name:
      "MacBook Pro (13 inci, M1, 2020) 8GB RAM, 256GB SSD, Space Grey",
    product_price: 19499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m1_space_gray_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-ibox",
  },
  {
    product_id: "8100019423-IB",
    product_name: "MacBook Pro (13 inci, M1, 2020) 8GB RAM, 256GB SSD, Silver",
    product_price: 19499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m1_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-ibox",
  },
  {
    product_id: "8100019426-IB",
    product_name:
      "MacBook Pro (13 inci, M1, 2020) 8GB RAM, 512GB SSD, Space Grey",
    product_price: 22499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m1_space_gray_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-ibox",
  },
  {
    product_id: "8100021170-IB",
    product_name: "MacBook Pro (13 inci, M1, 2020) 8GB RAM, 512GB SSD, Silver",
    product_price: 22499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m1_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-ibox",
  },
  {
    product_id: "8100019345-IB",
    product_name: "Mac mini (M1, 2020) 8GB RAM, 256GB SSD, Silver",
    product_price: 11999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mac_mini_m1_silver_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/mac-mini-m1-2020-ibox",
  },
  {
    product_id: "8100030747-IB",
    product_name: "Mac mini (M1, 2020) 8GB RAM, 512GB SSD, Silver",
    product_price: 0,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mac_mini_m1_silver_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/mac-mini-m1-2020-ibox",
  },
  {
    product_id: "8100013227-IB",
    product_name: "Jabra Elite 85t - Titanium Black",
    product_price: 3490000,
    brand: "Jabra",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/a/jabra_elite_85t_titanium_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/jabra-elite-85t-titanium-black-ib",
  },
  {
    product_id: "8100006922-IB",
    product_name: "Adidas Case iPhone 12/12 Pro Moulded Basic",
    product_price: 555000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_12_pro_moulded_basic_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-12pro-moulded-basic-ib",
  },
  {
    product_id: "8100006923-IB",
    product_name: "Adidas Case iPhone 12 Pro Max Moulded Basic",
    product_price: 555000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_pro_max_moulded_basic_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-pro-max-moulded-basic-ib",
  },
  {
    product_id: "8100006925-IB",
    product_name: "Adidas Case iPhone 12/12 Pro Moulded Polyurethane",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_12_pro_moulded_polyurethane_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-12pro-moulded-polyurethane-ib",
  },
  {
    product_id: "8100013367-IB",
    product_name: "Mazer GAN Charger 20w - Black",
    product_price: 299000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/iam-gan20w-bk2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/mazer-gan-charger-20w-black-ib",
  },
  {
    product_id: "8100006928-IB",
    product_name: "Adidas Case iPhone 12/12 Pro Protective - Clear",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_12_pro_protective_-_clear_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-12-pro-protective-clear-ib",
  },
  {
    product_id: "8100006929-IB",
    product_name: "Adidas Case iPhone 12 ProMax Protective - Clear",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_promax_protective_-_clear_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-promax-protective-clear-ib",
  },
  {
    product_id: "8100006931-IB",
    product_name: "Adidas Case iPhone 12/12 Pro Protective Smoke",
    product_price: 639000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_12_pro_protective_smoke_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-12pro-protective-smoke-ib",
  },
  {
    product_id: "8100006932-IB",
    product_name: "Adidas Case iPhone 12 ProMax Protective Smoke",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_promax_protective_smoke_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-promax-protective-smoke-ib",
  },
  {
    product_id: "8100006934-IB",
    product_name: "Adidas Case iPhone 12/12 Pro Grip - Clear",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_12_pro_grip_-_clear_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-12pro-grip-clear-ib",
  },
  {
    product_id: "8100006935-IB",
    product_name: "Adidas Case iPhone 12 Pro Max Grip - Clear",
    product_price: 646000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_pro_max_grip_-_clear_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-pro-max-grip-clear-ib",
  },
  {
    product_id: "8100006937-IB",
    product_name: "Adidas Case iPhone 12/12 Pro Grip - Black",
    product_price: 737000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_12_pro_grip_-_black_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-12pro-grip-black-ib",
  },
  {
    product_id: "8100006938-IB",
    product_name: "Adidas Case iPhone 12 Pro Max Grip - Black",
    product_price: 737000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/d/adidas_case_iphone_12_pro_max_grip_-_black_-0_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-case-iphone-12-pro-max-grip-black-ib",
  },
  {
    product_id: "8100006509-IB",
    product_name: "Spigen iPhone 12 mini Core Armor - Matte Black",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107551851_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-core-armor-matte-black-ib",
  },
  {
    product_id: "8100006510-IB",
    product_name: "Spigen iPhone 12 mini Crystal Flex - Clear",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_lc_cc_01_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-crystal-flex-clear-ib",
  },
  {
    product_id: "8100006513-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Black",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552601_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-black-ib",
  },
  {
    product_id: "8100006515-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Blue",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552841_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-blue-ib",
  },
  {
    product_id: "8100006516-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Silver",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552911_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-silver-ib",
  },
  {
    product_id: "8100006514-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Gunmetal",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552771_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-gunmetal-ib",
  },
  {
    product_id: "8100006517-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Clear",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip12mini_sa_ess_rose_crystal_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-clear-ib",
  },
  {
    product_id: "8100006501-IB",
    product_name: "Spigen iPhone 12/12 Pro Core Armor - Matte Black",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_ca_blk_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-core-armor-matte-black-ib",
  },
  {
    product_id: "8100006502-IB",
    product_name: "Spigen iPhone 12/12 Pro Crystal Flex - Clear",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_lc_cc_01_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-crystal-flex-clear-ib",
  },
  {
    product_id: "8100006503-IB",
    product_name: "Spigen iPhone 12/12 Pro Hybrid NX - Matte Black",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_hybrid_nx_blk_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-hybrid-nx-matte-black-ib",
  },
  {
    product_id: "8100006504-IB",
    product_name: "Spigen iPhone 12/12 Pro Crystal Hybrid - Clear",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_lc_cc_01_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-crystal-hybrid-clear-ib",
  },
  {
    product_id: "8100006505-IB",
    product_name: "Spigen iPhone 12/12 Pro Slim Armor - Black",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_sa_black_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-slim-armor-black-ib",
  },
  {
    product_id: "8100006506-IB",
    product_name: "Spigen iPhone 12/12 Pro Slim Armor - Gunmetal",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip61_sa_gunmetal_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-slim-armor-gunmetal-ib",
  },
  {
    product_id: "8100006507-IB",
    product_name: "Spigen iPhone 12/12 Pro Slim Armor - White",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107550791_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-12-pro-slim-armor-white-ib",
  },
  {
    product_id: "8100006492-IB",
    product_name: "Spigen iPhone 12 Pro Max Core Armor - Matte Black",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip67pro_ca_blk_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-pro-max-core-armor-matte-black-ib",
  },
  {
    product_id: "8100006494-IB",
    product_name: "Spigen iPhone 12 Pro Max Hybrid NX - Matte Black",
    product_price: 319200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip12promax_hybrid_nx_blk_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-pro-max-hybrid-nx-matte-black-ib",
  },
  {
    product_id: "8100006496-IB",
    product_name: "Spigen IPhone 12 Pro Max Slim Armor - Black",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip12promax_sa_black_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-pro-max-slim-armor-black-ib",
  },
  {
    product_id: "8100006497-IB",
    product_name: "Spigen IPhone 12 Pro Max Slim Armor - Gunmetal",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip12promax_sa_gunmetal_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-pro-max-slim-armor-gunmetal-ib",
  },
  {
    product_id: "8100006499-IB",
    product_name: "Spigen IPhone 12 Pro Max Slim Armor - Silver",
    product_price: 399200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/d/e/detail_ip12promax_sa_satin_silver_01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-pro-max-slim-armor-silver-ib",
  },
  {
    product_id: "8100006513-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Black",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552601_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-ib",
  },
  {
    product_id: "8100006515-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Blue",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552841_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-ib",
  },
  {
    product_id: "8100006516-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Silver",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552911_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-ib",
  },
  {
    product_id: "8100006514-IB",
    product_name: "Spigen iPhone 12 mini Slim Armor - Gunmetal",
    product_price: 499000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia88097107552771_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-12-mini-slim-armor-ib",
  },
  {
    product_id: "8100003919-IB",
    product_name: "Belkin 3.0 USB-C to HDMI Adapter - Black",
    product_price: 99000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_3.0_usb-c_to_hdmi_adapter_black.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-3-0-usb-c-to-hdmi-adapter-ib",
  },
  {
    product_id: "8100004850-IB",
    product_name: "Belkin Lightning Audio + Charge Rockstar - White",
    product_price: 599000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_lightning_audio_charge_rockstar_white.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-lightning-audio-charge-rockstar-white-ib",
  },
  {
    product_id: "8100003841-IB",
    product_name: "Belkin Lightning To USB Cable 2M - White",
    product_price: 149000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_lightning_to_usb_cable_2m_white.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-lightning-to-usb-cable-2m-white-ib",
  },
  {
    product_id: "8100008981-IB",
    product_name: "STM Saga Backpack 15 Inch - Granite Grey",
    product_price: 939000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm-stories-saga-grey-front-angle-768x601_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/stm-saga-backpack-15-inch-granite-grey-ib",
  },
  {
    product_id: "8100010514-IB",
    product_name: "Beats Pill+ - Black",
    product_price: 3700000,
    brand: "Beats",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/beats-pill-plus-black-1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/beats-pill-plus-black-ib",
  },
  {
    product_id: "8100003932-IB",
    product_name: "Belkin Travel Stand For Apple Watch Cable - Black",
    product_price: 79000,
    brand: "Belkin",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/b/e/belkin_travel_stand_for_apple_watch_cable_black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/belkin-travel-stand-for-apple-watch-cable-black",
  },
  {
    product_id: "8100025306-IB",
    product_name: "Mazer Cable USB-A to USB-C 120cm 3.1A - White",
    product_price: 59000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia5055517354387-ib_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-usb-a-to-usb-c-120cm-3-1a-white1",
  },
  {
    product_id: "8100005255-IB",
    product_name:
      "Mazer Cable Premium 2 in 1 (Micro, USB-C) 120cm 3.1A - Black",
    product_price: 59000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia5055517365086-ib_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-cable-premium-2-in-1-micro-usb-c-120cm-31a-black1",
  },
  {
    product_id: "8100007761-IB",
    product_name:
      "Mazer Dura.Tek Usb-C To Lightning 18W  Fast Charging 1.2M Cable - Red",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/-/m-ks-a88c-rd_8881304541800_img01_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-dura-tek-usb-c-to-lightning-18w-fast-charging-1-2m-cable-red-ib",
  },
  {
    product_id: "8100004957-IB",
    product_name: "Mazer Cable Lightning 200Cm 3.1A - Grey",
    product_price: 119000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer---cable-lightning-200cm-3.1a---grey_2_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-alu-duratek-usb-a-to-usb-c-grey-ib",
  },
  {
    product_id: "8100005022-IB",
    product_name: "Mazer Converter Usb C To Hdmi 4K - Gold",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_-_converter_usb_c_to_hdmi_4k_alu_-_gold_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-converter-usb-c-to-hdmi-4k-gold-ib-new-2021",
  },
  {
    product_id: "8100007757-IB",
    product_name: "Mazer Multi3.Duratek Usb-A/C To Usb-C/5A/1.5M - Black",
    product_price: 149000,
    brand: "Mazer",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mazer_3_in_1_cable_-_black_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/mazer-multi3-duratek-usb-a-c-to-usb-c-5a-1-5m-black-ib",
  },
  {
    product_id: "8100021074-IB",
    product_name: "Ibacks Macbook Pro Case 13inch M1 2020 - Grey",
    product_price: 799000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic9202010300854-ib_-1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-macbook-pro-case-13inch-m1-2020-grey-ib",
  },
  {
    product_id: "8100005922-IB",
    product_name: "Monocozzi Macbook Air/Pro 13 Inch Posh Sleeve - Dusty Blue",
    product_price: 119800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/4/8/4895199101012_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-macbook-air-pro-13-inch-posh-sleeve-dusty-blue-ib",
  },
  {
    product_id: "8100005917-IB",
    product_name:
      "Monocozzi Leather Marble Sleeve For Macbook Pro With Usb-C iPad 12.9 - Black",
    product_price: 129800,
    brand: "Monocozzi",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic4895199101722_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/monocozzi-leather-marble-sleeve-for-macbook-pro-with-usb-c-ipad-12-9-black-ib",
  },
  {
    product_id: "8100024932-IB",
    product_name: "JBL Horizon - Black",
    product_price: 1380000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-horizon-black_1_4.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-horizon-black-ib",
  },
  {
    product_id: "8100004371-IB",
    product_name: "JBL Horizon - Black",
    product_price: 1380000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl-horizon-black_1_4_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-horizon-black-1-ib",
  },
  {
    product_id: "8100021075-IB",
    product_name: "Ibacks Macbook Air Case M1 2020 - Grey",
    product_price: 759000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic9202010300878-ib_-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-macbook-air-case-m1-2020-grey-ib",
  },
  {
    product_id: "8100004519-IB",
    product_name: "JBL T600 BT NC - White",
    product_price: 1140000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_tune_600btnc_white_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-t600-bt-nc-white-ib",
  },
  {
    product_id: "8100004391-IB",
    product_name: "JBL V310BT - Silver",
    product_price: 1600000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_everest_710_silver_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-v310t-silver-ib",
  },
  {
    product_id: "8100004538-IB",
    product_name: "JBL Charge 4 - Grey",
    product_price: 1800000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_charge_4_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/jbl-charge-4-grey-ib",
  },
  {
    product_id: "8100005391-IB",
    product_name: "Jabra Elite Active 65T - Copper Blue",
    product_price: 1990000,
    brand: "Jabra",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/a/jabra_elite_active_65t_copper_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/jabra-elite-active-65t-copper-blue-ib",
  },
  {
    product_id: "8100005621-IB",
    product_name: "PQI Connect 313 Type C 64GB - Gold",
    product_price: 1199000,
    brand: "PQI",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/q/pqi_connect_313_type_c_gold_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/pqi-connect-313-type-c-64gb-gold-ib",
  },
  {
    product_id: "8100023967-IB",
    product_name: "PQI Connect 313 Type C 128GB - Gold",
    product_price: 2899000,
    brand: "PQI",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/q/pqi_connect_313_type_c_gold_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/pqi-connect-313-type-c-128gb-gold-ib",
  },
  {
    product_id: "8100023966-IB",
    product_name: "PQI Connect 313 Type C 256GB - Gold",
    product_price: 2599000,
    brand: "PQI",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/q/pqi_connect_313_type_c_gold_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/pqi-connect-313-type-c-256gb-gold-ib",
  },
  {
    product_id: "8100021064-IB",
    product_name: "Itskins Spectrum Frost Airpods Pro Case - Smoke",
    product_price: 349000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_spectrum_frost_airpods_pro_case_smoke_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-spectrum-frost-airpods-pro-case-smoke-ib",
  },
  {
    product_id: "8100021040-IB",
    product_name: "Apple 40mm Black Unity Sport Band, Regular",
    product_price: 749000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_6_black_unity_sport_band_flat_screen_usen.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/40mm-black-unity-sport-band-regular",
  },
  {
    product_id: "8100021083-IB",
    product_name: "IT Multi Port 4 in 1 - Grey Black",
    product_price: 599000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it4_v2b.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-multi-port-4-in-1-grey-black-ib",
  },
  {
    product_id: "8100013339-IB",
    product_name: "Popsockets Backspin Aluminum 45 RPM - Black",
    product_price: 229000,
    brand: "Popsockets",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/o/popsockets_backspin_aluminum_45_rpm_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/popsockets-backspin-aluminum-45-rpm-black-ib",
  },
  {
    product_id: "8100015167-IB",
    product_name: "Lamina Tempered Glass for iPad Mini 7.9 Inch 5th Gen",
    product_price: 177000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina-tempered-glass-for-ipad_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-for-ipad-mini-7-9-inch-5th-gen-ib",
  },
  {
    product_id: "8100015146-IB",
    product_name: "Lamina Tempered Glass for iPad Pro 11 Inch 1st and 2nd Gen",
    product_price: 299000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina-tempered-glass-for-ipad_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-for-ipad-pro-11-inch-1st-and-2nd-gen-ib",
  },
  {
    product_id: "8100015161-IB",
    product_name:
      "Lamina Tempered Glass for iPad Pro 12.9 Inch 3rd and 4th Gen",
    product_price: 249000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina-tempered-glass-for-ipad_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-for-ipad-pro-12-9-inch-3rd-and-4th-gen-ib",
  },
  {
    product_id: "8100022960-IB",
    product_name: "AirPods Max, Space Gray",
    product_price: 8999000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airpods_max_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airpods-max",
  },
  {
    product_id: "8100022958-IB",
    product_name: "AirPods Max, Silver",
    product_price: 8999000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airpods_max_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airpods-max",
  },
  {
    product_id: "8100022959-IB",
    product_name: "AirPods Max, Sky Blue",
    product_price: 8999000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airpods_max_sky_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airpods-max",
  },
  {
    product_id: "8100024500-IB",
    product_name: "AirPods Max, Pink",
    product_price: 8999000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airpods_max_pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airpods-max",
  },
  {
    product_id: "8100022957-IB",
    product_name: "AirPods Max, Green",
    product_price: 8999000,
    brand: "",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airpods_max_green_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airpods-max",
  },
  {
    product_id: "8100021423-IB",
    product_name: "Feeltek Air UHD 4K HDMI Cable 3M - Black",
    product_price: 239200,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8436471007081_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-air-uhd-4k-hdmi-cable-3m-black-ib",
  },
  {
    product_id: "8100013236-IB",
    product_name: "STM Myth Sleeve for 13 - Black",
    product_price: 1279000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm_myth_sleeve_for_13_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-sleeve-for-13-black-ib",
  },
  {
    product_id: "8100013237-IB",
    product_name: "STM Myth Brief for 13 - Black",
    product_price: 1679000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm_myth_brief_for_13_black_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/stm-myth-brief-for-13-black-ib",
  },
  {
    product_id: "8100013238-IB",
    product_name: "STM Dapper Wrapper - Black",
    product_price: 499000,
    brand: "STM",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/t/stm_dapper_wrapper_black_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/stm-dapper-wrapper-black-ib",
  },
  {
    product_id: "8100009592-IB",
    product_name: "Microsoft Office Home and Student 2019",
    product_price: 1599000,
    brand: "Microsoft",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/m/hmj42_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/microsoft-office-home-and-student-2019-ib",
  },
  {
    product_id: "8100021410-IB",
    product_name: "Incase Compact Sleeve 13 - Hibiscus Red",
    product_price: 999000,
    brand: "Incase",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic810006542479-ib_1_.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/incase-compact-sleeve-13-hibiscus-red-ib",
  },
  {
    product_id: "8100012297-IB",
    product_name: "MagSafe Duo Charger",
    product_price: 2299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/h/mhxf3za.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magsafe-duo-charger-ib",
  },
  {
    product_id: "8100021471-IB",
    product_name: "IT Power Connector USB C to HDMI Cable 3M – Black",
    product_price: 274000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_power_connector_usb_c_to_hdmi_cable_3m-1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-pc-usb-c-to-hdmi-cable-3m-black-ib",
  },
  {
    product_id: "8100021454-IB",
    product_name: "Silicon Power xDrive Z50 64GB - Silver",
    product_price: 2099000,
    brand: "Silicon Power",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/sp064gblu3z50v1s-01_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/silicon-power-xdrive-z50-64gb-silver-ib",
  },
  {
    product_id: "8100021455-IB",
    product_name: "Silicon Power xDrive Z50 128GB - Silver",
    product_price: 2899000,
    brand: "Silicon Power",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/sp064gblu3z50v1s-01_2_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/silicon-power-xdrive-z50-128gb-silver-ib",
  },
  {
    product_id: "8100021456-IB",
    product_name: "Silicon Power USB-C C31 64GB - Black",
    product_price: 999000,
    brand: "Silicon Power",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/sp064gbuc3c31v1k-01_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/silicon-power-usb-c-c31-64gb-black-ib",
  },
  {
    product_id: "8100021457-IB",
    product_name: "Silicon Power USB-C C31 128GB - Black",
    product_price: 1549000,
    brand: "Silicon Power",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/sp128gbuc3c31v1k-01_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/silicon-power-usb-c-c31-128gb-black-ib",
  },
  {
    product_id: "8100022464-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 128GB, Space Grey",
    product_price: 13599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022404-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 128GB, Silver",
    product_price: 13599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022470-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 256GB, Space Grey",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_space_grey_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022469-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 256GB, Silver",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_silver_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022473-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 512GB, Space Grey",
    product_price: 19699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_space_grey_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022472-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 512GB, Silver",
    product_price: 19699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_silver_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022468-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 1TB, Space Grey",
    product_price: 26799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_space_grey_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022467-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 1TB, Silver",
    product_price: 26799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_silver_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022471-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 2TB, Space Grey",
    product_price: 33299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_space_grey_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022895-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi 2TB, Silver",
    product_price: 33299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_silver_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022475-IB",
    product_name:
      "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular 128GB, Space Grey",
    product_price: 16199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022474-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular 128GB, Silver",
    product_price: 16199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022479-IB",
    product_name:
      "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 256GB, Space Grey",
    product_price: 18199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_space_grey_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022477-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 256GB, Silver",
    product_price: 18199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_silver_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022484-IB",
    product_name:
      "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 512GB, Space Grey",
    product_price: 21699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_space_grey_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022483-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 512GB, Silver",
    product_price: 21699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_silver_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022476-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 1TB, Space Grey",
    product_price: 28799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_space_grey_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022896-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 1TB, Silver",
    product_price: 28799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_silver_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022481-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 2TB, Space Grey",
    product_price: 35299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_space_grey_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022899-IB",
    product_name: "iPad Pro (Gen 3) 11 inci, Wi-Fi + Cellular, 2TB, Silver",
    product_price: 35299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_11-inci_wi-fi_cellular_silver_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022488-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 128GB, Silver",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022434-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 256GB, Space Grey",
    product_price: 20699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_space_grey_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022433-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 256GB, Silver",
    product_price: 20699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_silver_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022437-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 512GB, Space Grey",
    product_price: 25199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_space_grey_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022436-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 512GB, Silver",
    product_price: 25199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_silver_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100028078-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 1TB, Space Grey",
    product_price: 31799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_space_grey_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022893-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 1TB, Silver",
    product_price: 31799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_silver_1_2_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022435-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 2TB, Space Grey",
    product_price: 38399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_space_grey_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022894-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 2TB, Silver",
    product_price: 38399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_silver_1_2_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022439-IB",
    product_name:
      "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 128GB, Space Grey",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022438-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 128GB, Silver",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022442-IB",
    product_name:
      "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 256GB, Space Grey",
    product_price: 23199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_space_grey_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022441-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 256GB, Silver",
    product_price: 23199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_silver_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022446-IB",
    product_name:
      "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 512GB, Space Grey",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_space_grey_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022445-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 512GB, Silver",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_silver_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022440-IB",
    product_name:
      "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 1TB, Space Grey",
    product_price: 34299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_space_grey_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022898-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 1TB, Silver",
    product_price: 34299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_silver_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022444-IB",
    product_name:
      "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 2TB, Space Grey",
    product_price: 41399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_space_grey_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100031234-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi + Cellular, 2TB, Silver",
    product_price: 41399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_cellular_silver_1_1_1_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100022491-IB",
    product_name: "iPad Pro (Gen 5) 12,9 inci, Wi-Fi, 128GB, Space Grey",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_ipad_pro_2021_12.9-inci_wi-fi_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-pro-generasi-ke-5",
  },
  {
    product_id: "8100021424-IB",
    product_name: "Feeltek Tera 4-Port Charger 100W - Black",
    product_price: 1699150,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_tera_4-port_charger_100w_black_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-tera-4-port-charger-100w-black-ib",
  },
  {
    product_id: "8100022965-IB",
    product_name:
      "Magic Keyboard for iPad Pro 11inci (Gen Ke 3) / iPad Air (Gen Ke 4), White",
    product_price: 6599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magic_keyboard_white_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/magic-keyboard-for-ipad-pro-11inci-gen-ke-3-ipad-air-gen-ke-4-white",
  },
  {
    product_id: "8100021414-IB",
    product_name: "Tucano Second Skin Sleeve 13 - Melange Blue",
    product_price: 699000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-second-skin-sleeve-13-melange-blue-ib",
  },
  {
    product_id: "8100021415-IB",
    product_name: "Tucano Second Skin Sleeve 13 - Melange Black",
    product_price: 699000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-second-skin-sleeve-13-melange-black-ib",
  },
  {
    product_id: "8100021494-IB",
    product_name: "Tucano Smilza Messenger Bag 13 - Blue",
    product_price: 849000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-smilza-messenger-bag-13-blue-ib",
  },
  {
    product_id: "8100008449-IB",
    product_name: "Tucano Smilza Messenger Bag 13 - Black",
    product_price: 849000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/productno_selection",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-smilza-messenger-bag-13-black-ib",
  },
  {
    product_id: "8100008947-IB",
    product_name: "Tucano Top Sleeve for Macbook Pro 13 Inch - Blue",
    product_price: 899000,
    brand: "Tucano",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/t/u/tucano_new_top_sleeve_13_blue_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/tucano-top-sleeve-for-macbook-pro-13-inch-blue-ib",
  },
  {
    product_id: "8100022938-IB",
    product_name: "Philips TWS TAT 5505 - Black",
    product_price: 1799000,
    brand: "Philips",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/h/philips_tws_tat_5505_black_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/philips-tws-tat-5505-black-ib",
  },
  {
    product_id: "8100024512-IB",
    product_name: "AirTag (1 Pack)",
    product_price: 449000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airtag-1-pack",
  },
  {
    product_id: "8100024511-IB",
    product_name: "AirTag (4 Pack)",
    product_price: 1499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airtag-4-pack",
  },
  {
    product_id: "8100022964-IB",
    product_name: "AirTag Loop, White",
    product_price: 499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_loop_white_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-loop",
  },
  {
    product_id: "8100024555-IB",
    product_name: "AirTag Loop, Sunflower",
    product_price: 499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_loop_sunflower_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-loop",
  },
  {
    product_id: "8100024554-IB",
    product_name: "AirTag Loop, Electric Orange",
    product_price: 499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_loop_electric_orange_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-loop",
  },
  {
    product_id: "8100022963-IB",
    product_name: "AirTag Loop, Deep Navy",
    product_price: 499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_loop_deep_navy_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-loop",
  },
  {
    product_id: "8100022955-IB",
    product_name: "AirTag Leather Loop, (PRODUCT)RED",
    product_price: 649000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_leather_loop_product_red_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airtag-leather-loop-product-red",
  },
  {
    product_id: "8100022956-IB",
    product_name: "AirTag Leather Loop, Saddle Brown",
    product_price: 649000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_leather_loop_saddle_brown_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-leather-loop",
  },
  {
    product_id: "8100022955-IB",
    product_name: "AirTag Leather Loop, (PRODUCT)RED",
    product_price: 649000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_leather_loop_product_red_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-leather-loop",
  },
  {
    product_id: "8100022952-IB",
    product_name: "AirTag Leather Key Ring, (PRODUCT)RED",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_leather_key_ring_product_red_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-leather-key-ring",
  },
  {
    product_id: "8100022953-IB",
    product_name: "AirTag Leather Key Ring, Baltic Blue",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_leather_key_ring_baltic_blue_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-leather-key-ring",
  },
  {
    product_id: "8100022954-IB",
    product_name: "AirTag Leather Key Ring, Saddle Brown",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_airtag_leather_key_ring_saddle_brown_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/airtag-leather-key-ring",
  },
  {
    product_id: "8100004888-IB",
    product_name:
      "Coach Protective Case for iPhone 11 - Dreamy Peony Clear/Pink/Glitter",
    product_price: 99000,
    brand: "Coach",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/o/coachib1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/coach-protective-case-for-iphone-11-dreamy-peony-clear-pink-glitter-ib",
  },
  {
    product_id: "8100004875-IB",
    product_name:
      "Kate Spade new york Protective Hardshell Case for iPhone 11 Pro Max - Spade Flower Pearl Foil/Crystal",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kateib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-max-spade-flower-pearl-foil-crystal-ib",
  },
  {
    product_id: "8100004867-IB",
    product_name:
      "Kate Spade new york Protective Hardshell Case for iPhone 11 Pro - Soft Touch Disco Dots Black/Gold",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/katespadeib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-soft-touch-disco-dots-black-gold-ib",
  },
  {
    product_id: "8100004864-IB",
    product_name:
      "Kate Spade New York Protective Hardshell Case for iPhone 11 Pro - Hollyhock Floral Clear/Cream with Stones",
    product_price: 99000,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_nyphc_for_iphone_11_pro_hollyhock_floral_clearcream_with_stones_ib.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-new-york-protective-hardshell-case-for-iphone-11-pro-hollyhock-floral-clearcream-with-stones-ib",
  },
  {
    product_id: "8100008625-IB",
    product_name: "UAG Apple iPhone 11 Pro Stealth- Olive Drab",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uagoliveib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/uag-apple-iphone-11-pro-stealth-olive-drab-ib",
  },
  {
    product_id: "8100008455-IB",
    product_name: "UAG iPhone 11 Plyo Ice",
    product_price: 99000,
    brand: "UAG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/u/a/uagplyoib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/uag-iphone-11-plyo-ice-ib",
  },
  {
    product_id: "8100007329-IB",
    product_name: "Spigen iPhone 11 Crystal Hybrid Crystal Clear",
    product_price: 99000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigencrib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-iphone-11-crystal-hybrid-clear-ib",
  },
  {
    product_id: "8100007719-IB",
    product_name: "Casemate iPhone 11 Pro Tough Speckled - White",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia846127185615-ib1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-tough-speckled-white-ib",
  },
  {
    product_id: "8100022170-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Silver",
    product_price: 24199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022165-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Green",
    product_price: 24199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_green_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022090-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Blue",
    product_price: 24199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022171-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 512GB SSD, Silver",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022161-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 512GB SSD, Green",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_green_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022093-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 512GB SSD, Blue",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022167-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Pink",
    product_price: 24199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100022168-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 512GB SSD, Pink",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100030422-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Yellow",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_yellow_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100030424-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Orange",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_orange_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100030423-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 8C GPU, 8GB RAM, 256GB SSD, Purple",
    product_price: 23999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_4_port_purple_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-empat-port-2021",
  },
  {
    product_id: "8100023984-IB",
    product_name: "Loops Laptop Sleeve 13 - Black",
    product_price: 339000,
    brand: "Loops",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/o/loops_laptop_sleeve_13_-_black1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/loops-laptop-sleeve-13-black-ib",
  },
  {
    product_id: "8100023985-IB",
    product_name: "Loops Laptop Bag 13 - Black",
    product_price: 399000,
    brand: "Loops",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ialo-02ba1301-bknew11_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/loops-laptop-bag-13-black-ib",
  },
  {
    product_id: "IA846127171885N-IB",
    product_name: "Casemate Sheer Glam iPhone 8 - Champagne",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_sheer_glam_iphone_8_champagne_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-sheer-glam-iphone-8-champagne-ib",
  },
  {
    product_id: "IA846127171892N-IB",
    product_name: "Casemate iPhone 8 Karat - Rose Gold",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_8_karat_rosegold_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-8-karat-rose-gold-ib",
  },
  {
    product_id: "8100013265-IB",
    product_name: "Casemate iPhone 8 Karat - Mother of Pearl",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_8_karat_mother_of_pearl_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-8-karat-mother-of-pearl-ib",
  },
  {
    product_id: "8100013266-IB",
    product_name: "Casemate iPhone 8 Karat Petals - Purple",
    product_price: 349000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_8_karat_petals_purple_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-8-karat-petals-purple-ib",
  },
  {
    product_id: "8100013347-IB",
    product_name: "Casemate iPhone 8 Brilliance Brooch - Multicolor",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_8_brilliance_brooch_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-8-brilliance-brooch-multicolor",
  },
  {
    product_id: "8100013426-IB",
    product_name: "Casemate iPhone 8 Luminescent Case - Clear",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_8_luminescent_case_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-8-luminescent-case-clear-ib",
  },
  {
    product_id: "8100007854-IB",
    product_name:
      "Casemate Airpods Case - Creaturepods - Chuck The Cool Guy Case - Green",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-airpods-case-creaturepods-chuck-the-cool-guy-case-green_1_3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-creaturepods-chuck-the-cool-guy-case-green-ib",
  },
  {
    product_id: "8100007855-IB",
    product_name:
      "Casemate Airpods Case - Creaturepods - Ozzy Dramatic Case - White/Black",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-airpods-case-creaturepods-ozzy-dramatic-case-whiteblack_1_4.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-creaturepods-ozzy-dramatic-case-white-black-ib",
  },
  {
    product_id: "8100007853-IB",
    product_name:
      "Casemate Airpods Case - Creaturepods - Spike Harmless Case - Black",
    product_price: 399000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-airpods-case-creaturepods-spike-harmless-case-black_1_3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-case-creaturepods-spike-harmless-case-black-ib",
  },
  {
    product_id: "8100007489-IB",
    product_name: "Spigen Airpods Pro - Military Green",
    product_price: 449000,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen_airpods_pro_case_tough_armor_-_military_green-1_2_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-airpods-pro-military-green-ib",
  },
  {
    product_id: "8100007070-IB",
    product_name: "Spigen Crystal Hybrid iPhone XR - Dark Crystal",
    product_price: 359200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/p/spigen-iphone-xr-crystal-hybrid-crystal-1_1_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-crystal-hybrid-iphone-xr-dark-crystal-ib",
  },
  {
    product_id: "8100007068-IB",
    product_name: "Spigen Slim Armor iPhone XR - Silver Satin",
    product_price: 359200,
    brand: "Spigen",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8809613768251_1_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/spigen-slim-armor-iphone-xr-silver-satin-ib",
  },
  {
    product_id: "IA846127185318N-IB",
    product_name: "Casemate Airpods Hook Ups Case + Neck Strap - Aqua Blue",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-aqua_blue_1_1_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-aqua-blue-ib-1",
  },
  {
    product_id: "8100013420-IB",
    product_name:
      "Casemate Airpods Hook Ups Case + Neck Strap - Lemon Lime Yellow",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-limon_lime_yellow_1_1_3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-lemon-lime-yellow-ib",
  },
  {
    product_id: "IA846127185332N-IB",
    product_name:
      "Casemate Airpods Hook Ups Case + Neck Strap - Lemon Lime Yellow",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-limon_lime_yellow_1_1_3_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-lemon-lime-yellow-ib-1",
  },
  {
    product_id: "8100007596-IB",
    product_name:
      "Casemate Airpods Hook Ups Case + Neck Strap - Sheer Crystal - Metallic Blush Pink",
    product_price: 299000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_hook_ups_case_neck_strap-sheer_crystal-metallic_blush_pink_1_3.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-hook-ups-case-neck-strap-sheer-crystal-metallic-blush-pink-ib",
  },
  {
    product_id: "8100007874-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Chuck The Cool Guy Case - Green",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_pro_creaturepods_chuck_the_cool_guy_case_green_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-chuck-the-cool-guy-case-green-ib",
  },
  {
    product_id: "8100007980-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Edge The Bad Boy Case - White/Red",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_pro_creaturepods_edge_the_bad_boy_case_-_white_red_2.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-edge-the-bad-boy-case-white-red-ib",
  },
  {
    product_id: "8100007875-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Ozzy Dramatic Case - White/Black",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_pro_creaturepods_ozzy_dramatic_case_white_black_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-ozzy-dramatic-case-white-black-ib",
  },
  {
    product_id: "8100007872-IB",
    product_name:
      "Casemate AirPods Pro CreaturePods Tricky Trickster Case - Blue",
    product_price: 429000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_pro_creaturepods_tricky_trickster_case_blue_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-creaturepods-tricky-trickster-case-blue-ib",
  },
  {
    product_id: "8100007870-IB",
    product_name: "Casemate AirPods Pro Hookups Sheer Crystal Blush",
    product_price: 329000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_pro_hookups_sheer_crystal_blush_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-hookups-sheer-crystal-blush-ib",
  },
  {
    product_id: "8100006435-IB",
    product_name: "Casemate AirPods Pro Hookups Sheer Crystal Clear",
    product_price: 329000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_airpods_pro_hookups_sheer_crystal_clearr_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-airpods-pro-hookups-sheer-crystal-clear-ib",
  },
  {
    product_id: "8100007734-IB",
    product_name: "Casemate iPhone 11 Pro Max Rifle Paper - Juliet Rose",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_rifle_paper_juliet_rose_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-rifle-paper-juliet-rose-ib",
  },
  {
    product_id: "8100007735-IB",
    product_name: "Casemate iPhone 11 Pro Max Rifle Paper - Wild Rose",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_rifle_paper_wild_rose_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-rifle-paper-wild-rose-ib",
  },
  {
    product_id: "8100007849-IB",
    product_name: "Casemate iPhone 11 Pro Max Tough - Camo",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_tough_camo_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-tough-camo-1-ib",
  },
  {
    product_id: "8100007730-IB",
    product_name: "Casemate Iphone 11 Pro Max Tough Groove - Iridescent",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_pro_max_tough_groove_-_iridescent_1_1_4.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-pro-max-tough-groove-iridescent-1-ib",
  },
  {
    product_id: "8100007848-IB",
    product_name: "Casemate iPhone 11 Tough - Camo",
    product_price: 149000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_11_tough_camo_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-11-tough-camo-1-ib",
  },
  {
    product_id: "8100007993-IB",
    product_name: "Casemate iPhone SE 2nd - Pelican Black",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_se_2nd_pelican_black_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-se-2nd-pelican-black-ib",
  },
  {
    product_id: "8100007992-IB",
    product_name: "Casemate iPhone SE 2nd - Soap Bubble",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_se_2nd_soap_bubble_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-se-2nd-soap-bubble-ib",
  },
  {
    product_id: "8100007991-IB",
    product_name: "Casemate iPhone SE 2nd - Groove Iridescent",
    product_price: 99000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_se_2nd_groove_iridescent_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-se-2nd-groove-iridescent-ib",
  },
  {
    product_id: "8100013432-IB",
    product_name: "Casemate iPhone XR Waterfall - Gold",
    product_price: 479000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xr--waterfall----gold_1_3_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-waterfall-gold-ib",
  },
  {
    product_id: "8100013433-IB",
    product_name: "Casemate iPhone XR Waterfall - Iridescent",
    product_price: 479000,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xr--waterfall----iridescent_1_3_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-waterfall-iridescent-ib",
  },
  {
    product_id: "8100013438-IB",
    product_name: "Casemate Tough iPhone XR - Iridescent",
    product_price: 383200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate-iphone-xr-tough-iridescent_1_3_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-xr-tough-iridescent-ib",
  },
  {
    product_id: "8100023306-IB",
    product_name: "MagSafe Battery Pack",
    product_price: 2199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/magsafe_battery_pack_pdp_image_position-1__en-us_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magsafe-battery-pack",
  },
  {
    product_id: "8100024445-IB",
    product_name: "IT Plug IT 20 Charger - White",
    product_price: 199000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it-20weu-white-1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/it-plug-it-20-charger-white-ib",
  },
  {
    product_id: "8100025175-IB",
    product_name: "MacBook Pro 15 Inci",
    product_price: 37799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/v/mv902ida-ib0.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-15-inci",
  },
  {
    product_id: "8100024552-IB",
    product_name: "Magic Keyboard",
    product_price: 1699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magic_keyboard_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magic-keyboard",
  },
  {
    product_id: "8100024551-IB",
    product_name: "Magic Keyboard with Touch ID and Numeric Keypad, Silver",
    product_price: 2999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/magic_keyboard_with_touch_id_and_numeric_keypad_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/magic-keyboard-with-touch-id-and-numeric-keypad-silver",
  },
  {
    product_id: "8100024550-IB",
    product_name: "Magic Trackpad, Silver",
    product_price: 2199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magic_trackpad_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magic-trackpad-silver",
  },
  {
    product_id: "8100024549-IB",
    product_name: "Magic Mouse, Silver",
    product_price: 1349000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magic_mouse_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magic-mouse-silver",
  },
  {
    product_id: "8100024553-IB",
    product_name: "Magic Keyboard with Touch ID",
    product_price: 2499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magic_keyboard_with_touch_id_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/magic-keyboard-with-touch-id",
  },
  {
    product_id: "8100029979-IB",
    product_name: "Prodigee iPhone 13 Pro Max Hero - Clear",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_max_hero_clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-max-hero-clear-ib",
  },
  {
    product_id: "8100029967-IB",
    product_name: "Prodigee iPhone 13 Pro Max Safetee - Black",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_max_safetee_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-max-safetee-black-ib",
  },
  {
    product_id: "8100029968-IB",
    product_name: "Prodigee iPhone 13 Pro Max Safetee - White",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_max_safetee_white_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-max-safetee-white-ib",
  },
  {
    product_id: "8100029974-IB",
    product_name: "Prodigee iPhone 13 Pro Max Magneteek - White",
    product_price: 999000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_max_magneteek_white_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-max-magneteek-white-ib",
  },
  {
    product_id: "8100029978-IB",
    product_name: "Prodigee iPhone 13 Pro Hero - Clear",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_hero_clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-hero-clear-ib",
  },
  {
    product_id: "8100029965-IB",
    product_name: "Prodigee iPhone 13 Pro MagSafe Night - Grey",
    product_price: 999000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_magsafe_night_gray_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-magsafe-night-grey-ib",
  },
  {
    product_id: "8100029970-IB",
    product_name: "Prodigee iPhone 13 Pro Safetee - Black",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_safetee_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-safetee-black-ib",
  },
  {
    product_id: "8100029969-IB",
    product_name: "Prodigee iPhone 13 Pro Safetee - White",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_safetee_white_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-safetee-white-ib",
  },
  {
    product_id: "8100029975-IB",
    product_name: "Prodigee iPhone 13 Pro Magneteek - Black",
    product_price: 999000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_magneteek_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-magneteek-black-ib",
  },
  {
    product_id: "8100029980-IB",
    product_name: "Prodigee iPhone 13 Pro Magneteek - White",
    product_price: 999000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_pro_magneteek_white_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-pro-magneteek-white-ib",
  },
  {
    product_id: "8100029981-IB",
    product_name: "Prodigee iPhone 13 Hero - Clear",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee-iphone-13-hero-clear_2.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/prodigee-iphone-13-hero-clear-ib",
  },
  {
    product_id: "8100029971-IB",
    product_name: "Prodigee iPhone 13 Safetee - Black",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee-iphone-13-safetee-black_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-safetee-black-ib",
  },
  {
    product_id: "8100029972-IB",
    product_name: "Prodigee iPhone 13 Safetee - White",
    product_price: 899000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee-iphone-13-safetee-white_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-safetee-white-ib",
  },
  {
    product_id: "8100029976-IB",
    product_name: "Prodigee iPhone 13 Magneteek - Black",
    product_price: 999000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_magneteek_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-magneteek-black-ib",
  },
  {
    product_id: "8100029977-IB",
    product_name: "Prodigee iPhone 13 Magneteek - White",
    product_price: 999000,
    brand: "Prodigee",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/p/r/prodigee_iphone_13_magneteek_white_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/prodigee-iphone-13-magneteek-white-ib",
  },
  {
    product_id: "8100029317-IB",
    product_name: "ibacks iPhone 13 Zaphire - Clear",
    product_price: 449100,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_zaphire_clear_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-zaphire-clear-ib",
  },
  {
    product_id: "8100029916-IB",
    product_name: "ibacks iPhone 13 Pro Zaphire - Clear",
    product_price: 503100,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_pro_zaphire_clear_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-pro-zaphire-clear-ib",
  },
  {
    product_id: "8100029318-IB",
    product_name: "ibacks iPhone 13 Pro Max Zaphire - Clear",
    product_price: 539100,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_pro_max_zaphire_clear_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-pro-max-zaphire-clear-ib",
  },
  {
    product_id: "8100029911-IB",
    product_name: "ibacks iPhone 13 Frostiva - Blue",
    product_price: 521100,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_frostiva_blue_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-frostiva-blue-ib",
  },
  {
    product_id: "8100029921-IB",
    product_name: "ibacks iPhone 13 Mini Lens Protect - Clear",
    product_price: 149000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_mini_lens_protect_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-mini-lens-protect-clear-ib",
  },
  {
    product_id: "8100029922-IB",
    product_name: "ibacks iPhone 13 Lens Protect - Clear",
    product_price: 149000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_lens_protect_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-lens-protect-clear-ib",
  },
  {
    product_id: "8100029923-IB",
    product_name: "ibacks iPhone 13 Pro Lens Protect - Clear",
    product_price: 149000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_pro_lens_protect_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-pro-lens-protect-clear-ib",
  },
  {
    product_id: "8100029924-IB",
    product_name: "ibacks iPhone 13 Pro Max Lens Protect - Clear",
    product_price: 149000,
    brand: "Ibacks",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibacks_iphone_13_pro_max_lens_protect_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibacks-iphone-13-pro-max-lens-protect-clear-ib",
  },
  {
    product_id: "8100029832-IB",
    product_name: "ElementCase MagSafe iPhone 13 Pro - Smoke",
    product_price: 818000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461120451_2_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-magsafe-iphone-13-pro-smoke-ib",
  },
  {
    product_id: "8100029833-IB",
    product_name: "ElementCase MagSafe  Phone 13 Pro Max - Smoke",
    product_price: 818000,
    brand: "Element Case",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8100461120451_2_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/elementcase-magsafe-phone-13-pro-max-smoke-ib",
  },
  {
    product_id: "8100029901-IB",
    product_name: "Gosh iPhone 13 Hybrid MagSafe - Clear",
    product_price: 676000,
    brand: "Gosh",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic88850077588311_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/gosh-iphone-13-hybrid-magsafe-clear-ib",
  },
  {
    product_id: "8100029902-IB",
    product_name: "Gosh iPhone 13 Pro Hybrid MagSafe - Clear",
    product_price: 676000,
    brand: "Gosh",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic88850077588481_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/gosh-iphone-13-pro-hybrid-magsafe-clear-ib",
  },
  {
    product_id: "8100029987-IB",
    product_name: "Adidas iPhone 13 Pro Max Protective - Clear",
    product_price: 717000,
    brand: "Adidas",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic87188460964471_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/adidas-iphone-13-pro-max-protective-clear-ib",
  },
  {
    product_id: "8100029667-IB",
    product_name: "Kajsa iPhone 13 Mini TPU - Clear",
    product_price: 475000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_mini_tpu-clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-mini-tpu-clear-ib",
  },
  {
    product_id: "8100029673-IB",
    product_name: "Kajsa iPhone 13 TPU - Clear",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_tpu-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-13-tpu-clear-ib",
  },
  {
    product_id: "8100029671-IB",
    product_name: "Kajsa iPhone 13 Pro TPU - Clear",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_pro_tpu-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-13-pro-tpu-clear-ib",
  },
  {
    product_id: "8100029675-IB",
    product_name: "Kajsa iPhone 13 Mini Acrylic - Clear",
    product_price: 499000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_mini_acrylic-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-mini-acrylic-clear-ib",
  },
  {
    product_id: "8100029718-IB",
    product_name: "Kajsa iPhone 13 Acrylic - Clear",
    product_price: 529000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_acrylic-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-13-acrylic-clear-ib",
  },
  {
    product_id: "8100029716-IB",
    product_name: "Kajsa iPhone 13 Pro Acrylic - Clear",
    product_price: 529000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_pro_acrylic-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-pro-acrylic-clear-ib",
  },
  {
    product_id: "8100029677-IB",
    product_name: "Kajsa iPhone 13 Pro Max Acrylic - Clear",
    product_price: 529000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_pro_max_acrylic-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-pro-max-acrylic-clear-ib",
  },
  {
    product_id: "8100029720-IB",
    product_name: "Kajsa iPhone 13 Mini Glass - Clear",
    product_price: 549000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_mini_glass-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-mini-glass-clear-ib",
  },
  {
    product_id: "8100029723-IB",
    product_name: "Kajsa iPhone 13 Glass - Clear",
    product_price: 579000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_glass-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/kajsa-iphone-13-glass-clear-ib",
  },
  {
    product_id: "8100029722-IB",
    product_name: "Kajsa iPhone 13 Pro Glass - Clear",
    product_price: 579000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_pro_glass-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-pro-glass-clear-ib",
  },
  {
    product_id: "8100029721-IB",
    product_name: "Kajsa iPhone 13 Pro Max Glass - Clear",
    product_price: 579000,
    brand: "Kajsa",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kajsa_iphone_13_pro_max_glass-clear_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/kajsa-iphone-13-pro-max-glass-clear-ib",
  },
  {
    product_id: "8100029650-IB",
    product_name: "Itskins iPhone 13 Pro Hybrid - Clear",
    product_price: 499000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_13_pro_hybrid_clear_1_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-13-pro-hybrid-clear-ib",
  },
  {
    product_id: "8100029652-IB",
    product_name: "Itskins iPhone 13 Spec Frost - Black",
    product_price: 499000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_13_spec_frost_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-13-spec-frost-black-ib",
  },
  {
    product_id: "8100029656-IB",
    product_name: "Itskins iPhone 13 Pro Spec Frost - Black",
    product_price: 499000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_13_pro_spec_frost_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-13-pro-spec-frost-black-ib",
  },
  {
    product_id: "8100029664-IB",
    product_name: "Itskins iPhone 13 Pro Max Spec Frost - Black",
    product_price: 499000,
    brand: "Itskins",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/itskins_iphone_13_pro_max_spec_frost_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/itskins-iphone-13-pro-max-spec-frost-black-ib",
  },
  {
    product_id: "8100029898-IB",
    product_name: "LifeProof iPhone 13 - Black Crystal",
    product_price: 848000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042879271_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-13-black-crystal-ib",
  },
  {
    product_id: "8100029897-IB",
    product_name: "LifeProof iPhone 13 Pro - Black Crystal",
    product_price: 848000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042878971_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-13-pro-black-crystal-ib",
  },
  {
    product_id: "8100029900-IB",
    product_name: "LifeProof iPhone 13 Pro Max - Black Crystal",
    product_price: 848000,
    brand: "LifeProof",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042885111_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lifeproof-iphone-13-pro-max-black-crystal-ib",
  },
  {
    product_id: "8100029882-IB",
    product_name: "OtterBox Symmetry iPhone 13 - Clear",
    product_price: 868000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042844451_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-iphone-13-clear-ib",
  },
  {
    product_id: "8100029896-IB",
    product_name: "OtterBox Symmetry Plus iPhone 13 - Clear",
    product_price: 1080000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042878661_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-plus-iphone-13-clear-ib",
  },
  {
    product_id: "8100029854-IB",
    product_name: "OtterBox Commuter iPhone 13 Pro - Black",
    product_price: 656000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042646831_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-commuter-iphone-13-pro-black-ib",
  },
  {
    product_id: "8100029858-IB",
    product_name: "OtterBox Symmetry iPhone 13 Pro - Black",
    product_price: 868000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042650001_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-iphone-13-pro-black-ib",
  },
  {
    product_id: "8100029860-IB",
    product_name: "OtterBox Symmetry iPhone 13 Pro - Clear",
    product_price: 868000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042652461_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-iphone-13-pro-clear-ib",
  },
  {
    product_id: "8100029876-IB",
    product_name: "OtterBox Symmetry+ iPhone 13 Pro - Clear",
    product_price: 1080000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042667861_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-plus-iphone-13-pro-clear-ib",
  },
  {
    product_id: "8100029893-IB",
    product_name: "OtterBox React iPhone 13 Pro - Black",
    product_price: 545000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042873541_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-react-iphone-13-pro-black-ib",
  },
  {
    product_id: "8100029859-IB",
    product_name: "OtterBox Symmetry iPhone 13 Pro Max - Black",
    product_price: 868000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042651611_1_1.jpeg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-iphone-13-pro-max-black-ib",
  },
  {
    product_id: "8100029863-IB",
    product_name: "OtterBox Symmetry iPhone 13 Pro Max - Clear",
    product_price: 868000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042654371_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-symmetry-iphone-13-pro-max-clear-ib",
  },
  {
    product_id: "8100029895-IB",
    product_name: "OtterBox React iPhone 13 Pro Max - Black",
    product_price: 545000,
    brand: "OtterBox",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic8401042873921_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/otterbox-react-iphone-13-pro-max-black-ib",
  },
  {
    product_id: "8100031172-IB",
    product_name: "Feeltek Lightning to USB A/C 150cm - Black",
    product_price: 369000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8436471010401_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-lightning-to-usb-a-c-150cm-black-ib",
  },
  {
    product_id: "8100030927-IB",
    product_name: "Feeltek Neptune 4in1 Charging Stand - Black",
    product_price: 1199000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8436471009751_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-neptune-4in1-charging-stand-black-ib",
  },
  {
    product_id: "8100031009-IB",
    product_name: "Feeltek W.less Charging Night Light - White",
    product_price: 599000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia8436471010571_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-w-less-charging-night-light-white-ib",
  },
  {
    product_id: "8100030348-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi 64GB, Space Grey",
    product_price: 6099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk2k3paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030349-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi 64GB, Silver",
    product_price: 6099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk2l3paa0_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030350-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi 256GB, Space Grey",
    product_price: 9099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk2k3paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030351-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi 256GB, Silver",
    product_price: 9099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk2l3paa0_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030547-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi + Cellular 64GB, Space Grey",
    product_price: 9099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk473paa_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030352-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi + Cellular 64GB, Silver",
    product_price: 9099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk493paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030548-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 11599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk473paa_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030353-IB",
    product_name: "iPad (Gen 9) 10,2 inci, Wi-Fi + Cellular 256GB, Silver",
    product_price: 11599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk493paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-ipad-generasi-ke-9-ibox",
  },
  {
    product_id: "8100030354-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 64GB, Space Grey",
    product_price: 9599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk7m3paa0_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030355-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 64GB, Starlight",
    product_price: 9599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk7p3paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030356-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 64GB, Purple",
    product_price: 9599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk7r3paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030360-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 64GB, Pink",
    product_price: 9599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/l/mlwl3paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030357-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 256GB, Space Grey",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk7m3paa0_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030358-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 256GB, Starlight",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk7p3paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030359-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 256GB, Purple",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk7r3paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030361-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi 256GB, Pink",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/l/mlwl3paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030549-IB",
    product_name:
      "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 64GB, Space Grey",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk893paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030550-IB",
    product_name:
      "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 64GB, Starlight",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk8c3paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030551-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 64GB, Purple",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk8e3paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030362-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 64GB, Pink",
    product_price: 12599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/l/mlx43paa0_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030552-IB",
    product_name:
      "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk893paa0_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030553-IB",
    product_name:
      "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 256GB, Starlight",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk8c3paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030562-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 256GB, Purple",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/k/mk8e3paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030554-IB",
    product_name: "iPad mini (Gen 6) 8,3 inci, Wi-Fi + Cellular 256GB, Pink",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/l/mlx43paa0_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-ipad-mini-generasi-ke-6-ibox",
  },
  {
    product_id: "8100030885-IB",
    product_name: "Kate Spade iPhone 13 Magsafe Falling Pop - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_magsafe_falling_pop_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-magsafe-falling-pop-clear-ib",
  },
  {
    product_id: "8100030909-IB",
    product_name: "Kate Spade iPhone 13 Pin Dot Ombre - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_pin_dot_ombre_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-pin-dot-ombre-clear-ib",
  },
  {
    product_id: "8100030908-IB",
    product_name: "Kate Spade iPhone 13 Magsafe Daisy - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_magsafe_daisy_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-magsafe-daisy-clear-ib",
  },
  {
    product_id: "8100030910-IB",
    product_name: "Kate Spade iPhone 13 Pro Magsafe Daisy - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_pro_magsafe_daisy_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-pro-magsafe-daisy-clear-ib",
  },
  {
    product_id: "8100030887-IB",
    product_name: "Kate Spade iPhone 13 Pro Max Magsafe Holly - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_pro_max_magsafe_holly_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-pro-max-magsafe-holly-clear-ib",
  },
  {
    product_id: "8100030888-IB",
    product_name: "Kate Spade iPhone 13 Pro Max Magsafe Ombre - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_pro_max_magsafe_ombre_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-pro-max-magsafe-ombre-clear-ib",
  },
  {
    product_id: "8100030889-IB",
    product_name: "Kate Spade iPhone 13 Pro Max Park Strip - Clear",
    product_price: 629100,
    brand: "Kate Spade",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/k/a/kate_spade_iphone_13_pro_max_park_strip_clear_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/kate-spade-iphone-13-pro-max-park-strip-clear-ib",
  },
  {
    product_id: "8100030434-IB",
    product_name: "iPhone 13 128GB, Midnight",
    product_price: 15199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_midnight_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030437-IB",
    product_name: "iPhone 13 128GB, Starlight",
    product_price: 15199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_starlight_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030435-IB",
    product_name: "iPhone 13 128GB, Pink",
    product_price: 15199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030436-IB",
    product_name: "iPhone 13 128GB, (PRODUCT) RED",
    product_price: 15199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_product_red_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030433-IB",
    product_name: "iPhone 13 128GB, Blue",
    product_price: 15199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030439-IB",
    product_name: "iPhone 13 256GB, Midnight",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_midnight_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030442-IB",
    product_name: "iPhone 13 256GB, Starlight",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_starlight_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030440-IB",
    product_name: "iPhone 13 256GB, Pink",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030441-IB",
    product_name: "iPhone 13 256GB, (PRODUCT) RED",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_product_red_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030438-IB",
    product_name: "iPhone 13 256GB, Blue",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030444-IB",
    product_name: "iPhone 13 512GB, Midnight",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_midnight_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030447-IB",
    product_name: "iPhone 13 512GB, Starlight",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_starlight_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030445-IB",
    product_name: "iPhone 13 512GB, Pink",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pink_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030446-IB",
    product_name: "iPhone 13 512GB, (PRODUCT) RED",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_product_red_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030443-IB",
    product_name: "iPhone 13 512GB, Blue",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100048782-IB",
    product_name: "iPhone 13 512GB, Green",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_green_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100048781-IB",
    product_name: "iPhone 13 256GB, Green",
    product_price: 17699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_green_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100048780-IB",
    product_name: "iPhone 13 128GB, Green",
    product_price: 15199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_green_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-ibox",
  },
  {
    product_id: "8100030464-IB",
    product_name: "iPhone 13 mini 256GB, Midnight",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_midnight_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030467-IB",
    product_name: "iPhone 13 mini 256GB, Starlight",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_starlight_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030465-IB",
    product_name: "iPhone 13 mini 256GB, Pink",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030466-IB",
    product_name: "iPhone 13 mini 256GB, (PRODUCT) RED",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_product_red_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030463-IB",
    product_name: "iPhone 13 mini 256GB, Blue",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030469-IB",
    product_name: "iPhone 13 mini 512GB, Midnight",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_midnight_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030472-IB",
    product_name: "iPhone 13 mini 512GB, Starlight",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_starlight_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030470-IB",
    product_name: "iPhone 13 mini 512GB, Pink",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_pink_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030471-IB",
    product_name: "iPhone 13 mini 512GB, (PRODUCT) RED",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_product_red_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030468-IB",
    product_name: "iPhone 13 mini 512GB, Blue",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030454-IB",
    product_name: "iPhone 13 mini 128GB, Midnight",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_midnight_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030457-IB",
    product_name: "iPhone 13 mini 128GB, Starlight",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_starlight_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030455-IB",
    product_name: "iPhone 13 mini 128GB, Pink",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030456-IB",
    product_name: "iPhone 13 mini 128GB, (PRODUCT) RED",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_product_red_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030453-IB",
    product_name: "iPhone 13 mini 128GB, Blue",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100048785-IB",
    product_name: "iPhone 13 mini 512GB, Green",
    product_price: 19199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_green_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100048784-IB",
    product_name: "iPhone 13 mini 256GB, Green",
    product_price: 15699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_green_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100048783-IB",
    product_name: "iPhone 13 mini 128GB, Green",
    product_price: 13199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_green_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-mini-ibox",
  },
  {
    product_id: "8100030474-IB",
    product_name: "iPhone 13 Pro 128GB, Graphite",
    product_price: 18699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030476-IB",
    product_name: "iPhone 13 Pro 128GB, Silver",
    product_price: 18699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030473-IB",
    product_name: "iPhone 13 Pro 128GB, Gold",
    product_price: 18699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030475-IB",
    product_name: "iPhone 13 Pro 128GB, Sierra Blue",
    product_price: 18699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030485-IB",
    product_name: "iPhone 13 Pro 256GB, Graphite",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030487-IB",
    product_name: "iPhone 13 Pro 256GB, Silver",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030513-IB",
    product_name: "iPhone 13 Pro 256GB, Gold",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030486-IB",
    product_name: "iPhone 13 Pro 256GB, Sierra Blue",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030489-IB",
    product_name: "iPhone 13 Pro 512GB, Graphite",
    product_price: 25299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030491-IB",
    product_name: "iPhone 13 Pro 512GB, Silver",
    product_price: 25299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030488-IB",
    product_name: "iPhone 13 Pro 512GB, Gold",
    product_price: 25299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030490-IB",
    product_name: "iPhone 13 Pro 512GB, Sierra Blue",
    product_price: 25299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030482-IB",
    product_name: "iPhone 13 Pro 1TB, Graphite",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030484-IB",
    product_name: "iPhone 13 Pro 1TB, Silver",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030481-IB",
    product_name: "iPhone 13 Pro 1TB, Gold",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030483-IB",
    product_name: "iPhone 13 Pro 1TB, Sierra Blue",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100048789-IB",
    product_name: "iPhone 13 Pro 1TB, Alpine Green",
    product_price: 29299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_alpine_green_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100048788-IB",
    product_name: "iPhone 13 Pro 512GB, Alpine Green",
    product_price: 25299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_alpine_green_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100048787-IB",
    product_name: "iPhone 13 Pro 256GB, Alpine Green",
    product_price: 21199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_alpine_green_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100048786-IB",
    product_name: "iPhone 13 Pro 128GB, Alpine Green",
    product_price: 18699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_alpine_green_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-ibox",
  },
  {
    product_id: "8100030493-IB",
    product_name: "iPhone 13 Pro Max 128GB, Graphite",
    product_price: 20199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030495-IB",
    product_name: "iPhone 13 Pro Max 128GB, Silver",
    product_price: 20199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030492-IB",
    product_name: "iPhone 13 Pro Max 128GB, Gold",
    product_price: 20199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030494-IB",
    product_name: "iPhone 13 Pro Max 128GB, Sierra Blue",
    product_price: 20199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030501-IB",
    product_name: "iPhone 13 Pro Max 256GB, Graphite",
    product_price: 23299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030503-IB",
    product_name: "iPhone 13 Pro Max 256GB, Silver",
    product_price: 23299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030500-IB",
    product_name: "iPhone 13 Pro Max 256GB, Gold",
    product_price: 23299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030502-IB",
    product_name: "iPhone 13 Pro Max 256GB, Sierra Blue",
    product_price: 23299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030505-IB",
    product_name: "iPhone 13 Pro Max 512GB, Graphite",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030507-IB",
    product_name: "iPhone 13 Pro Max 512GB, Silver",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030504-IB",
    product_name: "iPhone 13 Pro Max 512GB, Gold",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030506-IB",
    product_name: "iPhone 13 Pro Max 512GB, Sierra Blue",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030497-IB",
    product_name: "iPhone 13 Pro Max 1TB, Graphite",
    product_price: 31299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_graphite_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030499-IB",
    product_name: "iPhone 13 Pro Max 1TB, Silver",
    product_price: 31299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_silver_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030496-IB",
    product_name: "iPhone 13 Pro Max 1TB, Gold",
    product_price: 31299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_gold_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100030498-IB",
    product_name: "iPhone 13 Pro Max 1TB, Sierra Blue",
    product_price: 31299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_sierra_blue_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100048790-IB",
    product_name: "iPhone 13 Pro Max 128GB, Alpine Green",
    product_price: 20199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_1_4.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100048791-IB",
    product_name: "iPhone 13 Pro Max 256GB, Alpine Green",
    product_price: 23299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100048792-IB",
    product_name: "iPhone 13 Pro Max 512GB, Alpine Green",
    product_price: 27299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100048793-IB",
    product_name: "iPhone 13 Pro Max 1TB, Alpine Green",
    product_price: 31299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-13-pro-max-ibox",
  },
  {
    product_id: "8100006444-IB",
    product_name: "Casemate iPhone 12 mini - Soap Bubble",
    product_price: 399200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_-_soap_bubble1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-soap-bubble-ib",
  },
  {
    product_id: "8100006445-IB",
    product_name: "Casemate iPhone 12 mini - Tough Groove",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_-_tough_groove1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-tough-groove-ib",
  },
  {
    product_id: "8100006455-IB",
    product_name: "Casemate iPhone 12 mini - Eco 94 Barely There",
    product_price: 319200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_-_eco_94_barely_there2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-eco-94-barely-there-ib",
  },
  {
    product_id: "8100006446-IB",
    product_name: "Casemate iPhone 12 Mini Twinkle Ombre - Twinkle Stardust",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_twinkle_ombre_-_twinkle_stardust2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-twinkle-stardust-ib",
  },
  {
    product_id: "8100006450-IB",
    product_name: "Casemate iPhone 12 Mini Twinkle Ombre - Twinkle Confetti",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_twinkle_ombre_-_twinkle_confetti1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-twinkle-confetti-ib",
  },
  {
    product_id: "8100006447-IB",
    product_name: "Casemate iPhone 12 mini - Rifle Paper Flower",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_-_rifle_paper_flower.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-rifle-paper-flower-ib",
  },
  {
    product_id: "8100006456-IB",
    product_name: "Casemate iPhone 12 Mini Rifle Paper Co - Rifle Paper Embell",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_mini_rifle_paper_co_-_rifle_paper_embell1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-mini-rifle-paper-embell-ib",
  },
  {
    product_id: "8100006440-IB",
    product_name: "Casemate iPhone 12/12 Pro - Soap Bubble",
    product_price: 399200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12-12_pro_-_soap_bubble1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-12-pro-soap-bubble-ib",
  },
  {
    product_id: "8100006441-IB",
    product_name: "Casemate iPhone 12/12 Pro - Tough Groove",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12-12_pro_-_tough_groove2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-12-pro-tough-groove-ib",
  },
  {
    product_id: "8100006442-IB",
    product_name: "Casemate iPhone 12/12 Pro - Twinkle Stardust",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12-12_pro_-_twinkle_stardust1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-12-pro-twinkle-stardust-ib",
  },
  {
    product_id: "8100006449-IB",
    product_name: "Casemate iPhone 12/12 Pro Twinkle Ombre - Twinkle Confetti",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12-12_pro_twinkle_ombre_-_twinkle_confetti1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-12-pro-twinkle-confetti-ib",
  },
  {
    product_id: "8100006443-IB",
    product_name: "Casemate iPhone 12/12 Pro - Rifle Paper Flower",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12-12_pro_-_rifle_paper_flower.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-12-pro-rifle-paper-flower-ib",
  },
  {
    product_id: "8100006454-IB",
    product_name: "Casemate iPhone 12/12 Pro - Rifle Paper Embell",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12-12_pro_-_rifle_paper_embell.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-12-pro-rifle-paper-embell-ib",
  },
  {
    product_id: "8100006436-IB",
    product_name: "Casemate iPhone 12 Pro Max - Soap Bubble",
    product_price: 399200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_soap_bubble.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-soap-bubble-ib",
  },
  {
    product_id: "8100006437-IB",
    product_name: "Casemate iPhone 12 Pro Max - Tough Groove",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_tough_groove.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-tough-groove-ib",
  },
  {
    product_id: "8100006451-IB",
    product_name: "Casemate iPhone 12 Pro Max - Barely Clear",
    product_price: 319200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_barely_clear.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-barely-clear-ib",
  },
  {
    product_id: "8100006452-IB",
    product_name: "Casemate iPhone 12 Pro Max - Eco 94 Barely There",
    product_price: 319200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_eco_94_barely_there.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-eco-94-barely-there-ib",
  },
  {
    product_id: "8100006438-IB",
    product_name: "Casemate iPhone 12 Pro Max Twinkle Ombre - Twinkle Stardust",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_twinkle_ombre_-_twinkle_stardust.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-twinkle-stardust-ib",
  },
  {
    product_id: "8100006448-IB",
    product_name: "Casemate iPhone 12 Pro Max - Twinkle Confetti",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_twinkle_confetti.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-twinkle-confetti-ib",
  },
  {
    product_id: "8100006439-IB",
    product_name: "Casemate iPhone 12 Pro Max - Rifle Paper Flower",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_rifle_paper_flower.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-rifle-paper-flower-ib",
  },
  {
    product_id: "8100006453-IB",
    product_name: "Casemate iPhone 12 Pro Max - Rifle Paper Embell",
    product_price: 479200,
    brand: "Casemate",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/c/a/casemate_iphone_12_pro_max_-_rifle_paper_embell.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/casemate-iphone-12-pro-max-rifle-paper-embell-ib",
  },
  {
    product_id: "8100029332-IB",
    product_name: "Lamina Tempered Glass iPhone 13 Mini",
    product_price: 299000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_tempered_glass_iphone_13_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-13-mini-ib",
  },
  {
    product_id: "8100029329-IB",
    product_name: "Lamina Tempered Glass iPhone 13 Pro Max + Applicator",
    product_price: 329000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_tempered_glass_iphone_13_1_11.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-13-pro-max-applicator-ib",
  },
  {
    product_id: "8100029328-IB",
    product_name: "Lamina Tempered Glass iPhone 13/ 13 Pro + Applicator",
    product_price: 329000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_tempered_glass_iphone_13_1_14.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-13-13-pro-applicator-ib",
  },
  {
    product_id: "8100029333-IB",
    product_name: "Lamina Tempered Glass for iPad mini 8.3Inch (6th gen)",
    product_price: 299000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_tempered_glass_for_ipad_mini_8.3inch_6th_gen__2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-for-ipad-mini-8-3inch-6th-gen-ib",
  },
  {
    product_id: "8100031445-IB",
    product_name: "Feetlek Elec PD 30W Charger - White",
    product_price: 329000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia84364710088311_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feetlek-elec-pd-30w-charger-white-ib",
  },
  {
    product_id: "8100029815-IB",
    product_name: "iPhone 13 Pro Max Clear Case with MagSafe",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_clear_case_with_magsafe1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-clear-case-with-magsafe-ib",
  },
  {
    product_id: "8100029813-IB",
    product_name: "iPhone 13 Clear Case with MagSafe",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_clear_case_with_magsafe_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-clear-case-with-magsafe-ib",
  },
  {
    product_id: "8100029812-IB",
    product_name: "iPhone 13 mini Clear Case with MagSafe",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_clear_case_with_magsafe_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-mini-clear-case-with-magsafe-ib",
  },
  {
    product_id: "8100029814-IB",
    product_name: "iPhone 13 Pro Clear Case with MagSafe",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_pro_clear_case_with_magsafe_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-clear-case-with-magsafe-ib",
  },
  {
    product_id: "8100029804-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Marigold",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_marigold1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-marigold-ib",
  },
  {
    product_id: "8100029811-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, (PRODUCT) RED",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_product_red1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-product-red-ib",
  },
  {
    product_id: "8100029808-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Chalk Pink",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_chalk_pink1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-chalk-pink-ib",
  },
  {
    product_id: "8100029810-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Midnight",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_midnight1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-midnight-ib",
  },
  {
    product_id: "8100029751-IB",
    product_name: "iPhone 13 Leather Case with MagSafe, Dark Cherry",
    product_price: 1399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_leather_case_with_magsafe_dark_cherry_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-leather-case-with-magsafe-ib",
  },
  {
    product_id: "8100029750-IB",
    product_name: "iPhone 13 Leather Case with MagSafe, Golden Brown",
    product_price: 1399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_leather_case_with_magsafe_golden_brown_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-leather-case-with-magsafe-ib",
  },
  {
    product_id: "8100029754-IB",
    product_name: "iPhone 13 Leather Case with MagSafe, Midnight",
    product_price: 1399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_leather_case_with_magsafe_midnight_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-leather-case-with-magsafe-ib",
  },
  {
    product_id: "8100029753-IB",
    product_name: "iPhone 13 Leather Case with MagSafe, Sequoia Green",
    product_price: 1399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_leather_case_with_magsafe_sequoia_green_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-leather-case-with-magsafe-ib",
  },
  {
    product_id: "8100029752-IB",
    product_name: "iPhone 13 Leather Case with MagSafe, Wisteria",
    product_price: 1399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_leather_case_with_magsafe_wisteria_1_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-leather-case-with-magsafe-ib",
  },
  {
    product_id: "8100029809-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Abyss Blue",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_abyss_blue1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-abyss-blue-ib",
  },
  {
    product_id: "8100029806-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Clover",
    product_price: 1099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_clover1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-clover-ib",
  },
  {
    product_id: "8100029805-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Pink Pomelo",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_pink_pomelo1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-pink-pomelo-ib",
  },
  {
    product_id: "8100029807-IB",
    product_name: "iPhone 13 Pro Max Silicone Case with MagSafe, Blue Jay",
    product_price: 1099000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_13_pro_max_silicone_case_with_magsafe_-_blue_jay1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-pro-max-silicone-case-with-magsafe-blue-jay-ib",
  },
  {
    product_id: "8100029708-IB",
    product_name: "iPhone 13 mini Leather Case with MagSafe, Dark Cherry",
    product_price: 1299000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_mini_leather_case_with_magsafe_dark_cherry_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/iphone-13-mini-leather-case-with-magsafe-dark-cherry-ib",
  },
  {
    product_id: "8100029331-IB",
    product_name: "Lamina Tempered Glass iPhone 13/ 13 Pro",
    product_price: 329000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_tempered_glass_iphone_13_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-13-13-pro-ib",
  },
  {
    product_id: "8100029330-IB",
    product_name: "Lamina Tempered Glass iPhone 13 Pro Max",
    product_price: 329000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_tempered_glass_iphone_13_1_8.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-tempered-glass-iphone-13-pro-max-ib",
  },
  {
    product_id: "8200000013-IB",
    product_name: "ShiftCam 5-in-1 Travel Set iPhone 11 Pro Max",
    product_price: 439000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_5-in-1_travel_set_iphone_11_pro_max_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-5-in-1-travel-set-iphone-11-pro-max-ib",
  },
  {
    product_id: "8200000002-IB",
    product_name: "ShiftCam 6-in-1 Travel Set for iPhone X",
    product_price: 350000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_6-in-1_travel_set_for_iphone_x_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-6-in-1-travel-set-for-iphone-x-ib",
  },
  {
    product_id: "8200000003-IB",
    product_name: "ShiftCam 6-in-1 Travel Set for iPhone Xs",
    product_price: 350000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_6-in-1_travel_set_for_iphone_xs_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-6-in-1-travel-set-for-iphone-xs-ib",
  },
  {
    product_id: "8200000014-IB",
    product_name: "ShiftCam Cleaning Kit All ProLens and Aspherical Lens",
    product_price: 69000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_cleaning_kit_all_prolens_and_aspherical_lens.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-cleaning-kit-all-prolens-aspherical-lens-ib",
  },
  {
    product_id: "8200000006-IB",
    product_name: "ShiftCam Premium Bag All ProLens and Aspherical Lens",
    product_price: 200000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/a/ia0604015644718_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-premium-bag-all-prolens-aspherical-lens-1-ib",
  },
  {
    product_id: "8200000010-IB",
    product_name: "ShiftCam Lens 12mm Ultra Wide",
    product_price: 729000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_lens_12mm_ultra_wide_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/shiftcam-lens-12mm-ultra-wide-ib",
  },
  {
    product_id: "8200000018-IB",
    product_name: "ShiftCam ProLens 75mm Macro",
    product_price: 559000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_prolens_75mm_macro_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/shiftcam-prolens-75mm-macro-ib",
  },
  {
    product_id: "8200000019-IB",
    product_name: "ShiftCam ProLens 230° Fisheye",
    product_price: 559000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_prolens_230_fisheye_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/shiftcam-prolens-230-fisheye-ib",
  },
  {
    product_id: "8200000017-IB",
    product_name: "ShiftCam ProLens 60mm Telephoto",
    product_price: 449000,
    brand: "ShiftCam",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/s/h/shiftcam_prolens_60mm_telephoto_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/shiftcam-prolens-60mm-telephoto-ib",
  },
  {
    product_id: "8100029632-IB",
    product_name:
      "Apple Watch Series 7 45mm GPS, (PRODUCT)RED, (PRODUCT)RED Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_product_red_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029631-IB",
    product_name: "Apple Watch Series 7 45mm GPS, Blue, Abyss Blue Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_blue_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029630-IB",
    product_name: "Apple Watch Series 7 45mm GPS, Green, Clover Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_green_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029629-IB",
    product_name:
      "Apple Watch Series 7 45mm GPS, Starlight, Starlight Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_starlight_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029628-IB",
    product_name:
      "Apple Watch Series 7 45mm GPS, Midnight, Midnight Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_midnight_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029625-IB",
    product_name:
      "Apple Watch Series 7 41mm GPS, (PRODUCT)RED, (PRODUCT)RED Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_product_red_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029624-IB",
    product_name: "Apple Watch Series 7 41mm GPS, Blue, Abyss Blue Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_blue_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029623-IB",
    product_name: "Apple Watch Series 7 41mm GPS, Green, Clover Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_green_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029622-IB",
    product_name:
      "Apple Watch Series 7 41mm GPS, Starlight, Starlight Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_starlight_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029621-IB",
    product_name:
      "Apple Watch Series 7 41mm GPS, Midnight, Midnight Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_midnight_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/ibox-watch-apple-watch-series-7-ib",
  },
  {
    product_id: "8100029634-IB",
    product_name:
      "Apple Watch Nike Series 7 45mm GPS, Midnight, Anthracite/Black Nike Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_midnight_nike_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-7-ib",
  },
  {
    product_id: "8100029633-IB",
    product_name:
      "Apple Watch Nike Series 7 45mm GPS, Starlight, Pure Platinum/Black Nike Sport Band",
    product_price: 8499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_45mm_starlight_nike_sport_band_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-7-ib",
  },
  {
    product_id: "8100029627-IB",
    product_name:
      "Apple Watch Nike Series 7 41mm GPS, Midnight, Anthracite/Black Nike Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_midnight_nike_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-7-ib",
  },
  {
    product_id: "8100029626-IB",
    product_name:
      "Apple Watch Nike Series 7 41mm GPS, Starlight, Pure Platinum/Black Nike Sport Band",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_starlight_nike_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-nike-series-7-ib",
  },
  {
    product_id: "8100031057-IB",
    product_name: "Apple Watch SE 40mm GPS, Silver, Abyss Blue Sport Band",
    product_price: 5499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_se_40mm_silver_abyss_blue_sport_band_1_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-se-2-ib",
  },
  {
    product_id: "8100031058-IB",
    product_name: "Apple Watch SE 40mm GPS, Gold, Starlight Sport Band",
    product_price: 5499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_se_40mm_gold_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-se-2-ib",
  },
  {
    product_id: "8100031059-IB",
    product_name: "Apple Watch SE 40mm GPS, Space Grey, Midnight Sport Band",
    product_price: 5499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_se_40mm_space_grey_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-se-2-ib",
  },
  {
    product_id: "8100031036-IB",
    product_name: "Apple Watch SE 44mm GPS, Silver, Abyss Blue Sport Band",
    product_price: 5999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_se_44mm_silver_abyss_blue_sport_band_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-se-2-ib",
  },
  {
    product_id: "8100031037-IB",
    product_name: "Apple Watch SE 44mm GPS, Gold, Starlight Sport Band",
    product_price: 5999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_se_44mm_gold_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-se-2-ib",
  },
  {
    product_id: "8100031038-IB",
    product_name: "Apple Watch SE 44mm GPS, Space Grey, Midnight Sport Band",
    product_price: 5999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_se_44mm_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/apple-watch-se-2-ib",
  },
  {
    product_id: "8100031052-IB",
    product_name: "AirPods (3rd generation)",
    product_price: 3499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/i/airpods_3rd_generation__1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/airpods-3rd-generation-ib",
  },
  {
    product_id: "8100031478-IB",
    product_name: "IT. Power Connector USB C to C Cable 1,2 m - White",
    product_price: 169000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it._power_conector_usb_c_to_c_cable_1_2_m_-_white1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-c-cable-1-2-m-white-ib",
  },
  {
    product_id: "8100031480-IB",
    product_name: "IT. Power Connector USB C to C Cable 2 m - White",
    product_price: 199000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it._power_conector_usb_c_to_c_cable_2m_-_white1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-c-cable-2-m-white-ib",
  },
  {
    product_id: "8100029644-IB",
    product_name: "Apple 45mm Sport Band, (PRODUCT)RED",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_product_red_sport_band_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/apple-45mm-sport-band-ib",
  },
  {
    product_id: "8100029679-IB",
    product_name: "Apple 45mm Abyss Blue Sport Band",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_abyss_blue_sport_band_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/apple-45mm-sport-band-ib",
  },
  {
    product_id: "8100029680-IB",
    product_name: "Apple 45mm Sport Band, Marigold",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_marigold_sport_band_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/apple-45mm-sport-band-ib",
  },
  {
    product_id: "8100030832-IB",
    product_name:
      "MacBook Pro (16.2 inci, M1, 2021) 10C CPU, 16C GPU, 1TB, Silver",
    product_price: 43499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_16_inch_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-16-inci-2021",
  },
  {
    product_id: "8100030829-IB",
    product_name:
      "MacBook Pro (16.2 inci, M1, 2021) 10C CPU, 16C GPU, 1TB, Space Grey",
    product_price: 43499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_16_inch_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-16-inci-2021",
  },
  {
    product_id: "8100030831-IB",
    product_name:
      "MacBook Pro (16.2 inci, M1, 2021) 10C CPU, 16C GPU, 512GB, Silver",
    product_price: 39899000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_16_inch_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-16-inci-2021",
  },
  {
    product_id: "8100030828-IB",
    product_name:
      "MacBook Pro (16.2 inci, M1, 2021) 10C CPU, 16C GPU, 512GB, Space Grey",
    product_price: 39899000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_16_inch_space_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-16-inci-2021",
  },
  {
    product_id: "8100030833-IB",
    product_name:
      "MacBook Pro (16.2 inci, M1, 2021) 10C CPU, 32C GPU, 1TB, Silver",
    product_price: 55999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_16_inch_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-16-inci-2021",
  },
  {
    product_id: "8100030830-IB",
    product_name:
      "MacBook Pro (16.2 inci, M1, 2021) 10C CPU, 32C GPU, 1TB, Space Grey",
    product_price: 55999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_16_inch_space_grey_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-16-inci-2021",
  },
  {
    product_id: "8100030834-IB",
    product_name:
      "MacBook Pro (14 inci, M1, 2021) 8C CPU, 14C GPU, 512GB, Space Grey",
    product_price: 31799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_14_inch_space_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-14-inci-2021",
  },
  {
    product_id: "8100030836-IB",
    product_name:
      "MacBook Pro (14 inci, M1, 2021) 8C CPU, 14C GPU, 512GB, Silver",
    product_price: 31799000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_14_inch_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-14-inci-2021",
  },
  {
    product_id: "8100030835-IB",
    product_name:
      "MacBook Pro (14 inci, M1, 2021) 10C CPU, 16C GPU, 1TB, Space Grey",
    product_price: 40399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_14_inch_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-14-inci-2021",
  },
  {
    product_id: "8100030837-IB",
    product_name:
      "MacBook Pro (14 inci, M1, 2021) 10C CPU, 16C GPU, 1TB, Silver",
    product_price: 40399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_2021_14_inch_silver_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m1-14-inci-2021",
  },
  {
    product_id: "8100031512-IB",
    product_name: "Lamina CamSlider TG iPhone 13/13 Pro",
    product_price: 329000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_camslider_tg_iphone_13_pro_-_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-camslider-tg-iphone-13-13-pro-ib",
  },
  {
    product_id: "8100031509-IB",
    product_name: "Lamina CamSlider TG iPhone 13 Pro Max",
    product_price: 329000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_camslider_tg_iphone_13-13_pro_max_-_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-camslider-tg-iphone-13-pro-max-ib",
  },
  {
    product_id: "8100022169-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 7C GPU, 8GB RAM, 256GB SSD, Silver",
    product_price: 20699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_2_port_silver_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-dua-port-2021",
  },
  {
    product_id: "8100022162-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 7C GPU, 8GB RAM, 256GB SSD, Green",
    product_price: 20699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_2_port_green_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-dua-port-2021",
  },
  {
    product_id: "8100022089-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 7C GPU, 8GB RAM, 256GB SSD, Blue",
    product_price: 20699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_2_port_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-dua-port-2021",
  },
  {
    product_id: "8100022166-IB",
    product_name:
      "iMac (24 inci, M1, 2021) 8C CPU, 7C GPU, 8GB RAM, 256GB SSD, Pink",
    product_price: 20699000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/m/imac_24_inch_2_port_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/imac-24-inci-m1-dua-port-2021",
  },
  {
    product_id: "8100021523-IB",
    product_name: "Apple Lightning to USB Cable (1 m)",
    product_price: 399000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_lightning_to_usb_cable_1_m_-_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/apple-lightning-to-usb-cable-1m-ib",
  },
  {
    product_id: "8100021478-IB",
    product_name: "IT Smart LED Bulb 9W RGB+WW",
    product_price: 79000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_led_bulb_9w_rgb_ww_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-smart-led-bulb-9w-rgb-ww-white-ib",
  },
  {
    product_id: "8100021480-IB",
    product_name: "IT Smart LED Lightstrip 2M",
    product_price: 329000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_led_lightstrip_2m_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-smart-led-lightstrip-2m-white-ib",
  },
  {
    product_id: "8100021482-IB",
    product_name: "IT Smart LED Lightstrip Extension 2M",
    product_price: 179000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_led_lightstrip_extension_2m_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-smart-led-lightstrip-extension-2m-white-ib",
  },
  {
    product_id: "8100021488-IB",
    product_name: "IT Smart CCTV Camera",
    product_price: 499000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_cctv_camera_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/it-smart-cctv-camera-black-ib",
  },
  {
    product_id: "8100021490-IB",
    product_name: "IT Smart Air Purifier S130",
    product_price: 999000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_air_purifier_s130_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/it-smart-air-purifier-s130-ib",
  },
  {
    product_id: "8100032591-IB",
    product_name: "Lamina Camera Protector iPhone 13 mini/13",
    product_price: 77000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_camera_protector_iphone_13_mini_or_13_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-camera-protector-iphone-13-mini-13-ib",
  },
  {
    product_id: "8100032590-IB",
    product_name: "Lamina Camera Protector iPhone 13 Pro/13 Pro Max",
    product_price: 119000,
    brand: "Lamina",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/a/lamina_camera_protector_iphone_13_pro_or_13_pro_max_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/lamina-camera-protector-iphone-13-pro-13-pro-max-ib",
  },
  {
    product_id: "8100033085-IB",
    product_name: "IT Smart CCTV Camera - White",
    product_price: 499000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81000330851_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/it-smart-cctv-camera-white-ib",
  },
  {
    product_id: "8100033086-IB",
    product_name: "IT Smart LED Bulb 12W RGB+WW",
    product_price: 99000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_led_bulb_12w_rgb_ww_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/it-smart-led-bulb-12w-rgb-ww-ib",
  },
  {
    product_id: "8100031051-IB",
    product_name: "Usb-C To Magsafe 3 Cable (2 M)",
    product_price: 849000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81000310511_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/usb-c-to-magsafe-3-cable-2-m",
  },
  {
    product_id: "8100031041-IB",
    product_name: "67W Usb-C Power Adapter",
    product_price: 999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81000310410_1.jpg",
    product_info: "Stok Habis",
    real_pdp_url: "https://ibox.co.id/product/67w-usb-c-power-adapter",
  },
  {
    product_id: "8100012984-IB",
    product_name: "Apple Watch Series 3 42mm GPS, Space Grey, Black Sport Band",
    product_price: 4199000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_apple_watch_series_3_42mm_sport_band_space_grey_1_1_5.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-series-3-42mm-gps-space-grey-black-sport-band-ib",
  },
  {
    product_id: "8100031049-IB",
    product_name: "Apple Watch Magnetic Fast Charger To Usb-C Cable (1 M)",
    product_price: 599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/8100031049-ib1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/apple-watch-magnetic-fast-charger-to-usb-c-cable-1-m",
  },
  {
    product_id: "8100048759-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 64GB, Space Grey",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_space_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048760-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 64GB, Pink",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048761-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 64GB, Blue",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048762-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 64GB, Starlight",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_starlight_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048767-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 64GB, Purple",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_purple_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048763-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 256GB, Space Grey",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048764-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 256GB, Pink",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048765-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 256GB, Blue",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048766-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 256GB, Starlight",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_starlight_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048768-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi 256GB, Purple",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_purple_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048751-IB",
    product_name:
      "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 64GB, Space Grey",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_space_grey_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048752-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 64GB, Pink",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048753-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 64GB, Blue",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_blue_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048754-IB",
    product_name:
      "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 64GB, Starlight",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_starlight_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048769-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 64GB, Purple",
    product_price: 13999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_purple_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048755-IB",
    product_name:
      "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 256GB, Space Grey",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_space_grey_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048756-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 256GB, Pink",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_pink_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048757-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 256GB, Blue",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_blue_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048758-IB",
    product_name:
      "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 256GB, Starlight",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_starlight_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100048770-IB",
    product_name: "iPad Air (Gen 5) 10,9 inci, Wi-Fi + Cellular 256GB, Purple",
    product_price: 16999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/ipad_air_gen_5_10_9_inci_wi-fi_cellular_purple_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/ipad-air-5th-gen-10-9-inci",
  },
  {
    product_id: "8100049335-IB",
    product_name: "Magic Mouse - Black Multi-Touch Surface",
    product_price: 1599000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_magic_mouse_black_multi-touch_surface_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/magic-mouse-black-multi-touch-surface",
  },
  {
    product_id: 8100032956,
    product_name: "LG XBOOM Go PL5 - Black",
    product_price: 2129000,
    brand: "LG",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/l/g/lg_xboom_go_pl5_-_black_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/lg-xboom-go-pl5-black",
  },
  {
    product_id: "8100048801-IB",
    product_name: "iPhone SE 3rd Gen 64GB, Midnight",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_midnight_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048802-IB",
    product_name: "iPhone SE 3rd Gen 64GB, Starlight",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_starlight_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048803-IB",
    product_name: "iPhone SE 3rd Gen 64GB, (PRODUCT) RED",
    product_price: 7999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_product_red_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048804-IB",
    product_name: "iPhone SE 3rd Gen 128GB, Midnight",
    product_price: 9499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_midnight_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048805-IB",
    product_name: "iPhone SE 3rd Gen 128GB, Starlight",
    product_price: 9499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_starlight_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048806-IB",
    product_name: "iPhone SE 3rd Gen 128GB, (PRODUCT) RED",
    product_price: 9499000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_product_red_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048807-IB",
    product_name: "iPhone SE 3rd Gen 256GB, Midnight",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_midnight_1_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048808-IB",
    product_name: "iPhone SE 3rd Gen 256GB, Starlight",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_starlight_1_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100048809-IB",
    product_name: "iPhone SE 3rd Gen 256GB, (PRODUCT) RED",
    product_price: 10999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_se_3_product_red_1_3_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/iphone-se-3rd-gen",
  },
  {
    product_id: "8100033136-IB",
    product_name: "IT LED Display Cable USB C to C 1,2m - Black",
    product_price: 255000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_led_display_cable_usb_c_to_c_1_2m_-_black_4_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-led-display-cable-usb-c-to-c-1-2m-black-ib",
  },
  {
    product_id: "8100033135-IB",
    product_name: "IT 3 in 1 Magnetic Wireless Charger - Black",
    product_price: 1099000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_3_in_1_magnetic_wireless_charger_-_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-3-in-1-magnetic-wireless-charger-black-ib",
  },
  {
    product_id: "8100049435-IB",
    product_name: "Mac Studio (M1, 2022) 10C CPU, 24C GPU, 512GB, Silver",
    product_price: 33999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mac_studio_pdp_image_position-1__id.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/mac-studio-2022-ibox",
  },
  {
    product_id: "8100049436-IB",
    product_name: "Mac Studio (M1, 2022) 20C CPU, 48C GPU, 1TB, Silver",
    product_price: 64999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/mac_studio_pdp_image_position-1__id_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/mac-studio-2022-ibox",
  },
  {
    product_id: "8100031447-IB",
    product_name: "Feeltek PD 20W Charger + C to Lightning - White",
    product_price: 449000,
    brand: "Feeltek",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/f/e/feeltek_pd_20w_charger_c_to_l_1.5m_white_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/feeltek-pd-20w-charger-c-to-lightning-white",
  },
  {
    product_id: 8100047534,
    product_name: "IT Smart Curtain Motor MT750 - White",
    product_price: 1499000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_smart_curtain_motor_mt750_white_1.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-smart-curtain-motor-mt750-white",
  },
  {
    product_id: "8100060805-IB",
    product_name: "70mai M500 Dash Camera - Black",
    product_price: 1769000,
    brand: "70mai",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/0/70mai_m500_dash_camera_black_1_1.jpg",
    product_info: "New",
    real_pdp_url: "https://ibox.co.id/product/70mai-m500-dash-camera-black-ib",
  },
  {
    product_id: "8100060806-IB",
    product_name: "70mai A500S Dash Camera Set (Front+Rear) - Black",
    product_price: 1699000,
    brand: "70mai",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/0/70mai_a500s_dash_camera_set_front_rear_black_1_1.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/70mai-a500s-dash-camera-set-front-rear-black-ib",
  },
  {
    product_id: "8100060808-IB",
    product_name: "70mai A800S Dash Camera Set (Front+Rear) - Black",
    product_price: 2599000,
    brand: "70mai",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/7/0/70mai_a800s_dash_camera_set_front_rear_black_1_1.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/70mai-a800s-dash-camera-set-front-rear-black-ib",
  },
  {
    product_id: "8100060299-IB",
    product_name: "JBL Flip 5 - Black",
    product_price: 1499000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/c/ic69252819545661_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-5-black-new-ib",
  },
  {
    product_id: "8100060304-IB",
    product_name: "JBL Flip 5 - Pink",
    product_price: 1499000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_5_pink_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-5-pink-new-ib",
  },
  {
    product_id: "8100060300-IB",
    product_name: "JBL Flip 5 - Blue",
    product_price: 1499000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_5_blue_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-5-blue-new-ib",
  },
  {
    product_id: "8100060303-IB",
    product_name: "JBL Flip 5 - Yellow",
    product_price: 1499000,
    brand: "JBL",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/j/b/jbl_flip_5_yellow_1_1.jpg",
    product_info: "",
    real_pdp_url: "https://ibox.co.id/product/jbl-flip-5-yellow-new-ib",
  },
  {
    product_id: "8100062589-IB",
    product_name:
      "MacBook Pro (13.3 inci, M2, 2022) 8C CPU, 10C GPU, 256GB, Space Grey",
    product_price: 21999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m2_2022_space_grey_1_3.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m2-2022",
  },
  {
    product_id: "8100062590-IB",
    product_name:
      "MacBook Pro (13.3 inci, M2, 2022) 8C CPU, 10C GPU, 256GB, Silver",
    product_price: 21999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m2_2022_silver_1_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m2-2022",
  },
  {
    product_id: "8100062591-IB",
    product_name:
      "MacBook Pro (13.3 inci, M2, 2022) 8C CPU, 10C GPU, 512GB, Space Grey",
    product_price: 25999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m2_2022_space_grey_1_3_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m2-2022",
  },
  {
    product_id: "8100062592-IB",
    product_name:
      "MacBook Pro (13.3 inci, M2, 2022) 8C CPU, 10C GPU, 512GB, Silver",
    product_price: 25999000,
    brand: "Apple",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook_pro_m2_2022_silver_1_2_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url: "https://ibox.co.id/product/macbook-pro-m2-2022",
  },
  {
    product_id: "8100048701-IB",
    product_name: "IT Power Connector C to Lightning - Blue",
    product_price: 349000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/8100048701-ur_2.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-c-to-lightning-blue-ib",
  },
  {
    product_id: "8100048700-IB",
    product_name: "IT Power Connector C to Lightning - Pink",
    product_price: 349000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_power_connector_c_to_lightning_pink_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-c-to-lightning-pink-ib",
  },
  {
    product_id: "8100048704-IB",
    product_name: "IT Tunebuds True Wireless T51 - Black",
    product_price: 459000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/8100048704_2.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/it-tunebuds-true-wireless-t51-black-ib",
  },
  {
    product_id: "8100048705-IB",
    product_name: "IT Tunebuds True Wireless T51 - Blue",
    product_price: 459000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/8100048705_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/it-tunebuds-true-wireless-t51-blue-ib",
  },
  {
    product_id: "8100048697-IB",
    product_name: "IT Trans Silica Cable USB C to C - Lilac",
    product_price: 165000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_trans_silica_cable_usb_c_to_c_lilac_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-trans-silica-cable-usb-c-to-c-lilac-ib",
  },
  {
    product_id: "8100048698-IB",
    product_name: "IT Trans Silica Cable USB C to Lightning MFI - Mint",
    product_price: 275000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_trans_silica_cable_usb_c_to_lightning_mfi_mint_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-trans-silica-cable-usb-c-to-lightning-mfi-mint-ib",
  },
  {
    product_id: "8100052277-IB",
    product_name: "IT Power Connector - USB C to Lightning Cable 2M - White",
    product_price: 379000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81000522771_1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/it-power-connector-usb-c-to-lightning-cable-2m-white-ib",
  },
  {
    product_id: "8100051898-IB",
    product_name: "IT Plug 65 W Dual Port Charger - White",
    product_price: 599000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/8/1/81000518981_1_1.jpg",
    product_info: "Click & Pickup",
    real_pdp_url:
      "https://ibox.co.id/product/it-plug-65-w-dual-port-charger-white-ib",
  },
  {
    product_id: "8100048702-IB",
    product_name: "IT Wireless Magnetic Car Charger WM01 - Black",
    product_price: 599000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_wireless_magnetic_car_charger_wm01_black_1_2.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-wireless-magnetic-car-charger-wm01-black-ib",
  },
  {
    product_id: "8100048703-IB",
    product_name: "IT Wireless Magnetic Car Charger WM02 - Black",
    product_price: 599000,
    brand: "IT",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/i/t/it_wireless_magnetic_car_charger_wm02_black_4.jpg",
    product_info: "New",
    real_pdp_url:
      "https://ibox.co.id/product/it-wireless-magnetic-car-charger-wm02-black-ib",
  },
  {
    product_id: "8100066295-IB",
    product_name: "Harman Kardon Onyx Studio 7 - Grey",
    product_price: 3199000,
    brand: "Harman Kardon",
    product_image_url:
      "https://cdn.eraspace.com/pub/media/catalog/product/h/a/harman_kardon_onyx_studio_7_grey1_1.jpg",
    product_info: "",
    real_pdp_url:
      "https://ibox.co.id/product/harman-kardon-onyx-studio-7-grey-ib",
  },
];

list.forEach(el => {
  el.product_id = el.product_id.toString()
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", list)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
