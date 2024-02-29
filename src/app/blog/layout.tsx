// A layout is UI that is shared between multiple pages.
// On navigation, layouts preserve state, remain interactive,
// and do not re-render. Layouts can also be nested.
// LAyouty są Server Components, lecz mogą być zmienione na client

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-16 bg-red-100 text-black">I am a part of a layout</div>
      <div className="h-16">{children}</div>
      <div className="h-16 bg-red-100 text-black">I am a part of a layout</div>
    </div>
  );
}
