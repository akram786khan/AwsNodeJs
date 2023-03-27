
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
//const { errorHandler } = require('./backend/middleware/errorMiddleware')
//const ConnectDB = require('./backend/config/db');
const app = express();
//ConnectDB();
app.use(
    cors({
        origin: process.env.ACCESS,
    })
);
app.use(express.json());
app.get("/myy", (req, res) => {
    res.send("Hello....akram baba")

})


const Categories = [
    Sarees = {
        title: "Sarees",
        Image: "https://rukminim1.flixcart.com/image/832/832/kjx6tu80/sari/5/u/k/free-2s-yashomti-1004-mk-pisara-unstitched-original-imafzdn6cg2mxcng.jpeg?q=70",
        data: [
            {
                title: "Sarees",
                Productlist: [
                    {
                        title: "Printed, Digital Print Bollywood Satin Saree ( White )",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                        sellingPrice: "2624",
                        disPrice: "975",
                        disPrsent: "62%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSJMFPA16",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Woven Bollywood Cotton Silk Saree (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                        sellingPrice: "2799",
                        disPrice: "1100",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSKC77721A29",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Woven Bollywood Cotton Silk Saree (Yellow)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/l/s/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjnguhntzm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/1/f/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbj2gdw2vts.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/x/1/q/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjh3bys7br.jpeg?q=70"],
                        sellingPrice: "2499",
                        disPrice: "1245",
                        disPrsent: "50%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSANU78781A30",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Function Wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Embroidered, Dyed, Embellished, Self Design Bollywood Chiffon Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/o/v/r/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfsyrasu2g.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/s/v/m/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfkfshe3ew.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/2/r/n/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfs2arhj8p.jpeg?q=70"],
                        sellingPrice: "2628",
                        disPrice: "1456",
                        disPrsent: "44%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSVIC77201A01",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin chiffon"
                        }
                    },

                    {
                        title: "Woven Kanjivaram Silk Blend Saree (Pink) ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/d/o/3/free-pure-ch-314-marvosa-unstitched-original-imag9zxz2apgu7dn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/w/b/0/free-pure-ch-314-marvosa-unstitched-original-imag9zxzrfh2bpw8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/o/n/h/free-pure-ch-314-marvosa-unstitched-original-imag9zxzqpsvfgkw.jpeg?q=70"],
                        sellingPrice: "4024",
                        disPrice: "1375",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORCH2A24",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Viscose saree"
                        }
                    },

                    {
                        title: "Woven Bollywood Satin Saree  (Grey)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/m/g/r/free-gf-234-granthva-fab-unstitched-original-imaghfa6vz9kfhjv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/g/c/free-gf-234-granthva-fab-unstitched-original-imaghfa6vexuaery.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/4/k/free-gf-234-granthva-fab-unstitched-original-imaghfa68xys3awy.jpeg?q=70"],
                        sellingPrice: "2820",
                        disPrice: "1199",
                        disPrsent: "57%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORASHA27",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Embroidered Bollywood Viscose Rayon Saree  (Red)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/r/j/d/free-ish3003rd-neer-saree-unstitched-original-imagf72nyhgepwev.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/7/7/i/free-ish3003rd-neer-saree-unstitched-original-imagf72n8cqhqs4c.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/f/x/i/free-ish3003rd-neer-saree-unstitched-original-imagf72nh2m2amzp.jpeg?q=70"],
                        sellingPrice: "2999",
                        disPrice: "1145",
                        disPrsent: "61%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORSQA32",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Viscose satin "
                        }
                    },

                    {
                        title: "Embroidered Bollywood Art Silk Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/w/5/n/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzywzyk5ry-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/b/f/a/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzwfmcvcez.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/q/b/x/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzfj2kfxmr.jpeg?q=70"],
                        sellingPrice: "2979",
                        disPrice: "935",
                        disPrsent: "44%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORFCA33",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Embroidered Banarasi Satin Saree  (Dark blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kzrbiq80/sari/5/0/k/free-mk-zal-cosbila-fashion-unstitched-original-imagbpgj83pvffj2.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kzrbiq80/sari/w/d/t/free-mk-zal-cosbila-fashion-unstitched-original-imagbpgjnvfwhaj3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kzrbiq80/sari/x/h/x/free-mk-zal-cosbila-fashion-unstitched-original-imagbpgjfzybzsgu.jpeg?q=70"],
                        sellingPrice: "2979",
                        disPrice: "1450",
                        disPrsent: "51%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORGSA25",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Woven Bollywood Satin Saree  (Grey)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/r/0/free-pt-rainbow-grey-madhumeena-unstitched-original-imaghjaj3smrqp9g.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/u/d/p/free-pt-rainbow-grey-madhumeena-unstitched-original-imaghjajxgnuvhtg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/b/g/y/free-pt-rainbow-grey-madhumeena-unstitched-original-imaghjajwxpmgecf.jpeg?q=70"],
                        sellingPrice: "2618",
                        disPrice: "915",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORRMA34",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Woven Kanjivaram Silk Blend Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/y/l/free-gt-1001-m-s-retail-unstitched-original-imagnjyhqgf4zzb3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/x/r/free-gt-1001-m-s-retail-unstitched-original-imagnjyhfckdzgyc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/l/7/z/free-gt-1001-m-s-retail-unstitched-original-imagnjyhddssqby7.jpeg?q=70"],
                        sellingPrice: "3099",
                        disPrice: "1115",
                        disPrsent: "64%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORSVA35",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Silk viscose"
                        }
                    },

                ],

            },
            {
                title: "Fancy Sarees",
                Productlist: [
                    {
                        title: "Embellished Bollywood Georgette Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/m/g/r/free-gf-234-granthva-fab-unstitched-original-imaghfa6vz9kfhjv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/g/c/free-gf-234-granthva-fab-unstitched-original-imaghfa6vexuaery.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/4/k/free-gf-234-granthva-fab-unstitched-original-imaghfa68xys3awy.jpeg?q=70"],
                        sellingPrice: "2299",
                        disPrice: "900",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORCRYA97",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Digital Print Gadwal Viscose Rayon, Cotton Blend Saree  (Orange)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/d/o/3/free-pure-ch-314-marvosa-unstitched-original-imag9zxz2apgu7dn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/w/b/0/free-pure-ch-314-marvosa-unstitched-original-imag9zxzrfh2bpw8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/o/n/h/free-pure-ch-314-marvosa-unstitched-original-imag9zxzqpsvfgkw.jpeg?q=70"],
                        sellingPrice: "4024",
                        disPrice: "1375",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORCH2A24",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Viscose saree"
                        }
                    },

                    {
                        title: "Embellished Bollywood Georgette Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/m/g/r/free-gf-234-granthva-fab-unstitched-original-imaghfa6vz9kfhjv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/g/c/free-gf-234-granthva-fab-unstitched-original-imaghfa6vexuaery.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/4/k/free-gf-234-granthva-fab-unstitched-original-imaghfa68xys3awy.jpeg?q=70"],
                        sellingPrice: "2820",
                        disPrice: "1199",
                        disPrsent: "57%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORASHA27",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Embroidered Bollywood Viscose Rayon Saree  (Red)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/r/j/d/free-ish3003rd-neer-saree-unstitched-original-imagf72nyhgepwev.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/7/7/i/free-ish3003rd-neer-saree-unstitched-original-imagf72n8cqhqs4c.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/f/x/i/free-ish3003rd-neer-saree-unstitched-original-imagf72nh2m2amzp.jpeg?q=70"],
                        sellingPrice: "2999",
                        disPrice: "1145",
                        disPrsent: "61%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORSQA32",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Viscose satin "
                        }
                    },

                    {
                        title: "Women Banarasi Satin Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/w/5/n/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzywzyk5ry-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/b/f/a/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzwfmcvcez.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/q/b/x/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzfj2kfxmr.jpeg?q=70"],
                        sellingPrice: "2979",
                        disPrice: "935",
                        disPrsent: "44%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORFCA33",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin"
                        }
                    },

                ],
            },
            {
                title: "Silk Sarees",
                Productlist: [
                    {
                        title: "Woven Bollywood Cotton Silk Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                        sellingPrice: "2799",
                        disPrice: "1100",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSKC77721A29",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Dyed, Embellished Bollywood Cotton Silk Saree  (Yellow)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/l/s/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjnguhntzm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/1/f/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbj2gdw2vts.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/x/1/q/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjh3bys7br.jpeg?q=70"],
                        sellingPrice: "2499",
                        disPrice: "1245",
                        disPrsent: "50%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSANU78781A30",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Function Wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Woven Kanjivaram Silk Blend Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/y/l/free-gt-1001-m-s-retail-unstitched-original-imagnjyhqgf4zzb3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/x/r/free-gt-1001-m-s-retail-unstitched-original-imagnjyhfckdzgyc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/l/7/z/free-gt-1001-m-s-retail-unstitched-original-imagnjyhddssqby7.jpeg?q=70"],
                        sellingPrice: "3099",
                        disPrice: "1115",
                        disPrsent: "64%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORSVA35",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Silk viscose"
                        }
                    },
                ],

            },
            {
                title: "Printed Sarees",
                Productlist: [
                    {
                        title: "Floral Print Bollywood Chiffon, Brasso Saree  (Dark black, Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l4ln8nk0/sari/d/g/z/free-2535s935-samah-unstitched-original-imagfgq5zhkgknt4.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4ln8nk0/sari/z/6/l/free-2535s935-samah-unstitched-original-imagfgq5qynhyxge.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4ln8nk0/sari/k/h/m/free-2535s935-samah-unstitched-original-imagfgq5hwm5tnfz.jpeg?q=70"],
                        sellingPrice: "2710",
                        disPrice: "835",
                        disPrsent: "69%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSSAJ1035A598",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Chiffon"
                        }
                    },

                    {
                        title: "Printed, Self Design, Hand Painted, Embroidered, Embellished, Graphic Print, Floral Print Bollywood Georgette, Chiffon Saree  (Beige)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/m/d/g/free-tikka-lach-sareesnew2022-2023simplechiffon-virasat-blue-original-imagkefgfqssbuga.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/u/5/g/free-tikka-lach-sareesnew2022-2023simplechiffon-virasat-blue-original-imagkefgsmj7px4d.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/g/i/x/free-tikka-lach-sareesnew2022-2023simplechiffon-virasat-blue-original-imagkefgazqg4e2g.jpeg?q=70"],
                        sellingPrice: "1799",
                        disPrice: "590",
                        disPrsent: "67%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSSMCCF6847A606",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Multi Chiffon"
                        }
                    },

                    {
                        title: "Geometric Print, Printed, Embellished Bollywood Chiffon Saree  (Light Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/w/m/free-2662s2207j-siril-unstitched-original-imagkfhyhpmzt5wf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/k/u/4/free-2662s2207j-siril-unstitched-original-imagkfhymq6k822t.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/9/f/z/free-2662s2207j-siril-unstitched-original-imagkfhytp79qkcr.jpeg?q=70"],
                        sellingPrice: "1799",
                        disPrice: "810",
                        disPrsent: "54%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSSMCCF6872A608",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Multi chiffon"
                        }
                    },

                    {
                        title: "Printed Daily Wear Chiffon Saree  (Multicolor, Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/d/k/i/free-2661s2182j-siril-unstitched-original-imagkfhyy3egtgnh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/y/r/g/free-2661s2182j-siril-unstitched-original-imagkfhypayd2yrn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/v/v/free-2661s2182j-siril-unstitched-original-imagkfhybqbrd4gr.jpeg?q=70"],
                        sellingPrice: "1799",
                        disPrice: "570",
                        disPrsent: "54%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSSMCCF6857A607",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Multi chiffon"
                        }
                    }
                ],
            },
            {
                title: "Designer And Stonework Sarees",
                Productlist: [
                    {
                        title: "Self Design, Woven Kanjivaram Pure Silk, Cotton Silk Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/6/f/r/free-2675s194ra-satrani-unstitched-original-imagmyg3ajp8yhbq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/b/s/w/free-2675s194ra-satrani-unstitched-original-imagmyg3pteav4fm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/1/y/u/free-2675s194ra-satrani-unstitched-original-imagmyg3mwukqyd9.jpeg?q=70"],
                        sellingPrice: "3999",
                        disPrice: "1450",
                        disPrsent: "63%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDDOL1543A695",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Chinon"
                        }
                    },

                    {
                        title: "Embellished Bollywood Art Silk Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kzvlua80/sari/7/s/l/free-sds0030-sadika-unstitched-original-imagbsg4na5x3gfn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/f/4/y/free-mc020-new-matruchhaya-unstitched-original-imagm2chmfqu38kq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/z/s/free-mc020-new-matruchhaya-unstitched-original-imagm2chf38gztnp.jpeg?q=70"],
                        sellingPrice: "6799",
                        disPrice: "2245",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SOSDDVOLVO1391A677",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Hand Wash"
                        }
                    },

                    {
                        title: "Self Design, Woven Kanjivaram Art Silk, Cotton Silk Saree  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/r/3/i/free-2678s663-samah-unstitched-original-imagkv2cgnacpfyh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/r/n/n/free-2678s663-samah-unstitched-original-imagkv2cfnmzs2qh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/4/k/y/free-2678s663-samah-unstitched-original-imagkv2cfya8tdrg.jpeg?q=70"],
                        sellingPrice: "3699",
                        disPrice: "1150",
                        disPrsent: "68%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDSIRBORA673",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Crape silk"
                        }
                    },

                    {
                        title: "Self Design, Woven Kanjivaram Art Silk, Cotton Silk Saree  (Light Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjn6qvk0-0/sari/i/a/9/free-banarasi-silk-fashion-ritmo-unstitched-original-imafz5sadsyupaa7.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/sari/w/r/t/free-banarasi-butti-green-bplash-fashion-unstitched-original-imagfavrrypydd9c.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/sari/s/v/s/free-banarasi-butti-green-bplash-fashion-unstitched-original-imagfavrknmcfzuc.jpeg?q=70"],
                        sellingPrice: "5950",
                        disPrice: "2395",
                        disPrsent: "59%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDSWAS1291A693",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "German silk"
                        }
                    },

                    {
                        title: "Self Design, Temple Border ,Woven Bollywood Silk Blend ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/k2qh5zk0/sari/7/y/d/free-kara124-pink-sariya-original-imafmyxs2a4nxrbn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k2qh5zk0/sari/7/y/d/free-kara124-pink-sariya-original-imafmyxsrzvymhkh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k2qh5zk0/sari/7/y/d/free-kara124-pink-sariya-original-imafmyxsh5g6xvvg.jpeg?q=70"],
                        sellingPrice: "5951",
                        disPrice: "2190",
                        disPrsent: "63%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDZOM1443A694",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Hand silk"
                        }
                    }
                ],
            },
            {
                title: "Bollywood Collections",
                Productlist: [
                    {
                        title: "Printed, Digital Print Bollywood Satin Saree  (White)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                        sellingPrice: "2624",
                        disPrice: "975",
                        disPrsent: "62%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSJMFPA16",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Embroidered Bollywood Art Silk Saree  (orange)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/o/v/r/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfsyrasu2g.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/s/v/m/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfkfshe3ew.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/2/r/n/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfs2arhj8p.jpeg?q=70"],
                        sellingPrice: "2628",
                        disPrice: "1456",
                        disPrsent: "44%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSVIC77201A01",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin chiffon"
                        }
                    },


                ],
            },
            {
                title: "Japan Satin Sarees",
                Productlist: [
                    {
                        title: "Printed, Digital Print Bollywood Satin Saree  (White)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                        sellingPrice: "2624",
                        disPrice: "975",
                        disPrsent: "62%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSJMFPA16",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Woven Bollywood Cotton Silk Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                        sellingPrice: "2799",
                        disPrice: "1100",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSKC77721A29",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Cotton"
                        }
                    },

                ]
            }
        ]
    },

    Kurtis = {
        title: "Kurtis",
        Image: "https://arhams.in/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-27-at-15.00.16.jpeg",
        data: [
            {
                title: "Kurtis",
                Productlist: [
                    {
                        title: "Women Printed Viscose Rayon Straight Kurta  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/a/k/s/l-black-simple-syndrella-original-imagmycwgzgn3hyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/r/x/b/l-black-simple-syndrella-original-imagmycwaxeqpmf8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/6/6/4/l-black-simple-syndrella-original-imagmycwaahzm7h5.jpeg?q=70"
                        ],
                        sellingPrice: "1974",
                        discountPrice: "545",
                        disPrsent: "72%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYV145449A121",
                            idealFor: "Women",
                            ackOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Embroidered Viscose Rayon Straight Kurta  (Pink)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/kgzg8sw0-0/trouser/o/v/c/xxl-vna1000858-vishudh-original-imafx3zbspsydyv9.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kialrww0-0/kurta/v/2/z/xl-vnku010655-vishudh-original-imafy4bjhsc7zgnt.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kialrww0-0/kurta/g/k/n/xl-vnku010655-vishudh-original-imafy4bjwgathxp6.jpeg?q=70"
                        ],
                        sellingPrice: "1799",
                        disPrice: "597",
                        disPrsent: "66%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145445A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Chikan Embroidery Cotton Rayon Flared Kurta  (Purple)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/n/9/o/xl-ang2101-lav-angita-original-imag25u9fshxuhfv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/f/d/m/xl-ang2101-lav-angita-original-imag25u9pjgskhah.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/3/e/7/xl-ang2101-lav-angita-original-imag25u9vczebvp3.jpeg?q=70"
                        ],
                        sellingPrice: "2499",
                        disPrice: "497",
                        disPrsent: "80%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145446A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: " Rayon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Ethnic Dress  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/ky3b0y80/kurta/7/h/e/s-nsg-358-saabhi-original-imagaekrf8uqbs2s.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ky3b0y80/kurta/a/1/3/s-nsg-358-saabhi-original-imagaekrhj2vjthu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ky3b0y80/kurta/k/z/v/s-nsg-358-saabhi-original-imagaekrkedmuvdt.jpeg?q=70"
                        ],
                        sellingPrice: "2999",
                        disPrice: "427",
                        disPrsent: "85%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145442A116",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Straight Kurta  (Blue)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/k6ci8i80/kurti/h/a/d/m-si-blu-si-and-ku-fabrics-original-imafzzz82hn62xgu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7gikcw0/kurta/q/3/x/xl-8072mj-blue-libas-original-imafpz7gswhmfgpd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7gikcw0/kurta/q/3/x/xs-8072mj-blue-libas-original-imafpz7gfcwmrusa.jpeg?q=70"
                        ],
                        sellingPrice: "1999",
                        disPrice: "499",
                        disPrsent: "75%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145447A119",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                ],
            },
            {
                title: "Long Kurtis",
                Productlist: [
                    {
                        title: "Women Printed Georgette Gown Kurta  (Purple)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/l3bx5e80/kurta/1/x/u/l-maroon-anarkali-kurta-01-jayesh-creation-original-imagegw3hrhgz9yu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3bx5e80/kurta/4/r/v/l-maroon-anarkali-kurta-01-jayesh-creation-original-imagegw3ge9yhaya.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3bx5e80/kurta/w/g/t/l-maroon-anarkali-kurta-01-jayesh-creation-original-imagegw3dthyrzfr.jpeg?q=70"
                        ],
                        sellingPrice: "2499",
                        disPrice: "999",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4004A86",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Geometric Print Cotton Blend A-line Kurta  (Pink)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/b/q/xxl-psk103-glorious-original-imaftnbjjzfgxzej-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kcjexe80/kurta/9/r/l/xxl-psk103-glorious-original-imaftnbjyrs2myyw.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kcjexe80/kurta/4/j/j/xxl-psk103-glorious-original-imaftnbjqytrnzga.jpeg?q=70"
                        ],
                        sellingPrice: "2399",
                        disPrice: "975",
                        disPrsent: "59%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4003A85",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Floral Print Viscose Rayon Anarkali Kurta  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/r/p/t/xxl-kurti-503-gujari-original-imag883ugsymq2mf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/b/l/q/xxl-kurti-503-gujari-original-imag883uzzdzvg27.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/g/o/3/xxl-kurti-503-gujari-original-imag883uyqgagsmk.jpeg?q=70"
                        ],
                        sellingPrice: "2399",
                        disPrice: "755",
                        disPrsent: "68%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4002A85",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: " Rayon"
                        }
                    },
                    {
                        title: "Women Printed, Polka Print Crepe Frontslit Kurta  (Blue)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-dress/h/j/t/l-shopsy-f172-long-maxi-stylist-party-wear-printed-one-piece-original-imaggnx8kgck9agg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/d/9/r/xxl-combo-printed-kurti-casual-party-wear-latest-pack-of-2-kurta-original-imaggnx8gydkhmuu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-dress/y/b/l/l-shopsy-f172-long-maxi-stylist-party-wear-printed-one-piece-original-imaggnx8ugvm2hx9.jpeg?q=70"
                        ],
                        sellingPrice: "1763",
                        disPrice: "703",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYSENCO2A275",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Embroidered Georgette Anarkali Kurta  (Brown)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/klzhq4w0/kurta/n/7/x/3xl-coffe-jaip-m-disha-collection-original-imagyzndymkg6asv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kiulxu80-0/kurta/z/8/x/m-markr-001-brown-marwar-s-original-imafyjtbthhhmwd6.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kirr24w0-0/kurta/8/t/n/m-markr-001-brown-marwar-s-original-imafyhqqw4kf2gpm.jpeg?q=70"
                        ],
                        sellingPrice: "1563",
                        disPrice: "625",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYSENCO4A277",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                ],
            },
            {
                title: "MidLength Kurtis",
                Productlist: [
                    {
                        title: "Women Printed Georgette Gown Kurta  (Purple)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/l3bx5e80/kurta/1/x/u/l-maroon-anarkali-kurta-01-jayesh-creation-original-imagegw3hrhgz9yu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3bx5e80/kurta/4/r/v/l-maroon-anarkali-kurta-01-jayesh-creation-original-imagegw3ge9yhaya.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3bx5e80/kurta/w/g/t/l-maroon-anarkali-kurta-01-jayesh-creation-original-imagegw3dthyrzfr.jpeg?q=70"
                        ],
                        sellingPrice: "3291",
                        disPrice: "2575",
                        disPrsent: "20%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMALX1604A223",
                            idealFor: "Women",
                            packof: "1",
                            occasion: "Deily wear,Casual wear",
                            fabric: "Cotton"
                        }
                    },
                    {
                        title: "Women Geometric Print Cotton Blend A-line Kurta  (Pink)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/b/q/xxl-psk103-glorious-original-imaftnbjjzfgxzej-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kcjexe80/kurta/9/r/l/xxl-psk103-glorious-original-imaftnbjyrs2myyw.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kcjexe80/kurta/4/j/j/xxl-psk103-glorious-original-imaftnbjqytrnzga.jpeg?q=70"
                        ],
                        sellingPrice: "3244",
                        disPrice: "2595",
                        disPrsent: "20%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRARO1OO4A187",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Reguler wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Floral Print Viscose Rayon Anarkali Kurta  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/r/p/t/xxl-kurti-503-gujari-original-imag883ugsymq2mf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/b/l/q/xxl-kurti-503-gujari-original-imag883uzzdzvg27.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/g/o/3/xxl-kurti-503-gujari-original-imag883uyqgagsmk.jpeg?q=70"
                        ],
                        sellingPrice: "2575",
                        disPrice: "1030",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAAL2002A140",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Deily wear,Casual wear",
                            fabric: " Rayon"
                        }
                    },
                    {
                        title: "Women Printed, Polka Print Crepe Frontslit Kurta  (Blue)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-dress/h/j/t/l-shopsy-f172-long-maxi-stylist-party-wear-printed-one-piece-original-imaggnx8kgck9agg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/d/9/r/xxl-combo-printed-kurti-casual-party-wear-latest-pack-of-2-kurta-original-imaggnx8gydkhmuu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-dress/y/b/l/l-shopsy-f172-long-maxi-stylist-party-wear-printed-one-piece-original-imaggnx8ugvm2hx9.jpeg?q=70"
                        ],
                        sellingPrice: "1975",
                        disPrice: "790",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAGYVL35004A138",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Slub linen striped"
                        }
                    },
                    {
                        title: "Women Embroidered Georgette Anarkali Kurta  (Brown)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/klzhq4w0/kurta/n/7/x/3xl-coffe-jaip-m-disha-collection-original-imagyzndymkg6asv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kiulxu80-0/kurta/z/8/x/m-markr-001-brown-marwar-s-original-imafyjtbthhhmwd6.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kirr24w0-0/kurta/8/t/n/m-markr-001-brown-marwar-s-original-imafyhqqw4kf2gpm.jpeg?q=70"
                        ],
                        sellingPrice: "2050",
                        disPrice: "820",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAGYVL35003A137",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Slub linen striped"
                        }
                    },
                ],
            },
            {
                title: "Short Tops",
                Productlist: [
                    {
                        title: "Women Embroidered Viscose Rayon Straight Kurta  (Yellow)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/h/s/l/xxl-short-kurti-yellow-attnico-original-imag9xuhw8fz7kyy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4ssfww0/kurta/k/f/o/s-short-kurti-yellow-kalavisha-original-imagcfwqhgzygx8e.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/w/n/w/xxl-short-kurti-yellow-attnico-original-imag9xuhwagvzayy.jpeg?q=70"
                        ],
                        sellingPrice: "1974",
                        disPrice: "545",
                        disPrsent: "72%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYV145449A121",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Printed Crepe Straight Kurta  (Green)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/g/k/z/xl-st-nik-1101-shiv-textiles-original-imagfungqzwygyzs-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kn3i1zk0/kurta/l/r/d/xl-st-nik-1101-shiv-textiles-original-imagfungdcnnphaa.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kn3i1zk0/kurta/g/q/8/xl-st-nik-1101-shiv-textiles-original-imagfungzwqsrbrn.jpeg?q=70"
                        ],
                        sellingPrice: "1974",
                        disPrice: "545",
                        disPrsent: "72%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145449A121",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Embroidered Cotton Rayon Anarkali Kurta  (White)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/top/e/p/q/3xl-white-top-kurti-sanga-original-imagjhz6nqkty2s8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/top/p/y/n/3xl-white-top-kurti-sanga-original-imagjhz6geqzckxe.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/top/k/j/h/3xl-white-top-kurti-sanga-original-imagkspf4hvygx8z.jpeg?q=70"
                        ],
                        sellingPrice: "1799",
                        disPrice: "597",
                        disPrsent: "80%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145445A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: " Rayon"
                        }
                    },
                    {
                        title: "Women Floral Print Viscose Rayon Straight Kurta  (Blue)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/l4yi7bk0/kurta/i/j/m/3xl-dk-s-13-keshubaba-original-imagfqrkynfnzawz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4yi7bk0/kurta/s/3/m/3xl-dk-s-13-keshubaba-original-imagfqrkqymgwj9m.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4yi7bk0/kurta/j/o/2/3xl-dk-s-13-keshubaba-original-imagfqrkpz2gjvym.jpeg?q=70"
                        ],
                        sellingPrice: "1899",
                        disPrice: "595",
                        disPrsent: "68%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145442A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Straight Kurta  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/kdj4xow0-0/kurta/a/s/p/s-ift-15-black-new-1-inna-original-imafuepcmjpgkq5b.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kdj4xow0-0/kurta/v/a/z/s-ift-15-black-new-1-inna-original-imafuepcgsnz9w9z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kdj4xow0-0/kurta/a/v/l/m-ift-15-black-new-1-inna-original-imafuepcaryhvg5f.jpeg?q=70"
                        ],
                        sellingPrice: "2110",
                        disPrice: "605",
                        disPrsent: "75%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145442A116",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                ],
            },
            {
                title: "Dresses",
                Productlist: [
                    {
                        title: "Women Chikan Embroidery Cotton Rayon A-line Kurta  (Purple)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/n/9/o/xl-ang2101-lav-angita-original-imag25u9fshxuhfv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/f/d/m/xl-ang2101-lav-angita-original-imag25u9pjgskhah.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/o/l/7/xl-ang2101-lav-angita-original-imag25u9fexb23jz.jpeg?q=70"
                        ],
                        sellingPrice: "1999",
                        disPrice: "779",
                        disPrsent: "61%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKWEST379A414",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Crepe"
                        }
                    },
                    {
                        title: "Women Solid Crepe Straight Kurta  (Yellow)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/m/k/e/m-s-12000-navlik-original-imagg3vwrczpnt2x.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/m/y/f/m-s-12000-navlik-original-imagg3vwhdhefd8y.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/u/p/7/m-s-12000-navlik-original-imagg3vwckhhzwyj.jpeg?q=70"
                        ],
                        sellingPrice: "3594",
                        disPrice: "2875",
                        disPrsent: "20%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAALX004A133",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Heavy pashmina cotton"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Anarkali Kurta  (Blue)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/ktep2fk0/kurta/u/b/m/xxl-1024-mintmarie-original-imag6r7vfdjubgbh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kruyw7k0/kurta/t/0/p/l-1024-mintmarie-original-imag5k36gyq8zhfg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kruyw7k0/kurta/g/m/b/l-1024-mintmarie-original-imag5k36vejzutg5.jpeg?q=70"
                        ],
                        sellingPrice: "10139",
                        disPrice: "9125",
                        disPrsent: "10%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMELG21300BA227",
                            idealFor: "Women",
                            packOf: "1(Kurti + Bottom + Dupatta",
                            occasion: "Festive,Party wear",
                            fabric: "Soft georgette"
                        }
                    },
                    {
                        title: "Women Embroidered Viscose Rayon Anarkali Kurta  (Brown)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/0/e/5/xl-shopsy-lt-59-k-maroon-hirlax-original-imagnqckwkqtwqym.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/s/r/b/xl-shopsy-lt-59-k-maroon-hirlax-original-imagnqckwym2z5h8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/l/m/d/xl-shopsy-lt-59-k-maroon-hirlax-original-imagnqck2nyjrwwu.jpeg?q=70"
                        ],
                        sellingPrice: "5920",
                        disPrice: "1184",
                        disPrsent: "80%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMPAL6007A212",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Soft tapeta silk"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Anarkali Kurta  (Maroon)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/r/x/o/l-scmatr-brownjaal-akshara-fashion-original-imagh2wua3qxypmr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/j/w/8/l-scmatr-brownjaal-akshara-fashion-original-imagh2wut9mtvrs5.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/u/k/v/xl-vr-matr-maroon-jhal-sonava-club-original-imagmuahhtpmad3f.jpeg?q=70"
                        ],
                        sellingPrice: "3576",
                        disPrice: "1400",
                        disPrsent: "60%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMPAL600BA213",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Soft tapeta sil"
                        }
                    },
                ]
            }

        ]
    },

    Lehengas = {
        title: "Lehengas",
        Image: "https://rukminim1.flixcart.com/image/832/832/l0fm07k0/lehenga-choli/q/o/n/free-half-sleeve-30-baby-pink-jsitaliya-original-imagc7ss4ghyfbgv.jpeg?q=70",
        data: [
            {
                title: "Lehengas",
                Productlist: [
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/1/n/f/free-half-sleeve-l104-foriox-original-imag9yhyeqmczzws.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/i/u/a/free-half-sleeve-l104-foriox-original-imag9yhym6sya9qd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/g/b/h/free-half-sleeve-l104-foriox-original-imag9yhy4fzv9kny.jpeg?q=70"],
                        sellingPrice: "21549",
                        disPrice: "6500",
                        disPrsent: "69%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGHK8A517",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",




                        }
                    },


                    {
                        title: "Digital Print Semi Stitched Lehenga Choli ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/r/h/a/free-sleeveless-l8097-fashionuma-original-imag6hxfawazw8yd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/q/w/o/free-sleeveless-l8097-fashionuma-original-imag6hxfrtc4v8zz.jpeg?q=70"],
                        sellingPrice: "14904",
                        disPrice: "8942",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKGHUA532",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Vrlvet ",
                            LehengaBlouseFabric: " Vrlvet",

                        }
                    },



                    {
                        title: "Digital Print Semi Stitched Lehenga Choli  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/b/z/l/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsk8rz92aq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/o/l/c/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsxfnqphjf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/s/e/m/free-sleeveless-fidera-organza-fabcartz-original-imagfgrscrfk2sda.jpeg?q=70"],
                        sellingPrice: "22172",
                        disPrice: "13305",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKANOA525",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: " Vrlvet",

                        }
                    },



                    {
                        title: "Embroidered Semi Stitched Lehenga Choli ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/o/m/e/free-3-4-sleeve-future-wine-goroly-original-imag5ezd4rkawhxq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/t/w/l/free-3-4-sleeve-future-wine-goroly-original-imag5ezdgm3dumzv.jpeg?q=70"],
                        sellingPrice: "24024",
                        disPrice: "7800",
                        disPrsent: "67%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKMAYUA541",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: "Vrlvet ",
                        }
                    },




                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/r/f/w/free-sleeveless-zip1434-zinariya-fab-original-imagnftyr5e7aadz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/v/4/e/free-sleeveless-zip1434-zinariya-fab-original-imagnftyksxk8gec.jpeg?q=70"],
                        sellingPrice: "6799",
                        disPrice: "2700",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK12CA523",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",
                        }
                    },





                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Grey)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/n/a/y/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryg8pe4ehh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70"],
                        sellingPrice: "12210",
                        disPrice: "7570",
                        disPrsent: "38%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK4A513",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",

                        }
                    },

                ],
            },
            {
                title: "Velvet Lehengas",
                Productlist: [
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/1/n/f/free-half-sleeve-l104-foriox-original-imag9yhyeqmczzws.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/i/u/a/free-half-sleeve-l104-foriox-original-imag9yhym6sya9qd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/g/b/h/free-half-sleeve-l104-foriox-original-imag9yhy4fzv9kny.jpeg?q=70"],
                        sellingPrice: "18010",
                        disPrice: "10806",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKEKA531",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: "Vrlvet",



                        }
                    },


                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/r/h/a/free-sleeveless-l8097-fashionuma-original-imag6hxfawazw8yd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/q/w/o/free-sleeveless-l8097-fashionuma-original-imag6hxfrtc4v8zz.jpeg?q=70"],
                        sellingPrice: "18132",
                        disPrice: "4900",
                        disPrsent: "72%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKROSEA542",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: " Vrlvet",

                        }
                    },



                    {
                        title: "Digital Print Semi Stitched Lehenga Choli  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/b/z/l/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsk8rz92aq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/o/l/c/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsxfnqphjf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/s/e/m/free-sleeveless-fidera-organza-fabcartz-original-imagfgrscrfk2sda.jpeg?q=70"],
                        sellingPrice: "16999",
                        disPrice: "10199",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKSINA546",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Vrlvet",
                            LehengaBlouseFabric: "Vrlvet",
                        }
                    },



                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/o/m/e/free-3-4-sleeve-future-wine-goroly-original-imag5ezd4rkawhxq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/t/w/l/free-3-4-sleeve-future-wine-goroly-original-imag5ezdgm3dumzv.jpeg?q=70"],
                        sellingPrice: "15275",
                        disPrice: "4800",
                        disPrsent: "68%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKROSEA543",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Vrlvet",
                            LehengaBlouseFabric: "Vrlvet",

                        }
                    },




                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/r/f/w/free-sleeveless-zip1434-zinariya-fab-original-imagnftyr5e7aadz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/v/4/e/free-sleeveless-zip1434-zinariya-fab-original-imagnftyksxk8gec.jpeg?q=70"],
                        sellingPrice: "25389",
                        disPrice: "7400",
                        disPrsent: "70%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK11A520",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: " Vrlvet",

                        }
                    },





                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Grey)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/n/a/y/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryg8pe4ehh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70"],
                        sellingPrice: "19684",
                        disPrice: "11810",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKVIA553",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Vrlvet ",
                            LehengaBlouseFabric: "Vrlvet ",

                        }
                    },

                ],
            },
            {
                title: "Netted Lehengas",
                Productlist: [
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/1/n/f/free-half-sleeve-l104-foriox-original-imag9yhyeqmczzws.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/i/u/a/free-half-sleeve-l104-foriox-original-imag9yhym6sya9qd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/g/b/h/free-half-sleeve-l104-foriox-original-imag9yhy4fzv9kny.jpeg?q=70"],
                        sellingPrice: "21549",
                        disPrice: "6500",
                        disPrsent: "69%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK8A517",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",


                        }
                    },


                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/r/h/a/free-sleeveless-l8097-fashionuma-original-imag6hxfawazw8yd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/q/w/o/free-sleeveless-l8097-fashionuma-original-imag6hxfrtc4v8zz.jpeg?q=70"],
                        sellingPrice: "20856",
                        disPrice: "12514",
                        disPrsent: "39%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK2A51",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",



                        }
                    },



                    {
                        title: "Digital Print Semi Stitched Lehenga Choli  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/b/z/l/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsk8rz92aq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/o/l/c/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsxfnqphjf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/s/e/m/free-sleeveless-fidera-organza-fabcartz-original-imagfgrscrfk2sda.jpeg?q=70"],
                        sellingPrice: "7999",
                        disPrice: "4879",
                        disPrsent: "39%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK12AA521",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",



                        }
                    },




                    {
                        title: "Embroidered Semi Stitched Lehenga Choli ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/o/m/e/free-3-4-sleeve-future-wine-goroly-original-imag5ezd4rkawhxq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/t/w/l/free-3-4-sleeve-future-wine-goroly-original-imag5ezdgm3dumzv.jpeg?q=70"],
                        sellingPrice: "6799",
                        disPrice: "2700",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK12CA523",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",

                        }
                    },




                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/r/f/w/free-sleeveless-zip1434-zinariya-fab-original-imagnftyr5e7aadz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/v/4/e/free-sleeveless-zip1434-zinariya-fab-original-imagnftyksxk8gec.jpeg?q=70"],
                        sellingPrice: "12210",
                        disPrice: "7570",
                        disPrsent: "38%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK4A513",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",

                        }
                    },





                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/n/a/y/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryg8pe4ehh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70"],
                        sellingPrice: "21700",
                        disPrice: "13020",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK1A510",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",

                        }
                    },

                ],
            }
        ]
    },

    Trousers = {
        title: "Trousers",
        Image: "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/x/b/x/36-epnchino-13-parrotgreen-urbano-fashion-original-imagmzvpxvkngfgu.jpeg?q=70",
        data: [
            {
                title: "Trousers",
                Productlist: [
                    {
                        title: "Men Slim Fit Light Green Cotton Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/klscivk0/trouser/t/1/k/28-sktr-4242-olv-fubar-original-imagyuffe3pbk4dc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l15bxjk0/shopsy-trouser/v/b/a/28-shoptr-2121-olive-casual-trousers-fubar-original-imagcrshh34wmnze.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XLL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Black Cotton Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/ksgehzk0/trouser/k/2/q/32-cyfor-a-cyphus-original-imag6yyyedypgvke.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ksgehzk0/trouser/0/z/n/32-cyfor-a-cyphus-original-imag6yyycmzxqqp2.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ksgehzk0/trouser/d/g/r/32-cyfor-a-cyphus-original-imag6yyy4uygkbz6.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    }


                ],
            },
            {
                title: "Jeans",
                Productlist: [
                    {
                        title: "Boys Slim Mid Rise Grey Jeans",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/jean/2/x/b/13-14-years-junhpsjoggerboy-lgrey-urbano-juniors-original-imafpm83zszw3dfn-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/2/x/b/11-12-years-junhpsjoggerboy-lgrey-urbano-juniors-original-imafpm83dvrbrrby.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/2/x/b/13-14-years-junhpsjoggerboy-lgrey-urbano-juniors-original-imafpm83qjymaywf.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Mid Rise Blue Jeans",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/jean/g/j/b/32-wmjn004806-wrangler-original-imaggyry9nrug5tr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/jean/j/c/n/32-wmjn004806-wrangler-original-imaggyrymkvjg3vs.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/jean/i/h/h/32-wmjn004806-wrangler-original-imaggyrygecmjmhf.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },


                ],
            },
            {
                title: "Popcorn Pants",
                Productlist: [
                    {
                        title: "Men Slim Fit Gold Lycra Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/m/k/l/32-4way-20-grandstitch-original-imaggqhxhu8tk2dy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/e/3/z/32-4way-20-grandstitch-original-imaggqhxpqr3yvfp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/8/p/k/32-4way-20-grandstitch-original-imaggqhxk5wgmf6y.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Fit Grey Lycra Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/y/v/q/28-4way-22-grandstitch-original-imaggqhytz6gebmm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/u/2/2/28-4way-22-grandstitch-original-imaggqhyfdrunzyw.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/0/k/r/28-4way-22-grandstitch-original-imaggqhyreyhcsg2.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },


                ],
            },
            {
                title: "Lycra Pants",
                Productlist: [
                    {
                        title: "Men Slim Fit Light Blue Lycra Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/i/v/k/34-lycra001-online-cloth-khazana-original-imaghdg7dnetsgmt.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/8/l/7/32-g-1-gaumukhi-creation-original-imaghdg75k8swyfe.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/r/t/f/32-g-1-gaumukhi-creation-original-imaghdg7x2pjthv8.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Fit Black Lycra Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/trouser/x/b/e/30-a1-aclass-original-imagehhhcuztyw5h.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/trouser/v/r/e/30-a1-aclass-original-imagehhhnzjtgfd3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/trouser/w/h/q/30-a1-aclass-original-imagehhhfwexnzqy.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },


                ],
            },
            {
                title: "Formal Pants",
                Productlist: [
                    {
                        title: "Men Regular Fit Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/w/o/a/34-22a4ctwb1019i901-united-colors-of-benetton-original-imagjs7hqygaqsze.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/w/o/x/34-22a4ctwb1019i901-united-colors-of-benetton-original-imagjs7hz4gg2q9j.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/e/h/m/34-22a4ctwb1019i901-united-colors-of-benetton-original-imagjs7hcdtfyneg.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",

                        }
                    },


                    {
                        title: "Men Slim Fit Black Viscose Rayon Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kkprmvk0/trouser/i/z/s/32-pmtx06279-b9-park-avenue-original-imagyyfpupwjay7z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kkprmvk0/trouser/j/s/x/32-pmtx06279-b9-park-avenue-original-imagyyfptzfynfhr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kkprmvk0/trouser/v/v/t/32-pmtx06279-b9-park-avenue-original-imagyyfpm5tjzeyk.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },
                ]
            }

        ]
    },

    Shirts = {
        title: "Shirts",
        Image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/n/c/e/s-p1-sht-geographical-red-verticals-original-imaggphymyzfzfrc.jpeg?q=70",
        data: [
            {
                title: "Shirts",
                Productlist: [
                    {
                        title: "Men Regular Fit Printed Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/q/2/v/m-hm-shirt02-hanumntra-original-imaftd53zzeqchzy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/e/z/f/m-hm-shirt02-hanumntra-original-imaftd53bxwy8qqf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/y/i/v/m-hm-shirt02-hanumntra-original-imaftd53fdzp64mt.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Fit Solid Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/f/7/v/l-frml-st2-vebnor-original-imag6apmq69vfxqz.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Royon",


                        }
                    },



                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/2/e/c/l-hlsh013040-highlander-original-imagajukzaxnfqqk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/n/7/j/l-hlsh013040-highlander-original-imagajukcubp7ggq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/f/6/b/l-hlsh013040-highlander-original-imagajukjsgtdqwe.jpeg?q=70"],
                        sellingPrice: "1893",
                        disPrice: "1445",
                        disPrsent: "21%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSC4A448",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/1/m/x/l-check1195-tanip-original-image85eukssmgkg.jpeg?q=70"],
                        sellingPrice: "1349",
                        disPrice: "455",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBCLRSTP9A453",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/y/p/i/xxl-pink-sws4125-allan-peter-original-imag4tkbdasb7u5v.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/j/f/e/xxl-pink-sws4125-allan-peter-original-imag4tkbzetqdhqv.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "245",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSSLASHBOXA465",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },



                    {
                        title: "Men Slim Fit Solid Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/p/j/8/40-rmsx12365-b5-raymond-original-imagnbzgksdhc7xp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/r/40-rmsx12365-b5-raymond-original-imagnbzgrtpctwup.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/e/p/40-rmsx12365-b5-raymond-original-imagnbzgfvghbzug.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "529",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSLABLBOXCHDA466",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                ],
            },
            {
                title: "Forml Shirts",
                Productlist: [
                    {
                        title: "Men Slim Fit Printed Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/q/2/v/m-hm-shirt02-hanumntra-original-imaftd53zzeqchzy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/e/z/f/m-hm-shirt02-hanumntra-original-imaftd53bxwy8qqf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/y/i/v/m-hm-shirt02-hanumntra-original-imaftd53fdzp64mt.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            ProductCode: "SHSTYBPPCS452",
                            IdealFor: "men",
                            PackOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Solid Spread Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/f/7/v/l-frml-st2-vebnor-original-imag6apmq69vfxqz.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Royon",


                        }
                    },



                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/2/e/c/l-hlsh013040-highlander-original-imagajukzaxnfqqk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/n/7/j/l-hlsh013040-highlander-original-imagajukcubp7ggq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/f/6/b/l-hlsh013040-highlander-original-imagajukjsgtdqwe.jpeg?q=70"],
                        sellingPrice: "1893",
                        disPrice: "1445",
                        disPrsent: "21%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSC4A448",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/1/m/x/l-check1195-tanip-original-image85eukssmgkg.jpeg?q=70"],
                        sellingPrice: "1349",
                        disPrice: "455",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBCLRSTP9A453",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Regular Fit Checkered Mandarin Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/y/p/i/xxl-pink-sws4125-allan-peter-original-imag4tkbdasb7u5v.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/j/f/e/xxl-pink-sws4125-allan-peter-original-imag4tkbzetqdhqv.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "245",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSSLASHBOXA465",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },



                    {
                        title: "Men Slim Fit Printed Spread Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/p/j/8/40-rmsx12365-b5-raymond-original-imagnbzgksdhc7xp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/r/40-rmsx12365-b5-raymond-original-imagnbzgrtpctwup.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/e/p/40-rmsx12365-b5-raymond-original-imagnbzgfvghbzug.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "529",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSLABLBOXCHDA466",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                ],
            },
            {
                title: "Casual Shirts",
                Productlist: [
                    {
                        title: "Men Slim Fit Printed Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/q/2/v/m-hm-shirt02-hanumntra-original-imaftd53zzeqchzy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/e/z/f/m-hm-shirt02-hanumntra-original-imaftd53bxwy8qqf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/y/i/v/m-hm-shirt02-hanumntra-original-imaftd53fdzp64mt.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/f/7/v/l-frml-st2-vebnor-original-imag6apmq69vfxqz.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Royon",


                        }
                    },



                    {
                        title: "Men Regular Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/2/e/c/l-hlsh013040-highlander-original-imagajukzaxnfqqk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/n/7/j/l-hlsh013040-highlander-original-imagajukcubp7ggq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/f/6/b/l-hlsh013040-highlander-original-imagajukjsgtdqwe.jpeg?q=70"],
                        sellingPrice: "1893",
                        disPrice: "1445",
                        disPrsent: "21%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSC4A448",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/1/m/x/l-check1195-tanip-original-image85eukssmgkg.jpeg?q=70"],
                        sellingPrice: "1349",
                        disPrice: "455",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBCLRSTP9A453",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Regular Fit Checkered Mandarin Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/y/p/i/xxl-pink-sws4125-allan-peter-original-imag4tkbdasb7u5v.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/j/f/e/xxl-pink-sws4125-allan-peter-original-imag4tkbzetqdhqv.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "245",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSSLASHBOXA465",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",



                        }
                    },



                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/p/j/8/40-rmsx12365-b5-raymond-original-imagnbzgksdhc7xp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/r/40-rmsx12365-b5-raymond-original-imagnbzgrtpctwup.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/e/p/40-rmsx12365-b5-raymond-original-imagnbzgfvghbzug.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "529",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSLABLBOXCHDA466",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",



                        }
                    }

                ]
            },

        ]
    },

    HoursDelivery = {
        title: "Hours Delivery",
        Image: "https://apollo-singapore.akamaized.net/v1/files/z16k99g4p63d-IN/image;s=272x0",
        data: [
            {
                title: "Fancy Sarees",
                Productlist: [
                    {
                        title: "Floral Print Bollywood Lycra Blend Saree  (Black)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/w/5/n/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzywzyk5ry-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/b/f/a/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzwfmcvcez.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/q/b/x/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzfj2kfxmr.jpeg?q=70"],
                        sellingPrice: "2303",
                        disPrice: "995",
                        disPrsent: "56%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSMANFALAK1002A11",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Georgette"
                        }
                    },

                    {
                        title: "Embellished Bollywood Georgette Saree  (Gray)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/m/g/r/free-gf-234-granthva-fab-unstitched-original-imaghfa6vz9kfhjv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/g/c/free-gf-234-granthva-fab-unstitched-original-imaghfa6vexuaery.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/4/k/free-gf-234-granthva-fab-unstitched-original-imaghfa68xys3awy.jpeg?q=70"],
                        sellingPrice: "1770",
                        disPrice: "760",
                        disPrsent: "57%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSMANMANV12A45",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Fastive, Party wear",
                            fabric: "Chiffon"
                        }
                    },

                    {
                        title: "Printed Mysore Art Silk Saree ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/d/o/3/free-pure-ch-314-marvosa-unstitched-original-imag9zxz2apgu7dn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/w/b/0/free-pure-ch-314-marvosa-unstitched-original-imag9zxzrfh2bpw8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/o/n/h/free-pure-ch-314-marvosa-unstitched-original-imag9zxzqpsvfgkw.jpeg?q=70"],
                        sellingPrice: "1753",
                        disPrice: "670",
                        disPrsent: "61%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHAMANMOKV11001A39",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Deily wear, Casual wear",
                            fabric: "Georgette"
                        }
                    },

                    {
                        title: "Embellished Bollywood Georgette Saree  ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/m/g/r/free-gf-234-granthva-fab-unstitched-original-imaghfa6vz9kfhjv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/g/c/free-gf-234-granthva-fab-unstitched-original-imaghfa6vexuaery.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/4/k/free-gf-234-granthva-fab-unstitched-original-imaghfa68xys3awy.jpeg?q=70"],
                        sellingPrice: "2384",
                        disPrice: "910",
                        disPrsent: "61%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSMANSHANY1001A28",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Deily Wear, Casual wear",
                            fabric: "Georgette"
                        }
                    },

                    {
                        title: "Self Design Bollywood Net Saree  (Red)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/r/j/d/free-ish3003rd-neer-saree-unstitched-original-imagf72nyhgepwev.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/7/7/i/free-ish3003rd-neer-saree-unstitched-original-imagf72n8cqhqs4c.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l48s9zk0/shopsy-sari/f/x/i/free-ish3003rd-neer-saree-unstitched-original-imagf72nh2m2amzp.jpeg?q=70"],
                        sellingPrice: "2499",
                        disPrice: "1110",
                        disPrsent: "55%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORJUGA23",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin "
                        }
                    },


                ],
            },
            {
                title: "Silk Sarees",
                Productlist: [
                    {
                        title: "Woven Bollywood Cotton Silk Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                        sellingPrice: "2799",
                        disPrice: "1100",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSKC77721A29",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Woven Bollywood Art Silk Saree  (Yellow)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/l/s/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjnguhntzm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/1/f/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbj2gdw2vts.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/x/1/q/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjh3bys7br.jpeg?q=70"],
                        sellingPrice: "2499",
                        disPrice: "1245",
                        disPrsent: "50%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSANU78781A30",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Function Wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Woven Kanjivaram Silk Blend Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/y/l/free-gt-1001-m-s-retail-unstitched-original-imagnjyhqgf4zzb3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/x/r/free-gt-1001-m-s-retail-unstitched-original-imagnjyhfckdzgyc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/l/7/z/free-gt-1001-m-s-retail-unstitched-original-imagnjyhddssqby7.jpeg?q=70"],
                        sellingPrice: "3099",
                        disPrice: "1115",
                        disPrsent: "64%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORSVA35",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Silk viscose"
                        }
                    },
                ],
            },
            {
                title: "Designer And Stonework Sarees",
                Productlist: [
                    {
                        title: "Dyed, Embellished, Woven Bollywood Chiffon, Jacquard Saree  (Beige)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/6/f/r/free-2675s194ra-satrani-unstitched-original-imagmyg3ajp8yhbq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/b/s/w/free-2675s194ra-satrani-unstitched-original-imagmyg3pteav4fm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/1/y/u/free-2675s194ra-satrani-unstitched-original-imagmyg3mwukqyd9.jpeg?q=70"],
                        sellingPrice: "3999",
                        disPrice: "1450",
                        disPrsent: "63%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDDOL1543A695",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Chinon"
                        }
                    },

                    {
                        title: "Embroidered, Woven Daily Wear Georgette Saree  (Grey)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kzvlua80/sari/7/s/l/free-sds0030-sadika-unstitched-original-imagbsg4na5x3gfn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/f/4/y/free-mc020-new-matruchhaya-unstitched-original-imagm2chmfqu38kq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/z/s/free-mc020-new-matruchhaya-unstitched-original-imagm2chf38gztnp.jpeg?q=70"],
                        sellingPrice: "6799",
                        disPrice: "2245",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SOSDDVOLVO1391A677",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Hand Wash"
                        }
                    },

                    {
                        title: "Printed, Color Block, Self Design Bandhani Silk Blend, Crepe Saree  (Green, Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/r/3/i/free-2678s663-samah-unstitched-original-imagkv2cgnacpfyh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/r/n/n/free-2678s663-samah-unstitched-original-imagkv2cfnmzs2qh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/4/k/y/free-2678s663-samah-unstitched-original-imagkv2cfya8tdrg.jpeg?q=70"],
                        sellingPrice: "3699",
                        disPrice: "1150",
                        disPrsent: "68%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDSIRBORA673",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Crape silk"
                        }
                    },

                    {
                        title: "Self Design, Embroidered, Woven, Floral Print Banarasi Silk Blend, Jacquard Saree  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjn6qvk0-0/sari/i/a/9/free-banarasi-silk-fashion-ritmo-unstitched-original-imafz5sadsyupaa7.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/sari/w/r/t/free-banarasi-butti-green-bplash-fashion-unstitched-original-imagfavrrypydd9c.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/sari/s/v/s/free-banarasi-butti-green-bplash-fashion-unstitched-original-imagfavrknmcfzuc.jpeg?q=70"],
                        sellingPrice: "5950",
                        disPrice: "2395",
                        disPrsent: "59%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDSWAS1291A693",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "German silk"
                        }
                    },

                    {
                        title: "Temple Border, Striped, Woven Arani Pattu Cotton Linen, Pure Silk Saree  (pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/k2qh5zk0/sari/7/y/d/free-kara124-pink-sariya-original-imafmyxs2a4nxrbn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k2qh5zk0/sari/7/y/d/free-kara124-pink-sariya-original-imafmyxsrzvymhkh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k2qh5zk0/sari/7/y/d/free-kara124-pink-sariya-original-imafmyxsh5g6xvvg.jpeg?q=70"],
                        sellingPrice: "5951",
                        disPrice: "2190",
                        disPrsent: "63%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSDDZOM1443A694",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Wedding Wear, Party wear",
                            fabric: "Hand silk"
                        }
                    }
                ],
            },
            {
                title: "Japan Satin Sarees",
                Productlist: [
                    {
                        title: "Printed, Digital Print Bollywood Satin Saree  (White)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                        sellingPrice: "2624",
                        disPrice: "975",
                        disPrsent: "62%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSJMFPA16",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Woven Bollywood Cotton Silk Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                        sellingPrice: "2799",
                        disPrice: "1100",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSKC77721A29",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Cotton"
                        }
                    },


                ],
            },
            {
                title: "long Kurtis",
                Productlist: [
                    {
                        title: "Women Floral Print Viscose Rayon Anarkali Kurta  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/u/5/s/s-kurti-503-gujari-original-imag883udw6c7xxq-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/k/1/j/s-kurti-503-gujari-original-imag883u6yrkf9u4.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/e/h/q/s-kurti-503-gujari-original-imag883uhqm2qugz.jpeg?q=70"],
                        sellingPrice: "2499",
                        disPrice: "999",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4004A86",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Reyon"
                        }
                    },

                    {
                        title: "Women Floral Print Viscose Rayon Anarkali Kurta  (Black)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/r/p/t/xxl-kurti-503-gujari-original-imag883ugsymq2mf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/b/l/q/xxl-kurti-503-gujari-original-imag883uzzdzvg27.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/kurta/0/0/m/xxl-kurti-503-gujari-original-imag883u7gk4demr.jpeg?q=70"],
                        sellingPrice: "2399",
                        disPrice: "975",
                        disPrsent: "59%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4003A85",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Straight Kurta  (Light Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqpj4i80/kurta/j/h/8/xl-ku632lgn-mokshi-original-imag4nmvvfny6vyf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqpj4i80/kurta/y/l/s/xl-ku632lgn-mokshi-original-imag4nmvsfqjcnsf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqpj4i80/kurta/c/0/x/xl-ku632lgn-mokshi-original-imag4nmvjdjcjp8h.jpeg?q=70"],
                        sellingPrice: "2399",
                        disPrice: "755",
                        disPrsent: "68%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4002A85",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Women Floral Print Viscose Rayon Anarkali Kurta  (Black)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/s/8/q/xl-j903066brygbk-jollity-original-imag92nn6c2ukk77.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/l/y/u/xl-j903066brygbk-jollity-original-imag92nnynctsyxf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/a/c/m/xl-j903066brygbk-jollity-original-imag92nn4hzhghzu.jpeg?q=70"],
                        sellingPrice: "2399",
                        disPrice: "780",
                        disPrsent: "67%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKARRL4001A84",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Straight Kurta  (Yellow)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/j/o/s/l-j903066brygbk-jollity-original-imagbwygavnkq7wc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/5/n/l-j903066brygbk-jollity-original-imagbwygpv3cfyhz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/a/w/i/l-j903066brygbk-jollity-original-imagbwygz7fnecwz.jpeg?q=70"],
                        sellingPrice: "1763",
                        disPrice: "703",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYSENC02A275",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Deily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },


                ],
            },
            {
                title: "MidLength Kurtis",
                Productlist: [
                    {
                        title: "Women Printed Cotton Blend Anarkali Kurta  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/d/x/h/3xl-rp055-summer-printed-kurti-rajpari-original-imafvw679afxschr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/u/c/q/3xl-rp055-summer-printed-kurti-rajpari-original-imafvw67xawzjtnh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/z/w/t/3xl-rp055-summer-printed-kurti-rajpari-original-imafvw67r2nmbcfh.jpeg?q=70"],
                        sellingPrice: "3219",
                        disPrice: "2575",
                        disPrsent: "20%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMALX1604A223",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "cotton"
                        }
                    },

                    {
                        title: "Women Printed Cotton Blend Straight Kurta  (Multicolor)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/c/5/s/xl-rp057-printed-cotton-kurti-rajpari-original-imafvw6evrnr8ypc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/i/e/c/xl-rp057-printed-cotton-kurti-rajpari-original-imafvw6eur8k9c3q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/y/j/y/xl-rp057-printed-cotton-kurti-rajpari-original-imafvw6erchdfdgr.jpeg?q=70"],
                        sellingPrice: "3244",
                        disPrice: "2595",
                        disPrsent: "20%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRAR01004A187",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Regular Wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Women Printed Cotton Blend Straight Kurta  (Multicolor)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/u/r/n/3xl-rp053-printed-cotton-kurti-rajpari-original-imafvw6cjb63frzd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/i/x/6/3xl-rp053-printed-cotton-kurti-rajpari-original-imafvw6chf9xcsxd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kffq2kw0-0/kurta/d/2/e/3xl-rp053-printed-cotton-kurti-rajpari-original-imafvw6crvqspzmb.jpeg?q=70"],
                        sellingPrice: "2575",
                        disPrice: "1030",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAAL2002A140",
                            idealFor: "Women",
                            packOf: "1(Kurti + Bottom + Dupatta)",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Women Embroidered Pure Cotton Straight Kurta  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l3lx8cw0/shopsy-kurta/4/l/3/xl-gl69-sh-glory-original-imagep2fhxyggjz4.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3lx8cw0/shopsy-kurta/c/h/b/xl-gl69-sh-glory-original-imagep2fzqdx3a9f.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3lx8cw0/shopsy-kurta/z/p/4/xl-gl69-sh-glory-original-imagep2fpbn8wsmb.jpeg?q=70"],
                        sellingPrice: "1975",
                        disPrice: "790",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAGYVL35004A138",
                            idealFor: "Women",
                            packOf: "1(Kurti + Bottom)",
                            occasion: "Festive, Party wear",
                            fabric: "Sub Linen striped"
                        }
                    },
                    {
                        title: "Women Self Design Cotton Blend Straight Kurta  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/k1jlyfk0/kurta/d/q/x/m-skt-1139-blue-sukriti-original-imaf3ngb23fbkhzk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k1jlyfk0/kurta/d/q/x/m-skt-1139-blue-sukriti-original-imaf3ngcyumhc2z7.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k1jlyfk0/kurta/d/q/x/m-skt-1139-blue-sukriti-original-imaf3ng6gzhnr7g5.jpeg?q=70"],
                        sellingPrice: "2050",
                        disPrice: "820",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAGYVL35003A137",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "1(Kurti + Bottom)"
                        }
                    },


                ],
            },
            {
                title: "Bollywood Collections",
                Productlist: [
                    {
                        title: "Printed, Digital Print Bollywood Satin Saree  (White)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                        sellingPrice: "2624",
                        disPrice: "975",
                        disPrsent: "62%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSJMFPA16",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Embroidered Bollywood Pure Silk Saree  (Multicolor)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/o/v/r/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfsyrasu2g.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/s/v/m/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfkfshe3ew.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/2/r/n/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfs2arhj8p.jpeg?q=70"],
                        sellingPrice: "2628",
                        disPrice: "1456",
                        disPrsent: "44%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSVIC77201A01",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin chiffon"
                        }
                    },


                ],
            },
            {
                title: "Short Tops",
                Productlist: [
                    {
                        title: "Casual Flared Sleeves Printed Women Green Top",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kp8ntzk0/top/l/l/f/m-00128-top-dl-fashion-original-imag3gr4he5twhw3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kp8ntzk0/top/p/k/j/m-00128-top-dl-fashion-original-imag3gr45bhfwy68.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kp8ntzk0/top/g/v/w/m-00128-top-dl-fashion-original-imag3gr4uzh8fzw3.jpeg?q=70"],
                        sellingPrice: "1974",
                        disPrice: "545",
                        disPrsent: "72%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145449A121",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },

                    {
                        title: "Casual Regular Sleeves Printed Women Light Green Top",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kox8b680/top/a/d/p/xxl-dmp314-dmp-fashion-original-imag39p56ztgwshs.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kox8b680/top/5/a/b/xxl-dmp314-dmp-fashion-original-imag39p5xeuhhxec.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kox8b680/top/o/t/l/xxl-dmp314-dmp-fashion-original-imag39p5haygrmur.jpeg?q=70"],
                        sellingPrice: "1799",
                        disPrice: "597",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145445A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Casual Regular Sleeves Printed Women Light black Top",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/ks0onm80/kurta/o/m/t/4xl-dmpa319-dmp-fashion-original-imag5zfb8scbxhgj.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ks0onm80/kurta/g/7/2/4xl-dmpa319-dmp-fashion-original-imag5zfb79ucthzf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ks0onm80/kurta/j/x/9/4xl-dmpa319-dmp-fashion-original-imag5zfb82pmvqyg.jpeg?q=70"],
                        sellingPrice: "1899",
                        disPrice: "595",
                        disPrsent: "68%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145456A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Casual Puff Sleeves Solid Women Pink Top",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l01blow0/top/f/u/n/xl-gr6245-pink-harpa-original-imagbwnhhefucc6j.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l01blow0/top/u/o/7/xl-gr6245-pink-harpa-original-imagbwnhpadtw6sg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l01blow0/top/v/w/8/xl-gr6245-pink-harpa-original-imagbwnhtgtztsny.jpeg?q=70"],
                        sellingPrice: "1210",
                        disPrice: "605",
                        disPrsent: "50%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV1454442A116",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },
                    {
                        title: "Casual Puff Sleeves Printed Women Blue Top",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqco5u80/top/k/d/2/xxl-plttp22blue-pretty-loving-thing-original-imag4dhxdmvzncua.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqco5u80/top/6/o/i/xxl-plttp22blue-pretty-loving-thing-original-imag4dhxzwhhkjbz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqco5u80/top/c/1/i/xxl-plttp22blue-pretty-loving-thing-original-imag4dhxmdf5ayya.jpeg?q=70"],
                        sellingPrice: "1999",
                        disPrice: "499",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145447A119",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Reyon"
                        }
                    },


                ],
            },
            {
                title: "Dresses",
                Productlist: [
                    {
                        title: "Women A-line Blue Dress",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjabs7k0-0/dress/0/m/j/l-maxi-dress-sky-blue-maa-fab-original-imafyvtqkhwy5kw7.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjabs7k0-0/dress/p/t/2/l-maxi-dress-sky-blue-maa-fab-original-imafyvtqdfkjetvx.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjabs7k0-0/dress/n/v/l/l-maxi-dress-sky-blue-maa-fab-original-imafyvtqzjm8zgfn.jpeg?q=70"],
                        sellingPrice: "1999",
                        disPrice: "779",
                        disPrsent: "61%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKWEST379A414",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Crepe"
                        }
                    },

                    {
                        title: "Women Fit and Flare Multicolor Dress",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/m/n/n/l-maxi-dress-navyblue-yellow-line-maa-fab-original-imag6h7fz5vt5byr-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt1u3rk0/dress/0/d/h/s-maxi-dress-navyblue-yellow-line-maa-fab-original-imag6h7fhwmxgttu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt1u3rk0/dress/x/l/n/s-maxi-dress-navyblue-yellow-line-maa-fab-original-imag6h7fycbxmf7f.jpeg?q=70"],
                        sellingPrice: "3594",
                        disPrice: "2875",
                        disPrsent: "20%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKRYAALX4004A133",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Heavy pashmina cotton"
                        }
                    },
                    {
                        title: "Women Fit and Flare Blue Dress",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/e/a/p/s-pwd322-purshottam-wala-original-imagm6ywr7vz95sz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/7/l/3/s-pwd322-purshottam-wala-original-imagm6ywpygucx3g.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/f/w/w/s-pwd322-purshottam-wala-original-imagmddhtqzg9msr.jpeg?q=70"],
                        sellingPrice: "10139",
                        disPrice: "9125",
                        disPrsent: "10%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMELG213008A227",
                            idealFor: "Women",
                            packOf: "1(Kurti + Bottom + Dupatta)",
                            occasion: "Festive, Party wear",
                            fabric: "Soft georgette"
                        }
                    },
                    {
                        title: "Women Maxi Blue Dress",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-dress/r/9/m/xs-dks333-dk-fab-original-imag8zf6xefgrkfj.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvvad8w0/kurta/e/n/c/m-pw333-purshottam-wala-original-imag8zf6vbjhytyr.jpeg?q=70"],
                        sellingPrice: "5920",
                        disPrice: "1184",
                        disPrsent: "80%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMPAL6007A212",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Soft tepeta silk"
                        }
                    },
                    {
                        title: "Women Ethnic Dress Black Dress",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/q/7/v/s-pwd322-purshottam-wala-original-imagm7ypaavduvnm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/w/z/a/s-pwd322-purshottam-wala-original-imagm7ypp8g7r9mk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/1/2/o/s-pwd322-purshottam-wala-original-imagm7ypjvj7pwre.jpeg?q=70wws"],
                        sellingPrice: "3576",
                        disPrice: "1400",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHKVAMPAL6008A213",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Soft tepeta silk"
                        }
                    },


                ],

            },
            {
                title: "Netted Lehengas",
                Productlist: [
                    {
                        title: "Printed Stitched Lehenga & Crop Top  (Brown)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/v/9/i/free-short-sleeve-rang-barse-royalwish-original-imag6jkgqheb5stu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l2hwwi80/shopsy-lehenga-choli/3/r/g/free-short-sleeve-stitched-42-rangbarse-wine-lehenga-choli-dishu-original-imagdtg4uyyjbydt.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l1l1rww0/shopsy-lehenga-choli/e/v/v/free-short-sleeve-42-semi-stitched-rangbarse-wine-lehenga-choli-original-imagd4af86hm9djz.jpeg?q=70"],
                        sellingPrice: "21549",
                        disPrice: "6500",
                        disPrsent: "69%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGCK8A517",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain"
                        }
                    },
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (brown)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/p/s/a/free-short-sleeve-pritam-lehenga-kr-royalwish-original-imaggggkqzevzvvv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/h/n/q/free-short-sleeve-pritam-lehenga-kr-royalwish-original-imaggggkntwtjwhp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/t/s/h/free-short-sleeve-pritam-lehenga-kr-royalwish-original-imaggggknz6qghdm.jpeg?q=70"],
                        sellingPrice: "20856",
                        disPrice: "12512",
                        disPrsent: "39%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGCHK2A511",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain"
                        }
                    },
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Red, Gold)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/i/e/z/free-short-sleeve-buke-krishna-royalwish-original-image87sn4q7pgcz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/q/w/o/free-short-sleeve-buke-krishna-royalwish-original-image87szwm5ayy4.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/i/e/z/free-short-sleeve-buke-krishna-royalwish-original-image87sn4q7pgcz.jpeg?q=70"],
                        sellingPrice: "7999",
                        disPrice: "4879",
                        disPrsent: "39%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGCK12AA521",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain"
                        }
                    },
                    {
                        title: "Embellished, Self Design Semi Stitched Lehenga Choli  (Orange)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l3ahpjk0/lehenga-choli/x/6/w/free-short-sleeve-kp-rahi-pooja-vegini-designer-original-imageg2ucyfpd7ym.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l45xea80/lehenga-choli/t/q/2/free-half-sleeve-pooja-opara-silk-lehngha-pure-net-lehngha-for-original-imagf4a2cdxaqrdr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l45xea80/lehenga-choli/3/0/b/free-half-sleeve-pooja-opara-silk-lehngha-pure-net-lehngha-for-original-imagf4a2hfp5vbfh.jpeg?q=70"],
                        sellingPrice: "6799",
                        disPrice: "2700",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGCK12CA523",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain"
                        }
                    },
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l3ahpjk0/lehenga-choli/t/k/c/free-short-sleeve-kp-rahi-pooja-vegini-designer-original-imageg27knk9j7ef.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3ahpjk0/lehenga-choli/r/w/q/free-short-sleeve-kp-rahi-pooja-vegini-designer-original-imageg27uafujmk4.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3ahpjk0/lehenga-choli/k/g/d/free-short-sleeve-kp-rahi-pooja-vegini-designer-original-imageg27ewnts6ga.jpeg?q=70"],
                        sellingPrice: "12210",
                        disPrice: "7570",
                        disPrsent: "38%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGCK4A513",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain"
                        }
                    },

                ],
            },
            {
                title: "Velvet Lehengas",
                Productlist: [
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Red, Gold)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l19m93k0/lehenga-choli/r/r/3/free-short-sleeve-sb-velentine-s-b-creation-original-imagcvdgh5ptkwuq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l19m93k0/lehenga-choli/e/0/n/free-short-sleeve-sb-velentine-s-b-creation-original-imagcvdg9q5n8drz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l19m93k0/lehenga-choli/r/r/3/free-short-sleeve-sb-velentine-s-b-creation-original-imagcvdgh5ptkwuq.jpeg?q=70"],
                        sellingPrice: "18010",
                        disPrice: "10806",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGHKEKA531",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Velvet",
                            LehengaBlouseFabric: "Velvet"
                        }
                    },
                    {
                        title: "Embellished, Self Design Semi Stitched Lehenga Choli  (Black)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/ky0g58w0/lehenga-choli/s/4/a/free-full-sleeve-fl-105-jsitaliya-original-imagac3gdzdwy4zx.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ky0g58w0/lehenga-choli/s/b/g/free-full-sleeve-fl-105-jsitaliya-original-imagac3geg5mghbx.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ky0g58w0/lehenga-choli/s/4/a/free-full-sleeve-fl-105-jsitaliya-original-imagac3gdzdwy4zx.jpeg?q=70"],
                        sellingPrice: "18132",
                        disPrice: "4900",
                        disPrsent: "72%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGHKROSEA542",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Velvet",
                            LehengaBlouseFabric: "Velvet"
                        }
                    },
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Red)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/lehenga-choli/j/3/8/free-3-4-sleeve-me-25-henzoriz-original-imafzfr5hf4k79kz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/lehenga-choli/u/x/g/free-3-4-sleeve-me-25-henzoriz-original-imafzfr5zysash9y.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/lehenga-choli/j/3/8/free-3-4-sleeve-me-25-henzoriz-original-imafzfr5hf4k79kz.jpeg?q=70"],
                        sellingPrice: "16999",
                        disPrice: "10199",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGHKSINA546",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Velvet",
                            LehengaBlouseFabric: "Velvet"
                        }
                    },
                    {
                        title: "Embellished, Self Design Semi Stitched Lehenga Choli  (Purple)   ",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxz0pe80/lehenga-choli/q/v/4/free-full-sleeve-fl-105-jsitaliya-original-imagabc86hjydgxz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxz0pe80/lehenga-choli/f/s/r/free-full-sleeve-fl-105-jsitaliya-original-imagabc8fg9xqzjg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxz0pe80/lehenga-choli/q/v/4/free-full-sleeve-fl-105-jsitaliya-original-imagabc86hjydgxz.jpeg?q=70"],
                        sellingPrice: "15275",
                        disPrice: "4800",
                        disPrsent: "68%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGHKROSHA543",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Velvet",
                            LehengaBlouseFabric: "Velvet"
                        }
                    },
                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Maroon)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/lehenga-choli/i/y/z/free-half-sleeve-01-maroon-jfm-original-imagaa6sz8vsgcsr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kql8sy80/lehenga-choli/j/v/b/free-short-sleeve-hot-lady-maroon-marziyaa-original-imag4kgrqazewkyb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/lehenga-choli/i/y/z/free-half-sleeve-01-maroon-jfm-original-imagaa6sz8vsgcsr.jpeg?q=70"],
                        sellingPrice: "25389",
                        disPrice: "7400",
                        disPrsent: "70%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHLGCK11A520",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Velvet",
                            LehengaBlouseFabric: "Velvet"
                        }
                    },


                ],
            },
            {
                title: "Forml Shirts",
                Productlist: [
                    {
                        title: "Men Regular Fit Solid Spread Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/q/2/v/m-hm-shirt02-hanumntra-original-imaftd53zzeqchzy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/e/z/f/m-hm-shirt02-hanumntra-original-imaftd53bxwy8qqf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/y/i/v/m-hm-shirt02-hanumntra-original-imaftd53fdzp64mt.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            shirtsFabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/f/7/v/l-frml-st2-vebnor-original-imag6apmq69vfxqz.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Royon",


                        }
                    },



                    {
                        title: "Men Slim Fit Solid Spread Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/2/e/c/l-hlsh013040-highlander-original-imagajukzaxnfqqk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/n/7/j/l-hlsh013040-highlander-original-imagajukcubp7ggq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/f/6/b/l-hlsh013040-highlander-original-imagajukjsgtdqwe.jpeg?q=70"],
                        sellingPrice: "1893",
                        disPrice: "1445",
                        disPrsent: "21%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSC4A448",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/1/m/x/l-check1195-tanip-original-image85eukssmgkg.jpeg?q=70"],
                        sellingPrice: "1349",
                        disPrice: "455",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBCLRSTP9A453",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Regular Fit Checkered Mandarin Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/y/p/i/xxl-pink-sws4125-allan-peter-original-imag4tkbdasb7u5v.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/j/f/e/xxl-pink-sws4125-allan-peter-original-imag4tkbzetqdhqv.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "245",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSSLASHBOXA465",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },



                    {
                        title: "Men Regular Fit Solid Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/p/j/8/40-rmsx12365-b5-raymond-original-imagnbzgksdhc7xp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/r/40-rmsx12365-b5-raymond-original-imagnbzgrtpctwup.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/e/p/40-rmsx12365-b5-raymond-original-imagnbzgfvghbzug.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "529",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSLABLBOXCHDA466",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                ],
            },
            {
                title: "Casual Shirts",
                Productlist: [
                    {
                        title: "Men Regular Fit Solid Spread Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/q/2/v/m-hm-shirt02-hanumntra-original-imaftd53zzeqchzy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/e/z/f/m-hm-shirt02-hanumntra-original-imaftd53bxwy8qqf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/y/i/v/m-hm-shirt02-hanumntra-original-imaftd53fdzp64mt.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        SoldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/f/7/v/l-frml-st2-vebnor-original-imag6apmq69vfxqz.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Royon",


                        }
                    },



                    {
                        title: "Men Slim Fit Solid Spread Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/2/e/c/l-hlsh013040-highlander-original-imagajukzaxnfqqk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/n/7/j/l-hlsh013040-highlander-original-imagajukcubp7ggq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/f/6/b/l-hlsh013040-highlander-original-imagajukjsgtdqwe.jpeg?q=70"],
                        sellingPrice: "1893",
                        disPrice: "1445",
                        disPrsent: "21%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSC4A448",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/1/m/x/l-check1195-tanip-original-image85eukssmgkg.jpeg?q=70"],
                        sellingPrice: "1349",
                        disPrice: "455",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBCLRSTP9A453",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Regular Fit Checkered Mandarin Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/y/p/i/xxl-pink-sws4125-allan-peter-original-imag4tkbdasb7u5v.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/j/f/e/xxl-pink-sws4125-allan-peter-original-imag4tkbzetqdhqv.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "245",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSSLASHBOXA465",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",



                        }
                    },



                    {
                        title: "Men Regular Fit Solid Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/p/j/8/40-rmsx12365-b5-raymond-original-imagnbzgksdhc7xp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/r/40-rmsx12365-b5-raymond-original-imagnbzgrtpctwup.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/e/p/40-rmsx12365-b5-raymond-original-imagnbzgfvghbzug.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "529",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSLABLBOXCHDA466",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",



                        }
                    }

                ],
            },
            {
                title: "Trousers",
                Productlist: [
                    {
                        title: "Men Slim Fit Green Cotton Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/klscivk0/trouser/t/1/k/28-sktr-4242-olv-fubar-original-imagyuffe3pbk4dc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l15bxjk0/shopsy-trouser/v/b/a/28-shoptr-2121-olive-casual-trousers-fubar-original-imagcrshh34wmnze.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Black Cotton Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/ksgehzk0/trouser/k/2/q/32-cyfor-a-cyphus-original-imag6yyyedypgvke.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ksgehzk0/trouser/0/z/n/32-cyfor-a-cyphus-original-imag6yyycmzxqqp2.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ksgehzk0/trouser/d/g/r/32-cyfor-a-cyphus-original-imag6yyy4uygkbz6.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    }


                ],
            },
            {
                title: "Jeans",
                Productlist: [
                    {
                        title: "Boys Slim Mid Rise Grey Jeans",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/jean/2/x/b/13-14-years-junhpsjoggerboy-lgrey-urbano-juniors-original-imafpm83zszw3dfn-bb.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/2/x/b/11-12-years-junhpsjoggerboy-lgrey-urbano-juniors-original-imafpm83dvrbrrby.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/2/x/b/13-14-years-junhpsjoggerboy-lgrey-urbano-juniors-original-imafpm83qjymaywf.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Low Rise Blue Jeans",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/jean/g/j/b/32-wmjn004806-wrangler-original-imaggyry9nrug5tr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/jean/j/c/n/32-wmjn004806-wrangler-original-imaggyrymkvjg3vs.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/jean/i/h/h/32-wmjn004806-wrangler-original-imaggyrygecmjmhf.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },


                ],
            },
            {
                title: "Popcorn Pants",
                Productlist: [
                    {
                        title: "Slim Fit Men Pure Cotton Dark Green Pure Cotton Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/m/k/l/32-4way-20-grandstitch-original-imaggqhxhu8tk2dy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/e/3/z/32-4way-20-grandstitch-original-imaggqhxpqr3yvfp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/8/p/k/32-4way-20-grandstitch-original-imaggqhxk5wgmf6y.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Fit Light Blue Viscose Rayon Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/y/v/q/28-4way-22-grandstitch-original-imaggqhytz6gebmm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/u/2/2/28-4way-22-grandstitch-original-imaggqhyfdrunzyw.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/0/k/r/28-4way-22-grandstitch-original-imaggqhyreyhcsg2.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },


                ],
            },
            {
                title: "Lycra Pants",
                Productlist: [
                    {
                        title: "Men Slim Fit Light Blue Lycra Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/i/v/k/34-lycra001-online-cloth-khazana-original-imaghdg7dnetsgmt.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/8/l/7/32-g-1-gaumukhi-creation-original-imaghdg75k8swyfe.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/r/t/f/32-g-1-gaumukhi-creation-original-imaghdg7x2pjthv8.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Slim Fit Black Lycra Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/trouser/x/b/e/30-a1-aclass-original-imagehhhcuztyw5h.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/trouser/v/r/e/30-a1-aclass-original-imagehhhnzjtgfd3.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l3hmwsw0/trouser/w/h/q/30-a1-aclass-original-imagehhhfwexnzqy.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },


                ],
            },
            {
                title: "Formal Pants",
                Productlist: [
                    {
                        title: "Men Slim Fit Grey Viscose Rayon Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/w/o/a/34-22a4ctwb1019i901-united-colors-of-benetton-original-imagjs7hqygaqsze.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/w/o/x/34-22a4ctwb1019i901-united-colors-of-benetton-original-imagjs7hz4gg2q9j.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/e/h/m/34-22a4ctwb1019i901-united-colors-of-benetton-original-imagjs7hcdtfyneg.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBPPCS452",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Grey Cotton Blend Trousers",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kkprmvk0/trouser/i/z/s/32-pmtx06279-b9-park-avenue-original-imagyyfpupwjay7z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kkprmvk0/trouser/j/s/x/32-pmtx06279-b9-park-avenue-original-imagyyfptzfynfhr.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kkprmvk0/trouser/v/v/t/32-pmtx06279-b9-park-avenue-original-imagyyfpm5tjzeyk.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            fabric: "Royon",


                        }
                    },
                ],
            },
            {
                title: "Sarees",
                Productlist: [
                    {
                        title: "Printed, Digital Print Bollywood Satin Saree  (White)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                        sellingPrice: "2624",
                        disPrice: "975",
                        disPrsent: "62%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSJMFPA16",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Satin"
                        }
                    },

                    {
                        title: "Woven Bollywood Cotton Silk Saree  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                        sellingPrice: "2799",
                        disPrice: "1100",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSKC77721A29",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive,Party wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Embroidered Chanderi Chanderi Saree  (Yellow)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/l/s/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjnguhntzm.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/1/f/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbj2gdw2vts.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/x/1/q/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjh3bys7br.jpeg?q=70"],
                        sellingPrice: "2499",
                        disPrice: "1245",
                        disPrsent: "50%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSANU78781A30",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Function Wear",
                            fabric: "Cotton"
                        }
                    },

                    {
                        title: "Printed Bollywood Chiffon Saree  (Orange, Yellow)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/o/v/r/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfsyrasu2g.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/s/v/m/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfkfshe3ew.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/2/r/n/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfs2arhj8p.jpeg?q=70"],
                        sellingPrice: "2628",
                        disPrice: "1456",
                        disPrsent: "44%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSLSVIC77201A01",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Satin chiffon"
                        }
                    },

                    {
                        title: "Woven Kanjivaram Silk Blend Saree  (Purple)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/d/o/3/free-pure-ch-314-marvosa-unstitched-original-imag9zxz2apgu7dn.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/w/b/0/free-pure-ch-314-marvosa-unstitched-original-imag9zxzrfh2bpw8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxkqavk0/sari/o/n/h/free-pure-ch-314-marvosa-unstitched-original-imag9zxzqpsvfgkw.jpeg?q=70"],
                        sellingPrice: "4024",
                        disPrice: "1375",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-Stock",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL', 'XXL'
                        ],
                        ProductDetails: {
                            productCode: "SHSORCH2A24",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Festive, Party wear",
                            fabric: "Viscose saree"
                        }
                    },

                ],
            },
            {
                title: "Kurtis",
                Productlist: [
                    {
                        title: "Women Printed, Solid Cotton Rayon Anarkali Kurta  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/a/k/s/l-black-simple-syndrella-original-imagmycwgzgn3hyz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/r/x/b/l-black-simple-syndrella-original-imagmycwaxeqpmf8.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/6/6/4/l-black-simple-syndrella-original-imagmycwaahzm7h5.jpeg?q=70"
                        ],
                        sellingPrice: "1974",
                        discountPrice: "545",
                        dicPrsent: "72%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYV145449A121",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Embroidered Viscose Rayon Straight Kurta  (Pink)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/kgzg8sw0-0/trouser/o/v/c/xxl-vna1000858-vishudh-original-imafx3zbspsydyv9.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kialrww0-0/kurta/v/2/z/xl-vnku010655-vishudh-original-imafy4bjhsc7zgnt.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kialrww0-0/kurta/g/k/n/xl-vnku010655-vishudh-original-imafy4bjwgathxp6.jpeg?q=70"
                        ],
                        sellingPrice: "1799",
                        disPrice: "597",
                        disPrsent: "66%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145445A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Chikan Embroidery Cotton Rayon A-line Kurta  (Purple)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/n/9/o/xl-ang2101-lav-angita-original-imag25u9fshxuhfv.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/f/d/m/xl-ang2101-lav-angita-original-imag25u9pjgskhah.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/knhsgi80/kurta/3/e/7/xl-ang2101-lav-angita-original-imag25u9vczebvp3.jpeg?q=70"
                        ],
                        sellingPrice: "2499",
                        disPrice: "497",
                        disPrsent: "80%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145446A118",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: " Rayon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Ethnic Dress  (Black)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/ky3b0y80/kurta/7/h/e/s-nsg-358-saabhi-original-imagaekrf8uqbs2s.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ky3b0y80/kurta/a/1/3/s-nsg-358-saabhi-original-imagaekrhj2vjthu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/ky3b0y80/kurta/k/z/v/s-nsg-358-saabhi-original-imagaekrkedmuvdt.jpeg?q=70"
                        ],
                        sellingPrice: "2999",
                        disPrice: "427",
                        disPrsent: "85%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145442A116",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                    {
                        title: "Women Printed Viscose Rayon Straight Kurta  (Blue)",
                        Image: [
                            "https://rukminim1.flixcart.com/image/832/832/k6ci8i80/kurti/h/a/d/m-si-blu-si-and-ku-fabrics-original-imafzzz82hn62xgu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7gikcw0/kurta/q/3/x/xl-8072mj-blue-libas-original-imafpz7gswhmfgpd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/k7gikcw0/kurta/q/3/x/xs-8072mj-blue-libas-original-imafpz7gfcwmrusa.jpeg?q=70"
                        ],
                        sellingPrice: "1999",
                        disPrice: "499",
                        dicPrsent: "75%",
                        soldBy: "SHOPPEN",
                        Status: "In-Stock",
                        COD: "Available",
                        quantity: "1",
                        Size: [
                            'S', 'M', 'L', 'XL'
                        ],
                        ProductDetails: {
                            productCode: "SHKYTV145447A119",
                            idealFor: "Women",
                            packOf: "1",
                            occasion: "Daily wear, Casual wear",
                            fabric: "Rayon"
                        }
                    },
                ],
            },
            {
                title: "Lehengas",
                Productlist: [
                    {
                        title: "Self Design Semi Stitched Lehenga Choli  (Pink)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/1/n/f/free-half-sleeve-l104-foriox-original-imag9yhyeqmczzws.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/i/u/a/free-half-sleeve-l104-foriox-original-imag9yhym6sya9qd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/g/b/h/free-half-sleeve-l104-foriox-original-imag9yhy4fzv9kny.jpeg?q=70"],
                        sellingPrice: "21549",
                        disPrice: "6500",
                        disPrsent: "69%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGHK8A517",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",

                        }
                    },

                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/r/h/a/free-sleeveless-l8097-fashionuma-original-imag6hxfawazw8yd.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/q/w/o/free-sleeveless-l8097-fashionuma-original-imag6hxfrtc4v8zz.jpeg?q=70"],
                        sellingPrice: "14904",
                        disPrice: "8942",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKGHUA532",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Vrlvet ",
                            LehengaBlouseFabric: " Vrlvet",

                        }
                    },

                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Green)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/b/z/l/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsk8rz92aq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/o/l/c/free-sleeveless-fidera-organza-fabcartz-original-imagfgrsxfnqphjf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/lehenga-choli/s/e/m/free-sleeveless-fidera-organza-fabcartz-original-imagfgrscrfk2sda.jpeg?q=70"],
                        sellingPrice: "22172",
                        disPrice: "13305",
                        disPrsent: "40%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKANOA525",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: " Vrlvet",

                        }
                    },


                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Purple)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/o/m/e/free-3-4-sleeve-future-wine-goroly-original-imag5ezd4rkawhxq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/t/w/l/free-3-4-sleeve-future-wine-goroly-original-imag5ezdgm3dumzv.jpeg?q=70"],
                        sellingPrice: "24024",
                        disPrice: "7800",
                        disPrsent: "67%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCKMAYUA541",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: " Vrlvet",
                            LehengaBlouseFabric: "Vrlvet ",
                        }
                    },

                    {
                        title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/r/f/w/free-sleeveless-zip1434-zinariya-fab-original-imagnftyr5e7aadz.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/v/4/e/free-sleeveless-zip1434-zinariya-fab-original-imagnftyksxk8gec.jpeg?q=70"],
                        sellingPrice: "6799",
                        disPrice: "2700",
                        disPrsent: "60%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK12CA523",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",
                        }
                    },

                    {
                        title: "Embroidered Semi Stitched Lehenga Choli  (Grey)",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/v/v/m/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryhq3gpupc.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kvba7bk0/lehenga-choli/n/a/y/free-half-sleeve-new-ruffle-designer-lehenga-cholis-for-indian-original-imag88ryg8pe4ehh.jpeg?q=70",],
                        sellingPrice: "12210",
                        disPrice: "7570",
                        disPrsent: "38%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHLGCK4A513",
                            idealFor: "Women",
                            packOf: "1",
                            LehengaFabric: "Netted stain",
                            LehengaBlouseFabric: "Netted stain",

                        }
                    },

                ],
            },
            {
                title: "Shirts",
                Productlist: [
                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/q/2/v/m-hm-shirt02-hanumntra-original-imaftd53zzeqchzy.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/e/z/f/m-hm-shirt02-hanumntra-original-imaftd53bxwy8qqf.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kc6jyq80/shirt/y/i/v/m-hm-shirt02-hanumntra-original-imaftd53fdzp64mt.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "510",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            ProductCode: "SHSTYBPPCS452",
                            IdealFor: "men",
                            PackOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                    {
                        title: "Men Regular Fit Solid Button Down Collar Formal Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/f/7/v/l-frml-st2-vebnor-original-imag6apmq69vfxqz.jpeg?q=70"],
                        sellingPrice: "1299",
                        disPrice: "450",
                        disPrsent: "65%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBMP1A445",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Royon",


                        }
                    },



                    {
                        title: "Men Regular Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/2/e/c/l-hlsh013040-highlander-original-imagajukzaxnfqqk.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/n/7/j/l-hlsh013040-highlander-original-imagajukcubp7ggq.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kyag87k0/shirt/f/6/b/l-hlsh013040-highlander-original-imagajukjsgtdqwe.jpeg?q=70"],
                        sellingPrice: "1893",
                        disPrice: "1445",
                        disPrsent: "21%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSC4A448",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/1/m/x/l-check1195-tanip-original-image85eukssmgkg.jpeg?q=70"],
                        sellingPrice: "1349",
                        disPrice: "455",
                        disPrsent: "66%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBCLRSTP9A453",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },




                    {
                        title: "Men Regular Fit Checkered Mandarin Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/h/p/u/xxl-pink-sws4125-allan-peter-original-imag4tkbnaxgtq8z.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/y/p/i/xxl-pink-sws4125-allan-peter-original-imag4tkbdasb7u5v.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/kqwobrk0/shirt/j/f/e/xxl-pink-sws4125-allan-peter-original-imag4tkbzetqdhqv.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "245",
                        disPrsent: "75%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSSLASHBOXA465",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },



                    {
                        title: "Men Regular Fit Solid Spread Collar Casual Shirt",
                        Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/p/j/8/40-rmsx12365-b5-raymond-original-imagnbzgksdhc7xp.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/9/d/r/40-rmsx12365-b5-raymond-original-imagnbzgrtpctwup.jpeg?q=70",
                            "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/o/e/p/40-rmsx12365-b5-raymond-original-imagnbzgfvghbzug.jpeg?q=70"],
                        sellingPrice: "999",
                        disPrice: "529",
                        disPrsent: "48%",
                        soldBy: "SHOPPEEN",
                        COD: "Available",
                        Status: "In-stock",
                        quantity: " + 1 -",
                        Size: ["S", "M", "L", "XL", "XXL"],
                        ProductDetails: {
                            productCode: "SHSTYBSLABLBOXCHDA466",
                            idealFor: "men",
                            packOf: "1",
                            occasion: "Daily Wear,casual wear",
                            ShirtsFabric: "Cotton",


                        }
                    },


                ],
            }

        ]
    }
]

