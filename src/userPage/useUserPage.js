import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

export default function useUserPage(page, size, setPastUsers, isNewOne) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setFriends([]);
  }, [location]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${location.pathname}`,
    })
      .then((res) => {
        if (isNewOne) {
          setPastUsers((prev) => prev.concat(res.data));
        }
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [location]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${location.pathname}/friends/${page}/${size}`,
    })
      .then((res) => {
        setFriends((prev) => prev.concat(res.data.list));
        setHasMore(
          res.data.pagination.total !==
            res.data.pagination.pageSize * res.data.pagination.current
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error");
      });
  }, [location, page, size]);

  return {
    user,
    hasMore,
    friends,
    loading,
  };
}
