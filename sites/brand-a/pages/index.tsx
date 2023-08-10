import Link from 'next/link'

export default function BrandA() {
  return (
    <div>
      <h1>Brand A</h1>
      <ul>
        <li>
          <Link href="/post/1">Post 1</Link>
        </li>
        <li>
          <Link href="/post/2">Post 2</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  )
}
