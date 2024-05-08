'use client';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Header />
      <button
        onClick={() => {
          router.push('/detail');
        }}
      >detail</button>
    </main>
  );
}
