import Link from "next/link";

function HomePage() {
  return (
    <div>
      Welcome to Next.js!

      <img src="/images/avatar.png"></img>
      <div>
        <ul>
          <li>
            <Link href="/sobre">
              Ir para sobre
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage;
