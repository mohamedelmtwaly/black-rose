interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className={`text-xs ${light ? 'text-champagne' : 'text-crimson'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-heading text-3xl sm:text-4xl ${
          light ? 'text-petal' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <div className={`mt-4 h-px w-24 bg-champagne ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-petal/75' : 'text-ink/70'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
