// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <h1 className="px-2">
        <span> Hello there, </span>
        Welcome hotel 👋
      </h1>
    </div>
  );
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: any;

  beforeEach(async () => {
    render = (await import("@testing-library/react")).render;
  });

  it("should render successfully", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome hotel/gi)).toBeTruthy();
  });
}