const Westerndresscollections = [
    {
        title: "Western dress collections",
        Productlist: [
            {
                title: "Women Fit and Flare Yellow Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyxb9u80/dress/l/w/n/s-ddc-0022-dream-cloth-original-imagbfu4brtgyfvg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyxb9u80/dress/d/y/x/s-ddc-0022-dream-cloth-original-imagbfu4g7urr4pg.jpeg?q=70"],
                sellingPrice: "1999",
                disPrice: "499",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWWEST380A415",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Women Maxi Red Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/j7p2tu80/dress/n/d/a/free-rd520-01-ritu-designs-original-imaemzkfak6rgfuf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/j7p2tu80/dress/n/d/a/free-rd520-01-ritu-designs-original-imaemzkftzyd3gwj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/j7p2tu80/dress/n/d/a/free-rd520-01-ritu-designs-original-imaemzkggss7razf.jpeg?q=70"],
                sellingPrice: "2499",
                disPrice: "1660",
                disPrsent: "33%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST378A413",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Women Fit and Flare Blue Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/h/i/3/xxl-women-middi-zeshe-meshe-original-imagmcacupgwygwc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/w/i/7/xxl-women-middi-zeshe-meshe-original-imagmcacbqu5cufz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/i/i/c/xxl-women-middi-zeshe-meshe-original-imagmcacezd3ry3w.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "499",
                disPrsent: "50%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST379A414",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Crepe"
                }
            },
            {
                title: "Women Fit and Flare Green Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l16rde80/dress/h/d/i/s-nvc270-stiped-midi-green-mon-fashion-collection-original-imagcshcgacqdkc7.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l16rde80/dress/w/s/h/l-nvc270-stiped-midi-green-mon-fashion-collection-original-imagcshcnzamnht6.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l16rde80/dress/w/f/u/s-nvc270-stiped-midi-green-mon-fashion-collection-original-imagcshczgg4qk87.jpeg?q=70"],
                sellingPrice: "1999",
                disPrice: "499",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWESTT377A412",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Women Maxi Red, White Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kwxv98w0/dress/u/a/o/s-gmlr087-g-m-collections-original-imag9g4ntwgyhuu6.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/128/128/kwxv98w0/dress/b/9/m/s-gmlr087-g-m-collections-original-imag9g4nzw2vvxyn.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/128/128/kwxv98w0/dress/o/d/s/s-gmlr087-g-m-collections-original-imag9g4nuvyyhyp4.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "599",
                disPrsent: "40%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST371A409",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Women A-line Maroon Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kcrzki80/dress/e/f/2/xs-lr790-maroon-g-m-collections-original-imafttb7jssqyewv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kcrzki80/dress/e/f/2/m-lr790-maroon-g-m-collections-original-imafttb74hvy3a9t.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kcrzki80/dress/e/f/2/m-lr790-maroon-g-m-collections-original-imafttb7gfzpnhgc.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "599",
                disPrsent: "53%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST373A411",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Chiffon satin"
                }
            },
            {
                title: "Women A-line Maroon Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kcrzki80/dress/e/f/2/xs-lr790-maroon-g-m-collections-original-imafttb7jssqyewv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kcrzki80/dress/e/f/2/m-lr790-maroon-g-m-collections-original-imafttb74hvy3a9t.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kcrzki80/dress/e/f/2/m-lr790-maroon-g-m-collections-original-imafttb7gfzpnhgc.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "599",
                disPrsent: "53%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST373A411",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "satin"
                }
            },
            {
                title: "Women Fit and Flare Pink Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/o/x/k/l-women-middi-zeshe-meshe-original-imagmcadbvgtz8xp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/z/p/g/l-women-middi-zeshe-meshe-original-imagmcadujfdguvh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/x/o/e/l-women-middi-zeshe-meshe-original-imagmcadnkgycywr.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "499",
                disPrsent: "50%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST382A416",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Crepe"
                }
            },
            {
                title: "Women Fit and Flare Pink Dress",
                Image: ["https://rukminim1.flixcart.com/image/128/128/xif0q/dress/p/s/w/s-women-middi-zeshe-meshe-original-imagmcachkcnkg8q.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/r/m/h/s-women-middi-zeshe-meshe-original-imagmcacqhjvxm7g.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/o/6/k/l-mehendi-colour-solid-mid-length-dress-for-women-shama-original-imagmng8v5ktfrrf.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "499",
                disPrsent: "50%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST382A416",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Crepe"
                }
            },
            {
                title: "Women Skater White Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/k65d18w0/dress/5/v/y/m-black-ak-fashion-original-imafgu2wpejsmanc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k65d18w0/dress/5/v/y/l-black-ak-fashion-original-imafgu2wzwr3dmgt.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/jykfxjk0/dress/j/z/r/xl-bczwd11-xl-new-latest-designer-party-wear-rayon-lygra-white-original-imafgqbmf95sdzsv.jpeg?q=70"],
                sellingPrice: "2665",
                disPrice: "498",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKWEST382A416",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear, Casual wear",
                    fabric: "Satin"
                }
            },












        ]
    }
]

