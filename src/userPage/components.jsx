import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  flex-wrap: wrap;
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  list-style-type: none;
  padding: 0;
  margin: auto;
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  height: 276px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Image = styled.img`
  height: 200px;
  @media (max-width: 900px) {
    width: 100%;
    object-fit: contain;
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  height: 186px;
  margin: 20px;
  position: relative;
  border: 2px groove rgb(192, 192, 192);
  padding: 0 12px 10px 12px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const BoxTitle = styled.span`
  position: absolute;
  top: -9px;
  left: 13px;
  background-color: white;
  padding: 0 2px;
`;

export const Name = styled.h3`
  font-weight: bold;
  margin-top: 21px;
`;

export const JobName = styled.h4`
  margin-top: 5px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Detail = styled.div`
  display: flex;
  gap: 0 5px;
  height: 21px;
`;

export const DetailTitle = styled.h4`
  text-decoration: underline;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px groove rgb(192, 192, 192);
  width: 50%;
  height: 186px;
  position: relative;
  padding: 0 12px 10px 12px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PastUsers = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  > a {
    margin-right: 7px;
    text-decoration: underline;
    color: -webkit-link;
  }
`;

export const FriendsTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  margin: 20px 10px;
  width: 100%;
`;

export const FrinedsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
