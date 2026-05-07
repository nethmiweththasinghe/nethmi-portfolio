export default function Divider() {
  return (
    <div
      className="mx-8 md:mx-16"
      style={{
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, var(--color-subtle), transparent)",
      }}
    />
  );
}
