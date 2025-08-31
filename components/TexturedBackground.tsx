export default function TexturedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/layout-bg.svg")`,
          backgroundSize: "1360px auto", // match your design width
          backgroundRepeat: "repeat-y", // repeat vertically
          backgroundPosition: "center top",
        }}
      />

      {/* Light overlay for readability */}
      <div className="inset-0 " />
    </div>
  );
}
