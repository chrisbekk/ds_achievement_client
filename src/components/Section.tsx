import { ReactNode } from 'react';
type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return (
    <section className="max-w-[1024px] w-full mx-auto flex-1 overflow-hidden">
      {children}
    </section>
  );
}
export default Section;
