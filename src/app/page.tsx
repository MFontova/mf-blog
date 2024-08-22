import { getSortedPostsData } from "../lib/posts";

// export async function getInitialProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default function Home() {
  const allPostsData = getSortedPostsData()
  console.log('all posts data', allPostsData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blog</h1>
      <ul>
        {
          allPostsData.map(({id, date, title}) => (
            <li key={id}>{title} - {Date.parse(date)}</li>
          ))
        }
      </ul>
    </main>
  );
}