const Specialsareecollections = [
    {
        title: "Special saree collections",
        Productlist: [
            {
                title: "Digital Print Bollywood Chiffon, Brasso Saree  (Orange)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/2/l/y/free-wedding-premium-quality-partywear-simple-plain-stylish-original-imagnfwrbs7qw4c9.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/4/w/c/free-wedding-premium-quality-partywear-simple-plain-stylish-original-imagnfwrfbcgp9xq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/3/k/1/free-wedding-premium-quality-partywear-simple-plain-stylish-original-imagnfwrvqsenchf.jpeg?q=70"],
                sellingPrice: "629",
                disPrice: "2999",
                disPrsent: "79%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANVASNV22001A09",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Printed, Floral Print, Paisley Bollywood Chiffon, Brasso Saree  (Black)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/d/z/6/free-wedding-partywear-fancy-plain-simple-stylish-new-latest-original-imaghtpzymbzchhh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/q/l/1/free-wedding-partywear-fancy-plain-simple-stylish-new-latest-original-imaghtpz83bqzhpq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/b/n/k/free-wedding-partywear-fancy-plain-simple-stylish-new-latest-original-imaghtpz7tezafdw.jpeg?q=70"],
                sellingPrice: "629",
                disPrice: "2499",
                disPrsent: "74%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANFALAK1002A11",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Woven Kanjivaram Jacquard, Art Silk Saree  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l4x2rgw0/sari/7/e/s/free-abha-swannah-unstitched-original-imagfpgbg6gruzcg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/4/w/o/free-shopsy-amisha-pan-02-benaifer-fashion-unstitched-original-imagkncxbw3ag54h.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/z/9/y/free-shopsy-amisha-pan-02-benaifer-fashion-unstitched-original-imagkncxbzb2bhpp.jpeg?q=70"],
                sellingPrice: "270",
                disPrice: "3499",
                disPrsent: "92%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANAMRITA1002A14",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "China chiffon"
                }
            },
            {
                title: "Woven Banarasi Silk Blend, Pure Silk Saree  (Purple)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/u/a/g/free-163-applix-style-unstitched-original-imagknhstgzser5x.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/d/6/p/free-shrushti-aryanari-unstitched-original-imagknhs5vdk9gfx.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/g/v/8/free-shrushti-aryanari-unstitched-original-imagknhss2esnrst.jpeg?q=70"],
                sellingPrice: "350",
                disPrice: "3299",
                disPrsent: "89%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANBEPA1002A04",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Vichitra silk"
                }
            },
            {
                title: "Printed, Self Design, Floral Print Kalamkari Silk Blend Saree  (Mustard)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/q/9/a/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf2yyqzestjazq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/q/9/a/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf2xzsrhqkwayr.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/q/9/a/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf2y27kgeazfc6.jpeg?q=70"],
                sellingPrice: "279",
                disPrice: "1749",
                disPrsent: "84%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANRAMYA1001A41",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Banarasi"
                }
            },
            {
                title: "Self Design Bollywood Satin Saree  (Black)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/k/x/9/free-elegant-premey-stitched-original-imaggdyynqasm4ug.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/o/v/k/free-elegant-premey-stitched-original-imaggdyypyfbgfa5.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/o/f/free-elegant-premey-stitched-original-imaggdyyuhtgpfwr.jpeg?q=70"],
                sellingPrice: "529",
                disPrice: "999",
                disPrsent: "47%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANANU1001A13",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Synthetic"
                }
            },
            {
                title: "Printed, Self Design, Floral Print Mysore Silk Blend Saree  (Red))",
                Image: ["https://rukminim1.flixcart.com/image/832/832/k547l3k0/sari/p/u/9/free-combosr-a-76023-ishin-original-imaf2yyahkjbu7qc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k547l3k0/sari/p/u/9/free-combosr-a-76023-ishin-original-imaf2y7wzsdduvzm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/s/k/s/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf3uk7q4t7ytht.jpeg?q=70"],
                sellingPrice: "287",
                disPrice: "1499",
                disPrsent: "80%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANFALAK1007A11",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Embellished Bollywood Georgette Saree  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/sari/c/v/v/free-bansi-aqua-blue-disha-fashion-unstitched-original-imagewjkzufkgcmg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/sari/c/h/x/free-bansi-aqua-blue-disha-fashion-unstitched-original-imagewjk9egmdvnj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/sari/h/u/a/free-bansi-aqua-blue-disha-fashion-unstitched-original-imagewjkr6emarc7.jpeg?q=70"],
                sellingPrice: "288",
                disPrice: "3999",
                disPrsent: "92%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANKAVYA1001A10",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },
            {
                title: "Embroidered Bollywood Chiffon Saree  (Dark Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kyoqmq80/sari/p/4/o/free-moti-the-gallery-shop-unstitched-original-imagavc5zz5azzcv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyoqmq80/sari/6/0/l/free-moti-the-gallery-shop-unstitched-original-imagavc5hsnw36zz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kxnl6kw0/sari/q/z/h/free-blue-moti-work-saree-mydoux-unstitched-original-imaga2ba4tu2hcqr.jpeg?q=70"],
                sellingPrice: "431",
                disPrice: "999",
                disPrsent: "56%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANFES1001A05",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Rayon"
                }
            },
            {
                title: "Digital Print Bollywood Chiffon, Brasso Saree  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/f/2/8/free-wedding-premium-quality-partywear-simple-plain-stylish-original-imagnfx7gvvg7wy9.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/v/y/l/free-wedding-premium-quality-partywear-simple-plain-stylish-original-imagnfx7zgqztg6b.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/g/d/z/free-wedding-premium-quality-partywear-simple-plain-stylish-original-imagnfx7cf3gr9dh.jpeg?q=70"],
                sellingPrice: "629",
                disPrice: "2999",
                disPrsent: "79%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANEMILIA1002A37",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Synthetic"
                }
            },
            {
                title: "Printed Mysore Art Silk Saree  (Grey)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kk5rgy80/sari/6/w/9/free-self17d10new-desirable-admirable-most-south-indian-bengali-original-imafzkh2vsrq7rhu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kk5rgy80/sari/3/d/r/free-self17d10new-desirable-admirable-most-south-indian-bengali-original-imafzkh2hreqcgmg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kk5rgy80/sari/u/7/x/free-self17d10new-desirable-admirable-most-south-indian-bengali-original-imafzkh2mw5n4ywz.jpeg?q=70"],
                sellingPrice: "287",
                disPrice: "3999",
                disPrsent: "92%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANRASH1004A47",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Black rangoli"
                }
            },
            {
                title: "Woven Kanjivaram Silk Blend, Art Silk Saree  (Multicolor)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kyhlfgw0/sari/m/w/2/free-parrot-1-multimall-unstitched-original-imagapuvhdhh54te.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/p/g/z/free-silk-samruddhi-unstitched-original-imagapuvhhhdaxcp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/s/v/f/free-silk-samruddhi-unstitched-original-imagf8qrynwbzdn6.jpeg?q=70"],
                sellingPrice: "336",
                disPrice: "2899",
                disPrsent: "92%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSMANBRI1001A15",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive Wear",
                    fabric: "Synthetic"
                }
            },




        ]

    }
]

