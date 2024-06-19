import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018430407175/Character/2305843009263048442/?components=202";
        const getData = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await getData.json();
        setApiData(data);
        setLoading(false);
        console.log(data); // Log the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <p>{apiData.Response.progressions.data.milestones["1049998276"]}</p>
    )}
  </div>
  );
};

export default ApiComponent;
