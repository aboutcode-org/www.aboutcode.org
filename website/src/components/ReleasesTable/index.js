import { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function ReleasesTable() {
  const [data, setData] = useState([]);
  const releasesUrl = useBaseUrl('/releases.json');

  useEffect(() => {
    fetch(releasesUrl)
      .then(res => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, [releasesUrl]);

  const repos = data.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );

  if (repos.length === 0) return <p>Loading releases...</p>;

  return (
      <div className={styles.container}>
        <div className={styles.tableDiv}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Repo</th>
              <th>Tag</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((info, idx) => (
              <tr key={idx}>
                <td>
                  <a href={info.repo_url} target='_blank' rel='noreferrer'>
                    {info.repo_url.replace("https://github.com/", "").split("/").pop()}
                  </a>
                </td>
                <td>
                  <a href={info.tag_url} target='_blank' rel='noreferrer'>
                    {info.tag}
                  </a>
                </td>
                <td>{info.published_at ? new Date(info.published_at).toISOString().replace('T', ' ').replace('.000Z', ' UTC') : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
  );
}
