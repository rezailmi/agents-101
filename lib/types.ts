export type SlideType =
  | 'title'
  | 'concept'
  | 'two-col'
  | 'quote'
  | 'list'
  | 'triangle';

export interface TwoColContent {
  heading: string;
  body: string;
}

export interface TriangleVertex {
  label: string;
  description: string;
}

export interface Slide {
  type: SlideType;
  headline: string;
  body?: string;
  left?: TwoColContent;
  right?: TwoColContent;
  items?: string[];
  quote?: string;
  attribution?: string;
  vertices?: TriangleVertex[];
  center?: string;
}

export interface Deck {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  slides: Slide[];
}
