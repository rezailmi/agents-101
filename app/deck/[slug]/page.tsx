import { notFound } from 'next/navigation';
import SlideViewer from '@/components/SlideViewer';
import { getDeckBySlug, decks } from '@/data/decks';

export function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DeckPage({ params }: Props) {
  const { slug } = await params;
  const deck = getDeckBySlug(slug);

  if (!deck) notFound();

  return <SlideViewer deck={deck} />;
}
