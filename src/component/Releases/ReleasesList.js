import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RELEASE } from '../../constants/ReleaseConstant';
// import { httpClient } from '../../constants/Api';
// import { API_BASE_URL } from '../../constants/Api';
import { toast } from 'react-toastify';

function ReleasesList() {
  const [releasesData, setReleasesData] = useState([]);

  useEffect(() => {
    releaseEntriesInfo();
  }, []);

  const releaseEntriesInfo = async () => {
    try {
      // const getReleaseData = await axios.get(
      //   ` ${
      //     API_BASE_URL + RELEASE.GET_ALL_RELEASE
      //   }?page=${page}&recordPerPage=${recordPerPage}&sortBy=${sortBy}&sortOrder=${orderValue}&searchValue=${searchValue}&filterValue=${filterValue}`
      // );
      const getReleaseData = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // const getReleaseData = await axios.get(API_BASE_URL);
      console.log({ getReleaseData });
      if (getReleaseData) {
        setReleasesData(getReleaseData.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {};
  
  return (
    <>
      <div>
        <h1>Releases List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titile</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {releasesData &&
              releasesData.length &&
              releasesData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ReleasesList;