const StylishKurtiCollections = [
    {
        title: "Stylish Kurti Collections",
        Productlist: [
            {
                title: "Women Printed Crepe Straight Kurta  (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/krxtrww0/kurta/s/7/d/l-530245-1-stop-fashion-original-imag5m8zbh4g2fha.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/krxtrww0/kurta/3/u/q/l-530245-1-stop-fashion-original-imag5m8z9dyxetak.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/knqd3m80/kurta/n/f/i/xxl-219-217-245-1-stop-fashion-original-imag2cpxudcumtyn.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "269",
                disPrsent: "73%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD003A421",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Printed Pure Cotton Straight Kurta  (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kgv5x8w0-0/kurta/x/1/r/xxl-gw104-3-glowworld-original-imafwzhfaubzfzuf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kgv5x8w0-0/kurta/c/6/o/xxl-gw104-3-glowworld-original-imafwzhfybgeuzja.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kgv5x8w0-0/kurta/z/w/b/xxl-gw104-3-glowworld-original-imafwzhfvjw9wfvc.jpeg?q=70"],
                sellingPrice: "1499",
                disPrice: "314",
                disPrsent: "79%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD006A424",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Printed Viscose Rayon Straight Kurta  (Multicolor)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/ksc46fk0/kurta/b/b/b/l-lc0031-leaf-creation-original-imag5xh6h4msdcxh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ksc46fk0/kurta/c/3/i/l-lc0031-leaf-creation-original-imag5xh6wrbdueut.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ksc46fk0/kurta/l/g/r/l-lc0031-leaf-creation-original-imag5xh6vjmhzzjt.jpeg?q=70"],
                sellingPrice: "1499",
                disPrice: "248",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD001A419",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Printed Viscose Rayon Straight Kurta  (Green)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/q/r/p/m-741-rama-kurta-tanjan-original-imagynwq2tbm5ccz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/b/g/x/m-741-rama-kurta-tanjan-original-imagynwqghkvm3gk.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/o/d/b/m-741-rama-kurta-tanjan-original-imagynwqryuh57sp.jpeg?q=70"],
                sellingPrice: "1599",
                disPrice: "314",
                disPrsent: "80%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD004A422",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Printed Cotton Blend Straight Kurta  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l0r1j0w0/kurta/f/2/y/xl-kp-0116-k-21-kannahi-original-imagchyb8vhrfcsy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l0r1j0w0/kurta/a/a/t/xl-kp-0116-k-21-kannahi-original-imagchybsbgfddyq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l0r1j0w0/kurta/u/m/u/xl-kp-0116-k-21-kannahi-original-imagchyb4rgbacvx.jpeg?q=70"],
                sellingPrice: "1649",
                disPrice: "509",
                disPrsent: "69%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD007A425",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Leheriya Pure Cotton Straight Kurta  (Orange)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/f/j/c/l-kr-4381-darkorange-lee-moda-original-imagg23w2tj8hpkp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/p/j/g/l-kr-4381-darkorange-lee-moda-original-imagg23wxzttp5c9.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/l/w/x/l-kr-4381-darkorange-lee-moda-original-imagg23wqwkce4k8.jpeg?q=70"],
                sellingPrice: "1999",
                disPrice: "254",
                disPrsent: "87%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD002A420",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Printed Cotton Blend Straight Kurta  (Maroon)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l0fm07k0/kurta/2/o/f/l-cw11-20-ketaki-fashion-original-imagc86gjg4ggegy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l0fm07k0/kurta/h/l/o/l-cw11-20-ketaki-fashion-original-imagc86ggw6qv3hf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l0fm07k0/kurta/1/f/a/l-cw11-20-ketaki-fashion-original-imagc86gwecnbs2n.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "236",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD005A423",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Solid Viscose Rayon Straight Kurta  (Dark Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kst9gnk0/kurta/z/r/g/xxl-rf-184-petrol-blue-new4u-original-imag6as2xts2q2b5.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/kurta/v/i/e/xxl-rf-184-petrol-blue-new4u-original-imag6as2vzfx84ht.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/kurta/k/v/y/xxl-rf-184-petrol-blue-new4u-original-imag6as2cctvfefn.jpeg?q=70"],
                sellingPrice: "1199",
                disPrice: "299",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD010A428",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },
        ]
    }
]

