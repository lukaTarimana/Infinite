import React, { useState, useRef, useCallback } from "react";

import * as S from "./components.jsx";

import useUserPage from "./useUserPage.js";

import Item from "../item/Item.jsx";
import { Link } from "react-router-dom";

export default function UserPage() {
  const [page, setPage] = useState(1);
  const [isNewOne, setIsNewOne] = useState(true);
  const [pastUsers, setPastUsers] = useState([]);
  const { user, loading, friends, hasMore } = useUserPage(
    page,
    29,
    setPastUsers,
    isNewOne
  );

  const observer = useRef();

  const lastItem = useCallback((node) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  });

  return (
    <S.Main>
      <S.UserCard>
        <S.Image src={user?.imageUrl + "?v=" + user?.id} />
        <S.InfoWrapper>
          <S.BoxTitle>Info</S.BoxTitle>
          <S.Name>
            {user?.prefix} {user?.name} {user?.lastName}
          </S.Name>
          <S.JobName>{user?.title}</S.JobName>
          <S.Details>
            <S.Detail>
              <S.DetailTitle>Email: </S.DetailTitle>
              <h4>{user?.email}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Ip address: </S.DetailTitle>
              <h4>{user?.ip}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Ip address: </S.DetailTitle>
              <h4>{user?.ip}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Job area: </S.DetailTitle>
              <h4>{user?.jobArea}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Job type: </S.DetailTitle>
              <h4>{user?.jobType}</h4>
            </S.Detail>
          </S.Details>
        </S.InfoWrapper>
        <S.AddressWrapper>
          <S.BoxTitle>Address</S.BoxTitle>
          <S.Name>{user?.company?.name}</S.Name>
          <S.Details>
            <S.Detail>
              <S.DetailTitle>City: </S.DetailTitle>
              <h4>{user?.address?.city}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Country: </S.DetailTitle>
              <h4>{user?.address?.country}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>State: </S.DetailTitle>
              <h4>{user?.address?.state}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Street address: </S.DetailTitle>
              <h4>{user?.address?.streetAddress}</h4>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>ZIP: </S.DetailTitle>
              <h4>{user?.address?.zipCode}</h4>
            </S.Detail>
          </S.Details>
        </S.AddressWrapper>
      </S.UserCard>
      <S.PastUsers onClick={() => setIsNewOne(false)}>
        {pastUsers.map((pastUser, index) => {
          return (
            <Link key={`${index}+${pastUser.id}`} to={`/user/${pastUser.id}`}>
              {" "}
              {pastUser.prefix +
                " " +
                pastUser.name +
                " " +
                pastUser.lastName}{" "}
              {">"}{" "}
            </Link>
          );
        })}
      </S.PastUsers>
      <S.FriendsTitle>Friends:</S.FriendsTitle>
      <S.FrinedsList>
        {friends?.map((friend, index) => {
          if (friends?.length === index + 1) {
            return (
              <Item
                item={friend}
                lastItem={lastItem}
                key={`${index}+${friend.id}`}
                isUserPage
              />
            );
          } else {
            return (
              <Item
                item={friend}
                key={`${index}+${friend.id}`}
                setIsNewOne={setIsNewOne}
                isUserPage
              />
            );
          }
        })}
      </S.FrinedsList>
    </S.Main>
  );
}
