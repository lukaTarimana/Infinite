import { useEffect, useState } from "react";

import axios from "axios";

export default function useMain(page, size) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`,
    })
      .then((res) => {
        setList((prev) => prev.concat(res.data.list));
        setHasMore(
          res.data.pagination.total >
            res.data.pagination.pageSize * res.data.pagination.current
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error");
      });
  }, [size, page]);

  return { list, hasMore, loading };
}