const TrendingKurtiCollections = [
    {
        title: "Trending Kurti Collections",
        Productlist: [
            {
                title: "Women Embroidered Viscose Rayon High Low Kurta  (Green)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/klcmoi80/kurta/b/x/w/3xl-navya-a-1-ak-fab-original-imagyhhhdjy97a6b.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/klcmoi80/kurta/j/p/5/3xl-navya-a-1-ak-fab-original-imagyhhhhfjwbnty.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/klcmoi80/kurta/p/q/4/3xl-navya-a-1-ak-fab-original-imagyhhhc68hrymz.jpeg?q=70"
                ],
                sellingPrice: "1299",
                disPrice: "549",
                disPrsent: "57%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRYAAL2001A139",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom + Dupatta)",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Reyon"
                },
            },
            {
                title: "Women Embroidered Cotton Blend Anarkali Kurta  (Maroon)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/o/f/t/xxl-1051plykmaroon-yash-gallery-original-imag3sh5tj7fjh94-bb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kplisnk0/kurta/a/w/r/xxl-1051plykmaroon-yash-gallery-original-imag3sh5pvv3gzwf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kplisnk0/kurta/b/o/n/xxl-1051plykmaroon-yash-gallery-original-imag3sh5hjbe3wsh.jpeg?q=70"
                ],
                sellingPrice: "3999",
                disPrice: "909",
                disPrsent: "77%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL'
                ],
                ProductDetails: {
                    productCode: "SHKRYC3001A143",
                    idealFor: "Women",
                    packOf: "1(Kurti + Dupatta)",
                    occasion: "Festive, Party wear",
                    fabric: "Heavy tesla slub"
                },
            },
            {
                title: "Women Striped Cotton Rayon A-line Kurta  (Orange)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/a/w/t/l-digitalkurti-indian-fashionista-original-imaghtcyrvfsurez.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/r/q/a/l-digitalkurti-indian-fashionista-original-imaghtcybghhgshc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/v/t/u/l-digitalkurti-indian-fashionista-original-imaghtcyknanfu3h.jpeg?q=70"
                ],
                sellingPrice: "1499",
                disPrice: "279",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRARO1003A186",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Regular Wear",
                    fabric: "Rayon"
                },
            },
            {
                title: "Women Floral Print Viscose Rayon Anarkali Kurta  (Multicolor)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kwwfte80/kurta/3/2/v/xl-hk001-hardik-fab-original-imag9han3nhkjqjg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kwwfte80/kurta/7/5/d/xl-hk001-hardik-fab-original-imag9han6dwx3ru4.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kwwfte80/kurta/c/l/o/xl-hk001-hardik-fab-original-imag9hantjber87k.jpeg?q=70"
                ],
                sellingPrice: "1,299",
                disPrice: "449",
                disPrsent: "65%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRYAAL2004A142",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom + Dupatta)",
                    occasion: "Daily Wear,Casual wear",
                    fabric: "Rayon"
                },
            },
            {
                title: "Women Striped Khadi Cotton A-line Kurta  (Light Blue)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/f/1/q/s-rf-pure-khadi-green-rimeline-fashion-original-imagjhy5en8fa5nw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/j/o/o/s-rf-pure-khadi-green-rimeline-fashion-original-imagjhy5epw4gsh2.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/n/m/s/s-rf-pure-khadi-green-rimeline-fashion-original-imagjhy5bvc7vayj.jpeg?q=70"
                ],
                sellingPrice: "1299",
                disPrice: "329",
                disPrsent: "74%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRYAGYVL35002A136",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom)",
                    occasion: "Festive,Party wear",
                    fabric: "Slub linen striped"
                },
            },
            {
                title: "Women Solid Cotton Blend Straight Kurta  (Blue)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kd1zngw0/kurta/b/w/y/m-yash-gallery-women-s-cotton-slub-cambric-cotton-patch-work-a-original-imafufpfytazzaa8.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kd1zngw0/kurta/w/n/h/m-yash-gallery-women-s-cotton-slub-cambric-cotton-patch-work-a-original-imafufpf2eu24dww.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kd1zngw0/kurta/p/x/s/m-yash-gallery-women-s-cotton-slub-cambric-cotton-patch-work-a-original-imafufpff3apmbhg.jpeg?q=70"
                ],
                sellingPrice: "819",
                disPrice: "3,799",
                disPrsent: "78%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRCYC3003A145",
                    idealFor: "Women",
                    packOf: "1(Kurti + Duppta)",
                    occasion: "Festive,Party wear",
                    fabric: "Heavy tesla slub"
                },
            },
            {
                title: "Women Self Design Cotton Blend A-line Kurta  (Dark Green)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/l3t2fm80/kurta/j/f/3/xxl-s-p-2-bottle-green-somnath-collection-original-imagetr5ebhgbbbg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l3t2fm80/kurta/c/m/0/xxl-s-p-2-bottle-green-somnath-collection-original-imagetr5xhecju4g.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l3t2fm80/kurta/x/b/x/xxl-s-p-2-bottle-green-somnath-collection-original-imagetr5npvche9h.jpeg?q=70"
                ],
                sellingPrice: "999",
                disPrice: "236",
                disPrsent: "76%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRYAARVL33003A192",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Regular Wear",
                    fabric: "Slub cotton"
                },
            },
            {
                title: "Women Printed Crepe Straight Kurta  (Yellow)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/l51d30w0/kurta/p/x/t/xxl-ri-530350-1-stop-fashion-original-imagfsvawzxhgv7a.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l51d30w0/kurta/m/u/y/xxl-ri-530350-1-stop-fashion-original-imagfsvafzphgdem.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l51d30w0/kurta/1/y/l/xxl-ri-530350-1-stop-fashion-original-imagfsvajghkyfpr.jpeg?q=70"
                ],
                sellingPrice: "999",
                disPrice: "169",
                disPrsent: "83%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    's', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMMH303A252",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Viscose saffon slub"
                },
            },
            {
                title: "Women Printed Viscose Rayon Anarkali Kurta  (Pink)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kij6f0w0-0/dress/q/2/s/xl-aadya-leaf-print-gown-sri-aadya-creation-original-imafyaptbvvrhs2z.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kij6f0w0-0/dress/d/q/j/m-aadya-leaf-print-gown-sri-aadya-creation-original-imafyaptxyddyskw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kingqkw0-0/kurta/9/c/i/l-women-paisley-rayon-gown-pink-kurta-dress-vyshivka-original-imafyecdh6hzwbvm.jpeg?q=70"
                ],
                sellingPrice: "799",
                disPrice: "359",
                disPrsent: "55%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL'
                ],
                ProductDetails: {
                    productCode: "SHKRYAAL2002A140",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom + Dupptta)",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                },
            },
            {
                title: "Women Embroidered Viscose Rayon Straight Kurta",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/l27wtjk0/kurta/u/w/h/3xl-new-folder-kurti-pink-vikshita-fashion-original-imagdhu7f8bvcmvg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l05lx8w0/kurta/2/w/x/3xl-red-kurta-lemoda-fashion-original-imagcyeqeq3znbru.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kzpw2vk0/kurta/i/h/u/xl-bhandni-print-red-m-size-bhavya-fashion-hub-original-imagbz5zhffjjxhn.jpeg?q=70"
                ],
                sellingPrice: "600",
                disPrice: "315",
                disPrsent: "47%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', "XXL"
                ],
                ProductDetails: {
                    productCode: "SHKRAR01002A185",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Reguler wear",
                    fabric: "Rayon"
                },
            },
            {
                title: "Women Solid Cotton Blend A-line Kurta  (Green)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/l52sivk0/kurta/y/8/1/l-287yk253green-yash-gallery-original-imagfu3thcjedfze.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l52sivk0/kurta/n/h/t/l-287yk253green-yash-gallery-original-imagfu3tmrsbzbbp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l52sivk0/kurta/f/6/k/l-287yk253green-yash-gallery-original-imagfu3tshghh86a.jpeg?q=70"
                ],
                sellingPrice: "2,899",
                disPrice: "759",
                disPrsent: "73%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', "XXL"
                ],
                ProductDetails: {
                    productCode: "SHKRYAKN1003A198",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Fastive wear",
                    fabric: "Cotton"
                },
            }
        ]
    }
]

