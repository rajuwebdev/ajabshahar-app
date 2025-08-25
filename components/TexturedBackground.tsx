export default function TexturedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "1140px auto", // match your design width
          backgroundRepeat: "repeat-y", // repeat vertically
          backgroundPosition: "center top",
        }}
      />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/80" />
    </div>
  );
}
