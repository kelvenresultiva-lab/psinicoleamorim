type AvatarVariant = "woman" | "mother" | "young-woman";

const SKIN = "#E8C9A0";
const HAIR = "#5C4433";

// Silhouettes ilustradas simples para diferenciar os perfis fictícios de depoimento.
function Hair({ variant }: { variant: AvatarVariant }) {
  if (variant === "woman") {
    return (
      <path
        d="M12 3.5c-3.3 0-5.8 2.4-5.8 5.7v3.6c0 .5.4.9.9.9h.4v-3.4c0-2.4 2-4.3 4.5-4.3s4.5 1.9 4.5 4.3v3.4h.4c.5 0 .9-.4.9-.9V9.2c0-3.3-2.5-5.7-5.8-5.7z"
        fill={HAIR}
      />
    );
  }
  if (variant === "mother") {
    return (
      <>
        <path
          d="M12 4.2c-2.6 0-4.7 1.9-4.7 4.4v1.2h9.4V8.6c0-2.5-2.1-4.4-4.7-4.4z"
          fill={HAIR}
        />
        <circle cx="12" cy="2.6" r="1.6" fill={HAIR} />
      </>
    );
  }
  return (
    <>
      <path
        d="M12 4.2c-2.6 0-4.7 1.9-4.7 4.4v1.2h9.4V8.6c0-2.5-2.1-4.4-4.7-4.4z"
        fill={HAIR}
      />
      <path d="M16.2 6c1.4.9 2 2.6 1.4 4.2-.3-1.2-.9-2.5-1.9-3.4z" fill={HAIR} />
    </>
  );
}

export default function ReviewAvatar({ variant }: { variant: AvatarVariant }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <circle cx="12" cy="9" r="4" fill={SKIN} />
      <path d="M4 21c0-4.5 3.6-8 8-8s8 3.5 8 8" fill={SKIN} />
      <Hair variant={variant} />
    </svg>
  );
}