const FashionSareeCollections = [
    {
        title: "Fashion Saree Collections",
        Productlist: [
            {
                title: "Unstitched Pure Silk Multi-purpose Fabric Self Design",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/sari/e/7/w/free-ms-172-dark-blue-lifera-unstitched-original-imaggysn8wggvbx8.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l5bd5zk0/sari/b/s/8/free-ms-172-dark-blue-lifera-unstitched-original-imaggysnjet8jatu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l5iid8w0/sari/i/x/g/free-mahadev-pandadi-mahadev-retail-shop-unstitched-original-imaggysnqbxzbghw.jpeg?q=70",
                ],
                sellingPrice: "2999",
                disPrice: "799",
                disPrsent: "73%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDSAH1512A678",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "JapanSilk",
                },
            },

            {
                title: "Embroidered Fashion Pure Silk Saree  (Blue)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/k3hmj680/sari/z/q/j/free-10045-jimplei-original-imafmmy6rvpf5cea.jpeg?q=70",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEuqEkKVlX-SYQsJck_7gLcivEBLAvy032YSzqPUsC0t3BZnocyU5h-pSpfZ5_bOtHQ4&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYkI6CR3ucKij6GxW5lxYxrv3lICHanBppMwiKnaZ9KWvbCKjnN91VlH2DggZ5NH2qU8&usqp=CAU",
                ],
                sellingPrice: "4999",
                disPrice: "1845",
                disPrsent: "63%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDAMA1336A686",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "RangoliSilk",
                },
            },

            {
                title:
                    "Printed, Self Design, Embellished, Floral Print, Solid/Plain Bollywood Georgette Saree  (Multicolor, Cream)",
                Image: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryZyFqFxLHGZtZ3DZnFIz8N0ww33honSJJv_PbOBt0Bkyo9z0ZXLDXl0Igbv1q12s2DA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPR0EKN2Dj6sxQy3vS9XtIasss2-2XakVX8lhHzowfqosKYfD551ZReFRsL4SO9vTnzz0&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKf-UPGAZsxdw3LB4iQalrPrOUSWtlMiHjhOyzgt5zvYDKH5sFJaZMTa-KPXh4cd49VI&usqp=CAU",
                ],
                sellingPrice: "5799",
                disPrice: "2100",
                disPrsent: "63%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDFV1452A687",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear,Party Wear",
                    fabric: "Half velvet half viscose",
                },
            },
            {
                title:
                    "Self Design, Woven Kanjivaram Silk Blend, Jacquard Saree  (Green)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kmgn0cw0/sari/y/u/p/free-butta-butti-green-bplash-fashion-unstitched-original-imagfczyznwph2gy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/kms2j680/sari/d/h/f/free-kanjivaramsareeslatestdesign-catwalk-studio-unstitched-original-imagfhyzqwvcw3bn.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-sari/w/m/a/free-shopsy-gola-green-02-benaifer-fashion-unstitched-original-imagfdtzezzbk3ha.jpeg?q=70",
                ],
                sellingPrice: "3999",
                disPrice: "829",
                disPrsent: "79%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDSWAS1291A693",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party Wear",
                    fabric: "GermanSilk",
                },
            },
            {
                title: "Embellished, Solid/Plain Bollywood Lycra Blend Saree  (Brown)",
                Image: [
                    "https://rukminim1.flixcart.com/image/400/400/kph8h3k0/sari/a/e/n/free-rw-red-shop-lady-stitched-original-imag3pfdbrhvazfw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/400/400/kbl4cy80/sari/h/n/c/free-3002-radha-raman-fashion-unstitched-original-imafswhrrcshtgz7.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/krxtrww0/sari/j/0/h/free-malai-saree-carryox-unstitched-original-imag5mdhffez2dcz.jpeg?q=70",
                ],
                sellingPrice: "2645",
                disPrice: "2215",
                disPrsent: "16%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDSIVELA674",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "WeddingParty ,Party Wear",
                    fabric: "MalaiVelvet",
                },
            },
            {
                title: "Embroidered Bollywood Net Saree  (Blue)",
                Image: [
                    "https://rukminim1.flixcart.com/image/612/612/krxtrww0/sari/z/w/a/free-malai-saree-carryox-unstitched-original-imag5mdhgyf62pwf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/krxtrww0/sari/u/5/n/free-malai-saree-carryox-unstitched-original-imag5mdhfnmavjwj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/g/x/2/free-latest-new-design-net-saree-casual-formal-party-wear-original-imaggzs64jffmnmb.jpeg?q=70",
                ],
                sellingPrice: "6399",
                disPrice: "2395",
                disPrsent: "62%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDPARI15O1A689",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "WeddingParty ,Party Wear",
                    fabric: "SoftGliterNet",
                },
            },

            {
                title:
                    "Self Design, Woven Kanjivaram Silk Blend, Jacquard Saree  (Red)",
                Image: [
                    "https://rukminim1.flixcart.com/image/612/612/kms2j680/sari/3/w/x/free-saree-for-women-catwalk-studio-unstitched-original-imagfhymf5ghms3z.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/x/n/s/free-bandhani-ruby-red-04-hathdora-creation-unstitched-original-imafz5sbhygxhrfh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kmgn0cw0/sari/0/e/l/free-butta-butti-red-bplash-fashion-unstitched-original-imagfczyatzagw5b.jpeg?q=70",
                ],
                sellingPrice: "3999",
                disPrice: "829",
                disPrsent: "79%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDDHARAA692",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive ,Party Wear",
                    fabric: "GermanSilk",
                },
            },
            {
                title:
                    "Printed, Self Design, Hand Painted, Ombre, Graphic Print, Floral Print, Checkered Bollywood Georgette, Chiffon Saree  (Blue)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/1/c/e/free-2691s255-samah-unstitched-original-imagkyhh57yvxscb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/f/m/6/free-re-m-n-grey-richeraa-no-blouse-original-imagjyjjvzmmdc3d.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/z/f/8/free-ramuba-shani-ramuba-fab-unstitched-original-imagdyqyppghhqpm.jpeg?q=70",
                ],
                sellingPrice: "4599",
                disPrice: "599",
                disPrsent: "86%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDDOL1543A695",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive ,Party Wear",
                    fabric: "ChinonSilk",
                },
            },
            {
                title: "Solid/Plain Bollywood Georgette, Satin Saree  (Grey)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/k4irzbk0/sari/f/f/n/free-ght6yh-sareeflame-original-imafh3qjge4uehs7.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/g/1/c/free-janki-nipshya-unstitched-original-image5wazpsjdmwh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/e/d/x/free-ramuba-shani-ramuba-fab-unstitched-original-imagdyqytfpvnxmn.jpeg?q=70",
                ],
                sellingPrice: "5999",
                disPrice: "635",
                disPrsent: "89%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDVOLVO1391A677",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear ,Party Wear",
                    fabric: "PureGeorgette",
                },
            },
            {
                title: "Woven Kanjivaram Jacquard, Art Silk Saree  (Multicolor)",
                Image: [
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-sari/c/v/n/free-catlog055net2023-hutah-unstitched-original-imagntjczfghzdpj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/400/400/l4n2oi80/kurta/1/j/4/l-khan08-grn-kurta-khawab-fashion-original-imagfhshhfmnhpgd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/v/v/r/free-jf-bahurani-copper-tereza-unstitched-original-imagczh7vd2vumdz.jpeg?q=70",
                ],
                sellingPrice: "2799",
                disPrice: "359",
                disPrsent: "87%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDZOM1443A694",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: " Wedding Wear ,Party Wear",
                    fabric: "NylonSilk",
                },
            },
            {
                title: "Embroidered Bollywood Net Saree  (Orange)",
                Image: [
                    "https://rukminim1.flixcart.com/image/612/612/kz3118w0/sari/5/k/a/free-women-s-new-latest-women-s-soft-net-saree-with-embroidary-original-imagajuzgfvnteuq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/kp2y2kw0/sari/t/h/c/free-peach-colour-net-saree-ethnic-desi-color-colour-reversible-original-imag3ecm7xyqvszr.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/sari/s/p/h/free-sk-orange-heavy-pure-mono-soft-net-hathdora-creation-original-imag9ynvgmkngrrg.jpeg?q=70",
                ],
                sellingPrice: "1999",
                disPrice: "749",
                disPrsent: "62%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDRINA1485A675",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear ,Party Wear",
                    fabric: "SoftNet",
                },
            },
            {
                title: "Solid/Plain Assam Silk Pure Silk Saree  (Maroon)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/v/r/h/free-savariya-wine-kara-enterprise-no-blouse-original-imaghhzzepxqrszm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/kyxb9u80/sari/g/o/i/free-malay-style-riddhi-enterprise-unstitched-original-imagbfu2be352dff.jpeg?q=70", "https://rukminim1.flixcart.com/image/612/612/ki96c280-0/sari/7/m/c/free-ruffle-digital-patta-malai-aaena-stitched-original-imafy39uqhqvreuw.jpeg?q=70",
                ],
                sellingPrice: "3900",
                disPrice: "599",
                disPrsent: "84%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDIGA690",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear ,Party Wear",
                    fabric: "MalaiSilk",
                },
            },
            {
                title: "Embellished Bollywood Art Silk, Chiffon Saree  (Grey, Yellow)",
                Image: [
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/w/2/free-10-royal-opara-silk-saree-pure-cotton-sarees-for-summer-original-imagnx8k9h8vdvua.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/e/p/k/free-yellow-grey-half-half-atila-9-dailywear04-designer-stylist-original-imagkfm4bf6sfpfu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/f/h/y/free-yellow-grey-half-half-atila-11-dailywear04-designer-stylist-original-imagkfmmnauxhy4k.jpeg?q=70",
                ],
                sellingPrice: "3599",
                disPrice: "749",
                disPrsent: "79%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDSIRBORA673",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear ,Party Wear",
                    fabric: "CrapeSilk",
                },
            },
            {
                title: "Woven Kanjivaram Silk Blend, Jacquard Saree  (Yellow)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/sari/t/z/j/free-ms-106-faxofab-unstitched-original-imag6as6uwyyfe45.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/g/9/g/free-2837s296j-siril-unstitched-original-imagnhrnvprhvykw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/0/c/r/free-esc-8177-anjaneya-sarees-unstitched-original-imagf8uuf3hugmua.jpeg?q=70",
                ],
                sellingPrice: "2499",
                disPrice: "849",
                disPrsent: "66%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDSINA685",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear ,Party Wear",
                    fabric: "ChinonSilk",
                },
            },

            {
                title: "Printed Bollywood Pure Silk Saree  (Blue)",
                Image: [
                    "https://rukminim1.flixcart.com/image/612/612/kk01pjk0/sari/2/8/2/free-premium-quality-orange-red-yellow-fabric-ideal-for-daily-original-imafzftuyss3zgvk.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/kk01pjk0/sari/2/s/h/free-mq-japan-black-mess-up-fashion-unstitched-original-imafzfs7v47frdbp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/612/612/kk01pjk0/sari/h/w/p/free-premium-quality-orange-red-yellow-fabric-ideal-for-daily-original-imafzftvzbyvfzhc.jpeg?q=70",
                ],
                sellingPrice: "2099",
                disPrice: "502",
                disPrsent: "76%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHSDDMISS134OA682",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear ,Party Wear",
                    fabric: "JapanSilk",
                },
            },
        ],
    },
];

const TopSellingKurti = [
    {
        title: "Top Selling Kurti",
        Productlist: [
            {
                title: "Women Embroidered Georgette Anarkali Kurta  (Maroon)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l34ry4w0/kurta/v/k/u/3xl-sd-3-anarkali-kurta-label-d11-original-imagebfhmrkqhatu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l34ry4w0/kurta/f/s/9/3xl-sd-3-anarkali-kurta-label-d11-original-imagebfhbygmsyed.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l34ry4w0/kurta/v/k/u/3xl-sd-3-anarkali-kurta-label-d11-original-imagebfhmrkqhatu.jpeg?q=70"],
                sellingPrice: "1399",
                disPrice: "949",
                disPrsent: "32%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRCOM99003A175",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },

            {
                title: "Women Embroidered, Woven Design, Self Design Viscose Rayon Straight Kurta  (Maroon)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/l/v/e/3xl-du-rkc-290-305-maroon-fk-l-d-uniq-original-imagmmcthdyjuvv4.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/b/v/r/3xl-du-rkc-290-305-maroon-fk-l-d-uniq-original-imagmmctaurjcdcx.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/d/8/3xl-du-rkc-290-305-maroon-fk-l-d-uniq-original-imagmmctzymgzbud.jpeg?q=70"],
                sellingPrice: "3699",
                disPrice: "481",
                disPrsent: "86%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKYTV145448A120",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },

            {
                title: "Women Embroidered, Bandhani, Block Print, Printed Viscose Rayon Straight Kurta  (Yellow)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/9/r/n/xxl-du-rkc-468-357-fk-brown-xxl-d-uniq-original-imagkmgmczg6th8d.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/u/y/xxl-du-rkc-468-357-fk-brown-xxl-d-uniq-original-imagkmgm4jdsqxtj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/u/y/xxl-du-rkc-468-357-fk-brown-xxl-d-uniq-original-imagkmgm4jdsqxtj.jpeg?q=70"],
                sellingPrice: "4199",
                disPrice: "586",
                disPrsent: "86%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRLBCC1A168",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Dyed"
                }
            },

            {
                title: "Women Embroidered Viscose Rayon Straight Kurta  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/k/k/4/m-rf-1036-rimeline-fashion-original-imagm8cp8s6pcdzx.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/k/5/m-rf-1036-rimeline-fashion-original-imagm8cpywzhhgcs.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/m/d/s/m-rf-1036-rimeline-fashion-original-imagm8cpnabrngnr.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "367",
                disPrsent: "71%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRCRUZ004A163",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Woolen"
                }
            },

            {
                title: "Women Embroidered Georgette Anarkali Kurta  (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l2qhjm80/kurta/y/z/g/l-sd-3-anarkali-kurta-label-d11-original-imageygzdp3tmch5.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/128/128/l2qhjm80/kurta/x/m/m/l-sd-3-anarkali-kurta-label-d11-original-imageygz6zcfbwtd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l2qhjm80/kurta/8/d/m/l-sd-3-anarkali-kurta-label-d11-original-imageygz8yvwhgge.jpeg?q=70"],
                sellingPrice: "1399",
                disPrice: "949",
                disPrsent: "32%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRWTV44001A149",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom)",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Cotton"
                }
            },

            {
                title: "Women Solid Cotton Rayon Ethnic Dress  (Black)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/d/p/c/xl-plain-12345-kanya-creation-original-imagm69hrd74kyzs.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/v/d/9/xl-plain-12345-kanya-creation-original-imagm69htjaygbvf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/a/z/1/xl-plain-12345-kanya-creation-original-imagm69hgghkxwzv.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "359",
                disPrsent: "72%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRCOM99001A173",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Self Design Viscose Rayon Gown Kurta With Attached Dupatta  (Black)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/l/t/1/m-dg-137-chechi-original-imagne3a7ytxd4py.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/e/h/r/m-dg-137-chechi-original-imagne3acbk84ypm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/t/w/m-dg-137-chechi-original-imagne3amjjfxe5u.jpeg?q=70 "],
                sellingPrice: "3999",
                disPrice: "519",
                disPrsent: "87%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKRCRUZOO6A165",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Woolen"
                }
            },

            {
                title: "Women Embroidered Georgette Anarkali Kurta  (Light Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l34ry4w0/kurta/g/q/u/l-sd-3-anarkali-kurta-label-d11-original-imagebfhseuezgqf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l34ry4w0/kurta/4/8/t/l-sd-3-anarkali-kurta-label-d11-original-imagebfhharzy5qk.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l34ry4w0/kurta/2/z/e/l-sd-3-anarkali-kurta-label-d11-original-imagebfhgvmggzna.jpeg?q=70"],
                sellingPrice: "1399",
                disPrice: "944",
                disPrsent: "32%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSRWTV44005A153",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom)",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Cotton"
                }
            },

        ]
    }
]

const TopSareeCollectins = [
    {
        title: "Top Saree Collectins",
        Productlist: [
            {
                title: "Printed, Digital Print Bollywood Satin Saree ( White )",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/2/a/z/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9eztv86gbvfq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kwtkxow0/sari/s/k/x/free-looknbook-7045-peach-fabian-fashion-unstitched-original-imag9ezt5bhwxm3z.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/shopsy-sari/d/s/j/free-lnb-fabian-fashion-unstitched-original-imaga6mvtkskmess.jpeg?q=70"],
                sellingPrice: "2624",
                disPrice: "975",
                disPrsent: "62%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSJMFPA16",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party wear",
                    fabric: "Satin"
                }
            },

            {
                title: "Woven Bollywood Cotton Silk Saree (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/v/d/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7s6hhhxyz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/z/y/h/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7pknermkq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/sari/2/b/i/free-tilak-bpin-bandhani-hub-unstitched-original-imafzfm7gahmg4pn.jpeg?q=70"],
                sellingPrice: "2799",
                disPrice: "1100",
                disPrsent: "60%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSLSKC77721A29",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party wear",
                    fabric: "Cotton"
                }
            },

            {
                title: "Woven Bollywood Cotton Silk Saree (Yellow)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/n/l/s/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjnguhntzm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/h/1/f/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbj2gdw2vts.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/x/1/q/free-sz-chit-f-mu-862-silk-zone-unstitched-original-imaggsbjh3bys7br.jpeg?q=70"],
                sellingPrice: "2499",
                disPrice: "1245",
                disPrsent: "50%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSLSANU78781A30",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Function Wear",
                    fabric: "Cotton"
                }
            },

            {
                title: "Embroidered, Dyed, Embellished, Self Design Bollywood Chiffon Saree ",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/o/v/r/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfsyrasu2g.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/s/v/m/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfkfshe3ew.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kqgyhe80/sari/2/r/n/free-afkf810-kasturi-fashion-unstitched-original-imag4hbfs2arhj8p.jpeg?q=70"],
                sellingPrice: "2628",
                disPrice: "1456",
                disPrsent: "44%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSLSVIC77201A01",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Satin chiffon"
                }
            },
            {
                title: "Woven Kanjivaram Silk Blend Saree  (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/t/y/l/free-gt-1001-m-s-retail-unstitched-original-imagnjyhqgf4zzb3.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/c/x/r/free-gt-1001-m-s-retail-unstitched-original-imagnjyhfckdzgyc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/l/7/z/free-gt-1001-m-s-retail-unstitched-original-imagnjyhddssqby7.jpeg?q=70"],
                sellingPrice: "3099",
                disPrice: "1115",
                disPrsent: "64%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSORSVA35",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Silk viscose"
                }
            },



        ]
    }
]

