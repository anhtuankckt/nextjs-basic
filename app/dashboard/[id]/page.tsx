async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    throw new Error('Fail to fetch data')
  }
  return res.json()
}

export default async function DashboardDetailPage({
  params: { id }
}: {
    params: { id: string }
  }) {
  const post = await getPost(id)
  
  return (
    <div>
      <h1>{id}</h1>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  )
}
