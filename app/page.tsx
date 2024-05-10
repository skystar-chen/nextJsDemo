'use client';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import './page.scss';

export default function Home() {
  const router = useRouter();

  return (
    <main className="home-page-container">
      <Header />
      <button
        className="jump-btn"
        onClick={() => {
          router.push('/detail');
        }}
      >detail</button>
    </main>
  );
}
