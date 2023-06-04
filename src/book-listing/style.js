import { makeStyles } from "@mui/material";
import { colors } from "@mui/material";

const productListingStyle = makeStyles((theme) => ({
    productListWrapper: {
        padding: "42px 0 80px",
        "@media (max-width: 991px)":{
            padding: "35px 0 50px",
        },
        "@media (max-width: 767px)":{
            padding: "35px 0 40px",
        },
        "& .title-wrapper":{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "@media (max-width: 574px)":{
                flexWrap: "wrap",
                justifyContent: "center",
            },
            "& .MuiTypography-h2":{
                padding: "0",
                margin: "0",
                "@media (max-width: 767px)":{
                    fontSize: "18px",
                },
                "&:after":{
                    display:"none",
                },
            },
        },
    },
}));
export {productListingStyle};