const BridalWeddingCollection = [
    {
        title: "Bridal Wedding Collection",
        Productlist: [
            {
                title: "Embroidered Semi Stitched Lehenga Choli  (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/1/n/f/free-half-sleeve-l104-foriox-original-imag9yhyeqmczzws.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/i/u/a/free-half-sleeve-l104-foriox-original-imag9yhym6sya9qd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kxjav0w0/lehenga-choli/g/b/h/free-half-sleeve-l104-foriox-original-imag9yhy4fzv9kny.jpeg?q=70"],
                sellingPrice: "21549",
                disPrice: "6500",
                disPrsent: "69%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHK8A517",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Netted stain",
                    LehengaBlouseFabric: "Netted stain",




                }
            },
            {
                title: "Embroidered Semi Stitched Lehenga Choli ",
                Image: ["https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/o/m/e/free-3-4-sleeve-future-wine-goroly-original-imag5ezd4rkawhxq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/t/w/l/free-3-4-sleeve-future-wine-goroly-original-imag5ezdgm3dumzv.jpeg?q=70"],
                sellingPrice: "24024",
                disPrice: "7800",
                disPrsent: "67%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGCKMAYUA541",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: " Vrlvet",
                    LehengaBlouseFabric: "Vrlvet ",
                }
            },
            {
                title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/r/f/w/free-sleeveless-zip1434-zinariya-fab-original-imagnftyr5e7aadz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/v/4/e/free-sleeveless-zip1434-zinariya-fab-original-imagnftyksxk8gec.jpeg?q=70"],
                sellingPrice: "6799",
                disPrice: "2700",
                disPrsent: "60%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGCK12CA523",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Netted stain",
                    LehengaBlouseFabric: "Netted stain",
                }
            },
            {
                title: "Floral Print Semi Stitched Lehenga Choli  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/r/h/a/free-sleeveless-l8097-fashionuma-original-imag6hxfawazw8yd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kt7jv680/lehenga-choli/q/w/o/free-sleeveless-l8097-fashionuma-original-imag6hxfrtc4v8zz.jpeg?q=70"],
                sellingPrice: "20856",
                disPrice: "12514",
                disPrsent: "39%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGCK2A51",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Netted stain",
                    LehengaBlouseFabric: "Netted stain",



                }
            },
            {
                title: "Embroidered Semi Stitched Lehenga Choli  (Pink)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/q/h/c/free-half-sleeve-kasariya-sojitra-enterprise-original-imaghvg3hbmzkhhj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/b/q/q/free-short-sleeve-kasariya-peach-drashti-villa-original-imagh7wxrhgkfcgq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/i/v/r/free-short-sleeve-kasariya-peach-drashti-villa-original-imagh7wxuq6pfzby.jpeg?q=70"],
                sellingPrice: "2999",
                disPrice: "849",
                disPrsent: "71%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGCK13A523",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Netted stain",
                    LehengaBlouseFabric: "Netted stain",

                }
            },
            {
                title: "Embroidered Semi Stitched Lehenga Choli  (Maroon)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kyyqpow0/lehenga-choli/j/p/l/free-half-sleeve-l8199-fashion-basket-original-imagb2qfzkpmkgxg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyyqpow0/lehenga-choli/0/3/0/free-half-sleeve-l8199-fashion-basket-original-imagb2qfchvmzhr9.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyyqpow0/lehenga-choli/g/h/6/free-half-sleeve-l8199-fashion-basket-original-imagb2qf9k9hsxcv.jpeg?q=70"],
                sellingPrice: "4699",
                disPrice: "1929",
                disPrsent: "58%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHKMAHAA538",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Velvet",
                    LehengaBlouseFabric: "Velvet",

                }
            },
            {
                title: "Embroidered Semi Stitched Lehenga Choli  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kyyqpow0/lehenga-choli/j/p/l/free-half-sleeve-l8199-fashion-basket-original-imagb2qfzkpmkgxg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyyqpow0/lehenga-choli/0/3/0/free-half-sleeve-l8199-fashion-basket-original-imagb2qfchvmzhr9.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyyqpow0/lehenga-choli/g/h/6/free-half-sleeve-l8199-fashion-basket-original-imagb2qf9k9hsxcv.jpeg?q=70"],
                sellingPrice: "3999",
                disPrice: "718",
                disPrsent: "82%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHKNUSA528",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Velvet",
                    LehengaBlouseFabric: "Velvet",

                }
            },
            {
                title: "Embroidered Semi Stitched Lehenga Choli  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l31x2fk0/lehenga-choli/o/i/p/free-half-sleeve-bipasha-tribhuvan-fab-original-image9cwugvczaas.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l31x2fk0/lehenga-choli/b/5/9/free-half-sleeve-bipasha-tribhuvan-fab-original-image9cwj2kartpj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l31x2fk0/lehenga-choli/o/i/p/free-half-sleeve-bipasha-tribhuvan-fab-original-image9cwugvczaas.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "649",
                disPrsent: "35%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHKANUSA530",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Velvet",
                    LehengaBlouseFabric: "Velvet",

                }
            },
            {
                title: "Embroidered, Self Design Semi Stitched Lehenga Choli  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/a/k/6/free-short-sleeve-dolly-lehenga-kr-royalwish-original-imag6hrjwanb99gc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/t/w/d/free-short-sleeve-dolly-lehenga-kr-royalwish-original-imag6hrjtg3hadth.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/a/k/6/free-short-sleeve-dolly-lehenga-kr-royalwish-original-imag6hrjwanb99gc.jpeg?q=70"],
                sellingPrice: "2599",
                disPrice: "899",
                disPrsent: "65%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHKSSRA544",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Velvet",
                    LehengaBlouseFabric: "Velvet",

                }
            },
            {
                title: "Embroidered Semi Stitched Lehenga Choli  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/khz693k0-0/lehenga-choli/f/z/k/free-full-sleeve-apsara-woman-vivura-original-imafxvfjwfvzghgs.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/khz693k0-0/lehenga-choli/f/c/r/free-full-sleeve-apsara-woman-vivura-original-imafxvfjjha8ftsc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kit6hzk0-0/lehenga-choli/k/7/q/free-half-sleeve-dulhen-7-lehenga-marutinandan-nx-original-imafygj4zzyyap5c.jpeg?q=70"],
                sellingPrice: "2599",
                disPrice: "899",
                disPrsent: "65%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHKANTA526",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Velvet",
                    LehengaBlouseFabric: "Velvet",

                }
            },
            {
                title: "Embroidered, Floral Print Semi Stitched Lehenga Choli  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l4x2rgw0/lehenga-choli/j/e/j/free-half-sleeve-bridal-red-niza-fashion-original-imagfperthgqethw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/128/128/l4x2rgw0/lehenga-choli/5/m/z/free-half-sleeve-bridal-red-niza-fashion-original-imagfperzfrhjchc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l4x2rgw0/lehenga-choli/j/e/j/free-half-sleeve-bridal-red-niza-fashion-original-imagfperthgqethw.jpeg?q=70"],
                sellingPrice: "2999",
                disPrice: "685",
                disPrsent: "77%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["S", "M", "L", "XL", "XXL"],
                ProductDetails: {
                    productCode: "SHLGHKHIRA533",
                    idealFor: "Women",
                    packOf: "1",
                    LehengaFabric: "Velvet",
                    LehengaBlouseFabric: "Velvet",

                }
            },














        ]
    }
]

const Dressesforyou = [
    {
        title: "Dresses for you",
        Productlist: [
            {
                title: "Georgette Stitched Flared/A-line Gown  (Light Green)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/gown/0/n/z/na-m-full-sleeve-stitched-e6017-afsana-na-original-imagnqf5z5zmg7cf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/o/w/n/na-m-full-sleeve-stitched-e6017-afsana-na-original-imagnqf542ghm776.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/w/n/o/na-m-full-sleeve-stitched-e6017-afsana-na-original-imagnqf5ntkzvd2z.jpeg?q=70"],
                sellingPrice: "849",
                disPrice: "3699",
                disPrsent: "77%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMAMR22035A269",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Maslin silk"
                }
            },

            {
                title: "Printed Crepe Stitched Anarkali Gown  (Beige)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kzfvzww0/gown/l/z/g/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8m9dpz4wtw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kzfvzww0/gown/m/h/v/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8metw45qjc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kzfvzww0/gown/h/o/b/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8mgvnwaqut.jpeg?q=70"],
                sellingPrice: "278",
                disPrice: "1599",
                disPrsent: "82%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMVHN3001A214",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Heavy georgette"
                }
            },

            {
                title: "Printed Rayon Blend Stitched Anarkali Gown  (Maroon)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kpk3csw0/gown/7/8/r/15-xxl-3-4-sleeve-stitched-mroonhar-dup-baba-kurti-15-original-imag3rf5eyerhrxq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kpk3csw0/gown/i/j/o/15-xxl-3-4-sleeve-stitched-mroonhar-dup-baba-kurti-15-original-imag3rf5zcfczc4z.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kpk3csw0/gown/h/x/j/15-xxl-3-4-sleeve-stitched-mroonhar-dup-baba-kurti-15-original-imag3rf5hzfyggu4.jpeg?q=70"],
                sellingPrice: "426",
                disPrice: "2999",
                disPrsent: "85%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMPAL6008A213",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Soft tapeta silk"
                }
            },

            {
                title: "Self Design Georgette Stitched Anarkali Gown  (Green)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/gown/c/r/l/na-m-full-sleeve-stitched-e6014-afsana-na-original-imagnqeza3qkqhgj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/u/n/a/na-xl-full-sleeve-stitched-e6014-afsana-na-original-imagnqezgggqavqs.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/p/j/1/na-xl-full-sleeve-stitched-e6014-afsana-na-original-imagnqezx6kqqarj.jpeg?q=70"],
                sellingPrice: "1449",
                disPrice: "5999",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMSDV418031A267",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },

            {
                title: "Georgette Stitched Flared/A-line Gown  (White, Black)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/v/s/8/xl-mona-full-length-gown-handyhope-original-imagfqtgqcwatgnr.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/h/l/l/xl-mona-full-length-gown-handyhope-original-imagfqtgrr5z2aqk.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/n/z/m/xl-mona-full-length-gown-handyhope-original-imagfqtgqg9dymtm.jpeg?q=70"],
                sellingPrice: "404",
                disPrice: "1699",
                disPrsent: "76%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMREHV727032A271",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },

            {
                title: "Embroidered Art Silk Semi Stitched Anarkali Gown  (Purple)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kmuxevk0/fabric/9/f/2/yes-semi-stitched-f1349-purple-fashion-basket-original-imagfzf29phgf7sv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kmuxevk0/fabric/9/f/2/yes-semi-stitched-f1349-purple-fashion-basket-original-imagfzf29phgf7sv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kmwcuq80/gown/u/n/k/na-free-full-sleeve-semi-stitched-yo-f1349-purple-yoyo-fashion-original-imagfp3pbahvepmk.jpeg?q=70"],
                sellingPrice: "1209",
                disPrice: "4999",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMSDV418030A266",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Georgette"
                }
            },

            {
                title: "Dyed Georgette Stitched Anarkali Gown  (Black)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/gown/i/a/q/na-xl-full-sleeve-stitched-re-40-raiyani-enterprise-na-original-imagc5mtp4acxzat.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/9/d/n/na-xl-full-sleeve-stitched-re-40-raiyani-enterprise-na-original-imagc5mth6avczzz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/y/t/y/na-xl-full-sleeve-stitched-re-40-raiyani-enterprise-na-original-imagc5mthhbvkngz.jpeg?q=70"],
                sellingPrice: "390",
                disPrice: "1599",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMPAL6007A212",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Soft tapeta silk"
                }
            },

            {
                title: "Printed Georgette Stitched Anarkali Gown  (Multicolor)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/gown/h/n/v/na-xl-half-sleeve-stitched-e6018-afsana-na-original-imagnqf62snhgcgy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/gown/o/i/e/na-xl-half-sleeve-stitched-e6018-afsana-na-original-imagnqf66xupfyqb.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "5999",
                disPrsent: "78%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMELG213009A228",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Soft georgette"
                }
            },

            {
                title: "Georgette Stitched Flared/A-line Gown  (Beige)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/w/o/c/xxl-mona-full-length-gown-handyhope-original-imagfqtgbm9u7zwm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/n/4/z/xxl-mona-full-length-gown-handyhope-original-imagfqtgyjunx8bz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/1/e/f/xxl-mona-full-length-gown-handyhope-original-imagfqtgxck3vnzy.jpeg?q=70"],
                sellingPrice: "404",
                disPrice: "1699",
                disPrsent: "76%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "HKVAMVHN3004A217",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Heavy georgette"
                }
            },

            {
                title: "Embroidered Net Semi Stitched Anarkali Gown  (Red)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-gown/h/o/4/free-half-sleeve-semi-stitched-ngb-01-life-sky-original-imag7vdaybd4qazn.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-gown/w/g/y/free-half-sleeve-semi-stitched-ngb-09-life-sky-original-imag7vday6ubquqz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-gown/v/n/i/free-half-sleeve-semi-stitched-ngb-01-life-sky-original-imag7vda55mgf7y7.jpeg?q=70"],
                sellingPrice: "449",
                disPrice: "3099",
                disPrsent: "85%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMPAL6003A208",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive, Party wear",
                    fabric: "Soft tapeta silk"
                }
            },


        ]

    }

]

const WesternDressesForWomen = [
    {
        title: "Western Dresses For Women",
        Productlist: [
            {
                title: "Women Maxi Blue Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-dress/r/9/m/xs-dks333-dk-fab-original-imag8zf6xefgrkfj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kvvad8w0/kurta/e/n/c/m-pw333-purshottam-wala-original-imag8zf6vbjhytyr.jpeg?q=70"],
                sellingPrice: "1899",
                disPrice: "379",
                disPrsent: "80%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKRYAGYVL35001A135",
                    idealFor: "Women",
                    packOf: "1 ( Kurti + Bottom)",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Slub linen"
                }
            },


            {
                title: "Women A-line Black Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/u/g/z/l-pwd396-purshottam-wala-original-imaghzt7pehffh8w.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/l/q/s/l-pwd396-purshottam-wala-original-imaghzt73rk8dsac.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/x/c/n/l-pwd396-purshottam-wala-original-imaghzt7yawvsygy.jpeg?q=70"],
                sellingPrice: "2199",
                disPrice: "379",
                disPrsent: "82%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKRYAAL2002A140",
                    idealFor: "Women",
                    packOf: "1 ( Kurti + Bottom + Dupatta)",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Asymmetric Black Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/b/5/w/xl-322k772-saara-original-imafz3xfdnekz6by-bb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kjkbv680-0/kurta/c/9/n/xl-322k772-saara-original-imafz3xfp2egv2fz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kjkbv680-0/kurta/c/u/8/l-322kr772-sanisa-original-imafz3y4mayxss4c.jpeg?q=70"],
                sellingPrice: "1997",
                disPrice: "299",
                disPrsent: "85%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKAGYCRMD001A419",
                    idealFor: "Women",
                    packOf: "1( Kurti + Dupatta)",
                    occasion: "Festive, Party wear",
                    fabric: "Heavy tesla slub"
                }
            },


            {
                title: "Women Maxi Maroon Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kvcpn680/dress/5/d/v/xl-dv333-daevish-original-imag89k7mw5hc3zd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kvcpn680/dress/u/e/k/xl-dv333-daevish-original-imag89k7wg9s3kck.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kvcpn680/dress/4/3/w/xl-dv333-daevish-original-imag89k7zzny9hf7.jpeg?q=70"],
                sellingPrice: "1899",
                disPrice: "379",
                disPrsent: "80%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKRGM1002A180",
                    idealFor: "Women",
                    packOf: "1 (Kurti + Dupatta)",
                    occasion: "Festive, Party wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Fit and Flare Blue Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/e/a/p/s-pwd322-purshottam-wala-original-imagm6ywr7vz95sz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/7/l/3/s-pwd322-purshottam-wala-original-imagm6ywpygucx3g.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/g/f/i/s-pwd322-purshottam-wala-original-imagmddhdevbfphg.jpeg?q=70"],
                sellingPrice: "2099",
                disPrice: "379",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKRYSENC01A274",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Fit and Flare Black Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/q/7/v/s-pwd322-purshottam-wala-original-imagm7ypaavduvnm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/w/z/a/s-pwd322-purshottam-wala-original-imagm7ypp8g7r9mk.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/1/2/o/s-pwd322-purshottam-wala-original-imagm7ypjvj7pwre.jpeg?q=70"],
                sellingPrice: "2099",
                disPrice: "379",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKVAMLKNV21007A245",
                    idealFor: "Women",
                    packOf: "1 (Kurti+ Bottom+ Dupatta)",
                    occasion: "Festive, Party wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Fit and Flare Multicolor Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kvpklu80/dress/r/3/4/s-aa-0119-mauve-boho-long-dress-aayu-original-imag8k648mcxpeud.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kvpklu80/dress/4/u/b/l-aa-0119-mauve-boho-long-dress-aayu-original-imag8k645zmjcgmy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kvpklu80/dress/0/i/z/s-aa-0119-mauve-boho-long-dress-aayu-original-imag8k64vza4ze3c.jpeg?q=70"],
                sellingPrice: "1099",
                disPrice: "399",
                disPrsent: "63%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKVAMLCPA201",
                    idealFor: "Women",
                    packOf: "1( Kurti+ Bottom+ Dupatta) ",
                    occasion: "Festive, Party wear",
                    fabric: "Rayon"
                }
            },


            {
                title: "Women Ethnic Dress Black Dress",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/dress/c/6/z/xs-pw320-purshottam-wala-original-imagm5xzsmbf65sv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/o/8/3/xs-pw320-purshottam-wala-original-imagm5xzwxcyspvu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kshtxu80/dress/e/h/k/m-dv320-daevish-original-imag6fxnwsfceejx.jpeg?q=70"],
                sellingPrice: "1799",
                disPrice: "379",
                disPrsent: "78%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    ProductCode: "SHKARFFR1010A81",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Cotton"
                }
            },
        ]
    }
]


const StellarStylesForHim = [
    {
        title: "Stellar Styles For Him",
        Productlist: [
            {
                title: "Men Slim Fit Solid Spread Collar Formal Shirt",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/v/g/u/s-r-stbrg-stoneberg-original-imaghf7mfydfgfxg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/3/t/n/s-r-stbrg-stoneberg-original-imaghf7m5yt6urzk.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/l/k/w/s-r-stbrg-stoneberg-original-imaghf7m3zuhkhpm.jpeg?q=70"],
                sellingPrice: "1299",
                disPrice: "450",
                disPrsent: "65%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["s", "m", "l", "xl", "xxl"],
                ProductDetails: {
                    productcode: "SHSTYBMP1A445",
                    idealfor: "men",
                    packof: "1",
                    Occasion: "Daily Wear,casual wear",
                    ShirtsFabric: "Royon",


                }
            },


            {
                title: "Men Slim Fit Solid Spread Collar Formal Shirt",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l3t2fm80/shirt/o/6/x/xxl-r-black-stoneberg-original-imageum2jqhkdmhj.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l3t2fm80/shirt/5/o/f/xxl-r-black-stoneberg-original-imageum2fbxk8s7b.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l3t2fm80/shirt/g/8/m/xxl-r-black-stoneberg-original-imageum2fusthtfg.jpeg?q=70"],
                sellingPrice: "1893",
                disPrice: "1445",
                disPrsent: "21%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["s", "m", "l", "xl", "xxl"],
                ProductDetails: {
                    productcode: "SHSTYBSC4A448",
                    idealfor: "men",
                    packof: "1",
                    Occasion: "Daily Wear,casual wear",
                    ShirtsFabric: "Cotton",
                }
            },


            {
                title: "Men Slim Fit Checkered Casual Shirt",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/c/6/m-pk19sh09b-surhi-original-imaft8w4sdbfhphu-bb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/i/j/2/2xl-pk19sh09b-surhi-original-imaft8wh9tjw77ke.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/a/2/u/2xl-pk19sh09b-surhi-original-imaft8w4k6xheux6.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "510",
                disPrsent: "48%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-stock",
                quantity: " + 1 -",
                Size: ["s", "m", "l", "xl", "xxl"],
                ProductDetails: {
                    Productcode: "SHSTYBPPCS452",
                    Idealfor: "men",
                    Packof: "1",
                    Occasion: "Daily Wear,casual wear",
                    ShirtsFabric: "Cotton",
                }
            },

            {
                title: "Men Slim Fit Washed Mandarin Collar Casual Shirt",
                Image: ["https://rukminim1.flixcart.com/image/832/832/ku4ezrk0/shirt/t/j/e/xl-sksh-bb110-xl-ma3-fubar-original-imag7baxs7pp5yuq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ku4ezrk0/shirt/p/u/l/xl-sksh-bb110-xl-ma3-fubar-original-imag7baxfeu2gk6e.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ku4ezrk0/shirt/j/w/r/xl-sksh-bb110-xl-ma3-fubar-original-imag7baxqknaxhyz.jpeg?q=70"],
                sellingPrice: "1349",
                disPrice: "455",
                disPrsent: "66%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["s", "m", "l", "xl", "xxl"],
                ProductDetails: {
                    productcode: "SHSTYBCLRSTP9A453",
                    idealfor: "men",
                    packof: "1",
                    Occasion: "Daily Wear,casual wear",
                    ShirtsFabric: "Cotton",
                }
            },


            {
                title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/t/k/f/l-check1195-tanip-original-image85ed7ezb29q.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/z/k/y/l-check1195-tanip-original-image85e5gbzbtwg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/shirt/w/o/e/l-check1195-tanip-original-image85ekvh7rgue.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "529",
                disPrsent: "48%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["s", "m", "l", "xl", "xxl"],
                ProductDetails: {
                    productcode: "SHSTYBSLABLBOXCHDA466",
                    idealfor: "men",
                    packof: "1",
                    Occasion: "Daily Wear,casual wear",
                    ShirtsFabric: "Cotton",
                }
            },


            {
                title: "Men Regular Fit Solid Spread Collar Casual Shirt",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shirt/c/n/x/xl-monikat-magenta-voroxy-original-imagbmqzvhcqhzbv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shirt/b/x/e/xl-monikat-magenta-voroxy-original-imagbmqzmb5ug3ng.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shirt/s/m/a/xl-monikat-magenta-voroxy-original-imagbmqz5stgafra.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "245",
                disPrsent: "75%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: " + 1 -",
                Size: ["s", "m", "l", "xl", "xxl"],
                ProductDetails: {
                    productcode: "SHSTYBSSLASHBOXA465",
                    idealfor: "men",
                    packof: "1",
                    Occasion: "Daily Wear,casual wear",
                    ShirtsFabric: "Cotton",
                }
            },
        ]
    }
]

