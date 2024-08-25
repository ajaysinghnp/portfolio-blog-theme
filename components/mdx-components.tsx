export const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-lg text-white">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-md text-zinc-300">
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-md text-zinc-300">
      {props.children}
    </h3>
  ),
  h4: (props: any) => (
    <h4 {...props} className="text-sm text-zinc-300">
      {props.children}
    </h4>
  ),
  p: (props: any) => (
    <p {...props} className="text-zinc-400">
      {props.children}
    </p>
  ),
  a: (props: any) => (
    <a {...props} className="text-purple-500 no-underline hover:underline">
      {props.children}
    </a>
  ),
}