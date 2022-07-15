import { Link } from "react-router-dom";

import * as S from "./components.jsx";

const Item = ({ item, lastItem, setIsNewOne, isUserPage }) => {
  const newOne = () => {
    setIsNewOne(true);
  };

  return (
    <S.Main onClick={isUserPage ? newOne : null}>
      <Link to={`/user/${item.id}`}>
        <S.ItemWrapper>
          <S.Image src={`${item.imageUrl}?v=${item.id}`} />
          <S.Description>
            <S.Name>
              {item?.prefix} {item?.name} {item?.lastName}
            </S.Name>
            <S.Title ref={lastItem}>{item?.title}</S.Title>
          </S.Description>
        </S.ItemWrapper>
      </Link>
    </S.Main>
  );
};

export default Item;