const WomenSareecollections = [
    {
        title: "Women Saree collections",
        Productlist: [
            {
                title: "Woven Kanjivaram Jacquard, Art Silk Saree  (Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/l4x2rgw0/sari/7/e/s/free-abha-swannah-unstitched-original-imagfpgbg6gruzcg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/z/9/y/free-shopsy-amisha-pan-02-benaifer-fashion-unstitched-original-imagkncxbzb2bhpp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/o/1/0/free-shopsy-amisha-pan-02-benaifer-fashion-unstitched-original-imagkncx7khkbszh.jpeg?q=70"],
                sellingPrice: "3499",
                disPrice: "270",
                disPrsent: "92%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSDDSWAS1291A693",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party wear",
                    fabric: "German silk"
                }
            },

            {
                title: "Printed, Self Design, Floral Print Kalamkari Silk Blend Saree  (Mustard)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/q/9/a/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf2yyqzestjazq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/q/9/a/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf2xzsrhqkwayr.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4ss2a80/sari/q/9/a/free-s181194-new-desirable-admirable-most-south-indian-bengali-original-imaf2y27kgeazfc6.jpeg?q=70"],
                sellingPrice: "1999",
                disPrice: "298",
                disPrsent: "85%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSDDAPEK1498A681",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding Wear,Party Wear",
                    fabric: "Georgette"
                }
            },

            {
                title: "Printed Bollywood Art Silk Saree  (White)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kynb6vk0/sari/o/q/v/free-bahubali-white-ontic-lifestyle-unstitched-original-imagatvhhnkk4pyy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kynb6vk0/sari/v/h/d/free-bahubali-white-ontic-lifestyle-unstitched-original-imagatvh2fzkvhym.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kynb6vk0/sari/k/r/g/free-bahubali-white-ontic-lifestyle-unstitched-original-imagatvhafcygt9g.jpeg?q=70"],
                sellingPrice: "1500",
                disPrice: "298",
                disPrsent: "80%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSDDPARI1501A689",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding wear,Party wear",
                    fabric: "Soft glitter net"
                }
            },

            {
                title: "Woven Paithani Jacquard, Art Silk Saree  (Maroon)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/xif0q/sari/v/l/q/free-df-vishva-maroon-lichi-soft-silk-jacquard-woven-saree-heavy-original-imagh8hytfggqhg8.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l2arp8w0/sari/1/z/d/free-gp-vishva-maroonart-silk-designer-bollywood-fashion-style-original-imagdz58gpfzrraq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l2arp8w0/sari/d/n/c/free-gp-vishva-maroonart-silk-designer-bollywood-fashion-style-original-imagdz58guuxewsz.jpeg?q=70"],
                sellingPrice: "3999",
                disPrice: "565",
                disPrsent: "85%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSDDBRA684",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party wear",
                    fabric: "Brazzo"
                }
            },

            {
                title: "Embroidered Bollywood Chiffon Saree  (Dark Blue)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/kyoqmq80/sari/p/4/o/free-moti-the-gallery-shop-unstitched-original-imagavc5zz5azzcv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kyoqmq80/sari/5/0/v/free-moti-the-gallery-shop-unstitched-original-imagavc5gaqhrkxg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kxnl6kw0/sari/q/z/h/free-blue-moti-work-saree-mydoux-unstitched-original-imaga2ba4tu2hcqr.jpeg?q=70"],
                sellingPrice: "999",
                disPrice: "431",
                disPrsent: "56%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSDDDOL1543A695",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party wear",
                    fabric: "Chinon silk"
                }
            },

            {
                title: "Woven Kanjivaram Jacquard, Pure Silk Saree  (Purple)",
                Image: ["https://rukminim1.flixcart.com/image/832/832/ktizdzk0/shopsy-sari/q/q/c/free-harshita-dream-star-unstitched-original-imag6utqcvfzr96f.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ktizdzk0/shopsy-sari/u/n/v/free-mb0212-asnr-trend-unstitched-original-imag6ugavh5zqqy9.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kthjy4w0/sari/g/c/t/free-purmbsaree-asnr-trend-unstitched-original-imag6tnapffxfz7y.jpeg?q=70"],
                sellingPrice: "3299",
                disPrice: "595",
                disPrsent: "81%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHSDDGUL1455A679",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Wedding wear,Party wear",
                    fabric: "Rassal net"
                }
            },


        ]
    }
]

const LongKurtiCollections = [
    {
        title: "Long Kurti Collections",
        Productlist: [
            {
                title: "Women Printed Pure Cotton Straight Kurta  (Yellow)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/w/m/p/s-mf-620-global-beats-original-imagzfj8wgzghn9p.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/b/5/c/s-mf-620-global-beats-original-imagzfj8cchzcnnf.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/f/4/p/s-mf-620-global-beats-original-imagzfj8ns53233b.jpeg?q=70"
                ],
                sellingPrice: "999",
                disPrice: "314",
                disPrsent: "68%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMSHY1708A244YL",
                    idealFor: "Women",
                    packOf: "1(KURTI + PALAZZO)",
                    occasion: "Festive, Party wear",
                    fabric: "Pure muslin silk"
                }
            },
            {
                title: "Unstitched Crepe Kurta & Patiyala Material Printed",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/c/q/k/yes-2-2-m-unstitched-2-m-2-5-m-soha-red-dm96-sarvada-original-imagkc7ygfzua4qd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/x/e/m/yes-2-2-m-unstitched-2-m-2-5-m-soha-red-dm96-sarvada-original-imagkc7yjjkynrhu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/g/l/w/yes-2-2-m-unstitched-2-m-2-5-m-soha-red-dm96-sarvada-original-imagkc7y6azs8bjf.jpeg?q=70"
                ],
                sellingPrice: "1845",
                disPrice: "308",
                disPrsent: "83%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMSAJ5005A259",
                    idealFor: "Women",
                    packOf: "1(KURTI + Bottom + Duppatta)",
                    occasion: "Festive, Party wear",
                    fabric: "Rayon"
                }
            },
            {
                title: "Women Printed Cotton Rayon Straight Kurta ",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kykgb680/kurta/p/f/j/s-banthani-mustard-kp-fab-original-imagarw8zykhef52.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kykgb680/kurta/0/v/a/s-banthani-mustard-kp-fab-original-imagarw8qdv6znya.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kykgb680/kurta/h/0/j/s-banthani-mustard-kp-fab-original-imagarw8engvnnjp.jpeg?q=70"
                ],
                sellingPrice: "699",
                disPrice: "449",
                disPrsent: "35%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMLKNV21A249",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom + Dupatta)",
                    occasion: "Festive, Party wear",
                    fabric: "Rayon"
                }
            },
            {
                title: "Women Printed Viscose Rayon Flared Kurta  (Red)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/2/f/s/xl-ss-dar-122c-nama-original-imagh2wexwy7ns55.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/n/p/j/xl-ss-dar-122c-nama-original-imagh2we7kquvqj4.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/128/128/xif0q/shopsy-kurta/y/e/5/xl-ss-dar-122c-nama-original-imagh2wesmxscvys.jpeg?q=70"
                ],
                sellingPrice: "386",
                disPrice: "1650",
                disPrsent: "76%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL'
                ],
                ProductDetails: {
                    productCode: "SHKARRL4004A86",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Festive,Party wear",
                    fabric: "Rayon"
                }
            },
            {
                title: "Women Printed, Striped Silk Blend A-line Kurta  (Brown)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta-kurti/8/o/f/xl-jne2305-kr-533-janasya-original-imaf8dqthtznnyag-bb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/krtjgcw0hlty2aw/kurta-kurti/e/x/e/xl-jne2305-kr-533-janasya-original-imaf8dqu2shhksht.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/krtjgcw0hlty2aw/kurta-kurti/q/v/p/xl-jne2305-kr-533-janasya-original-imaf8dqtyzkhsgpc.jpeg?q=70"
                ],
                sellingPrice: "1299",
                disPrice: "450",
                disPrsent: "65%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMUPSA236",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Viscose maslin silk"
                }
            },
            {
                title: "Women Embroidered Viscose Rayon High Low Kurta  (Yellow)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/k4n2avk0/kurta/h/z/a/s-1081ykyellow-akiko-original-imafnfpjzukjrhzv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4n2avk0/kurta/h/z/a/s-1081ykyellow-akiko-original-imafnfpjbypeq3c3.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/k4n2avk0/kurta/h/z/a/xl-1081ykyellow-akiko-original-imafnfpjc6tqrbz4.jpeg?q=70"
                ],
                sellingPrice: "3899",
                disPrice: "824",
                disPrsent: "78%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMUPSA235",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Viscose maslin silk"
                }
            },
            {
                title: "Women Embroidered Viscose Rayon Anarkali Kurta  (Dark Green)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/q/4/9/s-mayraa01-aanshi-fashion-original-imaghwtwyepdbv7g.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/l/x/x/s-mayraa01-aanshi-fashion-original-imaghwtwk6ggfyzx.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/n/c/c/s-mayraa01-aanshi-fashion-original-imaghwtwcgyrffyh.jpeg?q=70"
                ],
                sellingPrice: "1599",
                disPrice: "431",
                disPrsent: "73%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMLCPA201",
                    idealFor: "Women",
                    packOf: "1(Kurti + Vottom + Dupatta)",
                    occasion: "Festive,Party wear",
                    fabric: "Rayon"
                }
            },
            {
                title: "Women Embroidered Cotton Silk Gown Kurta  (Beige)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/0/n/m/m-s-d-105-imlie-original-imagh4wrtrbzpkbp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/1/m/f/m-s-d-105-imlie-original-imagh4wrypwegbdg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/a/i/a/m-s-d-105-imlie-original-imagh4wradtrut9u.jpeg?q=70"
                ],
                sellingPrice: "1999",
                disPrice: "612",
                disPrsent: "69%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMANTNXA229",
                    idealFor: "Women",
                    packOf: "1(Kurti + Vottom + Dupatta)",
                    occasion: "Festive,Party wear",
                    fabric: "Georgette with cotton silk"
                }
            },
            {
                title: "Women Embroidered Pure Cotton Anarkali Kurta  (Red)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/ki6bgcw0-0/kurta/g/v/m/l-1245ykred-yash-gallary-original-imafyys3jvrawnzy.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ki6bgcw0-0/kurta/v/x/l/l-1245ykred-yash-gallary-original-imafyys3cghksbng.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/ki6bgcw0-0/kurta/n/h/i/l-1245ykred-yash-gallary-original-imafyys3cnphv3u9.jpeg?q=70"
                ],
                sellingPrice: "2999",
                disPrice: "844",
                disPrsent: "71%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKARFFR1002A73",
                    idealFor: "Women",
                    packOf: "1",
                    occasion: "Daily wear,Casual wear",
                    fabric: "Cotton"
                }
            },
            {
                title: "Women Printed Cotton Blend A-line Kurta  (Beige)",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/jgcktjk0/dress/x/q/n/xs-dk11282d-natty-india-original-imaf4gx3yqdxfuyz.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/jgcktjk0/dress/x/q/n/xl-dk11282d-natty-india-original-imaf4gx3jfymqdgr.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/jgcktjk0/dress/x/q/n/xs-dk11282d-natty-india-original-imaf4gx3cwgsybww.jpeg?q=70"
                ],
                sellingPrice: "2499",
                disPrice: "1224",
                disPrsent: "51%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMANTNXA233",
                    idealFor: "Women",
                    packOf: "1(Kurti + Bottom + Dupatta)",
                    occasion: "Party wear",
                    fabric: "Synthetic sequence"
                }
            },
            {
                title: "Women Printed Crepe Straight Kurta ",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kd94uq80-0/kurti/j/b/z/l-186-l-new-latest-designer-trendy-best-price-american-crepe-original-imafu7bkyrzbsb2w.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kd94uq80-0/kurti/f/t/x/l-186-l-new-latest-designer-trendy-best-price-american-crepe-original-imafu7bkabwpmzry.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/v/d/v/xxl-combo-printed-kurti-casual-party-wear-latest-pack-of-2-kurta-original-imafu7bkry9xskfg.jpeg?q=70"
                ],
                sellingPrice: "799",
                disPrice: "252",
                disPrsent: "68%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                Status: "In-Stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productCode: "SHKVAMSHY1704A240",
                    idealFor: "Women",
                    packOf: "1(KURTI + PALAZZO)",
                    occasion: "Festive,Party wear",
                    fabric: "Pure muslin silk"
                }
            },
        ]
    },
]

const NewArrivalsTrousers = [
    {
        title: "New Arrivals Trousers",
        Productlist: [
            {
                title: "Men Slim Fit Light Blue Cotton Lycra",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/jrqo70w0/trouser/x/v/v/34-220498-tahvo-original-imafdgcq3aghwrjw.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/jrqo70w0/trouser/x/v/v/32-220498-tahvo-original-imafdgcqmprzhzxh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/jrqo70w0/trouser/x/v/v/34-220498-tahvo-original-imafdgcqaky9dkzz.jpeg?q=70"
                ],
                sellingPrice: "1749",
                disPrice: "1169",
                disPrsent: "33%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA496",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash , Machine Wash",
                }
            },
            {
                title: "Slim Fit Men Cotton Lycra Blend Dark Blue Cotton Lycra Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/w/u/t/-original-imagk5ktcz8bubtp.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/3/a/p/-original-imagk5ktsp4vsamh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/v/t/0/-original-imagk5kt39vyzz8m.jpeg?q=70"
                ],
                sellingPrice: "1999",
                disPrice: "539",
                disPrsent: "73%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL'
                ],
                ProductDetails: {
                    productcode: "SHTPPGPPA497",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit Beige Lycra Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/s/c/o/34-chinos-beige-pesado-original-imagnjqz3bh6qw9m.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/6/h/d/34-chinos-beige-pesado-original-imagnjqzvwp7vtft.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/5/i/c/34-chinos-beige-pesado-original-imagnjqzg9gnyzwh.jpeg?q=70"
                ],
                sellingPrice: "999",
                disPrice: "524",
                disPrsent: "47%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA498",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit Beige",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/l/5/o/32-vhtffslfc98425-van-heusen-original-imaggd2bhy29kyan.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/f/k/f/32-vhtffslfc98425-van-heusen-original-imaggd2bfyvbjuum.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/f/u/l/32-vhtffslfc98425-van-heusen-original-imaggd2bmuadcxy7.jpeg?q=70"
                ],
                sellingPrice: "3299",
                disPrice: "1649",
                disPrsent: "50%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA502",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Regular Fit Maroon",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/r/h/m/32-u39-baleno-maroon-aa-ad-av-original-imagn3aydchuanqm.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/k/j/g/32-u39-baleno-maroon-aa-ad-av-original-imagn3aycdazmyer.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/b/p/5/32-u39-baleno-maroon-aa-ad-av-original-imagn3ay3b6g8nnk.jpeg?q=70"
                ],
                sellingPrice: "1299",
                disPrice: "459",
                disPrsent: "64%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA507",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Smart Flex Men Regular Fit Blue Viscose Rayon Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/l37mtu80/trouser/c/h/d/34-aradtr2053-arrow-original-imagedwab9ygzehg.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l37mtu80/trouser/p/m/h/34-aradtr2053-arrow-original-imagedwafg7ud5r3.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/l37mtu80/trouser/o/u/0/34-aradtr2053-arrow-original-imagedwamdfh9yqy.jpeg?q=70"
                ],
                sellingPrice: "2499",
                disPrice: "1354",
                disPrsent: "45%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA503",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit White Cotton Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kwwfte80/trouser/m/a/k/32-nos-ares-sky-blue-mf-cly-classic-polo-original-imag9gw4bptahdza.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kwwfte80/trouser/4/d/4/42-nos-ares-sky-blue-mf-cly-classic-polo-original-imag9gw4taar3cqa.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kwwfte80/trouser/b/y/q/42-nos-ares-sky-blue-mf-cly-classic-polo-original-imag9gw4rkebgmzc.jpeg?q=70"
                ],
                sellingPrice: "1699",
                disPrice: "1453",
                disPrsent: "14%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA505",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit Green Cotton Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/kqzj7gw0/trouser/7/h/6/30-pctrousers5-vandnam-fabrics-original-imag4vqsgyhqxcf4.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kqzj7gw0/trouser/n/g/g/30-pctrousers5-vandnam-fabrics-original-imag4vqsnzazqutb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kqzj7gw0/trouser/q/j/v/30-pctrousers5-vandnam-fabrics-original-imag4vqsg5phfxmm.jpeg?q=70"
                ],
                sellingPrice: "2798",
                disPrice: "1249",
                disPrsent: "55%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA506",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit Gold Lycra Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/i/i/v/36-chinos-khaki-pesado-original-imagnjqzgt8x2zdu.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/e/h/e/36-chinos-khaki-pesado-original-imagnjqzd8rygzte.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/y/w/f/36-chinos-khaki-pesado-original-imagnjqzfgqusqvg.jpeg?q=70"
                ],
                sellingPrice: "999",
                disPrice: "524",
                disPrsent: "47%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'L', 'XL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA499",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit Light Blue Cotton Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/g/j/s/34-chino-skyblue-urbano-fashion-original-imagjzqfysjqh3qd.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/h/w/r/34-chino-skyblue-urbano-fashion-original-imagjzqfbzxpkyjn.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/j/h/l/34-chino-skyblue-urbano-fashion-original-imagjzqfqhbrh4ac.jpeg?q=70"
                ],
                sellingPrice: "1699",
                disPrice: "649",
                disPrsent: "61%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XL', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA500",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
            {
                title: "Men Slim Fit Blue Cotton Blend Trousers",
                Image: [
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/k/c/l/36-kctr-2121-nb-fubar-original-imag6judz3wnh85y-bb.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kt4ozgw0/trouser/t/f/l/36-kctr-2121-nb-fubar-original-imag6jud7e6yphth.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/kt4ozgw0/trouser/h/2/7/36-kctr-2121-nb-fubar-original-imag6judtxnzgc9t.jpeg?q=70"
                ],
                sellingPrice: "1448",
                disPrice: "499",
                disPrsent: "65%",
                soldBy: "SHOPPEEN",
                COD: "Available",
                status: "In-stock",
                quantity: "1",
                Size: [
                    'S', 'M', 'L', 'XXL'
                ],
                ProductDetails: {
                    productcode: "SHTPGPPA504",
                    idealfor: "Men",
                    packof: "1",
                    Fabric: "Lycra",
                    febricCare: "Hand Wash,Machine Wash",
                }
            },
        ]
    }
]







app.get('/malefaction/products', async (req, res) => {
    res.status(200).json({
        status: true, data: [
            { 'id': 1, 'price': '$19.5', 'title': 'Fashion-Shoes', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "White", "size": "XL", "qun": "1" },
            { 'id': 2, 'price': '$29.5', 'title': 'Fashion-Cort', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "black", "size": "XXL", "qun": "1" },
            { 'id': 3, 'price': '$20', 'title': 'Casual-Shoes', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "blue", "size": "L", "qun": "1" },
            { 'id': 4, 'price': '$5', 'title': 'Winter-Clothe', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "red", "size": "XXL", "qun": "1" },
            { 'id': 5, 'price': '$23', 'title': 'Printed-T-Sirt', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "blue", "size": "S", "qun": "1" },
            { 'id': 6, 'price': '$9.67', 'title': 'Winter', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "White", "size": "XL", "qun": "1" },
            { 'id': 7, 'price': '$24.5', 'title': 'Bag', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "black", "size": "XL", "qun": "1" },
            { 'id': 8, 'price': '$18.2', 'title': 'T-Sirt', 'img': 'https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg.webp', dis: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.", "reting": "5", "color": "yellow", "size": "L", "qun": "1" }
        ]
    })
});
app.get('/AllCategories', async (req, res) => {
    res.status(200).json({ status: true, data: Categories })
});
//app.use('/DreamCoder/api/userAuth', require('./backend/routes/userAuthRoutes'))




// const express = require('express');
// const multer = require('multer')
// const path = require('path')
// const cors = require('cors')
// const dotenv = require('dotenv').config();
// const port = process.env.PORT || 5000;
// const { errorHandler } = require('./backend/middleware/errorMiddleware')
// const ConnectDB = require('./backend/config/db');
// const { execPath } = require('process');
// const app = express();

// const storage = multer.diskStorage({
//     destination: "./upload/images",
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// const upload = multer({
//     storage: storage
// })
// ConnectDB();
// //akram
// // app.get("/", (req, res) => {
// //     res.status(200).json({ message: "get data" });
// // })
// app.get("/myy", (req, res) => {
//     res.send("Hello ...")
// })

// app.use(cors());
// app.use(errorHandler);
// //app.use('/profile', express.static('upload/images'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))
// //app.use("/DreamCoder/api", require("./backend/routes/dashbordRoutes"))
// //app.use("/DreamCoder/api", require("./backend/routes/countryRoutes"))
// //app.use("/DreamCoder/api", require("./backend/routes/courseRoutes"))
// //app.use("/DreamCoder/api/student", require("./backend/routes/studentRoutes"))
// //app.use("/DreamCoder/api/employe", require("./backend/routes/employeRoutes"))
// //app.use('/DreamCoder/api/users', require('./backend/routes/userRoutes'))
// app.use('/DreamCoder/api/userAuth', require('./backend/routes/userAuthRoutes'))
// //app.use('/DreamCoder/api', require('./backend/routes/productRoutes'))
// //app.use('/DreamCoder/api', require('./backend/routes/addtocartRoutes'))
// //app.use('/DreamCoder/api', require('./backend/routes/wishListRoutes'))
// //app.post('/DreamCoder/upload', upload.single('profile'), (req, res) => {
// //   console.log(req.file);
// // res.json({
// //    success: 1,
// //  profile_url: `http://localhost:${port}/profile/${req.file.filename}`
// //})
// //})
// app.listen(port, () => {
//     console.log(`app server started on port ${port}`)
// })

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    })
    .then(async (data) => {
        console.log("MongoDB Connected.!");
        const server = app.listen(port);
    })
    .catch((err) => console.log(err));