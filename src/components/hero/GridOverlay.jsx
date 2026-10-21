const GridOverlay = () => {
  return (
    <>
      <div
        className="
        absolute
        inset-0
        opacity-40
        bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_10%,var(--color-paper)_75%)]
        "
      />
    </>
  );
};

export default GridOverlay;
