import React, { FC } from "react";
import { Fond, CardProductDetail } from "../../components";
import { BoxProps } from "../../styles/types";
import map from "../../assets/images/map.png";
import map2x from "../../assets/images/map@2x.png";
import { isRetina } from "../../utils/helper";

const ProductDetail: FC<BoxProps> = (props) => {
  return (
    <Fond width="100%" {...props}>
      <CardProductDetail
        productId={1}
        thumb="https://img.rea-asia.com/rumah123/premium/360x203-crop/images/homepage_advertisement_v2/1635/1599626810_5f585e3add5eeimg.jpg"
        name="Rumah Minimalis di Jual Bandung Jawa Barat"
        type="Dijual"
        negotiable={true}
        price="Rp. 326 jt"
        installment="2,61jt/bln"
        bedroom={2}
        bathroom={2}
        buildingSize={"65m²"}
        landSize={"65m²"}
        liked={false}
        onClickButton={(productId: number) => console.log(productId)}
        onClickLike={(productId: number) => console.log(productId)}
        buttonLabel="Lihat Peta"
        address="Jl. Sukajadi No. 1 Bandung, Jawa Barat"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam soluta eligendi et at quos impedit perspiciatis dolor, eos nam, tempore iure doloribus id reprehenderit minima facilis, ducimus nobis omnis."
        map={isRetina(map, map2x)}
        markerPos={{ x: "38%", y: "23%" }}
      />
    </Fond>
  );
};

export default ProductDetail;
