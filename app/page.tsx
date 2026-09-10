// This file forces Next.js to load your guest page at the root URL "/"
import GuestPage from "./(guest)/page";

export default function Home() {
  return <GuestPage />;
}